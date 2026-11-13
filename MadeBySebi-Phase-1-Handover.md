# MadeBySebi — Phase 1 Handover

Verified 11 November 2026, Africa/Accra. Phase 1 of five: technical foundation. Production has not been deployed or merged.

## GitHub and deployment state

- Repository: https://github.com/numoenochtetteh/madebysebi
- Continued branch: `feat/business-repositioning-rebuild`
- Verified implementation commit: `b565e2e188848a2c32104fdf87ed8d28dfffc1e1`
- Commit URL: https://github.com/numoenochtetteh/madebysebi/commit/b565e2e188848a2c32104fdf87ed8d28dfffc1e1
- Draft pull request: https://github.com/numoenochtetteh/madebysebi/pull/2
- Verified Git tree: `8831e1bdb4f0fb45dbd68a8bf7480f36c495968c`. The GitHub-created commit has exactly the same file tree as the locally built and tested source.
- Production remains on `main`, commit `36ce97c3524fd683efa8c2072b920641b6db0b65`, deployment `dpl_GjugdLr23SM4ngSsLUfJugyXvedN`.
- Production URLs: https://madebysebi.com and https://www.madebysebi.com
- Preview: READY — deployment `dpl_GfUVYC9jA47bK17m5hrnm3fUZkyz`, exact implementation commit above. Immutable URL: https://madebysebi-q5it2q7t2-numoenochtettehkent-9218s-projects.vercel.app . Reviewed branch URL: https://madebysebi-git-feat-b-91f2d2-numoenochtettehkent-9218s-projects.vercel.app/ . Vercel Authentication remains enabled; sign in with the owning Vercel account if prompted. Preview is excluded from indexing by its response headers.

## Completed changes

1. Read the complete recovery report `MadeBySebi-Recovery-Report-2026-11-11.md` and the business repositioning Google Doc before implementing. Reconfirmed GitHub main, branch heads, open-PR state and Vercel production metadata without repeating the previous full audit.
2. Found an unpublished staged full rebuild in the previous workspace. Left that working tree intact and recovered only foundation-relevant service data, ESLint patterns, six optimized video posters, the modal navigation approach and verification scaffolding. That candidate's whole-site redesign and old reported results have not been claimed as this phase's work. The Phase 1 branch starts from the verified production baseline.
3. Established reusable server-compatible `Container`, `Section`, `Eyebrow`, `SectionHeading`, `ActionLink` and `Card` components. Added scoped cream/charcoal/lime tokens for color, readable supporting text, typography, spacing, cards, controls, focus and motion. The existing pricing intro now uses `SectionHeading`; its package cards and commercial content are retained.
4. Added structured content for the three ordered service pillars, stable future homepage anchors and their services in `lib/services.ts`. Moved the three existing package definitions into `lib/pricing.ts`, retaining prices and inclusions.
5. Repaired ESLint using the Next.js Core Web Vitals and TypeScript flat configurations. Fixed the legacy internal anchor violation and changed team photos to responsive Next/Image delivery. Added typecheck, test and build-output-check commands plus `pnpm check`.
6. Updated Next.js 16.0.10 -> 16.4.6, React/React DOM 19.2.0 -> 19.3.1, added Sharp 0.35.5, and patched transitive `source-map-js` to 1.2.2. Pinned pnpm 11.25.0 and explicit Sharp/esbuild build permissions. Reproducible frozen-lockfile install verified. Kept the existing stack, dependencies needed by legacy components and webpack build mode.
7. Fixed short-viewport menu access with an independently scrolling native modal dialog. Added Escape/focus containment and desktop-resize cleanup, retained scroll-unlock-on-link behavior, moved the desktop breakpoint to 1024px and added active-page semantics. Reserved 80px above the hero content so its service selector is below the fixed header.
8. Added skip-to-content targets to the existing routes. Removed the loading fallback's extra h1 while preserving its presentation. Hid the floating WhatsApp control near the footer so legal links are reachable.
9. Gated hero/service rotation on page visibility and reduced motion, removed the service-entry blur animation, and gave the known featured hero LCP image explicit eager/high priority. LazyVideo retains mobile variants and offscreen pause/unload, now honors reduced motion/data saving and provides manual controls.
10. Recovered six WebP video-poster copies while preserving all originals: 2,812,139 original bytes -> 419,662 delivery-copy bytes, an 85.1% reduction across those six assets. This is an asset-total comparison, not page transfer size, a Lighthouse score or a real-device smoothness measurement.
11. Added `/pricing` to the sitemap and retained the eight case-study URLs, forms, social destinations, legal pages, existing analytics and SEO functionality.
12. Wrote `docs/REBUILD-FOUNDATION.md` with the business-document revision, architecture gap analysis, design tokens, reusable-component contract, pricing reference, commercial constraints and five-phase boundaries.

