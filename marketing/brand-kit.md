# American AI Solutions — Official Brand Kit
## Version 1.0 · June 2026

---

## THE LOGO

### Concept: "The American Signal"
The logo is an **"A"** — for American, for AAIS, for Ascent — with three signal arcs broadcasting from the peak. A gold dot marks the apex. The signal arcs represent AI intelligence broadcasting outward. The rising "A" shape means growth, upward momentum, reaching the top.

**When you see it, you think:** Broadcast. Intelligence. Rising. American. Detroit.
**One line:** The A that broadcasts AI.

---

### Logo Files (all in `/public/`)

| File | Use |
|------|-----|
| `logo-icon.svg` | App icon, avatar, square formats, favicon |
| `logo-horizontal.svg` | Website header, presentations, banners |
| `logo-white.svg` | Overlays on dark photos or videos |

**To export PNG from SVG:**
1. Open the SVG file in Chrome
2. Right-click → "Save image as" → PNG
3. Or open in Figma/Canva → export at 2x or 4x for retina

**Standard export sizes:**
- Social avatar: 400×400px
- Header/banner: 1500×500px
- Favicon: 32×32px, 192×192px, 512×512px (already in `/public/icons/`)
- Print: export SVG directly (infinite scale, zero quality loss)

---

## COLOR PALETTE

### Primary Colors

| Name | Hex | RGB | Use |
|------|-----|-----|-----|
| **Command Blue** | `#1A3A8F` | 26, 58, 143 | Primary brand, buttons, headers |
| **Deep Navy** | `#0D1117` | 13, 17, 23 | Dark backgrounds, footer, demo section |
| **Midnight** | `#0D1F5C` | 13, 31, 92 | Logo background, deep accents |

### Accent Colors

| Name | Hex | RGB | Use |
|------|-----|-----|-----|
| **Cyan Signal** | `#00D4FF` | 0, 212, 255 | AI accents, links, signal arcs, CTAs |
| **Gold Apex** | `#FFD700` | 255, 215, 0 | Logo apex dot, highlights, achievement |
| **Success Green** | `#22C55E` | 34, 197, 94 | Verified badges, positive metrics |
| **Alert Red** | `#EF4444` | 239, 68, 68 | Warnings, error states |

### Neutral Colors

| Name | Hex | Use |
|------|-----|-----|
| **Pure White** | `#FFFFFF` | Headlines on dark, logo on dark |
| **Off White** | `#F7F9FC` | Section alternates, card backgrounds |
| **Body Copy** | `#2D3450` | Paragraph text |
| **Muted** | `#4A5473` | Subtitles, metadata |
| **Ghost** | `#9AA3B8` | Placeholder text, disabled |
| **Border** | `#E4E8F0` | Card borders, dividers |

### Brand Gradient (Logo Background)
```css
background: linear-gradient(135deg, #0D1F5C 0%, #1A3A8F 100%);
```

### Cyan Glow Effect (Signal Elements)
```css
box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
text-shadow: 0 0 12px rgba(0, 212, 255, 0.6);
```

---

## TYPOGRAPHY

### Primary Fonts (Google Fonts — free)

| Font | Weight | Use |
|------|--------|-----|
| **DM Serif Display** | Regular 400, Italic | Headlines, H1, H2, logo wordmark |
| **DM Sans** | 400, 500, 600, 700 | All body copy, buttons, UI labels |

