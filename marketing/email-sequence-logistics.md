# Cold Email Sequence — Michigan Trucking & Logistics
**Target:** Fleet managers, dispatch managers, directors of transportation, owner-operators at Michigan trucking, freight, and 3PL companies (20–200 trucks)
**Sending from:** mail.americanaisolutionsllc.com
**Tools:** Clay (enrichment + AI personalization) → Instantly.ai (sending + warmup)
**Sequence:** 4 emails over 21 days
**Key insight:** Trucking owner-operators are the fastest-moving decision makers in any vertical. If the ROI is real, they move in days. Lead with the money.
**Expected results:** 4–8% reply rate, 2–3.5 calls per 100 emails (trucking is the highest response rate vertical)

---

## EMAIL 1 — DAY 1 (HOOK — LEAD WITH MONEY)

**Subject line options (A/B test):**
- `Quick question about your deadhead rate, {{first_name}}`
- `{{company_name}} — how many empty miles are you running?`
- `Michigan fleet managers are cutting deadhead 40% without switching TMS — here's how`

**Body:**
```
Hi {{first_name}},

Quick question: what's {{company_name}}'s current deadhead rate running at?

Asking because I work with Michigan fleet operators to cut empty miles and dispatcher workload using AI — without requiring you to switch your TMS or ELD system.

We work on top of what you already use (Samsara, Motive, McLeod, Aljex, DAT).

One Michigan fleet (47 trucks, Southeast Michigan) dropped their deadhead rate from 22% to 13% in 90 days. At 2.5M miles/year, that's roughly $225,000 in recovered revenue and fuel savings.

Worth a 20-minute call to see if the math makes sense for {{company_name}}?

David Calderon
American AI Solutions LLC | Detroit, MI
calendly.com/david04calderon/ai-strategy-call
```

**Clay enrichment to use:**
- `{{first_name}}` — contact first name
- `{{company_name}}` — fleet company name
- `{{fleet_size_est}}` → estimated fleet size from enrichment

---

## EMAIL 2 — DAY 4 (THE RETENTION ANGLE)

**Subject:** `Re: Quick question about your deadhead rate`

**Body:**
```
{{first_name}} — following up. Wanted to add one more number because I find it lands differently than the deadhead math.

Driver replacement cost in Michigan trucking right now: $5,000–$12,000 per driver, not including the productivity loss during the transition.

At 78% average annual turnover (industry benchmark), a 50-driver fleet is spending $195,000–$468,000 per year just replacing the drivers they lose.

What we deploy is a driver retention model that:
→ Tracks 6 early-warning indicators (HOS utilization, load rejection rate, pay trend vs. preference, home time patterns)
→ Flags at-risk drivers 30–45 days before they typically give notice
→ Gives the fleet manager a specific reason to reach out and a suggested fix

Result at comparable Michigan fleets: turnover drops from ~78% to 50–55% within 90 days. At 50 drivers, that's 10–15 fewer replacements per year. $50,000–$180,000 saved.

I'm Detroit-based and work specifically with Michigan carriers. Happy to run the math for {{company_name}}'s fleet size — 20 minutes, no obligation.

David
```

---

## EMAIL 3 — DAY 9 (DISPATCH CAPACITY + SOFT CLOSE)

**Subject:** `One more thing — dispatch load`

**Body:**
```
{{first_name}},

Last thing I'll share before I stop reaching out.

Industry average is 1 dispatcher per 30–35 trucks. With the right AI layer, the same dispatcher manages 65–80 trucks without more hours worked.

At {{company_name}}'s size, that math means one of two things:
→ You don't need to hire the next dispatcher when you grow
→ Your current dispatchers can handle more volume if you land a new contract

We've built this on top of McLeod, Aljex, and Tailwind without requiring any changes to existing workflow. Dispatchers keep using what they know — AI handles the matching and scheduling logic in the background.

Michigan carriers are also eligible for the Going PRO Talent Fund for AI training of dispatch and logistics staff. Up to $50K reimbursement. We handle the grant application documentation.

Happy to set up 20 minutes this week if any of this is relevant to where {{company_name}} is headed.

David Calderon
calendly.com/david04calderon/ai-strategy-call
```

---

## EMAIL 4 — DAY 21 (BREAKUP)

**Subject:** `Closing the loop, {{first_name}}`

**Body:**
```
{{first_name}},

I've reached out a few times without hearing back. I'll stop after this one.

If the timing's off or the fit isn't there — no hard feelings.

Before I go: I have a 1-page ROI breakdown for Michigan trucking companies around your fleet size — deadhead reduction, retention savings, and dispatch capacity math. No call required, just the numbers. Reply if you'd like me to send it.

Either way, hope the lanes are treating you well.

David
david@americanaisolutionsllc.com
```

---

## CLAY SETUP FOR TRUCKING OUTREACH

