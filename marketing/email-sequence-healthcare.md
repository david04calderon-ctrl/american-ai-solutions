# Cold Email Sequence — Michigan Healthcare Practices
**Target:** Practice managers, medical directors, office managers, COOs at Michigan private practices, specialty clinics, and clinic groups (10–150 staff)
**Sending from:** mail.americanaisolutionsllc.com
**Tools:** Clay (enrichment + AI personalization) → Instantly.ai (sending + warmup)
**Sequence:** 4 emails over 21 days
**Important:** HIPAA compliance is always the first objection. Pre-empt it in Email 1.
**Expected results:** 3–6% reply rate, 1–2 calls per 100 emails

---

## EMAIL 1 — DAY 1 (HOOK + HIPAA PRE-EMPT)

**Subject line options (A/B test):**
- `Quick question about your prior auth process, {{first_name}}`
- `Is {{practice_name}} using AI for scheduling yet?`
- `HIPAA-compliant AI in Michigan practices — real or myth?`

**Body:**
```
Hi {{first_name}},

Quick genuine question: how much time is your team spending on prior authorization every week?

Asking because I work with Michigan healthcare practices to automate the administrative workflows that are killing staff time — specifically prior auth, patient scheduling and follow-up, and clinical documentation.

The most common response I get: "We'd love to, but HIPAA."

The actual answer: Anthropic (Claude), Microsoft Azure, and Google all offer Business Associate Agreements for HIPAA-compliant AI deployments. The legal barrier isn't what most practice managers think it is.

A 5-provider practice in Michigan cut their prior auth time from 22 hours/week to 4 hours/week in 6 weeks — without touching their EHR.

Worth a 20-minute call to see if there's a similar opportunity at {{practice_name}}?

David Calderon
American AI Solutions LLC | Detroit, MI
calendly.com/david04calderon/ai-strategy-call
```

**Clay enrichment to use:**
- `{{first_name}}` — contact first name
- `{{practice_name}}` — practice or clinic name
- `{{practice_type}}` → specialty (pulled from LinkedIn or website: "orthopedic practice," "family medicine," "specialty clinic")

---

## EMAIL 2 — DAY 4 (PROOF + SPECIFICS)

**Subject:** `Re: Quick question about your prior auth process`

**Body:**
```
{{first_name}} — following up in case this got buried.

I want to share a specific number because I find that more useful than talking about AI in the abstract:

A Michigan {{practice_type}} ({{employee_count_range}} employees) was processing prior authorizations manually — 22+ hours/week across their staff, with a 3–5 day average approval timeline.

We deployed an AI layer that:
→ Reads incoming referrals and extracts the relevant diagnosis codes automatically
→ Pulls patient records and history to build the auth request
→ Submits to payer portals or via fax API
→ Monitors for approval/denial and flags exceptions for staff review

Result: 22 hrs/week → 4 hrs/week. 3–5 day approval → same-day in 80% of cases.

The HIPAA question: we build on Anthropic's API under their BAA, or deploy on-premise for practices that require it. Compliant from day one.

I'm Detroit-based and work exclusively with Michigan practices. Happy to walk you through exactly what this looks like for {{practice_name}} — 20 minutes, no obligation.

David
```

**Clay enrichment:**
- `{{practice_type}}` — type of practice (enriched from website or LinkedIn)
- `{{employee_count_range}}` → maps employee count to a range (e.g., "15–20 provider" or "8-provider")

---

## EMAIL 3 — DAY 9 (SOFT CLOSE + GRANT ANGLE)

**Subject:** `One thing Michigan practices aren't using yet`

**Body:**
```
{{first_name}},

Short one — I know healthcare admin has no spare bandwidth.

Two things worth knowing about Michigan healthcare AI right now:

1. Michigan's Going PRO Talent Fund covers AI training for administrative and clinical support staff — up to $50K per employer. We structure every engagement to qualify, and we walk you through the application. Most Michigan practices I talk to have never heard of this.

2. The Michigan Health Endowment Fund has grants specifically for Michigan healthcare organizations implementing patient care technology. Applications are accepted quarterly.

These don't require a giant commitment. A small pilot project that also qualifies for grant reimbursement is how most practices start.

If you've been curious but aren't sure where to begin — happy to start with a free 30-minute call. I'll tell you straight if there's a fit and what the grant situation looks like for your practice type.

David Calderon
david@americanaisolutionsllc.com
calendly.com/david04calderon/ai-strategy-call
```

---

## EMAIL 4 — DAY 21 (BREAKUP)

**Subject:** `Closing the loop, {{first_name}}`

**Body:**
```
{{first_name}},

I've reached out a few times without hearing back — which usually means the timing is wrong, the fit isn't there, or the emails missed you entirely.

Either way, I'll stop after this.

One last thing: I put together a 1-page overview of what AI automation looks like specifically for Michigan {{practice_type}} practices — what it costs, what it saves, and how the grant math works. No call required, just a document. If you'd like it, reply and I'll send it over.

If not — no hard feelings. Wishing {{practice_name}} a strong second half of the year.

David
```