**Import (already in site):**
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet"/>
```

### Type Scale

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 Hero | DM Serif Display | 52–72px | 400 |
| H2 Section | DM Serif Display | 38–48px | 400 |
| H3 Card | DM Sans | 22–28px | 700 |
| Body | DM Sans | 15–16px | 400 |
| Button | DM Sans | 14px | 700 |
| Label/Tag | DM Sans | 11–12px | 700 UPPERCASE |
| Caption | DM Sans | 12px | 400 |

### Letter Spacing
- Headlines: `-0.02em` (tight, premium)
- Body: `0` (normal)
- Buttons: `0.06–0.08em` (slightly wide, authoritative)
- Labels/Tags: `0.10–0.14em` (wide, structured)

---

## LOGO USAGE RULES

### DO ✓
- Use on navy/dark blue background (preferred)
- Use white version on photos/videos
- Maintain clear space equal to the icon's height on all sides
- Use full horizontal version for headers and documents
- Use icon only for app icons, favicons, profile pictures

### DON'T ✗
- Never stretch or distort the logo
- Never change the colors (no green logo, no red logo)
- Never use on a light gray or white background without the background card
- Never add effects, shadows, or outlines beyond what's in the file
- Never use the icon without proper contrast background
- Never spell out "AAIS" in the logo — use the full wordmark

---

## BRAND VOICE (In One Line)

> **"Detroit-Built. AI-Powered. Results Guaranteed."**

### Tone
- **Commanding** — speaks with authority, not permission
- **Direct** — every sentence earns its place
- **Human** — real people, real problems, real results
- **Michigan-proud** — Detroit is a strength, not a qualifier
- **Results-first** — lead with outcomes, not features

### Phrases That Are AAIS (Use These)
- "Big systems for big problems"
- "We put it on paper. Then we made it happen."
- "The results speak for themselves"
- "Detroit-built. AI-powered."
- "Sky's the limit"
- "Legacy. Not a startup."
- "Real ROI. Real Michigan."
- "What's life if you're not building?"

### Phrases That Are NOT AAIS (Never Use)
- "Leverage synergies" (consultant speak)
- "Best-in-class solutions" (meaningless)
- "Cutting-edge AI" (overused)
- "Disrupt the industry" (Silicon Valley, not Detroit)
- "Move fast and break things" (we ship and it works)

---

## CANVA BRAND KIT SETUP

1. Go to Canva → Brand Kit → Create Brand Kit → "American AI Solutions"
2. **Upload logos:** Upload `logo-icon.svg`, `logo-horizontal.svg`, `logo-white.svg`
3. **Set colors:**
   - Primary: `#1A3A8F` (Command Blue)
   - Secondary: `#00D4FF` (Cyan Signal)
   - Accent: `#FFD700` (Gold Apex)
   - Dark: `#0D1117` (Deep Navy)
   - Light: `#F7F9FC` (Off White)
   - Text: `#2D3450` (Body Copy)
4. **Set fonts:**
   - Heading: DM Serif Display
   - Body: DM Sans
5. **Save** → All Canva designs auto-apply the brand

---

## SOCIAL PROFILE SPECS

### Profile Photo (All Platforms)
- File: `logo-icon.svg` exported at 800×800px PNG
- Background: Navy gradient (#0D1F5C → #1A3A8F)
- Clear space: 15% padding around icon

### Platform-Specific Cover/Banner Sizes

| Platform | Size | File to use |
|----------|------|-------------|
| LinkedIn Company | 1128×191px | logo-horizontal.svg + "Detroit-Built. AI-Powered." tagline |
| LinkedIn Personal | 1584×396px | Detroit skyline photo + logo-white.svg overlay |
| Facebook Cover | 820×312px | Dark background + horizontal logo |
| Twitter/X Header | 1500×500px | Dark gradient + horizontal logo + tagline |
| YouTube Channel Art | 2560×1440px | Full brand banner |
| TikTok Profile | 200×200px | logo-icon.svg |
| Instagram Profile | 320×320px | logo-icon.svg |

---

## CONTENT TEMPLATES (Canva)

### Reel / TikTok (1080×1920px)
- Background: `#0D1117` dark or branded gradient
- Logo: top-left, white version, small
- Headline: DM Serif Display, 60–80px, white
- Body: DM Sans, 32px, `#C8D4F0`
- Accent line: 3px horizontal bar, `#00D4FF`
- URL watermark: bottom, 20px, `#4A5473`

### LinkedIn Post (1080×1080px or 1200×627px)
- Background: white or `#F7F9FC`
- Logo: top-right
- Headline: DM Serif Display, 48px, `#0D1117`
- Body: DM Sans, 22px, `#2D3450`
- CTA strip: bottom, `#1A3A8F` bar, white text

### Email Header
- Size: 600×200px
- Background: `#1A3A8F` gradient
- Logo: centered, white version
- Tagline below: "Detroit-Built. AI-Powered." in `#00D4FF`

---

## SWAG / PRINT DNA

When you get branded merch (shirts, hats, business cards):

**Business Card:**
- Front: Deep navy background, white logo-icon, name, title in white, `#00D4FF` URL
- Back: The brand statement in DM Serif Display italic: *"We put it on paper. Then we made it happen."*
- Size: 3.5" × 2" standard, or 3.5" × 2.5" premium

**T-Shirt:**
- Front left chest: logo-icon (white version)
- Back: "DETROIT-BUILT. AI-POWERED." in block letters, small URL below
- Color: Black or deep navy

**Hat:**
- Front: logo-icon embroidered, white on navy
- Back: "AAIS" in block letters or URL

---

*This is Version 1.0. The logo, colors, and fonts will not change unless there's a strategic rebrand decision. Consistency is the brand. Every time someone sees this, it should feel the same.*

*"Print it in your brain when you think AI." — David Calderon*
