# Dank Dave Farms — Autonomous Grow Automation System

**Stack:** Raspberry Pi 5 + n8n + SensorPush/Aranet4 APIs + Govee + Claude API
**Goal:** Zero manual intervention for environmental control, real-time alerts, automated grow logs, AI-generated plant health reports

---

## System Architecture

```
[Sensors] → [Raspberry Pi 5 Hub] → [n8n Workflows] → [Dashboard + Alerts]
               ↓                          ↓
          [Local NVR]              [Claude API]
          [Camera feeds]           [AI grow advisor]
               ↓                          ↓
          [YouTube/Social]         [Genetics log + reports]
```

---

## Hardware Hub

### Raspberry Pi 5 (8GB) — Central Brain
- Runs n8n (self-hosted, Docker container)
- Runs local RTSP camera recorder (Frigate NVR or MotionEye)
- Hosts local SQLite or PostgreSQL grow database
- PoE powered if using PoE HAT, or standard USB-C
- Always-on, low power (~10W idle)

### Setup
```bash
# Install Docker on Pi 5
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker pi

# n8n via Docker
docker run -d --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  --restart unless-stopped \
  n8nio/n8n

# Frigate NVR (optional, for AI camera detection)
# Or MotionEye for simpler time-lapse capture
```

---

## Sensor Data Pipeline

### SensorPush HT1 (Temp/RH per room)
- Connects to SensorPush Gateway (Wi-Fi bridge)
- Exposes REST API: `api.sensorpush.com`
- n8n polls every 5 minutes via HTTP Request node
- Data written to Grow Log Google Sheet + local DB

### Aranet4 HOME (CO2)
- Bluetooth LE device — reads via Raspberry Pi BLE adapter
- Python script polls via `bleak` library every 10 min
- Outputs to JSON file → n8n watches file, processes reading

### Xiaomi Mi Flora (Soil Moisture/EC/Light per pot)
- BLE device — same Pi BLE stack
- Poll every 30 min per pot
- Critical: alerts when soil moisture drops below threshold (dry cycle timing)

### AC Infinity CONTROLLER 69 Pro
- Wi-Fi connected, AC Infinity app API (unofficial — monitor via cloud scraping or use their webhook if available)
- Backup: read fan RPM via CONTROLLER 69 Pro display manually

---

## n8n Workflow Specs

### Workflow 1: Environmental Monitor + Alert

**Trigger:** Schedule (every 5 minutes)

**Nodes:**
1. `HTTP Request` — SensorPush API, get latest reading for Room: Flower
2. `HTTP Request` — SensorPush API, get latest reading for Room: Veg
3. `IF Node` — Temp > 82°F OR Temp < 65°F → trigger alert
4. `IF Node` — RH > 65% in flower → trigger alert (bud rot risk)
5. `IF Node` — RH < 35% in flower week 6+ → trigger alert (trichome stress)
6. `Telegram Bot` (or Discord webhook) → send alert with room name, reading, timestamp
7. `Google Sheets` → append row to Grow Log: timestamp, room, temp, RH, CO2

**Alert message format:**
```
🚨 DANK DAVE FARMS ALERT
Room: Flower
Temp: 84°F (HIGH)
RH: 58%
CO2: 1,180 ppm
Time: 2:14 AM
Action: Check mini-split / fan settings
```

---

### Workflow 2: VPD Calculator + Advisory

**Trigger:** Schedule (every 15 minutes)

**Nodes:**
1. Read temp + RH from SensorPush API
2. `Function Node` — Calculate VPD:
```javascript
// VPD Calculation (kPa)
const leafTemp = items[0].json.temp_f * 0.5556 - 17.78; // Approx leaf temp (2°F below air)
const svpLeaf = 0.6108 * Math.exp((17.27 * leafTemp) / (leafTemp + 237.3));
const svpAir = 0.6108 * Math.exp((17.27 * ((items[0].json.temp_f - 32) * 5/9)) / 
               (((items[0].json.temp_f - 32) * 5/9) + 237.3));
const vpd = svpLeaf - (items[0].json.humidity / 100) * svpAir;
return [{ json: { vpd: vpd.toFixed(2), temp: items[0].json.temp_f, rh: items[0].json.humidity } }];
```
3. `IF Node` — VPD outside target range for current grow week
4. `Telegram/Discord` → VPD advisory with recommended adjustment

---

### Workflow 3: Daily Grow Log Report

**Trigger:** Schedule (9:00 AM daily)

**Nodes:**
1. `Google Sheets` → Read last 24 hours of environmental data (288 rows at 5-min intervals)
2. `Function Node` → Calculate daily averages (temp, RH, CO2, VPD)
3. `HTTP Request` → Claude API (`claude-opus-4-8`)
   - System prompt: "You are an expert cannabis cultivator. Review today's environmental data for Dank Dave Farms and provide a brief grow advisory."
   - User prompt: Include averaged temp, RH, CO2, VPD, current grow week, strain names
4. `Telegram/Discord` → Post daily report card with Claude's advisory
5. `Google Sheets` → Log daily summary row

**Sample Claude prompt:**
```
Grow environment data for June 28, 2026:
Room: Flower (Week 5 of flower)
Strains: Jealousy × Permanent Marker, Runtz BX1
Avg Temp: 73.2°F | Avg RH: 51% | Avg CO2: 1,190 ppm | Avg VPD: 1.31 kPa
Low Temp: 68°F (lights off) | High Temp: 78°F (lights on)
RH spike at 3 AM: 61% (lasted 40 min)

Provide: 1) Health assessment, 2) Any risks or concerns, 3) One action item for today.
Keep response under 150 words.
```

