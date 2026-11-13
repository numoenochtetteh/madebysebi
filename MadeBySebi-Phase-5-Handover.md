# MadeBySebi Phase 5 handover

13 November 2026 (UTC / Africa–Accra). **Production is unchanged. No real emails were sent. No launch authorization has been received.**

## Readiness and provenance

The rebuild is implemented and ready for owner launch review. Automated checks and preview verification are complete. **This is not unconditional production approval:** important email-delivery, physical-device/Safari and mobile LCP checks below must be completed or explicitly accepted before launch. No additional redesign phase is proposed.

| Item | Verified value |
| --- | --- |
| Feature branch | feat/business-repositioning-rebuild |
| Final application implementation | 05e88ae3bf82bd59f990110c43788d80520e6e1a |
| Tested implementation tree | 8cb2f7b7e55a18befc965b561af7e94ed83a21ae |
| Handover creation commit | Recorded in the follow-up provenance commit |
| Existing draft PR | https://github.com/numoenochtetteh/madebysebi/pull/2 |
| Tested final preview | https://madebysebi-2058wcikj-numoenochtettehkent-9218s-projects.vercel.app/ |
| Vercel deployment | dpl_BoR5aAwstHQuRTVK9nN9f9H1mv9k — READY, preview target; Git SHA matches the tested implementation |
| Unchanged production | 36ce97c3524fd683efa8c2072b920641b6db0b65; deployment dpl_GjugdLr23SM4ngSsLUfJugyXvedN |

This phase started from a clean checkout of the latest feature head, 08bbb0ceeb17e819355fdded99ba197d63b3ec49, containing the final Phase 4 implementation. The interrupted older local draft was not copied or published. Updates were fast-forwards with an expected-head lease. Main, production environment variables, domains and DNS were not changed.

This report's creation SHA is recorded in a following documentation-only provenance commit because a file cannot contain the hash of the commit that first creates that same content. Later handover/evidence commits do not change the tested application. Verify the PR head and application diff before a future release; preserve newer changes.

## Completed implementation changes

- Pinned Node to 24.x in package engines and added .nvmrc. Vercel previously selected Node 26 from the broad >=22 range; its Phase 5 build log explicitly confirmed the switch from 26.x to 24.x. Local development used Node 24.22.1 and pnpm 11.25.0; the auditor used Node 24.22.3.
- Fixed the one moderate development-only minimatch advisory with a scoped typescript-estree dependency override to 11.0.6. The final dependency audit reported zero known vulnerabilities. No production auditing/animation dependency was added.
- Added a 1,336-byte, currency-only Inter derivative so the cedi symbol no longer triggers an 85,272-byte Latin Extended font download. Inter and Geist Mono remain the design fonts. The cedi outline was compared at weights 100, 400, 600 and 900 and remained unchanged. Source, reproduction script and OFL license are retained.
- Fixed a measured case-study bottleneck: browsers were fetching full-size video posters inside closed disclosures. LazyVideo now exposes its poster only near the viewport while the document is visible, independently of permission for automatic playback. Reduced motion/data saving still show a poster when the user opens the walkthrough, and explicit playback still works.
- Generated three WebP derivatives without deleting originals: Total Logistics 534,388 → 129,610 bytes; Lucenex 416,455 → 36,130; Kent Architects 531,892 → 123,314. Existing poster mapping, project cards, hero previews and social metadata reuse them. The normal initial case-study requests no longer include the hidden raw posters.
- Corrected the homepage portfolio link's accessible name, the floating WhatsApp control's responsive accessible name/landmark, and the Contact social navigation landmark. Fixed WhatsApp hiding at the footer and retained its short-landscape positioning with a stable data attribute.
- Improved low-contrast legal-page labels through CSS classes only. A source comparison confirmed every legal word and date remains unchanged.
- Added text wrapping and scalable homepage/header clearance for enlarged text. Normal layouts retain the completed design.
- Restored Pricing's missing Open Graph image without changing its packages or interaction design.
- Fixed the Contact request limit to count UTF-8 bytes rather than JavaScript characters. A new test reproduced the old bypass before the fix. Bounded the Resend request to ten seconds and retained the direct-email fallback on failure.
- Added reproducible audit tooling, retained evidence and prepared the separate deployment/rollback process.

## Functionality preserved

