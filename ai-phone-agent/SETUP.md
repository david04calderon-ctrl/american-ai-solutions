# AI Phone Agent — Setup Guide

## What This Builds
An autonomous AI voice agent named "Alex" that answers every call to your American AI Solutions business number, qualifies prospects, quotes pricing, books strategy calls into Calendly, texts you a summary, and logs everything in HubSpot — automatically.

## Cost to Launch
| Service | Cost |
|---------|------|
| Vapi.ai | Free $10 credit to start (~$0.05/min after) |
| Twilio phone number | $1.15/month |
| Claude API | Free $5 credit to start |
| n8n (self-hosted) | Free |
| **Total Month 1** | **~$0 with free trials** |
| **Total ongoing** | **~$20–40/month depending on call volume** |

---

## Step 1 — Get a Phone Number (Twilio)
1. Go to twilio.com → Sign up (free trial includes a phone number)
2. Go to Phone Numbers → Buy a Number
3. Search for a Detroit area code: **313** or **248**
4. Buy it (~$1.15/month after trial)
5. Save the number — this becomes your business number

---

## Step 2 — Set Up Vapi (Voice AI Platform)
1. Go to vapi.ai → Sign up (free $10 credit)
2. Go to **Assistants** → Create New Assistant
3. Name it: `Alex — AIS Intake`
4. **System Prompt**: Copy the full contents of `agent-system-prompt.md` and paste it here
5. **Model**: Select Claude (Anthropic) → claude-opus-4-8 or claude-sonnet-4-6
6. **Voice**: Select a professional American English voice (ElevenLabs "Adam" or "Rachel" work well)
7. **First Message**: `"Thank you for calling American AI Solutions, this is Alex. How can I help you today?"`
8. **End of Call Report**: Enable it, set webhook URL to your n8n webhook URL (from Step 4)

**Connect your Twilio number to Vapi:**
- In Vapi: Phone Numbers → Add Number → Import from Twilio
- Enter your Twilio Account SID and Auth Token
- Select the 313/248 number you bought

---

## Step 3 — Set Up n8n
1. Go to n8n.io → Sign up for cloud (free tier) OR self-host
2. Create a new workflow
3. Import `n8n-workflow.json` from this folder
4. Set environment variables:
   - `TWILIO_PHONE_NUMBER`: your business number (e.g. +13135551234)
   - `DAVID_PHONE_NUMBER`: your personal cell
   - `HUBSPOT_API_KEY`: from HubSpot > Settings > Integrations > Private Apps
5. Activate the webhook node — copy the webhook URL
6. Paste the webhook URL back into Vapi (Step 2, End of Call Report)

---

## Step 4 — Connect HubSpot
1. In HubSpot: Settings → Integrations → Private Apps → Create App
2. Give it scopes: contacts (read/write), deals (read/write), engagements (write)
3. Copy the API key
4. Paste into n8n environment variables

---

## Step 5 — Test It
1. Call your new business number from your cell
2. Alex should answer within 2 rings
3. Have a test conversation — pretend you're a Detroit logistics company
4. After hanging up: check HubSpot for new contact + deal + note
5. Check your phone for the text alert from n8n

---

## Step 6 — Add the Number to Your Website
Once you have your Twilio number, add it to the site by telling Claude Code:
> "Add phone number [your number] to the website header, contact section, and SEO schema"

---

## What Alex Does Every Call
1. Answers professionally, asks what they need
2. Qualifies: industry, problem, budget, decision authority, urgency
3. Educates: connects their problem to what AIS builds
4. Mentions Michigan grant funding for eligible businesses
5. Books them into Calendly for a strategy call with David
6. After the call: texts David, logs everything in HubSpot, sends follow-up email

## Escalation — Live Transfer to David
If a prospect says "I want to talk to a real person right now" or is extremely hot:
- Alex says: "Absolutely — let me see if David is available right now."
- Vapi transfers the call to David's cell
- Configure in Vapi: Transfer Destinations → add David's number

---

## Files in This Folder
| File | Purpose |
|------|---------|
| `agent-system-prompt.md` | Alex's complete brain — personality, knowledge, conversation flow, objection handling |
| `n8n-workflow.json` | Import this into n8n — handles all post-call automation |
| `SETUP.md` | This file — step-by-step launch guide |
