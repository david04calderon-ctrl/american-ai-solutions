# American AI Solutions LLC — Legal & Compliance Checklist
## David Calderon | Detroit, MI | david@americanaisolutionsllc.com

---

## ENTITY STATUS

**[ ] Verify LLC is Active with Michigan LARA**
- URL: michigan.gov/lara → Business Entity Search
- Search: "American AI Solutions"
- Confirm: Status = "Active", Resident Agent current, Annual Report filed
- Annual Report due: February 15 each year ($25 filing fee)
- If not filed: File at michigan.gov/lara immediately — $50 late fee after deadline

**[ ] EIN (Employer Identification Number)**
- Apply free at irs.gov/ein if not already obtained
- Takes 10 minutes online, issued immediately
- Required for: business bank account, contracts, 1099s to contractors
- EIN goes on your W-9 (clients will request before paying you)

**[ ] Michigan Business Tax Registration**
- Register at michigan.gov/taxes → Business Tax
- Required for: invoicing in Michigan, compliance
- Annual filing if revenue crosses $350K threshold

**[ ] Business Bank Account**
- Keep business and personal funds completely separate
- Recommended: Chase Business Complete Banking (no monthly fee with $2K balance)
- Or: Mercury Bank (online, no fees, great for startups)
- Never mix personal and business money — pierces the LLC liability shield

---

## REQUIRED DOCUMENTS (build these before signing first client)

### 1. Service Agreement / Master Services Agreement (MSA)
**Status: [ ] Not created | [ ] Draft exists | [ ] Attorney reviewed**

Key clauses every AIS contract must include:

**Scope of Work**
- Exact deliverables in writing — no ambiguity
- What is NOT included (scope exclusions)
- Change order process (written approval required for anything outside scope)

**Payment Terms**
- 50% deposit before work starts (non-refundable)
- 50% on delivery or at milestone checkpoints
- Net-7 payment terms (7 days from invoice)
- Late payment: 1.5% per month on overdue balances

**IP Ownership**
- All custom code, workflows, and systems built by AIS transfer to client upon final payment
- AIS retains right to use anonymized project descriptions for portfolio/marketing
- Client data remains client's property at all times
- AIS does NOT retain copies of client data after project close

**Confidentiality**
- AIS agrees to keep client processes, data, and business information confidential
- Mutual NDA recommended for healthcare and automotive clients
- Clause survives termination of agreement

**HIPAA Business Associate Agreement (BAA)**
- REQUIRED for any healthcare client
- If you touch, process, or store Protected Health Information (PHI): BAA is mandatory
- Template BAA: HHS.gov has a model BAA template (free, legally sufficient)
- Never start healthcare work without a signed BAA

**Limitation of Liability**
- AIS liability capped at total fees paid for the engagement
- Not liable for: indirect damages, lost profits, data loss
- Client responsible for backups of their own systems before integration

**Termination**
- Either party may terminate with 14-day written notice
- Client pays for all work completed through termination date
- AIS delivers all completed work product on final payment

**Governing Law**
- Michigan law governs
- Disputes: binding arbitration in Wayne County, Michigan

---

### 2. Statement of Work (SOW) Template
**Status: [ ] Not created | [ ] Draft exists | [ ] In use**

The SOW is attached to the MSA for each project. It specifies:
- Project name and start date
- Specific deliverables (numbered list, each with acceptance criteria)
- Timeline with milestone dates
- Fixed price and payment schedule
- Technical dependencies (client must provide: API access, test data, system credentials)
- Out-of-scope items explicitly listed
- Support terms (30-day post-launch)

See: `operations/proposal-template.md` for the full SOW template

---

### 3. Non-Disclosure Agreement (NDA)
**Status: [ ] Not created | [ ] Draft exists | [ ] In use**

Use a mutual NDA when:
- Client is sharing proprietary process information before signing
- During discovery calls with major automotive/healthcare clients
- Any time client says "this is confidential" before you've signed anything

One-page mutual NDA is sufficient. Key terms:
- Confidential information defined broadly (verbal + written)
- 2-year term (standard)
- Excludes publicly known information
- Michigan jurisdiction

---

### 4. Independent Contractor Agreements
**Status: [ ] Not needed yet | [ ] Draft exists | [ ] In use**

If you hire freelancers or subcontractors:
- They must sign an IC agreement before any work begins
- IC agreement must include: work-for-hire clause (IP transfers to AIS), confidentiality, no-poach clause
- Issue 1099-NEC to any contractor paid $600+ in a calendar year
- Do NOT misclassify employees as contractors (IRS audits this)

---

## INSURANCE (get before first paying client)

**[ ] General Liability Insurance**
- Covers: bodily injury, property damage, basic business claims
- Recommended: $1M per occurrence / $2M aggregate
- Cost: ~$300–$600/year for a 1-person consulting firm
- Where to get: Next Insurance (nextinsurance.com) — online, 10 minutes
- Required by: some enterprise clients as a contract condition

**[ ] Professional Liability / E&O Insurance (Errors & Omissions)**
- Covers: claims that your work caused financial harm to a client
- Recommended: $1M per occurrence
- Cost: ~$500–$1,500/year
- Why it matters: If an automation malfunctions and a client loses revenue, this covers you
- Get this before you have healthcare or automotive clients

**[ ] Cyber Liability Insurance**
- Covers: data breaches, ransomware, client data exposure
- Relevant because: you handle client system credentials and data
- Cost: ~$500–$1,000/year for small firms
- Highly recommended for healthcare clients

