# MadeBySebi — Phase 2 Handover

Phase 2 of five: homepage rebuild. Verified 11 November 2026, Africa/Accra. Production remains unchanged; PR #2 remains a draft.

## Source and deployment

- Repository: https://github.com/numoenochtetteh/madebysebi
- Branch: `feat/business-repositioning-rebuild`
- Phase 1 starting head: `3c97eb80644019a9fd437e0d4a3cd5c01bc74465`, confirmed to contain implementation `b565e2e188848a2c32104fdf87ed8d28dfffc1e1`.
- Phase 2 implementation commit: `b0cd1b99adc30b8f6be99a3d156f6b5a31a84bd8`.
- Implementation Git tree: `eea993cc420af85cab7c25ad20d742697fe3b61b`, verified identical to the locally tested staged tree.
- Existing draft PR: https://github.com/numoenochtetteh/madebysebi/pull/2
- Verified preview: READY — https://madebysebi-6jgph6d24-numoenochtettehkent-9218s-projects.vercel.app — deployment `dpl_3FnS45pTo1VbbsrZ9nS5fBq1b3V6`, matching implementation `b0cd1b99adc30b8f6be99a3d156f6b5a31a84bd8`. Browser-reviewed branch alias: https://madebysebi-git-feat-b-91f2d2-numoenochtettehkent-9218s-projects.vercel.app/ . Vercel Authentication remains enabled; sign in with the owning account if prompted.
- Production: `main` at `36ce97c3524fd683efa8c2072b920641b6db0b65`, deployment `dpl_GjugdLr23SM4ngSsLUfJugyXvedN`.

This report is added in a follow-up documentation commit. The implementation hash above identifies the executable code tested in the preview. Continue from the latest feature-branch head, including the report; do not reset to the implementation hash or discard later work.

## Documents and scope

Read the complete Phase 1 handover and `docs/REBUILD-FOUNDATION.md` before implementation. Re-read the complete business repositioning document at https://docs.google.com/document/d/1TK_o0lz9t_6c9D0v3uPdmIBlQtG_hk8bQ8LHEKdlwKg/edit . Its revision remained `AHj4eMSe8vTjKPxL8K3la43YPeOY4MYRY9Jt_hTo81NNznYcVhlHg6FPcsQHvySbZAFCrvn4cCTJerItfAzeY6TvxQDApmwdy4ckMuSM_Qc`.

Only homepage components/content/styles, homepage metadata, a small reduced-motion compatibility change in the shared navigation, and build verification were changed. Phase 1 shared components, tokens, service data, optimized posters, navigation accessibility, portfolio routes/data, contact implementation, analytics and production integrations are retained. No unrelated pages were redesigned. Pricing source is unchanged from Phase 1.

## Completed homepage changes

1. Replaced the old generic hero with “Get online. Build smarter. Keep growing.” and a direct explanation of MadeBySebi’s websites, mobile apps and custom software. Added contact/work CTAs and a genuine Forever Peng Hair project visual.
2. Placed all three full service-category names in the hero as semantic links: `#online-presence`, `#build-your-solution`, `#grow-your-business`. On phones, these links appear before the hero project image. Removed the floating black service selector and duplicated service-navigation treatment from the rendered homepage.
3. Added the three detailed service sections immediately after the hero, in the business-document order, driven by the existing `lib/services.ts`. Each section has a category heading, business-focused explanation, service cards, a relevant visual and CTA.
4. Added a real booking-project example to online presence, a static customers/team/tools concept to custom solutions, and a static support/improvement checklist to growth. Concept visuals describe services; they do not imply fictional client software, metrics or results.
5. Preserved the genuine Forever Peng Hair, Power Electrode and NUMO & SEBI case-study destinations, added a static portfolio grid and retained the main Work route for all eight case studies. Added a final project-enquiry CTA.
6. Reused the cream/charcoal/lime tokens and server-compatible shared primitives. New styles are scoped in a CSS module. Existing page/global styles and commercial package definitions were preserved.
7. Removed homepage imports of the old animated hero, canvas/process system, video expertise/work previews, rotating service showcase and client-work carousel. The old files remain available for history/other consumers, but are not used by the new homepage. No new client component, animation library, video background, canvas or reveal observer was added.
8. Used responsive Next/Image with reserved aspect ratios, one eager/high-priority hero image and lazy-loading lower images. Reused optimized Phase 1 poster files and existing original media; no media files were deleted.
9. Added native smooth anchor scrolling only when reduced motion is not requested. The content is always visible, with no entrance animations. Added reduced-motion transition suppression to the existing shared header. The short-landscape composition keeps the service links in the first screen and moves the chat control clear of them. Data-saving visitors have no homepage autoplay/video/canvas download path.
10. Updated only homepage title, description, canonical and social metadata to reflect the three business needs; retained social image, icons, sitewide organization schema, analytics and SEO routes.
11. Extended `pnpm check:build` to guard service-section order, unique fragment targets, real project/contact/pricing links, and the removal of old video/canvas/noise/floating-selector behavior.

