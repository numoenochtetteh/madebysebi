import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve(".next/server/app");
const pageManifest = JSON.parse(await readFile(".next/server/app-paths-manifest.json", "utf8"));
const builtPageRoutes = new Map(Object.entries(pageManifest)
  .filter(([route]) => route.endsWith("/page"))
  .map(([route, output]) => [route.slice(0, -5) || "/", output]));
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
      const dynamicOutput = builtPageRoutes.get(route);
      if (!(await exists(target)) && !(dynamicOutput && await exists(path.join(".next/server", dynamicOutput))))
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

// Check the delivered homepage contract, including server-rendered content and
// real fragment destinations. These guards protect the three customer journeys.
const home = await readFile(path.join(root, "index.html"), "utf8");
const pillarIds = ["online-presence", "build-your-solution", "grow-your-business"];
const sectionIds = [...home.matchAll(/<section\b[^>]*\bid="([^"]+)"/g)].map(match => match[1]);
if (JSON.stringify(sectionIds.slice(0, 3)) !== JSON.stringify(pillarIds))
  errors.push("Homepage must put the three service sections directly after the hero, in business-document order");
for (const id of pillarIds) {
  if ((home.match(new RegExp(`id="${id}"`, "g")) ?? []).length !== 1)
    errors.push(`Homepage needs one unique ${id} destination`);
  if (!home.includes(`href="#${id}"`)) errors.push(`Missing homepage service link #${id}`);
}
const homeMediaCount = [...home.matchAll(/<(?:video|canvas)\b/g)].length;
if (homeMediaCount)
  errors.push("Homepage must remain free of background video/canvas loading");
if (home.includes("numo-company-bar") || home.includes("noise-overlay"))
  errors.push("Legacy floating hero selector or noise overlay returned");
for (const slug of ["pengtresses", "power-electrode-ltd", "numo-sebi"])
  if (!home.includes(`href="/work/${slug}"`)) errors.push(`Homepage lost real project link ${slug}`);
if (!home.includes('href="/contact"') || !home.includes('href="/pricing"'))
  errors.push("Homepage contact or current pricing CTA is missing");
const result = {
  htmlPages: htmlFiles.length,
  internalLinksChecked: links,
  imageReferencesChecked: images,
  homepageServiceAnchors: pillarIds.length,
  homepageBackgroundMedia: homeMediaCount,
  pricingServerRoute: builtPageRoutes.has("/pricing"),
  errors,
};
if (!result.pricingServerRoute) errors.push("Pricing server route was not built");
console.log(JSON.stringify(result));
if (errors.length) process.exit(1);
