# MadeBySebi production release plan

Prepared 13 November 2026. **Documentation only. Production launch requires a separate, explicit authorization identifying the release commit.** Completing Phase 5 does not authorize merging, promoting or deploying.

Application implementation: `05e88ae3bf82bd59f990110c43788d80520e6e1a` on `feat/business-repositioning-rebuild`.

Review: https://github.com/numoenochtetteh/madebysebi/pull/2 (leave as a draft until the owner approves release).

Tested preview: https://madebysebi-2058wcikj-numoenochtettehkent-9218s-projects.vercel.app/

Production rollback baseline verified during Phase 5: main commit `36ce97c3524fd683efa8c2072b920641b6db0b65`, deployment `dpl_GjugdLr23SM4ngSsLUfJugyXvedN`. Recheck immediately before launch in case a separately authorized production change has occurred.

## 1. Final pre-release checklist

- Read `MadeBySebi-Phase-5-Handover.md` and `docs/PHASE-5-VERIFICATION.json`; review all important limitations and accept or resolve them explicitly.
- Confirm the owner has reviewed the business content, three service pillars, eight Pricing categories, 24 options and the three published starting prices. No new prices, packages, promises or legal terms are authorized by this release plan.
- Perform the outstanding physical Android/iPhone and Safari review. Browser emulation is useful evidence, not proof of physical-device compatibility.
- Complete the separately authorized email-delivery check below, or explicitly record owner acceptance of postponing it until the production smoke test.
- Confirm the exact PR head and main head. Preserve newer commits. If application files changed after the tested implementation, review the diff and repeat relevant checks on that source.
- Use Node **24.x** and pnpm **11.25.0**, with a clean checkout and no unpublished local draft.

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm exec next typegen
pnpm typecheck
pnpm test
pnpm build
pnpm check:build
pnpm audit
```

`next typegen` must precede standalone typechecking on a fresh checkout. Run `check:build` against the local Next.js output. Do not append it to Vercel's build command: Vercel's adapter moves build artifacts. Vercel's existing `pnpm run build` remains appropriate.

## 2. Environment and integration verification

Use the existing Vercel project `madebysebi` (`prj_83GtoVNb7vU788AL8bckLr5HDIVY`). Inspect configuration without publishing secret values or pulling production secrets into source or browser code.

| Setting | Required release check |
| --- | --- |
| Node | Package engine `24.x`; confirm the production build actually uses Node 24 |
| pnpm | `packageManager` remains `pnpm@11.25.0`; frozen installation passes |
| `RESEND_API_KEY` | Existing production secret is present and valid; never print its value |
| `CONTACT_FROM_EMAIL` | Existing sender address/domain is verified by Resend |
| `CONTACT_TO_EMAIL` | Owner confirms the intended recipient before any authorized test |
| `NEXT_PUBLIC_SITE_URL` | If configured, it must be `https://madebysebi.com`; the application already defaults to this URL |
| Analytics / Speed Insights | Preserve existing integrations; check script responses and actual monitoring after release |
| Domains / DNS / protection | Preserve existing settings; no changes are authorized by this plan |

The three mail variables were production-only when inspected. Preview Contact therefore has a deliberate direct-email fallback. **Build a fresh production deployment using production-scoped variables; do not assume that promoting an existing preview gives it the correct email configuration.** Environment-variable changes require separate authorization.

## 3. Email-delivery verification plan

No real emails were sent during Phase 5. Mock-provider tests and intercepted browser requests establish application behavior, not inbox delivery.

Before sending anything, obtain explicit authorization for **one** clearly labelled test and confirm the configured recipient and expected sender. Do not change recipient secrets to conduct the test without separate authorization. A controlled preview email configuration may be used if the owner independently approves and supplies it securely; otherwise perform the authorized production smoke test after launch.

Submit one realistic enquiry through the form with a known Pricing selection. Confirm: HTTP success, provider acceptance/message identifier, correct recipient, reply-to, selected service/package/price context, escaped content, and inbox arrival including spam checks. Provider acceptance alone is not proof of inbox arrival. Avoid repeated submissions if delivery is delayed. Record the result without secret values or unnecessary personal data.

