import { submitContactEnquiry } from "./contact-form";

export function consultationFormData(data: FormData) {
  const prepared = new FormData();
  for (const [key, value] of data) prepared.append(key, value);
  const phone = String(data.get("phone") ?? "").trim();
  const description = String(data.get("message") ?? "").trim();
  prepared.set("message", [
    "Consultation request",
    phone ? `Phone / WhatsApp: ${phone}` : "",
    "",
    description,
  ].join("\n"));
  return prepared;
}

export function submitConsultationEnquiry(data: FormData, send: typeof fetch = fetch) {
  return submitContactEnquiry(consultationFormData(data), send);
}
