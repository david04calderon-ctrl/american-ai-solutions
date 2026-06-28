# Dank Dave Farms — Genetics Tracking System

**Goal:** Per-plant data cards, real-time AI feedback on phenotype expression, strain performance log, mother selection system
**Stack:** Google Sheets + Claude API + n8n + Trichome camera photos

---

## Philosophy: Hunt Phenos Like Mr. Canucks

Every seed run is a genetic hunt. Pop 5–10 seeds, give each plant a number, track everything independently. After harvest, score each pheno on smell, structure, yield, potency, bag appeal. The winners become mothers. Losers get composted.

Never just run seeds as a batch — each plant is a unique expression of the genetic cross and deserves individual documentation.

---

## Plant ID System

Format: `[Strain Code]-[Seed Bank Code]-[Pheno #]-[Run #]`

Examples:
- `JEA-EXG-P1-R1` = Jealousy, Exotic Genetix, Pheno 1, Run 1
- `PMRK-CMP-P3-R1` = Permanent Marker, Compound Genetics, Pheno 3, Run 1
- `RNZ-ETH-P2-R2` = Runtz BX1, Ethos Genetics, Pheno 2, Run 2

This ID goes on a physical tag tied to the pot AND in the digital grow log.

---

## Genetics Data Card (Per Plant)

One card per plant, created at germination, updated weekly, scored at harvest.

### Card Fields

```
PLANT ID: JEA-EXG-P1-R1
STRAIN: Jealousy (Seed Junky Genetics via Exotic Genetix)
SEED TYPE: Regular / Feminized / Auto  [circle one]
GERMINATION DATE: ___________
FLIP DATE (Veg→Flower): ___________
HARVEST DATE: ___________
TOTAL DAYS FLOWER: ___________

=== VEG DATA ===
Days in Veg: ___
Height at Flip: ___ inches
Node Spacing: Tight / Medium / Wide
Branching: Minimal / Moderate / Aggressive
Color: Light Green / Medium / Dark Green
Odor in Veg: (describe)
Stretch Factor (observed): ___×

=== FLOWER DATA ===
Height at Harvest: ___ inches
Structure: Dense / Fluffy / Mix
Bud Size: Small / Medium / Large / XXL
Calyx-to-Leaf Ratio: High / Medium / Low (affects trim time)
Trichome Density: Light / Medium / Heavy / Frosty AF
Trichome Color at Harvest: ___% clear / ___% cloudy / ___% amber
Smell (flower): Primary / Secondary / Notes:
Color (flower): Green / Purple / Orange / Other:
Foxtailing: None / Minor / Heavy

=== YIELD ===
Wet Weight (whole plant): ___ grams
Dry Weight (trimmed, cured): ___ grams
Dry Percentage: ___% (target: 20–25%)
Grams per Watt: ___ g/W
Grams per Square Foot: ___ g/sqft

=== CURE & SMOKE REPORT ===
Cure Start Date: ___________
Cure Duration: ___ weeks
Smell (cured): 
Taste:
Effect: Energetic / Balanced / Sedating / Creative / Other:
Potency (subjective 1–10): ___
Duration of Effect: ___ hours
Bag Appeal (1–10): ___
Smoke Quality: Smooth / Harsh / Expanded

=== PHENO SCORE (out of 50) ===
Yield (10): ___
Smell/Terpenes (10): ___
Potency/Effect (10): ___
Bag Appeal (10): ___
Ease of Grow (10): ___
TOTAL: ___ / 50

=== AI FEEDBACK ===
[Auto-populated by Claude API at harvest — see below]

=== KEEPER DECISION ===
Mother Plant: YES / NO
Reason: ___________
```

---

## AI Genetic Feedback (Claude API via n8n)

After each harvest entry is submitted to Google Sheets, n8n triggers a Claude API call to generate real-time genetic analysis.

### n8n Workflow: Genetics AI Report

**Trigger:** Google Sheets row update (harvest data submitted)

**Claude Prompt:**
```
You are a master cannabis cultivator and plant geneticist with deep knowledge of modern cannabis breeding, terpene profiles, and cultivar behavior.

Analyze this phenotype performance report and provide detailed feedback:

Strain: {{strain}}
Genetics: {{lineage}}
Days to Harvest: {{days_flower}}
Structure: {{structure}}
Bud Density: {{density}}
Trichome Report: {{trichome_report}}
Smell Profile: {{smell}}
Yield: {{yield_grams}} grams dry | {{grams_per_watt}} g/W
Pheno Score: {{total_score}}/50

Provide:
1. GENETIC EXPRESSION ASSESSMENT (2–3 sentences on what this pheno expressed from the genetic cross)
2. KEEPER RECOMMENDATION (should this be kept as a mother? Why or why not?)
3. IMPROVEMENT SUGGESTIONS (what could the grower adjust in next run — environment, training, timing?)
4. TERPENE PROFILE PREDICTION (based on smell/taste description, predict likely dominant terpenes)
5. COMPARABLE CULTIVARS (what well-known strains does this pheno compare to in effect/smell?)

Keep total response under 300 words. Be specific and technical.
```

