# Phase 5 verification evidence

The handover identifies the tested application commit and exact Vercel preview. Evidence describes actual runs, not promised scores. `baseline-audits.json.gz` preserves eight valid Lighthouse runs of the Phase 4 preview and the initial browser audit. The final evidence bundle and summary are described in the handover.

## Conditions and limits

Lighthouse 13.6.0 ran in isolated Chrome for Testing 157.0.8103.78, on Vercel Sandbox in iad1 with 2 vCPUs and 4 GB RAM. The initial audit environment was restored from a filesystem snapshot for the final runs; hardware allocation and software were held constant, but cloud host load and CDN state were not controlled. Per-run Lighthouse benchmark indices, timestamps, user agents, screen settings and throttling are retained. Compare distributions rather than attributing every score difference to an individual fix.

Mobile uses Lighthouse's simulated mobile network/CPU profile; desktop uses its actual desktop configuration. A profile guard rejects mismatches. Each run starts a fresh Chrome profile, bootstraps only the same-origin preview authentication document, clears the HTTP cache, retains its origin-scoped temporary access cookie, then audits the plain preview URL. Application/analytics requests are not blocked during measurement. No production secrets, native browser profiles or existing browser cookies were used.

Early setup attempts (local socket restrictions, an incomplete browser installation, a headless-shell crash, and a desktop flag that did not select the desktop config) produced no accepted measurements. The desktop runs were repeated with the correct configuration. Temporary access URLs and cookies are excluded from committed evidence. A failed audit is not a zero performance score.

Lighthouse SEO is affected by Vercel's intentional preview `noindex` header. It must remain in place. A preview score is not evidence that production is unindexable. Lab TBT and emulated interactions are not real-user INP. Physical devices, Safari and real-user field data were unavailable.

## Reproduce browser checks and Lighthouse

Keep these tools outside the application so they add no deployed dependencies:

```bash
npm install --prefix /absolute/path/to/audit-tools --no-audit --no-fund lighthouse@13.6.0
```

Use an installed compatible Chrome for Testing and a toolchain compatible with Lighthouse (Node 24 was used). In the isolated Linux audit image, Chrome required unzip, fontconfig, fonts and its documented system libraries. A normal development computer with Chrome installed may already have these.

Set the following environment variables locally without logging the access URL:

```text
AUDIT_TOOL_ROOT=/absolute/path/to/audit-tools
AUDIT_CHROME_PATH=/absolute/path/to/chrome
AUDIT_OUTPUT=/absolute/path/to/audit-results
PREVIEW_URL=the exact preview origin in the handover
SOURCE_COMMIT=the exact tested implementation SHA
MADEBYSEBI_AUDIT_ACCESS_URL=an authorized, temporary Vercel share URL for that same origin
```

The access URL must originate from the owner's authorized Vercel account and match `PREVIEW_URL`. Do not weaken project protection, commit the URL, set global authentication headers or reuse production secrets.

```bash
node scripts/audit-preview.mjs final / mobile 1
node scripts/audit-preview.mjs final / desktop 1
node scripts/audit-preview.mjs final /pricing mobile 1
node scripts/phase5-browser-qa.mjs
```

Repeat mobile homepage/Pricing runs three times and report medians and ranges. Run other routes individually with the same profiles. Audit serially, without builds or other browser workloads in the audit VM.

The browser script records checks in `browser-qa.json`; a successful process exit alone is not proof those checks passed. Require its summary explicitly:

```bash
node -e 'const fs=require("fs"); const path=require("path"); const r=JSON.parse(fs.readFileSync(path.join(process.env.AUDIT_OUTPUT,"browser-qa.json"))); if(!r.summary || r.summary.failed || r.summary.passed!==18) process.exit(1); console.log(r.summary);'
```

The browser suite intercepts `/api/contact` before submitting forms and supplies mock 503/200 responses. It sends no real emails. Media preference checks inject and read back `navigator.connection` in the main page world, use actual reduced-motion media emulation, verify zero automatic video requests, then test explicitly requested playback and unloading. These are runtime simulations, not physical network/device results.

Browser cache was disabled for HTTP/metadata checks to obtain fresh headers rather than treating a valid 304 as a missing 200. Native modal tests prevent focus reaching other page controls; browser-chrome focus transitions are permitted. Initial harness issues were corrected before the accepted final report. Image requests aborted by rapid resizing/navigation are recorded separately from HTTP failures and JavaScript exceptions.

## Normal project checks

Use Node 24.x and pnpm 11.25.0. Follow the exact commands in `docs/PRODUCTION-RELEASE-PLAN.md`. No Lighthouse, Puppeteer, axe or font-subsetting dependencies were added to the deployed application. Font subsetting is optional, separately documented in `docs/font-sources/README.md`.

## Evidence identity

`final-audits.json.gz` contains the 42 accepted final-implementation Lighthouse runs plus earlier comparison/reference runs, final browser results, supplementary checks and external-link responses. Filter audit rows by the exact `finalCommit` and label `final` before computing final scores. `docs/PHASE-5-VERIFICATION.json` records file checksums and the completion review. `local-checks.json` holds the successful clean-checkout rerun of all eight commands on the same application commit.
