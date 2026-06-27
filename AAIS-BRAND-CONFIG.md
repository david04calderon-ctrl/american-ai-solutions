# AAIS-BRAND-CONFIG.md
# American AI Solutions LLC — Universal Brand & Project Config
# Drop this file into any project to give Claude full context instantly.
# Last updated: 2026-06-27

---

## Business Identity

| Field | Value |
|-------|-------|
| **Company** | American AI Solutions LLC |
| **Owner** | David Calderon |
| **Email** | david04calderon@gmail.com |
| **Phone** | (313) 209-7789 |
| **Location** | Southgate, Michigan (Metro Detroit) |
| **ZIP** | 48195 |
| **EIN** | 42-2142801 |
| **Website** | https://americanaisolutionsllc.com |
| **Calendly** | https://calendly.com/david04calderon/ai-strategy-call |
| **LinkedIn (Personal)** | https://linkedin.com/in/david04calderon |
| **LinkedIn (Company)** | https://linkedin.com/company/american-ai-solutions |

---

## Design Tokens

```css
/* Colors */
--primary-blue:    #1A3A8F;   /* brand, buttons, accents, CTA strip */
--dark-bg:         #0D1117;   /* demo section, footer */
--demo-card:       #101825;   /* platform preview card bg */
--demo-border:     #1E2D45;   /* demo section borders */
--section-alt:     #F7F9FC;   /* alternating gray sections */
--body-text:       #4A5473;   /* subtitles, meta text */
--light-blue-bg:   #EEF2FA;   /* tags, step numbers, icon backgrounds */
--cyan-glow:       #00D4FF;   /* scrubber fill, demo accents, CTAs */
--gold-aura:       #FFD700;   /* scrubber playhead */
--dark-text:       #0D1117;   /* headings */
--body-copy:       #2C2C2C;   /* article body */

/* Typography */
--font-heading:    'DM Serif Display', serif;
--font-body:       'DM Sans', sans-serif;

/* Breakpoints */
--mobile:          768px;
--mobile-nav:      640px;    /* blog post navs hide at 640px */

/* Border radius */
--radius-sm:       2px;      /* buttons, tags */
--radius-md:       4px;      /* cards */
--radius-lg:       8px;      /* large cards */
```

---

## Site Architecture

```
americanaisolutionsllc.com/
├── index.html                          # Main marketing site (~1,100 lines)
├── dashboard/index.html               # Business dashboard (KPI tracker)
├── blog/
│   ├── index.html                     # Blog listing (7 cards)
│   ├── michigan-going-pro-talent-fund-ai-training/index.html
│   ├── oem-ai-mandates-michigan-tier-2-tier-3-suppliers/index.html
│   ├── hipaa-ai-michigan-healthcare-practices/index.html
│   ├── ai-for-michigan-contractors-estimating-automation/index.html
│   ├── michigan-fleet-ai-dispatch-optimization/index.html
│   ├── michigan-ai-roi-calculator/index.html
│   └── what-detroit-gets-about-ai/index.html
├── resources/
│   └── michigan-ai-grant-guide/index.html    # Lead magnet (Netlify form: "grant-guide")
├── thank-you/index.html               # Post-form conversion page
├── privacy/index.html                 # Privacy Policy (GDPR/HIPAA/MCPA)
├── terms/index.html                   # Terms of Service (Michigan governing law)
├── public/
│   ├── sitemap.xml                    # 13 pages indexed
│   ├── robots.txt
│   ├── 404.html                       # Custom 404
│   ├── offline.html                   # PWA offline fallback
│   ├── og-image.png                   # 1200×630 OG social image
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
```

---

## Main Site Section Order (`index.html`)

```
#navbar        — fixed top nav (Services, Industries, Process, Pricing, Insights, Contact)
.hero          — headline, CTAs → Calendly, 4-stat stats bar
#demo          — Platform Preview: interactive AI workflow scrubber (dark #0D1117)
#services      — 3-column service cards (section-alt gray)
#industries    — 4-card Michigan verticals grid (white)
.cta-strip     — bold blue full-width CTA (#1A3A8F)
#about         — 2-column grid, Detroit skyline SVG (section-alt gray)
#process       — 4-step How It Works (white)
#testimonials  — 3 testimonial cards (section-alt gray)
#faq           — 6-question FAQ grid 2-column (white)
#pricing       — 3-tier pricing cards + grant callout (section-alt gray)
#insights      — 3-card blog preview teaser (white)
#contact       — contact info + Netlify Forms form (white)
.sticky-cta    — fixed mobile bottom CTA (appears at 500px scroll)
<footer>       — links, LinkedIn, EIN, copyright (#0D1117 dark)
```

---

## Netlify Forms

| Form Name | Page | Action |
|-----------|------|--------|
| `contact` | index.html | `/thank-you/` |
| `grant-guide` | resources/michigan-ai-grant-guide/index.html | CSS success state |

Both use `data-netlify="true"` + hidden `<input type="hidden" name="form-name" value="..."/>`.

---

## Build System

```bash
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # Vite build + copy static dirs to dist/
npm run preview  # Preview production build
```

**Build script** (package.json) copies all static dirs post-Vite:
```json
"build": "vite build && for d in blog dashboard privacy terms resources thank-you; do [ -d \"$d\" ] && cp -r \"$d\" dist/; done"
```

**Deploy**: Netlify auto-runs `npm run build` → serves `dist/`. Custom domain: `americanaisolutionsllc.com`.

---

## Tech Stack (Client Automations)

