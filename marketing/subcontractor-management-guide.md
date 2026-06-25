# Subcontractor Management Guide
# American AI Solutions LLC

**Purpose:** When David lands a project larger than he can solo in the timeline, or when specialized skills are needed (advanced ML models, mobile development, EHR-specific integrations), he needs to bring in a subcontractor without losing control of quality, IP, or the client relationship. This guide covers finding, contracting, managing, and paying subcontractors.
**The rule:** The client hired AAIS. They don't need to know about subcontractors unless it affects them — and it only affects them if quality drops. Manage subs so quality never drops.

---

## WHEN TO BRING IN A SUBCONTRACTOR

**Bring in a sub when:**
- Project timeline requires parallel work streams you can't run solo
- Scope requires a specific skill you don't have (e.g., fine-tuning a specialized ML model, Epic EHR integration, embedded systems for manufacturing floor)
- A large project is running alongside another project — you need capacity
- You need a specialized Michigan-based contact who can be on-site for installation

**Don't bring in a sub when:**
- You can complete the project solo within the committed timeline (unnecessary cost + coordination overhead)
- The sub brings client relationship risk (someone who would try to go direct with the client)
- The work involves PHI and the sub hasn't signed a HIPAA-compliant subcontractor agreement

---

## WHERE TO FIND QUALITY SUBCONTRACTORS

### For Python / AI Development

**Toptal** (toptal.com): Top 3% of freelancers, pre-vetted, $50–$150/hour. Slow to onboard but reliable quality.

**Upwork — Expert-Vetted tier:** Top 1% of Upwork, vetted by Upwork team. More cost-effective than Toptal at $40–$100/hour.

**LinkedIn:** Search "Python developer Michigan" or "n8n developer freelance" — local is preferable because on-site visits become possible.

**GitHub:** Find developers who have published relevant open-source work (n8n nodes, AI workflow libraries, healthcare APIs). Reach out directly.

**Referral network:** The most reliable. Ask every developer you know who they'd recommend for [specific skill]. One referral is worth 20 job post applicants.

### For Michigan-Specific Technical Work

**Manufacturing floor connectivity (PLCs, SCADA):** Contact MMTC (Michigan Manufacturing Technology Center) — they have a network of approved technical partners who work with Michigan manufacturers.

**Healthcare EHR integrations:** Contact Michigan Health Information Network (MiHIN) — they know the integrators who work with Michigan EHR systems.

**Embedded systems / IoT:** TechTown Detroit — startup ecosystem with embedded developers.

---

## THE SUBCONTRACTOR VETTING PROCESS

Before bringing anyone onto a project:

**Step 1: Technical screen**
- Have them walk you through a project they've completed that's similar to the current scope
- Ask them to explain their approach to [specific technical challenge in your project]
- Look at GitHub repos or code samples if relevant

**Step 2: Reference check**
- Ask for 1–2 professional references from clients they've worked with
- Call the references: "How did they handle scope changes? How did they communicate when something was running behind?"

**Step 3: HIPAA screen (for healthcare work)**
- Have they worked with PHI before?
- Have they signed a subcontractor BAA (Business Associate Agreement) with a prior firm?
- Do they understand the technical requirements (encryption at rest and in transit, access logging, breach notification)?

**Step 4: Trial task**
- For projects over $5,000 in sub cost, give a small paid trial task ($200–$500) before committing the full project
- This reveals how they communicate, how they scope work, and whether their output matches their pitch

---

## THE SUBCONTRACTOR AGREEMENT

Every subcontractor signs a written agreement before any work begins. This is non-negotiable.

**Key sections in the agreement:**

**1. Scope of Work**
Specific deliverables, not open-ended tasks. Mirror the language from the client SOW for the relevant portion.

**2. Compensation**
Fixed fee (preferred) or hourly rate with a cap. Never open-ended hourly with no cap.
- Payment: 50% at start, 50% at delivery (mirrors AAIS client payment terms)
- Payment triggered only when AAIS receives client payment for that phase

**3. Timeline**
Specific milestones and delivery dates. Include: "Failure to deliver by [date] without prior written communication allows AAIS to terminate this agreement and hire an alternative."

**4. Confidentiality**
All client information, project data, and AAIS business information is confidential. No disclosure to any third party. Survives termination for 3 years.

**5. No-Solicitation (Critical)**
> "Subcontractor agrees not to solicit, accept, or conduct business directly with any client introduced by AAIS for a period of 24 months from the conclusion of this engagement, without prior written consent from AAIS."

