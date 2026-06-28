# Dank Dave Farms — Autonomous Sponsorship Strategy

**Goal:** Turn the content brand into a sponsored operation where the best equipment in the industry is provided at no cost (or heavy discount) in exchange for authentic reviews and brand integration.
**Model:** Product partnership → Affiliate → Paid sponsorship → Brand ambassador
**Automation:** Outreach pipeline via n8n + HubSpot CRM, proposal generation via Claude API

---

## Target Sponsors by Category

### Tier 1 — Dream Sponsors (Full Equipment Comp)
These are the brands serious cultivators want:

| Brand | Product | Why They Care |
|-------|---------|---------------|
| **Horticulture Lighting Group (HLG)** | LED grow lights | Most respected brand in LED space — they sponsor top YouTube growers |
| **AC Infinity** | Fans, controllers, tents | Actively sponsors cannabis YouTube channels |
| **Quest HVAC** | Commercial dehumidifiers | Premium brand — low content saturation |
| **Phresh Filter** | Carbon filters | Australian brand with US distribution, seeks visibility |
| **Bootstrap Farmer** | Fabric pots, trays, propagation | Already partners with grower influencers |
| **Apera Instruments** | pH/EC meters | Actively looks for grower content partnerships |
| **Aranet** | CO2 sensors | New to cannabis space, limited grower content |

### Tier 2 — Seed Banks / Genetics (Product for Content)
These partners provide seed packs for genetic review content:

| Brand | Notes |
|-------|-------|
| **Ethos Genetics** | Very active in social media, active sponsorship program |
| **Compound Genetics** | Drop-based, exclusive — target once brand is established |
| **Exotic Genetix** | Regularly sponsors grow channels |
| **Oni Seed Co** | Pacific Northwest breeders, looking for content partners |
| **Cannarado Genetics** | Colorado-based, excellent for pheno hunt content |

### Tier 3 — Soil / Nutrients / Amendments
| Brand | Product | Notes |
|-------|---------|-------|
| **Gaia Green** | Dry amendments | Mr. Canucks' brand — natural fit for this content style |
| **Coast of Maine** | Premium soil | Already does influencer partnerships |
| **Mykos (XTREME Gardening)** | Mycorrhizal inoculant | Small brand, active with growers |
| **General Hydroponics** | pH Up/Down | Large company with established influencer budget |

### Tier 4 — Tech / IoT
| Brand | Product | Notes |
|-------|---------|-------|
| **SensorPush** | Environmental sensors | Loves data-driven content |
| **Inkbird** | Controllers | Active with aquarium + grow channels |
| **TP-Link (Kasa/Tapo)** | Smart plugs + cameras | Consumer electronics company with grow sponsorships |

---

## Sponsorship Acquisition Pipeline (Automated)

### Phase 1: Build Portfolio (Month 1–3)
No outreach yet. Build content assets:
- 10+ YouTube videos
- 500+ Instagram followers
- First harvest documented
- First smoke report published
- Equipment in use (showing real results with gear you own)

### Phase 2: Media Kit + Outreach (Month 3–4)

**Media Kit contents:**
1. Channel stats (subs, views, avg watch time, demographics)
2. Instagram stats (followers, reach, engagement rate)
3. Content preview (best 5 videos, best performing posts)
4. Audience profile (age 21–45, Michigan-heavy, serious cultivators)
5. Collaboration options (see below)
6. Contact info

**Media Kit generation (Claude API, auto-refreshed monthly):**
```
Create a one-page sponsorship media kit for Dank Dave Farms, a Michigan cannabis 
grow channel. Stats: {{youtube_subs}} YouTube subscribers, {{youtube_views}} total views, 
{{ig_followers}} Instagram followers, {{avg_engagement}}% engagement rate. 
Audience: 73% male, age 25–44, Michigan/Midwest, serious home cultivators.
Tone: authentic, professional, confident. Include 3 collaboration options.
```

