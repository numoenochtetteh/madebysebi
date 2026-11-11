import test from "node:test";
import assert from "node:assert/strict";
import { POST } from "../app/api/contact/route";
const valid = {
  name: "Preview Test",
  email: "preview@example.com",
  service: "Business Websites",
  message: "Automated verification only.",
};
const request = (body: unknown) =>
  new Request("https://madebysebi.com/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "content-type": "application/json" },
  });

test("invalid and incomplete enquiries are rejected before calling the email provider", async (context) => {
  let calls = 0;
  context.mock.method(globalThis, "fetch", async () => {
    calls++;
    throw new Error("Unexpected provider call");
  });
  for (const body of [
    null,
    [],
    {},
    { ...valid, email: "invalid" },
    { ...valid, message: "" },
  ])
    assert.equal((await POST(request(body))).status, 400);
  assert.equal(
    (
      await POST(
        new Request("https://madebysebi.com/api/contact", {
          method: "POST",
          body: "{bad",
        }),
      )
    ).status,
    400,
  );
  assert.equal(calls, 0);
});
test("oversized payloads are rejected", async () =>
  assert.equal(
    (await POST(request({ ...valid, message: "a".repeat(17000) }))).status,
    413,
  ));
test("honeypot accepts silently without sending mail", async (context) => {
  let calls = 0;
  context.mock.method(globalThis, "fetch", async () => {
    calls++;
    return new Response("{}");
  });
  assert.deepEqual(
    await (await POST(request({ ...valid, businessWebsite: "spam" }))).json(),
    { ok: true },
  );
  assert.equal(calls, 0);
});
test("missing mail configuration returns the direct-contact fallback", async () => {
  const key = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  try {
    const response = await POST(request(valid));
    assert.equal(response.status, 503);
    assert.match((await response.json()).error, /hello@madebysebi.com/);
  } finally {
    if (key) process.env.RESEND_API_KEY = key;
  }
});
test("provider request preserves enquiry fields and escapes untrusted content", async (context) => {
  const oldKey = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = "test-only-placeholder";
  let payload: Record<string, string> | undefined;
  context.mock.method(
    globalThis,
    "fetch",
    async (url: string, init: RequestInit) => {
      assert.equal(url, "https://api.resend.com/emails");
      payload = JSON.parse(init.body as string);
      return Response.json({ id: "mock-email" });
    },
  );
  try {
    const response = await POST(
      request({
        ...valid,
        name: "<script>Test</script>",
        message: "<img src=x onerror=alert(1)>",
      }),
    );
    assert.equal(response.status, 200);
    assert.equal(payload?.reply_to, valid.email);
    assert.match(payload!.text, /Service: Business Websites/);
    assert.ok(!payload!.html.includes("<script>"));
    assert.ok(payload!.html.includes("&lt;img"));
  } finally {
    if (oldKey) process.env.RESEND_API_KEY = oldKey;
    else delete process.env.RESEND_API_KEY;
  }
});
test("provider failure surfaces a recoverable error", async (context) => {
  const oldKey = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = "test-only-placeholder";
  context.mock.method(
    globalThis,
    "fetch",
    async () => new Response("Mock provider failure", { status: 503 }),
  );
  context.mock.method(console, "error", () => {});
  try {
    const response = await POST(request(valid));
    assert.equal(response.status, 502);
    assert.match((await response.json()).error, /hello@madebysebi.com/);
  } finally {
    if (oldKey) process.env.RESEND_API_KEY = oldKey;
    else delete process.env.RESEND_API_KEY;
  }
});