---

## CLAY SETUP FOR HEALTHCARE OUTREACH

### Table 1: Michigan Private Practices
**Source:** LinkedIn + Zocdoc/Healthgrades scraping (Clay can pull from both)
```
LinkedIn search: "practice manager" OR "office manager" OR "medical director" Michigan healthcare
Filter: Michigan, 5–150 employees, healthcare industry
Import: 300–400 contacts
```

**Enrichment columns:**
| Column | Clay Source | What it pulls |
|---|---|---|
| `practice_type` | Website / LinkedIn company page | Family medicine / orthopedic / cardiology / etc. |
| `employee_count_range` | LinkedIn / Clearbit | Maps count to a readable range |
| `practice_software` | BuiltWith / G2 signals | Epic, Athena, eClinicalWorks — tech-forward signal |
| `pain_signal` | LinkedIn job postings | "medical receptionist" or "prior auth specialist" posting = pain |
| `hipaa_objection_likely` | AI column | Flags if the practice seems compliance-conservative |
| `ai_personalization` | Claude (AI column) | Custom first line based on all signals |

**Clay AI column prompt:**
```
You are writing the opening line of a cold email to {{first_name}} at {{practice_name}}, a Michigan {{practice_type}} practice.

Signals available:
- Job posting: {{pain_signal}}
- Tech stack: {{practice_software}}
- Practice size: {{employee_count_range}}

Write ONE sentence (max 20 words) that references something specific about their practice. Be direct. Do not start with "I noticed" or "I saw." Reference a real operational challenge.

Examples of the right tone:
- "Running a high-volume orthopedic practice with manual prior auth is a staffing problem that compounds."
- "Athena is good software — but the patient communication layer is still manual for most practices using it."

Return only the sentence.
```

### Table 2: Michigan Specialty Clinics
Same structure. Filter specifically for:
- Specialty types with highest prior auth burden: oncology, orthopedics, cardiology, neurology
- Mental health practices (scheduling + documentation = high AI opportunity)
- Urgent care chains (scheduling optimization play)

---

## INSTANTLY.AI CONFIGURATION (HEALTHCARE)

**Campaign settings:**
- Sending volume: 30 emails/day (smaller, more specialized audience — be precise)
- Send days: Tuesday, Wednesday, Thursday (avoid Monday morning overwhelm and Friday afternoon)
- Send hours: 9:00 AM – 11:00 AM EST (before clinical day gets fully busy)
- Delay between emails: 4 days, 5 days, 12 days
- Stop on reply: YES — critical
- Stop on meeting booked: YES

**A/B test:** Use two different subject line approaches for Email 1:
- Version A: "Quick question about your prior auth process, {{first_name}}"
- Version B: "Is {{practice_name}} using AI for scheduling yet?"
After 50 emails each, keep the winner.

---

## RESPONSE HANDLING — HEALTHCARE-SPECIFIC

**If they respond positively:**
> "[First name] — great to hear from you. Let me send over a 1-page breakdown of what HIPAA-compliant AI looks like specifically for a {{practice_type}} practice your size, and then we can set up 20 minutes to walk through whether it's a fit. Does [CALENDLY LINK] work for grabbing time?"

**If they respond with "HIPAA concern":**
> "[First name] — totally fair concern. The answer: Anthropic (who makes Claude, the AI we use) offers a Business Associate Agreement for exactly this use case. So does Microsoft Azure and Google Cloud. We build under the BAA, and for practices that require on-premise deployment, we do that too. Would it help if I shared the BAA documentation so your compliance team can look at it before we talk? Then the HIPAA question is answered before we spend any of your time."

**If they respond with "we're happy with our current system":**
> "[First name] — that's great to hear. The AI we deploy isn't a replacement for your EHR — it's a layer on top of it. If you're using Epic, Athena, or eClinicalWorks, the AI reads from those and handles the communication and routing layer. Most of our clients keep all their clinical systems and just remove the manual work between them. Not sure if that's relevant to you — but if you're doing prior auth or patient follow-up manually, it might be."

---

## EXPECTED METRICS (MICHIGAN HEALTHCARE)

| Metric | Target |
|---|---|
| Open rate | 40–52% |
| Reply rate | 3–6% |
| Positive reply rate | 1.5–3% |
| Call booked rate (per 100 emails) | 1–2 |
| Typical deal size (healthcare) | $8,000–$28,000 |

**Realistic pipeline from 300 healthcare contacts:**
- 3–6 calls booked
- 2–3 proposals sent
- 1–2 clients closed
- Revenue: $16,000–$56,000 from one 300-contact campaign
