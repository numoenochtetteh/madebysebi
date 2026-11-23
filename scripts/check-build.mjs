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

// Verify the delivered redesign, real project routes, source assets and service paths.
const home = await readFile(path.join(root, "index.html"), "utf8");
const pillarIds = ["online-presence", "build-your-solution", "grow-your-business"];
for (const id of pillarIds) {
  if ((home.match(new RegExp('id="' + id + '"', "g")) ?? []).length !== 1)
    errors.push("Homepage needs one unique " + id + " service destination");
}
const homeMediaCount = [...home.matchAll(/<(?:video|canvas)\b/g)].length;
if (homeMediaCount) errors.push("Homepage should not load video or canvas");
for (const [slug, image] of [
  ["femmora", "femmora.webp"],
  ["pengtresses", "forever-peng-hair.webp"],
  ["gas-safety-plumbing", "gas-safety-plumbing.webp"],
  ["lucenex", "lucenex-services.png"],
]) {
  if (!home.includes('data-project="' + slug + '"')) errors.push("Featured project missing: " + slug);
  if (!home.includes(image)) errors.push("Featured mockup missing: " + image);
  if (!home.includes('href="/work/' + slug + '"')) errors.push("Case study link missing: " + slug);
}
if (!home.includes("Design that makes") || !home.includes("people trust and buy"))
  errors.push("MadeBySebi hero headline missing");
if (!home.includes("MadeBySebi · Web Design Agency") || !home.includes("Helping companies stand out in crowded markets through thoughtful brand and product design"))
  errors.push("MadeBySebi hero description or agency label missing");
if (!home.includes('href="/contact?service=Other&amp;intent=call#contact-form"') || !home.includes('href="/work"'))
  errors.push("Homepage call and work actions missing");
if (!home.includes('aria-label="Selected MadeBySebi projects"') || !home.includes('ms-client-track'))
  errors.push("Homepage client marquee missing");
if (!home.includes("Before you decide") || !home.includes("Have a project") || home.includes("How it works"))
  errors.push("Homepage FAQ replacement missing");
if (!home.includes("ms-service-pill-track") || !home.includes("ms-service-cards"))
  errors.push("Homepage services presentation missing");
if (home.includes("ms-hero-location"))
  errors.push("Homepage location line remains");
if (home.includes("Based in Accra · Worldwide"))
  errors.push("Navigation location subtitle remains");
const header = home.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? "";
if (!header.includes('href="/work"') || !header.includes('href="/about"'))
  errors.push("Sticky header navigation missing");
const services = await readFile(path.join(root, "services.html"), "utf8");
const work = await readFile(path.join(root, "work.html"), "utf8");
const contact = await readFile(path.join(root, "contact.html"), "utf8");
const legacyAnchors = ["web-design-development", "ux-ui-product-design", "branding-visual-design", "seo-geo-visibility", "digital-marketing-growth", "consultation-audits"];
const slugs = ["pengtresses", "power-electrode-ltd", "total-logistics", "numo-sebi", "kent-architects", "lucenex", "elegante", "tourbuddy", "femmora", "gas-safety-plumbing"];
for (const id of [...pillarIds, ...legacyAnchors]) {
  if ((services.match(new RegExp(`id="${id}"`, "g")) ?? []).length !== 1) errors.push(`Services needs one unique ${id} destination`);
}
for (const image of ["web-design-custom.png", "ui-ux.jpg", "branding-custom.png", "seo-custom.png", "marketing.webp", "consultation.webp"]) {
  if (!services.includes(image)) errors.push(`Services gallery missing ${image}`);
}
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
