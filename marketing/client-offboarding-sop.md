# Client Offboarding & Handoff SOP
# American AI Solutions LLC

**Purpose:** A clean handoff is the final impression that determines whether a client becomes a referral source, signs a retainer, or goes silent. The system is live — now deliver it in a way that makes the client feel like they hired the best firm in Michigan. A bad handoff after a great build is a referral killer. This SOP makes the handoff as strong as the build.
**Trigger:** System accepted in UAT and client confirms go-live readiness.

---

## THE HANDOFF MINDSET

The client doesn't just need the system — they need to feel confident running it without you. That confidence comes from three things:
1. **Documentation** — they can answer any question by reading it
2. **Training** — the people who use it daily have done it in real conditions
3. **Support window** — they know you're still there if something breaks

Every handoff activity below serves one of these three.

---

## PHASE 1 — PRE-HANDOFF PREP (WEEK BEFORE GO-LIVE)

### Final Delivery Checklist — Complete Before Handing Off

**System validation**
- [ ] All UAT test scenarios passed (minimum 3 full runs on production data)
- [ ] Error handling tested: bad inputs, API timeouts, edge cases
- [ ] Alert thresholds confirmed with client operational lead
- [ ] Performance benchmarks logged (processing time, output accuracy)
- [ ] Backup/failover procedure documented and tested

**Access and credentials**
- [ ] Client has admin credentials to all system components they own
- [ ] David's access credentials documented — client decides whether to revoke post-30-day support
- [ ] API keys stored in client's secure vault (not just David's environment)
- [ ] All third-party accounts registered under client's email/billing

**Documentation package (sent as PDF + shared Google Drive folder)**
- [ ] System architecture diagram (what connects to what)
- [ ] User operations guide (daily/weekly tasks, step-by-step with screenshots)
- [ ] Admin guide (how to change thresholds, add users, reset system)
- [ ] Troubleshooting guide (top 10 issues + solutions)
- [ ] Vendor/integration contact list (who to call for each third-party system)
- [ ] Training materials from sessions (slides, video recordings if applicable)
- [ ] Baseline metrics document (Day 1 numbers for 90-day comparison)

**Training preparation**
- [ ] Training session 1 scheduled (general users)
- [ ] Training session 2 scheduled (admin/power users)
- [ ] Training assessment ready (5-question competency check per role)
- [ ] "Going PRO" training log ready (required for grant reimbursement)

---

## PHASE 2 — GO-LIVE WEEK

### Go-Live Day Checklist

**Morning of go-live:**
- [ ] David online and monitoring
- [ ] Client operational lead briefed: "System goes live today, I'll be watching the first run"
- [ ] First production run monitored in real time
- [ ] Output validated against expected result
- [ ] Screenshot/confirmation sent to client contact immediately

**Go-live day email (send within 1 hour of confirmed live):**

> Subject: [Company] — AI System Live ✓
>
> [Name] —
>
> System went live this morning. [Specific output — "First quality report generated at 8:14 AM — data looks accurate, pulling from all three lines as expected."]
>
> [Screenshot or output attached]
>
> Training sessions are set for [dates]. I'll be monitoring this week and I'm available same-day for any questions.
>
> 30-day support window starts today.
>
> David

### Final Invoice

Send the final 50% invoice on go-live day — same day, not next week. Per the SOW. Use Pandadoc.

---

## PHASE 3 — TRAINING SESSIONS

### Training Session Structure (90 minutes each)

