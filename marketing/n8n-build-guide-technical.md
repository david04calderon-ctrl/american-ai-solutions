# n8n Lead Intake — Technical Build Guide
# American AI Solutions LLC

**Purpose:** Node-by-node build instructions for deploying the lead intake automation on DigitalOcean.
**Stack:** n8n (Docker) → Claude Haiku 4.5 (scoring) → HubSpot Starter → Slack + SMS
**Prerequisites:** DigitalOcean droplet running, n8n-lead-intake-automation.md reviewed
**Build time:** 4–6 hours first time; 1 hour if you've done it before

---

## ARCHITECTURE

```
Any lead source (website form / Calendly / Instantly reply / manual)
        ↓
n8n Webhook (universal ingestion point)
        ↓
Data normalization (Code node — all sources → same schema)
        ↓
Claude Haiku 4.5 — AI scoring + pain summary (< 1 second, ~$0.001/lead)
        ↓
HubSpot — create/update contact + deal (with AI score properties)
        ↓
Route by score:
  Score ≥ 7 → Slack HOT alert + SMS to David
  Score < 7 → HubSpot task, 48hr follow-up
        ↓
Daily 7am digest (separate scheduled workflow)
```

---

## STEP 1: DEPLOY n8n ON DIGITALOCEAN

### Create Droplet
- Size: Basic, 2 GB RAM / 1 CPU / 50 GB SSD — $12/month
- Region: New York (closest to Detroit with good latency)
- OS: Ubuntu 22.04 LTS
- Add your SSH key during setup

### Install Docker + n8n

```bash
# SSH into droplet
ssh root@YOUR_DROPLET_IP

# Install Docker
curl -fsSL https://get.docker.com | sh

# Create data directory
mkdir -p /opt/n8n-data

# Generate a strong auth password (save it)
openssl rand -base64 24

# Start n8n
docker run -d \
  --name n8n \
  --restart unless-stopped \
  -p 5678:5678 \
  -e N8N_BASIC_AUTH_ACTIVE=true \
  -e N8N_BASIC_AUTH_USER=admin \
  -e N8N_BASIC_AUTH_PASSWORD=YOUR_STRONG_PASSWORD \
  -e WEBHOOK_URL=https://n8n.americanaisolutionsllc.com \
  -v /opt/n8n-data:/home/node/.n8n \
  n8nio/n8n
```

### Configure SSL with Caddy

```bash
# Install Caddy
apt install -y apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | \
  gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/caddy-stable-archive-keyring.gpg] \
  https://dl.cloudsmith.io/public/caddy/stable/deb/debian any-version main" | \
  tee /etc/apt/sources.list.d/caddy-stable.list
apt update && apt install caddy

# Create Caddyfile
cat > /etc/caddy/Caddyfile << 'EOF'
n8n.americanaisolutionsllc.com {
    reverse_proxy localhost:5678
}
EOF

systemctl reload caddy
```

**DNS:** Add an A record → `n8n.americanaisolutionsllc.com` pointing to your droplet IP.

n8n is now live at `https://n8n.americanaisolutionsllc.com`.

---

## STEP 2: SET ENVIRONMENT VARIABLES IN n8n

In n8n UI: Settings (gear icon) → Environment Variables → Add:

| Variable | Value | Where to get it |
|---|---|---|
| `ANTHROPIC_API_KEY` | `sk-ant-...` | console.anthropic.com → API Keys |
| `HUBSPOT_TOKEN` | `pat-na1-...` | HubSpot → Settings → Private Apps |
| `SLACK_WEBHOOK` | `https://hooks.slack.com/...` | Slack → Apps → Incoming Webhooks |
| `TWILIO_SID` | `ACxxxx` | twilio.com → Console |
| `TWILIO_TOKEN` | your auth token | twilio.com → Console |
| `TWILIO_FROM` | `+13135550100` | Your Twilio number |
| `DAVID_PHONE` | `+13135551234` | Your actual mobile |
| `WEBHOOK_SECRET` | `random-32-chars` | `openssl rand -hex 16` |

---

## STEP 3: BUILD WORKFLOW — NODE BY NODE

Open n8n UI → New Workflow → name it "Lead Intake v1"

