# MadeBySebi prelaunch homepage refinements

18 November 2026 (Africa/Accra). This update is on `feat/business-repositioning-rebuild` in existing [draft PR #2](https://github.com/numoenochtetteh/madebysebi/pull/2). **Production was not changed.** The tested application implementation is `c3e873cc7a517e7897ce19c13c67c6146afcda52` (tree `194d8d8c15b2086644fe6744e6b6fa86786664ba`), directly after the Phase 5 documentation checkpoint `0a92f48afb9a516152828169c58eb78035cb6cbc`.

## What changed

- Replaced the homepage headline with “Full Services / Agency For / Startups., Apps., Brands.” The final phrase rotates through three CSS keyframe phases with a fixed line box, responsive sizing and a reduced-motion static version. The accessible heading includes a nonanimated phrase for screen readers, while the supporting sentence continues to explain websites, apps and custom software to people and search engines.
- Reworked the three existing pillar anchor links with clearer numbering, descriptions, spacing, arrows, borders, hover and keyboard focus states. Their labels and destinations `#online-presence`, `#build-your-solution`, `#grow-your-business` remain intact.
- Replaced the single hero project with an accessible three-project carousel: Forever Peng Hair, Power Electrode Ltd and NUMO & SEBI. It uses existing case-study data and poster mappings, a single active optimized `next/image`, working case-study links, previous/next and dot controls, ArrowLeft/ArrowRight and horizontal touch swipe. It advances every 6.5 seconds and pauses on hover, focus, hidden page, offscreen position, reduced motion and `saveData`. The visual transition is short and restrained.
- Redesigned the cards across all three service sections with soft cream/charcoal/lime surfaces, relevant Lucide icons, numbers, rounded borders, stronger type and hover/focus feedback. Each existing service still links to its corresponding Pricing category. The section CTAs and supporting examples remain.
- Improved Grow Your Business with a quiet, legible textured background and refined support panel. The supplied 3.1-second, 324×166 video contains almost no visible motion; a still frame was encoded as the **278-byte `growth-texture.webp`** instead. This keeps the visual cue without a video download, autoplay, decoder cost or reduced-motion conflict. A light overlay protects text contrast.
- Enlarged and differentiated the Selected Work cards and image presentation, with a wider third card, project labels, clearer descriptions and case-study links. These are deliberately separate from the browser-style carousel.
- Removed only the secondary “View our work” header CTA. The Work navigation link, logo, other navigation and Start a project CTA are preserved on desktop and mobile.

The uploaded hero videos `20261117-1553-36.7416538.mp4` and `20261117-1610-38.2769271.mp4`, growth background `20261117-1618-56.5518585.mp4`, and supplied homepage/card/navigation screenshots informed the design. No unrelated reference copy or projects were added.

## Files changed

| Area | Paths |
| --- | --- |
| Hero and interaction | `components/home/hero.tsx`, `components/home/featured-carousel.tsx`, `lib/home-interactions.ts` |
| Homepage sections and styles | `components/home/service-sections.tsx`, `components/home/selected-work.tsx`, `components/home/home.module.css` |
| Navigation and image | `components/landing/navigation.tsx`, `public/media/growth-texture.webp` |
| Verification | `tests/home-refinements.test.ts`, `scripts/check-build.mjs` |

No dependencies, commercial prices, legal/business facts, Contact API configuration, environment variables, DNS, or production settings were changed.

## Automated verification

On the tested implementation, the full requested sequence completed successfully with Node 24 and frozen pnpm dependencies:

| Command | Result |
| --- | --- |
| `pnpm install --frozen-lockfile` | Pass |
| `pnpm lint` | Pass |
| `pnpm exec next typegen` | Pass |
| `pnpm typecheck` | Pass |
| `pnpm test` | **37 passed**, 0 failed; original 33 retained, four new interaction/source regressions |
| `pnpm build` | Pass |
| `pnpm check:build` | Pass: 17 built HTML pages, 688 links, 88 image references, three homepage anchors, no homepage video/canvas, 0 errors |

The new checks cover carousel index/swipe direction, headline/content and anchors, genuine case-study links, service-card links, reduced-motion and header implementation. Build inspection also verifies the static image fallback. `git diff --check` passed. Existing Pricing and Contact source/tests were unchanged and all original tests passed.

## Browser verification

The verified implementation [preview](https://madebysebi-ckexulzl7-numoenochtettehkent-9218s-projects.vercel.app/) is Vercel deployment `dpl_32dhQyDF4nrYABjkPhE7GKHQPXAB`, **READY**, with Git SHA `c3e873cc7a517e7897ce19c13c67c6146afcda52`. The interactive desktop review inspected the hero, service sections and Selected Work, exercised carousel Next and ArrowLeft, followed a service card to `/pricing?category=business-websites`, then followed the Business Website package to Contact with the GH₵6,500 preselection.

An isolated Chrome 158 browser checked the homepage at 320×640, 360×800, 390×844, 768×1024, 820×1180, 1366×768, 1920×1080 and 740×390. There was no document horizontal overflow or heading/header collision. The landscape layout intentionally hides the hero carousel to reserve useful screen space. Manual controls, keyboard movement, a CDP-emulated native mobile touch swipe, menu/Escape, pause on focus, automatic transition and static reduced-motion behavior passed. Main images loaded, no main video/canvas was present, the growth still rendered, and no application console/page errors or failing same-origin responses were recorded. A physical-device swipe remains unverified.

The previous Phase 5 verification covered all 16 routes, 128 route/viewport combinations, Pricing and Contact paths, and automated axe scans. This refinement changed homepage presentation and one header CTA; the retained 33 automated tests passed, and the affected Pricing-to-Contact flow was rechecked interactively. I attempted to repeat the full 16-route browser suite against the refinement preview. It navigated all 16 routes and ran their page scans, but the temporary audit machine stopped before the final assertions/report were written, so **no new 16-route or axe pass is claimed**. The focused homepage browser suite above completed and passed. No real email was sent.

## Comparable Lighthouse checks

Lighthouse 13 and Chrome for Testing 158 ran in the same iad1 Vercel Sandbox (2 vCPU, 4 GB), against the previous Phase 5 preview and the new implementation preview. Both profiles used the same audit settings. Mobile used 412×823, DPR 1.75, simulated 150 ms RTT / 1,638.4 Kbps and 4× CPU slowdown; desktop used 1350×940, DPR 1, 40 ms / 10,240 Kbps and 1× CPU. Three mobile samples per version were reduced to medians; desktop has one per version. Invalid runs that landed on Vercel sign-in were discarded, then the updated preview was rerun using fresh authenticated access.

| Homepage metric | Phase 5 preview | Refinement preview |
| --- | ---: | ---: |
| Mobile Performance, median of 3 | 96 | **96** |
| Mobile LCP, median | 2.563 s | **2.572 s** |
| Mobile TBT, median | 153 ms | **129 ms** |
| Mobile CLS | 0 | **0** |
| Desktop Performance, one sample | 99 | **99** |
| Desktop LCP, one sample | 0.929 s | **0.912 s** |
| Desktop CLS, one sample | 0 | **0.0004** |
| Accessibility / Best Practices | 100 / 100 | **100 / 100** |

Mobile Performance samples were 88/96/97 before and 97/95/96 after. Mobile LCP varied from 1.965–3.594 s before versus 2.545–2.633 s after. These small, variable lab samples show no material median regression; they do not establish field Core Web Vitals, INP or a blanket speed improvement. The tiny still frame avoids introducing a background-video request or autoplay cost. Preview SEO remains affected by the deliberate `noindex` protection and must be checked on production only after an authorized release.

## Release status and remaining checks

This is ready for **owner preview review**, with no known critical regression in the completed checks. PR #2 remains draft and unmerged. The existing production release plan at `docs/PRODUCTION-RELEASE-PLAN.md` remains the launch/rollback checklist; its earlier Phase 5 application SHA and preview are historical and should be superseded by the tested implementation above.

Before authorizing a launch, review the new visual design on a physical Android and iPhone, Safari, native zoom and a screen reader; verify real email delivery only after separately confirming the sender/recipient and authorizing one scoped message; and monitor mobile LCP on real devices after release. Browser emulation and automated accessibility scans do not replace these checks. Verify the exact branch head and repeat relevant checks if application code changes again. The draft PR must not be merged, promoted or deployed to production until the owner explicitly approves the final release commit.
