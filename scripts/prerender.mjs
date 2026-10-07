import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const HTML_FILE = "dist/index.html";
const SSR_DIR = "dist-ssr";
const EMPTY_ROOT = '<div id="root"></div>';

const run = async () => {
  const { render } = await import(pathToFileURL(`${SSR_DIR}/entry-server.js`).href);
  const html = await readFile(HTML_FILE, "utf8");

  if (!html.includes(EMPTY_ROOT)) {
    throw new Error(`${EMPTY_ROOT} introuvable dans ${HTML_FILE}`);
  }

  const app = render();
  await writeFile(HTML_FILE, html.replace(EMPTY_ROOT, () => `<div id="root">${app}</div>`));
  await rm(SSR_DIR, { recursive: true, force: true });

  console.log(`  ${HTML_FILE} pre-rendu (${(app.length / 1024).toFixed(0)} Ko de HTML)`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
