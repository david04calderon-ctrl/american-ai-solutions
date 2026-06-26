# Team Training System
# American AI Solutions LLC

**Purpose:** When you bring someone in — a subcontractor, a project lead, a sales person, an ops hire — they get up to speed fast, operate at the AAIS standard, and never have to ask David the same question twice. This system is the institutional knowledge, packaged.

**Format:** Loom videos + this document. David records once, it trains forever.

---

## THE AAIS STANDARD (Every Team Member Learns This First)

Before anyone touches a project, a client, or a system — they understand this:

**We build things that work. Not things that look good in demos.**

Every system we deliver:
- Runs on the client's real data, integrated with their real systems
- Is documented well enough that the client can operate it without us
- Has a 30-day support window and a 90-day results call
- Is backed by Michigan grant documentation where applicable

**We are honest, always.**
- If we hit a problem, we tell the client within 24 hours (Level 1: 60-minute SLA)
- If scope changes, we use the change order protocol — no verbal agreements
- If something isn't working, we say so and we fix it — we don't spin it

**We represent David Calderon and American AI Solutions LLC in every interaction.**
- Every email, every call, every Slack message with a client is a reflection of the brand
- The brand is: Detroit-grounded, accountable, executes

---

## MODULE 1 — COMPANY OVERVIEW (30 min)

**Loom video:** "What American AI Solutions Does and Why It Matters"  
**David records:** Personal intro, mission, Detroit story, who we serve, why we serve them

**Reading:**
- `marketing/michigan-ai-market-intel.md` — understand all 4 verticals
- `marketing/ai-tools-client-guide.md` — understand our tool stack vs. client tools
- `marketing/competitive-positioning.md` — how we win vs. every type of competitor

**Quiz yourself:**
1. What are the 4 Michigan verticals we serve and what's the primary AI use case in each?
2. What's the difference between a Going PRO grant and an Industry 4.0 grant?
3. What's the HIPAA requirement that makes most AI tools wrong for healthcare clients?
4. Why do we turn down clients sometimes?

---

## MODULE 2 — CLIENT EXPERIENCE SYSTEM (45 min)

**Loom video:** "How We Treat Every Client — From First Contact to Year 3"  
**David records:** Walk through the client journey, emotional states, Atlas, the brief, the 90-day call

**Reading:**
- `marketing/ai-agent-client-experience-system.md` — Atlas persona, triage, emotional states, templates
- `marketing/discovery-call-framework.md` — the 30-minute call script
- `marketing/client-onboarding-sop.md` — hour-by-hour from signature to Day 30

**Key rules:**
- Every lead gets a response within 5 minutes during business hours
- Every strategy call gets a pre-call brief prepared by Atlas before David joins
- Every client has a 90-day results call scheduled at go-live
- No verbal scope changes — change order protocol always

---

## MODULE 3 — TECHNICAL FOUNDATION (2-3 hours)

**Loom video:** "Our Build Stack — How AAIS Systems Are Built"  
**David records:** Walk through n8n, Claude API, HubSpot integration, demo environment

**What every team member needs to know:**

**n8n (primary build tool)**
- We run n8n self-hosted on DigitalOcean
- Every client automation is built as an n8n workflow
- Workflows are version-controlled and documented
- Reference: `marketing/n8n-build-guide-technical.md`

**Claude API (primary AI model)**
- Model: Claude Opus 4.8 for reasoning/generation
- Every prompt is tested on real client data before deployment
- Healthcare clients require HIPAA BAA — confirmed before any data touches Claude API
- Reference: `marketing/ai-tools-client-guide.md` (HIPAA BAA table)

**HubSpot Starter (CRM)**
- Every client interaction is logged in HubSpot
- Pipeline stages: Lead → Discovery Call → Proposal Sent → Active Project → Completed → Retainer
- Reference: `marketing/hubspot-setup-guide.md`

**Project management:**
- Linear for internal task tracking
- `marketing/project-status-report-template.md` for weekly client emails (Fridays)
- `marketing/scope-creep-change-order-protocol.md` for scope changes

**Client agreements:**
- MSA + SOW required before any work starts (`marketing/client-master-services-agreement.md`)
- NDA if sensitive data is involved (`marketing/nda-template.md`)
- Healthcare clients need HIPAA BAA addendum (included in MSA)
- All via Pandadoc with e-sign

---

## MODULE 4 — MICHIGAN GRANT SYSTEM (1 hour)

**Loom video:** "Going PRO and Industry 4.0 — How We Handle Grants for Every Client"  
**David records:** Walk through an actual grant application, show the documentation, explain the timeline

**What team members must know:**
- Going PRO: Michigan LEO, quarterly cycles, AI training explicitly eligible, up to $50K/employer/year
- Industry 4.0: 50% reimbursement for technology implementation costs, manufacturers only
- Detroit Small Business Tech Fund: TechTown referral, smaller amounts
- **We handle all grant documentation** — it's part of every project, not an add-on
- Grant cycle Q3 deadline: July 31 (urgent for current clients)

**Reference:** `marketing/going-pro-grant-application-guide.md`

---

## MODULE 5 — SALES + PROPOSALS (1 hour)

**Loom video:** "The AAIS Sales Approach — No Pitch, Just Honest Conversation"  
**David records:** Walk through the discovery call, the proposal, the follow-up

**Key documents:**
- `marketing/discovery-call-framework.md` — the call script and scoring rubric
- `marketing/proposal-sow-template.md` — the full proposal format
- `marketing/proposal-follow-up-system.md` — 30-day follow-up sequence
- `marketing/objection-pricing-guide.md` — 6 pricing objections with counter-scripts
- `marketing/founding-client-offer.md` — the 50% founding client strategy

