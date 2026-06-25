# Michigan AI Use Case Library
# American AI Solutions LLC

**Purpose:** Internal reference for discovery calls. When a client describes a problem, find the matching use case here — it gives you an immediate, proven answer instead of an improvised one. Every use case includes the problem, solution type, timeline, ROI range, grant eligibility, and the discovery questions that surface it.
**How to use:** Before a discovery call, review the 4–5 use cases most likely for their vertical. During the call, when they describe a problem, you'll recognize it. After the call, pull the matching use case to inform the proposal.

---

## AUTOMOTIVE / TIER 2–3 MANUFACTURING

### Use Case AUTO-01 — Quality Reporting Automation

**The problem:** Quality team spends 15–25 hours per week manually pulling data from production, QMS, and ERP systems to build OEM-required reports. Error rate is high because data is re-entered manually.

**AI solution:** Automated data pipeline from ERP/QMS → dashboard → auto-generated weekly report in OEM-required format. Alert triggers for defect threshold breaches.

**Timeline:** 6–8 weeks
**Total project cost:** $12,000–$18,000
**ROI:** 15–22 hours/week recovered at $35–$55 blended labor rate = $27K–$63K annually
**Grant eligibility:** Going PRO (staff training on new system) + Industry 4.0 (50% implementation)
**Net cost after grants:** $3,000–$9,000

**Discovery questions that surface this:**
- "How do you currently prepare your quality reports for [OEM customer]?"
- "How many hours per week does your quality team spend on reporting vs. actual quality work?"
- "What format does your OEM require the report in — and do you build that manually?"

---

### Use Case AUTO-02 — Defect Detection / Vision AI

**The problem:** Visual inspection is done manually by line workers at end-of-process. Defect escape rate is 1–3%, which causes OEM warranty claims and potential line shutdowns. Inspection slows line throughput.

**AI solution:** Computer vision system on existing cameras (or new low-cost industrial cameras) analyzes parts in real time. Flags defects automatically. Staff reviews flagged items rather than all items.

