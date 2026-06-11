# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

There is no test runner, linter, or formatter configured.

## Architecture

This is a **single-file static marketing website** for American AI Solutions LLC. The entire site lives in `index.html` — all CSS, HTML, and JavaScript are inline in that one file. React and React DOM are installed as dependencies but are not currently used; the page uses plain JavaScript.

`vite.config.js` is minimal — it only loads `@vitejs/plugin-react` with no custom path aliases, proxies, or build overrides.

### index.html structure

The file is organized top-to-bottom as:
1. `<head>` — Google Fonts (DM Sans, DM Serif Display), inline `<style>` block (~340 lines of CSS)
2. `<body>` — sections in order: `#navbar`, `#hero`, `#services`, `#about`, `#testimonials`, `#contact`, `<footer>`
3. Inline `<script>` (~60 lines) — navbar scroll-shadow effect, smooth-scroll for anchor links, contact form submit handler

### Contact form

The form POSTs JSON to `/api/contact` via `fetch`. **This endpoint is not implemented in the repository.** Any backend or serverless function providing it must be wired up separately (e.g., via a Vite proxy, Netlify function, or separate server).

### Design tokens (CSS variables / hardcoded values)

| Token | Value |
|-------|-------|
| Primary blue | `#1A3A8F` |
| Dark background | `#0D1117` |
| Mid blue-gray | `#4A5473` |
| Body font | DM Sans |
| Heading font | DM Serif Display |
| Mobile breakpoint | 768px |

All styling is in the single `<style>` block; there is no CSS framework or preprocessor.
