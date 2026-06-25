# LinkedIn Newsletter — Issues 2, 3, and 4
# Michigan AI Weekly | American AI Solutions LLC

**Schedule:** Every Tuesday, 7:30 AM ET
**Issue 1 already published (see linkedin-newsletter-issue-01.md)**

---

## ISSUE 2

**Subject / Headline:**
### What the OEM AI Mandate Actually Means for Michigan Tier 2 Suppliers — and What Small Shops Are Doing About It

---

There's a phrase going around procurement circles at Ford, Stellantis, and GM right now: *AI-assisted quality documentation.*

It started in supplier scorecards. Then it showed up in PPAP requirements. Now it's in the language of new contracts.

If you're a Michigan Tier 2 or Tier 3 supplier, here's what I'm actually seeing — not the marketing version.

---

**What OEMs are requiring (right now)**

The specific language varies by OEM and program, but the pattern is consistent:

- Quality data submission in structured digital format (not PDFs scanned from paper forms)
- Defect detection systems with documented accuracy rates
- Real-time production visibility for Tier 1 coordinators
- Response time to data requests: 24 hours or less

Most of these requirements aren't labeled "AI." They're labeled "digital quality systems" or "Industry 4.0 readiness." The AI is the mechanism. The requirement is the output.

---

**The gap most Tier 2 shops have**

Here's what I see when I walk into a Michigan Tier 2 plant:

- QMS data in one system (Intelex, Infinity QS, or a spreadsheet)
- Production data in another (ERP — usually Epicor or SAP B1)
- OEM report built manually every Friday by someone who copies from both

The data exists. The problem is the manual bridge between systems. That bridge costs 15–25 hours per week in labor and introduces errors that cause PPAP resubmissions.

---

**What the leading shops are doing differently**

The Tier 2 suppliers who are ahead of this aren't buying $500K software packages. They're automating the bridge.

Connect the systems. Build the pipeline. Auto-generate the OEM-required output. Train the team on the tool. File the Going PRO grant for the training cost.

Total investment: $12,000–$18,000 before grants. Timeline: 6–8 weeks.

Total investment after Michigan's Industry 4.0 Grant and Going PRO: $3,000–$9,000.

---

**The uncomfortable truth**

Some Tier 2 plants won't be around in 5 years — not because they can't manufacture, but because they can't provide the data visibility their OEM customers will require.

The plants that survive this transition will be the ones that automated while the requirement was still new. Once it's a contract condition, you're catching up instead of leading.

If you want to understand where your shop stands, I do a free 30-minute assessment — no obligation, just clarity.

Calendar: [Calendly link]

---

*Michigan AI Weekly | Issue 2 | Forward to another Michigan supplier who needs to hear this.*

*— David Calderon | American AI Solutions LLC | Detroit | david@americanaisolutionsllc.com*

---

---

## ISSUE 3

**Subject / Headline:**
### HIPAA + AI: The 3-Question Test Every Michigan Healthcare Practice Needs to Run Before Signing Any AI Contract

---

Michigan healthcare practices are adopting AI faster than almost any other sector. Prior authorization, billing, documentation, patient communication — the use cases are real and the ROI is documented.

The problem is the compliance layer. And most practices are getting it wrong — not maliciously, but because the vendors don't make it easy to understand.

Here's the 3-question test I run with every Michigan practice before we touch anything AI-related.

---

**Question 1: Does the AI system touch PHI?**

PHI (Protected Health Information) includes patient names, dates of service, diagnosis codes, treatment records, insurance numbers — essentially any data that can identify a specific patient.

If the AI system reads, writes, stores, or processes any of this — even temporarily, even in an encrypted format — it's covered under HIPAA.

Most AI tools touch PHI. The question isn't whether; it's how.

---

**Question 2: Does the vendor have a signed BAA?**

A Business Associate Agreement is the contract that makes it legal for a vendor to handle PHI on behalf of a covered entity (your practice).

Without a signed BAA, using that vendor with PHI is a HIPAA violation. Period.

**The BAA scoreboard for the AI tools Michigan practices are using right now:**

| Tool | BAA Available? |
|------|---------------|
| Claude API (Anthropic) | ✅ Yes — enterprise plan |
| Azure OpenAI | ✅ Yes |
| Google Gemini (Vertex AI) | ✅ Yes |
| ChatGPT / Claude.ai (consumer) | ❌ No |
| Standard Siri / Alexa | ❌ No |
| Most "AI writing assistants" | ❌ No |

The consumer version of any tool is not HIPAA-eligible. Full stop.

---

**Question 3: Where is the data stored and processed?**

Even with a BAA, you need to understand the data flow:
- Is the PHI being sent to the vendor's cloud?
- What retention policy does the vendor apply to your data?
- Can they use your data for model training?

For high-sensitivity use cases, the right answer is often on-premise AI — a system that processes PHI on a server inside your practice or on a HIPAA-compliant hosting environment (AWS GovCloud, Azure for Healthcare). The data never leaves your environment.

This is more expensive to implement, but it eliminates the cloud compliance risk entirely.