### Phase 3: Automated Outreach (Month 4+)

**n8n Outreach Workflow:**
1. Maintain sponsor prospect list in HubSpot CRM (or Google Sheets)
2. Claude API generates personalized outreach email per brand
3. n8n sends via Gmail at 9 AM on Tuesdays (best B2B email open day)
4. Track opens/replies in HubSpot
5. Follow-up at Day 7 and Day 14 if no response

---

## Collaboration Options (Offer These Tiers)

### Option 1: Product Review (Entry Level)
- Brand sends product at no cost
- Dank Dave Farms creates dedicated 5–10 minute review video
- Honest review (not paid endorsement — keeps credibility)
- Brand tagged on all social reposts
- **Value:** $0–500 (product value in exchange for content)

### Option 2: Integrated Partnership
- Brand featured throughout a full grow cycle (6–12 weeks)
- 4–6 organic mentions across video content
- Dedicated setup/install video
- Affiliate link in all descriptions
- Monthly social posts
- **Value:** $500–2,000/month OR product comp + affiliate commission (10–20%)

### Option 3: Brand Ambassador
- Ongoing relationship, 1+ year
- Dedicated merch/branded content
- First look at new products
- Co-branded drops (brand uses Dank Dave content in their own marketing)
- **Value:** $2,000–5,000/month + product + performance bonus on affiliate sales

---

## Outreach Email Templates (Auto-Generated by Claude)

### Template 1: HLG Outreach
```
Subject: Dank Dave Farms × HLG — Detroit Grower Partnership

Hi [Name],

I run Dank Dave Farms, a Michigan-based indoor cannabis grow channel focused on 
living soil cultivation and authentic grow documentation. I'm currently running 
[X] HLG [model] fixtures and have built the entire channel around the results 
they produce.

My audience is [X] YouTube subscribers and [X] Instagram followers — almost 
entirely serious home cultivators in the 25–44 demographic who are actively 
making purchasing decisions on lighting.

I'd love to discuss an integrated partnership — I'm planning a full Diablo 650R 
side-by-side comparison series coming up in [month] and think it would be 
valuable content for your audience as well.

Would a 15-minute call this week work?

David Calderon
Dank Dave Farms
[email] | [youtube link] | [instagram link]
```

### Template 2: Seed Bank Outreach
```
Subject: Dank Dave Farms — Pheno Hunt Partnership Proposal

Hey [Seed Bank Name] team,

Big fan of [specific strain or drop]. I've been eyeing [strain] for my next pheno 
hunt and wanted to reach out before I source elsewhere.

I run Dank Dave Farms — a Michigan grow channel that documents every seed we pop, 
every pheno we hunt, and every smoke report from start to finish. My last grow 
documented [strain] through [X] weeks, got [X] views, and the comment section is 
consistently asking about sourcing quality genetics.

I'd love to do a full documented pheno hunt with your [specific strain]. I pop, I 
document, I score, I keep the keepers and share every result honestly. That's the 
kind of authentic exposure that drives real seed sales.

Down to talk?

David
```

---

## Affiliate Program Stack

Sign up for affiliate programs immediately — these pay without needing to negotiate:

| Brand | Program | Commission | Link |
|-------|---------|-----------|------|
| HLG | Direct affiliate | 8–10% | horticulturelightinggroup.com |
| AC Infinity | Direct affiliate | 10% | acinfinity.com/affiliates |
| Bootstrap Farmer | Direct affiliate | 8% | bootstrapfarmer.com |
| Amazon Associates | Amazon | 3–8% on categories | affiliate-program.amazon.com |
| ShareASale | Network (multiple grow brands) | Varies | shareasale.com |
| Impact.com | Network (larger brands) | Varies | impact.com |

Put affiliate links in ALL YouTube descriptions on every video from day one. Even with small audience, these convert.

---

## Revenue Projections

