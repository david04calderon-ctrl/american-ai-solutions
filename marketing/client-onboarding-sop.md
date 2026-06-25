# Client Onboarding SOP — American AI Solutions LLC
**Trigger:** Client signs SOW + sends 50% deposit
**Goal:** From signature to first deliverable in 4 weeks, client feeling taken care of the whole time
**Rule:** Every step has a specific owner, specific timing, and specific output. No vague tasks.

---

## THE 48-HOUR RULE

Everything in the first 48 hours happens fast. This is when the client is most anxious about whether they made the right decision. Deliver certainty immediately.

---

## HOUR 0 — DEPOSIT RECEIVED

**Trigger:** Stripe/ACH payment clears OR check deposited

**Immediate actions (do within 2 hours):**

### 1. Send Welcome Email

```
Subject: We're in — here's what happens next

[Client Name],

Deposit received — thank you. We're officially underway.

Here's exactly what happens in the next 48 hours:
1. I'll send you a Kickoff Prep Form today — takes about 10 minutes to fill out
2. You'll receive calendar invites for our kickoff call and first check-in
3. I'll send you the list of system accesses we'll need to get started

Kickoff call is scheduled for: [DATE/TIME]

One thing to know: the faster we get access to your systems, the faster we can start building. The prep form I'm sending will walk you through exactly what we need and why.

Any questions before then — reply here or call me directly at [PHONE].

David Calderon
American AI Solutions LLC | Detroit, MI
```

### 2. Send Kickoff Prep Form

Create a Google Form (free) with these questions:
- Company name, address, main contact + backup contact
- Billing contact name and email (for invoices)
- List the software/systems we'll integrate with (TMS, EHR, TMS, ERP, etc.)
- Do you have an IT person or MSP? If so, their contact info
- What does success look like to you 90 days from now? (open text)
- Is there anything about your operation we should know before we start?

### 3. Create HubSpot Deal Update
- Stage → "Onboarding — Week 1"
- Add kickoff call date
- Add note: "SOW signed, deposit received, welcome email sent [TIMESTAMP]"

### 4. Create Project in Your Task System

Create a project folder (Notion, Trello, or a simple Google Doc):
- Project name: [Client Company] — AI [PROJECT TYPE]
- Start date: [DATE]
- Target delivery: [DATE]
- Deliverables list (copy from SOW)
- Checklist of access needed

---

## DAY 1–2 — KICKOFF PREP

### Send Access Request List

Within 24 hours of deposit, email the specific access you need:

```
Subject: Systems access checklist — [Client Company] project

[Name],

To get started as quickly as possible, here's what we'll need access to:

For [Project Type]:
□ [System 1] — admin/read access (we'll use this for: X)
□ [System 2] — API credentials or login (we'll use this for: Y)
□ [System 3] — export of [specific data] (needed for: Z)

If you have an IT contact, feel free to copy them on this email and I'll coordinate directly with them.

Preferred format: Share credentials via [1Password shared vault / Bitwarden / LastPass] or your preferred secure method. Please don't send passwords in email.

Timeline: We'd like to have this by [DATE, 3 days out] so we can start immediately after the kickoff call.

David
```

### Prepare Kickoff Call Agenda

Send 24 hours before the call:
```
Kickoff Call Agenda — [Company] x American AI Solutions

1. Introductions (5 min)
2. Project scope review — confirm we're building the right thing (10 min)
3. Success metrics — agree on what "done and working" looks like in numbers (10 min)
4. Access and integrations — confirm we have everything we need (5 min)
5. Communication cadence — how often we talk, how to reach me (5 min)
6. Questions (5 min)

Come prepared to talk about: [1–2 things specific to their situation from the discovery call]
```

---

## DAY 3 — KICKOFF CALL

**The call itself:**

**Opening:**
> "Before we dive in — I want to confirm you have everything you need from our side to feel confident this is going to go well. Any concerns or questions from the last 48 hours?"

