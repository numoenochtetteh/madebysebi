"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { enquiryServices, getPricingEnquiry, optionLabel } from "@/lib/pricing-enquiry";
import styles from "./pricing-enquiry.module.css";

type Context = ReturnType<typeof getPricingEnquiry>;

export function EnquiryServiceFields({ context }: { context?: Context }) {
  const [service, setService] = useState(context?.service ?? "");
  const [keepContext, setKeepContext] = useState(true);
  const activeContext = keepContext && context?.service === service ? context : undefined;
  return <>
    {activeContext?.category ? <aside className={styles.summary} aria-label="Your pricing selection">
      <span>Your pricing selection</span><strong>{activeContext.category.name}</strong>
      {activeContext.option ? <><p>{optionLabel(activeContext.option)}</p><p>{activeContext.option.basis === "published" ? `${activeContext.option.price} · published starting price` : "Custom Quote · illustrative scope"}</p></> : null}
      <p>We’ll confirm the scope and quote with you. Change the service below to clear this package selection.</p>
    </aside> : null}
    <input type="hidden" name="pricingCategory" value={activeContext?.category?.id ?? ""} />
    <input type="hidden" name="pricingPackage" value={activeContext?.option?.id ?? ""} />
    <div className="form-field">
      <label htmlFor="service">WHAT DO YOU NEED HELP WITH? *</label>
      <select id="service" name="service" required value={service} onChange={event => { setService(event.target.value); setKeepContext(false); }}>
        <option value="" disabled>Select a service</option>
        {enquiryServices.map(item => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>
  </>;
}

export function PricingEnquiry() {
  const params = useSearchParams();
  const context = getPricingEnquiry(params);
  return <EnquiryServiceFields key={`${context.service}:${context.option?.id ?? ""}`} context={context} />;
}
