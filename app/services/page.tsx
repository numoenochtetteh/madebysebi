import { ActionLink } from "@/components/site/primitives";
import { PageHero, PageShell } from "@/components/site/content-layout";
import { ServiceGallery } from "@/components/services/service-gallery";

export default function ServicesPage() {
  return <PageShell>
    <PageHero eyebrow="WHAT WE DO" title="Digital solutions. Built around your business." description="Get online, turn an idea into useful software, or improve what you already have. We connect design, development and ongoing support around the way your business works.">
      <ActionLink href="/contact">Discuss your project</ActionLink><ActionLink href="/work" variant="secondary">See our work</ActionLink>
    </PageHero>
    <ServiceGallery />
  </PageShell>;
}