**[ ] Umbrella Policy**
- Adds coverage on top of other policies
- Consider when revenue exceeds $100K/year

---

## HEALTHCARE-SPECIFIC COMPLIANCE (HIPAA)

If you work with any Michigan medical practice, hospital, or health system:

**[ ] HIPAA Business Associate Agreement (BAA) — REQUIRED**
- Sign before any engagement starts
- Use HHS model BAA template at hhs.gov
- Keep signed copies on file indefinitely

**[ ] PHI Handling Procedures**
- Document how PHI is processed, stored, and deleted
- Never store PHI in: personal email, Slack, Google Drive (unless HIPAA Business plan)
- Acceptable: on-premise systems (as designed), HIPAA-compliant cloud (AWS GovCloud, Azure Government)
- Delete all PHI after project closeout

**[ ] On-Premise Deployment Documentation**
- For healthcare clients: document that AI processing happens on their infrastructure
- This is a key differentiator — it's your sales pitch AND a legal protection
- Maintain architecture diagrams showing no PHI leaves client environment

**[ ] HIPAA Training**
- Complete at least basic HIPAA awareness training annually
- HHS.gov/hipaa has free training materials
- Document your completion (date, material, certificate if available)

---

## AUTOMOTIVE / OEM COMPLIANCE

**[ ] IATF 16949 Awareness**
- Know the basics if working with Tier 2/3 suppliers
- You don't need certification — but understanding OEM audit requirements helps you sell
- Your AI systems should produce documented, traceable outputs (audit logs, reports)

**[ ] Cybersecurity Considerations**
- Automotive clients may require CMMC or NIST SP 800-171 compliance
- For Tier 2/3 suppliers who receive government-funded OEM contracts: ask if they have federal contracts
- If yes: their vendors (you) may need to meet federal contractor cybersecurity standards
- Start with NIST Cybersecurity Framework basics if this applies

---

## MICHIGAN GRANT FUNDING COMPLIANCE

**Going PRO Talent Fund — Michigan LEO**
- [ ] Verify current status and availability at michigan.gov/leo
- Requires: eligible training activities, Michigan-based employer, complete application
- Application must be submitted BEFORE training starts (not retroactive)
- Keep all training records, attendance logs, receipts
- AIS role: help client identify eligible AI training activities and document them

**Industry 4.0 Tech Grant**
- [ ] Verify current program at MEDC or michigan.gov
- Requires: small manufacturer status (fewer than 500 employees typically)
- Application documentation: project description, cost breakdown, vendor quotes (get AIS quote in writing)
- Reimbursement: up to 50% of eligible costs after completion
- AIS role: structure the engagement to include eligible cost categories, provide documentation

**Documentation Practice for Grant-Funded Clients:**
- Issue formal invoices (not just emails) with itemized costs
- Keep timesheets or activity logs if billing time-based components
- Provide project completion certificates when applicable
- Save all correspondence — grants are auditable

---

## TAX OBLIGATIONS

**[ ] Quarterly Estimated Taxes**
- As an LLC owner: you pay income tax + self-employment tax (15.3%) on profit
- Pay quarterly to avoid penalties: April 15, June 15, September 15, January 15
- Estimated payment: 25–30% of projected net profit each quarter
- Use IRS Form 1040-ES to calculate and pay

**[ ] Michigan Income Tax**
- Michigan individual income tax: 4.25% flat rate
- Pay through Michigan Treasury Online (MTO) at michigan.gov/taxes

**[ ] Sales Tax**
- Michigan: software and SaaS services are generally NOT subject to sales tax
- Custom development services: generally NOT taxable in Michigan
- Verify with a Michigan CPA if scope changes

**[ ] Bookkeeping**
- Recommended: Wave Accounting (free) or QuickBooks Simple Start ($17/month)
- Categorize every expense from day one — makes taxes clean
- Key deductions: home office, software subscriptions, phone, internet, equipment, meals with clients

**[ ] Annual CPA**
- Hire a CPA for annual tax return — cost ~$500–$1,500
- Saves far more than it costs
- Look for one familiar with Michigan LLCs and tech services

---

## CONTRACTS ACTION PLAN (Do This Week)

1. **Today:** Download HHS BAA template — save to Google Drive as "AIS BAA Template"
2. **This week:** Draft your MSA using the clauses above — 2–3 pages max
3. **Before first client:** Get MSA reviewed by a Michigan business attorney (1 hour = ~$300)
   - Recommended: Small business attorneys in Detroit/metro — search "Michigan technology attorney"
   - Or: LegalZoom Business Advisory Plan (~$39/month) for unlimited attorney questions
4. **Pandadoc setup:** Upload MSA + SOW template to Pandadoc as reusable templates
5. **Every client:** SOW signed before any work starts. No exceptions.

---

## QUICK REFERENCE — What Triggers What

| Client type | Required before work starts |
|-------------|----------------------------|
| Any client | Signed MSA + SOW + 50% deposit |
| Healthcare | + HIPAA BAA + on-premise architecture confirmation |
| Automotive/OEM | + check for federal contract scope |
| Grant-funded | + formal quote/invoice structure from day one |
| Freelancer/subcontractor | + IC agreement before any work |

---

*Last reviewed: June 2026. Verify grant program details at michigan.gov before client commitments.*
*This document is operational guidance — not legal advice. Have an attorney review your contracts.*
