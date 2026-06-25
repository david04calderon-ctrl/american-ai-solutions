# Tech Stack Integration Map
# American AI Solutions LLC

**Purpose:** Every tool in the business stack needs to connect to every other tool — or you end up doing manually what the machines should be doing. This document maps every integration, every data flow, and every automation between all tools in the AAIS business operation.
**Rule:** If you're doing something manually that could be automated with a tool you already pay for, fix it within 48 hours.
**Use this document:** When onboarding any new team member, when evaluating a new tool, and when debugging why data isn't flowing where it should.

---

## THE MASTER TOOL LIST

| Tool | Category | Cost | Purpose |
|------|----------|------|---------|
| **HubSpot Starter** | CRM + Email | $50/month | Pipeline, contact records, sequences, deal tracking |
| **Clay** | Prospect enrichment | $149/month (Starter) | Find and enrich leads from 75+ sources |
| **Instantly.ai** | Cold email | $37/month | Cold email sequences at scale, deliverability optimization |
| **Fathom** | Call recording | Free | Transcription, action items, meeting notes |
| **Pandadoc** | Proposals + e-sign | $49/month | Proposals, SOWs, contracts, open tracking |
| **Calendly** | Scheduling | $10/month | Discovery call booking, automated reminders |
| **Stripe** | Payments | 2.9% + $0.30 | Invoice + online payment processing |
| **HoneyBook** | Client portal | $40/month | Project management, client communication, payment milestones |
| **n8n** | Workflow automation | $12–50/month (server) | Custom automations, AI workflows, system integrations |
| **Claude API** | AI reasoning | ~$0.01–0.05/call | AI reasoning, generation, analysis in client automations |
| **Linear** | Project tracking | $8/user/month | Sprint planning, project tasks, bug tracking |
| **Loom** | Async video | Free/$15/month | Sales videos, proposal walk-throughs, client training |
| **Canva** | Design | $15/month | Carousels, banner images, case study graphics |
| **Netlify** | Website hosting | Free/Pro | americanaisolutionsllc.com, Netlify Forms |
| **Google Workspace** | Email + Docs | $12/user/month | david@americanaisolutionsllc.com, Google Drive, Docs |
| **LinkedIn Premium** | Social selling | $60/month | InMail, Sales Navigator (when ready), company page analytics |

**Total monthly stack cost (estimated):** ~$440–$500/month before client project costs
**At first client:** Stack pays for itself if that client pays a $500 retainer

---

## THE DATA FLOW MAP

### INBOUND LEAD FLOW

```
Prospect sees LinkedIn post / blog / Google search
        ↓
Lands on americanaisolutionsllc.com (Netlify)
        ↓
Clicks "Book Free Strategy Call" → Calendly
        ↓
Calendly sends them a confirmation email + reminder
        ↓
Calendly → HubSpot contact created automatically (via Calendly-HubSpot integration)
        ↓
HubSpot assigns deal stage: "Discovery Scheduled"
        ↓
HubSpot sends pre-call intake form (linked to pre-call-intake-form.md template)
        ↓
Discovery call with Fathom recording + transcription
        ↓
Fathom sends transcript to david@americanaisolutionsllc.com
        ↓
David logs call notes in HubSpot, scores lead, advances stage
```

### OUTBOUND LEAD FLOW

```
David identifies prospect (LinkedIn, FMCSA, NPI, NAICS directory)
        ↓
Enriches contact in Clay (finds email, phone, company details)
        ↓
Clay pushes enriched contact → Instantly.ai (cold email)
        ↓
Instantly.ai sends 4-email vertical-specific sequence over 14 days
        ↓
Prospect replies → Instantly.ai marks as "replied"
        ↓
David manually moves replied prospect → HubSpot (or Clay → HubSpot push if integrated)
        ↓
HubSpot deal created, stage: "Replied to Outreach"
        ↓
David books discovery call via Calendly link in email
```

### PROPOSAL AND CLOSE FLOW

```
Discovery call completed → David decides to send proposal
        ↓
HubSpot stage → "Qualified"
        ↓
David builds proposal in Pandadoc (template by vertical)
        ↓
Pandadoc sends proposal with open tracking enabled
        ↓
HubSpot stage → "Proposal Sent"
        ↓
Pandadoc view notification → David's email (and HubSpot if webhook connected)
        ↓
If opened 3+ times → David calls (same day, see proposal-follow-up-system.md)
        ↓
Follow-up sequence: Days 3, 7, 14, 21, 30 (see proposal-follow-up-system.md)
        ↓
Prospect signs in Pandadoc → David gets notification
        ↓
HubSpot stage → "Won"
        ↓
David invoices 50% deposit via Stripe
        ↓
Stripe payment confirmation → David's email
        ↓
Kickoff email sent (client-onboarding-sop.md template)
        ↓
HoneyBook project created for client management
```

### CLIENT PROJECT FLOW