**Session 1 — General Users**
- Minutes 0–15: System tour (what it does, what it doesn't do)
- Minutes 15–45: Live walkthrough of daily workflow
- Minutes 45–70: Hands-on practice with real system
- Minutes 70–80: Top 10 questions/issues and how to solve them
- Minutes 80–90: Q&A + competency check (5 questions, pass = 80%)

**Session 2 — Admin/Power Users**
- Minutes 0–20: Admin functions (threshold changes, user management, reports)
- Minutes 20–50: Troubleshooting live scenarios
- Minutes 50–70: How to request support / escalate to David during support window
- Minutes 70–90: Q&A + admin competency check

**After each session:**
- Send recording (Fathom or Loom) to attendees within 24 hours
- Log attendance in "Going PRO" training log (for grant reimbursement)
- Log competency assessment results in Google Drive

**Training completion certificate:**
After both sessions, issue a simple 1-page completion document:

> This certifies that [Name], [Title] at [Company] completed AI System Training for [System Name] on [Date]. Competency assessment: [Pass/Pass].
>
> David Calderon | American AI Solutions LLC | [Date]

This document goes in the client's grant reimbursement file and their own HR records.

---

## PHASE 4 — 30-DAY SUPPORT WINDOW

### What's Covered

| Included | Not Included |
|----------|--------------|
| Bugs and unexpected behavior → fix within 24 hours | New feature requests |
| Staff questions → same-day response | Additional integrations |
| Minor threshold/layout adjustments | New data sources |
| System monitoring and alerts | Additional training sessions |
| Documentation updates for issues found | Change in scope per original SOW |

For anything Not Included: issue a Change Order per the scope-creep-change-order-protocol.md.

### 30-Day Support Communication

**Week 1:** Check in proactively every other day — "How's the system running? Any questions from the team?"

**Weeks 2–4:** Weekly check-in email every Monday:

> [Name] — Week [X] of 30-day support. Any issues or questions from the team this week? No news is good news — just checking in.

**Day 28 — Support window closing email:**

> Subject: [Company] support window closes in 2 days
>
> [Name] —
>
> Quick heads up — the 30-day support window closes this [day]. If there are any unresolved questions or issues, let's address them before then.
>
> After the window closes, I'm still reachable for anything that comes up — response times may be slower than during the support period, and new feature requests or integrations will go through a change order. But I'm not disappearing.
>
> I'll reach out in about 60 days for the 90-day results call — that's when we'll look at the numbers against your Day 1 baseline.
>
> David

---

## PHASE 5 — POST-HANDOFF (DAYS 31–90)

### Day 45 — Quick Check-In

A 5-minute call or brief email:

> [Name] — About 6 weeks since go-live. How's the team adapting to the system? Any friction points I should know about for when we connect at 90 days?

This keeps the relationship warm and surfaces any issues before the 90-day call.

### Day 90 — Results Call (The Referral Window)

This is the most important call of the entire engagement. Schedule it at Day 70 for Day 90.

**Pre-call prep:**
- Pull the Day 1 baseline metrics from `01 — Kickoff/Baseline metrics — Day 1.gsheet`
- Populate the 90-day metrics column (request updated numbers from client 3 days before)
- Calculate the delta and translate to dollars using the vertical-specific formulas in `client-success-metrics.md`
- Prepare a 1-page results summary (can be the case study short-form from `case-study-template.md`)

**90-Day Results Call Agenda (30 minutes):**
1. Open with gratitude: "Thanks for taking the time — I've been looking forward to seeing the numbers."
2. Walk the baseline vs. current side-by-side: "Here's where you were, here's where you are."
3. Translate to dollars: "That [X-hour reduction] at [$Y blended rate] is about [$Z] back per year."
4. Ask: "These results — is this what you were hoping for when we started?"
5. Ask for referral: See `client-referral-program.md` — the full script
6. Plant Year 2 seed: "Based on what we've seen here, the next natural thing to build is [expansion module]. I'll put something together — no obligation, just want you to see what's possible."

**After the call:**
- Send the 1-page results summary by email within 24 hours
- If they gave referral names: send draft intro email within 1 hour
- Log referral source in HubSpot: "Referred by [Name]"
- Create Year 2 expansion task in Linear

---

## PHASE 6 — CASE STUDY CAPTURE

After the 90-day call — if results are strong — ask for the case study:

> "I'm really glad those numbers landed where they did. I'd love to write this up as a case study — it would help other Michigan [manufacturers/practices/carriers/contractors] see what's possible. I'll draft it, you review and approve before anything gets published. Would that be okay?"

Then follow the full case study capture process in `case-study-template.md`.

**Timing:** Don't ask for the case study before you've shown them the results. The 90-day call is the right moment.

---

## GOOGLE DRIVE HANDOFF STRUCTURE

The `06 — Post-Delivery` folder in the client's Google Drive should contain at project close:

```
06 — Post-Delivery/
├── Final delivery checklist — signed.pdf
├── Documentation package/
│   ├── System architecture diagram.pdf
│   ├── User operations guide.pdf
│   ├── Admin guide.pdf
│   └── Troubleshooting guide.pdf
├── Training/
│   ├── Session 1 — recording.mp4 (or Loom link)
│   ├── Session 2 — recording.mp4 (or Loom link)
│   ├── Going PRO training log.gsheet
│   └── Competency assessments — [Name].pdf ×[count]
├── 30-day check-in notes.gdoc
└── 90-day results metrics.gsheet
```

Share the entire `06` folder with the client. This gives them a permanent record they can reference independently.

---

## HUBSPOT HANDOFF UPDATES

At project close, update the HubSpot deal record:

| Property | Update |
|----------|--------|
| Deal Stage | Closed Won → Customer |
| Closeout Date | [Go-live date] |
| System Name | [Name of system built] |
| 30-Day Support End | [Date] |
| 90-Day Call Scheduled | [Date] |
| Grant Reimbursement Filed | Yes / No / N/A |
| Referral Source | [Name or Partner] |

Create a HubSpot task at day 30: "90-day results call — schedule with [Name]"
Create a HubSpot task at day 80: "Prepare 90-day results deck for [Company]"

---

## THE HANDOFF IN ONE SENTENCE

Deliver the system, train the team, keep the relationship warm, show them the numbers at 90 days, and walk out of the call with a referral and a Year 2 conversation.

That's the full cycle. Every project is a pipeline into the next one.
