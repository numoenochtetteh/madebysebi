"use client";

import Link from "next/link";
import { Suspense, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { EnquiryServiceFields, PricingEnquiry } from "./pricing-enquiry";
import { budgetOptions, submitContactEnquiry, timelineOptions } from "@/lib/contact-form";
import styles from "./contact-form.module.css";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setMessage("");
    const result = await submitContactEnquiry(data);
    if (result.ok) form.reset();
    setStatus(result.ok ? "success" : "error");
    setMessage(result.message);
  }
  return <div id="contact-form" tabIndex={-1} className={styles.card}>
    <p className={styles.label}>PROJECT ENQUIRY</p><h2>Tell us what you need.</h2><p className={styles.intro}>A few details will help us understand your project. Fields marked * are required.</p>
    <form onSubmit={handleSubmit} className={styles.form}>
      <Suspense fallback={<EnquiryServiceFields />}><PricingEnquiry /></Suspense>
      <div className={styles.row}>
        <div className="form-field"><label htmlFor="name">FULL NAME *</label><input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required /></div>
        <div className="form-field"><label htmlFor="email">EMAIL *</label><input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></div>
      </div>
      <div className={styles.row}>
        <div className="form-field"><label htmlFor="company">COMPANY / BUSINESS</label><input id="company" name="company" type="text" placeholder="Business name" autoComplete="organization" /></div>
        <div className="form-field"><label htmlFor="website">CURRENT WEBSITE</label><input id="website" name="website" type="text" placeholder="www.example.com" autoComplete="url" /></div>
      </div>
      <div className={styles.row}>
        <div className="form-field"><label htmlFor="budget">PROJECT BUDGET</label><select id="budget" name="budget" defaultValue=""><option value="" disabled>Select budget</option>{budgetOptions.map(option => <option key={option}>{option}</option>)}</select></div>
        <div className="form-field"><label htmlFor="timeline">IDEAL TIMELINE</label><select id="timeline" name="timeline" defaultValue=""><option value="" disabled>Select timeline</option>{timelineOptions.map(option => <option key={option}>{option}</option>)}</select></div>
      </div>
      <div className="form-field"><label htmlFor="message">TELL US ABOUT THE PROJECT *</label><textarea id="message" name="message" rows={6} placeholder="What are you trying to build or improve?" required /></div>
      <div className={styles.honeypot} aria-hidden="true"><label htmlFor="businessWebsite">Leave this field empty</label><input id="businessWebsite" name="businessWebsite" type="text" tabIndex={-1} autoComplete="off" /></div>
      <button type="submit" disabled={status === "submitting"} className={styles.submit}>{status === "submitting" ? "Sending…" : "Send enquiry"}<ArrowRight size={18} aria-hidden="true" /></button>
      {message ? <p className={status === "error" ? styles.error : styles.success} role={status === "error" ? "alert" : "status"}>{message}</p> : null}
      <p className={styles.note}>By sending an enquiry, you agree that MadeBySebi may use the information provided to respond to your project request. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      <p className={styles.note}>Prefer email? <a href="mailto:hello@madebysebi.com">hello@madebysebi.com</a></p>
    </form>
  </div>;
}