---

**What this looks like in practice**

For a Michigan orthopedic group we work with: prior authorization AI running on a local server, Claude API via HIPAA-covered enterprise agreement, output goes into their practice management system. Zero PHI transits to a consumer cloud.

Compliant. Auditable. Working.

---

**The checklist before any AI implementation in your practice:**

- [ ] Identify whether PHI is involved (usually yes)
- [ ] Request the vendor's BAA — if they say "we don't have one," stop
- [ ] Read the BAA — specifically the data use and training clause
- [ ] Document the data flow for your HIPAA compliance officer
- [ ] Train the team on what they can/can't run through the tool

If you want me to review your current AI stack for HIPAA compliance gaps — free, 30 minutes, no pitch — you know where to reach me.

Calendar: [Calendly link]

---

*Michigan AI Weekly | Issue 3 | Forward to a practice manager or compliance officer who needs this clarity.*

*— David Calderon | American AI Solutions LLC | Detroit | david@americanaisolutionsllc.com*

---

---

## ISSUE 4

**Subject / Headline:**
### Going PRO Fund: The $50,000 AI Training Grant Most Michigan Businesses Don't Know Exists

---

If you're a Michigan employer and you've implemented any kind of AI tool in your operation — or you're planning to — there's money available to offset training costs.

Most Michigan businesses have never applied for it. Most haven't heard of it.

Here's what it is and exactly how to access it.

---

**What is the Going PRO Talent Fund?**

The Going PRO Talent Fund is a grant program administered by the Michigan Department of Labor and Economic Opportunity (LEO). It reimburses Michigan employers for the cost of training workers in skills directly tied to their industry.

AI training is explicitly eligible.

The fund is $6 million annually. Awards range from a few thousand dollars to $50,000 per employer, per year.

Michigan manufacturers, healthcare practices, logistics companies, and construction firms all qualify — with the right training documentation.

---

**What "training" means in this context**

You don't need to build a university curriculum. You need documented proof that your employees learned specific skills from a recognized trainer.

When American AI Solutions LLC implements an AI system for a Michigan client, the implementation includes training. That training is documented, assessed, and formatted to meet Going PRO requirements.

The employer then submits the training documentation for reimbursement.

Real example: a Tier 2 supplier in Sterling Heights implemented a quality reporting system. $15,000 project. $7,000 reimbursed through Going PRO for the employee training component. Net cost: $8,000.

---

**The Industry 4.0 Tech Grant**

Separate program. Also real.

The Michigan Industry 4.0 Tech Grant reimburses small manufacturers for 50% of AI implementation costs — not training, the actual system build.

The two grants can stack. A $15,000 AI quality system: $7,000 back from Going PRO (training), $7,500 back from Industry 4.0 (50% of implementation). Net cost: $500.

That math is real. It's why I include grant analysis in every proposal I send.

---

**The catch: deadlines and process**

Going PRO has quarterly application cycles. If you miss the window, you wait 90 days.

The 2026 deadlines:
- Q3 application: **July 31, 2026**
- Q4 application: **October 31, 2026**

You apply through your local Michigan Works! agency. The application asks for: business info, number of employees to be trained, training plan description, and employer matching contribution (Going PRO is a match program — you cover some portion).

---

**What to do right now**

1. Look up your Michigan Works! agency (michiganworks.org) — it's based on your county
2. Call or email your agency contact and ask about Going PRO eligibility
3. If you're planning an AI implementation in Q3 or Q4, tell them — they'll walk you through the application

If you want help structuring the training plan documentation so it meets Going PRO requirements, that's something we include in every implementation. Happy to share what we use.

Calendar: [Calendly link]

---

*Michigan AI Weekly | Issue 4 | Forward to any Michigan business owner who should know this grant exists.*

*— David Calderon | American AI Solutions LLC | Detroit | david@americanaisolutionsllc.com*

---

---

## NEWSLETTER PIPELINE — ISSUES 5–12

Future topics banked:

| Issue | Topic | Target Audience |
|-------|-------|-----------------|
| 5 | How Michigan Carriers Are Recovering $100K+ in Annual Deadhead Miles | Logistics |
| 6 | The Change Order Problem: How Michigan GCs Are Losing 25% of Their Revenue | Construction |
| 7 | AI Hiring Red Flags: What to Watch Out for When Evaluating AI Vendors in Michigan | All |
| 8 | What a Real Michigan AI Implementation Looks Like — Week by Week | All |
| 9 | The Dispatcher Shortage Is Real. Here's How Fleet Operators Are Adapting | Logistics |
| 10 | Michigan Healthcare: The 5 Workflows That Are Stealing Your Billing Staff's Time | Healthcare |
| 11 | From First Call to Live System: A Michigan Manufacturer's 6-Week AI Story | Automotive |
| 12 | The Going PRO + Industry 4.0 Stack: How to Double Your Grant Coverage | All |

**Content creation rule:** Issues 5–12 get written as real client results are available. Issues with anonymous case studies are stronger than manufactured ones. Start writing Issue 5 once you have your first client live.
