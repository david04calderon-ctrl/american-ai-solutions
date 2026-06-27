# Alex Goes Live — Vapi Quick-Start
## Do this immediately after securing your Twilio number

---

## WHAT YOU'LL NEED
- Your Twilio phone number (the one you just got)
- Your Twilio Account SID and Auth Token (from twilio.com → Console Dashboard)
- The agent system prompt (already written: `ai-phone-agent/agent-system-prompt.md`)
- 20 minutes

---

## STEP 1 — CREATE YOUR VAPI ACCOUNT (5 min)

1. Go to **vapi.ai**
2. Sign up — use david04calderon@gmail.com
3. You get $10 free credit (enough for 50–100 minutes of calls)
4. No charge until credit runs out

---

## STEP 2 — CREATE THE ASSISTANT (5 min)

1. In Vapi dashboard → **Assistants** → **Create Assistant**
2. Name it: **Alex — AIS Intake**
3. **First Message** (what Alex says when someone calls):
   > "Thank you for calling American AI Solutions, this is Alex. How can I help you today?"

4. **System Prompt** — paste the entire contents of `ai-phone-agent/agent-system-prompt.md`

5. **Voice settings:**
   - Provider: ElevenLabs or Vapi native
   - Voice: pick a warm, professional male or female voice — listen to samples
   - Speed: 0.95 (slightly slower = more trustworthy)
   - Recommended: "Elliot" or "Jessica" from ElevenLabs if available

6. **End call phrase:** "Have a great day."

7. **Max duration:** 15 minutes (protects against runaway calls eating your credit)

8. Save the assistant — copy the **Assistant ID** (you'll need it in Step 4)

---

## STEP 3 — CONNECT YOUR TWILIO NUMBER TO VAPI (5 min)

**Option A — Through Vapi (easiest):**
1. Vapi dashboard → **Phone Numbers** → **Import**
2. Select "Twilio"
3. Enter your Twilio Account SID and Auth Token
4. Select your 313-AI-AGENT number from the list
5. Assign it to the Alex assistant
6. Done — calls to 313-242-4368 now ring Alex

**Option B — Through Twilio (manual):**
1. Go to twilio.com → Phone Numbers → your number → Configure
2. Under "A call comes in" → set to **Webhook**
3. Webhook URL: get this from Vapi dashboard → Phone Numbers → your number → copy the webhook URL
4. Save

---

## STEP 4 — CONNECT TO N8N (LEADS INTO HUBSPOT) (10 min)

The n8n workflow is already built at `ai-phone-agent/n8n-workflow.json`.

**If you're using n8n cloud (free tier at n8n.io):**
1. Sign up at n8n.io → free account
2. New workflow → Import → paste the contents of `n8n-workflow.json`
3. Update these nodes with your real credentials:
   - **HubSpot node:** add your HubSpot API key
   - **Twilio SMS node:** add Twilio SID + Auth Token + David's cell number
   - **Gmail node:** connect your Gmail (david04calderon@gmail.com)
4. Activate the workflow
5. Copy the webhook URL from the first node (Webhook trigger)
6. In Vapi → Assistant settings → **End of Call Webhook** → paste the n8n webhook URL

Now every call Alex takes automatically:
- Creates a HubSpot contact
- Creates a HubSpot deal
- Texts David with the lead summary
- Sends the caller a confirmation email

---

## STEP 5 — TEST IT (2 min)

Call 313-242-4368 (or whatever your number is) from your cell.
Alex should answer within 2 rings.
Talk to Alex like a prospect would.
Check your email — you should get the call summary.
Check HubSpot — the contact should appear.

If anything doesn't work: tell Claude Code exactly what happened and it gets fixed.

---

## AFTER IT'S LIVE

**Monitor in Vapi dashboard:**
- Call logs: every call, duration, transcript
- Credit remaining: top up when it gets low ($10 = 50–100 min of calls)

**Cost breakdown once trials end:**
- Twilio number: ~$1/month
- Vapi calls: ~$0.05–$0.10/minute (average call = 4 min = $0.20–$0.40)
- At 10 calls/month: under $5 total
- At 100 calls/month: under $50 total — covered by one client deposit

**When to upgrade:**
- When call volume exceeds 200 min/month, look at Vapi's paid plans
- When you want call recording + transcripts stored longer: Vapi Pro

---

## WHAT ALEX DOES ON EVERY CALL

1. Answers 24/7 — no missed leads
2. Qualifies: industry, team size, problem, urgency, budget, decision maker
3. Books the Calendly call or takes a message
4. Logs everything to HubSpot automatically
5. Texts David within 60 seconds of hanging up
6. Sends the caller a confirmation email

You close. Alex fills your calendar.
