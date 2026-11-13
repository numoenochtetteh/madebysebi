import { websitePackages } from "./pricing";
import { serviceGroups } from "./services";

export type PricingCategoryId = (typeof serviceGroups)[number]["services"][number]["category"];
export type PricingPillarId = (typeof serviceGroups)[number]["id"];
export type ApprovedBrochure = { href: `/brochures/${string}.pdf`; title: string; approved: true };
export type PricingOption = {
  id: string;
  tier: "Starter" | "Professional" | "Premium";
  name: string;
  description: string;
  features: readonly string[];
  basis: "published" | "illustrative";
  price?: string;
  featured?: boolean;
  comparison: readonly [string, string, string];
  brochure?: ApprovedBrochure;
};
export type PricingCategory = {
  id: PricingCategoryId;
  pillar: PricingPillarId;
  name: string;
  description: string;
  keywords: string;
  comparisonLabels: readonly [string, string, string];
  packages: readonly [PricingOption, PricingOption, PricingOption];
  brochure?: ApprovedBrochure;
};

function published(index: 0 | 1 | 2, id: string, tier: PricingOption["tier"], comparison: PricingOption["comparison"]): PricingOption {
  return { ...websitePackages[index], id, tier, basis: "published", comparison };
}

function scope(id: string, tier: PricingOption["tier"], name: string, description: string, features: readonly string[], comparison: PricingOption["comparison"]): PricingOption {
  return { id, tier, name, description, features, comparison, basis: "illustrative" };
}

