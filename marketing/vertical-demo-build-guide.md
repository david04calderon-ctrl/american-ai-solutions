# Vertical Demo Build Guide
# American AI Solutions LLC

**Purpose:** Before the first client, you need something to show. This guide builds 4 live, working AI demos using simulated Michigan business data — one per vertical. Each demo runs on real infrastructure (n8n, Claude API, a simple dashboard) and demonstrates exactly what a client would buy. Total build time: 6–8 days working evenings.
**Why it works:** A live system that processes simulated data is infinitely more convincing than a PowerPoint. When a prospect watches their problem being solved in real time — even on fake data — the conversation shifts from "can you do this?" to "how quickly can we start?"

---

## INFRASTRUCTURE SETUP (SHARED ACROSS ALL 4 DEMOS)

### What you need (one-time setup, ~3 hours)

**DigitalOcean Droplet** (already running for n8n per n8n-build-guide-technical.md)
- Use same droplet — add demo environment as separate n8n project
- If not yet set up: $24/month Basic Droplet (2 vCPU / 4GB RAM) handles all 4 demos

**Demo subdomain:** `demo.americanaisolutionsllc.com`
- Point to DigitalOcean IP via DNS A record
- Caddy handles SSL automatically (same config as n8n)

**n8n demo workspace:**
- Create separate credential set for demo data (no live API keys)
- Use n8n test mode for demo runs — shows real execution, no actual integrations required

**Claude API key:**
- One key handles all 4 demos
- Demo data costs: ~$0.10–$0.30 per full demo run at Claude Haiku 4.5 pricing

**Demo data files (CSV/JSON — simulated, realistic Michigan data):**
- `/demo-data/auto-quality-records.csv` — 500 rows of simulated defect/quality data
- `/demo-data/health-prior-auth.csv` — 200 simulated prior auth requests with payer/code/status
- `/demo-data/logistics-dispatch.json` — 50 simulated loads with truck assignments and routes
- `/demo-data/construction-bids.json` — 3 simulated project bid packages with line items

---

## DEMO 1 — AUTOMOTIVE: QUALITY REPORTING DASHBOARD

**What it demonstrates:** Automated quality report generation from production data
**Demo time on call:** 6–8 minutes
**Wow moment:** "Your OEM report just generated itself. Here's what it would look like."

### Build steps

**Step 1 — Simulated data (1 hour)**

Create `auto-quality-records.csv` with columns:
```
date, shift, line_id, part_number, parts_produced, defects_found, defect_type, inspector_id, oem_customer
```

500 rows, 3 months of data across 3 production lines. Include realistic defect patterns:
- Line 1: 1.2% defect rate, mostly dimensional
- Line 2: 0.8% defect rate, surface finish issues
- Line 3: 2.1% defect rate (simulate a problem line)
- OEM customer: "Ford Motor Company"

Use ChatGPT or Claude to generate the CSV: *"Generate 500 rows of realistic automotive quality control data for a Michigan Tier 2 stamping plant. Include the following columns: [list]. Line 3 should have a higher defect rate trending upward in the last 30 days."*

**Step 2 — n8n workflow (2 hours)**

Build an 8-node workflow:

```
Node 1: Manual Trigger (demo button)
Node 2: Read CSV → auto-quality-records.csv
Node 3: Data Transform → calculate defect rates by line, by shift, by defect type
Node 4: Claude AI → generate the written summary section of the report
  Prompt: "You are a quality reporting AI for a Michigan automotive supplier. 
  Here is this week's production data: {{$json.summary}}. 
  Write a professional 3-paragraph quality summary for Ford Motor Company. 
  Highlight Line 3's trending defect rate. Recommend one corrective action. 
  Tone: factual, professional, suitable for OEM submission."
Node 5: Build Report Object → combine data + AI summary
Node 6: Create Google Doc → auto-fill report template in Drive
Node 7: Send Email → "Your weekly quality report is ready" with link
Node 8: Respond to Webhook → return success JSON
```

**Step 3 — Dashboard (3 hours)**

Build a simple Grafana dashboard OR a single-page HTML file served by the Droplet:

