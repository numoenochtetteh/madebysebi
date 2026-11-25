import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MadeBySebi handles information shared through this website.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information you give us",
    body: "When you contact MadeBySebi or submit a project enquiry, you may provide information such as your name, email address, company name, website, project budget, timeline and project details.",
  },
  {
    title: "How we use your information",
    body: "We use the information you provide to respond to enquiries, understand project requirements, prepare proposals, communicate about potential or active work, improve our services and protect the website from misuse.",
  },
  {
    title: "Website and technical data",
    body: "Our hosting and website infrastructure may process basic technical information such as IP address, browser type, device information, pages visited and security logs. This information is generally used for website delivery, reliability, security and performance.",
  },
  {
    title: "Sharing and service providers",
    body: "We do not sell personal information. We may use trusted service providers for website hosting, analytics, email, forms or other business operations. Those providers may process information only as needed to provide their services to us.",
  },
  {
    title: "How long we keep information",
    body: "We keep enquiry and project information only for as long as it is reasonably needed for communication, project administration, legal or accounting requirements, and legitimate business records.",
  },
  {
    title: "Your choices and rights",
    body: "You can ask us to correct or delete personal information we hold about you, subject to any legal or legitimate record-keeping requirements. MadeBySebi is based in Ghana and aims to handle personal information in line with applicable data-protection requirements, including Ghana's Data Protection Act, 2012 (Act 843), where applicable.",
  },
  {
    title: "International enquiries",
    body: "We work with clients in different countries. If you contact us from outside Ghana, your information may be processed in Ghana or by service providers in other countries as part of delivering the website and responding to your enquiry.",
  },
  {
    title: "Updates to this policy",
    body: "We may update this Privacy Policy when our services, website or legal requirements change. The latest version will always be published on this page.",
  },
];

export default function PrivacyPage() {
  return <LegalPage eyebrow="Legal · Privacy" title={<>Privacy<br />Policy.</>}
    description="A clear summary of what information this website may collect and how MadeBySebi uses it."
    sections={sections} ctaLabel="Questions about privacy?"
    ctaTitle="Contact us and we'll help with your request." ctaAction="Contact MadeBySebi" />;
}
