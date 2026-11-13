import { pricingEnquiryMessage } from "./pricing-enquiry";

export const contactFallback = "Unable to send your enquiry. Please email hello@madebysebi.com directly.";
export const budgetOptions = ["GH₵3,000 – GH₵5,000", "GH₵5,000 – GH₵10,000", "GH₵10,000 – GH₵20,000", "GH₵20,000+", "International project — quote in USD / GBP"] as const;
export const timelineOptions = ["As soon as possible", "2–4 weeks", "1–2 months", "Flexible"] as const;

export function contactPayload(data: FormData) {
  return {
    name: data.get("name"), email: data.get("email"),
    company: data.get("company"), website: data.get("website"),
    service: data.get("service"), budget: data.get("budget"),
    timeline: data.get("timeline"), message: pricingEnquiryMessage(data),
    businessWebsite: data.get("businessWebsite"),
  };
}

// The injectable transport lets regression tests verify failure behavior without sending email.
export async function submitContactEnquiry(data: FormData, send: typeof fetch = fetch) {
  try {
    const response = await send("/api/contact", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactPayload(data)),
    });
    const result: unknown = await response.json();
    if (!response.ok || !result || typeof result !== "object" || !("ok" in result) || result.ok !== true) {
      const error = result && typeof result === "object" && "error" in result && typeof result.error === "string" ? result.error : contactFallback;
      return { ok: false, message: error };
    }
    return { ok: true, message: "Thanks — your enquiry has been sent. We’ll get back to you as soon as possible." };
  } catch {
    return { ok: false, message: contactFallback };
  }
}