## Changed files

Implementation changes eight files; this report is a ninth documentation file.

- `app/page.tsx`
- `components/home/hero.tsx`
- `components/home/home.module.css`
- `components/home/selected-work.tsx`
- `components/home/service-sections.tsx`
- `components/landing/navigation.tsx`
- `docs/Phase-2-Performance.json`
- `scripts/check-build.mjs`
- `MadeBySebi-Phase-2-Handover.md` (follow-up report)

## Test results

| Check | Result |
| --- | --- |
| `pnpm install --frozen-lockfile` | Passed; lockfile/dependencies unchanged in Phase 2 |
| `pnpm lint` | Passed, zero errors/warnings |
| `pnpm typecheck` | Passed |
| `pnpm test` | All 11 existing regression tests passed; no tests removed |
| `pnpm build` | Passed; 21/21 outputs generated |
| `pnpm check:build` | Passed: 18 HTML pages, 677 internal links, 85 image references, three homepage service anchors and zero homepage video/canvas elements; no errors |
| `git diff --check` | Passed |
| Scope check | Pricing, contact API, service/portfolio data and root layout unchanged from the Phase 1 head |
| Browser preview checks | Passed the scoped checks below; preference emulation and physical-device limits are stated explicitly. |
| Vercel | Preview READY for the exact implementation commit; production deployment remains the unchanged November 4 deployment. |

The unit tests retain contact validation, honeypot, escaping, provider error/success and missing-configuration checks using mocks. No real email was sent. Browser and build-output checks supplement those tests for homepage behavior.

Browser evidence on the feature preview, including final layout corrections:

| Scenario | Observed result |
| --- | --- |
| Desktop, 1363 × 936 CSS pixels | One h1, header bottom 80px, hero title top 190.6px, all three service choices ending at 760.4px; no horizontal overflow |
| Section order | Direct main children begin with hero, online-presence, build-your-solution, grow-your-business |
| Short tablet, 779 × 535 | Compact hero; all three service choices end at 453.3px; no horizontal overflow |
| Short landscape, 681 × 468 | All three service choices end at 465.7px; hit testing at each link center resolves to its own fragment, with chat moved to top 100px; no horizontal overflow |
| Narrow layouts, 454 × 312 and 340 × 234 | No horizontal overflow; service cards stack in one column; all hero links remain present. At 340px, the three links end at 605.7, 680.0 and 754.3 document CSS pixels, ahead of the project image |
| Service anchors | All three clicks update the matching hash and move keyboard focus to the correct section; each has 112px scroll margin. Settled growth section top 111.9px clears the scrolled header at 82px |
| Mobile menu | 779px menu: 535px visible height, 843px content height, scrolls 308px to its lower CTA; focus stays within modal; Escape closes and restores focus/body scrolling |
| Resize | Returning an open menu to 1363px closes it, sets aria-expanded false and restores body overflow |
| Contact CTA | Opens `/contact`; name, email, service and message remain required; no enquiry sent |
| Pricing CTA | Opens `/pricing`; current GH₵3,000 / GH₵6,500 / GH₵12,000 prices confirmed |
| Media | Hero image loaded with eager/high priority, lower homepage images use lazy loading; no homepage video or canvas elements |
| SEO | Browser title includes Websites, Mobile Apps & Custom Business Software and MadeBySebi; current homepage metadata retained in generated output |
| Console | No application-origin warning/error observed in checked flows; browser-extension messages are unrelated |

Responsive widths were exercised using Chrome zoom, not physical phones or touch hardware. Reduced-motion behavior was checked in source: homepage content has no automatic animation, smooth scrolling is enabled only under no-preference, foundation CSS sets reduced-motion scrolling to auto, and shared-header transitions have motion-reduce suppression. Runtime forcing of reduced-motion/data-saving preferences was not available through the exposed browser controls; that preference/device matrix remains unverified. No claim of passing that runtime matrix is made.

## Measured build changes

Numbers compare the Phase 1 homepage build with this rebuild using the same Next.js version. JavaScript totals count external scripts referenced by generated homepage HTML; gzip was calculated separately per file. They do not represent a cold-network transfer or Lighthouse/real-user score.

| Build artifact | Phase 1 | Phase 2 |
| --- | ---: | ---: |
| Referenced JS files | 12 | 11 |
| Uncompressed referenced JS | 705,730 bytes | 625,277 bytes |
| Referenced JS, gzip per file | 217,458 bytes | 194,238 bytes |
| Homepage HTML | 267,527 bytes | 94,155 bytes |
| Homepage background videos / canvas | Present in old composition | 0 / 0 |

