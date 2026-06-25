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
| `index.html` | Entire site — ~680 lines |
| `vite.config.js` | Vite build config (minimal) |
| `netlify.toml` | Netlify deployment config — `npm run build` → `dist/` |
| `.gitignore` | Excludes `node_modules/`, `dist/`, `.DS_Store` |
| `package-lock.json` | Committed for reproducible Netlify installs |

### index.html section order

```
<head>  — Google Fonts, inline <style> (~230 lines CSS), meta/SEO tags, SVG favicon
<body>
  #navbar       — fixed top nav, mobile hamburger menu
  .hero         — headline, CTAs → Calendly, stats bar
  #demo         — Platform Preview: interactive AI workflow scrubber (dark section)
  #services     — 3-column service cards
  #about        — 2-column grid, Detroit skyline SVG
  #testimonials — 3 testimonial cards
  #contact      — contact info + mailto form
  <footer>      — links, LinkedIn, EIN, copyright
<script>        — ~110 lines JS (nav, scroll, scrubber, form)
```

### Platform Preview / Interactive Scrubber (`#demo`)

Dark section added between hero and services. Key behavior:

- **80-bar waveform** generated procedurally via multi-frequency sine formula
- **`isDragging` state** bound on both `pointerdown` (mouse/stylus) and `touchstart` (mobile)
- **Global window cleanup** — `pointerup` + `touchend` listeners reset dragging state even when pointer released off-screen
- **4 annotation markers** (Lead Qualified, Objection Handled, Pricing Discussed, Next Steps Set) — click to jump scrubber position; `passed`/`active` states update on scrub
- All scrubber DOM IDs: `demoWaveform`, `scrubberTrack`, `scrubberFill`, `scrubberPlayhead`, `scrubberInput`, `scrubberCurrent`, `scrubberAnnotations`

### Contact form

**No backend required.** On submit, opens the user's email client via `mailto:david@americanaisolutionsllc.com` with subject and body pre-filled from the form. Shows a success state after opening.

To upgrade to a real backend later: swap `submitForm()` to POST to a Netlify Function or Formspree endpoint.

### Deployment

`netlify.toml` is configured. To deploy:
1. Connect GitHub repo to Netlify
2. Netlify auto-runs `npm run build` and serves `dist/`
3. Point custom domain DNS to Netlify

Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) are set in `netlify.toml`.

### Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Primary blue | `#1A3A8F` | Brand, buttons, accents |
| Dark background | `#0D1117` | Demo section, footer |
| Demo card bg | `#101825` | Platform preview card |
| Demo border | `#1E2D45` | Demo section borders |
| Mid blue-gray | `#4A5473` | Body text, subtitles |
| **Cyan Glow** | `#00D4FF` | Scrubber fill, demo accents |
| **Gold Aura** | `#FFD700` | Scrubber playhead |
| Body font | DM Sans | All body copy |
| Heading font | DM Serif Display | Section titles, hero H1 |
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
