# Team Building Roadmap — American AI Solutions LLC
**Principle:** Hire slow, automate everything possible first. Every hire should multiply your output, not just add to it.
**Target:** Build a full-stack AI consulting operation that runs without David being the bottleneck

---

## PHASE 1: SOLO + AI STACK (Month 0–6)
**Where you are now. Focus: get to $10K MRR before any hires.**

### What "Solo + AI Stack" Means
You are the founder, sales lead, delivery lead, and every other role. But you're not working like a freelancer — you're building systems that make each project faster:

- **Lead intake:** n8n automation (built — see n8n-lead-intake-automation.md)
- **Proposals:** Template + Pandadoc (built — see proposal-sow-template.md)
- **Client communication:** HubSpot CRM + email templates (built)
- **Delivery:** Claude API + n8n for repeatable components (builds reusable automations)
- **Accounting:** Stripe (payments) + QuickBooks Simple Start ($15/month)
- **Legal:** Standard SOW template (built) — call an attorney only for first major contract issue

**Revenue at this stage:** $5K–$15K per project × 2–4 projects/quarter = $10K–$60K/quarter

**When to leave Phase 1:** When you have consistent $10K+ monthly revenue and are turning down work because you don't have time.

---

## PHASE 2: FIRST HIRE — TECHNICAL DELIVERY (Month 6–12)
**Target: Revenue $10K–$20K/month. First hire: a junior AI developer.**

### Why a Developer First (Not a Salesperson)

David is the best salesperson for American AI Solutions LLC right now — nobody else can represent the brand, the local knowledge, and the technical depth better. Hiring sales before delivery capacity is built just creates chaos.

A junior developer frees David to:
- Do more discovery calls and proposals
- Focus on client strategy and relationships
- Build bigger, more complex projects that justify higher prices

### Who to Hire

**Role:** Junior AI/Automation Developer
**Background:** Computer science student (senior or recent grad) OR self-taught developer with a Python/JavaScript portfolio
**What they need to know on day 1:**
- Python (intermediate) — for API integrations and data pipelines
- REST APIs — calling, authenticating, parsing responses
- n8n or similar workflow tools — or willingness to learn fast
- Basic SQL or database understanding
- Comfort with AI API calls (Anthropic, OpenAI)

