# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

No test runner, linter, or formatter is configured.

## Architecture

**Single-file static marketing website** for American AI Solutions LLC (Detroit, MI).
All CSS, HTML, and JavaScript are inline in `index.html`. React/React DOM are installed but unused — the page uses plain vanilla JavaScript.

`vite.config.js` is minimal — only loads `@vitejs/plugin-react`. No aliases, proxies, or custom build overrides.

### File inventory

| File | Purpose |
|------|---------|
| `index.html` | Entire site — ~1,100 lines |
| `vite.config.js` | Vite build config + vite-plugin-pwa (PWA/manifest/Workbox) |
| `netlify.toml` | Netlify deployment config — `npm run build` → `dist/` |
| `.gitignore` | Excludes `node_modules/`, `dist/`, `.DS_Store`, `personal/` |
| `package-lock.json` | Committed for reproducible Netlify installs |
| `public/og-image.png` | 1200×630 OG social image (Playwright-generated) |
| `public/icons/icon-192.png` | PWA icon 192×192 |
| `public/icons/icon-512.png` | PWA icon 512×512 |
| `scripts/generate-assets.mjs` | Playwright asset generator for OG image + PWA icons |

**Marketing files (`marketing/` directory):**

| File | Purpose |
|------|---------|
| `THIS-WEEK-ACTION-LIST.md` | Printable priority action guide for Week 1 — Netlify, LinkedIn, outreach |
| `app-roadmap.md` | Phase 1–4 app/product roadmap (PWA → React Native → SaaS) |
| `n8n-lead-intake-automation.md` | Full n8n 7-node lead intake spec (webhook → Claude → HubSpot → Gmail) |
| `n8n-build-guide-technical.md` | Technical deployment guide — DigitalOcean, Docker, Caddy SSL, 8-node build |
| `linkedin-carousel-01-auto-suppliers.md` | 9-slide carousel for Michigan Tier 2/3 automotive suppliers |
| `linkedin-carousel-02-healthcare.md` | 9-slide HIPAA-focused carousel for Michigan healthcare practices |
| `linkedin-carousel-03-logistics.md` | 9-slide carousel for Michigan trucking/fleet operators |
| `linkedin-carousel-04-construction.md` | 9-slide carousel for Michigan GCs and specialty trades |
| `canva-carousel-design-guide.md` | Step-by-step Canva build guide — brand kit, 4 layouts, slide-by-slide for Carousel 1 |
| `loom-intro-video-script.md` | 4 Loom video scripts (General, Automotive, Healthcare, Logistics) + recording tips |
| `linkedin-content-calendar-12weeks.md` | 3x/week LinkedIn calendar — Weeks 1–5 fully scripted, Weeks 6–12 rotating banks |
| `email-sequence-automotive.md` | 4-email cold sequence for Tier 2/3 auto suppliers + Clay/Instantly config |
| `email-sequence-healthcare.md` | 4-email HIPAA-aware sequence for Michigan practices + BAA talking points |
| `email-sequence-construction.md` | 4-email sequence for Michigan GCs and specialty contractors |
| `email-sequence-logistics.md` | 4-email trucking sequence (morning send, FMCSA targeting) |
| `linkedin-dm-templates.md` | Connection request, opener, follow-up, close for all 4 verticals |
| `proposal-sow-template.md` | Complete proposal + SOW template with pricing by vertical |
| `discovery-call-framework.md` | 30-min call script, scoring rubric, objection handling, post-call SOP |
| `referral-partner-strategy.md` | Banker/CPA/MSP partner targets, scripts, referral fee structure |
| `competitive-positioning.md` | How to win vs. big firms, MSPs, offshore devs, SaaS, and DIY objections |
| `seo-content-calendar.md` | 12-month SEO blog calendar — keyword clusters, article outlines, distribution |
| `client-onboarding-sop.md` | Hour-by-hour onboarding from signature to 30-day check-in |
| `quarterly-business-review-template.md` | QBR call script, client health scoring, retainer renewal framework |
| `michigan-ai-market-intel.md` | Deep intel on all 4 verticals — OEM mandates, grants, competitors, AI tools |
| `team-building-roadmap.md` | Phase 1–4 hiring plan, first hire criteria, culture values filter |
| `hubspot-setup-guide.md` | Complete HubSpot Starter setup — pipeline, sequences, workflows, integrations |
| `revenue-model-90day.md` | 3-scenario cash flow model, break-even, weekly KPI targets, 90-day calendar |
| `case-study-template.md` | Full/short/stat-card formats + permission email + per-vertical tracker |
| `pricing-one-pager.md` | Prospect-facing pricing framing — 3 tiers, grant math, payment terms |
| `google-my-business-setup.md` | Step-by-step GMB profile, review strategy, citation building, local SEO timeline |
| `podcast-speaking-strategy.md` | Michigan podcast targets, pitch templates, 3 talk frameworks, post-appearance repurposing |
| `blog-post-01-going-pro-fund.md` | Ready-to-publish 1,200-word SEO article on Michigan Going PRO AI eligibility |
| `blog-post-02-oem-ai-readiness.md` | 1,350-word article on OEM AI mandates for Michigan Tier 2/3 suppliers |
| `blog-post-03-hipaa-ai-healthcare.md` | 1,300-word article on HIPAA + AI for Michigan healthcare practices |
| `blog-post-04-construction-ai.md` | 1,300-word article on AI for Michigan GCs — estimating + change order capture |
| `cold-calling-script.md` | Phone scripts for all 4 verticals with objection cheat sheet and voicemail scripts |
| `pre-call-intake-form.md` | 6-question pre-call form (Typeform/Google Forms setup) + HubSpot automation |
| `testimonial-review-system.md` | Review request system — pre-client, post-client, multi-channel formats |
| `prospect-targeting-guide.md` | ICP profiles for all 4 verticals, FMCSA/NPI/NAICS sources, lead scoring rubric |
| `michigan-business-calendar.md` | Month-by-month buying cycle intel — OEM audit cycles, grant windows, seasonal patterns |
| `partner-outreach-templates.md` | Email templates for Michigan Works!, MMTC, SBDC, CPAs, banks, MSPs + referral agreement |
| `ai-tools-client-guide.md` | ChatGPT vs. custom AI comparison, HIPAA BAA table, build vs. buy framework |
| `linkedin-profile-optimization.md` | Full LinkedIn profile guide — headline copy, About section, banner spec, Featured strategy, 10 skills, Creator Mode |
| `proposal-follow-up-system.md` | 30-day follow-up sequence (Days 0/3/7/14/21/30), no-show recovery, stalled deal re-engage, HubSpot stage table |
| `year-2-expansion-playbook.md` | Expansion roadmap per vertical, retainer pitch, 90-day results presentation, expansion pipeline in HubSpot, 3-year revenue model |
| `client-success-metrics.md` | Baseline capture (Day 1), 30/90-day KPIs by vertical, dollar translation formulas, 90-day results presentation template, case study capture |
| `email-signature-template.md` | 4 signature versions (full/short/formal/cold), Gmail setup steps, mobile signature, LinkedIn message closer, business card spec |
| `linkedin-company-page-setup.md` | Company page creation, logo/cover specs, About section copy, content strategy, LinkedIn Ads guidance, follower targets |
| `tech-stack-integration-map.md` | Full tool list + monthly costs, data flow maps (inbound/outbound/proposal/project), tool-by-tool integration setup, n8n internal automation specs |
| `weekly-execution-dashboard.md` | Monday ritual, weekly activity targets by channel, 90-day calendar (weeks 1–12), KPI tracking, decision rules, generational wealth scorecard |
| `press-announcement-template.md` | Michigan media targets, 2 press release templates (launch + first client), LinkedIn announcement post templates, credibility stack strategy |
| `competitor-monitoring-guide.md` | 4-tier competitive landscape (enterprise/MSP/freelance/SaaS), monitoring system (Google Alerts + LinkedIn), counter-scripts by competitor type |
| `objection-pricing-guide.md` | 6 pricing objections with exact counter-scripts, grant math presentation, payment structure options, when to walk away |