All three homepage anchors; the three business pillars; eight Pricing categories and 24 options; GH₵3,000 Landing Page / GH₵6,500 Business Website / GH₵12,000 Online Store; the recommended Business Website treatment; illustrative Custom Quote options; search, comparisons, history and direct category URLs; all 24 Pricing-to-Contact contexts; six legacy service links; all nine Contact API payload fields, validation, honeypot, escaping, errors and fallback; Resend integration; all eight case-study routes and original media; portfolio, social and WhatsApp links; analytics and SEO infrastructure. No brochures, new fixed prices, delivery guarantees, client results or team claims were invented.

## Automated checks

Every command below completed with exit code 0 on the final application commit. They were repeated successfully during completion review in a new clean checkout; GitHub independently confirmed that this exact source is the current feature head and contains the final Phase 4 implementation. The exact command output and durations are retained in docs/phase5/local-checks.json.

| Command | Result |
| --- | --- |
| pnpm install --frozen-lockfile | Passed |
| pnpm lint | Passed |
| pnpm exec next typegen | Passed |
| pnpm typecheck | Passed |
| pnpm test | **33 passed, 0 failed** — all original 30 retained |
| pnpm build | Passed |
| pnpm check:build | Passed |
| pnpm audit --json | 0 known vulnerabilities |

New regressions cover multibyte payload limits, provider timeout/fallback, and withholding an offscreen video's poster/source from the HTML preload scanner. Build inspection checked 17 HTML outputs, 707 internal links, 88 image references, eight case studies, four rebuilt pages, three homepage anchors, no homepage background video/canvas, and the dynamic Pricing route, with no errors. Checks were not weakened. Build-output inspection was not appended to Vercel's adapter build process.

## Browser and accessibility verification

Authenticated, isolated Chrome for Testing 157.0.8103.78 completed **18/18 browser checks**, plus four successful supplementary checks, against the final implementation preview. The reproducible scripts and their SHA-256 values are included with the verification evidence.

- All 16 public routes returned 200 with one h1 and one main landmark. A nonexistent route returned a real 404. All eight case studies remain available.
- **128 layout checks**: 320×640, 360×800, 390×844, 768×1024, 820×1180, 1366×768, 1920×1080 and 740×390 across all routes; no document horizontal overflow or header/heading overlap.
- All three homepage service anchors worked. Mobile menu scrolling, focus containment within page controls, Escape/focus restoration, navigation and cleanup after viewport resizing passed. Native browser-chrome focus transitions were permitted.
- All eight direct category URLs rendered three options and comparisons. Category switching, search, no matches, unknown category fallback, history back/forward, all 24 Contact selections, six legacy links and clearing context after changing service passed.
- Native form validation and intercepted 503/200 responses passed, including the nine-field payload, package message, error announcement and direct-email fallback. No live Contact request reached Resend.
- Axe-core **4.14.0** found **zero violations** on all 16 routes using WCAG 2 A/AA, WCAG 2.1, WCAG 2.2 AA and best-practice tags. Lighthouse Accessibility and Best Practices were 100 in all 42 final audits. This is automated evidence, not a full screen-reader/WCAG certification.
- Verified 72 rendered main-image instances loaded. Closed walkthroughs had no video source requests; actual reduced-motion media emulation and main-world saveData/2g readbacks suppressed autoplay. Explicit keyboard playback selected the mobile video, and closing the disclosure paused/unloaded it. Failed emulations were not counted as success.
- Emulated touch selected a category and reached Contact; 200% CSS text scaling passed on the main pages. This does not substitute for physical touch or native browser zoom.
- All final Lighthouse console audits were clear; the supplementary normal browser captured no console/page errors. Rapid viewport changes produced recorded net::ERR_ABORTED image requests; final image checks succeeded and these were not treated as broken URLs.
- A 1.8-second unthrottled headless smooth-scroll sample completed 110 frames with median 16.7 ms and p95/max about 16.8 ms, no horizontal overflow. This is a short lab observation, not physical-device FPS.

Physical Android/iPhone hardware, Safari and assistive technology were unavailable. The separate interactive browser reached Vercel sign-in, so manual interactive review there was not claimed. Protection remained enabled; the complete automated browser suite used temporary, origin-scoped access from the owner's connector.

## Actual performance measurements

**42 final Lighthouse 13.6.0 audits** cover all 16 routes on mobile and desktop, with three mobile samples for Homepage, Pricing and the three affected case studies. Final Performance ranged **90–99 mobile / 99–100 desktop**. Accessibility and Best Practices were 100 throughout. Preview SEO was **69**, because the deliberate Vercel noindex header was retained.

Conditions: Vercel Sandbox iad1, 2 vCPUs / 4 GB RAM; fresh Chrome profile per run; auth-only bootstrap; browser HTTP cache cleared, auth cookie retained; no application/analytics request blocking during the audit. CDN state and host load were not controlled. Detailed settings, benchmark indices, timestamps, URLs and source commits are in the evidence.