// Only `published` options have approved prices/inclusions. All other options are
// illustrative consultation scopes, not fixed packages or promised deliverables.
export const pricingCategories: readonly PricingCategory[] = [
  {
    id: "business-websites", pillar: "online-presence", name: "Business Websites",
    description: "From a focused landing page to a fuller business website, make it easier for customers to understand you and get in touch.",
    keywords: "company portfolio blog landing page seo enquiry",
    comparisonLabels: ["Best suited to", "Website scope", "Customer journey"],
    packages: [
      published(0, "landing-page", "Starter", ["One offer or campaign", "One conversion-focused page", "Contact or enquiry call-to-action"]),
      published(1, "business-website", "Professional", ["An established business presence", "Multi-page website", "Enquiry/contact integration"]),
      scope("custom-website", "Premium", "Custom Website", "Explore a more involved website with a structure shaped around your business.", ["Content structure and page requirements", "Specialist functionality to explore", "Connections to existing business tools", "Content migration requirements"], ["More complex website needs", "Discuss content and structure", "Discuss additional customer journeys"]),
    ],
  },
  {
    id: "ecommerce", pillar: "online-presence", name: "E-commerce & Online Stores",
    description: "Give your products a place to sell. Compare a focused storefront, our published Online Store package and a more connected retail experience.",
    keywords: "ecommerce e-commerce shop products catalogue cart checkout payments orders retail",
    comparisonLabels: ["Store direction", "Shopping experience", "Operations"],
    packages: [
      scope("focused-store", "Starter", "Focused Store", "Talk through a focused way to bring your products online.", ["Product range and catalogue structure", "Order-taking requirements", "Checkout and payment needs", "Store content and product setup"], ["A focused product offering", "Discuss the order journey", "Discuss product setup"]),
      published(2, "online-store", "Professional", ["An online storefront", "Cart and checkout setup", "Product and order management setup"]),
      scope("connected-commerce", "Premium", "Connected Commerce", "Explore a store that connects with more of your retail operations.", ["Complex catalogue and customer journeys", "Inventory or fulfilment connections", "Third-party integration requirements", "Reporting and management needs"], ["More connected retail needs", "Discuss tailored buying journeys", "Discuss operational integrations"]),
    ],
  },
  {
    id: "booking", pillar: "online-presence", name: "Booking Websites",
    description: "Make it easier for people to book your services, while planning a booking flow that works for the way your team operates.",
    keywords: "appointments calendar availability reservations payments deposits salon clinic scheduling",
    comparisonLabels: ["Booking focus", "Team workflow", "Connections"],
    packages: [
      scope("booking-foundation", "Starter", "Booking Foundation", "Explore a clear booking journey for a focused service business.", ["Services and appointment requirements", "Availability and booking flow", "Customer enquiry handover", "Existing booking-tool options"], ["A focused service offering", "Discuss appointment handling", "Discuss existing booking tools"]),
      scope("booking-workflow", "Professional", "Booking Workflow", "Plan the steps between a customer booking and your team delivering the service.", ["Customer booking and confirmation journey", "Team or resource scheduling needs", "Payment or deposit requirements", "Customer communication requirements"], ["A coordinated booking journey", "Discuss team scheduling", "Discuss payments and messaging"]),
      scope("connected-bookings", "Premium", "Connected Bookings", "Explore a tailored booking experience with more involved business rules.", ["Multiple service or location requirements", "Tailored availability and booking rules", "Connections to calendars or business tools", "Booking management and reporting needs"], ["More involved booking requirements", "Discuss tailored booking rules", "Discuss operational integrations"]),
    ],
  },
  {
    id: "business-launch", pillar: "online-presence", name: "Complete Online Business Launch",
    description: "Bring your website, social presence and first marketing steps into one coordinated plan for taking your business online.",
    keywords: "launch startup social media setup initial marketing branding presence",
    comparisonLabels: ["Launch direction", "Online presence", "Marketing discussion"],
    packages: [
      scope("launch-foundation", "Starter", "Launch Foundation", "Identify the essentials your business needs for its first online presence.", ["Website goals and content requirements", "Social profile setup needs", "Initial launch priorities", "Customer contact paths"], ["A first online presence", "Discuss the essentials", "Discuss launch priorities"]),
      scope("coordinated-launch", "Professional", "Coordinated Launch", "Plan a connected introduction to your business across its main online channels.", ["Business website requirements", "Social presence and channel setup", "Initial marketing support needs", "Launch content and customer journeys"], ["A coordinated business launch", "Discuss website and channels", "Discuss initial marketing support"]),
      scope("connected-launch", "Premium", "Connected Launch", "Explore a launch that includes more involved digital services and operations.", ["Store, booking or custom functionality needs", "Business-tool connection requirements", "Launch communication and content plan", "Post-launch improvement priorities"], ["A more involved digital launch", "Discuss connected digital services", "Discuss launch and follow-up needs"]),
    ],
  },
  {
    id: "web-applications", pillar: "build-your-solution", name: "Custom Web Applications",
    description: "Turn a product idea or customer need into a web application, with the scope grounded in the people and workflows it needs to serve.",
    keywords: "web app saas customer portal dashboard software automation authentication integration",
    comparisonLabels: ["Product direction", "User journeys", "Connections"],
    packages: [
      scope("focused-web-app", "Starter", "Focused Web App", "Explore a focused application around one clear business need.", ["Core problem and user journey", "Essential application workflows", "Data and access requirements", "Prototype or first-release approach"], ["A focused application idea", "Discuss the core workflow", "Discuss essential data needs"]),
      scope("business-web-app", "Professional", "Business Web App", "Plan an application that supports several connected customer or team workflows.", ["Customer portal or dashboard requirements", "User roles and permissions", "Connected application workflows", "Integration and reporting needs"], ["Connected application workflows", "Discuss roles and journeys", "Discuss integrations and reporting"]),
      scope("connected-platform", "Premium", "Connected Platform", "Explore a wider platform with more involved business rules and integrations.", ["Multi-workflow platform requirements", "Complex access or business rules", "External services and API connections", "Reliability and ongoing improvement needs"], ["A broader platform", "Discuss complex business rules", "Discuss external services and APIs"]),
    ],
  },
  {
    id: "business-systems", pillar: "build-your-solution", name: "Internal Business Systems",
    description: "Replace gaps between spreadsheets, manual tasks and disconnected tools with software designed around your team’s day-to-day work.",
    keywords: "inventory employee staff hr crm finance management purchasing sales automation workflow operations reporting",
    comparisonLabels: ["Operational focus", "Team workflow", "Connections"],
    packages: [
      scope("focused-business-tool", "Starter", "Focused Business Tool", "Start a discussion around one operational problem your team needs to solve.", ["Current process and pain points", "Core records and data requirements", "Team access needs", "Existing data or spreadsheet handover"], ["One operational problem", "Discuss the core team process", "Discuss existing data"]),
      scope("connected-workflows", "Professional", "Connected Workflows", "Explore a system that brings related team processes into a clearer workflow.", ["Related departmental workflows", "Roles and approval requirements", "Inventory, staff or CRM requirements", "Reporting and data migration needs"], ["Related business processes", "Discuss roles and approvals", "Discuss reporting and migration"]),
      scope("business-operations-platform", "Premium", "Operations Platform", "Plan a wider operational system around several connected business functions.", ["Cross-department process mapping", "Automation and business rules", "External tools and integration needs", "Audit, reporting and support requirements"], ["Cross-department operations", "Discuss automation and controls", "Discuss integrations and audit needs"]),
    ],
  },
  {
    id: "mobile-applications", pillar: "build-your-solution", name: "Mobile Applications",
    description: "Plan a mobile experience for your customers or team, starting with the features, platforms and connections that matter to them.",
    keywords: "mobile ios android app smartphone customer employee notifications offline",
    comparisonLabels: ["App direction", "Platform discussion", "Connections"],
    packages: [
      scope("focused-mobile-app", "Starter", "Focused Mobile App", "Explore a focused mobile experience around a clear user need.", ["Core mobile user journey", "Essential screens and interactions", "iOS or Android platform requirements", "First-release priorities"], ["A focused mobile experience", "Discuss the target platform", "Discuss essential data needs"]),
      scope("business-mobile-app", "Professional", "Business Mobile App", "Plan connected app features for the people your business serves.", ["Customer or employee workflows", "Account and data requirements", "Platform and device needs", "Backend or service connection requirements"], ["Connected mobile workflows", "Discuss platforms and devices", "Discuss backend connections"]),
      scope("connected-mobile-platform", "Premium", "Connected Mobile Platform", "Explore a more involved app connected to your wider software and operations.", ["Advanced mobile workflow requirements", "Cross-platform experience needs", "External services and integrations", "Release, support and enhancement planning"], ["A wider mobile service", "Discuss cross-platform needs", "Discuss integrations and release needs"]),
    ],
  },
  {
    id: "maintenance-growth", pillar: "grow-your-business", name: "Maintenance & Growth",
    description: "Keep your digital presence useful with website maintenance, technical support, social media marketing and application enhancements. Choose a discussion scope around what you need next.",
    keywords: "maintenance growth support security performance updates social media marketing campaigns content enhancements features integrations",
    comparisonLabels: ["Support direction", "Improvement focus", "Marketing discussion"],
    packages: [
      scope("website-care", "Starter", "Website Care", "Discuss practical care for an existing website or application.", ["Website maintenance and update needs", "Technical support requirements", "Security and performance priorities", "Existing platform review"], ["Website maintenance and support", "Discuss care priorities", "Discuss whether marketing is needed"]),
      scope("care-improvements", "Professional", "Care & Improvements", "Plan ongoing support alongside useful improvements to your digital services.", ["Website maintenance and technical support", "Application enhancement priorities", "Feature or integration requirements", "Social media and content support needs"], ["Support with useful improvements", "Discuss application enhancements", "Discuss social media and content needs"]),
      scope("connected-growth", "Premium", "Connected Growth", "Explore a coordinated plan for maintaining, improving and marketing your digital presence.", ["Website and application support needs", "Enhancement and integration planning", "Social media marketing and campaigns", "Content, engagement and review priorities"], ["A coordinated support and growth plan", "Discuss connected improvements", "Discuss campaigns and engagement"]),
    ],
  },
];