### Table: Michigan Carriers (20–200 trucks)
**Source:** FMCSA Motor Carrier database + LinkedIn
```
FMCSA: safer.fmcsa.dot.gov → Company Snapshot → search Michigan carriers by safety rating
Filter: Michigan, 20–200 power units (trucks), active authority
LinkedIn: "fleet manager" OR "dispatch manager" OR "director of transportation" Michigan trucking
Import: 300–500 contacts
```

**Enrichment columns in Clay:**
| Column | Clay Source | What it pulls |
|---|---|---|
| `fleet_size_est` | FMCSA / LinkedIn / company website | Number of trucks |
| `eld_provider` | Job postings / tech stack / website | Samsara / Motive / Geotab |
| `tms_provider` | Job postings / website | McLeod / Aljex / Tailwind |
| `lane_type` | Website / LinkedIn description | OTR / regional / local / flatbed / reefer |
| `pain_signal` | LinkedIn job postings | "dispatcher" posting = growth pain; "driver" posting = retention pain |
| `decision_maker` | LinkedIn title | Owner / President / VP Ops = yes; Fleet Coordinator = no |
| `ai_personalization` | Claude (AI column) | Custom first line |

**Clay AI column prompt for logistics:**
```
You are writing the opening line of a cold email to {{first_name}}, the {{title}} at {{company_name}}, a Michigan trucking company with approximately {{fleet_size_est}} trucks.

Context:
- Lane type: {{lane_type}}
- Current tech: {{eld_provider}} (ELD), {{tms_provider}} (TMS)
- Pain signal: {{pain_signal}}

Write ONE sentence (max 20 words) that references something specific about their operation. Be direct. Do not start with "I noticed" or "I saw."

Examples of the right tone:
- "Running OTR lanes into the Southeast with 40 trucks — deadhead on the return is almost always the margin problem."
- "If you're using McLeod and still doing load matching manually, there's about 8 hours/week of dispatcher time that's automatable."

Return only the sentence.
```

---

## INSTANTLY.AI CONFIGURATION (TRUCKING)

**Campaign settings:**
- Sending volume: 50 emails/day (trucking has a higher volume of contacts to reach)
- Send days: Monday, Tuesday, Wednesday, Thursday (avoid Friday — owner-operators often out of office or traveling)
- Send hours: 6:30 AM – 8:30 AM EST (trucking ops start early — be in their inbox before the day gets busy)
- Delay between emails: 4 days, 5 days, 12 days
- Stop on reply: YES
- Stop on meeting booked: YES

**Why early morning for trucking:** Fleet managers and owner-operators start their day at 5–6am. Their inbox is most likely to get attention in that first 60–90 minutes before dispatch madness begins.

---

## RESPONSE HANDLING — TRUCKING-SPECIFIC

**If they reply with the deadhead rate:**
> "[First name] — thanks for sharing. [X]% is actually [above/right at/below] the average I'm seeing for Michigan OTR fleets. [IF ABOVE AVERAGE: That's worth a conversation — there's usually 5–8 points of improvement available with the right load matching logic.] Can we set up 20 minutes this week? [Calendly link]"

**If they say "we already use DAT optimization":**
> "[First name] — DAT's suggestions are a good starting point. What we build is different: it factors in your specific drivers (HOS remaining, their preferred home lanes, their rated reliability on certain load types) and your historical margin data by lane. DAT gives you a generic suggestion; we give you a recommendation that knows your fleet. Not the same thing. Happy to walk you through the difference — 20 minutes."

**If they're interested but not the decision maker:**
> "[First name] — thanks for the heads up. Would [OWNER'S NAME / the decision maker] be open to a 20-minute call directly? I find it's most valuable to have the right person in the room from the start. What's the best way to get that intro?"

**If they ask for pricing upfront:**
> "[First name] — I don't quote a number until I understand your fleet size, TMS, lane mix, and what the specific bottlenecks are. What I can tell you is that most Michigan fleets at your size see a payback period of 3–6 months. The call is free and I'll tell you straight if the numbers don't work for your setup. [Calendly link] — grab any open slot."

---

## EXPECTED METRICS (MICHIGAN TRUCKING)

| Metric | Target |
|---|---|
| Open rate | 45–58% (highest of any vertical) |
| Reply rate | 5–9% |
| Positive reply rate | 3–5% |
| Calls booked per 100 emails | 2–4 |
| Typical deal size | $10,000–$30,000 |
| Average time to close | 1–3 weeks (fastest of any vertical) |

**Realistic pipeline from 300 trucking contacts:**
- 6–12 calls booked
- 3–5 proposals sent
- 2–3 clients closed
- Revenue: $30,000–$90,000 from one 300-contact campaign

**Why trucking closes fastest:** Owner-operators and small fleet owners are the closest thing to sovereign decision makers in business. No board, no committee, no procurement department. If it saves money, they say yes — fast.