| Profile | Viewport / DPR | Simulated network | CPU multiplier |
| --- | --- | --- | --- |
| Mobile | 412×823 / 1.75 | RTT 150 ms, throughput 1,638.4 Kbps; Lighthouse request-latency/download/upload parameters retained in JSON | 4× |
| Desktop | 1350×940 / 1 | RTT 40 ms, throughput 10,240 Kbps | 1× |

The Homepage/Pricing reference is the unchanged Phase 4 preview rerun in the final audit environment. Case-study “before” is the first Phase 5 candidate, 40130dc7cb457f119052ab30ba1b0c5b729cedcf, before the poster fix. Counts below are before / after. Three mobile samples use medians; desktop and before-case measurements are single samples, so case comparisons are indicative rather than a controlled real-device experiment.

| Page / profile | Samples | Performance before → after | LCP before → after | TBT before → after |
| --- | --- | --- | --- | --- |
| Homepage / mobile | 3 / 3 | 98 → 92 | 1.03 s → 3.14 s | 140 → 156 ms |
| Pricing / mobile | 3 / 3 | 89 → 96 | 3.43 s → 0.92 s | 224 → 231 ms |
| Homepage / desktop | 1 / 1 | 99 → 100 | 0.85 s → 0.53 s | 5 → 20 ms |
| Pricing / desktop | 1 / 1 | 100 → 100 | 0.30 s → 0.49 s | 29 → 27 ms |
| /work/total-logistics / mobile | 1 / 3 | 75 → 96 | 5.74 s → 2.33 s | 224 → 180 ms |
| /work/lucenex / mobile | 1 / 3 | 81 → 91 | 4.32 s → 3.12 s | 232 → 167 ms |
| /work/elegante / mobile | 1 / 3 | 87 → 92 | 3.52 s → 3.14 s | 237 → 158 ms |

Final median FCP: Homepage/mobile 0.96 s, Pricing/mobile 0.92 s. Mobile CLS was 0; maximum desktop CLS was approximately 0.00043.

**Do not claim a blanket speed improvement.** The Homepage reference median was 98 versus final 92; initial Phase 4 baseline median was 93. Timings varied substantially, including roughly 1 s versus 3 s text LCP. Some final mobile medians remain around 3.1 s and require real-device/field follow-up. The reproducible resource gains are the removed 85 KB cedi font request and hidden poster downloads. The three problematic case-study measurements improved and all final scores met the 90+ target.

No real-user INP or other field Web Vitals for this unreleased rebuild were available. TBT, browser simulation and the scroll sample are not field INP or proof that Core Web Vitals pass in production.

## SEO, links, monitoring and email

All route titles/descriptions, production canonicals, Open Graph images, one h1/main and parsed ProfessionalService JSON-LD were verified. Pricing's social image omission was fixed. Robots and the 16-entry sitemap returned 200 and included Pricing and all case studies. All nine referenced social image paths returned 200 in the preview artifact; production asset URLs must be checked after launch. Preview noindex was verified on all routes and retained. No indexing was requested.

Eight published external project/booking destinations returned HTTP 200. This preserves Lucenex's existing presentation without inventing a public live link.

Normal unblocked browser responses identified **@vercel/analytics/next 1.3.1** and **@vercel/speed-insights/next 2.0.0**, both loading HTTP 200. Speed Insights used Vercel's generated /0926bb32a08f29f0/script.js path. No visitor counts, dashboard collection or field statistics are claimed. Raw public image responses used revalidation caching; platform caching was reviewed and left intact.

Resend configuration names were present in **production scope only**. Secret values were not inspected or changed. Preview fallback behavior is therefore expected. Provider acceptance, sender validity, configured recipient and inbox arrival remain untested. Before one real test, obtain separate explicit sending authorization and confirm recipient/sender and the limited scope. Do not promote a preview assuming it has production mail variables; follow the fresh-production-build instructions in the release plan.

## Security review and remaining limitations

