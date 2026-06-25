# American AI Solutions LLC — This Week's Action List
**Week of June 25, 2026**
*Print this. Check off as you go. These are the highest-ROI moves in order.*

---

## DAY 1 — GET THE SITE LIVE

### Step 1: Connect GitHub to Netlify (15 minutes)
1. Go to **netlify.com** → Sign up / Log in with your GitHub account
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → Select **american-ai-solutions** repo
4. Build settings (auto-detected from netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **"Deploy site"**
6. Netlify gives you a URL like `random-name-123.netlify.app` — your site is live

### Step 2: Connect Your Domain (10 minutes)
1. In Netlify → Site settings → Domain management → Add custom domain
2. Type: `americanaisolutionsllc.com`
3. Netlify shows you the nameservers (looks like: `dns1.p06.nsone.net`)
4. Go to wherever you bought the domain (GoDaddy, Namecheap, Google Domains)
5. Replace the nameservers with Netlify's nameservers
6. Wait 10–60 minutes → site is live at americanaisolutionsllc.com
7. Netlify auto-provisions SSL (the padlock) — free

### Step 3: Verify Netlify Forms are working
1. Go to your live site → fill out the contact form → submit
2. In Netlify dashboard → **Forms** tab → you should see the submission
3. Set up email notifications: Forms → contact → Form notifications → Add email

---

## DAY 1 — INSTALL THE APP ON YOUR PHONE (2 minutes)

### On iPhone:
1. Open **Safari** (must be Safari, not Chrome)
2. Go to your live site URL
3. Tap the **Share button** (box with arrow at bottom)
4. Scroll down → tap **"Add to Home Screen"**
5. Name it "AmericanAI" → tap Add
6. App icon appears on your home screen — opens full-screen like a native app

### On Android:
1. Open **Chrome**
2. Go to your live site URL
3. Tap the **three dots menu** (top right)
4. Tap **"Add to Home screen"** or **"Install app"**
5. Done — app icon on your home screen

**What the shortcuts do:**
- **"Book a Strategy Call"** shortcut → opens Calendly instantly when long-pressed
- **"Pricing"** shortcut → jumps directly to pricing section

---

## DAY 2 — POST THE LINKEDIN CAROUSEL

### How to post (step by step):
1. Open **Canva** (canva.com) → Create new design → **Presentation (16:9)** or **LinkedIn Carousel**
2. Create 9 slides using the content in: `marketing/linkedin-carousel-01-auto-suppliers.md`
   - Use dark background (#0D1117) for slides 1, 2, 8, 9
   - Use white background for slides 3–7
   - Brand blue (#1A3A8F) for accents
   - Cyan (#00D4FF) for highlight text
3. Download as **PDF** (File → Download → PDF Standard)
4. On LinkedIn (David's personal profile, NOT company page):
   - Click "Start a post"
   - Click the document icon (📄) → upload the PDF
   - Paste the post copy from the marketing file (above the carousel)
   - Post on **Tuesday, Wednesday, or Thursday — between 8am and 11am EST**
5. For the first 60 minutes: reply to every comment immediately — the algorithm rewards this

---

## DAY 2 — SET UP COLD EMAIL INFRASTRUCTURE

### Instantly.ai setup (30 minutes):
1. Sign up at **instantly.ai** ($97/month — Growth plan)
2. Set up a sending subdomain: `mail.americanaisolutionsllc.com`
   - In your domain registrar → Add DNS records that Instantly gives you (DKIM, SPF, DMARC)
   - This protects your main domain's reputation
3. Start **email warmup** — Instantly connects your mailbox to their warmup network
   - Leave warmup running for 14 days before sending cold emails
   - During warmup: your email exchanges with other inboxes to build reputation

### Clay setup (while email warms up):
1. Sign up at **clay.com** ($149/month — Starter)
2. Build first table: Michigan automotive Tier 2/3 suppliers
   - Source: LinkedIn → Filter by Michigan, job title contains "Operations" or "Quality" or "Plant"
   - Import 200–500 contacts
3. Add enrichment columns (Clay pulls this automatically):
   - Company size, tech stack, recent news, LinkedIn posts
4. Add AI personalization column (prompt is in the email sequence file)
5. Once email is warmed (Day 14): connect Clay → Instantly → send

---

## DAY 3 — OUTREACH (do this by hand this week while Clay warms up)

### Manual LinkedIn outreach (15 contacts/day, takes 20 minutes):
1. Search LinkedIn: "Operations Manager" + "Michigan" + "Manufacturing"
2. Filter: 2nd connections (warm) → send connection request with note:
   > "Hi [name] — I work with Michigan manufacturers on AI quality systems. Would love to connect — no pitch, just expanding my Michigan ops network."
3. After they accept → wait 24 hours → send the opener:
   > "Hey [name], appreciate the connect. Quick question — are you fielding any questions from Tier 1 customers about AI adoption yet? Seeing it come up a lot this quarter with shops across Michigan."
4. From there: genuine conversation → call if interest

---

## DAY 4 — CONTACT THESE ORGANIZATIONS

### TechTown Detroit
- **Email:** info@techtowndetroit.org
- **Subject:** "AI consulting firm looking to connect with First Thursdays community"
- **What to say:** "I run American AI Solutions LLC, a Detroit-based AI consulting firm. I'd love to attend First Thursdays and connect with the local business community. Is there an upcoming event I can register for?"

### Michigan Works!
- **Phone:** 313-962-9675 (Detroit office)
- **Ask for:** Going PRO Talent Fund coordinator
- **What to say:** "I'm a Michigan business owner exploring the Going PRO Talent Fund for AI training. Can you walk me through what documentation I'd need to apply?"

### Michigan MEDC (Industry 4.0 Grant)
- **Website:** michiganbusiness.org
- **Search:** "Industry 4.0 Technology Grant"
- **Goal:** Get the application requirements so you can advise clients accurately

---

## DAY 5 — GOOGLE ANALYTICS 4

### Get your Measurement ID (10 minutes):
1. Go to **analytics.google.com**
2. Create account → Property name: "American AI Solutions LLC"
3. Platform: Web → Enter `americanaisolutionsllc.com`
4. Copy your **Measurement ID** (looks like: G-XXXXXXXXXX)
5. In your GitHub repo → edit `index.html` → find this line:
   ```
   <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">
   ```
6. Replace `G-XXXXXXXXXX` (both occurrences) with your real ID
7. Uncomment those 3 lines (remove the `<!--` and `-->`)
8. Commit and push → Netlify auto-deploys → tracking is live

---

## WHAT NOT TO DO THIS WEEK

- ❌ Don't spend money on ads yet — organic LinkedIn first, always
- ❌ Don't pitch in the first LinkedIn DM — ask a question, build rapport
- ❌ Don't send cold emails until Instantly warmup is complete (14 days)
- ❌ Don't worry about the company LinkedIn page yet — personal profile drives 10x more reach
- ❌ Don't over-engineer the app — the PWA is live already (users can install the site from their phone)

---

## YOUR NUMBERS TO TRACK (weekly)

| Metric | Where to find it | Goal (Month 1) |
|---|---|---|
| LinkedIn post impressions | LinkedIn Analytics | 500+ per post |
| LinkedIn post engagement rate | LinkedIn Analytics | 3%+ |
| Website visitors | Google Analytics | 100+ |
| Netlify form submissions | Netlify → Forms | 5+ |
| Calendly calls booked | Calendly dashboard | 3+ |
| Cold email open rate | Instantly dashboard | 45%+ |

---

*Generated by American AI Solutions LLC internal AI system.*
*Save this file → print or send to printer → execute in order.*