**Blog HTML pages (`blog/` directory):**

| File | Purpose |
|------|---------|
| `blog/index.html` | Blog listing page — 5-card grid (all verticals + grants), sticky nav, matches main site |
| `blog/michigan-going-pro-talent-fund-ai-training/index.html` | Published article: Going PRO Fund AI eligibility guide |
| `blog/oem-ai-mandates-michigan-tier-2-tier-3-suppliers/index.html` | Published article: OEM AI readiness for Tier 2/3 suppliers |
| `blog/hipaa-ai-michigan-healthcare-practices/index.html` | Published article: HIPAA + AI for Michigan healthcare practices |
| `blog/ai-for-michigan-contractors-estimating-automation/index.html` | Published article: AI for Michigan GCs — estimating + change order automation |
| `blog/michigan-fleet-ai-dispatch-optimization/index.html` | Published article: Michigan fleet dispatch AI — ROI math and grant funding |

**Personal files (`personal/` directory — excluded from git):**

| File | Purpose |
|------|---------|
| `barter-system.md` | Personal barter outreach for dental/vision care — kept private |

### index.html section order

```
<head>  — LocalBusiness JSON-LD schema, GA4 slot (commented), Google Fonts,
          inline <style> (~480 lines CSS), meta/SEO tags, SVG favicon,
          PWA meta tags (apple-touch-icon, theme-color, apple-mobile-web-app-*)
<body>
  #navbar        — fixed top nav (Services, Industries, Process, Pricing, Insights, Contact), mobile hamburger
  .hero          — headline, CTAs → Calendly, 4-stat stats bar
  #demo          — Platform Preview: interactive AI workflow scrubber (dark section)
  #services      — 3-column service cards
  #industries    — 4-card Michigan verticals grid (auto, healthcare, logistics, construction)
  .cta-strip     — bold blue full-width CTA band
  #about         — 2-column grid, Detroit skyline SVG
  #process       — 4-step How It Works process section
  #testimonials  — 3 testimonial cards
  #faq           — 6-question FAQ grid (2 columns)
  #pricing       — 3-tier pricing cards + Michigan grant funding callout bar
  #insights      — 3-card blog/article preview teaser (new)
  #contact       — contact info + Netlify Forms form
  .sticky-cta    — fixed mobile bottom CTA bar (appears at 500px scroll)
  <footer>       — links, LinkedIn, EIN, copyright
<script>         — ~120 lines JS (nav, scroll, scrubber, form, PWA shortcut handler)
```