**Key things to establish in this call:**
1. **Success metrics in numbers** — "How will we both know this worked?" Get specific. No-show rate drops from X to Y. Dispatch time from X to Y. Write these down and send them back after the call.
2. **Primary point of contact** — One person to talk to on their side. Set expectations on response time.
3. **Decision authority** — If we need to change something mid-build, who approves? Don't want to get stuck waiting for a meeting.
4. **Red lines** — Is there anything we should absolutely NOT touch or change? Any legacy system that can't be modified?

**Post-call actions (within 2 hours):**

Send a summary email:
```
Subject: Kickoff call summary — [Company] x AmericanAI

[Name],

Great kickoff call today. Here's what we aligned on:

PROJECT SCOPE:
[Restate the deliverables in plain English]

SUCCESS METRICS (what we're measuring):
- [Metric 1]: Current: X → Target: Y (within Z weeks)
- [Metric 2]: Current: X → Target: Y (within Z weeks)

KEY CONTACTS:
- Your side: [Name], [email], [phone]
- My side: David Calderon, david@americanaisolutionsllc.com, [phone]

COMMUNICATION CADENCE:
- Weekly check-in: [Day/time]
- Questions/updates: email, expect response within 4 hours M–F
- Urgent: text/call [phone]

TIMELINE:
[Week-by-week milestones from the SOW]

OUTSTANDING ACCESS NEEDED:
- [List any access not yet received]

Build starts: [DATE]
Next check-in: [DATE/TIME]

David
```

---

## WEEK 1 — FOUNDATION WEEK

### Days 1–3: Environment Setup

- [ ] Set up development environment
- [ ] Confirm all API access is working
- [ ] Pull a sample of their data to validate structure and quality
- [ ] Document any unexpected complications (data quality issues, access restrictions, etc.)
- [ ] Flag if timeline adjustment needed (communicate EARLY, not at the deadline)

### Day 5: End of Week 1 Update

Send a brief Friday update, every week, no exceptions:

```
Subject: Week 1 update — [Company] project

[Name],

Quick end-of-week update:

✅ Done this week:
- [Specific accomplishment 1]
- [Specific accomplishment 2]

🔨 Next week:
- [What we're building Monday–Friday]
- [Any dependencies we need from you]

⚠️ Anything to flag:
- [If there are blockers or delays — be specific and honest]
- "All clear — no blockers" if that's the case

Next check-in: [DATE/TIME]

David
```

**Weekly update rule:** Never skip this. Even if there's nothing to report, send the update. Silence is what kills client relationships.

---

## WEEK 2–3 — BUILD PHASE

### Cadence:
- Weekly update email (every Friday)
- Weekly check-in call (30 min, standing slot)
- Immediate heads-up if anything unexpected comes up

### At the midpoint check-in call:
> "We're halfway through. Before I keep building — does what I've shown you so far look like what you had in mind? Any adjustments before we finish the second half?"

**Always ask for early feedback.** Don't build 4 weeks and then show it. Show it at week 2, get feedback, adjust.

---

## FINAL WEEK — DELIVERY WEEK

### Step 1: Pre-delivery QA

Before showing the client anything final:
- [ ] Test every function manually, step by step
- [ ] Test edge cases (empty data, bad input, system downtime scenario)
- [ ] Test on the client's actual data (not test data)
- [ ] Document any known limitations

### Step 2: Delivery Demo Call

Schedule a 45-minute walkthrough:
- 15 min: Show the system running live on their data
- 15 min: Walk them through how to use it (or how their staff will use it)
- 15 min: Questions, adjustment requests, sign-off

**Get verbal sign-off on the call:**
> "Does this do what we said it would do? Any changes needed before we call this complete?"

### Step 3: Handoff Package

After sign-off, send within 24 hours:
1. **Runbook** (Google Doc) — how to use the system, what to do if something breaks, who to call
2. **Video walkthrough** (Loom, free) — 10-minute screen recording of the whole system
3. **Admin credentials** — securely shared, with instructions for changing passwords
4. **Architecture doc** — brief technical overview (for their IT person or future vendor)

### Step 4: Final Invoice

