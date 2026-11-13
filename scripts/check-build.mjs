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
const htmlCache = new Map();
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
  htmlCache.set(file, html);
  const pagePath = path.relative(root, file).replaceAll(path.sep, "/").replace(/\.html$/, "");
  const pageUrl = "https://madebysebi.com" + (pagePath === "index" ? "/" : "/" + pagePath);
  const headings = [...html.matchAll(/<h1(?:\s|>)/g)];
  if (headings.length !== 1)
    errors.push(`${file}: ${headings.length} h1 elements`);
  for (const match of html.matchAll(
    /<(a|img|script)\b[^>]*\s(?:href|src)="([^"]+)"/g,
  )) {
    const tag = match[1];
    const url = new URL(
      match[2].replaceAll("&amp;", "&"),
      pageUrl,
    );
    if (url.origin !== "https://madebysebi.com") continue;
    if (tag === "a") {
      links++;
      const route = url.pathname;
      if (route.startsWith("/_next/")) continue;
      if (/\.(?:png|jpe?g|webp|avif|svg|pdf|mp4)$/i.test(route)) {
        if (!(await exists(path.join("public", decodeURIComponent(route))))) errors.push(`Missing linked asset ${route}`);
        continue;
      }
      const target = path.join(
        root,
        route === "/" ? "index.html" : route.replace(/^\//, "") + ".html",
      );
      const dynamicOutput = builtPageRoutes.get(route);
      if (url.hash && await exists(target)) {
        const destination = htmlCache.get(target) ?? await readFile(target, "utf8");
        const fragment = decodeURIComponent(url.hash.slice(1));
        if (!destination.includes(`id="${fragment}"`)) errors.push(`Missing fragment ${url.pathname}${url.hash} from ${path.relative(root, file)}`);
      }
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
// Vercel's Next adapter can relocate prerendered metadata after next build.
const sitemapCandidates = [
  path.join(root, "sitemap.xml.body"),
  path.join(root, "sitemap.xml", "route.body"),
  path.join(".vercel/output/static", "sitemap.xml"),
];
let sitemap = "";
for (const candidate of sitemapCandidates) {
  if (await exists(candidate)) { sitemap = await readFile(candidate, "utf8"); break; }
}
if (!sitemap) errors.push(`Generated sitemap unavailable; app output entries: ${(await readdir(root)).join(", ")}`);
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

const services = await readFile(path.join(root, "services.html"), "utf8");
const work = await readFile(path.join(root, "work.html"), "utf8");
const contact = await readFile(path.join(root, "contact.html"), "utf8");
const legacyAnchors = ["web-design-development", "ux-ui-product-design", "branding-visual-design", "seo-geo-visibility", "digital-marketing-growth", "consultation-audits"];
const categories = ["business-websites", "ecommerce", "booking", "business-launch", "web-applications", "business-systems", "mobile-applications", "maintenance-growth"];
const slugs = ["pengtresses", "power-electrode-ltd", "total-logistics", "numo-sebi", "kent-architects", "lucenex", "elegante", "tourbuddy"];
for (const id of [...pillarIds, ...legacyAnchors]) {
  if ((services.match(new RegExp(`id="${id}"`, "g")) ?? []).length !== 1) errors.push(`Services needs one unique ${id} destination`);
}
for (const category of categories) if (!services.includes(`href="/pricing?category=${category}"`)) errors.push(`Services missing category link ${category}`);
for (const slug of slugs) {
  if (!work.includes(`data-project="${slug}"`)) errors.push(`Work missing case study ${slug}`);
  const page = await readFile(path.join(root, "work", `${slug}.html`), "utf8");
  if (!page.includes('aria-label="Case study navigation"')) errors.push(`Case study navigation missing: ${slug}`);
  if (!/<img[^>]*fetchPriority="high"/i.test(page)) errors.push(`Prioritized still image missing: ${slug}`);
  if (/<source[^>]*mp4/i.test(page) || /<video[^>]*\ssrc=/i.test(page)) errors.push(`Case study loads initial video sources: ${slug}`);
}
for (const route of ["services", "about", "work", "contact"]) {
  const page = await readFile(path.join(root, `${route}.html`), "utf8");
  if (/data-reveal|<canvas|hero-orb|marquee/i.test(page)) errors.push(`Heavy legacy effect returned to ${route}`);
  for (const id of pillarIds) if (!page.includes(`href="/services#${id}"`)) errors.push(`Footer pillar link missing from ${route}: ${id}`);
}
for (const name of ["name", "email", "company", "website", "service", "budget", "timeline", "message", "businessWebsite"]) {
  const field = [...contact.matchAll(/<(?:input|select|textarea)\b[^>]*>/g)].find(match => match[0].includes(`name="${name}"`));
  if (!field) errors.push(`Contact field missing: ${name}`);
  if (["name", "email", "service", "message"].includes(name) && !field?.[0].includes("required")) errors.push(`Contact required validation missing: ${name}`);
}
if (!contact.includes('href="mailto:hello@madebysebi.com"')) errors.push("Contact email fallback missing");

const result = {
  caseStudiesChecked: slugs.length,
  rebuiltPagesChecked: 4,
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
