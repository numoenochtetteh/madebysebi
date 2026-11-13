import type { serviceGroups } from "./services";

export const company = {
  name: "MadeBySebi",
  location: "Accra, Ghana",
  email: "hello@madebysebi.com",
  phone: "+233 54 247 0922",
  description: "MadeBySebi is an Accra-based digital solutions company building websites, mobile applications and custom business software for businesses in Ghana and worldwide.",
} as const;

// Existing published team information; roles and profile URLs are retained.
export const teamMembers = [
  { name: "Numo Nanortey Francis", role: "WordPress Engineer | Full Stack", image: "/team/francis-team.jpg", linkedin: "https://www.linkedin.com/in/numofrancis/", position: "center 35%" },
  { name: "Enoch Numo Tetteh", role: "Frontend Engineer", image: "/team/enoch-team.jpg", linkedin: "https://www.linkedin.com/in/enoch-numo-tetteh-993432358/", position: "center 32%" },
  { name: "Bernard Numo", role: "Frontend Developer", image: "/team/bernard-team.jpg", linkedin: "https://www.linkedin.com/in/bernard-numo-0b9b77448/", position: "center 42%" },
] as const;

export const projectApproach = [
  { title: "Understand the business", description: "We start with your customers, your team's day-to-day work and the problem you want to solve." },
  { title: "Agree a useful scope", description: "Together we define the priorities, responsibilities, requirements and budget before building." },
  { title: "Build, review and refine", description: "We share progress, work through feedback and test the journeys that matter to your business." },
  { title: "Prepare for what comes next", description: "We plan the handover, ongoing care and future improvements around the solution you have agreed." },
] as const;

type Pillar = typeof serviceGroups[number]["id"];
export const legacyServiceAnchors: Record<Pillar | "approach", readonly string[]> = {
  "online-presence": ["web-design-development", "branding-visual-design"],
  "build-your-solution": ["ux-ui-product-design"],
  "grow-your-business": ["seo-geo-visibility", "digital-marketing-growth"],
  approach: ["consultation-audits"],
};

export const serviceExamples: Record<string, readonly string[]> = {
  "business-websites": ["Clear company and service information", "Useful enquiry journeys", "Responsive pages for your audience"],
  ecommerce: ["Product browsing and store structure", "Ordering and payment requirements", "Practical catalogue and store management"],
  booking: ["Appointment and availability journeys", "Booking information and confirmations", "Payment requirements agreed to your workflow"],
  "business-launch": ["A coordinated website launch", "Social media setup and direction", "Initial marketing requirements"],
  "web-applications": ["Dashboards and customer portals", "Product and SaaS interfaces", "User journeys built around your requirements"],
  "business-systems": ["Inventory and employee management", "Workflow automation", "Connections between the tools you use"],
  "mobile-applications": ["iOS and Android application requirements", "Customer or internal team experiences", "Connected services and application workflows"],
  "maintenance-growth": ["Website maintenance and technical support", "Digital marketing and social media management", "Website and application enhancements"],
};