| Tool | Role |
|------|------|
| n8n 2.0 (self-hosted) | Visual workflow orchestration, 400+ integrations |
| Claude Opus 4.8 API | Primary reasoning/generation |
| Gemini 2.5 Pro API | Large document processing (2M context) |
| LangGraph | Complex stateful workflows with branching |

## Internal Business Stack

| Tool | Role |
|------|------|
| HubSpot Starter | CRM, pipeline, email sequences |
| Clay | Prospect enrichment (75+ sources) |
| Instantly.ai | Cold email at scale |
| Pandadoc | Proposals, e-sign |
| Linear | Project tracking |
| Stripe + HoneyBook | Billing + client portal |
| Fathom | Call transcription (free) |

---

## Michigan Market Verticals (Priority Order)

1. **Automotive Tier 2/3 suppliers** — OEM AI mandates = forced urgency; 35% downtime reduction, 95%+ defect detection
2. **Healthcare practices** — HIPAA-compliant on-premise AI; 200–300% ROI by year 2
3. **Logistics & trucking** — dispatch + route optimization; Michigan freight corridor
4. **Construction & trades** — lowest AI competition; estimating + scheduling automation

---

## Michigan Grant Funding (Key Sales Differentiator)

| Grant | Amount | Eligible Uses |
|-------|--------|---------------|
| **Going PRO Talent Fund** (Michigan LEO) | $2,000/trainee, $3,500/registered apprentice | AI training explicitly eligible; $6M pool |
| **Industry 4.0 Tech Grant** | Up to $25K (50% reimbursement) | AI implementation for small manufacturers |
| **Detroit Small Business Tech Fund** | Varies | TechTown/MBBA network referral |

---

## Brand Values (Always Reflect in Copy)

- **Execution over strategy decks** — we build systems, not roadmaps
- **Detroit-grounded** — local knowledge, no Silicon Valley assumptions
- **Results-first** — every feature connects to revenue or credibility
- **Compounding value** — improvements that build on each other
- **Accessible to anyone** — AI for real businesses, not just tech companies
- **10 steps ahead** — always deploying the newest proven tools
- **Universal and personable** — compassionate AND strong; every person deserves full attention
- **The world is yours** — operate from abundance and possibility
- **Dreams come true here** — clients with resources get highest-level execution; clients building from scratch get the path; both deserve the same excellence
- **Work harder, smarter, faster** — outwork, outthink, outbuild every competitor
- **Generational wealth** — everything built to last: for clients, team, and Detroit

---

## Non-Discrimination Policy

American AI Solutions LLC serves all people regardless of race, color, religion, national origin, sex, gender identity, sexual orientation, disability, age, or any other protected characteristic. We reserve the right to refuse service only for lawful business reasons unrelated to protected characteristics.

---

## Key JavaScript Functions (`index.html`)

| Function | Purpose |
|----------|---------|
| `scrollTo(id)` | Smooth-scroll to section, close mobile menu |
| `toggleMenu()` | Open/close hamburger nav |
| `bookCall()` | Open Calendly in new tab |
| `submitForm()` | Validate form → `window.location.href = '/thank-you/'` |
| `updateUI(pct)` | Update scrubber fill, playhead, waveform, annotation states |
| `setDragging(on)` | Toggle `isDragging` + `.dragging` CSS class |

---

## Interactive Scrubber DOM IDs (`#demo` section)

`demoWaveform`, `scrubberTrack`, `scrubberFill`, `scrubberPlayhead`, `scrubberInput`, `scrubberCurrent`, `scrubberAnnotations`

4 annotation markers: Lead Qualified → Objection Handled → Pricing Discussed → Next Steps Set

---

## SEO & Tracking

- Google Analytics 4: slot present in `index.html` (commented out — replace `G-XXXXXXXXXX`)
- LocalBusiness JSON-LD schema in `index.html` `<head>`
- Article JSON-LD on each blog post
- HowTo JSON-LD on grant guide page
- Sitemap: `/sitemap.xml` (13 pages)
- OG image: `/og-image.png` (1200×630)

---

## Blog Post Nav Template (All 7 Posts)

```html
<div class="nav-links">
  <a class="nav-link" href="/#services">Services</a>
  <a class="nav-link" href="/blog/">Insights</a>
  <a class="nav-link" href="/resources/michigan-ai-grant-guide/" style="color:#1A3A8F;font-weight:700;">Free Grant Guide</a>
  <a class="nav-link" href="/#contact">Contact</a>
  <a class="nav-cta" href="https://calendly.com/david04calderon/ai-strategy-call" target="_blank" rel="noopener">Free Strategy Call</a>
</div>
```

---

## Footer Legal Links Template (All Pages)

```html
<p style="margin-top:8px;font-size:12px;">
  <a href="/privacy/">Privacy Policy</a> · <a href="/terms/">Terms of Service</a> · <a href="/blog/">Blog</a>
</p>
```

---

## Pricing Tiers

| Tier | Price | What's Included |
|------|-------|-----------------|
| **Starter** | $3,500 one-time | Single workflow automation, 3-week deploy, 30-day support |
| **Growth** | $8,500 one-time | Multi-system integration, CRM + communication layer, 6-week deploy |
| **Enterprise** | $18,000+ | Full AI infrastructure, custom training, LangGraph workflows, 12-week deploy |
| Retainers | $1K–$4.5K/month | Ongoing optimization, monitoring, iteration |

---

## Contact for Any Claude Project Using This Config

- Owner: David Calderon
- Email: david04calderon@gmail.com
- Calendly: https://calendly.com/david04calderon/ai-strategy-call
- GitHub repo: david04calderon-ctrl/american-ai-solutions
- Active branch convention: `claude/[feature-name]-[id]`
