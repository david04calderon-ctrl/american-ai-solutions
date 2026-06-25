# Incident & System Failure Communication SOP
# American AI Solutions LLC

**Purpose:** When a live client system breaks, what you do in the first 60 minutes determines whether the client trusts you more or less than before the incident. A handled incident — communicated quickly, resolved professionally, documented clearly — can actually strengthen the relationship. A silent or slow one kills it. This SOP tells you exactly what to do and say.
**The rule:** Communicate before the client asks. If they discover the issue before you tell them, you've already lost.

---

## INCIDENT SEVERITY LEVELS

### Level 1 — Critical (system down, business impact)
**Definition:** The AI system is not producing output, or is producing incorrect output that has already been used in business decisions. Client is affected right now.

**Examples:**
- Quality report not generated on Friday — client missed OEM submission deadline
- Prior auth AI stopped running — staff are back to manual process
- Dispatch system offline — dispatchers operating without optimization
- Estimating tool returning errors on live bids

**Response time:** Immediate — within 60 minutes of detection
**Communication:** Phone call first, followed by written summary within 2 hours

---

### Level 2 — Significant (degraded performance, imminent impact)
**Definition:** System is running but output quality has degraded, or a failure is imminent without intervention. Client not yet affected but could be if unresolved.

**Examples:**
- API rate limit approaching (output will stop if not fixed in 4 hours)
- Data pipeline running 8 hours behind schedule
- Dashboard loading slowly — may affect Monday morning review
- AI output accuracy dropped from 98% to 88% — still usable but below target

**Response time:** Within 4 hours of detection
**Communication:** Email first, phone if no response within 2 hours

---

### Level 3 — Minor (no business impact, monitoring required)
**Definition:** System behaving unexpectedly in a way that doesn't affect output quality or business operations, but needs to be documented and monitored.

**Examples:**
- One integration log showing occasional errors but self-correcting
- Non-critical alert threshold triggered
- Dashboard aesthetic issue (display formatting)

**Response time:** Within 24 hours, typically at next scheduled check-in
**Communication:** Email, include in next status report or check-in

---

## LEVEL 1 — CRITICAL INCIDENT RESPONSE

### Step 1 — Detect and verify (0–15 minutes)

Before calling the client:
- Confirm the system is actually down (not just a monitoring false alarm)
- Identify the most likely root cause (API failure, n8n workflow error, data source issue, credential expiry)
- Check if there's a simple fix (restart the workflow, refresh the credential, clear the queue)
- If it's a 5-minute fix: fix it first, then notify the client

**If it's not a 5-minute fix:**
- Document what you know: what failed, when it failed, estimated impact
- Open the client's project in Google Drive — have the system architecture diagram ready
- Then call.

### Step 2 — Initial phone call (15–30 minutes)

> "[Name] — calling about the [system name]. I'm seeing an issue that I want to flag immediately rather than wait. [Specific thing that's wrong — e.g., 'The quality report workflow stopped running at 2 AM this morning — I can see in the logs that the ERP API returned an authentication error.']
>
> Right now: [what the client should do or not do — e.g., 'Don't rely on the automated report for today's OEM submission — I want to confirm the fix before you use the output.']
>
> I'm working on this now. I'll have an update for you in [realistic timeframe]. Is there anything on your end that's time-critical in the next [X hours]?"

**Key points:**
- Lead with the fact, not the apology
- Give them a specific action (or no action)
- Give them a realistic timeline for your update
- Ask what's time-critical — this tells you how much urgency they're feeling

### Step 3 — Resolve (timeline varies)

Work the fix. If it's going to take more than 2 hours, send an intermediate update:

> **Text/email:** "[Name] — update: [what you've identified, what you're doing, revised timeline]. Will keep you posted."

Keep updates coming every 90 minutes if the issue extends past 2 hours.

### Step 4 — Resolution notification (immediately when resolved)

**Email within 30 minutes of fix:**

> Subject: [Company] — System restored: [what was fixed]
>
> [Name] —
>
> The [system] is back up as of [time].
>
> **What happened:** [One paragraph — specific, honest, non-technical enough for a business owner to understand. Example: "The ERP API authentication token expired overnight — it's set to rotate every 90 days, and the automatic refresh failed. We've fixed the token and added a monitoring alert so this won't happen silently again."]
>
> **What we fixed:** [Bullet list — specific]
> - [Fix 1]
> - [Fix 2]
>
> **What we changed to prevent recurrence:** [Specific — "Added a daily credential health check that alerts me 7 days before token expiry." or "Added a failover data path if the primary API is unavailable."]
>
> **Impact summary:** [Honest — "The quality report was delayed approximately 4 hours. The 8 AM OEM submission was unaffected. No data was lost."]
>
> I'll follow up on this in our next check-in call. If anything looks off or the team has questions, call me directly.
>
> David

