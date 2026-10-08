import { chromium } from "playwright";
import sharp from "sharp";
import { stat, writeFile } from "node:fs/promises";

const baseUrl = process.argv[2] || "http://localhost:4173";

const MARK = "public/logo-hachado-h.webp";
const CREAM = "#F6EFE7";

const TEMPLATE = `
  <div id="og">
    <div class="og-text">
      <p class="og-title">Des sites taillés sur mesure pour les commerçants de Tours.</p>
      <p class="og-byline">Kévin Machado · Développeur web à Tours</p>
    </div>
    <div class="og-axe"><img src="/logo-hachado-h.webp" alt="" /></div>
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
  .og-axe img { display: block; width: auto; height: 360px; }
`;

const markAt = (height, format = "png") => {
  const resized = sharp(MARK).resize({ height, kernel: "lanczos3" });
  const encoded = format === "webp" ? resized.webp({ quality: 90, alphaQuality: 100 }) : resized.png();
  return encoded.toBuffer({ resolveWithObject: true });
};

const writeFavicon = async () => {
  const { data, info } = await markAt(160, "webp");
  const x = ((200 - info.width) / 2).toFixed(1);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <rect width="200" height="200" rx="34" fill="${CREAM}"/>
  <image href="data:image/webp;base64,${data.toString("base64")}" x="${x}" y="20" width="${info.width}" height="${info.height}"/>
</svg>
`;
  await writeFile("public/favicon.svg", svg);
};

const writeAppleTouchIcon = async () => {
  const { data, info } = await markAt(136);
  await sharp({ create: { width: 180, height: 180, channels: 4, background: CREAM } })
    .composite([{ input: data, left: Math.round((180 - info.width) / 2), top: 22 }])
    .png({ compressionLevel: 9 })
    .toFile("public/apple-touch-icon.png");
};

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
    { html: TEMPLATE, css: STYLE }
  );
  await page.evaluate(() => document.fonts.ready.then(() => undefined));
  await page.locator(".og-axe img").evaluate((img) => img.decode());
  await page.waitForTimeout(500);

  const raw = await page.locator("#og").screenshot({ type: "png" });
  await browser.close();

  await sharp(raw)
    .resize(1200, 630, { fit: "fill" })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile("public/og-image.png");

  await writeFavicon();
  await writeAppleTouchIcon();

  for (const file of ["public/og-image.png", "public/apple-touch-icon.png", "public/favicon.svg"]) {
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
