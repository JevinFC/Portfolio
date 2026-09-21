import { chromium } from "playwright";
import { mkdir, rm } from "node:fs/promises";

const baseUrl = process.argv[2] || "http://localhost:4173";
const outDir = process.argv[3] || "screenshots/ref";

const WIDTHS = [375, 768, 1440];
const LANGUAGES = ["fr", "en"];

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

const switchToEnglish = async (page) => {
  const button = page.locator(".languageButton");
  if ((await button.count()) === 0) return false;
  if ((await button.innerText()).trim().toUpperCase() === "EN") return false;
  await button.click();
  await page.locator(".languageButton", { hasText: "EN" }).waitFor({ timeout: 5000 });
  return true;
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
    const page = await context.newPage();

    for (const language of LANGUAGES) {
      await page.goto(`${baseUrl}/?intro=skip`, { waitUntil: "domcontentloaded" });
      await settle(page);

      if (language === "en") {
        const switched = await switchToEnglish(page);
        if (!switched) throw new Error("bascule en anglais impossible");
        await settle(page);
      }

      const file = `${outDir}/accueil-${language}-${width}.png`;
      await page.screenshot({ path: file, fullPage: true, animations: "disabled" });
      written.push(file);
    }

    await page.goto(`${baseUrl}/404.html`, { waitUntil: "domcontentloaded" });
    await settle(page);
    const file404 = `${outDir}/404-${width}.png`;
    await page.screenshot({ path: file404, fullPage: true, animations: "disabled" });
    written.push(file404);

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
