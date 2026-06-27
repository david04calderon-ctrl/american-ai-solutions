# American AI Solutions — Client Delivery SOP
## Standard Operating Procedures | Every Engagement

---

## THE GOLDEN RULE

Every client interaction either builds trust or costs it.
Deliver what you said. When you said it. For what you quoted.
No surprises. No excuses. No scope creep.

---

## PHASE 0 — PRE-SALES (Before the Strategy Call)

### When a lead comes in (via Alex/phone, web form, LinkedIn, referral):

**Within 2 hours:**
- [ ] HubSpot: create contact with source, industry, company name, phone, email
- [ ] HubSpot: create deal → "New Lead" stage, estimated value based on problem complexity
- [ ] If from LinkedIn DM: send connection request + brief reply acknowledging their message
- [ ] If from web form: automated HubSpot email goes out (confirm it fired)
- [ ] If from Alex call: review call transcript in Vapi dashboard + HubSpot note

**Before the strategy call:**
- [ ] Research their business: website, LinkedIn, Google Maps, any news
- [ ] Know their industry vertical (auto, healthcare, logistics, construction)
- [ ] Know what specific pain they mentioned — lead with that on the call
- [ ] Block 45 minutes on your calendar (30-min call + 15-min notes after)
- [ ] Have your pricing tier sheet ready (Audit / Quick Deploy / Full Implementation)

---

## PHASE 1 — STRATEGY CALL (30 Minutes)

### Agenda (internal — don't read this to them):

**0:00–0:05 — Warm up**
- Confirm who's on the call and their role
- "Tell me a bit about your business and what brought you to the call today"
- Listen. Don't pitch yet.

**0:05–0:20 — Diagnose**
- "Walk me through the specific process that's giving you the most pain right now"
- "How many people are involved in that process?"
- "How many hours does it take, and how often?"
- "What does that cost you in time or money each week?"
- "What have you already tried?"
- "What would it mean for your business if this ran automatically?"

**0:20–0:25 — Rank the opportunity**
- Identify their top 1–3 automation opportunities ranked by ROI
- Be honest: if the ROI doesn't justify the build cost, say so
- If it's a fit: "Based on what you've described, here's what I think we can do..."
- Give them a realistic picture: timeline, what the system would do, what you'd need from them

**0:25–0:30 — Next step**
- If it's a fit: "I'll get you a fixed-price proposal within 48 hours. Does [DAY/TIME] work for a follow-up to review it?"
- If it's not a fit: "Honestly, I don't think AI automation is the right answer here yet. Here's what I'd do first..."
- Either way: they leave with clarity

**Right after the call (within 15 minutes):**
- [ ] Fathom transcript: review action items, pull key pain points and quotes
- [ ] HubSpot: update deal stage → "Strategy Call Complete", add call notes
- [ ] HubSpot: set task → "Send proposal by [48 hours from now]"
- [ ] Start drafting the SOW while it's fresh

---

## PHASE 2 — PROPOSAL (48 Hours After Strategy Call)

**Proposal checklist:**
- [ ] Open `operations/proposal-template.md`
- [ ] Fill all [BRACKET] fields — use client's exact words for the problem description
- [ ] Verify deliverables are specific and measurable — no vague language
- [ ] Verify scope exclusions are clear — no ambiguity about what's NOT included
- [ ] Verify system access list is complete — if you don't have access, you can't build
- [ ] Price check: does this scope match the tier? (Audit / Quick Deploy / Full Implementation)
- [ ] Upload to Pandadoc as new document from template
- [ ] Add client as recipient, enable open tracking, set 14-day expiration
- [ ] Enable Stripe payment collection (50% deposit)

**Proposal delivery:**
- [ ] Send from david@americanaisolutionsllc.com via Pandadoc
- [ ] Follow-up email (not Pandadoc): "Just sent over the proposal — let me know if anything needs clarification. Happy to jump on a 15-minute call to walk through it."
- [ ] HubSpot: update deal stage → "Proposal Sent", log email
- [ ] HubSpot: set task → "Follow up if no response in 48 hours"

