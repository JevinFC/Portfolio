import { readdir, readFile, mkdir, writeFile, rm } from "node:fs/promises";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const refDir = process.argv[2] || "screenshots/ref";
const curDir = process.argv[3] || "screenshots/cur";
const diffDir = "screenshots/diff";
const threshold = Number(process.env.DIFF_THRESHOLD || 0);

const load = async (path) => PNG.sync.read(await readFile(path));

const run = async () => {
  await rm(diffDir, { recursive: true, force: true });
  await mkdir(diffDir, { recursive: true });

  const files = (await readdir(refDir)).filter((f) => f.endsWith(".png")).sort();
  let failures = 0;

  for (const file of files) {
    let ref;
    let cur;
    try {
      ref = await load(`${refDir}/${file}`);
      cur = await load(`${curDir}/${file}`);
    } catch {
      console.log(`  MANQUANT  ${file}`);
      failures++;
      continue;
    }

    if (ref.width !== cur.width || ref.height !== cur.height) {
      console.log(
        `  TAILLE    ${file.padEnd(24)} ref ${ref.width}x${ref.height} != cur ${cur.width}x${cur.height}`
      );
      failures++;
      continue;
    }

    const diff = new PNG({ width: ref.width, height: ref.height });
    const changed = pixelmatch(ref.data, cur.data, diff.data, ref.width, ref.height, {
      threshold: 0.02,
      includeAA: false,
    });
    const total = ref.width * ref.height;
    const pct = ((changed / total) * 100).toFixed(4);

    if (changed > threshold) {
      await writeFile(`${diffDir}/${file}`, PNG.sync.write(diff));
      console.log(`  DIFF      ${file.padEnd(24)} ${changed} px (${pct} %)  -> ${diffDir}/${file}`);
      failures++;
    } else {
      console.log(`  ok        ${file.padEnd(24)} ${changed} px`);
    }
  }

  console.log(
    `\n${files.length} captures comparees, ${failures} ecart(s), seuil ${threshold} px`
  );
  process.exit(failures === 0 ? 0 : 1);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
