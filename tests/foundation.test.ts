import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { serviceGroups } from "../lib/services";
import { websitePackages } from "../lib/pricing";
import { caseStudyProjects } from "../lib/projects";
import posters from "../lib/video-posters.json";
import sitemap from "../app/sitemap";

test("repositioning retains all three ordered service pillars and stable section anchors", () => {
  assert.deepEqual(serviceGroups.map((group) => [group.id, group.title]), [
    ["online-presence", "Establish Your Online Presence"],
    ["build-your-solution", "Build Your Solution"],
    ["grow-your-business", "Grow Your Business"],
  ]);
  for (const group of serviceGroups) assert.ok(group.services.length >= 3);
});

test("published package prices are preserved during the foundation changes", () => {
  assert.deepEqual(websitePackages.map(({ name, price }) => [name, price]), [
    ["Landing Page", "GH₵3,000"], ["Business Website", "GH₵6,500"], ["Online Store", "GH₵12,000"],
  ]);
});

test("sitemap covers pricing, legal pages and every retained case study", () => {
  const paths = sitemap().map((entry) => new URL(entry.url).pathname);
  for (const path of ["/pricing", "/contact", "/privacy", "/terms", ...caseStudyProjects.map((p) => `/work/${p.slug}`)])
    assert.ok(paths.includes(path), `Missing ${path}`);
  assert.equal(new Set(paths).size, paths.length);
  assert.equal(caseStudyProjects.length, 8);
});

test("recovered video posters exist and are smaller than the original delivery assets", () => {
  for (const [original, optimized] of Object.entries(posters)) {
    assert.ok(existsSync(`public${original}`));
    assert.ok(existsSync(`public${optimized}`));
    assert.ok(statSync(`public${optimized}`).size < statSync(`public${original}`).size, original);
  }
});

test("original project images and videos remain available", () => {
  for (const project of caseStudyProjects) {
    for (const asset of [project.image, project.video, ...project.gallery].filter(Boolean))
      assert.ok(existsSync(`public${asset}`), `Missing ${asset}`);
  }
});