| Month | Subs | Affiliate Rev | Sponsorship | Total |
|-------|------|--------------|-------------|-------|
| 1–2 | 0–50 | $0 | $0 | $0 |
| 3–4 | 50–200 | $20–50 | $0 | $50 |
| 5–6 | 200–600 | $50–200 | $200 (product) | $250 |
| 7–8 | 600–1,200 | $200–500 | $500–1,000 | $1,000 |
| 9–12 | 1,200–3,000 | $500–1,500 | $1,000–3,000 | $4,500 |
| Year 2 | 3,000–10,000 | $1,500–3,000 | $3,000–8,000 | $11,000/mo |

This is conservative. Mr. Canucks Grow started from nothing — his Gaia Green partnership alone likely covers his entire operation. That's the path.

---

## Autonomous Sponsorship CRM (n8n + HubSpot)

### HubSpot Pipeline: "Sponsorship Outreach"
Stages:
1. **Prospect** — identified, not yet contacted
2. **Outreach Sent** — first email sent
3. **Follow-Up 1** — Day 7 follow-up
4. **Follow-Up 2** — Day 14 final follow-up
5. **In Conversation** — replied, negotiating
6. **Partner** — deal signed
7. **Active** — current partnership running
8. **Closed/Not Interested** — don't contact for 6 months

### n8n Sponsorship Automation Workflow
**Trigger:** Monday 8 AM weekly

1. Check HubSpot for prospects in "Prospect" stage with no contact date
2. Claude API generates personalized outreach email
3. Send via Gmail (branded signature)
4. Update HubSpot contact: status = "Outreach Sent", contact date = today
5. Schedule follow-up (Day 7) — auto-created task in HubSpot

**Follow-up email (Day 7, auto-sent if no reply):**
```
Hey [Name], just following up on my note from last week. 

We just wrapped week [X] of flower — [strain] is looking incredible. Would love 
to show you what your gear can do in a living soil environment.

Happy to hop on a quick call whenever works for you.

David
```

---

## Sponsorship Pitch Deck (One-Pager)

Auto-generated monthly by Claude API with current stats:

```
DANK DAVE FARMS
Detroit-grown cannabis content | Living soil | Authentic grows

THE AUDIENCE
• [X] YouTube subscribers | [X] avg views/video
• [X] Instagram followers | [X]% engagement rate
• Demographics: 73% male, 25–44, serious cultivators, Michigan/Midwest
• Audience trusts my equipment recommendations — they ask what I run in EVERY video

THE CONTENT
• Weekly grow vlogs, time-lapse, pheno hunts, smoke reports
• Full grow documentation start-to-finish
• Real results, real data, no paid endorsements (until now)

THE OPPORTUNITY
Three ways to partner:
1. PRODUCT REVIEW — Send it, I'll feature it honestly ($0 + your product)
2. INTEGRATED SERIES — 6–12 week integration across a full grow ($[X]/month)
3. BRAND AMBASSADOR — Ongoing, exclusive category ($[X]/month)

WHY IT WORKS
Cannabis equipment buyers trust growers, not ads. One authentic video from a 
real cultivator outperforms banner ads 10:1. My audience buys what I recommend.

Let's talk.
David Calderon | david04calderon@gmail.com | @dankdavefarms
```

---

## Long-Term Vision: Dank Dave Farms as a Brand

Year 3 goal — Dank Dave Farms is not just a channel, it's a brand:
- **Licensed Craft Grow operation** (Michigan CRA Craft Grower license)
- **Private label genetics** ("Dank Dave Farms Exclusives" — bred and selected in-house)
- **Online store** — merch, grow guides, course (Mr. Canucks model)
- **Consulting** — help other Michigan growers set up licensed operations
- **Detroit presence** — Dank Dave Farms is a Michigan cannabis brand people recognize

This is the compounding play. The content builds the brand, the brand builds the business, the business funds more content and better grows.
