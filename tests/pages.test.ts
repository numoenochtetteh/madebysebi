import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { company, legacyServiceAnchors, serviceExamples, teamMembers } from "../lib/company";
import { adjacentProjects, projectImageLabel, projectPoster } from "../lib/portfolio";
import { caseStudyProjects } from "../lib/projects";
import { serviceGroups } from "../lib/services";
import { budgetOptions, contactFallback, contactPayload, submitContactEnquiry, timelineOptions } from "../lib/contact-form";

test("company and team preserve the published names, roles, profiles and photos", () => {
  assert.equal(company.email, "hello@madebysebi.com");
  assert.equal(company.location, "Accra, Ghana");
  assert.deepEqual(teamMembers.map(member => [member.name, member.role, member.linkedin]), [
    ["Numo Nanortey Francis", "WordPress Engineer | Full Stack", "https://www.linkedin.com/in/numofrancis/"],
    ["Enoch Numo Tetteh", "Frontend Engineer", "https://www.linkedin.com/in/enoch-numo-tetteh-993432358/"],
    ["Bernard Numo", "Frontend Developer", "https://www.linkedin.com/in/bernard-numo-0b9b77448/"],
  ]);
  for (const member of teamMembers) assert.ok(existsSync(`public${member.image}`));
});

test("service explanations cover all eight categories and retain the six legacy destinations", () => {
  const categories = new Set(serviceGroups.flatMap(group => group.services.map(service => service.category)));
  assert.deepEqual(new Set(Object.keys(serviceExamples)), categories);
  for (const category of categories) assert.ok(serviceExamples[category].length >= 3);
  const anchors = Object.values(legacyServiceAnchors).flat();
  assert.equal(new Set(anchors).size, 6);
  assert.deepEqual(anchors.sort(), ["branding-visual-design", "consultation-audits", "digital-marketing-growth", "seo-geo-visibility", "ux-ui-product-design", "web-design-development"].sort());
});

test("eight original case studies have complete circular project navigation without self links", () => {
  assert.deepEqual(caseStudyProjects.map(project => project.slug), ["pengtresses", "power-electrode-ltd", "total-logistics", "numo-sebi", "kent-architects", "lucenex", "elegante", "tourbuddy"]);
  for (const project of caseStudyProjects) {
    const navigation = adjacentProjects(project.slug)!;
    assert.notEqual(navigation.previous.slug, project.slug);
    assert.notEqual(navigation.next.slug, project.slug);
    assert.equal(adjacentProjects(navigation.next.slug)?.previous.slug, project.slug);
    assert.equal(new Set(navigation.related.map(item => item.slug)).size, 2);
    assert.ok(navigation.related.every(item => item.slug !== project.slug));
  }
  assert.equal(adjacentProjects("missing-project"), undefined);
});

test("project images, original galleries, operations views, videos and poster files remain available", () => {
  for (const project of caseStudyProjects) {
    for (const asset of [project.image, projectPoster(project), ...project.gallery, project.operationsImage, project.video].filter(Boolean)) assert.ok(existsSync(`public${asset}`), asset);
    for (const asset of project.gallery) assert.ok(projectImageLabel(asset).length > 0);
  }
  assert.equal(projectImageLabel("/case-studies/test/02-product-grid.webp"), "product grid");
});

function enquiry() {
  const data = new FormData();
  for (const [key, value] of Object.entries({ name: "Form Test", email: "test@example.com", company: "Example", website: "example.com", service: "Business Websites", budget: budgetOptions[0], timeline: "Flexible", message: "Please discuss the requirements.", businessWebsite: "", pricingCategory: "business-websites", pricingPackage: "business-website" })) data.set(key, value);
  return data;
}

test("contact payload preserves nine API fields, pricing context, original choices and spam field", () => {
  const data = enquiry();
  const payload = contactPayload(data);
  assert.deepEqual(Object.keys(payload), ["name", "email", "company", "website", "service", "budget", "timeline", "message", "businessWebsite"]);
  assert.match(String(payload.message), /Professional — Business Website/);
  assert.match(String(payload.message), /GH₵6,500/);
  assert.ok(String(payload.message).endsWith("Please discuss the requirements."));
  data.set("service", "Web Design & Development");
  data.set("businessWebsite", "spam");
  assert.equal(contactPayload(data).message, data.get("message"));
  assert.equal(contactPayload(data).businessWebsite, "spam");
  assert.deepEqual([...budgetOptions], ["GH₵3,000 – GH₵5,000", "GH₵5,000 – GH₵10,000", "GH₵10,000 – GH₵20,000", "GH₵20,000+", "International project — quote in USD / GBP"]);
  assert.deepEqual([...timelineOptions], ["As soon as possible", "2–4 weeks", "1–2 months", "Flexible"]);
});

test("contact submission uses the existing same-origin POST contract once with a mock transport", async () => {
  let calls = 0;
  const send: typeof fetch = async (url, init) => {
    calls++;
    assert.equal(url, "/api/contact");
    assert.equal(init?.method, "POST");
    assert.deepEqual(init?.headers, { "Content-Type": "application/json" });
    assert.match(JSON.parse(String(init?.body)).message, /Service: Business Websites/);
    return Response.json({ ok: true });
  };
  assert.equal((await submitContactEnquiry(enquiry(), send)).ok, true);
  assert.equal(calls, 1);
});

test("contact API validation and provider errors remain visible and never report success", async () => {
  for (const status of [400, 413, 502, 503]) {
    const send: typeof fetch = async () => Response.json({ error: `Existing API message ${status}` }, { status });
    assert.deepEqual(await submitContactEnquiry(enquiry(), send), { ok: false, message: `Existing API message ${status}` });
  }
});

test("network failures, non-JSON errors and malformed success retain a direct email fallback", async () => {
  const transports: (typeof fetch)[] = [
    async () => { throw new Error("Network unavailable"); },
    async () => new Response("<html>Gateway error</html>", { status: 502 }),
    async () => Response.json({}),
    async () => Response.json({ ok: false }),
  ];
  for (const send of transports) assert.deepEqual(await submitContactEnquiry(enquiry(), send), { ok: false, message: contactFallback });
  assert.match(contactFallback, /hello@madebysebi.com/);
});
