# Phase 3 pricing design and interaction reference

Reviewed 12 November 2026, Africa/Accra. Reference: https://belswebdev.com/pricing . The complete live markdown, extracted branding and full-page screenshot were inspected. The business repositioning document retains revision `AHj4eMSe8vTjKPxL8K3la43YPeOY4MYRY9Jt_hTo81NNznYcVhlHg6FPcsQHvySbZAFCrvn4cCTJerItfAzeY6TvxQDApmwdy4ckMuSM_Qc`.

## Observed reference structure

The desktop screenshot has a dark introductory hero, a light service explorer with a search input, eight wrapping category pills, a category heading/description panel, three equal-width package cards and a scope/third-party fee note. Each card contains a tier name, description, price, features and Get Started action. The middle card carries a recommendation label. Real PDFs appear beside the category heading, on the cards and in a brochure list. These are Bels assets and are not used here.

Extracted reference typography is Plus Jakarta Sans (48px h1, 24px h2, 14px body in this capture). Extracted accent colors include #984279 and #B43694. The inspected screenshot shows pale borders, rounded cards and compact category pills. Approximate spacing: a centered wide container, 24px-ish card gaps and generous separation between the introductory hero and comparison. These spacing estimates are visual observations, not an exact stylesheet reconstruction. Mobile transitions and search behavior are not established by a desktop screenshot alone.

## MadeBySebi implementation choices

Use `docs/REBUILD-FOUNDATION.md`, not the reference colors/fonts, as the visual authority. Preserve Inter/Geist Mono and the existing cream #f7f7f3, charcoal #171717, lime #cefa74, supporting text #5f625b, readable green #496124, 1250px container and 24px card radius. New styles are scoped to Pricing and the small Contact context panel.

Retain the reference interaction sequence: choose a category, read its heading, compare three cards, review scope and take a real contact action. Add the user's three-pillar filter above eight service categories, plus search, a comparison table, native FAQs and final consultation CTA. Pillar/category links have meaningful hrefs and visible focus. Search matches names, descriptions and features. Query state uses `category`, `pillar` and `q`; category selection pushes history while typing replaces the current entry. Native back/forward restores URL-driven state.

The initial selected comparison is server-rendered from query parameters. Only the explorer and Contact selection fields require new client logic. No new dependencies, images, videos, icon collections, animation packages or third-party requests are introduced. Narrow screens stack cards; the labelled/focusable comparison region scrolls internally rather than widening the page. Reduced-motion CSS removes control transitions. There is no autoplay or data-heavy media on this route.

## Commercial content and assets

There are 24 options across eight categories. Only the three original packages have published starting prices and exact published inclusions: Landing Page / Business Website under Business Websites, Online Store under E-commerce. They are never presented as three unrelated tiers in one category. Business Website retains the lime recommended treatment. Other options carry Custom Quote and explicit illustrative-scope labels; their feature lists are discussion points, not approved inclusions. No new fixed price, deadline or result guarantee is introduced.

There are no approved package PDFs in the current catalog or public assets. Optional typed brochure metadata and conditional controls prepare future support, with file-existence/approval checks. No download action appears until a real approved PDF is supplied. No Bels imagery, branding, copy or PDFs are copied. All illustration is code-native layout and existing Lucide icons.

## Verification boundaries

Reference fidelity concerns category selection and comparison structure, not pixel matching. Browser responsive, URL, keyboard, contact-context and preview findings are recorded in the Phase 3 handover. Physical devices, full assistive-technology testing and field performance require final release validation.
