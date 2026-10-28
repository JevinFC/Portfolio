import { chromium } from "playwright";
import { mkdir, rm } from "node:fs/promises";

const baseUrl = process.argv[2] || "http://localhost:5173";
const outDir = process.argv[3] || "screenshots/ref";

const WIDTHS = [375, 768, 1440];
const PAGES = [
  { name: "accueil", path: "/?intro=skip" },
  { name: "realisations", path: "/realisations" },
  { name: "lola-gauchy", path: "/realisations/lola-gauchy" },
  { name: "qui-suis-je", path: "/qui-suis-je" },
  { name: "plombier", path: "/site-internet-plombier-tours" },
  { name: "paysagiste", path: "/site-internet-paysagiste-tours" },
  { name: "404", path: "/404.html" },
];

const settle = async (page) => {
  await page.waitForLoadState("load");

  await page.addStyleTag({
    content: `
      .projectRow:hover .projectFrame,
      .projectRow:focus-within .projectFrame,
      .projectRow:hover .projectVisual::before,
      .projectRow:focus-within .projectVisual::before {
        transform: rotate(var(--tilt)) !important;
      }
      .projectRow:hover .projectVisual::before,
      .projectRow:focus-within .projectVisual::before {
        transform: rotate(var(--tilt)) translate(-12px, 12px) !important;
      }
      .projectFrame .browserFrameBody img {
        transition: none !important;
        transform: none !important;
      }
      astro-dev-toolbar {
        display: none !important;
      }
    `,
  });

  await page.evaluate(() => {
    document.querySelectorAll("img[loading=lazy]").forEach((img) => {
      img.loading = "eager";
    });
  });

  await page.waitForFunction(
    () => Array.from(document.images).every((img) => img.complete),
    null,
    { timeout: 60000 }
  );
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images).map((img) => img.decode().catch(() => undefined))
    );
    await new Promise((resolve) => {
      const frames = (n) =>
        n === 0 ? resolve() : requestAnimationFrame(() => frames(n - 1));
      frames(10);
    });
  });
  await page.waitForTimeout(1200);
};

const run = async () => {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch();
  const written = [];

  for (const width of WIDTHS) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
      locale: "fr-FR",
    });
    await context.addInitScript(() => {
      localStorage.setItem("hachado-consent", JSON.stringify({ analytics: false, date: Date.now() }));
    });
    const page = await context.newPage();

    for (const target of PAGES) {
      await page.goto(`${baseUrl}${target.path}`, { waitUntil: "domcontentloaded" });
      await settle(page);

      const file = `${outDir}/${target.name}-${width}.png`;
      await page.screenshot({ path: file, fullPage: true, animations: "disabled" });
      written.push(file);
    }

    await context.close();
  }

  await browser.close();
  written.forEach((f) => console.log("  ecrit  " + f));
  console.log(`\n${written.length} captures dans ${outDir}`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