export const pricingPillars = serviceGroups.map(({ id, number, title }) => ({ id, number, title }));
export const defaultPricingCategory = pricingCategories[0];

export function findPricingCategory(value: unknown) {
  return typeof value === "string" ? pricingCategories.find(category => category.id === value) : undefined;
}

export function findPricingPillar(value: unknown) {
  return pricingPillars.find(pillar => pillar.id === value);
}

export function filterPricingCategories(query: string, pillar?: string) {
  const words = query.toLocaleLowerCase().trim().slice(0, 160).split(/\s+/).filter(Boolean);
  return pricingCategories.filter(category => {
    if (pillar && category.pillar !== pillar) return false;
    const text = [category.name, category.description, category.keywords, ...category.packages.flatMap(option => [option.name, ...option.features])].join(" ").toLocaleLowerCase();
    return words.every(word => text.includes(word));
  });
}

export function getPricingSelection(params: Pick<URLSearchParams, "get">) {
  const query = (params.get("q") ?? "").slice(0, 160);
  const pillar = findPricingPillar(params.get("pillar"))?.id;
  const requested = params.get("category");
  const requestedCategory = findPricingCategory(requested);
  const categories = filterPricingCategories(query, pillar);
  const category = categories.find(item => item.id === requestedCategory?.id) ?? categories[0];
  return { query, pillar, categories, category, unknownCategory: Boolean(requested && !requestedCategory) };
}

export function pricingHref(category: PricingCategoryId, query = "", pillar?: PricingPillarId) {
  const params = new URLSearchParams({ category });
  if (query.trim()) params.set("q", query.slice(0, 160));
  if (pillar) params.set("pillar", pillar);
  return `/pricing?${params}`;
}

export function pricingContactHref(category: PricingCategory, option?: PricingOption) {
  const params = new URLSearchParams({ category: category.id, service: category.name });
  if (option && category.packages.some(item => item.id === option.id)) params.set("package", option.id);
  return `/contact?${params}#contact-form`;
}
