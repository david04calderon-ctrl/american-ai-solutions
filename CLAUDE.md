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
| `index.html` | Entire site — ~950 lines |
| `vite.config.js` | Vite build config (minimal) |
| `netlify.toml` | Netlify deployment config — `npm run build` → `dist/` |
| `.gitignore` | Excludes `node_modules/`, `dist/`, `.DS_Store` |
| `package-lock.json` | Committed for reproducible Netlify installs |

### index.html section order

```
<head>  — LocalBusiness JSON-LD schema, GA4 slot (commented), Google Fonts,
          inline <style> (~420 lines CSS), meta/SEO tags, SVG favicon
<body>
  #navbar        — fixed top nav (Services, Industries, Process, Pricing, Contact), mobile hamburger
  .hero          — headline, CTAs → Calendly, stats bar
  #demo          — Platform Preview: interactive AI workflow scrubber (dark section)
  #services      — 3-column service cards
  #industries    — 4-card Michigan verticals grid (auto, healthcare, logistics, construction)
  .cta-strip     — bold blue full-width CTA band
  #about         — 2-column grid, Detroit skyline SVG
  #process       — 4-step How It Works process section
  #testimonials  — 3 testimonial cards
  #faq           — 6-question FAQ grid (2 columns)
  #pricing       — 3-tier pricing cards + Michigan grant funding callout bar
  #contact       — contact info + mailto form
  <footer>       — links, LinkedIn, EIN, copyright
<script>         — ~115 lines JS (nav, scroll, scrubber, form)
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

### Contact form

**No backend required.** On submit, opens the user's email client via `mailto:david@americanaisolutionsllc.com` with subject and body pre-filled from the form. Shows a success state after opening.

To upgrade to a real backend later: swap `submitForm()` to POST to a Netlify Function or Formspree endpoint.

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
