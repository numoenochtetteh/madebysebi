import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { pricingCategories, getPricingSelection, filterPricingCategories, pricingHref, pricingContactHref } from "../lib/pricing-catalog";
import { getPricingEnquiry, pricingEnquiryMessage, enquiryServices, legacyContactServices } from "../lib/pricing-enquiry";
import { websitePackages } from "../lib/pricing";
import { serviceGroups } from "../lib/services";
import { POST } from "../app/api/contact/route";

const select = (query = "") => getPricingSelection(new URLSearchParams(query));

test("eight categories cover every existing service ID, with three distinct options each", () => {
  assert.equal(pricingCategories.length, 8);
  assert.deepEqual(new Set(pricingCategories.map(item => item.id)), new Set(serviceGroups.flatMap(group => group.services.map(service => service.category))));
  const ids: string[] = [];
  for (const category of pricingCategories) {
    assert.equal(category.packages.length, 3);
    assert.deepEqual(category.packages.map(option => option.tier), ["Starter", "Professional", "Premium"]);
    assert.ok(serviceGroups.find(group => group.id === category.pillar)?.services.some(service => service.category === category.id));
    for (const option of category.packages) { ids.push(option.id); assert.ok(option.features.length); assert.equal(option.comparison.length, 3); }
  }
  assert.equal(new Set(ids).size, 24);
});

test("only the three approved offers have prices and all published content stays exact", () => {
  const published = pricingCategories.flatMap(category => category.packages.filter(option => option.basis === "published"));
  assert.equal(published.length, 3);
  for (const approved of websitePackages) {
    const option = published.find(item => item.name === approved.name)!;
    assert.equal(option.price, approved.price);
    assert.equal(option.description, approved.description);
    assert.deepEqual(option.features, approved.features);
  }
  for (const category of pricingCategories) for (const option of category.packages) {
    if (option.basis === "illustrative") { assert.equal(option.price, undefined); assert.equal(option.featured, undefined); }
  }
  assert.deepEqual(pricingCategories.flatMap(category => category.packages.filter(option => option.featured).map(option => option.name)), ["Business Website"]);
  assert.ok(!pricingCategories[0].packages.some(option => option.name === "Online Store"));
  assert.equal(pricingCategories.find(category => category.id === "ecommerce")?.packages[1].price, "GH₵12,000");
});

test("direct URLs select all eight categories; unknown, empty and repeated values are graceful", () => {
  for (const category of pricingCategories) assert.equal(select(`category=${category.id}`).category?.id, category.id);
  assert.equal(select().category?.id, "business-websites");
  assert.equal(select("category=unknown").unknownCategory, true);
  assert.equal(select("category=unknown").category?.id, "business-websites");
  assert.equal(select("category=booking&category=ecommerce").category?.id, "booking");
  assert.equal(select("category=").unknownCategory, false);
});

test("pillar filters preserve the three business directions and fall back from conflicting categories", () => {
  assert.equal(select("pillar=online-presence").categories.length, 4);
  assert.equal(select("pillar=build-your-solution").categories.length, 3);
  assert.equal(select("pillar=grow-your-business").categories.length, 1);
  assert.equal(select("category=ecommerce&pillar=grow-your-business").category?.id, "maintenance-growth");
  assert.equal(select("pillar=unrecognized").categories.length, 8);
});

test("search matches services and proposed features, ignores case and spacing, and supports no results", () => {
  assert.ok(filterPricingCategories("  INVENTORY  ").some(category => category.id === "business-systems"));
  assert.ok(filterPricingCategories("ios android").some(category => category.id === "mobile-applications"));
  assert.ok(filterPricingCategories("deposit").some(category => category.id === "booking"));
  assert.equal(select("q=not-a-real-service").category, undefined);
  assert.equal(select("pillar=build-your-solution&q=booking").categories.length, 0);
  assert.equal(select("category=business-websites&q=inventory").category?.id, "ecommerce");
  assert.equal(select("q=" + "a".repeat(200)).query.length, 160);
});