**What you'll teach them:**
- American AI Solutions' build methodology
- Client communication standards
- Michigan business context (they'll learn from being on calls)
- n8n and our specific toolstack

**Compensation:**
- Starting: $50,000–$65,000/year depending on experience
- Or: $35–50/hour as a 1099 contractor (preferred early on — lower commitment, flexibility)
- Equity: NOT at this stage — equity is for long-term partners, not early hires

**Where to find them:**
1. Wayne State University CS department — post a job, offer a referral bonus to professors who recommend candidates
2. University of Michigan-Dearborn — strong engineering program, often looking for local employers
3. Michigan State CS — post to their job board
4. LinkedIn: "junior developer Python Michigan" — filter for recent grads
5. TechTown Detroit — they know the local tech talent pipeline

**Interview process (keep it practical):**
1. 20-minute phone screen: Background, why AI/automation, salary expectation
2. 2-hour technical screen: Build a simple n8n workflow that calls an API and stores the result
3. 30-minute culture fit with David: Would this person represent American AI Solutions?
4. Offer if above 7/10 on all three

### Onboarding (First 30 Days)

- Week 1: Shadow David on 1 client call. Study all current documentation. Build a sample project from scratch.
- Week 2: Take the lead on one module of an active project (supervised).
- Week 3: Independent work with daily check-in.
- Week 4: Handling own client communication for assigned modules.

**The goal:** By day 60, they can execute 70% of delivery independently, freeing David for sales and strategy.

---

## PHASE 3: SECOND HIRE — SALES / BUSINESS DEVELOPMENT (Month 12–18)
**Target: Revenue $25K–$40K/month. Second hire: a business development rep.**

### Why Sales Second

By Month 12, if things go well:
- You have 1 developer handling delivery
- You have a repeatable sales process (this doc set is the playbook)
- You have 5–10 happy clients who can provide references
- You're turning down discovery calls because you can't keep up

This is when a sales hire makes sense. NOT before.

### Who to Hire

**Role:** Business Development Rep (BDR) / Account Executive
**Background:** 2–5 years B2B sales experience, ideally in technology, manufacturing services, or healthcare administration
**Michigan-based preferred** — they know the market, they have local networks

**What they'll do:**
- Outbound: LinkedIn DMs, cold email, event networking
- Inbound follow-up: First call after lead from website or referral
- Discovery calls (after training — these are structured per the discovery-call-framework.md)
- Proposal delivery (David writes, BDR delivers and handles objections)
- Pipeline management in HubSpot

**Compensation:**
- Base: $45,000–$60,000/year
- Commission: 8–12% of closed deals (first-year deals only)
- OTE (On-Target Earnings): $75,000–$100,000 if hitting quota
- Quota: $30,000–$40,000 in new contracted revenue per month by Month 3

**Where to find them:**
1. LinkedIn: "account executive B2B technology Michigan"
2. Referrals from your banker/CPA/MSP referral partners (they know good sales people)
3. SalesGravy.com (sales-specific job board)
4. Former software sales reps transitioning — they understand tech buying cycles

---

## PHASE 4: OPERATIONS / DELIVERY MANAGER (Month 18–24)
**Target: Revenue $50K+/month. Third hire: an operations lead.**

### What This Person Does
As the team grows, David shouldn't be managing project timelines, client check-ins, and developer task allocation. The Ops Manager handles all delivery logistics:
- Project management: owns the timeline for every active engagement
- Client communication: weekly updates, milestone tracking
- Developer task management: coordinates between multiple developers
- Quality assurance: reviews deliverables before client presentation
- Onboarding: executes the onboarding SOP (client-onboarding-sop.md) for every new client

**Background:** PMP certification or equivalent project management experience, ideally with technology projects

**Compensation:** $65,000–$80,000/year

---

## TEAM STRUCTURE AT SCALE (Year 2–3)

```
David Calderon — Founder / CEO
├── Business Development Rep (sales)
├── Ops Manager (delivery + project management)
│   ├── AI Developer #1 (senior by now)
│   ├── AI Developer #2 (junior, hired ~Month 18)
│   └── AI Developer #3 (intern → full-time, ~Month 24)
└── Part-time support (bookkeeping, admin)
```

**Revenue at this team size:** $600K–$1.2M/year
**Headcount:** 5–6 people
**This is the "productized consulting firm" stage** — standardized process, repeatable delivery, David focused on strategy and relationships

---

## CONTRACTOR NETWORK (Start Building Now)

Before hiring full-time staff, build a bench of contractors. These are specialists you can call in for specific client needs without carrying full-time overhead.

**Roles to have on call:**
| Specialty | Use Case | Where to Find |
|---|---|---|
| Computer vision engineer | Manufacturing inspection projects | Toptal, LinkedIn, ML Papers community |
| EHR integration specialist | Healthcare projects (Epic, Athena) | LinkedIn — former health IT staff |
| Cloud infrastructure (AWS/Azure) | Larger deployments needing cloud setup | Upwork (senior tier), referrals |
| Data engineer | ETL pipelines for analytics projects | LinkedIn, local Michigan bootcamp grads |
| UX/UI designer | Client dashboard and portal design | Dribbble, Behance, local design community |

**Pay rate to expect:** $75–$150/hour for specialized contractors
**Rule:** Never send a contractor solo to a client without David oversight on first engagement

---

## CULTURE AND VALUES (Non-Negotiable for Every Hire)

These apply to every person who represents American AI Solutions LLC:

1. **Execution over optics** — We deliver working software, not impressive-sounding plans
2. **Radical honesty** — If something isn't working, we say it immediately. No sugarcoating to clients or to each other.
3. **Detroit-grounded** — We understand Michigan. We respect the industries we work in. We don't parachute in from elsewhere with Silicon Valley assumptions.
4. **Client success is the only metric** — Every decision about how to build something starts with "what gets the client the best outcome?"
5. **Compounding standards** — Every project should raise our standards. The second client should get a better system than the first, because we learned from the first.
6. **Accessible to everyone** — AI for real businesses, not just the ones with $1M tech budgets. We make the complex accessible.
7. **Values win long-term** — We don't take shortcuts that compromise client trust or business integrity. Michigan is a small market. Your reputation compounds.

**Hiring filter:** Before making any offer, ask: "Would I be proud to have this person represent American AI Solutions to a Michigan manufacturing CEO?" If the answer is anything less than a clear yes — don't hire.

---

## TEAM COMPENSATION PHILOSOPHY

- **Pay competitively** — You get what you pay for. Cheap hires are expensive.
- **Commission for sales** — Align incentives. BDR earns when clients close.
- **Performance bonuses** — Not guaranteed, tied to actual business results
- **Equity** — Reserved for true co-founders or long-term strategic hires who join before the business is established. Not for early employees unless they're taking real risk.
- **Transparency** — Every employee should understand how the company makes money and what their role's contribution is to that revenue

---

## TOOLS FOR MANAGING A TEAM

When you have your first hire:
- **Communication:** Slack ($8/user/month) — one channel per project, one general
- **Project management:** Linear ($8/user/month) or Notion ($8/user/month)
- **File sharing:** Google Drive (free with Workspace at $6/user/month)
- **Time tracking** (contractors): Harvest or Toggl (both free for small teams)
- **HR/payroll** (when you have W-2 employees): Gusto ($40/month base + $6/employee)
- **Benefits** (when required): QSEHRA (Qualified Small Employer HRA) — allows you to reimburse employees for individual health insurance, very flexible for small companies
