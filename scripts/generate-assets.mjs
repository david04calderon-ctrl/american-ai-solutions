/**
 * Generates OG image (1200×630) and PWA icons (192×192, 512×512)
 * using Playwright + pre-installed Chromium.
 * Run: node scripts/generate-assets.mjs
 */
import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const ogHtml = `<!DOCTYPE html><html><head>
<meta charset="UTF-8"/>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=DM+Serif+Display:ital@0;1&display=swap');
body{width:1200px;height:630px;background:#0D1117;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:'DM Sans',system-ui,sans-serif;overflow:hidden;}
.bar{width:6px;height:60px;background:#1A3A8F;border-radius:1px;margin-bottom:36px;}
.eyebrow{font-size:13px;font-weight:700;color:#00D4FF;letter-spacing:.14em;text-transform:uppercase;margin-bottom:20px;}
h1{font-family:'DM Serif Display',serif;font-size:64px;font-weight:400;color:white;line-height:1.05;letter-spacing:-.01em;margin-bottom:24px;}
h1 em{color:#00D4FF;font-style:italic;}
.sub{font-size:20px;color:rgba(255,255,255,.6);line-height:1.5;max-width:700px;margin-bottom:48px;}
.badges{display:flex;gap:16px;align-items:center;}
.badge{background:rgba(26,58,143,.5);border:1px solid rgba(26,58,143,.8);color:rgba(255,255,255,.85);font-size:13px;font-weight:600;padding:8px 18px;border-radius:2px;letter-spacing:.04em;}
.badge-cyan{background:rgba(0,212,255,.1);border-color:rgba(0,212,255,.3);color:#00D4FF;}
.corner{position:absolute;top:48px;right:60px;text-align:right;}
.corner-brand{font-size:15px;font-weight:700;color:white;}
.corner-city{font-size:12px;color:rgba(255,255,255,.4);margin-top:4px;letter-spacing:.08em;text-transform:uppercase;}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(26,58,143,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(26,58,143,.06) 1px,transparent 1px);background-size:40px 40px;pointer-events:none;}
.glow{position:absolute;bottom:-80px;right:-80px;width:400px;height:400px;background:radial-gradient(circle,rgba(0,212,255,.12) 0%,transparent 70%);border-radius:50%;}
</style></head><body>
<div class="grid"></div><div class="glow"></div>
<div class="corner"><div class="corner-brand">American AI Solutions LLC</div><div class="corner-city">Detroit, Michigan</div></div>
<div class="bar"></div>
<div class="eyebrow">Detroit-Based · AI Consulting</div>
<h1>Strategic AI Implementation<br><em>for Real Business Results.</em></h1>
<p class="sub">We help Michigan businesses automate workflows and deploy AI tools that actually move revenue — not proof-of-concepts that collect dust.</p>
<div class="badges">
  <div class="badge">AI Workflow Automation</div>
  <div class="badge">Custom AI Integration</div>
  <div class="badge badge-cyan">Free Strategy Call</div>
</div>
</body></html>`;

const iconHtml = (size) => `<!DOCTYPE html><html><head>
<meta charset="UTF-8"/>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{width:${size}px;height:${size}px;background:#1A3A8F;display:flex;align-items:center;justify-content:center;overflow:hidden;}
.wrap{display:flex;gap:${Math.round(size * 0.04)}px;align-items:flex-end;}
.b1{width:${Math.round(size*0.18)}px;height:${Math.round(size*0.62)}px;background:white;border-radius:${Math.round(size*0.02)}px;}
.b2{width:${Math.round(size*0.18)}px;height:${Math.round(size*0.82)}px;background:white;border-radius:${Math.round(size*0.02)}px;}
.b3{width:${Math.round(size*0.18)}px;height:${Math.round(size*0.52)}px;background:rgba(255,255,255,.6);border-radius:${Math.round(size*0.02)}px;}
</style></head>
<body><div class="wrap"><div class="b1"></div><div class="b2"></div><div class="b3"></div></div></body></html>`;

async function generate() {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });

  // OG Image
  console.log('Generating OG image...');
  const ogPage = await browser.newPage();
  await ogPage.setViewportSize({ width: 1200, height: 630 });
  await ogPage.setContent(ogHtml, { waitUntil: 'networkidle' });
  await ogPage.screenshot({ path: `${publicDir}/og-image.png`, type: 'png' });
  console.log('✓ public/og-image.png');

  // Icons
  for (const size of [192, 512]) {
    console.log(`Generating ${size}×${size} icon...`);
    const iconPage = await browser.newPage();
    await iconPage.setViewportSize({ width: size, height: size });
    await iconPage.setContent(iconHtml(size), { waitUntil: 'domcontentloaded' });
    await iconPage.screenshot({ path: `${publicDir}/icons/icon-${size}.png`, type: 'png' });
    console.log(`✓ public/icons/icon-${size}.png`);
  }

  await browser.close();
  console.log('\nAll assets generated.');
}

generate().catch(e => { console.error(e); process.exit(1); });
