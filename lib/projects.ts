export type CaseStudyProject = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  industry: string;
  type: string;
  year: string;
  location: string;
  summary: string;
  headline: string;
  intro: string;
  image: string;
  video?: string;
  accent: string;
  liveUrl?: string;
  sourceUrl?: string;
  services: string[];
  challengeTitle: string;
  challenge: string[];
  solutionTitle: string;
  solution: string[];
  proof: { value: string; label: string; note?: string }[];
  outcomeTitle: string;
  outcome: string;
  gallery: string[];
  wideGalleryFirst?: boolean;
  operationsTitle?: string;
  operationsCopy?: string;
  operationsImage?: string;
  connectLabel?: string;
  connectHeading?: string;
  connectCopy?: string;
  socialChannels?: {
    platform: string;
    handle: string;
    note: string;
    url?: string;
  }[];
};

export const caseStudyProjects: CaseStudyProject[] = [
  {
    slug: "pengtresses",
    number: "01",
    title: "Forever Peng Hair",
    shortTitle: "Forever Peng Hair",
    industry: "Beauty",
    type: "Booking platform",
    year: "2026",
    location: "North London, UK",
    summary:
      "A premium website and booking system that turns service discovery, availability and deposits into one clear customer journey.",
    headline: "A beauty business experience built around booking, not just browsing.",
    intro:
      "Forever Peng needed more than a polished website. The digital experience had to help clients understand services, choose an available slot, complete a consultation and secure the appointment with a deposit — while giving the owner a practical way to manage availability and incoming bookings.",
    image: "/showcase/3.png",
    video: "/expertise/111.mp4",
    accent: "#ff5b2c",
    liveUrl: "https://foreverpenghair.com",
    sourceUrl: "https://foreverpenghair.com/booking",
    services: [
      "Digital strategy",
      "Website design & development",
      "Booking platform",
      "Stripe deposit flow",
      "Email automation",
      "Admin dashboard",
    ],
    challengeTitle: "Turn a high-touch service business into a simple digital journey.",
    challenge: [
      "Clients needed a clearer way to compare services, understand policies and choose the right appointment before messaging the business.",
      "Availability had to stay controlled by the owner so customers could only book released dates and times.",
      "The booking flow also needed to collect consultation details, handle a £20 deposit and reduce the manual back-and-forth around confirmations.",
    ],
    solutionTitle: "We connected the marketing site and booking operations into one system.",
    solution: [
      "The public experience presents services, prices, durations, policies and portfolio content in a premium editorial layout.",
      "A guided booking flow moves customers from service selection to available slots, consultation details and deposit payment.",
      "The owner dashboard supports released availability and booking review, while confirmations and calendar links help keep both sides organised.",
    ],
    proof: [
      { value: "£20", label: "deposit built into the booking flow" },
      { value: "Live", label: "owner-controlled availability" },
      { value: "Auto", label: "booking confirmations and calendar links" },
      { value: "Admin", label: "booking and availability dashboard" },
    ],
    outcomeTitle: "A website that supports the service operation behind the brand.",
    outcome:
      "The final experience gives Forever Peng a professional customer journey from discovery to confirmed appointment. Instead of treating the website and booking process as separate tools, the system brings them together around the way the business actually works.",
    gallery: [
      "/showcase/3.png",
      "/showcase/2.png",
      "/showcase/1.png",
    ],
    operationsTitle: "Booking operations made visible.",
    operationsCopy:
      "The admin view gives the owner a practical place to release appointment slots and review booking requests. Client-identifying information is redacted in this public case study.",
    operationsImage: "/case-studies/pengtresses/booking-dashboard-redacted.jpg",
    socialChannels: [
      {
        platform: "Instagram",
        handle: "@foreverpeng.hair",
        note: "Visual portfolio, service discovery and premium brand storytelling.",
        url: "https://www.instagram.com/foreverpeng.hair/",
      },
      {
        platform: "TikTok",
        handle: "@foreverpeng.hair",
        note: "Short-form transformations and content that helps the brand reach new clients.",
        url: "https://www.tiktok.com/@foreverpeng.hair",
      },
      {
        platform: "Facebook",
        handle: "foreverpeng.hair",
        note: "Local discovery, enquiries and another trust touchpoint for potential customers.",
        url: "https://web.facebook.com/profile.php?id=61581558652845",
      },
    ],
  },
  {
    slug: "power-electrode-ltd",
    number: "02",
    title: "Power Electrode Ltd",
    shortTitle: "Power Electrode Ltd",
    industry: "Manufacturing",
    type: "Website + digital presence",
    year: "2026",
    location: "Ghana",
    summary:
      "A manufacturing website designed to explain products clearly, build trust fast and support enquiries from industrial buyers across Ghana.",
    headline: "A clearer digital presence for a Ghanaian welding electrode manufacturer.",
    intro:
      "Power Electrode Ltd needed a website that could do more than look professional. It had to explain what the company manufactures, why its electrodes are dependable, and how welders, fabricators, contractors and industrial buyers can quickly move from first impression to enquiry.",
    image: "/case-studies/power-electrode/03-values.png",
    video: "/case-studies/power-electrode/hero-video.mp4",
    accent: "#ff6a00",
    liveUrl: "https://www.powerelectrodeltd.com/",
    sourceUrl: "https://www.powerelectrodeltd.com/",
    services: [
      "Website strategy",
      "Frontend development",
      "SEO foundation",
      "Product presentation",
      "Social media management",
      "Growth strategy",
    ],
    challengeTitle: "Make an industrial business feel credible, clear and easy to contact online.",
    challenge: [
      "The business needed a stronger online presence that could present its products and manufacturing capability in a way that felt trustworthy to buyers.",
      "Potential customers had to understand the value quickly — from product quality and local manufacturing to practical reasons for choosing the company.",
      "The website also needed to support the wider brand ecosystem, giving social campaigns and search traffic a clear destination that converts attention into quote requests and conversations.",
    ],
    solutionTitle: "We shaped the experience around product confidence, manufacturing proof and buyer clarity.",
    solution: [
      "The site leads with stronger messaging, confident layout decisions and clear sections that explain the company, its products and its manufacturing process in plain language.",
      "Service and product content were organised so visitors can move naturally from overview to quality signals, process information and enquiry paths.",
      "Responsive implementation, SEO-ready structure and connected social touchpoints give the company a better foundation for visibility, credibility and future growth campaigns.",
    ],
    proof: [
      { value: "Live", label: "production website on the company domain" },
      { value: "SEO", label: "search-ready structure and metadata foundation" },
      { value: "Responsive", label: "content designed to work across desktop and mobile" },
      { value: "Social", label: "connected presence across website and key platforms" },
    ],
    outcomeTitle: "A stronger digital front for product trust, enquiries and long-term growth.",
    outcome:
      "Power Electrode now has a clearer place to present its value online — one that supports product understanding, manufacturing credibility and practical buyer action. Rather than acting as a static brochure, the website works as a digital sales and trust asset for the business.",
    gallery: [
      "/case-studies/power-electrode/01-about.png",
      "/case-studies/power-electrode/02-process.png",
      "/case-studies/power-electrode/03-values.png",
      "/case-studies/power-electrode/04-capabilities.png",
    ],
    socialChannels: [
      {
        platform: "Facebook",
        handle: "Power Electrode Ltd",
        note: "Company updates, product education and campaign traffic for customers in Ghana.",
        url: "https://web.facebook.com/profile.php?id=61594163047785",
      },
      {
        platform: "Instagram",
        handle: "@powerelectrode",
        note: "A visual channel for product communication, manufacturing content and brand visibility.",
        url: "https://www.instagram.com/powerelectrode/",
      },
      {
        platform: "LinkedIn",
        handle: "Power Electrode Ltd",
        note: "Professional credibility and B2B visibility for partners, buyers and industry contacts.",
        url: "https://www.linkedin.com/in/power-electrode-ltd-55989742b/",
      },
    ],
  },
  {
    slug: "total-logistics",
    number: "03",
    title: "Total Logistics",
    shortTitle: "Total Logistics",
    industry: "Logistics",
    type: "Business website",
    year: "2026",
    location: "Ghana / West Africa",
    summary:
      "A logistics website built to explain shipping services clearly and make import and export enquiries across Ghana easier to start.",
    headline: "A freight website built around clarity, trust and moving goods in and out of Ghana.",
    intro:
      "Total Logistics needed a business website that communicates what the company actually helps customers do: move cargo in and out of Ghana with confidence. The experience had to present sea, air and road services clearly, support trust from the first screen, and make it easy for clients to reach the team.",
    image: "/case-studies/total-logistics/05-ship-hero.jpg",
    video: "/expertise/6.mp4",
    accent: "#2d7dff",
    liveUrl: "https://totallog.org",
    services: [
      "Website strategy",
      "Responsive development",
      "Service architecture",
      "Conversion copy",
      "Trust-led UI",
    ],
    challengeTitle: "Explain a broad logistics offering without making the website feel heavy or confusing.",
    challenge: [
      "Potential customers needed to understand the company's freight and shipping offer quickly, especially around cargo movement into Ghana, out of Ghana and across regional routes.",
      "The business also needed a cleaner way to present its services, branches and contact routes so prospects could move from browsing to enquiry with less friction.",
      "Because trust matters in logistics, the digital experience had to feel dependable, informative and easy to use on both desktop and mobile.",
    ],
    solutionTitle: "We built the site around service visibility, stronger messaging and direct enquiry routes.",
    solution: [
      "The homepage and service content were structured to communicate shipping, freight forwarding and customs-related support in a more immediate and client-friendly way.",
      "Visual sections, freight cards and service highlights help customers scan the offer fast instead of reading through dense blocks of text.",
      "The experience keeps contact details visible and clear, reinforcing that the website is there to start real business conversations, not just display company information.",
    ],
    proof: [
      { value: "Sea · Air · Road", label: "core freight services presented clearly" },
      { value: "3", label: "branch locations surfaced on the website" },
      { value: "4", label: "direct phone lines shared for customer enquiries" },
      { value: "Email", label: "single clear enquiry address for freight requests" },
    ],
    outcomeTitle: "A stronger first impression for a shipping and logistics company customers need to trust.",
    outcome:
      "The final result gives Total Logistics a clearer and more dependable online presence — one that helps prospects understand the company's offer, trust its capability and contact the team about shipments moving into Ghana, out of Ghana or across West African routes.",
    gallery: [
      "/case-studies/total-logistics/01-services.png",
      "/case-studies/total-logistics/03-export-services.png",
      "/case-studies/total-logistics/04-service-cards.png",
    ],
    wideGalleryFirst: false,
    connectLabel: "CONTACT",
    connectHeading: "Clear contact routes for import, export and freight enquiries.",
    connectCopy:
      "The website keeps business contact information visible so potential clients can easily reach the team about shipping goods into Ghana, moving cargo out of Ghana, or coordinating wider logistics support.",
    socialChannels: [
      {
        platform: "Email",
        handle: "total@totallog.org",
        note: "Main contact for freight, shipping and logistics enquiries.",
        url: "mailto:total@totallog.org",
      },
      {
        platform: "Phone",
        handle: "+233 30 320 0123 · +233 30 320 0559 · +233 30 320 0627 · +233 30 320 0887",
        note: "Mon–Fri, 9:00 AM – 5:00 PM",
        url: "tel:+233303200123",
      },
      {
        platform: "Locations",
        handle: "Tema (Head Office) · East Legon · Takoradi",
        note: "Branch presence highlighted for stronger local trust and accessibility.",
      },
    ],
  },
  {
    slug: "numo-sebi",
    number: "04",
    title: "NUMO & SEBI",
    shortTitle: "NUMO & SEBI",
    industry: "E-commerce",
    type: "Jewellery storefront",
    year: "2026",
    location: "Digital",
    summary:
      "A premium jewellery e-commerce concept that combines editorial storytelling, product detail and a clean shopping flow.",
    headline: "A jewellery shopping experience designed to make the brand feel premium and the products feel desirable.",
    intro:
      "NUMO & SEBI was approached as more than a simple product grid. The goal was to shape a refined e-commerce experience for a jewellery brand — one that sells through mood, presentation and clarity, while still making it easy for customers to browse pieces, view details and move through checkout with confidence.",
    image: "/case-studies/numo-sebi/04-editorial.webp",
    video: "/case-studies/numo-sebi/hero-video.mp4",
    accent: "#c8bbff",
    liveUrl: "https://jewelry-store-numo-sebi-two.vercel.app",
    services: [
      "Art direction",
      "E-commerce UI",
      "Frontend development",
      "Responsive design",
      "Product presentation",
    ],
    challengeTitle: "Create a jewellery storefront that feels luxurious while still selling clearly.",
    challenge: [
      "Jewellery needs to be presented with care, so the interface had to support strong product imagery and brand storytelling without overwhelming the pieces themselves.",
      "The shopping experience also needed to balance emotional brand presentation with practical e-commerce moments like product detail, quantity control and checkout flow.",
      "Every part of the UI had to feel premium, restrained and intentional — giving customers confidence in both the brand and the buying journey.",
    ],
    solutionTitle: "We combined editorial direction with a clear commerce structure.",
    solution: [
      "A large-scale visual system gives the brand space to feel elevated, using campaign-led imagery and clean typography to make the storefront feel curated instead of generic.",
      "Collection browsing, product detail pages and checkout screens are designed to keep shopping intuitive while still preserving the premium tone of the brand.",
      "The end result behaves like a real e-commerce storefront: attractive enough to build desire, but structured enough to support product discovery and purchase intent.",
    ],
    proof: [
      { value: "Editorial", label: "campaign-led visual direction for the storefront" },
      { value: "Product", label: "detailed product page with material, sizing and quantity controls" },
      { value: "Checkout", label: "clear customer, shipping and order summary flow" },
      { value: "Responsive", label: "shopping experience designed across screen sizes" },
    ],
    outcomeTitle: "A jewellery commerce experience that feels polished enough to sell the brand, not just the product.",
    outcome:
      "NUMO & SEBI demonstrates how a jewellery store can feel premium online while still supporting real buying behaviour. It gives the brand a stronger digital identity, better product presentation and a cleaner path from discovery to purchase.",
    gallery: [
      "/case-studies/numo-sebi/04-editorial.webp",
      "/case-studies/numo-sebi/01-product-page.png",
      "/case-studies/numo-sebi/02-checkout.png",
      "/case-studies/numo-sebi/03-collection.png",
    ],
  },
  {
    slug: "kent-architects",
    number: "05",
    title: "Kent Architects",
    shortTitle: "Kent Architects",
    industry: "Architecture",
    type: "Portfolio website",
    year: "2026",
    location: "United Kingdom",
    summary:
      "An architecture portfolio experience built to present residential projects with calm layouts, strong imagery and a more considered sense of professionalism.",
    headline: "A clean digital presentation for an architecture practice and its project work.",
    intro:
      "Kent Architects needed a portfolio direction that would present its work in a more polished and credible way. The focus was on making the architecture the hero — from in-progress construction to more complete residential projects — while keeping the website itself clean, quiet and easy for prospective clients to explore.",
    image: "/case-studies/kent-architects/02-modern-villa.jpg",
    accent: "#79dcb5",
    liveUrl: "https://kent-architects.vercel.app",
    services: [
      "Portfolio UX",
      "Visual design",
      "Frontend development",
      "Responsive layouts",
    ],
    challengeTitle: "Show architectural work with enough visual impact while keeping the interface restrained.",
    challenge: [
      "Architecture clients judge presentation quickly, so the portfolio needed to feel professional, image-led and trustworthy from the first screen.",
      "Project imagery included multiple stages of residential work, meaning the layout had to support variety without making the page feel cluttered.",
      "The experience also had to stay elegant and easy to navigate across desktop and mobile so the firm's work remains the main focus at every size.",
    ],
    solutionTitle: "We created a calm, image-first portfolio system.",
    solution: [
      "Large project imagery, strong spacing and a minimal interface language help the work lead the conversation instead of being buried under too much UI.",
      "The case study layout gives each project image room to breathe, helping viewers appreciate material, structure and progress across different homes.",
      "Responsive rules preserve the same clear hierarchy on smaller screens, so the portfolio still feels premium and intentional on mobile.",
    ],
    proof: [
      { value: "5", label: "project images curated into the case study" },
      { value: "Image-led", label: "architecture and construction visuals take priority" },
      { value: "Minimal", label: "restrained interface language throughout" },
      { value: "Responsive", label: "portfolio adapts cleanly across devices" },
    ],
    outcomeTitle: "A portfolio experience that helps the practice look more credible and the projects feel more valuable.",
    outcome:
      "The final direction gives Kent Architects a neater and more professional way to present its work online. By letting the project imagery lead and reducing unnecessary visual noise, the website becomes a stronger sales and credibility tool for the practice.",
    gallery: [
      "/case-studies/kent-architects/02-modern-villa.jpg",
      "/case-studies/kent-architects/01-house-in-progress.jpg",
      "/case-studies/kent-architects/03-framing-wide.jpg",
      "/case-studies/kent-architects/04-framing-detail.jpg",
      "/case-studies/kent-architects/05-finished-house.jpg",
    ],
  },
  {
    slug: "lucenex",
    number: "06",
    title: "Lucenex",
    shortTitle: "Lucenex",
    industry: "Data & AI",
    type: "Company website",
    year: "2026",
    location: "United States",
    summary:
      "A modern business website for a US data and AI company, built to communicate services clearly and position the brand with more authority online.",
    headline: "A cleaner digital presence for a company focused on data, analytics and AI solutions.",
    intro:
      "Lucenex needed a business website that explains its value simply: helping companies use data, analytics and AI to make smarter decisions. The experience had to present the brand clearly, organise its service offer, and create a more professional path for potential clients to understand the company and reach out.",
    image: "/case-studies/lucenex/01-home.png",
    video: "/expertise/03.mp4",
    accent: "#ffd66b",
    services: [
      "Website strategy",
      "Frontend development",
      "Service presentation",
      "Responsive UI",
      "Conversion-focused contact flow",
    ],
    challengeTitle: "Present technical services in a way business clients can understand quickly.",
    challenge: [
      "Data, analytics and AI companies often deal with complex offers, so the website had to communicate expertise without sounding vague or overly technical.",
      "Lucenex also needed a cleaner structure for core sections like the hero, services and contact area so visitors can move from first impression to enquiry more naturally.",
      "Because the company is positioned in the United States, the visual direction had to feel modern, credible and strong enough to support business conversations with a professional audience.",
    ],
    solutionTitle: "We focused the experience on clarity, positioning and client trust.",
    solution: [
      "The homepage leads with sharper messaging around data, analytics and AI, helping visitors understand the core value proposition faster.",
      "Service sections were structured to present technical capability in a more approachable way, balancing authority with readability.",
      "A cleaner contact experience and stronger page hierarchy give Lucenex a better digital front door for new client relationships.",
    ],
    proof: [
      { value: "US", label: "company positioning presented clearly" },
      { value: "AI", label: "service offering framed around data and automation" },
      { value: "3", label: "key page sections showcased in the case study" },
      { value: "Direct", label: "LinkedIn and email contact routes included" },
    ],
    outcomeTitle: "A more credible online presence for a business built around data and AI expertise.",
    outcome:
      "The final result gives Lucenex a cleaner, more convincing way to present its business online. Instead of relying on generic tech language, the site frames the company as a practical data and AI partner and gives potential clients a more straightforward way to understand the offer and make contact.",
    gallery: [
      "/case-studies/lucenex/01-home.png",
      "/case-studies/lucenex/02-services.png",
      "/case-studies/lucenex/03-contact.png",
    ],
    connectLabel: "BUSINESS PRESENCE",
    connectHeading: "A clear digital front door for a US data and AI company.",
    connectCopy:
      "Lucenex is positioned as a US company focused on data intelligence, analytics and AI automation. The website supports that positioning while giving visitors direct ways to learn more and reach the team.",
    socialChannels: [
      {
        platform: "LinkedIn",
        handle: "Lucenex Corp",
        note: "Professional company presence and an important trust signal for prospective partners and clients.",
        url: "https://www.linkedin.com/company/lucenex-corp/",
      },
      {
        platform: "Email",
        handle: "contact@lucenexcorp.com",
        note: "Direct business contact point for partnership, product and service enquiries.",
        url: "mailto:contact@lucenexcorp.com",
      },
      {
        platform: "Location",
        handle: "United States",
        note: "Positioned for a business audience looking for data and AI capability from a US company.",
      },
    ],
  },
];

export function getCaseStudyProject(slug: string) {
  return caseStudyProjects.find((project) => project.slug === slug);
}