Panels:
- **Defect Rate by Line** (bar chart — Line 3 visually elevated)
- **Defect Rate Trend** (line chart — 12-week trend, Line 3 trending up)
- **Defect Type Breakdown** (pie chart)
- **OEM Compliance Status** (green/yellow/red indicator — Line 3 = yellow)
- **Last Report Generated** timestamp
- **"Generate This Week's Report"** button → triggers n8n workflow

Dashboard URL: `https://demo.americanaisolutionsllc.com/auto-quality`

**Step 4 — Demo script (30 min)**

Write the 7-minute demo script (see Demo Call Framework below).

---

## DEMO 2 — HEALTHCARE: PRIOR AUTHORIZATION AI

**What it demonstrates:** AI reads a prior auth request and submits the correct documentation automatically
**Demo time on call:** 5–7 minutes
**Wow moment:** "The AI just read the clinical notes and wrote the medical necessity letter. Here's what it wrote."

### Build steps

**Step 1 — Simulated data (1 hour)**

Create `health-prior-auth.csv` with columns:
```
patient_id, payer, procedure_code, diagnosis_code, physician, date_ordered, status, denial_reason, days_pending
```

200 rows. Realistic mix:
- 40% approved on first submission
- 35% pending
- 25% denied (with denial codes: CO-4 procedure not covered, CO-50 medical necessity, PR-204 not medically necessary)
- Payers: Blue Cross Blue Shield of Michigan, Priority Health, McLaren Health Plan, Medicaid

**Step 2 — n8n workflow (2 hours)**

```
Node 1: Webhook Trigger (form submission from demo page)
Node 2: Receive auth request data (procedure code, diagnosis, patient summary notes)
Node 3: Claude AI → Analyze auth request
  Prompt: "You are a prior authorization AI for a Michigan medical practice.
  Procedure: {{$json.procedure_code}} ({{$json.procedure_name}})
  Diagnosis: {{$json.diagnosis_code}} — {{$json.diagnosis_description}}
  Clinical notes: {{$json.clinical_notes}}
  
  Write a medical necessity letter for this prior authorization request.
  Length: 3–4 paragraphs. Include: clinical rationale, relevant diagnosis details,
  why alternative treatments are insufficient, regulatory basis (if applicable).
  Format for submission to Blue Cross Blue Shield of Michigan."
Node 4: Build submission package → combines letter + supporting codes
Node 5: Log to Google Sheet → track auth request in tracker
Node 6: Return response to demo page → display the generated letter
```

**Step 3 — Demo interface (2 hours)**

Simple HTML form at `https://demo.americanaisolutionsllc.com/health-auth`:
- Dropdown: Select payer (BCBS, Priority Health, McLaren)
- Text field: Procedure (pre-filled: "MRI Lumbar Spine — CPT 72148")
- Text field: Diagnosis (pre-filled: "M54.5 — Low back pain with radiculopathy")
- Text area: Clinical notes (pre-filled with realistic 3-sentence note)
- Button: "Generate Prior Auth Request"
- Output panel: Shows the AI-generated medical necessity letter in real time (streaming preferred)

**HIPAA note for demo:** All demo data is synthetic. Display a banner: "DEMO ONLY — Simulated patient data, not PHI."

**Step 4 — Pending queue dashboard**

Below the form: table of 10 simulated pending auths with status, days pending, payer, denial reason. Shows the "before" state — the manual tracking chaos the system replaces.

---

## DEMO 3 — LOGISTICS: DISPATCH OPTIMIZATION

**What it demonstrates:** AI assigns loads to trucks based on HOS, location, and profitability
**Demo time on call:** 6–8 minutes
**Wow moment:** "The AI just built tomorrow's dispatch board. Here's how it compares to what you'd manually assign."

### Build steps

**Step 1 — Simulated data (1.5 hours)**

Create `logistics-dispatch.json`:

```json
{
  "fleet": [
    {
      "truck_id": "T-001",
      "driver": "James Morrison",
      "current_location": "Detroit, MI",
      "hos_remaining": 8.5,
      "next_available": "6:00 AM",
      "fuel_level": 0.65,
      "truck_type": "dry_van_53"
    },
    // 14 more trucks across Michigan (Grand Rapids, Lansing, Flint, Toledo)
  ],
  "loads": [
    {
      "load_id": "L-2847",
      "origin": "Sterling Heights, MI",
      "destination": "Columbus, OH",
      "pickup_window": "8:00 AM - 10:00 AM",
      "delivery_deadline": "4:00 PM",
      "rate": 1850,
      "miles": 190,
      "commodity": "automotive parts",
      "weight": 38000,
      "equipment_required": "dry_van_53"
    },
    // 12 more loads
  ]
}
```

**Step 2 — n8n workflow (2.5 hours)**

```
Node 1: Manual Trigger
Node 2: Load fleet + load data from JSON files
Node 3: Pre-process → calculate each truck's deadhead to each load pickup
Node 4: Claude AI → Optimize assignments
  Prompt: "You are a truck dispatch optimization AI. Here is the current fleet status 
  and available loads for tomorrow. For each load, assign the optimal truck based on:
  1. Minimize deadhead miles (empty driving to pickup)
  2. Maximize revenue per mile
  3. Respect hours of service limits
  4. Meet pickup windows
  
  Return a JSON array of assignments with: load_id, truck_id, driver, 
  deadhead_miles, total_miles, revenue, revenue_per_mile, reasoning.
  Also calculate total deadhead percentage for the board.
  
  Fleet: {{$json.fleet}}
  Loads: {{$json.loads}}"
Node 5: Format dispatch board → structured table
Node 6: Calculate metrics → total revenue, avg deadhead%, highest RPM load
Node 7: Return dispatch board to dashboard
```

**Step 3 — Dispatch dashboard (2 hours)**

At `https://demo.americanaisolutionsllc.com/dispatch`:

Top metrics bar:
- Total revenue today: **$XX,XXX**
- Average deadhead: **XX%** (show improvement vs. "manual" baseline)
- Trucks utilized: **14/15**
- Avg revenue/mile: **$X.XX**

Dispatch board table:
| Load | Origin → Dest | Truck | Driver | Pickup | Deadhead | Revenue | RPM |

Below table: AI reasoning section — expandable "Why this assignment?" for each row

**The demo hook:** Run the board manually first (simulated "as-is" — high deadhead), then hit "Optimize with AI" and watch the numbers change. Before: 23% deadhead. After: 15% deadhead. That delta × fleet size × annual miles = the ROI number.

---

## DEMO 4 — CONSTRUCTION: ESTIMATING ASSISTANT

**What it demonstrates:** AI reads a bid package and generates a formatted estimate
**Demo time on call:** 7–10 minutes
**Wow moment:** "The AI just read your spec and built the estimate. 3 hours of work in 90 seconds."

### Build steps

**Step 1 — Sample bid package (1 hour)**

Create a realistic 2-page scope document for a simulated Michigan commercial project:

```
PROJECT: Westland Medical Office Building Addition
OWNER: Westland Health Systems LLC
SCOPE: 4,200 SF medical office addition — structural steel, MEP rough-in, exterior envelope, interior build-out
SPECIFICATIONS:
- Structural: W8x31 steel columns and beams, 20 PSF live load
- Exterior: 4" brick veneer, vapor barrier, R-21 batt insulation
- Roofing: TPO single-ply, 60 mil, 15-year warranty
- MEP: Stubbed rough-in only (separate trade)
- Interior: Metal stud framing, 5/8" GWB, standard commercial finish
- Site: 1,200 SF parking expansion, 4" asphalt
TIMELINE: 90 calendar days, substantial completion by October 15, 2026
```

**Step 2 — Historical cost database (1 hour)**

Create `construction-costs.json` — internal cost database for estimating:

```json
{
  "structural_steel": {
    "erection_per_ton": 1850,
    "material_per_ton": 3200,
    "typical_intensity_per_sqft": 8
  },
  "exterior_brick": {
    "labor_per_sqft": 12.50,
    "material_per_sqft": 8.75
  },
  "tpo_roofing_60mil": {
    "labor_per_sqft": 4.25,
    "material_per_sqft": 3.80
  },
  // ... all divisions
}
```

