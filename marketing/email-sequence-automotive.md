# Cold Email Sequence — Michigan Automotive Tier 2/3 Suppliers
**Tool:** Clay (enrichment + personalization) → Instantly.ai (sending)
**ICP:** Operations manager, plant manager, VP Ops, COO at Michigan Tier 2/3 auto suppliers, 10–200 employees
**Clay signals to pull:** Company name, contact first name, job title, recent job postings (operations/quality), tech stack if visible, any news mentions
**Sending domain:** Use a warmed subdomain (e.g., david@mail.americanaisolutionsllc.com) — never your primary domain for cold outbound

---

## EMAIL 1 — THE HOOK
**Send:** Day 1
**Subject line options (A/B test):**
- `AI quality inspection — {{company}}`
- `Tier 1 audit question for {{first_name}}`
- `Michigan Industry 4.0 grant — did you apply?`

**Body:**
```
Hi {{first_name}},

Quick question — has {{company}} started getting questions from your Tier 1 customers about AI adoption yet?

We're seeing it hit Michigan Tier 2/3 shops across the board this quarter. OEM audit criteria are starting to include it.

We help Michigan manufacturers deploy AI quality inspection and predictive maintenance in 3–4 weeks — not 6 months. Fixed scope, fixed price, no enterprise contract required.

Michigan's Industry 4.0 Tech Grant can also cover up to 50% of implementation costs for qualifying shops. Happy to walk you through that on a quick call.

Worth 20 minutes if the timing is right?

— David Calderon
American AI Solutions LLC | Detroit, MI
david@americanaisolutionsllc.com
```

**Notes:**
- Personalize line 1 with a Clay AI column: reference their recent job posting, a news mention, or their specific product line if visible
- Keep it under 100 words in the body
- One clear CTA at the end — don't offer multiple options

---

## EMAIL 2 — THE PROOF
**Send:** Day 4 (if no reply)
**Subject:** `Re: AI quality inspection — {{company}}`
*(Reply thread on the same subject — higher open rates)*

**Body:**
```
{{first_name}},

Wanted to share a quick data point in case it's useful:

Michigan auto suppliers deploying AI quality inspection are seeing:
→ 95%+ defect detection accuracy (vs. ~78% manual)
→ 35% reduction in unplanned downtime
→ Live in 3–4 weeks from signed scope

The grant piece is real too — we helped a Tier 2 shop in Livonia structure their engagement to qualify for the Industry 4.0 reimbursement. Cut their effective cost in half.

If {{company}} is fielding questions from your OEM customers about AI readiness, this is probably the fastest path to an honest answer.

30-minute call, no commitment: calendly.com/david04calderon/ai-strategy-call

— David
```

**Notes:**
- The "Re:" subject keeps it in the same thread — increases reply rate
- The Livonia shop reference adds local credibility (update this with real client references as they come in)
- Numbers do the selling here — don't editorialize

---

## EMAIL 3 — THE CLOSE
**Send:** Day 9 (if no reply)
**Subject:** `Closing the loop — {{first_name}}`

**Body:**
```
{{first_name}},

I'll keep this short — closing the loop on my last two notes.

If the timing isn't right, no problem at all. I'll check back in Q3.

But if AI quality systems or predictive maintenance are on your radar for this year, we'd love to be the ones who help you move on it fast.

One call tells you everything you need to know — including whether you qualify for Michigan grant funding that makes this significantly cheaper.

Link if useful: calendly.com/david04calderon/ai-strategy-call

Either way, appreciate you reading.

— David Calderon
American AI Solutions LLC | Detroit, MI
```

**Notes:**
- Short close. Don't re-pitch. Just make it easy to say yes or no.
- "Closing the loop" subject line gets high open rates — feels human, not automated
- "I'll check back in Q3" is permission-based — low pressure, keeps the door open

---

## FOLLOW-UP AFTER NO REPLY (Optional Email 4)
**Send:** Day 21
**Subject:** `Quick question — {{first_name}}`

**Body:**
```
{{first_name}},

One honest question: is AI automation just not a priority for {{company}} right now, or is it more about not knowing where to start?

Either answer is totally fine — I just want to make sure I'm being useful rather than just filling your inbox.

If it's the latter, I'm happy to send over a 1-page breakdown of what other Michigan {{industry}} operations are deploying first, no call required.

— David
```

**Notes:**
- This "breakup email" format often gets the highest reply rate of the sequence
- Offering the 1-pager is a low-commitment way in — have a real PDF ready to send
- If they say "not a priority" — thank them and remove. Never push. Reputation > one sale.

---

## CLAY SETUP GUIDE

**Step 1: Build the lead list**
- Source: Apollo.io, LinkedIn Sales Navigator, or ZoomInfo (sync to Clay)
- Filters: Michigan state, SIC codes 3714/3711/3462/3460 (auto parts), employee count 10–500
- Pull fields: first name, last name, company, title, email, LinkedIn URL, company website

**Step 2: Enrichment waterfall in Clay**
- Column 1: Clearbit enrich (company data, tech stack)
- Column 2: LinkedIn scrape (recent posts, job changes)
- Column 3: News search (company name + last 90 days)
- Column 4: AI column — "Write one sentence referencing [recent news or job posting] about why AI quality systems might be relevant to {{company}} right now."

**Step 3: Personalization column**
- AI column prompt: "Write a 1-sentence opening for a cold email to {{first_name}} at {{company}}. Reference: {{enrichment_detail}}. Keep it under 15 words. Don't mention AI yet. Sound like a human."
- This replaces the "Quick question" opener in Email 1

**Step 4: Push to Instantly**
- Clay → Instantly native integration
- Map fields: first_name, company, personalization_line, email
- Set campaign: 3-email sequence, 4-day gaps, send Tue–Thu 8am–11am EST
- Daily sending limit: 30–50 emails per warmed domain

**Step 5: Reply handling**
- All positive replies → David reviews and takes over manually
- "Not interested" → mark unsubscribed in Instantly, remove from Clay list
- No reply after sequence → add to LinkedIn connection queue for warm follow-up

---

## EXPECTED METRICS (with Clay personalization)

| Metric | Industry avg | Target with this stack |
|---|---|---|
| Open rate | 30–40% | 45–60% |
| Reply rate | 1–2% | 3–8% |
| Positive reply rate | 0.3–0.5% | 1–2% |
| Calls booked per 100 emails | 0.5 | 1.5–3 |

At 50 emails/day, 5 days/week:
- 1,000 emails/month
- ~15–30 calls booked
- ~3–6 new client conversations at the 2% positive reply rate

This is a scalable, consistent pipeline engine. Once warmed up, it runs on autopilot.