## Verification results

| Check | Verified result |
| --- | --- |
| `pnpm install --frozen-lockfile` | Passed |
| `pnpm lint` | Passed, zero errors/warnings |
| `pnpm typecheck` | Passed |
| `pnpm test` | 11 passed, zero failures |
| `pnpm build` | Passed; compiled and generated 21/21 outputs |
| `pnpm check:build` | Passed: 18 HTML pages, 675 internal links and 93 image references; no errors |
| `pnpm audit --prod --json` | Zero info/low/moderate/high/critical findings after the source-map patch |
| `git diff --check` | Passed |
| GitHub publication | Remote branch and PR verified at the implementation commit; Git tree matched locally tested source |
| Vercel build / preview | READY for the exact commit; Vercel logs confirmed compilation, TypeScript and 21/21 generated outputs. Authenticated HTTP homepage check returned 200. Browser navigation/rendering verified through scoped temporary preview access. |
| Browser checks | Passed the scoped checks below; full device/accessibility/performance coverage belongs to later phases. |
| Real contact email | Not sent; provider success/failure, escaping, validation, honeypot and missing-configuration behavior tested with mocks |

Browser evidence on the deployed preview:

| Scenario | Observed result |
| --- | --- |
| Desktop homepage, 1363 × 936 CSS pixels | One h1; fixed header bottom 80px, hero service bar top 102px; no document horizontal overflow; featured image loaded with eager/high priority |
| Tablet/short menu, 779 × 535 | Dialog client height 535px, scroll height 843px, overflow-y auto; scrolled 308px and reached lower CTAs |
| Keyboard and navigation | Focus stayed within the open modal; Escape closed it, returned focus to the menu toggle and restored body scrolling; lower Start a project CTA navigated to Contact and unlocked scrolling |
| Resize to desktop | Open menu closed at 1363px; aria-expanded false and body overflow restored |
| Contact, 779px wide | Existing name/email/service/message required fields retained; no horizontal overflow; no enquiry sent |
| Footer | WhatsApp hidden/display none near footer; Terms center hit the Terms anchor and pointer navigation opened the Terms page |
| Pricing, 454 × 312 and 340 × 234 | No document horizontal overflow; all three published prices retained; 340px layout had 289px-wide cards |
| Power Electrode case study | Optimized poster used; initially no sources, then visible video reached readyState 4 and played; scrolling away paused it and removed all sources |
| Console | No application-origin warning/error observed. Browser-extension metadata errors and a Google sign-in warning from the earlier Vercel login page were unrelated to application code |

Responsive sizes were exercised through Chrome zoom, not physical touch devices. Reduced-motion/data-saving branches were reviewed in source; a full preference/device matrix remains a later-phase check. A local browser/HTTP attempt was blocked by the execution environment's loopback networking, so interactive checks used the actual Vercel preview instead.

The production build is an actual optimized Next.js build, not a development-server smoke test. No new Lighthouse or real-user INP result is claimed. Browser checks do not substitute for physical-phone testing.

## Changed files

The implementation commit changes 43 files. This handover is added as a follow-up documentation commit, bringing the complete PR to 44 files. Paths below are relative to the repository root.

- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/foundation.css`
- `app/layout.tsx`
- `app/loading.tsx`
- `app/not-found.tsx`
- `app/page.tsx`
- `app/pricing/page.tsx`
- `app/privacy/page.tsx`
- `app/services/page.tsx`
- `app/sitemap.ts`
- `app/terms/page.tsx`
- `app/work/[slug]/page.tsx`
- `app/work/page.tsx`
- `components/landing/developers-section.tsx`
- `components/landing/footer-section.tsx`
- `components/landing/gallery-hero-content.tsx`
- `components/landing/gallery-hero.tsx`
- `components/landing/navigation.tsx`
- `components/landing/services-showcase.tsx`
- `components/landing/whatsapp-button.tsx`
- `components/media/lazy-video.tsx`
- `components/site/primitives.tsx`
- `docs/REBUILD-FOUNDATION.md`
- `docs/recovered-posters.json`
- `eslint.config.mjs`
- `hooks/use-browser-preferences.ts`
- `lib/pricing.ts`
- `lib/services.ts`
- `lib/video-posters.json`
- `next-env.d.ts`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `public/media/posters/03-values.webp`
- `public/media/posters/3.webp`
- `public/media/posters/creative-workspace.webp`
- `public/media/posters/fintech-solutions.webp`
- `public/media/posters/product-experience.webp`
- `public/media/posters/tech-websites.webp`
- `scripts/check-build.mjs`
- `tests/contact.test.ts`
- `tests/foundation.test.ts`
- `MadeBySebi-Phase-1-Handover.md` (follow-up documentation)

The handover is preserved at the repository root as `MadeBySebi-Phase-1-Handover.md`. The implementation commit above is the source of truth for the executable code verified on the preview. The latest feature-branch head also includes the follow-up report commit; use that latest head for Phase 2.

## Outstanding issues and deliberate phase boundaries

- Rebuild the homepage in Phase 2: replace the old Web Design/Development/UI-UX/Digital Products framing with the three customer needs, each visible in the hero and linking directly to the appropriate section immediately below it. The final service-pillar homepage is not implemented in Phase 1.
- Rebuild pricing in Phase 3. Category query URLs in recovered service data are future integration targets; the current pricing page does not filter by category. Borrow category navigation/comparison/recommendation patterns from https://belswebdev.com/pricing, without copying its prices, deadlines or brochure promises.
- Align Services, About, Work/case studies, Contact, footer and root metadata/organization copy in Phase 4. Legacy page-specific CSS and client-heavy homepage sections remain; migrate them incrementally rather than shipping the unpublished whole-site candidate automatically.
- Existing low-contrast legacy homepage/process labels and remaining animated shadows/colors/canvas effects need review during their page phase. Foundation tokens alone do not fix every legacy selector.
- The existing header's scroll transitions remain. Phase 2 should assess the complete header/hero composition at each breakpoint.
- Real email delivery and recipient arrival remain unverified. Read-only environment metadata confirmed `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` are currently production-only, so the preview cannot send real enquiries and should show the existing direct-email fallback. No environment values or scopes were changed; do not copy secrets into reports or public client code, and do not send an external enquiry without sending authorization.
- ESLint 9.39.5 is pinned for compatibility with the currently installed Next.js lint plugins. It emits an upstream deprecation warning during install; ESLint 10 exposed peer incompatibilities in those plugins. Current lint passes. Revisit the major upgrade when the plugin set supports it cleanly.
- The earlier recovery PageSpeed scores (mobile 87 / desktop 90) describe the old production baseline. No fresh score for this branch has been measured.

## Exact Phase 2 instructions

Use the following continuation request:

> Continue MadeBySebi Rebuild — Phase 2 of 5: Homepage. Read `MadeBySebi-Phase-1-Handover.md` and `docs/REBUILD-FOUNDATION.md` first. Continue GitHub branch `feat/business-repositioning-rebuild`, verified Phase 1 commit `b565e2e188848a2c32104fdf87ed8d28dfffc1e1`. Fetch the branch and use its latest head; verify it still contains this commit, and preserve any newer work. Do not restart recovery, reset the branch, merge to main or deploy to production.
>
> Recheck the current business document at https://docs.google.com/document/d/1TK_o0lz9t_6c9D0v3uPdmIBlQtG_hk8bQ8LHEKdlwKg/edit. Rebuild only the homepage and necessary shared header/hero integration around: Establish Your Online Presence; Build Your Solution; Grow Your Business. All three must be visible in the hero with clear customer-focused copy. Link them to `#online-presence`, `#build-your-solution` and `#grow-your-business`. Put the three detailed sections immediately below the hero in that order, covering the corresponding services from `lib/services.ts`. Eliminate overlapping/duplicated hero service selectors. Use the shared primitives and design tokens; preserve current contact CTAs, all real portfolio links, existing route URLs and production integrations. Keep static content server-rendered and client behavior small. Prefer real existing project imagery and restrained motion. Do not invent prices, results, testimonials, turnaround promises or brochure files. Pricing redesign belongs to Phase 3 and other page redesigns to Phase 4.
>
> Verify desktop, tablet, short landscape and narrow phone widths; header/hero spacing; menu scroll/Escape/focus/resize; skip link and section anchors; readable contrast; reduced motion; media loading and console errors. Run `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build` and `pnpm check:build`. Update checks only when the intended content changes, preserving meaningful regression coverage. Commit using the existing feature branch, update PR #2 and verify a new preview for the exact commit. Keep production unchanged. Generate `MadeBySebi-Phase-2-Handover.md` with completed changes, changed files, actual test results, branch/commit, PR/preview URLs, outstanding issues and exact Phase 3 instructions. Never describe an attempted test, commit or deployment as successful without checking the result.
