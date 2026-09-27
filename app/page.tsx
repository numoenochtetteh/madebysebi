import { GalleryHero } from "@/components/landing/gallery-hero";
import { ProcessSystem } from "@/components/landing/process-system";
import { ExpertiseSection } from "@/components/landing/expertise-section";
import { ServicesShowcase } from "@/components/landing/services-showcase";
import { WorkSection } from "@/components/landing/work-section";
// import { DevelopersSection } from "@/components/landing/developers-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <GalleryHero />
      <ProcessSystem />
      <ExpertiseSection />
      <ServicesShowcase />
      <WorkSection />

      {/* <DevelopersSection /> */}

      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