**If no response in 48 hours:**
- [ ] One follow-up: "Wanted to make sure the proposal came through — any questions I can answer?"
- [ ] If still no response in 5 days: "Following up one last time. Happy to adjust scope or timing if the fit isn't right."
- [ ] After 14 days: proposal expires, close deal in HubSpot as "No Decision"

---

## PHASE 3 — KICKOFF (After SOW Signed + Deposit Received)

**Before kickoff call:**
- [ ] Confirm 50% deposit received (check Stripe or bank)
- [ ] Create Linear project: "AIS-[YEAR]-[NUMBER] | [CLIENT NAME] | [PROJECT NAME]"
- [ ] Create Linear tickets for each deliverable with due dates matching the SOW timeline
- [ ] Send kickoff agenda 24 hours in advance:
  ```
  Agenda:
  1. Confirm project goals and success criteria
  2. Review timeline and milestone dates
  3. Collect system access and credentials
  4. Agree on weekly check-in day/time
  5. Q&A
  ```

**Kickoff call (60 minutes):**
- [ ] Review the SOW together — confirm they understand scope and what's excluded
- [ ] Collect all credentials and API keys (use a secure form or 1Password shared vault)
- [ ] Establish weekly check-in cadence (same day/time every week)
- [ ] Set communication norms: "I'll send you updates via email. For urgent issues, text [number]."
- [ ] Confirm go-live date

**After kickoff:**
- [ ] HubSpot: update deal stage → "Active Engagement"
- [ ] Linear: all tickets active, assignee = David, due dates set
- [ ] Secure credential storage: move all access to 1Password project vault

---

## PHASE 4 — BUILD & DEPLOY (3–12 Weeks)

### Weekly rhythm:

**Monday:**
- [ ] Review Linear board — what's due this week?
- [ ] Identify any blockers (waiting on client access, unclear spec)
- [ ] Flag blockers to client immediately — don't wait for the check-in

**Weekly check-in (agreed day/time):**
- [ ] Show working software — never slides or status reports
- [ ] Demo what was built since last week — even if it's rough
- [ ] Surface any decisions the client needs to make
- [ ] Confirm next week's goal
- [ ] Update Linear tickets in real-time during the call

**If a deadline is at risk:**
- Contact the client BEFORE missing it, not after
- "We're running 3 days behind on X because of Y. Here's my revised timeline. Does that work?"
- Never let a deadline slip silently

### Build standards:

**Documentation (as you build, not after):**
- Comment complex logic in plain English — assume someone else will maintain this
- Log every major decision: "Used API X instead of Y because Z"
- Architecture diagram: update with each major component added

**Testing before delivery:**
- Test on real data (or realistic test data) — not toy examples
- Test failure modes: what happens when the external API is down? When data is malformed?
- Test with someone who wasn't involved in building it
- Document test results