### Node 1: Webhook Trigger
- **Type:** Webhook
- **HTTP Method:** POST
- **Path:** `lead-intake`
- **Authentication:** Header Auth
  - Name: `X-Webhook-Secret`
  - Value: `{{ $env.WEBHOOK_SECRET }}`
- **Response:** Immediately (respond with 200 immediately, process async)

Full URL will be: `https://n8n.americanaisolutionsllc.com/webhook/lead-intake`

---

### Node 2: Code — Normalize Lead Data

Connect to Node 1 output.

```javascript
const raw = $json;

// Detect source
function detectSource(data) {
  if (data.form_name || data.data?.name) return 'website';
  if (data.event?.includes('invitee')) return 'calendly';
  if (data.reply_text || data.from_email) return 'instantly';
  return 'manual';
}

function detectVertical(text) {
  const t = (text || '').toLowerCase();
  if (/auto|supplier|oem|ford|gm|stellantis|tier.?[23]|manufacturing|stamping|welding/.test(t)) return 'automotive';
  if (/health|medical|clinic|practice|hipaa|patient|prior.?auth|dental|physician/.test(t)) return 'healthcare';
  if (/truck|fleet|dispatch|freight|logistics|carrier|driver|deadhead|haul/.test(t)) return 'logistics';
  if (/construct|contractor|gc|estimat|permit|trade|plumb|electric|hvac|mechanic/.test(t)) return 'construction';
  return 'general';
}

const source = detectSource(raw);
let lead = { source };

if (source === 'website') {
  const d = raw.data || raw;
  lead = {
    ...lead,
    name: d.name || '',
    email: d.email || '',
    phone: d.phone || '',
    company: d.company || '',
    message: d.message || '',
    vertical: detectVertical((d.message || '') + ' ' + (d.company || '')),
    call_booked: false,
    call_time: null,
    utm_source: d.utm_source || 'direct'
  };
} else if (source === 'calendly') {
  const qa = raw.payload?.questions_and_answers || [];
  const ans = (kw) => (qa.find(q => (q.question || '').toLowerCase().includes(kw)) || {}).answer || '';
  const msg = ans('challenge') || ans('pain') || ans('operational') || '';
  const co = ans('company') || '';
  lead = {
    ...lead,
    name: raw.payload?.name || '',
    email: raw.payload?.email || '',
    phone: '',
    company: co,
    message: msg,
    vertical: detectVertical(msg + ' ' + co),
    call_booked: true,
    call_time: raw.payload?.scheduled_event?.start_time || null,
    utm_source: 'calendly'
  };
} else if (source === 'instantly') {
  lead = {
    ...lead,
    name: raw.contact_name || raw.from_name || '',
    email: raw.from_email || '',
    phone: '',
    company: raw.company_name || '',
    message: raw.reply_text || '',
    vertical: detectVertical((raw.reply_text || '') + ' ' + (raw.campaign_tag || '')),
    call_booked: false,
    call_time: null,
    utm_source: 'cold_email'
  };
}

return [{ json: lead }];
```

---

### Node 3: HTTP Request — Claude Haiku 4.5 Scoring

- **Type:** HTTP Request
- **Method:** POST
- **URL:** `https://api.anthropic.com/v1/messages`

**Headers:**
```
x-api-key: ={{ $env.ANTHROPIC_API_KEY }}
anthropic-version: 2023-06-01
content-type: application/json
```

**Body (JSON):**
```json
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 256,
  "messages": [{
    "role": "user",
    "content": "Score this lead for American AI Solutions LLC (Detroit AI consulting for Michigan manufacturers, healthcare, logistics, construction).\n\nLead:\n- Name: {{ $json.name }}\n- Company: {{ $json.company }}\n- Source: {{ $json.source }}\n- Vertical: {{ $json.vertical }}\n- Message: {{ $json.message }}\n- Call already booked: {{ $json.call_booked }}\n\nReturn ONLY this JSON (no other text):\n{\"score\":5,\"urgency\":\"warm\",\"pain\":\"one sentence\",\"action\":\"one sentence\",\"flags\":\"none or concern\"}\n\nScore 1-10: 9-10=clear pain+authority+ready, 7-8=clear pain+likely DM, 5-6=interested unclear, 3-4=researching, 1-2=not a fit/spam"
  }]
}
```

