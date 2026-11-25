"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { budgetOptions, timelineOptions } from "@/lib/contact-form";
import { submitConsultationEnquiry } from "@/lib/consultation";
import styles from "./consultation.module.css";

const services = [
  "Business Websites",
  "E-commerce & Online Stores",
  "Booking Websites",
  "Custom Web Applications",
  "Mobile Applications",
  "Internal Business Systems",
  "Branding & Visual Design",
  "SEO & Digital Marketing",
  "Maintenance & Growth",
  "Not sure yet",
] as const;

export function ConsultationForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (step === 2) headingRef.current?.focus();
  }, [step]);

  function nextStep(event: React.MouseEvent<HTMLButtonElement>) {
    const fields = event.currentTarget.form?.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[data-project-step] [required]");
    if (fields && [...fields].some(field => !field.reportValidity())) return;
    setStep(2);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || step !== 2) return;
    const data = new FormData(event.currentTarget);
    setReplyEmail(String(data.get("email") ?? ""));
    setStatus("submitting");
    setMessage("");
    const result = await submitConsultationEnquiry(data);
    setStatus(result.ok ? "success" : "error");
    if (!result.ok) setMessage(result.message);
  }

  if (status === "success") {
    return <section className={`${styles.card} ${styles.successCard}`} aria-labelledby="consultation-success-title" role="status">
      <span className={styles.successIcon}><Check size={29} aria-hidden="true" /></span>
      <p className={styles.cardLabel}>REQUEST RECEIVED</p>
      <h2 id="consultation-success-title">We’ll be in touch.</h2>
      <p>Thanks for telling us about your project. We’ll email <strong>{replyEmail}</strong> to arrange a time to talk.</p>
      <Link className={styles.homeLink} href="/">Back to MadeBySebi <ArrowRight size={17} aria-hidden="true" /></Link>
    </section>;
  }

  return <section className={styles.card} aria-label="Consultation request form">
    <div className={styles.cardTop}>
      <p className={styles.cardLabel}>CONSULTATION REQUEST</p>
      <span className={styles.stepCount}>Step {step} of 2</span>
    </div>
    <div className={styles.progress} role="progressbar" aria-label="Form progress" aria-valuemin={1} aria-valuemax={2} aria-valuenow={step}><span style={{ width: `${step * 50}%` }} /></div>
    <form onSubmit={handleSubmit} className={styles.form}>
      <fieldset className={styles.step} data-project-step hidden={step !== 1}>
        <legend className={styles.visuallyHidden}>Your project</legend>
        <h2>What are you working on?</h2>
        <p className={styles.hint}>A little context is enough to get started.</p>
        <div className={styles.field}>
          <label htmlFor="consultation-service">What do you need help with? <span>*</span></label>
          <select id="consultation-service" name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {services.map(service => <option key={service}>{service}</option>)}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="consultation-message">Tell us about your idea <span>*</span></label>
          <textarea id="consultation-message" name="message" rows={5} minLength={10} maxLength={3000} placeholder="What would you like to build or improve? What should it help you achieve?" required />
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="consultation-budget">Estimated budget <small>Optional</small></label>
            <select id="consultation-budget" name="budget" defaultValue="">
              <option value="">Not sure yet</option>
              {budgetOptions.map(option => <option key={option}>{option}</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="consultation-timeline">Ideal timeline <small>Optional</small></label>
            <select id="consultation-timeline" name="timeline" defaultValue="">
              <option value="">Flexible / not sure</option>
              {timelineOptions.map(option => <option key={option}>{option}</option>)}
            </select>
          </div>
        </div>
        <button type="button" className={styles.primaryButton} onClick={nextStep}>Continue <ArrowRight size={18} aria-hidden="true" /></button>
      </fieldset>
      <fieldset className={styles.step} hidden={step !== 2}>
        <legend className={styles.visuallyHidden}>Your details</legend>
        <h2 tabIndex={-1} ref={headingRef}>How can we reach you?</h2>
        <p className={styles.hint}>We’ll email you to arrange a time. A phone number is optional.</p>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="consultation-name">Your name <span>*</span></label>
            <input id="consultation-name" name="name" type="text" autoComplete="name" placeholder="Your full name" maxLength={120} required />
          </div>
          <div className={styles.field}>
            <label htmlFor="consultation-email">Email address <span>*</span></label>
            <input id="consultation-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" maxLength={180} required />
          </div>
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="consultation-company">Business name <small>Optional</small></label>
            <input id="consultation-company" name="company" type="text" autoComplete="organization" placeholder="Your business or organisation" maxLength={180} />
          </div>
          <div className={styles.field}>
            <label htmlFor="consultation-phone">Phone / WhatsApp <small>Optional</small></label>
            <input id="consultation-phone" name="phone" type="tel" autoComplete="tel" placeholder="Include country code" maxLength={40} />
          </div>
        </div>
        <div className={styles.honeypot} aria-hidden="true"><label htmlFor="consultation-business-website">Leave this field empty</label><input id="consultation-business-website" name="businessWebsite" type="text" tabIndex={-1} autoComplete="off" /></div>
        <div className={styles.actions}>
          <button type="button" className={styles.backButton} onClick={() => setStep(1)}><ArrowLeft size={17} aria-hidden="true" /> Back</button>
          <button type="submit" className={styles.primaryButton} disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Send request"}<ArrowRight size={18} aria-hidden="true" /></button>
        </div>
        {message && <p className={styles.error} role="alert">{message}</p>}
        <p className={styles.privacy}>We’ll use your details to respond to your request. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      </fieldset>
    </form>
    <p className={styles.directEmail}>Prefer email? <a href="mailto:hello@madebysebi.com">hello@madebysebi.com</a></p>
  </section>;
}
