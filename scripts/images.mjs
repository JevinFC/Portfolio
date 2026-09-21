import sharp from "sharp";
import { stat, rename, unlink } from "node:fs/promises";

const TARGETS = [
  { file: "src/assets/imgprojects/ninaCarducci.webp", width: 1704, quality: 85 },
  { file: "src/assets/imgprojects/kasa.webp", width: 1704, quality: 85 },
  { file: "src/assets/imgprojects/screenshotLola.webp", width: 1704, quality: 85 },
  {
    file: "public/photoProfil.png",
    out: "public/photoProfil.webp",
    width: 760,
    quality: 85,
    remove: true,
  },
];

const ko = (n) => (n / 1024).toFixed(0).padStart(6) + " Ko";

const run = async () => {
  let before = 0;
  let after = 0;

  for (const target of TARGETS) {
    const sizeBefore = (await stat(target.file)).size;
    const meta = await sharp(target.file).metadata();

    const width = Math.min(target.width, meta.width);
    const height = Math.round((meta.height * width) / meta.width);
    const out = target.out || target.file;
    const tmp = out + ".tmp";

    await sharp(target.file)
      .resize({ width, height, fit: "fill" })
      .webp({ quality: target.quality, effort: 6 })
      .toFile(tmp);

    const sizeAfter = (await stat(tmp)).size;
    await rename(tmp, out);
    if (target.remove && out !== target.file) await unlink(target.file);

    before += sizeBefore;
    after += sizeAfter;

    console.log(
      `  ${out.split("/").pop().padEnd(26)} ${meta.format.padEnd(4)} ${String(
        meta.width
      ).padStart(4)}x${String(meta.height).padEnd(5)} ${ko(sizeBefore)}` +
        `   ->   webp ${String(width).padStart(4)}x${String(height).padEnd(5)} ${ko(sizeAfter)}`
    );
  }

  console.log(
    `\n  TOTAL ${ko(before)}   ->   ${ko(after)}   (${(
      (1 - after / before) *
      100
    ).toFixed(1)} % de gain)`
  );
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
