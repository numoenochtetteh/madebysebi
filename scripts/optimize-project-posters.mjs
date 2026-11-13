import fs from "node:fs/promises";
import sharp from "sharp";

// Derived previews only: retain every original file and full-image destination.
const entries = [
  ["/case-studies/total-logistics/05-ship-hero.jpg", "/media/posters/total-logistics-ship.webp"],
  ["/case-studies/lucenex/01-home.png", "/media/posters/lucenex-home.webp"],
  ["/case-studies/kent-architects/02-modern-villa.jpg", "/media/posters/kent-modern-villa.webp"],
];
const mapping = JSON.parse(await fs.readFile("lib/video-posters.json", "utf8"));
await fs.mkdir("public/media/posters", { recursive: true });
for (const [source, destination] of entries) {
  await sharp(`public${source}`)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(`public${destination}`);
  mapping[source] = destination;
}
await fs.writeFile("lib/video-posters.json", `${JSON.stringify(mapping, null, 2)}\n`);