## 4. Deployment sequence — only after explicit launch approval

1. Record the owner's authorization, exact release commit and accepted outstanding limitations.
2. Recheck the production baseline and retain the previous ready production deployment as the rollback target.
3. Review draft PR #2 and any newer commits. Mark it ready only when release approval has been given.
4. Merge through the normal GitHub PR workflow into `main`. **Merging can trigger an automatic production deployment; do not merge as a preparatory step before authorization.** Never reset or force-push main.
5. Observe the Git-connected Vercel production build. Confirm its Git SHA matches the new main commit and its application changes match the tested feature branch. Verify Node 24, successful build and READY status.
6. If the Git deployment does not start, use the existing Vercel dashboard to create a fresh **Production** build from the approved main commit. Do not create a replacement project or alter domain/DNS configuration.
7. Verify that `madebysebi.com` points to the approved ready production deployment, then run the smoke tests below.

The owner can carry out these dashboard/GitHub steps manually. No CLI credentials or production secret values need to be shared in chat.

## 5. Production smoke tests

- Check `/`, `/services`, `/pricing`, `/about`, `/work`, `/contact`, `/privacy`, `/terms`, all eight existing `/work/[slug]` case studies, and a nonexistent route returning a real 404.
- Exercise the three homepage anchors; desktop navigation; mobile menu scrolling, Escape, focus restoration and resize cleanup; WhatsApp and footer links.
- Exercise all eight Pricing categories and three options per category, search, comparisons, unknown categories, direct URLs and browser back/forward. Confirm GH₵3,000 / GH₵6,500 / GH₵12,000 remain correctly assigned and Business Website remains recommended.
- Follow Get Started to Contact. Confirm visible service/package context and native validation. Only send a real enquiry if the limited email test was separately authorized.
- Inspect images, optional videos, reduced motion/data saving, narrow-phone layout and horizontal overflow.
- Check production console/runtime errors and both Vercel monitoring scripts. Do not interpret a blocked extension request as an application failure.
- Check titles, descriptions, production canonicals, social images, valid structured data, `/robots.txt` and `/sitemap.xml` including `/pricing` and all eight case studies.
- **Production must be indexable:** no preview `X-Robots-Tag: noindex` on production responses. Preview deployments must retain their noindex protection.

## 6. Post-launch monitoring

Check Vercel runtime errors, failed Contact requests, Resend delivery results and broken routes immediately after launch and again over the following 24–48 hours. Review Web Analytics and Speed Insights when real traffic exists. Compare field LCP/CLS/INP with lab results when sufficient data is available; do not infer field metrics from the Phase 5 simulations.

Retain the previous deployment until the owner accepts the release. Investigate sustained errors or measurable regressions before making further unrelated changes.

## 7. Rollback

If critical navigation, Contact, rendering or integration failures appear, stop further release changes and inform the owner. With release/rollback authorization, use Vercel's normal rollback operation to restore the verified previous production deployment (or the immediately preceding production deployment if production changed before launch). Verify the domain mapping and rerun essential smoke tests.

Then revert the release merge through a normal GitHub revert PR so main reflects the restored state. Do not reset branch history, delete deployments, rotate secrets, change DNS, or assume reverting Git automatically changes an already deployed domain. Record both Git and deployment state.

## 8. SEO follow-up

After a successful, authorized launch, verify the existing Search Console property, submit the production sitemap if needed, inspect representative URLs and monitor indexing/404 reports. Do not submit previews for indexing or request production indexing before approval. Preserve the existing case-study URLs; no new redirect scheme is required by this rebuild.

## 9. Acceptance criteria

No known critical application regression; all required build/test checks pass on the release source; all retained routes and commercial data work; browser/accessibility results are reviewed; important limitations are resolved or explicitly accepted; production email delivery is verified or a limited post-launch test is authorized; production metadata/indexability and monitoring are checked; and a verified rollback target is available. **Owner approval remains the final launch gate.**
