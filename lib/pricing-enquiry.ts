import { findPricingCategory, type PricingOption } from "./pricing-catalog";
import { contactServices } from "./services";

// Preserve the existing choices as well as supporting the new service taxonomy.
export const legacyContactServices = ["Web Design & Development", "UX/UI & Product Design", "Branding & Visual Design", "SEO & GEO", "Digital Marketing", "Website Consultation"] as const;
export const enquiryServices: readonly string[] = [...contactServices.filter(service => service !== "Other"), ...legacyContactServices, "Other"];

export function optionLabel(option: PricingOption) {
  return `${option.tier} — ${option.name}`;
}

export function getPricingEnquiry(params: Pick<URLSearchParams, "get">) {
  const category = findPricingCategory(params.get("category"));
  const requestedService = params.get("service");
  const service = category?.name ?? (enquiryServices.find(item => item === requestedService) || "");
  const option = category?.packages.find(item => item.id === params.get("package"));
  return { category, service, option };
}

// Add validated pricing context to the existing message field. The API contract,
// validation, honeypot, escaping and Resend integration remain unchanged.
export function pricingEnquiryMessage(formData: FormData) {
  const message = String(formData.get("message") ?? "");
  const category = findPricingCategory(formData.get("pricingCategory"));
  const option = category?.packages.find(item => item.id === formData.get("pricingPackage"));
  if (!category || formData.get("service") !== category.name) return message;
  const context = [`Service: ${category.name}`];
  if (option) {
    context.push(`Package: ${optionLabel(option)}`);
    context.push(option.basis === "published" ? `Published starting price: ${option.price}` : "Custom quote — illustrative scope, to be agreed in consultation.");
  }
  return `${context.join("\n")}\n\n${message}`;
}
