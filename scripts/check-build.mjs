import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve(".next/server/app");
const htmlFiles = [];
async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) await walk(full);
    else if (item.name.endsWith(".html")) htmlFiles.push(full);
  }
}
await walk(root);
const errors = [];
let links = 0;
let images = 0;
async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const headings = [...html.matchAll(/<h1(?:\s|>)/g)];
  if (headings.length !== 1)
    errors.push(`${file}: ${headings.length} h1 elements`);
  for (const match of html.matchAll(
    /<(a|img|script)\b[^>]*\s(?:href|src)="([^"]+)"/g,
  )) {
    const tag = match[1];
    const url = new URL(
      match[2].replaceAll("&amp;", "&"),
      "https://madebysebi.com",
    );
    if (url.origin !== "https://madebysebi.com") continue;
    if (tag === "a") {
      links++;
      const route = url.pathname;
      if (route.startsWith("/_next/") || route.startsWith("/media/")) continue;
      const target = path.join(
        root,
        route === "/" ? "index.html" : route.replace(/^\//, "") + ".html",
      );
      if (!(await exists(target)))
        errors.push(
          `Missing internal route ${url.pathname} from ${path.relative(root, file)}`,
        );
    } else {
      let asset = url.pathname;
      if (asset === "/_next/image") asset = url.searchParams.get("url");
      if (!asset || !asset.startsWith("/")) continue;
      const target = asset.startsWith("/_next/")
        ? path.join(".next", decodeURIComponent(asset.slice("/_next/".length)))
        : path.join("public", asset);
      if (!(await exists(target))) errors.push(`Missing ${tag} asset ${asset}`);
      if (tag === "img") images++;
    }
  }
}
const sitemap = await readFile(path.join(root, "sitemap.xml.body"), "utf8");
if (!sitemap.includes("https://madebysebi.com/pricing"))
  errors.push("Pricing missing from sitemap");
const result = {
  htmlPages: htmlFiles.length,
  internalLinksChecked: links,
  imageReferencesChecked: images,
  errors,
};
console.log(JSON.stringify(result));
if (errors.length) process.exit(1);
