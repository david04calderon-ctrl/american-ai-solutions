# HubSpot CRM Setup Guide — American AI Solutions LLC
**Plan:** HubSpot Starter ($20/month — Marketing + CRM)
**Purpose:** Track every lead, every conversation, every deal from first contact to closed client
**Philosophy:** The CRM is the business. If it's not in HubSpot, it didn't happen.

---

## STEP 1: ACCOUNT SETUP (30 minutes)

### Create Your Account
1. Go to hubspot.com → "Get started free" → start with the free plan
2. Company: American AI Solutions LLC
3. Industry: IT Services & Consulting
4. Company size: 1–5 employees
5. Upgrade to Starter ($20/month) when you're ready to send sequences — free plan is fine for first 30 days

### Initial Settings
**Settings → General:**
- Company name: American AI Solutions LLC
- Time zone: Eastern Time (Detroit)
- Currency: USD
- Fiscal year start: January (or your actual fiscal year)

**Settings → Users:**
- Set David Calderon as the primary admin
- Add the BDR when you hire them

**Settings → Integrations:**
- Connect Gmail (david@americanaisolutionsllc.com) — required for email tracking
- Connect Google Calendar — required for meeting logging
- Connect Calendly — this auto-logs booked meetings as activities

---

## STEP 2: CONTACT PROPERTIES (custom fields to add)

Go to Settings → Properties → Contact Properties → Create Property

Create these custom fields:

| Property Name | Type | Options |
|---|---|---|
| Lead Score | Number | (from Claude n8n scoring: 1–10) |
| Vertical | Dropdown | Automotive, Healthcare, Logistics, Construction, Other |
| Pain Point | Multi-line Text | (filled from discovery call notes) |
| Urgency | Dropdown | High, Medium, Low |
| Grant Eligible | Checkbox | (does this client qualify for Going PRO / Industry 4.0?) |
| Grant Type | Dropdown | Going PRO, Industry 4.0, Michigan Health Fund, SBA, Other, N/A |
| Decision Maker | Dropdown | Yes, No, Influencer |
| Referred By | Single-line Text | Name of the referral partner or source |
| LinkedIn URL | URL | (for sales research) |
| n8n Score | Number | (the raw score from the automation) |

---

## STEP 3: DEAL PIPELINE SETUP

Go to Sales → Deals → Pipelines → Add pipeline: "Consulting Pipeline"

Create these stages in order:

| Stage | Meaning | Probability |
|---|---|---|
| **New Lead** | Form submission or inbound — not yet contacted | 10% |
| **Contacted** | First outreach made (LinkedIn DM, email, phone) | 15% |
| **Discovery Call Scheduled** | Call booked via Calendly | 25% |
| **Discovery Call Completed** | Call happened, notes logged | 35% |
| **Proposal Sent** | Proposal + SOW delivered to client | 50% |
| **Proposal Under Review** | Client reviewing, follow-up in progress | 60% |
| **Verbal Yes** | Client said yes, contract not signed | 75% |
| **Contract Signed** | SOW signed, waiting on deposit | 85% |
| **Deposit Received — Active** | 50% deposit in, project started | 90% |
| **Project Complete** | Deliverables handed off, final invoice sent | 95% |
| **Closed Won** | Final payment received, client active | 100% |
| **Closed Lost** | Did not move forward — note the reason | 0% |
| **Closed — Not a Fit** | Disqualified; may refer elsewhere | 0% |

**How to use it:** Every lead gets a deal card. Move it through stages as it progresses. Never let a deal sit in the same stage for more than 7 days without an activity logged.

---

## STEP 4: CONTACT LIFECYCLE STAGES

HubSpot has built-in lifecycle stages — configure them to match your business:

| Lifecycle Stage | Your Definition |
|---|---|
| **Subscriber** | Signed up for the newsletter / blog (not yet a lead) |
| **Lead** | Form submission or inbound inquiry |
| **Marketing Qualified Lead (MQL)** | Lead score ≥ 6 from n8n automation |
| **Sales Qualified Lead (SQL)** | Discovery call scheduled |
| **Opportunity** | Active deal in pipeline (proposal stage or later) |
| **Customer** | Deposit received — active project |
| **Evangelist** | Gave a testimonial or referral |
| **Other** | Referral partners, strategic contacts |

---

## STEP 5: SEQUENCES (Email Automation)

**Requires HubSpot Starter plan.**

Go to Sales → Sequences → Create Sequence

### Sequence 1: Inbound Lead Nurture (auto-triggered by n8n)
When a lead scores 6–9 in the n8n automation:

**Email 1 (immediate):** Claude-written personalized response (n8n sends this)
**Email 2 (Day 3):** Social proof + insight
```
Subject: One thing Michigan [vertical] companies are finding about AI

[First name],

Following up on our intro email.

Quick share: [Insert vertical-specific stat or insight — reference the market intel doc].

I run a 20-minute call every week for Michigan [vertical] leaders who want to understand what AI automation actually looks like in their operation — no pitch, just an honest conversation.

Worth a slot? Here's my calendar: [Calendly link]

David
```

**Email 3 (Day 8):** Case result / proof
```
Subject: [Vertical] result from last quarter

[First name] —

[One-sentence result from a comparable company or vertical — be specific on the number].

If you're curious how we got there, I'd be happy to walk through it on a short call.

[Calendly link]

David
```

**Email 4 (Day 16):** Soft close
```
Subject: Closing the loop, [First name]

[First name] —

I'll stop following up after this — I don't want to be noise in your inbox.

Before I do: the Michigan Going PRO Talent Fund has a [CURRENT QUARTER] deadline. If you're thinking about any AI or tech training for your team, it's worth knowing what's available. Happy to share a 1-pager with zero commitment.

Either way — hope business is moving well.

David
```