**Step 3 — n8n workflow (2.5 hours)**

```
Node 1: Webhook → receive project description text
Node 2: Load historical cost database
Node 3: Claude AI → Parse and estimate
  Prompt: "You are an AI estimating assistant for a Michigan general contractor.
  You have access to this historical cost database: {{$json.costs}}
  
  Project scope: {{$json.scope}}
  
  Generate a detailed construction estimate with:
  1. CSI Division breakdown (Divisions 01-09 as applicable)
  2. Material cost, labor cost, and total per division
  3. General conditions (10-12% of direct costs)
  4. Overhead and profit (12-15%)
  5. Contingency (5%)
  6. Total bid price
  
  Also flag: any ambiguous scope items, missing information needed for accurate pricing,
  and 3 value engineering options that could reduce cost by 5-15%.
  
  Format as a professional bid summary table."
Node 4: Format estimate → structured HTML table
Node 5: Return to demo interface
```

**Step 4 — Demo interface (2 hours)**

At `https://demo.americanaisolutionsllc.com/estimate`:

Input: Text area with pre-loaded project scope (client can edit)
Button: "Generate Estimate"

Output sections:
1. **Estimate Summary** — division breakdown table with costs
2. **Scope Flags** — items that need clarification before final bid
3. **Value Engineering Options** — 3 cost reduction ideas
4. **Estimate Footer** — valid 30 days, based on [date] material pricing

Show a timer during generation: "Generating estimate... [X seconds]"
After: "Estimate generated in [X] seconds. Traditional estimating time: 12–18 hours."

---

## DEMO CALL FRAMEWORK (HOW TO RUN THE DEMO ON A CALL)

### Setup (before the call)
- Share screen ready on the demo dashboard, not on the input form
- Have the demo data loaded — start from "results already showing" for maximum impact
- Know which of the 4 demos matches their business
- Have a blank input form ready to show "live generation"

### The 3-Act Demo (6–8 minutes)

**Act 1 — The Before (1 minute)**
> "Before I show you the system, let me just confirm — right now, [describe their current process based on discovery call]. Does that sound right?"
> [They confirm]
> "Okay. Here's what we built for a [similar business type]."

**Act 2 — The System (4 minutes)**
- Show the dashboard: "This is the output. [Walk the key metrics]."
- Show the input form: "This is what triggers it. [Simple input]."
- Hit run: "Let me show you it working live."
- Wait for output, narrate what's happening: "The AI is reading the data, processing it, generating the output..."
- Show the result: "And here it is."

**Act 3 — The Math (2 minutes)**
> "So [their version of the problem] — if this system was running in your operation, at [their scale], that's about [ROI estimate]. And with the Michigan grants, the net cost to you would be around [grant-adjusted number]."

**Close:**
> "This is a working system. Not a mockup, not a slideshow. I built it on the same infrastructure I use for every client. The question is just: how long until we're running your data through it instead of simulated data?"

---

## DEMO MAINTENANCE

After you have your first real client result, replace the simulated data with a real case study (anonymized). The demo becomes: "Here's what we built for a Michigan [vertical] — we can't share the company name, but here are the actual results."

A real result > simulated data every time. The demo system is the bridge to getting there.

---

## GITHUB OPEN-SOURCE STRATEGY (PAIRED WITH THIS GUIDE)

From `portfolio-demo-strategy.md` — publish sanitized versions of the demo workflows on GitHub:

**Repo 1:** `michigan-manufacturing-ai-starter` — n8n workflow JSON + sample data for quality reporting automation
**Repo 2:** `hipaa-safe-ai-architecture` — architecture diagrams and n8n workflow templates for HIPAA-compliant AI
**Repo 3:** `fleet-dispatch-demo` — dispatch optimization n8n workflow with simulated fleet data

These repos do 3 things:
1. Show technical credibility to any prospect who Google-searches you
2. Attract inbound from developers and operations leaders searching for these solutions
3. Create shareable content for LinkedIn ("Just open-sourced our fleet dispatch AI framework — free for any Michigan carrier to use as a starting point")