test("category history URLs round-trip selection and filters without arbitrary external navigation", () => {
  const history = [pricingHref("booking"), pricingHref("ecommerce"), pricingHref("mobile-applications", "Android", "build-your-solution")];
  const read = (url: string) => getPricingSelection(new URL(url, "https://madebysebi.com").searchParams);
  assert.equal(read(history[2]).category?.id, "mobile-applications");
  assert.equal(read(history[1]).category?.id, "ecommerce");
  assert.equal(read(history[0]).category?.id, "booking");
  assert.equal(read(history[2]).query, "Android");
  assert.equal(read(history[2]).pillar, "build-your-solution");
});

test("every Get Started destination round-trips the service and the correct package", () => {
  for (const category of pricingCategories) for (const option of category.packages) {
    const url = new URL(pricingContactHref(category, option), "https://madebysebi.com");
    assert.equal(url.pathname, "/contact"); assert.equal(url.hash, "#contact-form");
    const context = getPricingEnquiry(url.searchParams);
    assert.equal(context.service, category.name); assert.equal(context.option?.id, option.id);
    assert.ok(enquiryServices.includes(context.service));
  }
});

test("contact ignores tampered, mismatched and unknown package context", () => {
  assert.equal(getPricingEnquiry(new URLSearchParams("category=booking&package=online-store")).option, undefined);
  assert.equal(getPricingEnquiry(new URLSearchParams("category=unknown&package=business-website&service=%3Cscript%3E")).service, "");
  assert.equal(getPricingEnquiry(new URLSearchParams("category=business-websites&service=Fake")).service, "Business Websites");
  for (const service of legacyContactServices) assert.equal(getPricingEnquiry(new URLSearchParams({ service })).service, service);
  assert.equal(getPricingEnquiry(new URLSearchParams({ service: "Custom Web Applications" })).service, "Custom Web Applications");
});

test("validated pricing context reaches the existing message without losing the user's brief", () => {
  const data = new FormData();
  data.set("message", "Please discuss a project with our team.");
  data.set("service", "Business Websites"); data.set("pricingCategory", "business-websites"); data.set("pricingPackage", "business-website");
  const message = pricingEnquiryMessage(data);
  assert.match(message, /Package: Professional — Business Website/);
  assert.match(message, /GH₵6,500/); assert.ok(message.endsWith("Please discuss a project with our team."));
  data.set("service", "Booking Websites");
  assert.equal(pricingEnquiryMessage(data), data.get("message"));
  data.set("pricingCategory", "booking"); data.set("pricingPackage", "booking-workflow");
  assert.match(pricingEnquiryMessage(data), /Custom quote — illustrative scope/);
  assert.ok(!pricingEnquiryMessage(data).includes("GH₵"));
});

test("no brochure control can point at an absent or unapproved PDF", () => {
  const brochures = pricingCategories.flatMap(category => [category.brochure, ...category.packages.map(option => option.brochure)]).filter(Boolean);
  for (const brochure of brochures) { assert.equal(brochure!.approved, true); assert.match(brochure!.href, /^\/brochures\/[a-z0-9-]+\.pdf$/); assert.ok(existsSync(`public${brochure!.href}`)); }
});

test("pricing selection reaches the unchanged Resend contract using a mock provider", async context => {
  const previousKey = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = "test-only-placeholder";
  let providerCalls = 0;
  context.mock.method(globalThis, "fetch", async (url: string, init: RequestInit) => {
    providerCalls++;
    assert.equal(url, "https://api.resend.com/emails");
    const body = JSON.parse(init.body as string);
    assert.match(body.text, /Service: Booking Websites/);
    assert.match(body.text, /Package: Professional — Booking Workflow/);
    assert.match(body.text, /Custom quote — illustrative scope/);
    assert.ok(body.html.includes("&lt;script&gt;"));
    assert.ok(!body.html.includes("<script>"));
    return Response.json({ id: "mock-only" });
  });
  const data = new FormData();
  data.set("service", "Booking Websites"); data.set("pricingCategory", "booking"); data.set("pricingPackage", "booking-workflow"); data.set("message", "Please discuss <script>requirements</script>.");
  try {
    const response = await POST(new Request("https://madebysebi.com/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: "Pricing Test", email: "pricing@example.com", service: data.get("service"), message: pricingEnquiryMessage(data), businessWebsite: "" }) }));
    assert.equal(response.status, 200); assert.equal(providerCalls, 1);
  } finally {
    if (previousKey) process.env.RESEND_API_KEY = previousKey;
    else delete process.env.RESEND_API_KEY;
  }
});
