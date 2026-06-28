# Dank Dave Farms — Automated Content & Video Strategy

**Brand:** Dank Dave Farms
**Platforms:** YouTube (primary), Instagram Reels, TikTok, Facebook Groups
**Style:** Raw, real, educational — Mr. Canucks meets Detroit grit
**Automation:** Time-lapse from fixed cameras, n8n publishing pipeline, AI-generated captions

---

## Brand Identity

**Voice:** Real grower, no bullshit, Michigan-proud. Not a polished commercial brand — an authentic cultivator who documents the process honestly, celebrates wins, admits failures, and shares what actually works.

**Content pillars:**
1. **The Grow** — weekly vlog, plant tours, environmental data, grow room reveals
2. **The Genetics** — pheno hunts, smoke reports, keeper selections, AI feedback reveals
3. **The Build** — facility construction, equipment installs, tech setup
4. **The Knowledge** — Mr. Canucks method explainers, VPD education, living soil deep dives
5. **The Life** — Detroit lifestyle content, behind-the-scenes, why this matters

**Aesthetic:** Deep green and black color palette, gold accents, Detroit industrial feel — raw footage cut with text overlays, no over-produced studio look.

---

## Fixed Camera Setup (Automated Time-Lapse)

### Hardware
- **2× Reolink RLC-810A PoE 4K cameras** — mounted in flower room at fixed angles
  - Camera 1: Wide angle, full canopy overview (mounted at ceiling, angled down 45°)
  - Camera 2: Close-up angle on lead phenos / most interesting plants
- **1× Reolink RLC-810A** in veg room (optional, add later)
- All cameras on PoE, connected to TP-Link switch → Raspberry Pi NVR

### Time-Lapse Pipeline (n8n + FFmpeg)
```
Every 30 min → RTSP snapshot saved to Pi storage
Every Sunday → FFmpeg assembles weekly time-lapse
Weekly time-lapse → auto-upload to YouTube Shorts + Instagram Reels
```

**FFmpeg time-lapse assembly command:**
```bash
# Collect this week's snapshots (1 frame per 30 min = 336 frames/week)
ffmpeg -framerate 24 -pattern_type glob -i '/media/grow/snapshots/flower/*.jpg' \
  -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 -prf yuv420p \
  /media/grow/timelapse/flower_week_$(date +%W).mp4
```

Output: 14-second Shorts-ready vertical video of the week's growth.

### Auto-Caption Generation (n8n)
After time-lapse is assembled:
1. Claude API generates caption from grow log data:
   ```
   Create a YouTube Shorts description (under 150 characters) for this week's 
   cannabis grow time-lapse. Grow week: {{week}}. Strains: {{strains}}. 
   Highlight anything notable. Style: authentic, excited grower. 
   Include relevant hashtags.
   ```
2. Auto-upload via YouTube Data API v3 with generated title + description

---

## Video Content Calendar (Weeks 1–20, First Full Grow)

| Week | Content | Format | Platform |
|------|---------|--------|---------|
| 1 | "Building Dank Dave Farms — The Setup" | 10–15 min vlog | YouTube |
| 2 | "Installing HLG Diablo 650R — Worth It?" | 8 min + Shorts | YouTube + IG |
| 3 | "Living Soil Mix — Mr. Canucks Recipe" | 10 min explainer | YouTube |
| 4 | "We Have Seeds! — Germination Day 1" | 3 min Shorts | IG + TikTok |
| 5 | "Veg Week 1 — Meet the Plants" | 5 min plant tour | YouTube |
| 6 | "VPD Explained Simply — How I Track It" | 5 min education | YouTube + IG |
| 7 | "Veg Week 3 — Training & Topping" | 8 min process | YouTube |
| 8 | "Veg Week 4 — Flip Day! Going to Flower" | 5 min moment | IG + TikTok |
| 9 | "Flower Week 1 — The Stretch Begins" | 5 min tour | YouTube |
| 10 | "Flower Week 2 — Defoliation Day" | 8 min process | YouTube |
| 11 | "Flower Week 3 — First Pistils!" | Time-lapse + Shorts | IG + TikTok |
| 12 | "The Automation System — Full Breakdown" | 15 min tech | YouTube |
| 13 | "Flower Week 5 — Trichome Check" | 5 min with microscope | YouTube + IG |
| 14 | "Flower Week 6 — Bud Development Timelapse" | Shorts | IG + TikTok |
| 15 | "Flower Week 7 — Fade Begins, Smell Report" | 8 min | YouTube |
| 16 | "Flower Week 8 — Getting Close!" | 5 min tour | YouTube |
| 17 | "HARVEST DAY — Full Walkthrough" | 20 min event video | YouTube |
| 18 | "Drying & Curing — The Most Important Step" | 10 min education | YouTube |
| 19 | "SMOKE REPORT — [Strain] | Was It Worth It?" | 10 min review | YouTube |
| 20 | "Grow #1 Complete — What I Learned" | 15 min recap | YouTube |

---

## YouTube Channel Setup

**Channel Name:** Dank Dave Farms
**Tagline:** "Detroit Grown. No Shortcuts."

### Playlists
1. **Grow #1 — Jealousy Pheno Hunt** (full season playlist)
2. **Living Soil Series** (method education)
3. **Genetics Reviews & Smoke Reports** (strain-specific)
4. **The Build** (facility construction)
5. **Tech & Automation** (IoT, n8n, monitoring system)

### Channel Art
- Banner: dark green background, gold "DANK DAVE FARMS" text, Detroit skyline silhouette
- Profile: Stylized cannabis leaf + "DDF" monogram, dark green/gold