This prevents the sub from going direct with the client. This clause is enforceable in Michigan under MCL 445.774a for legitimate business interests.

**6. IP Assignment**
> "All work product, code, documentation, and deliverables created under this agreement are work-for-hire and are the sole property of American AI Solutions LLC and/or its client, as applicable. Subcontractor retains no rights to any deliverable."

**7. BAA Addendum (healthcare projects)**
Include a HIPAA Business Associate Agreement as an exhibit when the project involves PHI.

**8. Governing Law**
Michigan law. Wayne County, Michigan for dispute resolution.

**Get the agreement signed via DocuSign or Pandadoc before any work starts.** Store signed agreements in Google Drive → /Legal/Subcontractor Agreements/

---

## MANAGING SUBCONTRACTORS DURING THE PROJECT

**The daily touchpoint rule:** For any sub working on an active project, a brief async update (Slack DM or Loom video) every business day. Not a full call — just: "What did you complete today, what are you working on tomorrow, any blockers?"

**Weekly sync:** 30-minute video call every week to review progress against the milestone plan.

**What to track in Linear:**
- Create a separate project card for each subcontractor deliverable
- Assign the task to the sub (if you give them Linear access) or track it yourself
- Note the committed delivery date in the task

**Quality gates before client delivery:**
Never show a subcontractor's work directly to a client without reviewing it first. You are the quality layer.
- Review all code or workflow logic before it touches client systems
- Test outputs with realistic data before client demo
- Review all documentation for clarity and accuracy

---

## PRICING SUBCONTRACTED WORK

**Your margin on subcontractor work:** 30–50% above what you pay the sub.

If a sub charges $4,000 for a component, price it at $5,500–$6,000 in your proposal.

This margin covers:
- Project management overhead (your time coordinating)
- Quality review and testing
- Risk (if the sub delivers late or poorly, you still deliver on time)
- Client relationship management

**Never reveal sub costs to clients.** The client hired AAIS — not the sub. Your pricing is what it is. You're not running a pass-through billing model.

---

## THE PREFERRED SUBCONTRACTOR ROSTER

Build a roster of 3–5 vetted subs in each specialty. Once you've worked with someone who's great, keep them. Good technical talent is rare and takes time to find.

Track in Google Sheets:

| Name | Specialty | Rate | Contact | Projects worked | Reliability (1-5) | Notes |
|------|-----------|------|---------|----------------|------------------|-------|
| | | | | | | |

Review and update after every project. Refer good subs to other projects. When a sub performs exceptionally, tell them — and tell others (within your network, not publicly).

---

## WHAT TO TELL THE CLIENT

**Default position:** Don't mention subcontractors unless asked.

**If asked "will you be doing all the work yourself?":**
> "I lead all client engagements and am the primary point of contact for everything. For specialized components, I occasionally work with vetted technical partners — the same way a general contractor brings in an electrician. I'm responsible for the quality of everything that gets delivered, regardless of who builds which component."

This is honest, professional, and accurate.

**Never say:** "I'm outsourcing this to someone cheaper." This is not how to frame it — and it's not accurate. Subcontractors are specialty partners, not cost-cutting measures.

---

## WHEN A SUBCONTRACTOR FAILS

If a sub misses a deadline or delivers poor work:

**Step 1:** Call them immediately. Get a realistic revised timeline. Don't send email first — call.

**Step 2:** Assess impact to client delivery date. If the client deadline is at risk, tell the client now (not later):
> "[Name], I want to give you an updated timeline on [component]. We're running [X] days behind on [specific piece]. Everything else is on track. Here's my plan to make up the time: [specific plan]."

**Step 3:** If the sub can't recover, engage a backup sub immediately. Don't wait for the original sub to fix it if the deadline is at risk.

**Step 4:** Document everything. If you need to withhold final payment due to non-delivery, your documentation (Daily updates you sent, their non-responses, Linear task history) is your evidence.

**Step 5:** Never work with that sub again. One failure is data. Remove them from your preferred roster.

---

## 1099 AND TAX REQUIREMENTS

Any subcontractor paid over $600 in a calendar year requires a 1099-NEC filed by January 31 of the following year.

**Before first payment:** Collect a W-9 from every subcontractor. This is required — not optional.

**Track in:** A simple Google Sheet with subcontractor name, EIN, address, and total paid each year. Hand to your accountant in December.

**Tool:** Use QuickBooks, Wave (free), or Stripe (if paying via Stripe) to track payments. Most accounting software generates 1099s automatically.