The compressed-script total is 10.7% smaller and homepage HTML is 64.8% smaller. Shared navigation/footer/framework/analytics scripts remain. Asset delivery, caching, device conditions and network behavior can affect actual experience. See `docs/Phase-2-Performance.json` for machine-readable measurements.

Representative new text-color contrast ratios were calculated from the CSS colors: supporting gray on cream 5.78:1, green on cream 6.48:1, hero visual text 7.48:1, dark-section supporting text 9.11:1, and dark text on lime 8.65:1. These exceed 4.5:1 for normal text; this is not a full-site accessibility certification.

## Remaining limitations / later phases

- Phase 3 must rebuild Pricing. The homepage online-presence CTA currently goes to the existing `/pricing` page; custom-solution and growth CTAs go to `/contact`. Future category-query URLs already present in service data are intentionally not exposed as if filtering already worked.
- No new prices, discounts, delivery guarantees, brochures, testimonials or client outcome statistics were invented. Preserve approved package data until replacements are supplied.
- The existing Contact service selector and other page/footer/organization-schema wording still use the earlier service taxonomy. Their redesign is Phase 4; the contact contract and UI remain functional as before.
- Contact variables remain production-only from the Phase 1 environment inspection. Preview enquiries therefore cannot send real email and should retain the direct-email fallback. Real delivery/recipient arrival remain unverified; do not copy production secrets into public code or reports.
- No new Lighthouse, real-user INP or physical-device result is claimed. Browser viewport tests are described below; a wider device/network/accessibility matrix remains Phase 5.
- The previous full-site unpublished candidate remains reference material only. Do not replace this branch with that working tree or restart recovery.
- Production has not been merged, promoted, reconfigured or deployed.

## Exact Phase 3 instructions

Use this continuation request:

> Continue MadeBySebi Rebuild — Phase 3 of 5: Pricing. Read `MadeBySebi-Phase-2-Handover.md`, `MadeBySebi-Phase-1-Handover.md` and `docs/REBUILD-FOUNDATION.md` completely. Fetch `feat/business-repositioning-rebuild` and continue its latest head, preserving all Phase 1/2 changes and any newer work. Verify it contains Phase 2 implementation `b0cd1b99adc30b8f6be99a3d156f6b5a31a84bd8`. Continue draft PR #2. Do not restart recovery, overwrite the completed homepage, merge into main or deploy to production.
>
> Review the current business repositioning Google Doc and https://belswebdev.com/pricing as design/interaction inspiration. Rebuild only the Pricing page and small shared/data/enquiry compatibility pieces necessary for it. Use the established cream/charcoal/lime tokens and server-compatible primitives, keeping client logic limited to useful filtering/comparison interactions. Organize pricing around online presence, custom solutions and growth. Support clear service/category navigation, comparable package cards, a readable recommended Business Website option, scope/fee notes, useful quote CTAs, and an accessible mobile layout. Borrow structure from the reference without copying its wording, prices or delivery promises.
>
> Preserve the existing approved starting packages and their inclusions from `lib/pricing.ts`: Landing Page GH₵3,000, Business Website GH₵6,500, Online Store GH₵12,000. Custom apps, internal systems, mobile apps and growth/support work must use consultation/custom quotation unless the user provides approved fixed pricing. Do not invent new prices, discounts, project outcomes, turnaround guarantees or brochure files. Only display download controls for actual approved PDFs. Category query links must load the right category and handle unknown values gracefully. Quote/service/package context must reach the existing Contact flow meaningfully; make only the targeted compatibility change needed and preserve API validation, honeypot, escaping and fallback. Do not pretend unsupported query parameters prefill a form.
>
> Preserve all homepage sections/anchors, navigation fixes, portfolio/case-study URLs, WhatsApp, analytics, SEO and production integrations. Other page redesigns remain Phase 4. Verify desktop/tablet/narrow phone layouts, short-screen menu behavior, keyboard and focus, category selection/direct links/back navigation, package comparison and quote CTAs, contact-context handling without sending real mail, contrast, reduced motion, loading, console errors and horizontal overflow. Run `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, `pnpm check:build`. Keep existing tests, adding meaningful coverage for new pricing behavior. Commit to the same branch, update PR #2, verify a preview for the exact tested commit and leave production unchanged. Create and commit `MadeBySebi-Phase-3-Handover.md` with completed changes, changed files, actual test evidence, implementation hash, PR/preview URLs, limitations and exact Phase 4 instructions. Distinguish implementation and report-only commits, and never claim an attempted check or deployment succeeded without verification.