### SEO Strategy
Target keywords (high search volume in cannabis space):
- "Mr. Canucks living soil method"
- "Gaia Green cannabis"
- "cannabis timelapse [strain name]"
- "HLG Diablo 650R review"
- "Michigan home grow"
- "[Strain] smoke report"
- "pheno hunt [strain]"
- "cannabis grow automation"

---

## Instagram Strategy

**Handle:** @dankdavefarms
**Bio:** "Detroit's finest indoor. Living soil. No shortcuts. 🌱 Michigan grown. 21+"

**Content mix:**
- 40% Reels (time-lapses, plant tours, harvest clips)
- 30% Carousels (before/after, genetics comparison, smoke reports)
- 20% Stories (daily grow check-ins, polls, Q&A)
- 10% Static posts (equipment shots, text-based education, quotes)

**Post frequency:** 4–5× per week minimum

**Automated posts from n8n:**
- Daily grow check story (temp, RH, grow day number)
- Weekly time-lapse Reel (auto from camera pipeline)
- AI-generated caption for each auto-post

---

## TikTok Strategy

**Handle:** @dankdavefarms
**Content:** Short, punchy, algorithm-optimized

Best performing formats in cannabis space:
1. **Time-lapse with beat drop** — 7–15 sec, trending audio
2. **"Did you know..." education** — 30–60 sec explainers
3. **Side-by-side comparisons** — pheno comparison, before/after
4. **Harvest reactions** — authentic moment, high engagement
5. **Smoke report one-liners** — 15 sec with text overlay

**Post frequency:** Daily during active grow periods

---

## Automated Content Pipeline (n8n Workflows)

### Workflow A: Daily Grow Update Story

**Trigger:** Schedule (7 AM daily)
**Nodes:**
1. Read latest SensorPush data
2. Read current grow day from Google Sheets
3. Claude API → Generate daily caption:
   ```
   Write a casual, 1-sentence Instagram Story text overlay for today's grow check.
   Grow day {{day}}. Strain: {{strain}}. Temp: {{temp}}°F. RH: {{rh}}%.
   Keep it under 60 characters. Style: authentic grower, Detroit pride.
   ```
4. Grab latest camera snapshot from Pi
5. Post to Instagram Story via API (if available) OR save to Drive folder for manual post

### Workflow B: Weekly Time-Lapse Post

**Trigger:** Sunday 10 AM
**Nodes:**
1. Trigger FFmpeg assembly on Pi via SSH
2. Wait for output file
3. Claude API → Generate Reel caption with hashtags
4. Upload to YouTube Shorts via YouTube Data API
5. Notify via Telegram: "Week {{week}} time-lapse ready — review before posting to IG"

### Workflow C: Smoke Report AI Script

**Trigger:** Manual trigger (after cure, ready to film)
**Nodes:**
1. Input: strain, pheno ID, terpene notes, effect notes, yield
2. Claude API → Generate 5-minute smoke report script outline:
   ```
   Write a YouTube smoke report script for {{strain}} ({{pheno_id}}).
   Include: intro hook, lineage history, appearance/smell description,
   effect profile, grower's assessment, final score/recommendation.
   Style: authentic, knowledgeable, Michigan grower perspective. 
   Length: 5–7 minute talking points (not full script, just beats).
   ```
3. Send script to Telegram for review before filming

---

## Equipment for Content Production

| Item | Model | Cost | Use |
|------|-------|------|-----|
| Main camera | GoPro HERO13 Black | $399 | Walk-throughs, harvest, reviews |
| Tripod | Joby GorillaPod 5K | $89 | Stable shots anywhere |
| Mic | Rode Wireless GO II | $299 | Clean voiceover |
| LED panel light | Neewer NL288C | $109 | Consistent lighting for reviews |
| Lens light (macro) | Godox LR150 ring light | $55 | Trichome close-up shots |
| Teleprompter app | PromptSmart Pro (iPhone) | $25/yr | Script delivery |
| Editing | DaVinci Resolve (free) | — | Color grade, cut, export |
| Auto-subtitles | Descript (AI captions) | $24/mo | Auto-captions for accessibility |
| Thumbnail design | Canva Pro | $15/mo | YouTube thumbnails |

---

## Monetization Roadmap

| Timeline | Revenue Source | Est. Monthly |
|----------|---------------|-------------|
| Month 1–3 | None (building audience) | — |
| Month 4–6 | YouTube Partner Program (1K subs + 4K watch hours) | $50–200 |
| Month 6+ | Sponsorships (see sponsorship-strategy.md) | $500–5,000 |
| Year 2+ | Merch, affiliate links, genetics sales (licensed) | $1,000–3,000 |

**YouTube Partner threshold:** 1,000 subscribers + 4,000 public watch hours in 12 months.
Conservative projection: hit this by month 6–8 with consistent posting.

---

## Audience Building Strategy

**Week 1–4 (Launch):**
- Comment on Mr. Canucks Grow, Growmies, GreenPowerRangers YouTube videos
- Post in r/microgrowery (Reddit) — grow journals get thousands of views
- Join Michigan cannabis Facebook groups, introduce the channel
- Follow and engage with cannabis content creators on IG/TikTok

**Month 2–3 (Growth):**
- Collab potential with other Michigan growers
- Enter grows in community journals on GrowDiaries.com (huge SEO traffic)
- Submit content to cannabis-focused Instagram reposts accounts

**Month 4+ (Scale):**
- Sponsor-ready media kit (see sponsorship-strategy.md)
- Begin outreach to equipment brands (HLG, AC Infinity, Bootstrap Farmer)