### Step 5 — Post-incident review (24–48 hours later)

Send a brief post-incident document (1 page max):

> **[Company] — Incident Review**
> **Date:** [Date]
> **System:** [System name]
> **Severity:** Level 1
>
> **Timeline:**
> - [Time]: Issue detected
> - [Time]: Client notified
> - [Time]: Root cause identified
> - [Time]: Fix implemented
> - [Time]: System restored
>
> **Root cause:** [Technical + plain English]
>
> **Business impact:** [Duration, what was affected, what was not affected]
>
> **Corrective actions implemented:**
> - [Action 1] — prevents recurrence by [how]
> - [Action 2]
>
> **No further action required from your team.**

This document goes in the client's `06 — Post-Delivery` Google Drive folder. If they're on a retainer, it counts as documentation of the retainer's value.

---

## LEVEL 2 — SIGNIFICANT ISSUE RESPONSE

**Initial email (within 4 hours of detection):**

> Subject: [Company] — [System name] — early notice, no action needed yet
>
> [Name] —
>
> Wanted to flag something before it becomes an issue.
>
> [Specific finding: "The n8n workflow is running about 8 hours behind schedule due to [cause]. Based on current pacing, the Friday report will generate Saturday morning unless we intervene."]
>
> **My plan:** [What you're doing to fix it — "I'm adjusting the queue processing rate now. The system should catch up by end of business Thursday."]
>
> **Action needed from you:** [Usually: "Nothing right now — I'll update you by [time] if anything changes."]
>
> David

**Follow up:** If resolved, send a one-line confirmation email. If escalates to Level 1, switch to Level 1 protocol.

---

## LEVEL 3 — MINOR ISSUE DOCUMENTATION

Document in the next weekly status report or monthly check-in:

> **MONITORING NOTE:**
> The [component] logged [X] errors this week. All were self-corrected and had no impact on output. I've added additional logging to track this pattern. If it escalates, I'll flag separately.

No phone call needed. Transparency without drama.

---

## WHAT NEVER TO DO

**Never go silent.** If you're working on a fix and there's no update for 3+ hours, send a 1-line text: "Still on it — update in 60 min." Radio silence makes clients assume worst case.

**Never blame the client's systems.** Even if their ERP threw the error: "The integration between our system and your ERP encountered an authentication issue" — not "your ERP is broken."

**Never minimize before confirming.** Don't say "it's probably nothing" until you've confirmed it's nothing.

**Never promise a timeline you can't keep.** If you need 4 hours, say 4 hours. Under-promise, over-deliver.

**Never fix without documenting.** Even a 5-minute fix gets a 3-sentence entry in the project log. You'll be asked what happened at the next check-in.

---

## INCIDENT LOG TEMPLATE (GOOGLE DRIVE)

Create `06 — Post-Delivery/Incident Log — [System Name].gsheet` at project close:

| Date | Time | Severity | Description | Root Cause | Resolution | Duration | Impact | Prevented by Retainer? |
|------|------|----------|-------------|------------|------------|----------|--------|------------------------|
| | | L1/L2/L3 | | | | [hr] | | Y/N |

Review this log at every 90-day check-in and quarterly business review. It becomes the evidence base for why the retainer is worth it.

---

## THE INCIDENT AS A RETAINER ARGUMENT

At the 90-day call or next QBR, if there was a Level 1 incident:

> "We had that issue in [month]. The system was down for [X hours]. Because I was monitoring it, I caught it before your team noticed. Fixed, documented, added prevention. Total impact to you: zero. That's what the retainer covers — someone watching it so you don't have to."

A handled incident + a retainer pitch = a client who signs for 12 more months.

---

## PROACTIVE MONITORING SETUP

For every live client system, set up:

**n8n error notifications:**
- Add a final node to every workflow: IF execution fails → send email/SMS to david@americanaisolutionsllc.com
- Include: workflow name, error message, timestamp, client name
- SMS via Twilio (already in tech stack): urgent alerts wake you up

**API health checks:**
- n8n scheduled workflow, every 6 hours: ping the key APIs (ERP, EHR, TMS) and verify response
- If any API returns unexpected status: immediate alert

**Data freshness checks:**
- For any dashboard: set up a "last updated" timestamp
- If data hasn't refreshed within expected window: alert

**Monthly health check:**
- First Monday of each month (part of retainer Tier 1): manually review all client systems
- Check error logs, API call volumes, output accuracy metrics
- Log findings in Google Drive

This monitoring infrastructure is what makes the retainer valuable enough to renew — and what prevents Level 1 incidents from becoming client-relationship crises.