**Non-negotiables in every proposal:**
- Fixed scope — no "time and materials" ambiguity
- Grant math included — show net cost after Michigan grants
- 90-day results call explicitly committed to
- Baseline metrics capture on Day 1 built into the scope

---

## MODULE 6 — ACTIVE PROJECT MANAGEMENT (45 min)

**Loom video:** "Running a Client Project — Week 1 Through Handoff"  
**David records:** Walk through a project timeline, the weekly check-in format, go-live day

**Weekly rhythm for every active project:**
- Monday: Review Linear tasks, flag any blockers to David
- Friday: Send project status report to client (`marketing/project-status-report-template.md`)
- Ongoing: Document everything in the client's Google Drive folder
- Any blocker > 24 hours: Alert David and draft the client communication immediately

**Go-live checklist:**
- [ ] System tested on real data (not sample/demo data)
- [ ] Client team trained (90-minute session × 2 minimum)
- [ ] SOPs documented and delivered to client
- [ ] Google Drive folder handed to client with full access
- [ ] 30-day support window starts (defined in SOW)
- [ ] 90-day results call scheduled
- [ ] Baseline metrics captured (Day 1 numbers)

---

## MODULE 7 — SUBCONTRACTOR STANDARDS (30 min)

**For all subcontractors and project-based hires:**

**Reading:** `marketing/subcontractor-management-guide.md`

**Key rules:**
- Signed subcontractor agreement before any work (no-solicitation, IP assignment, BAA if healthcare)
- Rate: David pays sub market rate, AAIS margin is 30-40%
- No direct client contact without David's explicit approval
- All deliverables go through David before client delivery
- Weekly check-in cadence: short Loom or Slack update every Friday

**What subs never do:**
- Contact AAIS clients directly for new business (no-solicitation, 2 years, Michigan/national)
- Share AAIS client data with any third party
- Commit to scope changes without a change order
- Miss a Friday update without notifying David in advance

---

## MODULE 8 — INCIDENT RESPONSE (20 min)

**Reading:** `marketing/incident-communication-sop.md`

**The rule:** If something breaks at a client, David knows within 60 minutes. Period.

**Level 1 (System down, client can't work):** 60-minute SLA — ping David immediately, even at 2AM  
**Level 2 (Performance issue, workaround exists):** Alert within 4 hours  
**Level 3 (Minor issue, client not impacted):** Include in Friday status report

**The never-do list:**
- Never tell a client something is fine when you're not sure it is
- Never attempt a fix without documenting what you're doing
- Never go dark on a client — if you don't have the answer yet, say so and give a time you will

---

## LOOM TRAINING LIBRARY — RECORDING SCHEDULE

David records 8 Looms total. Each one is evergreen — records once, trains everyone.

| Loom # | Title | Length | When to record |
|--------|-------|--------|---------------|
| 1 | What AAIS Does and Why It Matters | 10-15 min | Before first hire |
| 2 | How We Treat Every Client | 10-15 min | Before first hire |
| 3 | Our Build Stack (n8n, Claude, HubSpot) | 20-30 min | Before first technical hire |
| 4 | Michigan Grants — How We Do It | 15-20 min | Before first hire |
| 5 | The AAIS Sales Approach | 15-20 min | Before first sales support hire |
| 6 | Running a Client Project | 15-20 min | Before first project hire |
| 7 | Subcontractor Standards | 10 min | Before first sub engagement |
| 8 | Incident Response | 10 min | Before go-live on first client project |

**Recording tips:**
- Record in one take where possible — authenticity matters more than perfection
- Use Fathom (free) for transcription — add transcript as Loom caption
- Store all training Looms in a private Google Drive folder: "AAIS Team Training"
- Share the folder link in the welcome message to every new hire/sub

---

## ONBOARDING CHECKLIST (First 48 Hours)

When someone joins AAIS (hire or sub):

**David sends:**
- [ ] Welcome message with Google Drive training folder link
- [ ] Signed subcontractor agreement or employment agreement
- [ ] NDA (if needed)
- [ ] HubSpot access (viewer level for subs, appropriate level for hires)
- [ ] Linear project access for their specific project
- [ ] Slack/communication channel invite

**New team member completes (Day 1-2):**
- [ ] Watch Loom 1 + 2 (Company + Client Experience)
- [ ] Read michigan-ai-market-intel.md and competitive-positioning.md
- [ ] Read ai-agent-client-experience-system.md
- [ ] Sign all agreements
- [ ] Introduce themselves in Slack with: name, background, what they're working on at AAIS

**David checks in (Day 3):**
- [ ] 20-minute call: any questions on the training?
- [ ] Walk them through their first project or task
- [ ] Set the Friday update expectation

---

## THE CULTURE (NON-NEGOTIABLE)

**We are Detroit.** That means:
- Show up. Every time.
- Do what you say. When you said you'd do it.
- If you can't, say something early — not after the deadline.
- Quality is non-negotiable. "Good enough" is not a AAIS standard.
- We care about the clients. They are real Michigan businesses with real stakes.

**We are 10 steps ahead.** That means:
- Don't wait to be asked. If you see a problem, flag it.
- Don't bring David a problem without at least one idea for a solution.
- Don't let a week go by without learning something new about AI, Michigan business, or the tools we use.

**We build generational.** That means:
- Every system we deliver has to outlast our involvement.
- Every client we serve should still be better off 5 years from now because we worked with them.
- Every team member we bring in should leave better than they arrived.