**Handoff package (every project):**
- System architecture diagram (even if simple)
- Step-by-step operations guide (how to use it day-to-day)
- Exception handling guide (what to do when something goes wrong)
- Credential inventory (what's stored where)
- Known limitations (what the system can't handle)

---

## PHASE 5 — HANDOFF & TRAINING

**Training session (live, 60–90 minutes):**
- [ ] Record the session (Fathom or Loom)
- [ ] Walk through every deliverable from the SOW — confirm each is done and accepted
- [ ] Live demo: show it running on their real data
- [ ] Hands-on: have them operate the system while you watch
- [ ] Cover exception scenarios: "What do you do if X happens?"
- [ ] Share the handoff package before the call ends

**SOPs delivery:**
- [ ] Google Doc shared with client (not PDF — they need to be able to edit over time)
- [ ] Organize by user role (dispatcher, manager, admin) if multiple users
- [ ] Include screenshots of every key step
- [ ] Include contact info for 30-day support questions

**Sign-off:**
- [ ] Client confirms all deliverables accepted (verbal on the call + email confirmation)
- [ ] Send final invoice (50% remaining) immediately after sign-off
- [ ] HubSpot: update deal stage → "Delivered — Awaiting Final Payment"

---

## PHASE 6 — 30-DAY SUPPORT

**Day 1–30 after go-live:**
- [ ] Check in at Day 7: "How's the system running? Anything to adjust?"
- [ ] Check in at Day 30: ROI checkpoint call (built into every engagement)
- [ ] Address any bugs or edge cases within 24 business hours
- [ ] Log all support requests in Linear under the project

**ROI checkpoint call (Day 30):**
- Review the success criteria from the SOW
- Measure actual results vs. expected
- Document outcomes for the case study
- Ask: "What would be the next thing you'd want to automate?"
- Plant the seed for Engagement 2

**After Day 30:**
- [ ] HubSpot: update deal to "Closed Won"
- [ ] Linear: close all project tickets
- [ ] Request Google review: "Would you be willing to leave us a Google review? It helps other Michigan businesses find us."
- [ ] Ask for LinkedIn recommendation
- [ ] Draft case study (anonymized) — add to website testimonials, LinkedIn, email list

---

## PHASE 7 — COMPOUNDING (Months 1–6)

Most clients add a second automation within 60 days.

**At the ROI checkpoint:**
- "Based on what we built, what's the next thing eating your team's time?"
- Present a quick verbal proposal for Phase 2
- Returning clients get priority scheduling and a 10% returning-client discount

**Content flywheel (every completed project):**
1. Case study → website testimonials
2. LinkedIn post (anonymized story)
3. Email to HubSpot list
4. Reference for grant applications

---

## COMMUNICATION STANDARDS

| Situation | Response time | Channel |
|-----------|--------------|---------|
| Client question during active engagement | Same business day | Email |
| Urgent issue (system down) | Within 2 hours | Text/call |
| Proposal follow-up | 48 hours | Email |
| 30-day support question | Within 24 business hours | Email |
| New lead from any source | Within 2 hours | Call or email |

**Email signature:**
```
David Calderon
Founder, American AI Solutions
Detroit, MI
david@americanaisolutionsllc.com
[phone when secured]
americanaisolutionsllc.com
Book a call: [Calendly link]
```

---

## LINEAR PROJECT STRUCTURE (for every engagement)

```
Project: AIS-[YEAR]-[NUMBER] | [Client] | [Project Name]
  Status: [Kickoff / In Progress / Client Review / Complete]
  
  Milestone: Discovery & Setup
    [ ] Kickoff call complete
    [ ] All credentials received
    [ ] Architecture confirmed
  
  Milestone: Build
    [ ] Deliverable 1 complete
    [ ] Deliverable 2 complete
    [ ] Deliverable 3 complete
    [ ] Client review and approval
  
  Milestone: Handoff
    [ ] Training session complete
    [ ] SOPs delivered
    [ ] Final invoice sent
    [ ] Final payment received
  
  Milestone: 30-Day Support
    [ ] Day 7 check-in
    [ ] Day 30 ROI checkpoint
    [ ] Case study drafted
    [ ] Google review requested
```

---

## WHAT TO DO WHEN THINGS GO WRONG

**If you miss a deadline:**
Contact the client immediately. Before they contact you.
"I owe you an update — we hit an issue with X that pushed us back by Y days. Here's the new plan."
Never hope they don't notice. They always notice.

**If scope creep happens:**
"That's a great idea — that's outside our current scope, so I'll put together a quick change order. Should take about [time] and cost approximately [amount]. Want me to send that over?"
Never do out-of-scope work for free without a conversation. It trains clients to ask for more.

**If the system doesn't work as expected:**
Own it immediately. Fix it on your own time if it's your error.
If it's caused by something outside your control (client's system changed, API broke), explain clearly and give a timeline.

**If a client is unhappy:**
Get on a call within 24 hours. Don't resolve it over email.
Listen fully before responding.
Fix what's real. Push back professionally on what's not.

**If you need to decline a client:**
Be direct and respectful.
"Based on what you've described, I don't think we're the right fit for this — and I'd rather tell you that now than take your money and underdeliver. Here's what I'd recommend instead."

---

*This SOP is a living document. Update it every time you learn something from a project.*
*The best version of this document is the one you actually use.*
