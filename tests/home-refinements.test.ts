import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { nextSlide, swipeDirection, SWIPE_THRESHOLD } from "../lib/home-interactions";
import { caseStudyProjects } from "../lib/projects";
import posters from "../lib/video-posters.json";

test("carousel navigation wraps cleanly in both directions", () => {
  assert.equal(nextSlide(2, 1, 3), 0);
  assert.equal(nextSlide(0, -1, 3), 2);
  assert.equal(nextSlide(1, 1, 3), 2);
});

test("swipes require an intentional horizontal gesture and leave vertical scrolling alone", () => {
  const start = { x: 140, y: 100 };
  assert.equal(swipeDirection(start, { x: 140 - SWIPE_THRESHOLD, y: 104 }), 1);
  assert.equal(swipeDirection(start, { x: 140 + SWIPE_THRESHOLD, y: 104 }), -1);
  assert.equal(swipeDirection(start, { x: 100, y: 180 }), 0);
  assert.equal(swipeDirection(start, { x: 100, y: 90 }), 0);
  assert.equal(swipeDirection(start, { x: 139, y: 100 }), 0);
});

test("featured slides use genuine cases and existing optimized media", () => {
  for (const slug of ["pengtresses", "power-electrode-ltd", "numo-sebi"]) {
    const project = caseStudyProjects.find(item => item.slug === slug);
    assert.ok(project, slug);
    const asset = (posters as Record<string, string>)[project.image] ?? project.image;
    assert.ok(existsSync(`public${asset}`), asset);
  }
});

test("Grow section still frame is available without loading the reference video", () => {
  const file = "public/media/growth-texture.webp";
  assert.ok(existsSync(file));
  assert.ok(statSync(file).size < 10_000);
});
