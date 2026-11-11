# MadeBySebi rebuild foundation

Phase 1, 11 November 2026 (Africa/Accra). Continue the existing Next.js App Router application; production stays on main until a separately authorized release.

## Source and recovery

Production/base commit: `36ce97c3524fd683efa8c2072b920641b6db0b65`.

The complete `MadeBySebi-Recovery-Report-2026-11-11.md` was read before editing. GitHub and Vercel metadata still matched its baseline. A later local, staged full rebuild was found under `/workspace/scratch/9c867d10d11a/madebysebi`, with no separate published commit. Its remote feature branch still pointed to the baseline. That working tree was left intact; a binary patch checkpoint was also made in scratch. Only useful Phase 1 pieces were recovered: service-group content, the ESLint configuration pattern, six compressed video posters, the native-dialog navigation approach, and contact/build-check test scaffolding. Prior reports describe that candidate's results, not this phase's verification.

The candidate homepage, interactive pricing, rewritten pages, generated OG image, four video encodes, and remaining media conversions are deferred. They are reference material requiring review, not completed phases. Do not copy the candidate wholesale into this branch.

## Business requirements and architecture

Authoritative business document: https://docs.google.com/document/d/1TK_o0lz9t_6c9D0v3uPdmIBlQtG_hk8bQ8LHEKdlwKg/edit

Read revision: `AHj4eMSe8vTjKPxL8K3la43YPeOY4MYRY9Jt_hTo81NNznYcVhlHg6FPcsQHvySbZAFCrvn4cCTJerItfAzeY6TvxQDApmwdy4ckMuSM_Qc`.

MadeBySebi builds websites, mobile apps and custom business tools. Organize customer-facing content by the following order, using the stable IDs already defined in `lib/services.ts`:

| Pillar | Homepage anchor | Scope |
| --- | --- | --- |
| Establish Your Online Presence | `online-presence` | Business websites, e-commerce, bookings/payments, complete online launch including social setup and initial marketing |
| Build Your Solution | `build-your-solution` | Custom web apps, customer portals, dashboards, SaaS, inventory/employee tools, workflow automation, iOS/Android apps |
| Grow Your Business | `grow-your-business` | Social marketing/content/campaigns, maintenance/security/performance/support, enhancements and integrations |

The current site is still primarily presented as a web design studio. The old hero service labels, service showcase, homepage sequence, Services page taxonomy, About/Contact copy and root SEO copy remain for planned migration. Phase 1 establishes their shared vocabulary without making a partial commercial repositioning public.

| Area | Existing architecture | Rebuild direction |
| --- | --- | --- |
| Layout | One shared Navigation, Footer, WhatsApp button, fonts, analytics and organization schema in `app/layout.tsx` | Retain one shell; update its copy with the relevant phase |
| Homepage | Server wrapper with several legacy client sections, CSS blocks, canvas and animated service tabs | Server-render new proposition and pillar sections; use small client leaves only when useful |
| Services / About / Work | Server-rendered routes with RevealOnScroll and LazyVideo islands | Reuse route URLs and portfolio data; progressively use shared primitives |
| Pricing | Server-rendered three-package page | Existing commercial data is now in `lib/pricing.ts`; add grouped comparison in Phase 3 |
| Contact | Client form -> POST `/api/contact` -> Resend -> success/error UI | Preserve payload contract, required fields, honeypot, escaping and direct-email fallback |
| Case studies | Eight static slugs from `lib/projects.ts` | Preserve all slugs, original media and copy until explicitly reviewed |
| SEO | Route metadata, robots and sitemap | Preserve canonicals/social assets; `/pricing` sitemap omission fixed |

## Shared design system

Tokens live in `app/foundation.css`; existing Tailwind/shadcn tokens remain available. New classes use `mbs-` names to avoid changing legacy layouts. Inter remains the display/body family and Geist Mono the small-label family.

| Token | Value / purpose |
| --- | --- |
| `--mbs-canvas` | `#f7f7f3`, warm background |
| `--mbs-surface` | `#ffffff`, cards and panels |
| `--mbs-ink` | `#171717`, headings and primary controls |
| `--mbs-muted` | `#5f625b`, readable supporting text |
| `--mbs-lime` | Existing `--brand-lime` / `#cefa74`, highlights and featured cards |
| `--mbs-lime-ink` | `#496124`, readable green text on light backgrounds |
| `--mbs-line` | `#d7d9d1`, borders |
| `--mbs-radius` | `1.5rem`, cards |
| `--mbs-container` | `78.125rem` / 1250px |
| `--mbs-gutter` | Fluid 24–40px |
| `--mbs-section-space` | Fluid 64–112px |
| `--mbs-heading-size` | Fluid 36–76px |
| `--mbs-display-size` | Fluid 52.8–124.8px |
| `--mbs-duration` | 180ms for small control transitions |

`components/site/primitives.tsx` exports `Container`, `Section`, `Eyebrow`, `SectionHeading`, `ActionLink` and `Card`. These are server-compatible and add no browser observers/timers. `SectionHeading` supports h1/h2/h3; use one h1 per route and labelled sections. Use `Card` with `mbs-card-featured` for the lime recommendation treatment. Keep decorative icons hidden from assistive technology and preserve visible keyboard focus. The current pricing intro already uses `SectionHeading`, proving integration without rebuilding pricing.

Keep readable content visible without animation. Use opacity/transform if motion helps; avoid animated blur and layout properties. Honor reduced motion, page visibility and data saving. `hooks/use-browser-preferences.ts` provides media/visibility subscriptions. New content sections should use `Section` for consistent spacing and scroll margins; choose a plain list/card grid before adding a carousel.

## Pricing inspiration and commercial guardrails

https://belswebdev.com/pricing was read live on 11 November 2026. Useful patterns: category navigation, comparable package cards, a recommended option, clear scope/fee notes, quote CTAs and real downloadable brochures. Borrow the interaction structure, not competitor prices, copy, deadlines or package promises.

Preserve the published starting prices and inclusions until the user supplies replacements: Landing Page GH₵3,000; Business Website GH₵6,500; Online Store GH₵12,000. Custom software/apps/growth work uses a quotation. Category query URLs in service data are future integration targets; the current pricing page does not filter by them yet. Brochure downloads require actual approved PDFs. Do not invent discounts, delivery guarantees, business results, testimonials or new fixed prices.

## Five-phase boundary

1. **Foundation:** recovery, branch/tooling, shared design/content data, accessibility/performance safeguards, verification and handover.
2. **Homepage:** customer proposition, three visible hero service paths and three directly linked sections in document order; preserve useful real work and contact CTAs. Review responsive composition and performance. Do not redesign pricing/other routes yet.
3. **Pricing:** grouped service categories, comparison and enquiry context using retained approved prices; brochure controls only for real approved files.
4. **Remaining pages:** Services, About, Work/case studies, Contact, footer and SEO wording aligned to the three pillars; preserve current functionality/URLs.
5. **Release validation:** responsive/accessibility, performance, contact delivery with explicit sending authorization, links/SEO, regression checks and a separate production-release decision.

## Developer workflow

Use Node 24 (Vercel project) and pnpm 11.25.0. Run `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, `pnpm check:build`. `pnpm check` runs the five checks sequentially. Next.js build no longer runs lint automatically. The workspace permits only Sharp and esbuild install scripts. Runtime/config errors must not be hidden with TypeScript or lint ignores.

Preview email configuration may differ from production. Unit tests mock Resend and send no email. A successful provider-mock test is not proof of real delivery. Do not expose environment values in reports or carry production secrets into the client bundle.
