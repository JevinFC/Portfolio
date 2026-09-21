import { chromium } from "playwright";
import sharp from "sharp";
import { stat } from "node:fs/promises";

const baseUrl = process.argv[2] || "http://localhost:4173";

const BLADE = "M88 50 L58 36 C40 28 24 44 24 62 C24 80 40 96 58 88 L88 74 Z";
const EDGE =
  "M58 36 C40 28 24 44 24 62 C24 80 40 96 58 88 C45 83 35 74 35 62 C35 50 45 41 58 36 Z";

// Variante onHot : manche et rivet en rose pale, lames en encre, tranchant en creme.
// Le manche du favicon est en #C9285B, invisible sur ce fond framboise.
const AXE = `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="93" y="28" width="14" height="162" rx="7" fill="#FFB3C9"/>
    <rect x="90" y="150" width="20" height="6" rx="3" fill="#23171D"/>
    <rect x="90" y="162" width="20" height="6" rx="3" fill="#23171D"/>
    <rect x="90" y="174" width="20" height="6" rx="3" fill="#23171D"/>
    <g>
      <path d="${BLADE}" fill="#23171D"/>
      <path d="${EDGE}" fill="#FFF8F1"/>
    </g>
    <g transform="translate(200 0) scale(-1 1)">
      <path d="${BLADE}" fill="#23171D"/>
      <path d="${EDGE}" fill="#FFF8F1"/>
    </g>
    <rect x="83" y="45" width="34" height="34" rx="5" fill="#23171D"/>
    <circle cx="100" cy="62" r="5.5" fill="#FFB3C9"/>
  </svg>
`;

const TEMPLATE = (axe) => `
  <div id="og">
    <div class="og-text">
      <p class="og-title">Des sites taillés sur mesure pour les commerçants de Tours.</p>
      <p class="og-byline">Kévin Machado · Développeur web à Tours</p>
    </div>
    <div class="og-axe">${axe}</div>
  </div>
`;

const STYLE = `
  html, body { margin: 0; padding: 0; background: #C9285B; }
  #og {
    width: 1200px;
    height: 630px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 48px;
    padding: 72px 80px;
    background: #C9285B;
    overflow: hidden;
  }
  .og-text { flex: 1 1 auto; min-width: 0; }
  .og-title {
    margin: 0;
    font-family: "Bricolage Grotesque", Arial, sans-serif;
    font-weight: 800;
    font-stretch: 88%;
    font-size: 78px;
    line-height: 0.98;
    letter-spacing: -0.03em;
    color: #FFF8F1;
  }
  .og-byline {
    margin: 48px 0 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 26px;
    font-weight: 600;
    color: #FFB3C9;
  }
  .og-axe { flex: 0 0 340px; display: flex; align-items: center; justify-content: center; }
  .og-axe svg { width: 340px; height: 340px; transform: rotate(14deg); }
`;

const run = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  await page.goto(`${baseUrl}/?intro=skip`, { waitUntil: "load" });
  await page.evaluate(
    ({ html, css }) => {
      document.body.innerHTML = html;
      const style = document.createElement("style");
      style.textContent = css;
      document.head.appendChild(style);
    },
    { html: TEMPLATE(AXE), css: STYLE }
  );
  await page.evaluate(() => document.fonts.ready.then(() => undefined));
  await page.waitForTimeout(500);

  const raw = await page.locator("#og").screenshot({ type: "png" });
  await browser.close();

  await sharp(raw)
    .resize(1200, 630, { fit: "fill" })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile("public/og-image.png");

  await sharp("public/favicon.svg")
    .resize(180, 180, { fit: "fill" })
    .png({ compressionLevel: 9 })
    .toFile("public/apple-touch-icon.png");

  for (const file of ["public/og-image.png", "public/apple-touch-icon.png"]) {
    const meta = await sharp(file).metadata();
    const size = (await stat(file)).size;
    console.log(
      `  ${file.split("/").pop().padEnd(22)} ${meta.width}x${meta.height}  ${(size / 1024).toFixed(1)} Ko`
    );
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