---

### Node 4: Code — Parse Score

```javascript
const lead = $('Node 2 - Normalize').first().json;
const raw = $json.content?.[0]?.text || '{}';

let score = { score: 5, urgency: 'warm', pain: 'N/A', action: 'Follow up within 48hrs', flags: 'none' };
try {
  const match = raw.match(/\{[\s\S]*?\}/);
  if (match) score = { ...score, ...JSON.parse(match[0]) };
} catch(e) {}

return [{ json: { ...lead, ...score, ai_raw: raw } }];
```

---

### Node 5: HTTP Request — HubSpot Upsert Contact

First check if contact exists (use Search endpoint), then create or update.

**Search first:**
- Method: POST
- URL: `https://api.hubapi.com/crm/v3/objects/contacts/search`
- Auth header: `Authorization: Bearer {{ $env.HUBSPOT_TOKEN }}`
- Body:
```json
{
  "filterGroups": [{
    "filters": [{
      "propertyName": "email",
      "operator": "EQ",
      "value": "{{ $json.email }}"
    }]
  }]
}
```

**IF node:** Check `{{ $json.total }}` > 0
- True → PATCH existing contact
- False → POST new contact

**Create contact body:**
```json
{
  "properties": {
    "firstname": "={{ $json.name.split(' ')[0] }}",
    "lastname": "={{ $json.name.split(' ').slice(1).join(' ') || '' }}",
    "email": "={{ $json.email }}",
    "phone": "={{ $json.phone }}",
    "company": "={{ $json.company }}",
    "leadsource": "={{ $json.source }}",
    "lead_score__c": "={{ $json.score }}",
    "vertical__c": "={{ $json.vertical }}",
    "pain_point__c": "={{ $json.pain }}",
    "urgency__c": "={{ $json.urgency }}",
    "hs_lead_status": "NEW"
  }
}
```

---

### Node 6: HTTP Request — HubSpot Create Deal

- Method: POST
- URL: `https://api.hubapi.com/crm/v3/objects/deals`
- Body:
```json
{
  "properties": {
    "dealname": "={{ $json.company || $json.name }} — {{ $json.vertical }} AI",
    "dealstage": "new_lead",
    "pipeline": "default",
    "amount": "",
    "lead_score__c": "={{ $json.score }}"
  }
}
```

After creating, associate deal to contact via:
`POST https://api.hubapi.com/crm/v4/objects/deals/{{dealId}}/associations/contacts/{{contactId}}`

---

### Node 7: IF — Score Router

- **Condition:** `{{ $json.score }}` >= 7

**True → Hot Lead path**
**False → Warm/Cold path**

---

### Node 8A: HTTP Request — Slack Hot Alert

- Method: POST
- URL: `={{ $env.SLACK_WEBHOOK }}`
- Body:
```json
{
  "text": "🔥 *HOT LEAD — {{ $json.score }}/10 ({{ $json.urgency }})*\n\n*{{ $json.name }}* | {{ $json.company }}\n📧 {{ $json.email }} | 📞 {{ $json.phone }}\n🏭 {{ $json.vertical }} | via {{ $json.source }}\n\n*Pain:* {{ $json.pain }}\n*Action:* {{ $json.action }}\n*Flags:* {{ $json.flags }}\n{{ $json.call_booked ? '✅ Call booked: ' + $json.call_time : '⚡ No call yet — contact within 2 hours' }}"
}
```

---

### Node 8A-2: HTTP Request — Twilio SMS

- Method: POST
- URL: `https://api.twilio.com/2010-04-01/Accounts/{{ $env.TWILIO_SID }}/Messages.json`
- Authentication: Basic Auth (TWILIO_SID / TWILIO_TOKEN)
- Body type: Form-Data
```
To: ={{ $env.DAVID_PHONE }}
From: ={{ $env.TWILIO_FROM }}
Body: HOT LEAD ({{ $json.score }}/10): {{ $json.name }}, {{ $json.company }}, {{ $json.vertical }}. {{ $json.email }}. {{ $json.call_booked ? 'Call booked.' : 'No call yet.' }}
```

