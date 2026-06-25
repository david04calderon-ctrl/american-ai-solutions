# Cold Email Sequence — Michigan Construction & Trades
**Target:** Michigan construction companies, specialty contractors, mechanical/electrical/plumbing trades (10–200 employees)
**Sending from:** mail.americanaisolutionsllc.com (subdomain — protects main domain)
**Tools:** Clay (enrichment + personalization) → Instantly.ai (sending + warmup)
**Sequence:** 4 emails over 21 days
**Expected results:** 3–7% reply rate, 1.5–2.5 calls per 100 emails

---

## EMAIL 1 — DAY 1 (HOOK)

**Subject line options (A/B test):**
- `Quick question about your estimating process, {{first_name}}`
- `{{company_name}} — are you still quoting jobs by hand?`
- `AI is already on Michigan job sites — is {{company_name}} using it?`

**Body:**
```
Hi {{first_name}},

I noticed {{company_name}} has been growing — {{clay_recent_signal: hiring/new project/expansion}}.

Quick question: how are you currently handling job estimating and project reporting? Manual spreadsheets, or have you moved any of it to software?

I ask because I work with Michigan contractors to automate the parts of the business that eat time without generating revenue — estimating, scheduling, change order tracking, and crew communication.

One client (mechanical contractor, 35 employees, Troy) reduced their estimating time by 65% in 6 weeks. They're now quoting 40% more jobs with the same office staff.

Worth a 20-minute call to see if there's a fit? No pitch — I'll just show you what the numbers look like for your type of operation.

David Calderon
American AI Solutions LLC | Detroit, MI
calendly.com/david04calderon/ai-strategy-call
```

**Clay enrichment columns to use:**
- `{{clay_recent_signal}}` → recent job posting, news mention, or LinkedIn post
- `{{company_name}}` → company name
- `{{first_name}}` → contact first name

---

## EMAIL 2 — DAY 4 (PROOF)

**Subject:** `Re: Quick question about your estimating process`

**Body:**
```
{{first_name}} — following up in case this got buried.

Wanted to share a specific number since I find that more useful than a pitch:

A Michigan electrical contractor (48 employees, operates across metro Detroit) was spending 22 hours/week on change order documentation, RFIs, and project reporting. Manual process, multiple spreadsheets, constant rework when field conditions changed.

We built them an AI layer that:
- Auto-generates change orders from field notes (photo + voice → formatted CO in 4 minutes)
- Pulls project status from their existing PM software and auto-writes the weekly owner report
- Routes RFIs to the right subcontractor and tracks response time automatically

Result: 22 hours/week → 5 hours/week. Project manager is now managing 2 additional projects with the same hours.

I'm based in Detroit and work exclusively with Michigan businesses. Happy to run the same analysis on {{company_name}}'s current workflow — 20 minutes, no obligation.

David
```

---

## EMAIL 3 — DAY 9 (SOFT CLOSE)

**Subject:** `One last thing on AI for {{company_name}}`

**Body:**
```
{{first_name}},

I'll keep this short — I know Q{{current_quarter}} is busy.

I work with Michigan contractors specifically because the trades here have a real opportunity right now: labor costs are up, margins are compressed, and the companies automating their back office are pulling ahead fast.

Two things worth knowing:
1. Michigan's Going PRO Talent Fund covers AI training for office and project management staff — up to $50K per employer. We structure our engagements to qualify.
2. Most of our construction clients break even inside 4–6 months. Year 2 ROI is typically 150–250%.

If the timing's off, no worries. But if you've been thinking about this and just haven't carved out time — I can put together a 1-page breakdown specific to {{company_name}}'s size and trade in 48 hours if you can spare 20 minutes.

Either way, hope business is moving well.

David Calderon | American AI Solutions LLC
detroit-based | david@americanaisolutionsllc.com
```

---

## EMAIL 4 — DAY 21 (BREAKUP)

**Subject:** `Closing the loop, {{first_name}}`

**Body:**
```
{{first_name}},

I've reached out a few times and haven't heard back — which usually means either the timing's wrong, the fit isn't there, or my emails landed in the wrong place.

Either way, I'll stop reaching out after this.

Before I do: I put together a 1-page AI ROI breakdown for Michigan {{trade_type: general contractors/electrical/mechanical/plumbing}} companies your size. If you ever want it — no call required — just reply and I'll send it over.

Rooting for {{company_name}} regardless.

David
david@americanaisolutionsllc.com
```