### Section background alternation pattern

| Section | Background |
|---------|-----------|
| hero | white |
| demo | `#0D1117` dark |
| services | `section-alt` gray |
| industries | white |
| cta-strip | `#1A3A8F` brand blue |
| about | `section-alt` gray |
| process | white |
| testimonials | `section-alt` gray |
| faq | white |
| pricing | `section-alt` gray |
| contact | white |
| footer | `#0D1117` dark |

### Platform Preview / Interactive Scrubber (`#demo`)

Dark section between hero and services. Key behavior:

- **80-bar waveform** generated procedurally via multi-frequency sine formula
- **`isDragging` state** bound on both `pointerdown` (mouse/stylus) and `touchstart` (mobile)
- **Global window cleanup** — `pointerup` + `touchend` listeners reset dragging state even when pointer released off-screen
- **4 annotation markers** (Lead Qualified, Objection Handled, Pricing Discussed, Next Steps Set) — click to jump scrubber position; `passed`/`active` states update on scrub
- All scrubber DOM IDs: `demoWaveform`, `scrubberTrack`, `scrubberFill`, `scrubberPlayhead`, `scrubberInput`, `scrubberCurrent`, `scrubberAnnotations`

### Industries We Serve (`#industries`)

4-card 2×2 grid targeting Michigan's highest AI-adoption verticals:
1. **Automotive supply chain** — Tier 2/3 OEM mandate angle, 35% downtime reduction, 95%+ defect detection
2. **Healthcare** — HIPAA-compliant on-premise AI, 200-300% ROI by year 2
3. **Logistics & trucking** — dispatch + route optimization, Michigan freight corridor
4. **Construction & trades** — low AI competition, estimating + scheduling automation

### Michigan Grant Funding Callout (inside `#pricing`)

The `.grant-bar` element at the bottom of the pricing section references:
- **Going PRO Talent Fund** (Michigan LEO, $6M pool) — AI training explicitly eligible
- **Industry 4.0 Tech Grant** — 50% reimbursement for AI implementation costs for small manufacturers

This is a key sales differentiator. Keep this copy accurate and current.

### How It Works (`#process`)

4-step numbered process section (white background, between About and Testimonials):
1. Free Strategy Call (30 min, zero cost)
2. Proposal & Fixed Scope (48–72 hours, SOW with exact deliverables)
3. Build & Deploy (3–12 weeks, real data, weekly check-ins)
4. Handoff & Compound (team training, SOPs, 30-day support)

### FAQ (`#faq`)

