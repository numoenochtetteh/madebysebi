"use client";

import { useEffect, useState } from "react";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MessageSquare,
} from "lucide-react";

const services = [
  "Web Design & Development",
  "UX/UI & Product Design",
  "Branding & Visual Design",
  "SEO & GEO",
  "Digital Marketing",
  "Website Consultation",
  "Other",
];

const faqs = [
  {
    question: "How long does a website project usually take?",
    answer:
      "Most business websites take around 2–6 weeks depending on the size, complexity, content and how quickly feedback is provided. Larger websites or projects with custom functionality may take longer.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Projects currently start from GH₵3,000. The final cost depends on the number of pages, design requirements, functionality, integrations and overall scope. International projects can also be quoted in USD or GBP.",
  },
  {
    question: "We have a limited budget. Can you still work with us?",
    answer:
      "Yes. If your budget is limited, we can discuss the most important parts of the project first and recommend a realistic scope. The goal is to build what your business genuinely needs without adding unnecessary features.",
  },
  {
    question: "Do you outsource any work?",
    answer:
      "Our core website design and development work is handled by the Numo Digital team. If a project requires a specialist service outside our core expertise, we will always communicate that clearly before involving anyone else.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide web design and development, UX/UI design, branding and visual design, SEO and GEO, digital marketing, website consultation, performance improvements and ongoing digital support.",
  },
  {
    question: "We're not based in Ghana. Does that matter?",
    answer:
      "Not at all. Numo Digital is based in Accra, Ghana, but we work with businesses internationally. Meetings, project updates, reviews and delivery can all be handled remotely.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We normally require a 50% deposit before starting a project, with the remaining balance paid according to the agreed project milestones or before final delivery. Larger projects can be structured into additional milestones.",
  },
  {
    question: "How many meetings can we have?",
    answer:
      "We keep communication flexible. Projects normally include an initial discovery discussion, project reviews and any necessary meetings required to keep the work moving clearly and efficiently.",
  },
  {
    question: "Can we arrange a call before starting?",
    answer:
      "Absolutely. We can arrange a call to understand your business, what you are trying to achieve and whether Numo Digital is the right fit before you commit to a project.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />

      <main className="contact-page">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="contact-hero">
          <div className="contact-orb contact-orb-lime" />
          <div className="contact-orb contact-orb-blue" />

          <div className="contact-hero-inner">
            <span className="contact-badge" data-reveal>
              <span />
              CONTACT
            </span>

            <h1 data-reveal>
              Let&apos;s build
              <br />
              something useful.
            </h1>

            <div className="contact-hero-bottom" data-reveal>
              <p>
                Tell us what you&apos;re building, what needs improving or where
                your business is trying to go. We&apos;ll help you figure out
                the right next step.
              </p>

              <div className="contact-availability">
                <span />
                Available for new projects
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT FORM AREA
        ===================================================== */}

        <section className="contact-main">
          <div className="contact-main-inner">
            <div className="contact-left" data-reveal>
              <div className="contact-section-label">
                <span>01</span>
                START A PROJECT
              </div>

              <h2>
                Tell us a little
                <br />
                about your project.
              </h2>

              <p className="contact-left-copy">
                You don&apos;t need to have everything figured out yet. Give us
                the basics and we can take it from there.
              </p>

              <div className="contact-points">
                <div>
                  <span className="contact-point-icon">
                    <Check size={16} />
                  </span>

                  <p>
                    Projects start from
                    <strong> GH₵3,000</strong>
                  </p>
                </div>

                <div>
                  <span className="contact-point-icon">
                    <Check size={16} />
                  </span>

                  <p>
                    <strong>50% deposit</strong> to begin a project
                  </p>
                </div>

                <div>
                  <span className="contact-point-icon">
                    <Check size={16} />
                  </span>

                  <p>Clear scope, process and communication</p>
                </div>

                <div>
                  <span className="contact-point-icon">
                    <Check size={16} />
                  </span>

                  <p>
                    <strong>Based in Accra</strong> · Working with clients
                    worldwide
                  </p>
                </div>
              </div>

              <p className="contact-worldwide-note">
                International projects are welcome. Location is not a barrier;
                projects can be quoted in USD or GBP where appropriate.
              </p>

              <div className="direct-contact">
                <span>Prefer email?</span>

                <a href="mailto:hello@numodigital.com">
                  hello@numodigital.com
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div id="contact-form" className="contact-form-card" data-reveal>
              <div className="contact-form-top">
                <div>
                  <span>PROJECT ENQUIRY</span>
                  <strong>Tell us what you need.</strong>
                </div>

                <MessageSquare size={22} />
              </div>

              <form>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">FULL NAME *</label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">EMAIL *</label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="company">COMPANY / BUSINESS</label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Business name"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="website">CURRENT WEBSITE</label>

                    <input
                      id="website"
                      type="text"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="service">WHAT DO YOU NEED HELP WITH? *</label>

                  <select id="service" required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option value={service} key={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="budget">PROJECT BUDGET</label>

                    <select id="budget" defaultValue="">
                      <option value="" disabled>
                        Select budget
                      </option>
                      <option>GH₵3,000 – GH₵5,000</option>
                      <option>GH₵5,000 – GH₵10,000</option>
                      <option>GH₵10,000 – GH₵20,000</option>
                      <option>GH₵20,000+</option>
                      <option>
                        International project — quote in USD / GBP
                      </option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="timeline">IDEAL TIMELINE</label>

                    <select id="timeline" defaultValue="">
                      <option value="" disabled>
                        Select timeline
                      </option>
                      <option>As soon as possible</option>
                      <option>2–4 weeks</option>
                      <option>1–2 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">TELL US ABOUT THE PROJECT *</label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="What are you trying to build or improve?"
                    required
                  />
                </div>

                <button type="submit" className="contact-submit">
                  Send enquiry
                  <span>
                    <ArrowRight size={18} />
                  </span>
                </button>

                <p className="contact-privacy-note">
                  By sending an enquiry, you agree that Numo Digital may use the
                  information provided to respond to your project request. See
                  our
                  <a href="/privacy"> Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="contact-faq">
          <div className="contact-faq-inner">
            <div className="contact-faq-heading" data-reveal>
              <span className="contact-faq-eyebrow">
                <i />
                ANYTHING ELSE?
              </span>

              <h2>The answers to your questions.</h2>

              <p>
                A few things clients usually want to know before starting a
                project with us.
              </p>

              <a href="#contact-form" className="contact-faq-cta">
                Start a project
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="contact-faq-list" data-reveal>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    className={`contact-faq-item ${isOpen ? "is-open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="contact-faq-question"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>

                      <span className="contact-faq-arrow">
                        <ArrowUpRight size={15} />
                      </span>
                    </button>

                    <div className="contact-faq-answer">
                      <div>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL
        ===================================================== */}

        <section className="contact-final">
          <div className="contact-final-inner" data-reveal>
            <div className="contact-final-glow" />

            <div>
              <span>NUMO DIGITAL</span>

              <h2>
                Your next project
                <br />
                can start here.
              </h2>
            </div>

            <a href="mailto:hello@numodigital.com">
              Email us
              <span>
                <Mail size={20} />
              </span>
            </a>
          </div>
        </section>

        <style jsx global>{`
          .contact-page {
            overflow: hidden;
            background: #f4f4f1;
            color: #111;
          }

          [data-reveal] {
            opacity: 0;
            transform: translateY(34px);
            transition:
              opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          }

          [data-reveal].is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* =====================================================
             HERO
          ===================================================== */

          .contact-hero {
            position: relative;
            padding: 155px 28px 100px;
            overflow: hidden;
          }

          .contact-hero-inner {
            position: relative;
            z-index: 4;
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .contact-badge {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            border: 1px solid #d4cec1;
            border-radius: 6px;
            padding: 8px 12px;
            color: #5f574f;
            font-family:
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.16em;
          }

          .contact-badge > span {
            width: 8px;
            height: 8px;
            border-radius: 2px;
            background: #d9ff25;
          }

          .contact-hero h1 {
            max-width: 1080px;
            margin: 38px 0 0;
            font-size: clamp(65px, 8vw, 125px);
            font-weight: 650;
            line-height: 0.85;
            letter-spacing: -0.075em;
          }

          .contact-hero-bottom {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 60px;
            margin-top: 50px;
          }

          .contact-hero-bottom > p {
            max-width: 600px;
            margin: 0;
            color: #68615a;
            font-size: 16px;
            line-height: 1.65;
          }

          .contact-availability {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid #d0cdc6;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.42);
            padding: 13px 17px;
            font-size: 11px;
          }

          .contact-availability > span {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: #d9ff25;
            box-shadow: 0 0 0 6px rgba(217, 255, 37, 0.15);
          }

          .contact-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(115px);
            pointer-events: none;
            animation: contactOrb 8s ease-in-out infinite;
          }

          .contact-orb-lime {
            top: 140px;
            left: -100px;
            width: 460px;
            height: 460px;
            background: rgba(217, 255, 37, 0.2);
          }

          .contact-orb-blue {
            top: 250px;
            right: -100px;
            width: 480px;
            height: 480px;
            background: rgba(103, 130, 255, 0.14);
            animation-delay: -4s;
          }

          @keyframes contactOrb {
            50% {
              transform: translate3d(35px, -25px, 0) scale(1.08);
            }
          }

          /* =====================================================
             MAIN CONTACT
          ===================================================== */

          .contact-main {
            padding: 30px 28px 140px;
          }

          .contact-main-inner {
            display: grid;
            width: min(1350px, 100%);
            margin: 0 auto;
            grid-template-columns: 0.75fr 1.25fr;
            gap: 70px;
            align-items: start;
          }

          .contact-section-label {
            display: flex;
            gap: 16px;
            color: #77716a;
            font-family: ui-monospace, monospace;
            font-size: 9px;
            letter-spacing: 0.12em;
          }

          .contact-section-label > span {
            color: #9aac00;
          }

          .contact-left h2 {
            margin: 35px 0 0;
            font-size: clamp(50px, 5vw, 80px);
            font-weight: 600;
            line-height: 0.9;
            letter-spacing: -0.065em;
          }

          .contact-left-copy {
            max-width: 500px;
            margin: 30px 0 0;
            color: #69625c;
            font-size: 14px;
            line-height: 1.7;
          }

          .contact-points {
            display: grid;
            gap: 14px;
            margin-top: 40px;
          }

          .contact-points > div {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .contact-points p {
            margin: 0;
            color: #615b55;
            font-size: 12px;
          }

          .contact-point-icon {
            display: grid;
            width: 31px;
            height: 31px;
            flex-shrink: 0;
            place-items: center;
            border-radius: 9px;
            background: #d9ff25;
          }

          .contact-worldwide-note {
            max-width: 520px;
            margin: 24px 0 0;
            padding: 14px 16px;
            border: 1px solid #d9d5cc;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.48);
            color: #69635e;
            font-size: 12px;
            line-height: 1.6;
          }

          .direct-contact {
            display: flex;
            margin-top: 55px;
            flex-direction: column;
          }

          .direct-contact > span {
            color: #8b857f;
            font-family: ui-monospace, monospace;
            font-size: 8px;
            letter-spacing: 0.1em;
          }

          .direct-contact > a {
            display: inline-flex;
            align-self: flex-start;
            align-items: center;
            gap: 15px;
            margin-top: 10px;
            color: #111;
            font-size: 17px;
            text-decoration: none;
          }

          /* =====================================================
             FORM
          ===================================================== */

          .contact-form-card {
            border: 1px solid #d5d1c9;
            border-radius: 28px;
            background: #ebe9e3;
            padding: 32px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.04);
          }

          .contact-form-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 35px;
          }

          .contact-form-top > div {
            display: flex;
            flex-direction: column;
          }

          .contact-form-top span {
            color: #8a847d;
            font-family: ui-monospace, monospace;
            font-size: 8px;
            letter-spacing: 0.12em;
          }

          .contact-form-top strong {
            margin-top: 7px;
            font-size: 20px;
          }

          .contact-form-top > svg {
            width: 48px;
            height: 48px;
            border-radius: 14px;
            background: #d9ff25;
            padding: 13px;
          }

          .contact-form-card form {
            display: grid;
            gap: 18px;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }

          .form-field {
            display: flex;
            flex-direction: column;
          }

          .form-field label {
            margin-bottom: 8px;
            color: #706a63;
            font-family: ui-monospace, monospace;
            font-size: 8px;
            font-weight: 700;
            letter-spacing: 0.1em;
          }

          .form-field input,
          .form-field select,
          .form-field textarea {
            width: 100%;
            border: 1px solid #d3d0c9;
            outline: none;
            border-radius: 12px;
            background: #f8f7f3;
            padding: 15px 16px;
            color: #111;
            font: inherit;
            font-size: 12px;
            transition:
              border-color 0.25s ease,
              box-shadow 0.25s ease,
              background 0.25s ease;
          }

          .form-field input,
          .form-field select {
            height: 52px;
          }

          .form-field textarea {
            min-height: 150px;
            resize: vertical;
          }

          .form-field input:focus,
          .form-field select:focus,
          .form-field textarea:focus {
            border-color: #a5ad65;
            background: white;
            box-shadow: 0 0 0 4px rgba(217, 255, 37, 0.11);
          }

          .contact-privacy-note {
            margin: 14px 4px 0;
            color: #7a746e;
            font-size: 10px;
            line-height: 1.55;
          }

          .contact-privacy-note a {
            color: #111;
            text-decoration: underline;
            text-underline-offset: 3px;
          }

          .contact-submit {
            display: flex;
            width: 100%;
            height: 62px;
            align-items: center;
            justify-content: space-between;
            margin-top: 5px;
            border: 0;
            border-radius: 999px;
            background: #111;
            padding: 5px 6px 5px 25px;
            color: white;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
          }

          .contact-submit > span {
            display: grid;
            width: 50px;
            height: 50px;
            place-items: center;
            border-radius: 50%;
            background: #d9ff25;
            color: #111;
            transition: transform 0.3s ease;
          }

          .contact-submit:hover > span {
            transform: rotate(-45deg);
          }

          /* =====================================================
             FAQ
          ===================================================== */

          .contact-faq {
            padding: 120px 28px 150px;
            background: #f4f4f1;
          }

          .contact-faq-inner {
            display: grid;
            width: min(1350px, 100%);
            margin: 0 auto;
            grid-template-columns: 0.72fr 1.28fr;
            gap: 95px;
            align-items: start;
          }

          .contact-faq-heading {
            position: sticky;
            top: 120px;
          }

          .contact-faq-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            color: #5f5a54;
            font-family: ui-monospace, monospace;
            font-size: 8px;
            font-weight: 700;
            letter-spacing: 0.12em;
          }

          .contact-faq-eyebrow i {
            display: block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #111;
          }

          .contact-faq-heading h2 {
            max-width: 500px;
            margin: 22px 0 0;
            font-size: clamp(50px, 5.4vw, 82px);
            font-weight: 600;
            line-height: 0.91;
            letter-spacing: -0.065em;
          }

          .contact-faq-heading > p {
            max-width: 400px;
            margin: 25px 0 0;
            color: #6b655f;
            font-size: 13px;
            line-height: 1.7;
          }

          .contact-faq-cta {
            display: inline-flex;
            align-items: center;
            gap: 18px;
            margin-top: 28px;
            border-radius: 999px;
            background: #d9ff25;
            padding: 12px 15px 12px 18px;
            color: #111;
            font-size: 11px;
            font-weight: 650;
            text-decoration: none;
            transition:
              transform 0.25s ease,
              background 0.25s ease;
          }

          .contact-faq-cta:hover {
            background: #cfff00;
            transform: translateY(-2px);
          }

          .contact-faq-list {
            display: grid;
            gap: 10px;
          }

          .contact-faq-item {
            overflow: hidden;
            border: 1px solid transparent;
            border-radius: 22px;
            background: #e9e8e4;
            transition:
              background 0.3s ease,
              border-color 0.3s ease;
          }

          .contact-faq-item.is-open {
            border-color: #d5d2ca;
            background: #efeee9;
          }

          .contact-faq-question {
            display: flex;
            width: 100%;
            min-height: 82px;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
            border: 0;
            background: transparent;
            padding: 20px 20px 20px 25px;
            color: #111;
            text-align: left;
            cursor: pointer;
          }

          .contact-faq-question > span:first-child {
            font-size: clamp(17px, 1.45vw, 21px);
            font-weight: 550;
            letter-spacing: -0.025em;
          }

          .contact-faq-arrow {
            display: grid;
            width: 34px;
            height: 34px;
            flex: 0 0 34px;
            place-items: center;
            border-radius: 50%;
            background: #111;
            color: #fff;
            transition:
              transform 0.35s ease,
              background 0.35s ease;
          }

          .contact-faq-item.is-open .contact-faq-arrow {
            background: #d9ff25;
            color: #111;
            transform: rotate(90deg);
          }

          .contact-faq-answer {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .contact-faq-item.is-open .contact-faq-answer {
            grid-template-rows: 1fr;
          }

          .contact-faq-answer > div {
            overflow: hidden;
          }

          .contact-faq-answer p {
            max-width: 760px;
            margin: 0;
            padding: 0 70px 26px 25px;
            color: #5f5a55;
            font-size: 13px;
            line-height: 1.75;
          }

          /* =====================================================
             FINAL
          ===================================================== */

          .contact-final {
            padding: 100px 28px 70px;
          }

          .contact-final-inner {
            position: relative;
            display: flex;
            width: min(1350px, 100%);
            min-height: 520px;
            margin: 0 auto;
            align-items: flex-end;
            justify-content: space-between;
            gap: 50px;
            overflow: hidden;
            border-radius: 34px;
            background: #dedbd3;
            padding: 60px;
          }

          .contact-final-glow {
            position: absolute;
            top: -120px;
            right: 4%;
            width: 490px;
            height: 490px;
            border-radius: 50%;
            background: rgba(217, 255, 37, 0.8);
            filter: blur(100px);
          }

          .contact-final-inner > div:not(.contact-final-glow) {
            position: relative;
            z-index: 3;
          }

          .contact-final-inner > div > span {
            font-family: ui-monospace, monospace;
            font-size: 8px;
            letter-spacing: 0.14em;
          }

          .contact-final h2 {
            margin: 25px 0 0;
            font-size: clamp(62px, 7vw, 108px);
            font-weight: 600;
            line-height: 0.86;
            letter-spacing: -0.07em;
          }

          .contact-final-inner > a {
            position: relative;
            z-index: 3;
            display: flex;
            flex-shrink: 0;
            align-items: center;
            gap: 30px;
            border-radius: 999px;
            background: #111;
            padding: 7px 8px 7px 27px;
            color: white;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
          }

          .contact-final-inner > a > span {
            display: grid;
            width: 54px;
            height: 54px;
            place-items: center;
            border-radius: 50%;
            background: #d9ff25;
            color: #111;
          }

          /* =====================================================
             TABLET
          ===================================================== */

          @media (max-width: 900px) {
            .contact-hero-bottom {
              align-items: flex-start;
              flex-direction: column;
            }

            .contact-main-inner {
              grid-template-columns: 1fr;
            }

            .contact-faq-inner {
              grid-template-columns: 1fr;
              gap: 55px;
            }

            .contact-faq-heading {
              position: static;
            }

            .contact-final-inner {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-end;
            }
          }

          /* =====================================================
             MOBILE
          ===================================================== */

          @media (max-width: 600px) {
            .contact-hero {
              padding: 105px 14px 70px;
            }

            .contact-badge {
              padding: 6px 9px;
              font-size: 7px;
            }

            .contact-hero h1 {
              font-size: 53px;
              line-height: 0.88;
            }

            .contact-hero-bottom {
              margin-top: 32px;
              gap: 28px;
            }

            .contact-hero-bottom > p {
              font-size: 14px;
            }

            .contact-main {
              padding: 20px 12px 90px;
            }

            .contact-main-inner {
              gap: 55px;
            }

            .contact-left h2 {
              font-size: 48px;
            }

            .form-row {
              grid-template-columns: 1fr;
            }

            .contact-form-card {
              border-radius: 20px;
              padding: 20px;
            }

            .contact-faq {
              padding: 85px 12px 100px;
            }

            .contact-faq-inner {
              gap: 40px;
            }

            .contact-faq-heading h2 {
              font-size: 48px;
            }

            .contact-faq-question {
              min-height: 70px;
              gap: 15px;
              padding: 17px 15px 17px 18px;
            }

            .contact-faq-question > span:first-child {
              font-size: 16px;
            }

            .contact-faq-arrow {
              width: 31px;
              height: 31px;
              flex-basis: 31px;
            }

            .contact-faq-answer p {
              padding: 0 18px 22px;
              font-size: 12px;
            }

            .contact-final {
              padding: 80px 12px 50px;
            }

            .contact-final-inner {
              min-height: 470px;
              border-radius: 22px;
              padding: 28px 22px;
            }

            .contact-final h2 {
              font-size: 52px;
            }

            .contact-final-inner > a {
              width: 100%;
              justify-content: space-between;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .contact-orb {
              animation: none !important;
            }

            [data-reveal] {
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
      </main>

      <FooterSection />
    </>
  );
}
