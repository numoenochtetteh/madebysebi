// import { Navigation } from "@/components/landing/navigation";

// import { ExperienceMarquee } from "@/components/landing/experience-marquee";
// import { StudioShowcase } from "@/components/landing/studio-showcase";
// import { ExpertiseSection } from "@/components/landing/expertise-section";
// import { WorkSection } from "@/components/landing/work-section";
// import { ServicesShowcase } from "@/components/landing/services-showcase";
// import { DevelopersSection } from "@/components/landing/developers-section";
// import { TestimonialsSection } from "@/components/landing/testimonials-section";
// import { CtaSection } from "@/components/landing/cta-section";
// import { ProjectContact } from "@/components/landing/project-contact";
// import { FooterSection } from "@/components/landing/footer-section";
// // import { AgencyHeroSection } from "@/components/landing/agency-hero-section";
// import { ProcessSystem } from "@/components/landing/process-system";
// // import { AgencyHero } from "@/components/landing/agency-hero";
// import { GalleryHero } from "@/components/landing/gallery-hero";
// export default function Home() {
//   return (
//     <main className="relative min-h-screen overflow-x-hidden noise-overlay">
//       {/* Navigation */}
//       <Navigation />
//       <GalleryHero />

//       {/* Hero */}
//       {/* <AgencyHero /> */}

//       {/* Experience / Client Marquee */}
//       {/* <ExperienceMarquee /> */}
//       <ProcessSystem />

//       {/* Studio Introduction */}
//       {/* <StudioShowcase /> */}

//       {/* Expertise */}
//       <ExpertiseSection />

//       {/* Selected Work */}
//       <WorkSection />

//       {/* Services */}
//       <ServicesShowcase />

//       {/* Development */}
//       <DevelopersSection />

//       {/* Testimonials */}
//       <TestimonialsSection />

//       {/* CTA */}
//       <CtaSection />

//       {/* Project Enquiry Form */}
//       {/* <ProjectContact /> */}

//       {/* Footer */}
//       <FooterSection />
//     </main>
//   );
// }
import { Navigation } from "@/components/landing/navigation";
import { GalleryHero } from "@/components/landing/gallery-hero";
import { ProcessSystem } from "@/components/landing/process-system";
import { ExpertiseSection } from "@/components/landing/expertise-section";
import { ServicesShowcase } from "@/components/landing/services-showcase";
import { WorkSection } from "@/components/landing/work-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <GalleryHero />

      {/* Our Process */}
      <ProcessSystem />

      {/* Expertise Overview */}
      <ExpertiseSection />

      {/* Detailed Services */}
      <ServicesShowcase />

      {/* Selected Work / Case Studies */}
      <WorkSection />

      {/* Development / Technical Capability */}
      <DevelopersSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <CtaSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
