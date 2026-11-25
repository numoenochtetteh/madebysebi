import type { Metadata } from "next";
import { ConsultationForm } from "@/components/consultation/consultation-form";
import styles from "@/components/consultation/consultation.module.css";

export const metadata: Metadata = {
  title: "Book a consultation",
  description: "Tell MadeBySebi about your website, application or business project. We'll get in touch to arrange a consultation.",
  alternates: { canonical: "/consultation" },
  openGraph: {
    title: "Book a consultation | MadeBySebi",
    description: "Tell us what you have in mind. We'll get in touch to arrange a conversation.",
    url: "/consultation",
  },
};

export default function ConsultationPage() {
  return <main className={styles.page}>
    <div className={`mbs-container ${styles.layout}`}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}><span className="ms-dot" aria-hidden="true" /> LET’S TALK</p>
        <h1>Let’s talk about<br /><span>what’s next.</span></h1>
        <p className={styles.lead}>Tell us what you’re building or looking to improve. We’ll review your request and email you to arrange a consultation.</p>
        <div className={styles.expectation}>
          <span className={styles.expectationMark} aria-hidden="true">✳</span>
          <p><strong>Just a conversation to start.</strong><br />Share what you know so far. You don’t need a finished brief or a fixed budget.</p>
        </div>
      </div>
      <ConsultationForm />
    </div>
  </main>;
}
