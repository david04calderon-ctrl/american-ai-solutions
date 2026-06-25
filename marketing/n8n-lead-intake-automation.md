# n8n Lead Intake Automation — Internal Bot Spec
**Purpose:** Every lead that hits the contact form is automatically enriched, scored, responded to, and tracked — without David touching it until a call is booked.
**Stack:** n8n 2.0 (self-hosted) + Claude Opus 4.8 API + HubSpot + Gmail + Calendly
**Build time:** ~8 hours (one afternoon)
**Value:** Saves 45–60 min per lead, ensures zero lead falls through

---

## WORKFLOW OVERVIEW

```
Netlify Form Submission
    ↓
n8n Webhook Trigger
    ↓
Claude Opus 4.8: Enrich + Score Lead
    ↓
HubSpot: Create/Update Contact + Deal
    ↓
Claude: Write Personalized Response Email
    ↓
Gmail: Send Response (from david@americanaisolutionsllc.com)
    ↓
Notify David (SMS via Twilio or Gmail to phone)
    ↓
[if score ≥ 7] Auto-schedule follow-up task in HubSpot
```

---

## NODE-BY-NODE BUILD GUIDE

### Node 1: Webhook Trigger
- **Type:** Webhook
- **URL:** Netlify sends form submissions to this URL
- **Setup in Netlify:** Site settings → Forms → contact → Add notification → Outgoing webhook
- **Webhook URL:** Your n8n instance URL + `/webhook/lead-intake`
- **Test:** Submit form on live site → check n8n execution log

**Data received from Netlify:**
```json
{
  "form_name": "contact",
  "data": {
    "name": "John Smith",
    "email": "john@smithmanufacturing.com",
    "company": "Smith Manufacturing Co",
    "message": "We're a Tier 2 supplier in Livonia. Our quality inspection process is manual and we're getting asked about AI from our Tier 1 customer."
  }
}
```

---

### Node 2: Claude Lead Enrichment + Scoring
- **Type:** HTTP Request (POST to Anthropic API)
- **Model:** claude-opus-4-8 (use latest version)
- **API Endpoint:** `https://api.anthropic.com/v1/messages`

**System prompt:**
```
You are the lead qualification AI for American AI Solutions LLC, a Detroit-based AI consulting firm.

You receive inbound contact form submissions and must:
1. Score the lead 1–10 on likelihood to become a paying client
2. Identify the industry vertical (automotive, healthcare, logistics, construction, other)
3. Extract the core pain point in one sentence
4. Identify urgency signals (if any)
5. Write a 2-sentence internal note for David summarizing the lead

Scoring criteria:
- 8–10: Clear pain + budget signal + Michigan business + decision maker
- 5–7: Clear pain, unclear budget or title
- 3–4: Vague inquiry, student, researcher
- 1–2: Spam, competitor, no fit

Return JSON only. No preamble.
```

**User message:**
```
Name: {{$json.data.name}}
Email: {{$json.data.email}}
Company: {{$json.data.company}}
Message: {{$json.data.message}}
```

**Expected output:**
```json
{
  "score": 9,
  "vertical": "automotive",
  "pain_point": "Manual quality inspection failing to meet OEM AI mandate requirements",
  "urgency": "high - Tier 1 customer is actively asking",
  "david_note": "Strong lead — Tier 2 supplier in Livonia facing OEM AI mandate. Clear pain, decision-maker title likely. Prioritize callback today."
}
```

---

### Node 3: HubSpot Contact + Deal Creation
- **Type:** HubSpot node (built into n8n)
- **Action:** Create or update contact + create deal

**Contact fields to set:**
- Email: `{{$json.data.email}}`
- First name: (parse from name field)
- Last name: (parse from name field)
- Company: `{{$json.data.company}}`
- Lead source: "Website Contact Form"
- Lead score: `{{$node.claude.json.score}}`
- Industry: `{{$node.claude.json.vertical}}`

**Deal fields:**
- Deal name: `{{company}} — AI Consulting Inquiry`
- Pipeline stage: "New Inquiry"
- Lead score: from Claude output
- Close date: 30 days out (default)

---

### Node 4: Claude Response Email Writer
- **Type:** HTTP Request (POST to Anthropic API)
- **Model:** claude-opus-4-8