---

## STEP 6: TASKS AND FOLLOW-UP AUTOMATION

Go to Settings → Workflows → Create Workflow

### Workflow 1: Discovery Call → Auto-Task
**Trigger:** Deal stage changes to "Discovery Call Completed"
**Action:** Create task
- Title: "Send follow-up email + discovery notes to [company name]"
- Due date: Same day + 2 hours
- Assigned to: David Calderon

### Workflow 2: Proposal Sent → Follow-Up Reminder
**Trigger:** Deal stage changes to "Proposal Sent"
**Action:** Create task
- Title: "Follow up on proposal — [company name]"
- Due date: 3 business days after deal stage change
- Assigned to: David Calderon

### Workflow 3: Stale Deal Alert
**Trigger:** Deal has not had an activity in 7 days AND deal stage is not Closed
**Action:** Email notification to David
- Subject: "Stale deal: [deal name] — 7 days with no activity"
- Body: "This deal has been quiet. Time to reach out."

---

## STEP 7: REPORTING DASHBOARD

Go to Reports → Dashboards → Create Dashboard: "Sales Overview"

Add these reports:

1. **Pipeline by Stage** (funnel visualization)
   - Shows how many deals are in each stage
   - Identifies where leads are getting stuck

2. **Deal Revenue by Month** (bar chart)
   - Closed won revenue by month
   - Shows revenue trend and seasonality

3. **Lead Source Breakdown** (pie chart)
   - Custom: add "Lead Source" as a contact property (LinkedIn, Cold Email, Referral, Website Form, Event)
   - Shows which channels are working

4. **Discovery Call → Proposal Conversion** (custom)
   - % of discovery calls that result in a proposal sent
   - Target: 50%+

5. **Proposal → Close Conversion** (custom)
   - % of proposals that close
   - Target: 30%+

6. **Average Deal Size** (single number)
   - Closed won deal value / number of deals
   - Should be climbing over time

---

## STEP 8: CONTACT IMPORT

**Bring in your existing contacts:**

1. Export your LinkedIn connections: LinkedIn → Settings → Data Privacy → Get a copy of your data → Connections
2. Format as CSV: First Name, Last Name, Email, Company, Job Title, LinkedIn URL
3. In HubSpot: Contacts → Import → Upload CSV
4. Map the columns to HubSpot properties
5. Assign lifecycle stage: "Lead" for anyone who's a potential prospect

**Pro tip:** Before importing, filter to Michigan-based contacts only. A HubSpot database of targeted Michigan contacts is worth more than a huge noisy database.

---

## STEP 9: N8N → HUBSPOT INTEGRATION

This is already specified in the n8n-lead-intake-automation.md but to connect it in HubSpot:

1. **Get HubSpot Private App Token:**
   - Settings → Integrations → Private Apps → Create Private App
   - Scopes needed: `crm.objects.contacts.write`, `crm.objects.deals.write`, `crm.objects.contacts.read`
   - Copy the access token → paste into n8n as the HubSpot credential

2. **What n8n creates in HubSpot:**
   - Contact: name, email, company, lead score (custom property), vertical (custom property)
   - Deal: "Company Name — AI Consulting Inquiry," pipeline stage "New Lead," linked to contact
   - Note on the deal: The David Note from Claude scoring

3. **Verify the connection:**
   - Submit a test form on your Netlify site
   - Check HubSpot → Contacts — the contact should appear within 30 seconds

---

## STEP 10: DAILY WORKFLOW IN HUBSPOT

**Every morning (10 minutes):**
1. Open HubSpot → Contacts → filter by "Last Activity Date: yesterday and earlier" — who needs follow-up?
2. Open your task queue — complete all tasks due today
3. Check the deals pipeline — any stale deals flagged by the workflow?
4. Check for new inbound leads (from the n8n automation) — confirm they're in the pipeline

**After every call (15 minutes):**
1. Log the call in HubSpot → associate with the contact and deal
2. Add notes: pain point, score assessment, next step
3. Create the follow-up task for tomorrow
4. Move the deal to the correct stage

**After every proposal sent:**
1. Log the proposal as an activity
2. Attach the proposal PDF to the deal
3. Set a reminder task for 3 business days: "Follow up on proposal"
4. Move deal to "Proposal Sent"

---

## REFERRAL PARTNER MANAGEMENT

For referral partners (bankers, CPAs, MSPs) — create them as contacts in HubSpot:

**Contact type property:** Add a property "Contact Type" with option "Referral Partner"

**Create a separate view in Contacts:**
- Filter: Contact Type = Referral Partner
- Columns: Name, Company, Last Activity, Referrals Sent, Referrals Received

**Track referrals:**
- When a deal comes from a referral, add "Referred By" = partner name in the deal
- Create a monthly "referral report" — who sent the most warm intros?
- Send a thank-you note (handwritten card or personalized email) for every closed referral within 7 days

---

## COST SUMMARY

| Tool | Plan | Cost |
|---|---|---|
| HubSpot CRM | Free (first 30 days) | $0 |
| HubSpot Starter | Marketing + Sales | $20/month |
| HubSpot Starter upgrade (when needed) | Full Starter Suite | $45/month |

**Free forever features you'll use:**
- Contact management (unlimited)
- Deal pipeline
- Task and activity tracking
- Email integration
- 1-on-1 email sending
- Meeting scheduling link

**Starter features you'll need:**
- Email sequences (automated multi-email follow-up)
- Advanced reporting
- List segmentation
- HubSpot-tracked email open notifications