**Timeline:** 8–12 weeks (hardware setup + model training on client's defect catalog)
**Total project cost:** $18,000–$32,000 (includes camera hardware if needed)
**ROI:** 1% defect escape on a $10M parts line = $100K+ in warranty exposure/year. Vision AI typically reduces escapes by 60–80%.
**Grant eligibility:** Industry 4.0 (50% of implementation costs for manufacturers)

**Discovery questions:**
- "What's your current defect escape rate — and what does one warranty claim cost you?"
- "How is inspection currently done — manual, automated, or both?"
- "Does your OEM have specific defect detection accuracy requirements?"

---

### Use Case AUTO-03 — Supplier Scorecard / Risk Monitoring

**The problem:** Procurement team manually tracks supplier on-time delivery, quality reject rates, and price variance across 50–300 suppliers using spreadsheets. At-risk suppliers aren't identified until after a disruption.

**AI solution:** Automated supplier scorecard pulling from ERP/procurement system. Risk scoring algorithm flags suppliers trending toward failure before they miss a delivery. Weekly digest email to purchasing manager.

**Timeline:** 5–7 weeks
**Total project cost:** $10,000–$16,000
**ROI:** One avoided line shutdown (4-hour stop, 50 workers) = $20K–$60K in lost production. System ROI is typically measured in disruptions avoided.
**Grant eligibility:** Industry 4.0 (50% reimbursement)

**Discovery questions:**
- "How many suppliers do you actively manage, and how do you track their performance?"
- "Have you had supplier-caused disruptions in the last 12 months? What did they cost?"
- "What's your current process for identifying a supplier before they become a problem?"

---

### Use Case AUTO-04 — OEM Audit Preparation AI

**The problem:** IATF 16949 or customer-specific audits require compiling documentation from multiple systems. Audit prep takes 40–80 hours of staff time per audit cycle. Documents are often incomplete or outdated.

**AI solution:** Automated audit document compiler — pulls current data from QMS, ERP, training records, and process docs. Generates audit-ready package in the required structure. Gaps identified before the auditor walks in.

**Timeline:** 6–8 weeks
**Total project cost:** $10,000–$16,000
**ROI:** 40–80 hours of preparation time recovered per audit cycle. Risk reduction of findings/CARs.
**Grant eligibility:** Going PRO (training documentation component)

**Discovery questions:**
- "How many audits do you go through per year — IATF, OEM customer audits, internal?"
- "Who prepares the audit package and how long does it take?"
- "Have you ever had a finding or CAR that stemmed from missing or outdated documentation?"

---

### Use Case AUTO-05 — Production Scheduling Optimization

**The problem:** Scheduler builds next-day/next-week production plan manually, balancing machine capacity, labor availability, material arrival, and OEM pull schedule. Planning takes 3–5 hours daily and still results in inefficiencies.

**AI solution:** Scheduling AI ingests ERP data, OEM forecast, machine maintenance windows, and labor schedule. Generates optimized production sequence. Scheduler reviews and approves rather than builds from scratch.

**Timeline:** 8–10 weeks
**Total project cost:** $14,000–$22,000
**ROI:** Capacity utilization typically improves 8–15%. On a $15M operation, 10% capacity recovery = $1.5M in additional throughput potential.
**Grant eligibility:** Industry 4.0 (50% reimbursement)

**Discovery questions:**
- "How do you currently build your production schedule — what systems, how much time?"
- "What's your biggest scheduling headache right now — material, labor, machine downtime?"
- "What does 1% better OEE mean to your operation in dollars?"

---

### Use Case AUTO-06 — Data Request Automation (Customer Portals)

**The problem:** OEM customers submit ad hoc data requests (PPAP updates, capacity studies, quality data pulls) through portals. Responding requires manual data gathering, formatting, and upload — 2–5 hours per request, multiple times per week.

**AI solution:** Automated data request handler monitors OEM portal for new requests. Pulls required data from ERP/QMS, formats to OEM specs, drafts response. Human reviews and submits.

**Timeline:** 4–6 weeks
**Total project cost:** $8,000–$13,000
**ROI:** 6–15 hours/week recovered at $45–$65 engineering labor rate = $14K–$50K annually
**Grant eligibility:** Industry 4.0

**Discovery questions:**
- "How many ad hoc data requests do you get from your OEM customers in a typical week?"
- "Who handles those — engineering, quality, or operations?"
- "Is there a portal system they use, or do they come via email?"

---

## HEALTHCARE / MEDICAL PRACTICES

### Use Case HEALTH-01 — Prior Authorization Automation

**The problem:** Staff spends 25–35 hours per week on prior authorizations — completing forms, calling payers, following up on pending auths, re-submitting denials. Approval turnaround is 5–14 days, delaying patient care.

**AI solution:** HIPAA-compliant AI workflow (on-premise or BAA-covered cloud). Reads order → builds auth request → submits to payer portal → monitors status → escalates only complex cases to staff.

**Timeline:** 5–7 weeks
**Total project cost:** $10,000–$16,000
**ROI:** 25–35 hrs → 5–8 hrs/week. Denial rate typically drops from 10–15% to 3–6%. At a $5M practice, 7% denial rate improvement = $350K in recovered annual revenue.
**Grant eligibility:** Going PRO (staff training on AI system)
**HIPAA note:** Must be built with BAA-covered AI vendor (Claude API ✓, not Claude.ai consumer ✗)

**Discovery questions:**
- "How many prior authorizations do your staff process per week?"
- "What's your current approval timeline — and how often do you get denials?"
- "Who does the auth work — dedicated staff, nurses, front desk?"

---

### Use Case HEALTH-02 — Patient Communication AI

**The problem:** Staff spends 2–4 hours per day on routine patient communications — appointment reminders, post-visit follow-up, referral status updates, prescription pickup notices. Phones are backlogged.

**AI solution:** HIPAA-compliant patient communication system. Handles outbound reminders, collects responses, routes incoming questions. Integrates with EHR for appointment/prescription data.

**Timeline:** 4–6 weeks
**Total project cost:** $8,000–$14,000
**ROI:** 2–4 hrs/day recovered at $20–$35/hr = $10K–$36K annually. No-show rate typically decreases 20–35% with automated reminders. A 25% no-show reduction at a $200 average visit value = $60K–$120K in recovered annual revenue for a 50-patient-day practice.
**Grant eligibility:** Going PRO (training)
**HIPAA note:** Communication system must be HIPAA-compliant; texting vendor needs BAA

**Discovery questions:**
- "How do you currently handle appointment reminders — calls, texts, automated?"
- "What's your no-show rate, and what does a no-show cost you?"
- "How much time does your front desk spend on phone calls per day?"

---

### Use Case HEALTH-03 — Billing Denial Management

**The problem:** Billing staff processes denial queue manually — reading denial reason, pulling original claim, identifying fix, resubmitting. Denial rate is 8–15%. Staff can only work through 20–30 denials per day.

**AI solution:** AI denial analyzer reads denial reason codes, categorizes by type, identifies fix pattern, auto-drafts corrected claim for biller review and 1-click resubmission. Tracks denial patterns to improve front-end coding.

**Timeline:** 5–7 weeks
**Total project cost:** $10,000–$16,000
**ROI:** Industry benchmark: every 1% denial rate reduction at a $5M practice = $50K in recovered revenue. Staff productivity on denials typically 2–3×.
**Grant eligibility:** Going PRO

**Discovery questions:**
- "What's your current denial rate by payer?"
- "How do you work your denial queue — dedicated staff, biller, outsourced?"
- "What are your most common denial reason codes?"

---

### Use Case HEALTH-04 — Credentialing Monitoring

**The problem:** Practice manager manually tracks credentialing renewal dates for physicians and mid-levels across 5–20 payers. Missed renewals cause claim interruption — sometimes 60–90 days without payment from that payer.

**AI solution:** Automated credentialing tracker monitors all provider/payer combinations. Alerts 90, 60, and 30 days before expiration. Drafts renewal submission. Tracks status.

**Timeline:** 3–4 weeks
**Total project cost:** $5,000–$9,000
**ROI:** One avoided credentialing lapse (60 days, one payer) at a $50K/month payer volume = $100K+ in prevented claim interruption. ROI is in risk avoidance.
**Grant eligibility:** Going PRO

**Discovery questions:**
- "How do you currently track credentialing renewal dates — spreadsheet, software?"
- "Have you ever had a lapse in credentialing that interrupted claims?"
- "How many providers and how many payers are you credentialed with?"

---

### Use Case HEALTH-05 — Clinical Documentation AI

**The problem:** Physicians spend 2–3 hours per day on documentation after patient visits — dictating or typing notes into EHR. Burnout from documentation is a top reason physicians leave practices.

**AI solution:** Ambient clinical AI captures the visit conversation and drafts the SOAP note in the EHR. Physician reviews and signs. Documentation time drops from 2–3 hours to 20–30 minutes.

**Timeline:** 4–6 weeks
**Total project cost:** $9,000–$15,000 (plus per-visit licensing if using ambient AI API)
**ROI:** 90 minutes/day recovered per physician × $150–$300/hr physician cost = $82K–$164K annually per physician. Retention value: one avoided physician replacement = $500K–$1M.
**Grant eligibility:** Going PRO
**HIPAA note:** Highest-risk use case — requires robust BAA, audio data handling policy, patient consent disclosure

**Discovery questions:**
- "How much time are your physicians spending on documentation after hours?"
- "What EHR are you on — Epic, Athena, eClinicalWorks, something else?"
- "Have you looked at ambient documentation tools before — what stopped you?"

---

## LOGISTICS / TRUCKING / FLEET

### Use Case LOG-01 — Dispatch Optimization

**The problem:** Dispatcher manually assigns loads to drivers, checking hours of service, truck locations, fuel costs, and delivery windows. One dispatcher handles 25–40 trucks. Deadhead miles run 18–25%.

**AI solution:** AI dispatch engine connected to TMS (McLeod, Aljex, TMW) and ELD (Motive, Samsara). Recommends optimal load-to-truck assignments. Dispatcher reviews, approves. Handles 60–75 trucks per dispatcher.

**Timeline:** 6–8 weeks
**Total project cost:** $12,000–$20,000
**ROI:** Deadhead reduction from 22% to 15% on a 50-truck fleet running 150K miles/truck = $540K/yr. Dispatcher efficiency: 50→75 trucks/dispatcher = defer one dispatcher hire at $55K/yr.
**Grant eligibility:** Going PRO (dispatcher training on new system)

**Discovery questions:**
- "What's your current deadhead percentage — do you track it?"
- "What TMS and ELD system are you running?"
- "How many trucks per dispatcher do you run right now?"

---

### Use Case LOG-02 — Driver Retention AI

**The problem:** Annual driver turnover is 60–90% (industry average). Cost per driver replacement is $8,000–$12,000 (recruiting, onboarding, lost productivity). Carrier is reactive — can't predict which drivers are at flight risk.

**AI solution:** Driver retention scoring model. Analyzes HOS patterns, late dispatch assignments, maintenance complaint frequency, pay variance, and communication sentiment to predict turnover risk. Flags at-risk drivers for proactive intervention.

**Timeline:** 5–7 weeks
**Total project cost:** $10,000–$16,000
**ROI:** Reducing turnover by 20 drivers at $10K replacement cost = $200K/year. Retention improvement typically 15–25% in year 1.
**Grant eligibility:** Going PRO (training component)

**Discovery questions:**
- "What's your annual driver turnover rate?"
- "What does it cost you to replace a driver — recruiting, onboarding, empty truck days?"
- "How do you currently identify drivers who might be about to leave?"

---

### Use Case LOG-03 — Fuel Analytics

**The problem:** Fuel is 25–35% of operating costs. Fuel manager monitors MPG reports manually — no predictive analysis, no driver coaching system, no real-time routing for fuel efficiency.

**AI solution:** Fuel analytics dashboard pulling from ELD and fuel card data. Identifies low-MPG drivers and root causes (idle time, speed patterns, route choice). Generates coaching recommendations. Flags routing opportunities for fuel savings.

**Timeline:** 4–6 weeks
**Total project cost:** $8,000–$12,000
**ROI:** 1 MPG improvement across 50 trucks at 150K miles/truck at $3.50 diesel = $35K/year. Better drivers + routing typically improves MPG by 1.5–3 MPG.
**Grant eligibility:** Going PRO

**Discovery questions:**
- "What's your current average MPG across the fleet?"
- "Do you track idle time and how it's trending?"
- "What fuel card system do you use — Comdata, EFS, Fleetcor?"

---

### Use Case LOG-04 — CSA Score Monitoring

**The problem:** FMCSA CSA scores are tracked manually or via a third-party service with delayed data. High BASIC scores cause customer pushback and insurance premium increases. Violations aren't correlated to specific drivers or routes for targeted coaching.

**AI solution:** Automated CSA monitoring dashboard. Pulls violation data from FMCSA DataQ. Correlates violations to specific drivers, routes, and equipment. Alerts when BASIC scores approach intervention thresholds. Generates driver coaching plans.

**Timeline:** 4–5 weeks
**Total project cost:** $7,000–$12,000
**ROI:** Avoiding one "Conditional" CSA rating (customer contracts lost, insurance increase) = $150K–$500K in annual revenue impact. Insurance premium reduction of 5–15% = $25K–$75K/year on $500K premiums.
**Grant eligibility:** Going PRO

**Discovery questions:**
- "How do you currently monitor your CSA scores?"
- "What are your current BASIC scores — have you been above the intervention threshold?"
- "How much did your insurance cost last year, and has it increased over last year?"

---

### Use Case LOG-05 — Load Matching / Rate Intelligence

**The problem:** Owner-operator or small fleet uses manual load board search (DAT, Truckstop) and rate guessing. Missing profitable loads. Accepting loads below market rate out of uncertainty.

**AI solution:** Load matching AI monitors multiple load boards simultaneously. Ranks loads by profitability (rate minus deadhead, fuel, driver cost). Provides market rate context for negotiation. Alerts on high-value opportunities.

**Timeline:** 3–5 weeks
**Total project cost:** $6,000–$10,000
**ROI:** 5% rate improvement on $3M in annual load revenue = $150K. Owner-operators typically see 8–15% revenue per mile improvement.
**Grant eligibility:** Going PRO

**Discovery questions:**
- "What load boards are you using right now to find freight?"
- "How do you decide what rate to accept vs. negotiate?"
- "What's your revenue per mile right now?"

---

## CONSTRUCTION / TRADES

### Use Case CON-01 — Estimating Automation

**The problem:** Estimator spends 12–18 hours per bid pulling historical cost data, calculating material takeoffs, and formatting the estimate. Maximum 5–6 bids per month. Win rate 20–30%.

**AI solution:** AI estimating assistant integrated with historical project data. Reads scope documents, pulls comparable historical costs, suggests line items, generates formatted estimate. Estimator reviews and adjusts.

**Timeline:** 5–7 weeks
**Total project cost:** $10,000–$16,000
**ROI:** Bid time: 14 hrs → 3 hrs. Capacity: 5 bids/month → 9 bids/month. At $150K average contract and 25% win rate: 4 additional bids/month × 25% win rate × $150K = $150K additional revenue opportunity/month.
**Grant eligibility:** Going PRO (estimator training)

**Discovery questions:**
- "How long does it take your estimator to put together a typical bid?"
- "How many bids per month are you submitting, and what's your win rate?"
- "Where does the time go — material pricing, labor hours, formatting?"

---

### Use Case CON-02 — Change Order Capture

**The problem:** Field changes happen daily. Foreman verbally approves extra work without documentation. By billing time, some COs are forgotten, others are disputed by owner. Average CO capture rate: 60–70%.

**AI solution:** Mobile CO capture tool for foremen. Photo + voice description → AI drafts formal CO with scope description, pricing from contract rates, and required approval fields. Owner gets email for approval. All COs tracked.

**Timeline:** 4–6 weeks
**Total project cost:** $8,000–$12,000
**ROI:** Typical GC: 15–25 COs/project at average $3,500 each. Capture rate improvement from 65% to 90% = $875/project recaptured × project count. On 10 projects/year: $87,500 additional revenue.
**Grant eligibility:** Going PRO

**Discovery questions:**
- "How do you currently handle field change orders — paper, email, app?"
- "What percentage of change orders do you think you actually collect on vs. what happened in the field?"
- "Have you ever had a dispute with an owner about scope that cost you money?"

---

### Use Case CON-03 — Project Scheduling AI

**The problem:** Project manager builds Gantt chart in Excel or basic software. Doesn't account for subcontractor availability, material lead times, weather patterns, or crew conflicts across multiple projects. Delays cascade.

**AI solution:** AI project scheduler integrated with PM software (Procore, Buildertrend, or standalone). Optimizes sub sequencing, flags conflicts, accounts for lead times, adjusts for weather windows. PM reviews and publishes.

**Timeline:** 5–7 weeks
**Total project cost:** $9,000–$15,000
**ROI:** One avoided 2-week delay on a $1.5M project (liquidated damages, crew standby) = $30K–$75K. Across multiple projects: schedule compression of 10–15% = more revenue per year.
**Grant eligibility:** Going PRO

**Discovery questions:**
- "What project management software do you use?"
- "How often do your projects run over schedule, and what's the typical cause?"
- "Are you running multiple projects simultaneously — and how do you manage the crew/sub conflicts?"

---

### Use Case CON-04 — Subcontractor Bid Analysis

**The problem:** GC receives 5–12 sub bids per trade per project. Comparing them takes 2–4 hours per trade (scope inclusions/exclusions, unit pricing, qualifications). Lowest bid often has hidden exclusions.

**AI solution:** AI bid analyzer reads sub bids, identifies scope gaps and exclusions, flags unit price outliers, generates comparison matrix with apples-to-apples pricing. Estimator reviews normalized bids.

**Timeline:** 4–6 weeks
**Total project cost:** $8,000–$13,000
**ROI:** Time saved: 2–4 hrs/trade × 5 trades × 15 projects/year = 150–300 hrs/year at $60–$90/hr estimator cost = $9K–$27K. Risk reduction from scope gap discovery: 1 avoided scope gap at $25K = $25K.
**Grant eligibility:** Going PRO

**Discovery questions:**
- "How many sub bids are you typically comparing per trade?"
- "How long does it take to normalize and compare them?"
- "Have you ever hired a sub with a price that looked good but had hidden exclusions that cost you?"

---

### Use Case CON-05 — RFI / Submittal Tracking

**The problem:** RFIs and submittals are tracked in spreadsheets or email threads. Response times are missed. Open items aren't flagged for the GC superintendent. Disputes arise about when items were submitted.

**AI solution:** RFI/submittal management AI. Reads incoming RFIs and submittals, logs them with timestamps, tracks response deadlines, sends escalation alerts for overdue items. Generates weekly open-item reports for owner meetings.

**Timeline:** 3–4 weeks
**Total project cost:** $6,000–$10,000
**ROI:** One avoided delay claim (owner blames contractor for slow RFI response) = $20K–$100K in dispute costs. Time saved on tracking: 3–5 hrs/week on active projects.
**Grant eligibility:** Going PRO

**Discovery questions:**
- "How do you track RFIs and submittals right now — what system?"
- "Have you ever had a claim or dispute related to an RFI response time?"
- "How many active projects are you running simultaneously?"

---

## HOW TO USE THIS LIBRARY ON DISCOVERY CALLS

**Before the call:**
1. Review the 5–7 use cases most relevant to their vertical
2. Note the discovery questions — pick 2–3 that you'll work into the conversation naturally
3. Have the ROI ranges memorized — don't look them up during the call

**During the call:**
- Use discovery questions to surface their problems
- When a problem emerges: "That's actually something we've built a solution for — [one sentence summary]. The economics typically look like [ROI range]."
- Don't run through the full use case list. Let them talk. Surface 1–2 matching use cases max.

**After the call:**
- Match 1–3 use cases to what they described
- Build the proposal around those specific use cases with their numbers plugged in
- Use the ROI ranges as starting points — refine with their actual data

**The proposal shortcut:**
Open the relevant use case(s), replace the generic numbers with their numbers from the call, and you have the ROI section of your proposal in 20 minutes.