The initial dependency audit found one moderate development-only advisory, GHSA-g3hv-75wg-m249 (primary source: https://github.com/isaacs/minimatch/security/advisories/GHSA-g3hv-75wg-m249). The scoped fix passed lint, types, all tests and the build; the final audit returned zero known vulnerabilities. Tracked textual source was checked for private-key, Resend, GitHub, Stripe and AWS credential patterns with no findings. This was not a penetration test. Existing server-only secret handling, input escaping and spam protection remain intact.

| Severity | Outstanding item / required action |
| --- | --- |
| Critical | **None known from the completed checks.** This is not a guarantee of absence of defects. |
| Important | Real email acceptance and inbox delivery: separately authorize one scoped test and confirm recipient before sending. |
| Important | Physical Android/iPhone, Safari, screen reader and native browser zoom: owner/device review remains required or must be explicitly accepted as a release limitation. |
| Important | Variable simulated mobile LCP, including some ~3.1 s medians and a lower Homepage reference comparison: verify real-device behavior and monitor field data; do not declare Core Web Vitals passed. |
| Minor | Preview SEO 69 is expected noindex protection; confirm production indexability after authorized deployment. |
| Minor | Development-only minimatch override and deprecated ESLint 9 need routine upstream follow-up. |
| Minor | Sitemap lastmod remains build-time rather than content-derived. |

## Changed files

Implementation changes from the Phase 4 head, followed by the handover/evidence additions:

```text
.nvmrc
MadeBySebi-Phase-5-Handover.md
app/api/contact/route.ts
app/contact/page.tsx
app/globals.css
app/layout.tsx
app/pricing/page.tsx
app/privacy/page.tsx
app/terms/page.tsx
components/home/hero.tsx
components/home/home.module.css
components/landing/whatsapp-button.tsx
components/media/lazy-video.tsx
docs/PHASE-5-VERIFICATION.json
docs/PRODUCTION-RELEASE-PLAN.md
docs/font-sources/README.md
docs/font-sources/inter-latin-ext-4.001.woff2
docs/phase5/README.md
docs/phase5/baseline-audits.json.gz
docs/phase5/final-audits.json.gz
docs/phase5/local-checks.json
lib/video-posters.json
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
public/fonts/OFL.txt
public/fonts/madebysebi-currency.woff2
public/media/posters/kent-modern-villa.webp
public/media/posters/lucenex-home.webp
public/media/posters/total-logistics-ship.webp
scripts/audit-preview.mjs
scripts/optimize-project-posters.mjs
scripts/phase5-browser-qa.mjs
scripts/subset-currency.py
tests/contact.test.ts
tests/media.test.ts
```

## Exact continuation / launch instructions

1. Pull the latest feat/business-repositioning-rebuild head without resetting it. Read this file, docs/PHASE-5-VERIFICATION.json and docs/PRODUCTION-RELEASE-PLAN.md. The tested application is 05e88ae3bf82bd59f990110c43788d80520e6e1a; later report commits contain documentation/evidence only.
2. Review the exact preview above. Complete or explicitly accept the important limitations, including the separate permission/recipient check before sending any real email. No further wholesale homepage, Pricing or remaining-page redesign is needed.
3. Use Node 24 and pnpm 11.25.0. On a fresh checkout, run next typegen before standalone typechecking. Repeat relevant checks if application files changed after the tested implementation. Detailed reproduction, browser report gating and audit conditions are in docs/phase5/README.md.
4. **Stop for explicit production launch approval.** Keep draft PR #2 open and unmerged until approval. Completion of Phase 5 is not permission to merge, promote, modify secrets or deploy.
5. Only after authorization, follow docs/PRODUCTION-RELEASE-PLAN.md: verify existing production-scoped environment, retain the rollback baseline, merge through the normal PR workflow, observe a fresh production build from approved main, verify domain/commit/Node version, run smoke tests, perform only the separately authorized email test, monitor, then carry out Search Console follow-up. The owner can do the GitHub/Vercel dashboard deployment manually.
6. If smoke tests expose a critical regression, use the documented rollback process and a normal Git revert workflow. Do not reset branch history, alter DNS or delete historical media.

Evidence is committed as compact, credential-free per-run measurements, network/audit diagnostics, full browser results and command output. Full ephemeral Lighthouse traces were not retained. The audit VM was stopped and its temporary snapshot deleted after the evidence transfer was checksum-verified.

## Completion review

A new clean checkout of the exact implementation repeated all eight local checks successfully. The retained audit bundle was parsed and checked: 42 final-commit Lighthouse runs across 16 routes, 18/18 browser checks, four supplementary checks, and source/preview identities agree with this report. Evidence-bundle checksums are recorded in `docs/PHASE-5-VERIFICATION.json`. The exact E-commerce preview was independently fetched again: HTTP 200, the correct category and published store price, and the expected preview `noindex` header. The current GitHub main and Vercel production deployment still match the unchanged rollback baseline. Legal text differs only in styling; the tracked-source credential-pattern scan found no matches. The saved audit bundles contain no unredacted temporary share URLs or cookie/authorization fields.
