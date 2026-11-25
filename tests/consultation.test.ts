import test from "node:test";
import assert from "node:assert/strict";
import { submitConsultationEnquiry } from "../lib/consultation";

test("consultation requests include optional phone details and use the existing enquiry endpoint", async () => {
  const data = new FormData();
  for (const [key, value] of Object.entries({
    name: "Client Name", email: "client@example.com", company: "A Business",
    service: "Mobile Applications", budget: "", timeline: "Flexible",
    phone: "+233 20 555 1234", message: "We need a booking application.",
    businessWebsite: "",
  })) data.set(key, value);
  let calls = 0;
  const send: typeof fetch = async (url, init) => {
    calls++;
    assert.equal(url, "/api/contact");
    const payload = JSON.parse(String(init?.body));
    assert.equal(payload.service, "Mobile Applications");
    assert.equal(payload.email, "client@example.com");
    assert.match(payload.message, /Consultation request/);
    assert.match(payload.message, /Phone \/ WhatsApp: \+233 20 555 1234/);
    assert.match(payload.message, /We need a booking application/);
    return Response.json({ ok: true });
  };
  assert.equal((await submitConsultationEnquiry(data, send)).ok, true);
  assert.equal(calls, 1);
  assert.equal(data.get("message"), "We need a booking application.");
});