```
Project kickoff call (Calendly or Google Meet, Fathom records)
        ↓
Fathom transcript → David reviews action items
        ↓
Linear project created → sprint tasks added
        ↓
Build phase: n8n + Claude API + client's systems
        ↓
Weekly check-in via Google Meet (Fathom records every call)
        ↓
Delivery call + training (Loom video recorded for client reference)
        ↓
Final invoice (50% balance) via Stripe
        ↓
HoneyBook project marked complete
        ↓
HubSpot: 30-day check-in task created
        ↓
30-day check-in call (Fathom records)
        ↓
HubSpot: 90-day check-in task created
        ↓
90-day results call → results metrics captured → expansion conversation
```

---

## TOOL-BY-TOOL INTEGRATION GUIDE

### HubSpot → Calendly (Native Integration)

**What it does:** Every time someone books a Calendly meeting, a HubSpot contact is automatically created (or updated), and a deal is created in the configured pipeline stage.

**Setup:**
1. HubSpot → Integrations → Calendly → Connect
2. Configure: When meeting booked → Create/update contact → Create deal in [pipeline] → Stage: "Discovery Scheduled"
3. Map fields: Calendly name/email → HubSpot contact name/email

**What flows automatically:**
- Contact name, email, company (if collected in Calendly)
- Meeting time (logged as an Activity in HubSpot)
- Meeting outcome (attended/no-show — Calendly tracks this)

---

### HubSpot → Pandadoc (Native Integration)

**What it does:** Create Pandadoc proposals directly from HubSpot deal records — contact info pre-fills into the proposal template.

**Setup:**
1. HubSpot → App Marketplace → Pandadoc → Install
2. In HubSpot deal record → "Create document" → select Pandadoc template

**What flows automatically:**
- Contact name, company, email pre-fill into proposal template
- When document is viewed → activity logged in HubSpot
- When document is signed → deal stage can auto-advance to "Contract Signed"

**Manual step:** David still reviews and sends the proposal — not fully automated, which is correct. Proposals need a human eye before they go out.

---

### Pandadoc → HubSpot (Webhook)

**What it does:** Every time a prospect views the Pandadoc proposal, a HubSpot activity is logged and David gets a notification.

**Setup:**
1. Pandadoc → Settings → Notifications → Email me when document is viewed
2. Pandadoc → Settings → Integrations → HubSpot → Enable → map events to deal stage changes

**Trigger setup in HubSpot:**
- Document Viewed (first time) → Change deal stage to "Proposal Opened" → Create task: "Call [Name] today"
- Document Viewed (3+ times) → Create task: "High intent — call immediately"
- Document Signed → Change stage to "Won" → Create task: "Send kickoff email + invoice"

---

### Clay → Instantly.ai (Native Integration)

**What it does:** Prospects David finds and enriches in Clay push directly into Instantly.ai campaigns with all contact data and personalization variables pre-filled.

**Setup:**
1. Clay → Integrations → Instantly → Connect (API key)
2. In Clay table → push to Instantly campaign → map fields: email, first name, company, vertical-specific personalization variable

**What flows automatically:**
- Contact email + first name + company
- Personalization variables (e.g., "{{company_specialty}}", "{{pain_point_detected}}")
- Campaign assignment (auto-assign to the correct vertical campaign)

---

### Instantly.ai → HubSpot (Via Zapier or Native)

**What it does:** When a prospect replies to a cold email in Instantly.ai, push them to HubSpot as a new contact with deal.

**Native option:** Instantly.ai has a HubSpot integration (check current tier for availability)

**Zapier fallback:**
1. Trigger: Instantly.ai → "Reply received"
2. Action: HubSpot → Create/update contact with email
3. Action 2: HubSpot → Create deal, stage: "Replied to Outreach"
4. Action 3: Send David a Slack/email notification with the reply text

---

### Calendly → Automated Pre-Call Email (Via HubSpot Workflow)

**What it does:** When a discovery call is booked, HubSpot automatically sends the intake form email within 5 minutes.

**Setup:**
1. HubSpot → Workflows → Create → Contact-based
2. Trigger: Contact is enrolled in "Discovery Scheduled" stage
3. Action 1: Wait 5 minutes
4. Action 2: Send email → "Pre-Call Intake Form" template (from pre-call-intake-form.md)
5. Action 3: Create task for David: "Review intake form before call"

---

### Fathom → HubSpot (Manual — Until Integration Available)

Fathom doesn't have a native HubSpot integration as of June 2026. Current workflow:

1. After every Fathom call: Open transcript in Fathom
2. Copy the "Action Items" section generated by Fathom's AI
3. Paste into HubSpot deal → Notes → Add note
4. Update deal stage if appropriate

