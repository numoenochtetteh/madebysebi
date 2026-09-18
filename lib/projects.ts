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
  operationsTitle?: string;
  operationsCopy?: string;
  operationsImage?: string;
  socialChannels?: { platform: string; handle: string; note: string }[];
};

export const caseStudyProjects: CaseStudyProject[] = [
  {
    slug: "pengtresses",
    number: "01",
    title: "Forever Peng Hair",
    shortTitle: "PENGTRESSES",
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
        note: "Visual portfolio and client-facing brand presence",
      },
      {
        platform: "TikTok",
        handle: "@foreverpeng.hair",
        note: "Short-form content and transformation-led reach",
      },
      {
        platform: "Facebook",
        handle: "foreverpeng.hair",
        note: "Local discovery and customer touchpoint",
      },
    ],
  },
  {
    slug: "power-electrode-ltd",
    number: "02",
    title: "Power Electrode Ltd",
    shortTitle: "Power Electrode Ltd",
    industry: "Manufacturing",
    type: "Website + growth",
    year: "2026",
    location: "Ghana",
    summary:
      "A corporate website, SEO foundation and digital growth system for a Ghanaian welding electrode manufacturer.",
    headline: "Turning a manufacturing company into a credible digital business presence.",
    intro:
      "Power Electrode Ltd needed a digital presence that could explain the company, present its products and manufacturing capability, and make it easier for welders, fabricators, contractors and industrial buyers to request information or start a conversation.",
    image: "/showcase/8.png",
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
    challengeTitle: "Make an industrial business easy to understand and easier to trust online.",
    challenge: [
      "The company needed a professional digital home that could communicate product reliability, local manufacturing and the practical value of its welding electrodes.",
      "Key audiences — including welders, fabricators, contractors and industrial businesses — needed clear routes to products, manufacturing information and quote enquiries.",
      "The wider online presence also needed a consistent foundation across website, search and social channels rather than disconnected pages and posts.",
    ],
    solutionTitle: "We built the website around product confidence, manufacturing proof and conversion paths.",
    solution: [
      "The site structures the company story around product performance, manufacturing process, quality signals and clear enquiry actions.",
      "SEO foundations support product, manufacturing and Ghana-focused search intent with structured pages, metadata and crawlable content.",
      "Quote, contact and WhatsApp routes reduce friction for buyers while social channels can reinforce the same positioning and campaign message.",
    ],
    proof: [
      { value: "Live", label: "production website on the company domain" },
      { value: "Ghana", label: "local manufacturing positioned clearly" },
      { value: "SEO", label: "search-ready page and metadata structure" },
      { value: "Multi", label: "quote, contact and WhatsApp conversion routes" },
    ],
    outcomeTitle: "A connected digital foundation for sales, credibility and growth activity.",
    outcome:
      "Power Electrode now has a clear digital base for product discovery, manufacturing credibility, quote requests and social campaigns. The website is designed to support ongoing SEO and revenue-growth activity rather than operate as a static company brochure.",
    gallery: [
      "/showcase/8.png",
      "/showcase/5.png",
      "/showcase/6.png",
      "/showcase/01.jpg",
    ],
    operationsTitle: "Built for ongoing growth activity.",
    operationsCopy:
      "The site gives campaigns and social content a strong destination: dedicated product information, manufacturing proof and clear actions for enquiries and bulk-order conversations.",
    socialChannels: [
      {
        platform: "Facebook",
        handle: "Power Electrode Ltd",
        note: "Company updates, product education and paid campaign traffic",
      },
      {
        platform: "Instagram",
        handle: "Power Electrode Ltd",
        note: "Visual manufacturing and product communication",
      },
      {
        platform: "LinkedIn",
        handle: "Power Electrode Ltd",
        note: "Professional company presence and B2B credibility",
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
      "A trust-led logistics website designed to make services, capability and customer contact clearer.",
    headline: "A logistics website designed to communicate reliability before the first call.",
    intro:
      "Total Logistics needed a modern web presence that could present its freight and logistics services with more confidence, improve first impressions and make it easier for potential customers to understand what the company handles.",
    image: "/showcase/7.png",
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
    challengeTitle: "Present a service business with the clarity customers expect from a logistics partner.",
    challenge: [
      "Logistics buyers often compare providers quickly, so the website needed to communicate services and credibility without forcing visitors through dense copy.",
      "The experience also needed to feel dependable on mobile, where a large share of first-touch enquiries can begin.",
    ],
    solutionTitle: "A direct service story supported by strong imagery and clear contact routes.",
    solution: [
      "The visual system uses logistics imagery, confident typography and concise messaging to establish trust quickly.",
      "Service-led navigation and responsive layouts make key information easier to reach across desktop and mobile.",
      "Contact actions are kept visible so the site can support real enquiries rather than simply describe the company.",
    ],
    proof: [
      { value: "Live", label: "customer-facing business website" },
      { value: "Mobile", label: "responsive service discovery" },
      { value: "Clear", label: "service-led information architecture" },
      { value: "Direct", label: "contact-focused conversion paths" },
    ],
    outcomeTitle: "A stronger first impression for a trust-driven service business.",
    outcome:
      "The website gives Total Logistics a more credible place to send customers, partners and referrals while keeping the path from service discovery to contact straightforward.",
    gallery: [
      "/showcase/7.png",
      "/showcase/4.png",
      "/showcase/product-design.jpg",
    ],
  },
  {
    slug: "numo-sebi",
    number: "04",
    title: "NUMO & SEBI",
    shortTitle: "NUMO & SEBI",
    industry: "E-commerce",
    type: "Digital storefront",
    year: "2026",
    location: "Digital",
    summary:
      "A premium jewellery storefront concept built around editorial imagery, product focus and a clean shopping experience.",
    headline: "A jewellery storefront where the product imagery leads the experience.",
    intro:
      "NUMO & SEBI explores how a fashion and jewellery brand can feel premium online without adding unnecessary interface noise. The direction puts photography, typography and product presentation at the centre of the storefront.",
    image: "/showcase/03.jpg",
    accent: "#c8bbff",
    liveUrl: "https://jewelry-store-numo-sebi-two.vercel.app",
    services: [
      "Art direction",
      "E-commerce UI",
      "Frontend development",
      "Responsive design",
      "Product presentation",
    ],
    challengeTitle: "Create a premium retail feeling without competing with the products.",
    challenge: [
      "Jewellery needs room to feel tactile and desirable, so the interface had to support strong imagery instead of overwhelming it.",
      "The storefront also needed a clear visual hierarchy that could adapt to product collections and mobile browsing.",
    ],
    solutionTitle: "Editorial scale, restrained UI and a product-first visual system.",
    solution: [
      "Large-format imagery creates the emotional hook while simple layouts keep products and collections easy to scan.",
      "A restrained colour and typography system supports a premium tone across desktop and mobile.",
    ],
    proof: [
      { value: "Editorial", label: "image-led visual direction" },
      { value: "Product", label: "shopping hierarchy kept clear" },
      { value: "Mobile", label: "responsive storefront patterns" },
      { value: "Clean", label: "minimal interaction language" },
    ],
    outcomeTitle: "A storefront concept that feels more like a fashion campaign than a template.",
    outcome:
      "The project demonstrates a premium e-commerce direction that can scale into product collections, campaign stories and future commerce features without losing visual focus.",
    gallery: ["/showcase/03.jpg"],
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
      "A restrained portfolio experience designed to let architecture and project imagery do the talking.",
    headline: "A quiet digital frame for architecture, space and project photography.",
    intro:
      "Kent Architects required a portfolio approach that felt considered without becoming visually louder than the work itself. The website direction focuses on proportion, whitespace and image-led browsing.",
    image: "/showcase/02.jpg",
    accent: "#79dcb5",
    liveUrl: "https://kent-architects.vercel.app",
    services: [
      "Portfolio UX",
      "Visual design",
      "Frontend development",
      "Responsive layouts",
    ],
    challengeTitle: "Give project imagery enough space while keeping navigation effortless.",
    challenge: [
      "Architecture portfolios can quickly become crowded when project details, photography and navigation compete for attention.",
      "The experience needed to feel calm, precise and usable across large screens and phones.",
    ],
    solutionTitle: "A minimal portfolio system built around scale, spacing and rhythm.",
    solution: [
      "The layout uses generous whitespace and image-forward modules to keep focus on the work.",
      "Responsive rules protect the same visual hierarchy as screen sizes change.",
    ],
    proof: [
      { value: "Image-led", label: "project photography takes priority" },
      { value: "Calm", label: "restrained interface language" },
      { value: "Responsive", label: "layouts adapt across devices" },
      { value: "Portfolio", label: "project-first information structure" },
    ],
    outcomeTitle: "A portfolio experience that supports the work instead of competing with it.",
    outcome:
      "The resulting direction gives architectural projects a consistent, professional frame while keeping the interface light and easy to navigate.",
    gallery: ["/showcase/02.jpg"],
  },
  {
    slug: "lucenex",
    number: "06",
    title: "Lucenex",
    shortTitle: "Lucenex",
    industry: "Technology",
    type: "SaaS interface",
    year: "2026",
    location: "Product prototype",
    summary:
      "A control-tower interface for operational visibility, action queues and business-critical logistics information.",
    headline: "A dense operations product made easier to scan, act on and trust.",
    intro:
      "Lucenex required a product interface that could organise operational data, savings opportunities, detention information and audit activity without turning the experience into a wall of numbers.",
    image: "/showcase/coding-workspace.jpg",
    video: "/expertise/03.mp4",
    accent: "#ffd66b",
    services: [
      "Product UI",
      "Frontend prototyping",
      "Design system",
      "Dashboard architecture",
      "Testing",
    ],
    challengeTitle: "Turn operational complexity into a clear action-oriented interface.",
    challenge: [
      "Control-tower products need to show many states, priorities and business signals at once without losing hierarchy.",
      "The prototype needed reusable patterns for queues, watchlists, savings, audit history and detention workflows.",
    ],
    solutionTitle: "A component-driven dashboard system organised around action and status.",
    solution: [
      "Reusable cards, pills, tables and overview panels create consistency across different operational views.",
      "Priority, status and savings signals are surfaced clearly so the interface supports scanning before deep inspection.",
      "The frontend prototype was validated through build and automated test workflows before preview deployment.",
    ],
    proof: [
      { value: "7+", label: "operational product views prototyped" },
      { value: "UI", label: "reusable component system" },
      { value: "Tests", label: "build and automated checks" },
      { value: "Preview", label: "deployment-ready prototype workflow" },
    ],
    outcomeTitle: "A product foundation that makes complex operations easier to reason about.",
    outcome:
      "The prototype establishes a consistent interface language for operational decision-making and gives future product work a reusable component and interaction foundation.",
    gallery: [
      "/showcase/coding-workspace.jpg",
      "/showcase/web-design.jpg",
      "/showcase/creative-workspace.jpg",
    ],
  },
];

export function getCaseStudyProject(slug: string) {
  return caseStudyProjects.find((project) => project.slug === slug);
}
