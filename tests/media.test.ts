import test from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LazyVideo } from "../components/media/lazy-video";

test("an offscreen video does not make the HTML preload scanner request its poster or source", () => {
  const html = renderToStaticMarkup(createElement(LazyVideo, {
    src: "/expertise/111.mp4",
    poster: "/case-studies/total-logistics/05-ship-hero.jpg",
    ariaLabel: "Project walkthrough",
  }));
  assert.doesNotMatch(html, /\b(?:poster|src)=|<source\b/);
  assert.match(html, /preload="none"/);
  assert.match(html, /aria-label="Project walkthrough"/);
  assert.match(html, /controls/);
});