---

### Workflow 4: Watering Reminder (Lift-Pot Method Assistant)

**Trigger:** Schedule (2× daily — morning and afternoon)

**Nodes:**
1. Read Xiaomi Mi Flora moisture reading per pot
2. `IF Node` — moisture below threshold (calibrate per strain/pot size)
3. Alert: "POT 3 (Jealousy pheno #2) — ready to water. Moisture: 28%. Check lift weight."

This does not automate watering (living soil = manual watering is part of reading plants), but it alerts so you never miss a dry cycle.

---

### Workflow 5: Harvest Window Tracker

**Input:** Manual grow log entry (current week, trichome status, strain)
**Trigger:** Webhook from manual entry form (Typeform or simple web form)

**Nodes:**
1. Receive trichome report: clear/cloudy/amber ratio, strain, date
2. Claude API → Harvest window prediction:
   ```
   Strain: Jealousy (Seed Junky Genetics)
   Week: 9 of flower
   Trichomes: 70% cloudy, 15% amber, 15% clear
   Typical harvest window for Jealousy: Week 9–10
   Recommend: harvest in 5–7 days for peak effect
   ```
3. Set calendar reminder via Google Calendar API
4. Post to grow log + Discord

---

### Workflow 6: Photo/Time-Lapse Auto-Publisher

**Trigger:** Schedule (midnight + noon)

**Nodes:**
1. `SSH Command` on Pi → capture still from Reolink camera via RTSP snapshot
2. Save image to Google Drive `/DankDaveFarms/TimeLapse/[date]/`
3. Every Sunday: `FFmpeg` command assembles weekly time-lapse from daily stills
4. Upload to YouTube Shorts / Instagram Reels via API (Zapier or n8n community nodes)
5. Auto-caption with grow week, strain, day count

---

## Dashboard (Local + Mobile)

### Grafana (Local on Pi)
- Pull data from InfluxDB or PostgreSQL (n8n writes there)
- Dashboard panels: temp over time, RH over time, VPD, CO2, soil moisture
- Access via local IP or Tailscale VPN from phone anywhere

### Quick Setup
```bash
# Add InfluxDB container
docker run -d --name influxdb \
  -p 8086:8086 \
  -v influxdb_data:/var/lib/influxdb2 \
  influxdb:2.0

# Add Grafana container
docker run -d --name grafana \
  -p 3000:3000 \
  grafana/grafana
```

n8n writes sensor data to InfluxDB. Grafana connects to InfluxDB. Real-time dashboard on phone via Grafana mobile or Tailscale browser access.

---

## Alert Routing

| Condition | Severity | Alert Channel |
|-----------|----------|---------------|
| Temp > 85°F or < 62°F | Critical | Telegram + SMS (Twilio) |
| RH > 70% in flower | Critical | Telegram |
| RH spike > 65% at night | High | Telegram |
| CO2 < 400 ppm (seal broken) | Medium | Telegram |
| Soil moisture below threshold | Low | Telegram (morning) |
| Fan RPM drop > 20% | High | Telegram |
| Camera offline | High | Telegram |
| VPD out of range | Low | Daily report only |

---

## Remote Access & Security

- **Tailscale VPN** on Pi — access n8n, Grafana, camera feeds from anywhere securely
- **No port forwarding** — Tailscale is zero-trust, no firewall holes
- **Local network** camera feeds stay on LAN, viewed over Tailscale tunnel
- **n8n credentials** encrypted at rest in n8n keystore
- **API keys** stored as n8n credentials (Claude API, Google Sheets, Telegram)

---

## n8n Credential Requirements

| Service | Auth Type | Notes |
|---------|-----------|-------|
| Claude API | API Key | claude-opus-4-8 for grow advisory |
| SensorPush | Email + Password → OAuth token | Via SensorPush API |
| Google Sheets | OAuth2 | For grow log spreadsheet |
| Google Drive | OAuth2 | For photo storage |
| Telegram Bot | Bot Token | Create via @BotFather |
| Twilio (SMS) | Account SID + Auth Token | For critical temp alerts |
| YouTube Data API v3 | OAuth2 | For Shorts upload |

---

## Grow Database Schema (Google Sheets)

### Sheet 1: Environmental Log (auto-populated)
| Column | Type | Source |
|--------|------|--------|
| Timestamp | DateTime | n8n |
| Room | String | SensorPush tag |
| Temp_F | Float | SensorPush |
| RH_Pct | Float | SensorPush |
| CO2_PPM | Integer | Aranet4 |
| VPD_kPa | Float | Calculated |
| Fan_Speed | Integer | Manual / CONTROLLER 69 |

### Sheet 2: Grow Journal (manual + AI)
| Column | Type | Source |
|--------|------|--------|
| Date | Date | Manual |
| Strain | String | Manual |
| Plant_ID | String | e.g., "P1-Jealousy" |
| Week_Veg | Integer | Manual |
| Week_Flower | Integer | Manual |
| Height_In | Float | Manual |
| Notes | Text | Manual |
| AI_Advisory | Text | Claude API |
| Photo_URL | URL | n8n auto |

### Sheet 3: Genetics Log
See `genetics-tracking-system.md`
