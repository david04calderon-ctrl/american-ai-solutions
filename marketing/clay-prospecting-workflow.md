# Clay Prospecting Workflow
# American AI Solutions LLC

**Purpose:** Clay is the engine that finds the right Michigan prospects, enriches them with decision-maker contact data, and personalizes outreach at scale. This guide gives you the exact Clay tables, enrichment waterfalls, and Instantly.ai integration setup for each of the 4 Michigan verticals.
**Goal:** 100 verified, personalized cold emails per week with <2 hours of weekly manual effort.
**Rule:** Never spray. Every email should read like you spent 10 minutes researching them. Clay makes that possible at scale.

---

## CLAY ACCOUNT SETUP

**Plan:** Clay Pro ($149/month) — required for LinkedIn enrichment + unlimited AI personalization
**Integrations to connect in Clay:**
- LinkedIn Sales Navigator (via Clay's native connector)
- Apollo.io (backup contact finder)
- Clearbit (company enrichment)
- Hunter.io (email verification)
- Instantly.ai (outbound delivery)
- HubSpot (sync all enriched leads)
- Claude API (AI personalization)

---

## VERTICAL 1 — AUTOMOTIVE / TIER 2-3 SUPPLIERS

### Who to target

**Title targeting (LinkedIn Sales Navigator):**
- Quality Manager / Quality Director
- Plant Manager / Plant Director
- Operations Manager / VP Operations
- Continuous Improvement Manager / Lean Manager
- Manufacturing Engineering Manager
- Supply Chain Manager (for supplier scorecard use case)

**Company targeting:**
- Industry: Industrial Machinery, Automotive, Metal Fabrication, Plastics Manufacturing
- Company size: 50–500 employees
- Geography: Michigan (Southeast + Flint + Lansing corridors specifically)
- Keywords: "Tier 2 supplier" OR "Tier 3 supplier" OR "OEM supplier" OR "automotive stamping" OR "automotive injection molding" OR "IATF 16949"

**NAICS codes (for Apollo/ZoomInfo):**
- 336300 — Motor vehicle parts manufacturing
- 332111 — Iron and steel forging
- 332900 — Other fabricated metal products
- 326199 — Other plastics product manufacturing

### Clay table setup — Automotive

**Table name:** `Michigan Auto Suppliers — Q3 2026`

**Columns:**
| Column | Source | Purpose |
|--------|--------|---------|
| Company | LinkedIn Sales Nav | Primary |
| Title | LinkedIn Sales Nav | Filter: Quality/Plant/Ops |
| First Name | LinkedIn → Apollo | Personalization |
| Last Name | LinkedIn → Apollo | Email building |
| LinkedIn URL | LinkedIn Sales Nav | Profile research |
| Work Email | Apollo → Hunter waterfall | Delivery |
| Company Size | Clearbit | Qualification |
| Revenue Est | Clearbit | Qualification |
| HQ City | Clearbit | Michigan confirmation |
| OEM Customers | Clay AI + LinkedIn | Personalization: "Your work with [OEM]..." |
| Certifications | Clay AI + LinkedIn | Personalization: IATF 16949, AIAG reference |
| Recent News | Clay Perplexity enrichment | Hyper-personalization |
| Pain Signal | Clay AI reasoning | Trigger first line |
| Verified | Hunter.io | Quality gate |

**Clay AI column — Pain Signal prompt:**
```
Based on this company profile: {{Company}}, {{Company Size}} employees, 
Michigan automotive supplier, likely OEM customers: {{OEM Customers}},
certifications: {{Certifications}}.

In 1 sentence, identify the most likely quality or operations pain point 
this company faces based on current OEM AI requirements and Tier 2/3 
industry pressures. Be specific. Example output: "As a Tier 2 stamping 
supplier to Ford, they're likely under pressure to automate quality 
reporting as FORD Q1 requirements expand to AI-assisted defect documentation."
```

**Clay AI column — First line personalizer:**
```
Write a single opening sentence for a cold email from David at American AI Solutions LLC 
(Detroit-based AI implementation firm) to {{First Name}} at {{Company}}.

Context: {{Recent News}} | Pain signal: {{Pain Signal}} | OEM customers: {{OEM Customers}}

Rules:
- Sound human, not AI-generated
- Reference something specific about their company OR the pain signal
- Do NOT mention AI in the first sentence
- Do NOT use "I hope this email finds you well" or similar openers
- Length: 1 sentence, max 25 words

Examples of good first lines:
"Saw you're supplying [OEM] on the [program] — the quality reporting requirements out of that program have gotten brutal this year."
"[Company] running IATF 16949 — curious whether your quality team is doing that OEM data submission manually or if you've automated any of it."
```

### Instantly.ai campaign setup — Automotive

**Campaign name:** `Michigan Auto Suppliers — Q3 2026`
**Sequence:** Use `email-sequence-automotive.md` — 4-email sequence
**Personalization tag in Instantly:** `{{first_line}}` → maps to Clay's First line personalizer column
**Send settings:**
- Daily limit: 30 emails/day per sending account
- Sending window: 7:00 AM – 11:00 AM ET (highest open rates)
- Sending days: Mon–Thu (avoid Friday)
- Reply detection: Pause sequence on reply
- Out-of-office detection: Resume in 5 days

---

## VERTICAL 2 — HEALTHCARE / MEDICAL PRACTICES

### Who to target

**Title targeting:**
- Practice Manager / Office Manager (primary — they feel the pain)
- Medical Director / Chief Medical Officer (secondary — they approve budget)
- Revenue Cycle Manager / Billing Manager
- Operations Director (multi-location practices)
- Health System Administrator (for larger targets)

**Company targeting:**
- Industry: Health Care and Social Assistance
- Company size: 10–200 employees
- Geography: Michigan
- Keywords: "medical practice" OR "physician group" OR "multi-specialty" OR "urgent care" OR "orthopedic" OR "cardiology" OR "primary care"
- EXCLUDE: hospitals (different sales cycle), single-physician practices (too small)

**NPI database (free, high-quality source):**
NPPES NPI Registry (npiregistry.cms.hhs.gov) — search by:
- State: Michigan
- Entity type: Organization (Type 2)
- Taxonomy code: 207 (Internal Medicine), 208 (Family Practice), 261 (Urgent Care), 238 (Physical Therapy)
- Export: Free bulk download

**Pro tip:** NPI data gives you practice name, address, phone. Upload to Clay, then enrich with Clearbit + Apollo for decision-maker contact.

### Clay table setup — Healthcare

**Table name:** `Michigan Medical Practices — Q3 2026`

**Columns:**
| Column | Source | Purpose |
|--------|--------|---------|
| Practice Name | NPI / LinkedIn | Primary |
| Practice Type | NPI taxonomy | Qualification |
| Physician Count | Clearbit / Apollo | Qualification (target 5+ physicians) |
| Decision Maker Name | Apollo → LinkedIn | Contact |
| Title | Apollo | Filter: Manager/Director |
| Work Email | Apollo → Hunter | Delivery |
| EHR System | Clay AI + LinkedIn | Personalization |
| Payer Mix | Clay AI reasoning | Personalization |
| Recent News | Clay Perplexity | Hyper-personalization |
| Pain Signal | Clay AI | Trigger |
| HIPAA Concern Flag | Clay AI | Ensure email avoids PHI |
| First Line | Clay AI | Personalization |

**Clay AI column — EHR guesser (highly accurate for personalization):**
```
Based on the practice type ({{Practice Type}}) and size ({{Physician Count}} physicians),
what EHR system are they most likely using in Michigan? 

Common Michigan practice EHRs by type:
- Family practice/IM 1-5 physicians: Athena, eClinicalWorks, or Office Ally
- Multi-specialty 5-20 physicians: Epic (if hospital-affiliated), Athena, or Greenway
- Urgent care: Athena, Experity, or Veradigm
- Orthopedic: Modernizing Medicine, Greenway
- Cardiology: Epic or Meditech (if hospital-affiliated)

Return: Best guess EHR + confidence (High/Medium/Low). Example: "Athena (High)"
```

**Clay AI — First line personalizer (Healthcare):**
```
Write a single opening sentence for a cold email from David at American AI Solutions LLC
(Detroit-based AI implementation firm) to {{First Name}}, {{Title}} at {{Practice Name}}.

Context: {{Practice Type}} practice, {{Physician Count}} physicians, EHR likely {{EHR System}}.
Pain signal: {{Pain Signal}}

Rules:
- Reference their specific practice type and a relevant admin burden
- Do NOT mention patient data or anything that sounds like PHI access
- Do NOT use medical jargon excessively
- Sound like a peer, not a vendor
- Length: 1 sentence, max 25 words

Good examples:
"Prior auth at a [specialty] practice — I imagine the [payer] submission process alone is a part-time job."
"Running {{Physician Count}} physicians on what's probably {{EHR System}} — that prior auth queue doesn't manage itself."
```

**Sending cadence — Healthcare:**
- Send Tuesday–Thursday (Monday = catchup day, Friday = early out)
- Time: 8:00 AM – 10:00 AM ET
- IMPORTANT: All emails must be CAN-SPAM compliant. No references to specific patient outcomes. No claims that aren't documented.

---

## VERTICAL 3 — LOGISTICS / TRUCKING

### Who to target

**Title targeting:**
- Owner (for smaller carriers under 100 trucks)
- VP Operations / Director of Operations
- Director of Safety / Safety Manager
- Dispatch Manager / Fleet Manager
- President (family-owned carriers common in Michigan)

**Company targeting:**
- Industry: Truck Transportation, Freight Brokerage
- Company size: 15–300 employees
- Geography: Michigan + Northern Indiana + Northern Ohio (they operate the I-94/I-75 corridor)
- Fleet size: 20–200 trucks (sweet spot — large enough for AI ROI, small enough that you can implement)

**FMCSA SAFER database (free, authoritative source):**
safer.fmcsa.dot.gov/CompanySnapshot.aspx
- Entity type: Carrier
- State: Michigan
- Truck count: Filter for 20–200 power units
- Operation type: Interstate (target)
- Safety rating: Satisfactory or Conditional (Conditional = urgent CSA pain)
- Export to spreadsheet via FMCSA SAFER portal or third-party tool (SaferWatch API)

**Why FMCSA first:** It's free, comprehensive, and gives you fleet size and safety rating — two critical qualification data points. Then enrich with Clay for decision-maker contacts.

### Clay table setup — Logistics

**Table name:** `Michigan Carriers — Q3 2026`

**Columns:**
| Column | Source | Purpose |
|--------|--------|---------|
| Company | FMCSA SAFER | Primary |
| USDOT Number | FMCSA SAFER | Unique ID |
| Power Units | FMCSA SAFER | Qualification |
| Safety Rating | FMCSA SAFER | Pain signal (Conditional = urgent) |
| CSA Score | FMCSA SAFER | Pain signal |
| Owner/Decision Maker | Apollo → LinkedIn | Contact |
| Email | Apollo → Hunter | Delivery |
| TMS System | Clay AI + LinkedIn | Personalization |
| ELD System | Clearbit + LinkedIn | Personalization (Motive/Samsara common) |
| HQ City | FMCSA | Michigan confirmation |
| Recent News | Clay Perplexity | Personalization |
| Pain Signal | Clay AI | Trigger |
| First Line | Clay AI | Personalization |

**Clay AI — First line (Logistics):**
```
Write a single opening sentence for a cold email from David at American AI Solutions LLC
to {{Owner Name}}, owner of {{Company}} ({{Power Units}} trucks based in {{HQ City}}, Michigan).

Context: Safety rating: {{Safety Rating}}. ELD: likely {{ELD System}}. TMS: likely {{TMS System}}.
Pain signal: {{Pain Signal}}

Rules:
- For carriers with Conditional safety rating: reference CSA pressure subtly
- Otherwise: reference dispatch efficiency or deadhead
- Sound like you know the trucking business
- No generic opener
- 1 sentence, max 25 words

Good examples:
"Running {{Power Units}} trucks in Michigan — at that scale, deadhead starts to get expensive."
"Saw the {{Safety Rating}} rating on FMCSA — CSA pressure has been relentless this year for carriers in the {{HQ City}} corridor."
```

---

## VERTICAL 4 — CONSTRUCTION / TRADES

### Who to target

**Title targeting:**
- President / Owner (GC firms under $25M — owner is the decision maker)
- VP of Operations / VP of Estimating
- Chief Estimator / Senior Estimator
- Project Director (larger GC firms)

**Company targeting:**
- Industry: Construction, Specialty Trade Contractors
- Company size: 10–150 employees
- Geography: Southeast Michigan, Mid-Michigan, West Michigan
- Keywords: "general contractor" OR "GC" OR "commercial contractor" OR "HVAC contractor" OR "electrical contractor" OR "plumbing contractor"

**Michigan Licensing and Regulatory Affairs (LARA) — free source:**
State of Michigan contractor license database → searchable by license type and county
- Residential Maintenance & Alteration Contractor
- Commercial Builder
- Mechanical Contractor
- Electrical Contractor

**AGC Michigan member directory:**
Michigan AGC (agcmi.org) — members are commercial GCs. Request member directory or scrape public listing.

### Clay table setup — Construction

**Table name:** `Michigan GCs & Specialty Trades — Q3 2026`

**Columns:**
| Column | Source | Purpose |
|--------|--------|---------|
| Company | LARA / AGC | Primary |
| Trade Type | LARA | Personalization (GC vs. HVAC vs. electrical) |
| Decision Maker | Apollo → LinkedIn | Contact |
| Title | Apollo | Filter |
| Email | Apollo → Hunter | Delivery |
| Revenue Est | Clearbit | Qualification |
| Employee Count | Clearbit | Qualification |
| Project Types | Clay AI + LinkedIn | Personalization |
| Software Used | Clay AI + LinkedIn | Procore/Buildertrend reference |
| Recent Projects | Clay Perplexity | Personalization |
| Pain Signal | Clay AI | Trigger |
| First Line | Clay AI | Personalization |

---

## THE CLAY → INSTANTLY → HUBSPOT WORKFLOW

### Step 1: Build the Clay table
- Source prospects from the vertical-specific sources above
- Run enrichment waterfall (LinkedIn → Apollo → Clearbit → Hunter)
- Run AI columns (EHR guesser, Pain Signal, First Line)
- Filter: Remove anyone with unverified email, company size out of range, or outside Michigan
- Target: 100 verified prospects per week per active vertical

### Step 2: Quality review (30 min/week)
- Scan the AI-generated first lines — reject any that sound generic or wrong
- Spot-check 10 random records for accuracy
- Remove anyone who is already in HubSpot as a contact

### Step 3: Push to Instantly
- Export Clay table to CSV OR use Clay's native Instantly integration
- Create new campaign in Instantly with vertical-specific sequence
- Map Clay columns to Instantly personalization tags: `{{first_name}}`, `{{company}}`, `{{first_line}}`
- Launch — 25–30 emails/day per vertical

### Step 4: Instantly → HubSpot sync
- Set up Zapier trigger: Instantly reply received → Create HubSpot contact
- Map: Email, Name, Company, Campaign name → HubSpot Source field
- Create HubSpot deal at "Discovery Call Requested" stage when reply is positive
- Tag: Source = Cold Email — [Vertical] — Clay

### Step 5: Weekly cadence
| Day | Activity |
|-----|----------|
| Monday | Review replies from last week; respond or book calls |
| Tuesday | Build next week's Clay table (100 new prospects) |
| Wednesday | QA Clay table; push to Instantly |
| Thursday–Friday | Instantly running; monitor for responses |

---

## CLAY METRICS TO TRACK (WEEKLY)

| Metric | Target | Warning |
|--------|--------|---------|
| Prospects enriched per week | 100 | <75 = pipeline risk |
| Email verified rate | >80% | <65% = source quality issue |
| Open rate | >45% | <30% = subject line problem |
| Reply rate | >4% | <2% = copy problem |
| Positive reply rate | >1.5% | <1% = targeting problem |
| Discovery calls booked | >2/week | <1/week = red flag |
| Cost per booked call | <$50 | >$100 = recalibrate |

**The math:** 100 emails/week × 4% reply rate = 4 replies. 4 replies × 50% positive = 2 booked calls. 2 calls/week × 4 weeks = 8 calls/month. At 25% discovery→close: 2 clients/month. At $12K average: $24K/month by Month 3.

---

## FIRST WEEK SETUP CHECKLIST

- [ ] Clay account created and credit card on file (Pro plan)
- [ ] LinkedIn Sales Navigator connected in Clay
- [ ] Apollo.io API key entered in Clay (Basic plan sufficient for enrichment)
- [ ] Hunter.io API key entered in Clay (500 verifications/month free tier)
- [ ] Claude API key entered in Clay (for AI personalization columns)
- [ ] Instantly.ai account created, 2 Gmail sending accounts warmed up
- [ ] HubSpot connected to Instantly via Zapier
- [ ] First Clay table built: Michigan Auto Suppliers (100 prospects)
- [ ] First Instantly campaign launched with automotive email sequence
- [ ] Weekly Clay review ritual added to Monday routine (per weekly-execution-dashboard.md)