**Output:** Saved to Google Sheets Genetics Log + posted to Discord #genetics-log channel

### Sample AI Output
```
GENETIC EXPRESSION ASSESSMENT:
This Jealousy pheno strongly expresses the Sherb BX1 lineage — tight node spacing, 
dense bud structure, and high calyx-to-leaf ratio all point toward the Sherb dominant 
phenotype. The 3× stretch is consistent with Seed Junky's Jealousy in organic 
growing conditions.

KEEPER RECOMMENDATION:
YES — keep as mother. 51.3g dry from a 5-gallon pot at 1.3 g/W in organic soil 
is exceptional. The terpene profile (creamy/gassy/earthy) is exactly what the market 
wants. Pheno score of 44/50 clears the keeper threshold.

IMPROVEMENT SUGGESTIONS:
- Top at node 5 instead of 4 next run to increase lateral branching and total site count
- Bump to 7-gallon pot to support heavier root mass — this pheno wants to eat
- Defoliation at day 21 and day 42 of flower to maximize light penetration in lower canopy

TERPENE PROFILE PREDICTION:
Dominant: Caryophyllene (spicy/pepper), Limonene (citrus/fuel), Myrcene (earthy/cream)
Likely minor: Linalool, Pinene

COMPARABLE CULTIVARS:
Effect and smell profile similar to Gelato 45 (Cookie Fam) but with heavier Sherb 
creaminess and less sweetness. Potency profile comparable to GMO in terms of duration
and body effect.
```

---

## Strain Performance Log (Google Sheets)

All-time database of every strain grown at Dank Dave Farms.

| Column | Description |
|--------|-------------|
| Strain | Full name |
| Genetics | Cross lineage |
| Seed Bank | Source |
| Total Phenos Run | How many seeds popped |
| Keeper Count | How many kept as mothers |
| Avg Yield (g/W) | Across all runs |
| Best Pheno Score | Top scorer |
| Avg Potency | Self-reported |
| Avg Bag Appeal | Self-reported |
| Notes | Difficulty, standout traits |
| Run Again? | Yes / No / Maybe |

---

## Mother Plant Management

### Selection Criteria (score 40+ out of 50 to qualify)
1. Yield: 1.0+ g/W in living soil
2. Terpenes: Distinct, strong, desirable profile
3. Effect: Unique or exceptional potency
4. Structure: Healthy, vigorous, good branching (takes cuts well)
5. Resistance: No pH sensitivity, minimal deficiencies, disease-resistant

### Mother Room Setup
- Maintained in veg (18/6 light cycle) indefinitely
- HLG 200 Rspec at 60% power
- Re-pot to 3-gallon when root-bound
- Take 4–6 cuts every 6 weeks (stagger clones for perpetual supply)
- Label each mother pot: Strain name, Pheno ID, Date of selection, Generation

### Clone Success Tracking
| Clone ID | Mother ID | Cut Date | Root Date | Days to Root | Success |
|----------|-----------|----------|-----------|-------------|---------|
| JEA-P1-C01 | JEA-EXG-P1-R1 | 6/28/26 | 7/10/26 | 12 | Yes |

---

## Trichome Photography Log

**Equipment:** Jiusion USB microscope (40–1000×) or Celestron Handheld Digital Microscope

**Protocol:**
- Photograph trichomes at weeks 6, 7, 8, 9, 10 of flower
- Same bud site each time (top cola, main stem)
- Save as: `[PlantID]-W[week]-trichome-[date].jpg`
- Upload to Google Drive: `/DankDaveFarms/TrichomeLog/[strain]/`
- n8n auto-attaches photo URL to genetics card row

**AI Trichome Analysis (Claude Vision):**
When photo uploaded, n8n sends image to Claude API for trichome assessment:
```
Analyze this trichome photo from a cannabis plant.
Estimate: % clear, % cloudy, % amber trichomes.
Recommend: harvest timing (too early / optimal window / past peak).
Note any unusual observations.
```

---

## Genetic Wishlist & Queue

Strains to hunt next (based on community rep + terpene targets):

| Strain | Breeder | Why | Priority |
|--------|---------|-----|----------|
| Permanent Marker | Seed Junky × Compound | Elite terpene profile, high demand | 1 |
| Apples & Bananas | Compound Genetics | Unique terpenes, excellent bag appeal | 2 |
| Gastro Pop | Compound Genetics | Grape/fuel, elite lineage | 2 |
| Ice Cream Cake | Seed Junky | Proven keeper genetics | 3 |
| Mac 1 (authentic) | Capulator | Classic pheno hunt, hard to find legit | 3 |
| Peanut Butter Breath | ThugPug | Nutty terps, distinct effect | 4 |
| Sugar Cane | Sugarbud Craft Growers | High yield + terps | 4 |

---

## Content Integration

Every genetics data card becomes content:
- **Pheno hunt video series:** "We popped 10 Jealousy seeds — here's what we found"
- **Smoke report videos:** 1-minute reel per strain, scored on camera
- **AI feedback reveal:** Show the Claude-generated genetic report on screen
- **Mother plant tour:** Monthly video walking through mother room, explaining each keeper

This makes the genetics tracking system a content goldmine, not just a grow tool.