2-column grid of 6 Q&A pairs (between Testimonials and Pricing). Key objections addressed:
- ChatGPT vs. custom integrated workflow
- No technical staff required post-handoff
- Michigan grant funding is real (Going PRO, Industry 4.0)
- Honest about wrong-fit clients
- 30-day ROI checkpoint
- Michigan focus with exceptions

### Contact form (Netlify Forms)

Uses `data-netlify="true"` on the `<form>` element with `name="contact"` and `method="POST"`. Netlify detects this at build time and captures submissions automatically.

`submitForm()` does a `fetch POST` to `/` with `form-name=contact` — if Netlify returns 200, shows success state. If fetch fails (local dev, non-Netlify host), falls back to opening a pre-filled `mailto:` link. Zero leads are ever lost.

Fields: `name`, `company` (optional), `email`, `message` — all have `name` attributes for Netlify's form capture.

### Deployment

`netlify.toml` is configured. To deploy:
1. Connect GitHub repo to Netlify
2. Netlify auto-runs `npm run build` and serves `dist/`
3. Point custom domain DNS to Netlify

Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) are set in `netlify.toml`.

### SEO

- `<meta name="description">`, Open Graph tags, Twitter Card, canonical URL all in `<head>`
- LocalBusiness JSON-LD schema with service catalog and offer pricing (for rich results)
- GA4 slot commented out — uncomment and replace `G-XXXXXXXXXX` with real Measurement ID

### Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Primary blue | `#1A3A8F` | Brand, buttons, accents, CTA strip |
| Dark background | `#0D1117` | Demo section, footer |
| Demo card bg | `#101825` | Platform preview card |
| Demo border | `#1E2D45` | Demo section borders |
| Section alt bg | `#F7F9FC` | Alternating gray sections |
| Mid blue-gray | `#4A5473` | Body text, subtitles |
| Light blue bg | `#EEF2FA` | Tags, step numbers, icon backgrounds |
| **Cyan Glow** | `#00D4FF` | Scrubber fill, demo accents |
| **Gold Aura** | `#FFD700` | Scrubber playhead |
| Body font | DM Sans | All body copy |
| Heading font | DM Serif Display | Section titles, hero H1, step numbers |
| Mobile breakpoint | 768px | Single-column layouts |

### Key JavaScript functions

| Function | Purpose |
|----------|---------|
| `scrollTo(id)` | Smooth-scrolls to section by ID, closes mobile menu |
| `toggleMenu()` | Opens/closes hamburger nav with CSS transforms |
| `bookCall()` | Opens Calendly link in new tab |
| `submitForm()` | Validates form, opens pre-filled mailto, shows success state |
| `updateUI(pct)` | Updates scrubber fill, playhead, waveform, annotation states |
| `setDragging(on)` | Toggles `isDragging` + `.dragging` CSS class on track |

### Brand values (always reflect in copy and features)

- **Execution over strategy decks** — we build systems, not roadmaps
- **Detroit-grounded** — local knowledge, no Silicon Valley assumptions
- **Results-first** — every feature should connect to revenue or credibility
- **Compounding value** — improvements that build on each other over time
- **Accessible to anyone** — AI for real businesses, not just tech companies
- **10 steps ahead** — always researching and deploying the newest proven tools

### Tech stack intelligence (as of June 2026)

**Build stack for client automations:**
- n8n 2.0 (self-hosted, visual orchestration, 400+ integrations)
- Claude Opus 4.8 API (primary reasoning/generation model)
- Gemini 2.5 Pro API (large document processing, 2M context)
- LangGraph (complex stateful workflows with branching)

**Internal business stack:**
- HubSpot Starter (CRM, pipeline, email sequences)
- Clay (prospect enrichment, 75+ sources, personalized outreach)
- Instantly.ai (cold email at scale)
- Fathom (call transcription + action items, free)
- Pandadoc (proposals, e-sign, open tracking)
- Linear (project tracking — already in use)
- Stripe + HoneyBook (billing + client portal)

**Michigan market priorities:**
1. Automotive Tier 2/3 suppliers (OEM AI mandates = forced urgency)
2. Healthcare practices (HIPAA-compliant on-premise AI = differentiator)
3. Logistics/trucking (freight corridor + dispatch automation)
4. Construction/trades (low AI competition, labor shortage urgency)

**Grant funding angles for client sales:**
- Going PRO Talent Fund (Michigan LEO): AI training, $6M pool
- Industry 4.0 Tech Grant: 50% reimbursement for small manufacturers
- Detroit Small Business Tech Fund: TechTown/MBBA referral network