---

### Node 8B: HTTP Request — HubSpot Task (Warm/Cold)

- Method: POST
- URL: `https://api.hubapi.com/crm/v3/objects/tasks`
- Body:
```json
{
  "properties": {
    "hs_task_subject": "Follow up: {{ $json.name }} ({{ $json.company }}) — Score {{ $json.score }}/10",
    "hs_task_body": "Pain: {{ $json.pain }}\nRecommended action: {{ $json.action }}\nRed flags: {{ $json.flags }}",
    "hs_timestamp": "={{ $now.plus({hours: 48}).toMillis() }}",
    "hs_task_priority": "{{ $json.score >= 5 ? 'MEDIUM' : 'LOW' }}",
    "hs_task_type": "CALL"
  }
}
```

---

## STEP 4: BUILD DAILY DIGEST WORKFLOW (Separate)

Create a second workflow: "Daily Lead Digest"

**Nodes:**
1. **Schedule Trigger** — Every weekday at 7:00 AM EST
2. **HTTP Request** — HubSpot Search: deals created in last 24 hours
   ```json
   {
     "filterGroups": [{
       "filters": [{
         "propertyName": "createdate",
         "operator": "GTE",
         "value": "={{ $now.minus({hours: 24}).toMillis() }}"
       }]
     }],
     "properties": ["dealname", "dealstage", "lead_score__c"],
     "limit": 50
   }
   ```
3. **Code** — Format digest text
4. **HTTP Request** — Post to Slack

---

## STEP 5: CONNECT LEAD SOURCES

### Website form (Netlify)
Netlify Dashboard → Forms → contact → Form Notifications → Add notification:
- Type: Webhook
- URL: `https://n8n.americanaisolutionsllc.com/webhook/lead-intake`
- Add header: `X-Webhook-Secret: your-secret`

### Calendly
Calendly → Integrations → Webhooks → New Webhook:
- Subscription URL: `https://n8n.americanaisolutionsllc.com/webhook/lead-intake`
- Events: `invitee.created`

### Instantly.ai
Instantly → Settings → Integrations → Webhooks:
- URL: `https://n8n.americanaisolutionsllc.com/webhook/lead-intake`
- Events: reply received, positive reply

---

## STEP 6: TEST

```bash
# Test website source
curl -X POST https://n8n.americanaisolutionsllc.com/webhook/lead-intake \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Secret: your-secret" \
  -d '{
    "form_name": "contact",
    "data": {
      "name": "Tom Kowalski",
      "email": "tkowalski@michiganstamping.com",
      "company": "Michigan Stamping Co",
      "phone": "313-555-0199",
      "message": "We are a Tier 2 supplier to GM and Ford, 85 employees. Our quality inspection is all paper-based and we just failed an audit. We need to fix this fast.",
      "utm_source": "google"
    }
  }'
```

**Expected within 10 seconds:**
- n8n execution completes successfully
- HubSpot contact created: Tom Kowalski, score 8-9 (clear pain, authority signal, urgency)
- Slack message: "🔥 HOT LEAD — 9/10"
- SMS to your phone

---

## MONTHLY OPERATING COST

| Item | Cost |
|---|---|
| DigitalOcean Droplet | $12.00 |
| Anthropic Haiku (100 leads × $0.001) | $0.10 |
| Twilio SMS (~30 hot leads) | ~$0.40 |
| **Total** | **~$12.50/month** |

---

## TROUBLESHOOTING

**Webhook not receiving:**
- Check n8n execution log (left sidebar)
- Verify firewall: `ufw status` — port 443 should be open
- Test with curl from your machine

**Claude not returning valid JSON:**
- Add try/catch in Node 4 (already included above)
- Check n8n execution output → Node 3 → response body

**HubSpot 401:**
- Private App token has likely expired or wrong scopes
- Required scopes: `crm.objects.contacts.write`, `crm.objects.deals.write`, `crm.objects.tasks.write`

**Docker container stopped:**
- `docker ps` — check status
- `docker logs n8n` — see errors
- `docker restart n8n` — restart

**n8n out of memory:**
- Upgrade DigitalOcean droplet to 4GB RAM ($24/month) if handling >500 executions/day
