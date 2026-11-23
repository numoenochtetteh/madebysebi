import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Website and project terms for working with MadeBySebi.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Website use",
    body: "The information on this website is provided for general information about MadeBySebi, our services and our work. You may browse and share links to the website, but you may not copy, resell or misuse our website content, branding, project materials or code without permission.",
  },
  {
    title: "Project quotations",
    body: "Website prices, timelines and deliverables depend on the project scope. A project only becomes confirmed when both sides agree to a written proposal, scope or similar project document and any required initial payment has been received.",
  },
  {
    title: "Payments and deposits",
    body: "Unless a different arrangement is agreed in writing, project payments may be split into stages and an initial deposit may be required before work begins. Any project-specific payment schedule in an accepted proposal takes priority over general information shown on this website.",
  },
  {
    title: "Client content and approvals",
    body: "Clients are responsible for providing accurate text, images, logos, account access and other materials needed for the project, and for confirming they have the right to use those materials. Timelines may change when required content, feedback or approvals are delayed.",
  },
  {
    title: "Revisions and scope changes",
    body: "Revisions included in a project are defined by the agreed scope. New pages, features, integrations, content or major direction changes requested outside that scope may require a revised timeline and additional fee before the extra work begins.",
  },
  {
    title: "Third-party services",
    body: "Projects may use third-party services such as hosting, domains, payment providers, analytics, email platforms, booking systems or APIs. Those services have their own terms, pricing and availability, and MadeBySebi cannot guarantee that a third-party service will always remain unchanged or available.",
  },
  {
    title: "Ownership and portfolio use",
    body: "Unless otherwise agreed in writing, final approved project deliverables are transferred or licensed to the client after the agreed project fees are paid. MadeBySebi may show completed public-facing work in our portfolio and case studies unless the client has requested confidentiality in writing.",
  },
  {
    title: "Cancellations and project pauses",
    body: "If a project is cancelled or paused, payment may still be due for work already completed, committed costs and any non-refundable third-party expenses. Specific cancellation terms can be included in the project proposal where needed.",
  },
  {
    title: "Liability",
    body: "We take reasonable care when designing, developing and launching websites. However, websites and third-party services can be affected by outages, browser changes, security incidents or external platform changes. Any project-specific warranties or support commitments must be agreed in writing.",
  },
  {
    title: "Governing terms",
    body: "MadeBySebi is based in Ghana. These website terms are intended to operate alongside any project-specific written agreement. If a signed proposal, contract or statement of work contains different terms, that project-specific document takes priority for that project.",
  },
];

export default function TermsPage() {
  return <LegalPage eyebrow="Legal · Terms" title={<>Terms &amp;<br />Conditions.</>}
    description="The general website and project terms that support clear expectations when working with MadeBySebi."
    sections={sections} ctaLabel="Project-specific terms"
    ctaTitle="Every project gets a clear scope before work begins." ctaAction="Start a project" />;
}