Send the 50% final payment invoice immediately after sign-off.

```
Subject: Final invoice — [Company] project complete

[Name],

System delivered and signed off — thank you.

[Invoice attached / link to Stripe invoice]
Amount: $[FINAL PAYMENT]
Due: Net 15

Once payment is received, you'll have the 30-day support window where I'm available for bug fixes and questions at no charge.

It's been a great project. Here's what I'm most proud of: [1 sentence on the specific result].

David
```

---

## 30 DAYS AFTER DELIVERY

### Day 30 Check-In Call (included in every project)

Book this before you wrap up. It's in the SOW. Don't let it slip.

Agenda:
1. How's the system performing? Any issues?
2. Pull up the success metrics from the kickoff doc — are we hitting them?
3. Is there anything the team needs help with?
4. What's the next problem we could solve? (Natural upsell conversation — don't force it)

### Post-Call Action:
- Send a written summary of the 30-day metrics
- If performance is good: ask for a LinkedIn testimonial + Google review
- If there are issues: create a task to fix within 5 business days

---

## ASKING FOR REVIEWS AND REFERRALS

At the 30-day call, when things are going well:

**For LinkedIn testimonial:**
> "I'm really glad this has been working well for you. Would you be willing to leave a quick LinkedIn recommendation? It helps more than anything else for credibility in the Michigan market. It doesn't have to be long — even 2–3 sentences about the problem we solved and the result."

**For Google review:**
> "Same ask — if you have 2 minutes, a Google review would mean a lot. Just search 'American AI Solutions LLC' and the option will pop up."

**For referral:**
> "Last ask — do you know anyone in your network with a similar problem? Another manufacturer, a contractor, logistics company? Even just a name — I'll reach out myself and I'll mention I work with you."

**The referral ask script:**
> "If you ever come across someone complaining about [THE PROBLEM YOU SOLVED] — just tell them I'm the person who fixes that."

---

## ONGOING RETAINER CLIENTS (if they add the monthly plan)

### Monthly deliverables:
- [ ] System health check (are all integrations running? Any errors?)
- [ ] Performance report (the success metrics — sent by the 5th of each month)
- [ ] 2 hours of additional automation work (banked, use or lose each month)
- [ ] Quarterly optimization call (30 min, every 3 months)

### Monthly report template:
```
[MONTH] Performance Report — [Company]

CORE METRICS:
[Metric 1]: [CURRENT] vs. [TARGET] (↑/↓ from last month)
[Metric 2]: [CURRENT] vs. [TARGET] (↑/↓ from last month)

SYSTEM STATUS: ✅ All systems running / ⚠️ [Note any issues]

WORK COMPLETED THIS MONTH:
- [If any 2-hour additional work was done — describe it]

NEXT MONTH:
- [Any improvements or updates planned]

Questions? Reply here or call me: [PHONE]
David
```

---

## TOOLS USED IN ONBOARDING

| Tool | Purpose | Cost |
|---|---|---|
| Google Forms | Kickoff prep form | Free |
| Google Docs | Project folder, runbooks | Free |
| Loom | Video walkthrough recording | Free (up to 5 min) / $8/mo |
| HubSpot Starter | Deal tracking, pipeline | $20/mo |
| Stripe | Payment processing | 2.9% + $0.30 per transaction |
| 1Password / Bitwarden | Secure credential sharing | $3–5/mo |
| Calendly | Call scheduling | Free tier sufficient initially |

---

## CLIENT HEALTH DASHBOARD (track in HubSpot)

For every active client, maintain:
- **Last contact date** (should be within 7 days for active projects)
- **NPS score** (ask at 30 days and 90 days — simple 1-10 question)
- **Renewal status** (retainer: active/at-risk/cancelled)
- **Referrals generated** (how many warm intros did this client send?)
- **Expansion potential** (what Phase 2 could we build for them?)

**Red flag:** Any client you haven't contacted in 10+ days during an active project.
**Early churn signal:** NPS drops below 7, or client response time slows down (they're pulling away).
