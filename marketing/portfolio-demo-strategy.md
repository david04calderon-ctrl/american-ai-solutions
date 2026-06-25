# Portfolio & Demo Strategy
# American AI Solutions LLC — Before You Have Case Studies

**Purpose:** The most common question from prospects before signing: "Can I see an example of your work?" Before you have real client case studies, you need a strategy to demonstrate capability, build trust, and show proof of competence. This is not about lying — it's about showing what you can build before you've been paid to build it.
**Rule:** You don't need 10 clients to prove you can build. You need one great demo that shows exactly what a client would get.

---

## THE FOUR PROOF STRATEGIES (In Order of Impact)

### Strategy 1: The Vertical Demo System

Build a working demo for each vertical using simulated data. This is the single most effective pre-client credibility asset.

**What it is:** A live, working AI system for each vertical — built on realistic simulated data — that you can show on screen in a 15-minute demo call.

**Automotive Demo:** Quality dashboard with simulated OEE data, defect rates, and shift performance. Powered by n8n + Claude API. Shows real-time updates. Answers the question: "What would an OEM auditor see?"

**Healthcare Demo:** Prior authorization workflow with simulated (not real) patient data. Shows the full cycle: insurance data in → Claude analysis → pre-filled auth form out. Zero PHI. Shows: "This is what your billing team would see."

**Logistics Demo:** Dispatch dashboard with simulated truck positions, load assignments, and deadhead calculations. Shows AI-generated load match suggestions. Shows: "This is what your dispatcher would see at 6 AM."

**Construction Demo:** Estimating workflow — PDF blueprint (publicly available sample) goes in, material quantities and cost estimate come out. Shows change order capture tracker. Shows: "This is what your estimator would use."

**How to build each demo:** 2–3 full days per vertical. Use n8n locally or on your DigitalOcean server. Use Claude API with simulated data. Build a simple web front-end (Streamlit or basic HTML) to display results.

**How to use it:** In the discovery call, when the prospect says "show me what this looks like," say: "I built a live demo for your vertical — let me share my screen." The call converts at a dramatically higher rate after this.

**Time investment:** 6–8 days total to build all 4 vertical demos. This is the best investment before the first client.

---

### Strategy 2: The Loom Demo Library

Record a series of 3–5 minute Loom videos showing each demo system in action. These become:
- Attachments in proposals
- LinkedIn content
- Reply to prospects who say "I'd love to see an example"

**Loom video structure for each demo:**
1. "Here's the problem this solves" — 30 seconds, show the manual process
2. "Here's what the AI system looks like" — 2 minutes, live demo on screen
3. "Here's the result" — 30 seconds, the output or dashboard state after the AI runs
4. "This is what we'd build for your operation, customized to your data" — 30 seconds, CTA

**Where to store:** Loom account (free tier has 25 videos). Share links via email, proposals, LinkedIn DMs.

**Script:** Use the loom-intro-video-script.md templates as the foundation — customize for demo screen walk-through.

---

### Strategy 3: The Open-Source Portfolio

Build and publish 2–3 open-source projects on GitHub that demonstrate AI competence. These don't need to be client work — they're proof of technical depth.

**Project ideas that align with AAIS verticals:**

**"Michigan Manufacturing AI Starter Kit"** — An open-source n8n workflow template that connects a simulated PLC data stream to a Claude analysis API and generates a quality report. Publish on GitHub with a README.

**"HIPAA-Safe AI Architecture Guide"** — A GitHub repo documenting the correct way to implement AI in healthcare using Anthropic API under BAA. No client data — just architecture documentation and sample code structure.

**"Fleet Dispatch Optimization Demo"** — A Python script that takes simulated truck location + load data and uses Claude API to generate optimal dispatch suggestions. Runnable demo with sample data included.

**How to use:** Link to GitHub in proposals. Mention in LinkedIn posts ("I published a guide to HIPAA-safe AI architecture — link in comments"). This demonstrates expertise, not just claims.

---

### Strategy 4: The "Audit" as Portfolio Piece

The $2,500 AI Workflow Audit is itself a portfolio strategy. An audit produces a 10–15 page document mapping the client's operation and recommending specific AI solutions. This document:

1. Shows what AAIS produces (prospect can't fake this)
2. Often converts to a full implementation
3. If it doesn't convert, you still have a paid project and a work sample

**Offer the first audit at a reduced rate if needed.** If you need a first paid deliverable to break the credibility barrier, offer the first audit at $1,500 instead of $2,500 — or offer it at full price to a warm lead (former colleague, referral partner's contact) who will give you permission to reference the audit. Never do it free.

---

## THE DEMO CALL FRAMEWORK

When a prospect asks to "see your work" before committing:

**Step 1 — Set the expectation:**
> "I'll show you a live demo system I built for your vertical. It's running on simulated data, not client data — but it's the real technology, the same logic, and the same interface a client would use. Give me 15 minutes."

**Step 2 — Run the demo (15 minutes):**
- Open screen share
- Show the input (data coming in or form being submitted)
- Show the AI processing step (briefly — don't show the n8n workflow unless they're technical)
- Show the output (the dashboard, the report, the recommendation)
- Show one "what if" scenario — change a variable and show the system respond

**Step 3 — Customize it in real time:**
> "What you're seeing is built on simulated data from a generic [automotive/healthcare/logistics/construction] operation. Your system would connect to [their specific system they mentioned in discovery]. The output format would match [what they use — Excel, their ERP, their EHR]. Let me show you what that would look like."

This personalizes the demo without overpromising. You're not showing their system — you're showing what their system would look like.

**Step 4 — The ask:**
> "Does this show you what you'd be working with? The proposal I'm sending you is for a system that does exactly this — but calibrated to your data, your formats, and your team."

---

## HANDLING "DO YOU HAVE CLIENT REFERENCES?"

Before you have clients, be direct:

**Version 1 (if you have no clients yet):**
> "I'm at an early stage in the business — I'm building my first client roster in Michigan. What I can offer instead of client references is a live demo of the system I'd build for you, and references from former colleagues and professional contacts who can speak to how I work. I'd also propose a $2,500 workflow audit as a first step — a low-risk way for you to evaluate the quality of my work before committing to a full engagement."

This is honest, disarming, and offers a clear path forward.

**Version 2 (if you have one or two clients):**
> "I have a small number of clients I'm actively working with in Michigan. I'm not yet at the point where I'll share client names publicly without their explicit permission — that's a professional courtesy I extend to everyone. What I can do is connect you with one contact who I'm working with — if that would be helpful — or show you the work product directly via demo."

**The audit offer** is always the right bridge. A prospect who agrees to a $2,500 audit has already committed to a relationship. The reference question rarely comes up again after the audit.

---

## FIRST CLIENT ACQUISITION STRATEGY (The Fast Path)

The fastest path to a first paid client — not the largest client, but a real, paying, referenceable client:

**Target:** Warm network contact who runs or manages a Michigan business in any of the 4 verticals.

**Offer:** "I'm launching AAIS and looking for a founding client to work with at a reduced rate in exchange for a testimonial and case study permission. I'm offering the first project at 50% of standard pricing. In return, I'd ask for a testimonial, a case study I can use in proposals, and a willingness to be a reference on calls."

**Why this works:** $7,500 for a Quick Deploy (50% of $15,000) is still a real project at real pay. You get a case study. They get an AI system at half price. The ROI math still works for them — the system still delivers the same value.

**Where to find this first client:** Former colleagues, LinkedIn 2nd-degree connections, referral from a CPA or banker you know personally, someone you've helped with anything tech-related in the last 5 years.

**Do this in Month 1.** Don't wait for the perfect prospect. Get one real project done, document the results, and the credibility problem disappears permanently.

---

## THE PORTFOLIO PAGE (Website Addition)

Once you have 1–2 completed projects, add a Results/Portfolio section to americanaisolutionsllc.com:

**URL:** americanaisolutionsllc.com/results/

**Content for each case study card:**
- Vertical + company size (anonymous: "Tier 2 Michigan Automotive Supplier, 85 employees")
- The problem: one sentence
- What we built: one sentence
- The result: 2–3 specific metrics
- Quote (if permission given)
- Optional: "Read the full case study" → PDF download (lead capture)

**Before you have published case studies,** this page can say:
> "Our clients share results when we've earned the right to. Case studies are published with client permission and only when the results are worth talking about. The first studies are being documented now. In the meantime, we'd rather show you a live demo of what we build than show you a polished marketing document."

This turns the absence of case studies into a credibility signal — you don't publish fluff, you publish results.