**Clay field:** `{{trade_type}}` → enriched from company description, SIC code, or LinkedIn industry tag

---

## CLAY SETUP FOR CONSTRUCTION OUTREACH

### Table 1: Michigan General Contractors
**Source:** LinkedIn search
```
Search: "project manager" OR "estimator" OR "VP operations" Michigan "general contractor" OR "construction"
Filter: Michigan, 10–200 employees, construction/specialty trade industry
Import: 300–500 contacts
```

**Enrichment columns to add in Clay:**
| Column | Clay Data Source | What it pulls |
|---|---|---|
| `clay_recent_signal` | LinkedIn Posts + News | Recent project wins, expansions, job postings |
| `trade_type` | Company description | GC / electrical / mechanical / plumbing |
| `employee_count` | LinkedIn / Clearbit | Firm size for personalization |
| `project_software` | Tech stack (BuiltWith) | Procore, Buildertrend, Sage = tech-forward |
| `pain_signal` | Job postings (Coresignal) | "estimator" or "project coordinator" posting = overwhelmed |
| `ai_personalization` | Claude (AI column) | Uses all above to write a custom first line |

**AI column prompt for Clay:**
```
You are writing the opening line of a cold email to {{first_name}} at {{company_name}}, a Michigan {{trade_type}} company.

Use these signals:
- Recent signal: {{clay_recent_signal}}
- Company size: {{employee_count}} employees
- Project software used: {{project_software}}

Write ONE sentence (max 20 words) that shows you did your homework. Reference something specific. Do NOT say "I noticed" or "I saw" as the first two words. Be direct.

Examples of the right tone:
- "Growing to 3 crews while keeping the same office headcount is exactly when estimating systems start breaking down."
- "Landing the [project type] contract while managing 12 active jobs — that's where project tracking usually gets painful."

Return only the sentence. No quotes, no preamble.
```

### Table 2: Michigan Specialty Trades (Mechanical, Electrical, Plumbing)
Same structure as above. Filter for:
- NAICS codes: 2382 (Plumbing/HVAC), 2383 (Electrical), 2389 (Other Specialty Trades)
- Michigan only
- Employee count: 8–150

---

## INSTANTLY.AI CONFIGURATION

**Campaign settings:**
- Sending volume: 40 emails/day (lower than automotive — GC community is smaller, more word-of-mouth)
- Send days: Monday, Tuesday, Wednesday (Friday afternoon is dead in construction)
- Send hours: 7:00 AM – 9:30 AM EST (contractors start early)
- Delay between emails in sequence: 4 days, 5 days, 12 days (matches the sequence above)
- Stop on reply: YES (critical — don't keep emailing someone who responds)
- Stop on meeting booked: YES (if they book Calendly, sequence stops)

**Unsubscribe footer (required):** Instantly handles this automatically

**From name:** David Calderon
**From email:** david@mail.americanaisolutionsllc.com
**Reply-to:** david@americanaisolutionsllc.com

---

## FOLLOW-UP AFTER REPLY

When someone replies with interest, send this within 2 hours:

```
{{first_name}} — great to hear from you.

I'm going to send over a quick 1-pager on what we typically build for {{trade_type}} companies your size, and then let's find 20 minutes that works.

Here's my calendar: calendly.com/david04calderon/ai-strategy-call

Feel free to grab any slot. I'm in Michigan so I match your timezone.

Talk soon,
David
```

---

## EXPECTED METRICS (MICHIGAN CONSTRUCTION)

| Metric | Target |
|---|---|
| Open rate | 42–55% |
| Reply rate (positive or negative) | 4–8% |
| Positive reply rate | 2–4% |
| Call booked rate (per 100 emails) | 1.5–3 |
| Time to first booked call | 8–14 days after launch |
| Average deal size (construction) | $8,000–$25,000 |

**Realistic pipeline from 300 contacts:**
- 4–8 calls booked
- 2–3 proposals sent
- 1–2 clients closed
- Revenue: $16,000–$50,000 from one 300-contact campaign
