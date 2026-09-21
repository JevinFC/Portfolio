import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const file = process.argv[2] || "dist/index.html";

const run = async () => {
  const html = await readFile(file, "utf8");
  const pattern = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi;

  const hashes = [];
  for (const match of html.matchAll(pattern)) {
    const attrs = match[1];
    const body = match[2];
    if (/type\s*=\s*["']application\/ld\+json["']/i.test(attrs)) continue;

    const hash = createHash("sha256").update(body, "utf8").digest("base64");
    hashes.push(`sha256-${hash}`);
    console.log(`  script en ligne (${body.length} caracteres)`);
    console.log(`    'sha256-${hash}'`);
  }

  if (hashes.length === 0) {
    console.log("  aucun script en ligne a couvrir");
    return;
  }

  console.log(`\n  a coller dans public/_headers :`);
  console.log(
    `    script-src 'self' ${hashes.map((h) => `'${h}'`).join(" ")} https://static.cloudflareinsights.com;`
  );
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