**System prompt:**
```
You are David Calderon, founder of American AI Solutions LLC in Detroit, Michigan.

Write a personalized, warm, professional email response to an inbound lead. The email should:
- Reference their specific situation (use the pain_point and vertical from enrichment)
- Mention the free strategy call offer
- Be 100–150 words maximum
- Feel like it was written by a real person, not an AI
- End with a Calendly booking link: https://calendly.com/david04calderon/ai-strategy-call
- Be genuine — if their situation is a strong fit, say so directly
- Sign as: David Calderon | American AI Solutions LLC | Detroit, MI

Do NOT use generic phrases like "I hope this email finds you well."
Do NOT mention AI, machine learning, or automation tools in a jargon-heavy way.
Speak like a fellow business owner who solves real problems.
```

**User message:**
```
Respond to this lead:
Name: {{$json.data.name}}
Company: {{$json.data.company}}
Message: {{$json.data.message}}
Pain point (from enrichment): {{$node.score.json.pain_point}}
Vertical: {{$node.score.json.vertical}}
Urgency: {{$node.score.json.urgency}}
```

---

### Node 5: Gmail Send
- **Type:** Gmail node
- **From:** david@americanaisolutionsllc.com
- **To:** `{{$json.data.email}}`
- **Subject:** `Re: Your message to American AI Solutions`
- **Body:** `{{$node.email_writer.json.content[0].text}}`
- **Reply-to:** david@americanaisolutionsllc.com

---

### Node 6: David Notification (SMS or email to phone)
- **Option A — Twilio SMS** (best):
  - Type: HTTP Request to Twilio API
  - Message: `New lead: {{company}} | Score: {{score}}/10 | {{vertical}} | {{david_note}}`
  - Twilio: $15/month, setup 15 min

- **Option B — Gmail to SMS gateway** (free):
  - T-Mobile: phonenumber@tmomail.net
  - AT&T: phonenumber@txt.att.net
  - Message body: same as above

---

### Node 7: Conditional — High-Score Follow-up Task
- **Type:** IF node
- **Condition:** `{{$node.score.json.score}} >= 7`
- **If true → HubSpot Task:**
  - Task title: `Call {{name}} at {{company}} — Score {{score}}/10`
  - Due date: today + 4 hours (if submitted before 2pm) or tomorrow 9am
  - Priority: HIGH
  - Note: `{{david_note}}`

---

## SELF-HOSTING N8N (cheapest/fastest path)

### Option A: DigitalOcean Droplet ($12/month)
```bash
# Create a $12/mo droplet (Ubuntu 22.04, 2GB RAM)
# SSH in, then:

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh

# Run n8n
docker run -d \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  -e N8N_BASIC_AUTH_ACTIVE=true \
  -e N8N_BASIC_AUTH_USER=admin \
  -e N8N_BASIC_AUTH_PASSWORD=yourpassword \
  --restart always \
  n8nio/n8n

# n8n is now at http://your-droplet-ip:5678
# Add a domain: n8n.americanaisolutionsllc.com → Cloudflare proxy → droplet IP
```

### Option B: Render.com ($7/month, no SSH needed)
- Deploy n8n as a web service on render.com
- Docker image: `n8nio/n8n`
- Auto-scales, managed SSL

---

## CREDENTIALS TO SET UP IN N8N

| Service | Where to get | Used for |
|---|---|---|
| Anthropic API key | console.anthropic.com | Claude calls |
| HubSpot Private App token | HubSpot → Settings → Integrations | CRM updates |
| Gmail OAuth | Google Cloud Console | Sending email |
| Twilio (optional) | twilio.com | SMS alerts |

---

## ESTIMATED COST TO RUN

| Component | Cost |
|---|---|
| n8n (DigitalOcean) | $12/month |
| Claude API (Opus 4.8) | ~$0.05 per lead processed |
| Twilio SMS | ~$0.01 per SMS |
| **Total at 200 leads/month** | **~$22/month** |

This replaces a human VA doing the same work for $800–$2,000/month.

---

## PHASE 2 UPGRADES (add after first 30 days)

1. **LinkedIn scraper node** — when a lead submits, auto-pull their LinkedIn profile for additional context
2. **Proposal draft trigger** — if score ≥ 9 AND call is booked, auto-draft a 1-page proposal outline in Google Docs
3. **CRM enrichment waterfall** — Clearbit → Apollo → LinkedIn (in that order, stops when data found)
4. **Slack notification** — post to a private Slack channel with lead card (good for when you add team members)
5. **Follow-up sequence trigger** — 3 days after form submit with no call booked → send a follow-up email automatically