**Automation option (n8n):**
- Fathom sends email with transcript to david@americanaisolutionsllc.com
- n8n watches Gmail inbox → detects Fathom email → extracts transcript → pushes to HubSpot note via API
- This is a 30-minute n8n build (internal automation for AAIS's own operation)

---

### Stripe → HubSpot (Via Zapier)

**What it does:** When Stripe receives a payment, HubSpot deal is updated and a task is created for the next step.

**Zapier workflow:**
1. Trigger: Stripe → Payment succeeded
2. Action: Find HubSpot deal by customer email
3. Action 2: Update deal property "Payment received" = true
4. Action 3: HubSpot → Create task: "[Deal name] — 50% deposit received. Start project."

---

### Google Workspace → Everything

**Gmail:** Primary communication hub. All tool notifications go to david@americanaisolutionsllc.com. Use Gmail filters to organize:
- Filter: From *pandadoc.com → Label: "Pandadoc Alerts"
- Filter: From *fathom.video → Label: "Call Recordings"
- Filter: From *instantly.ai → Label: "Outreach Replies"
- Filter: From *calendly.com → Label: "Bookings"
- Filter: From *stripe.com → Label: "Payments"

**Google Drive:** Store all client project files in organized folders:
```
AAIS Projects/
  ├── [Client Name] — [Vertical] — [Year]/
  │   ├── Discovery Call Notes.gdoc
  │   ├── Proposal (Pandadoc copy)
  │   ├── SOW
  │   ├── Project Files/
  │   ├── Handoff Documentation/
  │   └── Results Metrics.gsheet
```

**Google Meet:** Primary video call platform (included in Workspace). Fathom installs as a Chrome extension and records automatically when you join a Meet call.

---

## THE N8N AUTOMATION LAYER (AAIS Internal)

n8n on your DigitalOcean server handles automations too custom for native integrations. Priority internal workflows to build for AAIS's own operation:

### Internal Automation 1: Lead Intake Pipeline

**Trigger:** Netlify form submission (contact form on americanaisolutionsllc.com)
**Workflow:**
1. Parse form data (name, email, company, message)
2. Claude API call → score the lead (0–10) based on message content
3. Create HubSpot contact with lead score
4. Create HubSpot deal in "Inbound Inquiry" stage
5. Send David a formatted Slack/email notification with the lead score and recommended response
6. If score ≥ 7: Send the prospect an immediate auto-reply email saying David will be in touch within 2 hours

*(Full spec in n8n-lead-intake-automation.md)*

### Internal Automation 2: Fathom → HubSpot Sync

**Trigger:** Fathom email with transcript arrives in Gmail
**Workflow:**
1. n8n Gmail node watches inbox for Fathom sender
2. Extract meeting title (contains deal name) + action items text
3. Claude API → parse action items into structured list
4. HubSpot API → find deal by name → add note with action items + transcript link

### Internal Automation 3: Pandadoc View Alert Enrichment

**Trigger:** Pandadoc webhook fires "document viewed"
**Workflow:**
1. Pull the contact info from HubSpot deal
2. Check if it's been viewed 3+ times
3. If yes: Send David an SMS (via Twilio) with the prospect's name and phone number
4. Log a "High intent" activity in HubSpot

### Internal Automation 4: Grant Deadline Reminder

**Trigger:** Scheduled (monthly, first Monday)
**Workflow:**
1. Check which quarter's Going PRO cycle is approaching
2. Pull all HubSpot deals in "Proposal Sent" or "Negotiating" stage
3. Send David a digest: "[X] deals in pipeline — Going PRO [Q] cycle closes [date]. Prioritize these."

---

## TOOL UPGRADE PATH

As revenue grows, these upgrades unlock more power:

| Current | When to upgrade | Upgrade to | Benefit |
|---------|----------------|-----------|---------|
| HubSpot Starter | $10K/month MRR | HubSpot Professional | Sequences automation, predictive lead scoring |
| Clay Starter | 500+ contacts/month | Clay Pro ($349/month) | More credits, AI personalization |
| Instantly.ai Starter | 5,000+ emails/month | Instantly.ai Growth | More sending accounts, analytics |
| LinkedIn free | 100+ connections/month | Sales Navigator ($100/month) | Advanced filters, lead lists, saved searches |
| Stripe flat | $30K+/month processing | Stripe Billing | Subscription management for retainers |
| Canva Pro | >5 designs/week | Canva Teams | Brand kit, team collaboration |

**One rule on new tools:** Don't add a tool until you can articulate exactly which manual process it replaces and how the ROI exceeds the cost within 60 days.

---

## SECURITY AND DATA PRACTICES

**Passwords:** Use 1Password or Bitwarden for all tool credentials. Never reuse passwords. Never store credentials in a Google Doc.

**Client data:** All client data used in AI systems must be:
- Healthcare: Under a signed BAA with any AI vendor that processes PHI (Anthropic API ✅, Claude.ai consumer ❌)
- Manufacturing: Firewall-separated from public internet; check client IATF requirements before connecting external APIs
- Logistics: FMCSA-regulated driver data treated as PII — minimize what's sent to external APIs

**n8n server:** Self-hosted on DigitalOcean. Enable:
- 2FA on DigitalOcean account
- SSH key authentication (no password login)
- Daily automated backups of n8n database
- Firewall: only allow n8n traffic from known IPs (Zapier, HubSpot, Pandadoc webhook IPs)

**API keys:** Store all API keys (Claude, OpenAI, HubSpot, Stripe) as n8n environment variables — never hardcoded in workflow nodes.
