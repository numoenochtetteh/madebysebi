export const serviceGroups = [
  {
    id: "online-presence",
    number: "01",
    shortName: "Get online",
    title: "Establish Your Online Presence",
    headline: "Make your first impression work harder.",
    description:
      "Give people a clear place to discover your business, explore what you offer and take the next step. From a first website to a complete online launch, we build around your customers.",
    services: [
      {
        title: "Business websites",
        description:
          "Company websites, portfolios, blogs and landing pages that explain your value and make getting in touch easy.",
        category: "business-websites",
      },
      {
        title: "E-commerce & online stores",
        description:
          "A place for customers to explore your products, place orders and pay online.",
        category: "ecommerce",
      },
      {
        title: "Booking & payments",
        description:
          "Appointment websites and payment flows that connect customer enquiries with your day-to-day work.",
        category: "booking",
      },
      {
        title: "Complete online business launch",
        description:
          "Bring your website, social media setup and initial marketing support together for a coordinated start.",
        category: "business-launch",
      },
    ],
    cta: "Find your starting point",
    href: "/pricing?category=business-websites",
  },
  {
    id: "build-your-solution",
    number: "02",
    shortName: "Build a solution",
    title: "Build Your Solution",
    headline: "Less work around the work.",
    description:
      "When off-the-shelf tools leave gaps, build something that fits. We turn business processes and product ideas into software your customers and team can actually use.",
    services: [
      {
        title: "Custom web applications",
        description:
          "Customer portals, management dashboards and SaaS platforms shaped around your users and business goals.",
        category: "web-applications",
      },
      {
        title: "Internal business systems",
        description:
          "Inventory, employee management and workflow tools that bring your operations into one clearer system.",
        category: "business-systems",
      },
      {
        title: "Mobile applications",
        description:
          "iOS and Android applications for customer experiences, your team or your business operations.",
        category: "mobile-applications",
      },
    ],
    cta: "Talk through your idea",
    href: "/contact?service=Custom%20Web%20Applications",
  },
  {
    id: "grow-your-business",
    number: "03",
    shortName: "Keep growing",
    title: "Grow Your Business",
    headline: "Keep making your next move.",
    description:
      "Your launch is a beginning. Keep your digital presence useful, your systems running well and your business moving with ongoing support, thoughtful improvements and marketing.",
    services: [
      {
        title: "Social media & marketing",
        description:
          "Social media management, content creation, digital campaigns and audience engagement.",
        category: "maintenance-growth",
      },
      {
        title: "Maintenance & technical support",
        description:
          "Website updates, security work, performance improvements and practical technical support.",
        category: "maintenance-growth",
      },
      {
        title: "Features & integrations",
        description:
          "Extend your existing website or application with new capabilities and connections to the tools you use.",
        category: "maintenance-growth",
      },
    ],
    cta: "Plan your next improvement",
    href: "/pricing?category=maintenance-growth",
  },
] as const;

export const contactServices = [
  "Business Websites",
  "E-commerce & Online Stores",
  "Booking Websites",
  "Complete Online Business Launch",
  "Custom Web Applications",
  "Internal Business Systems",
  "Mobile Applications",
  "Maintenance & Growth",
  "Other",
] as const;

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/madebysebi/" },
  { name: "Instagram", href: "https://www.instagram.com/madebysebi_/" },
  { name: "X", href: "https://x.com/MadeBySebi" },
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61594479852181",
  },
] as const;

export const whatsappUrl =
  "https://wa.me/233542470922?text=Hello%20MadeBySebi%2C%20I%27d%20like%20to%20discuss%20a%20project.";
