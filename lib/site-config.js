/**
 * Central site configuration.
 *
 * Everything reads from here so a fact only needs to change in one place —
 * previously the backend URL alone was hardcoded in 11+ files.
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://toshconsultblogfastapi.onrender.com";

// Calendly booking link — configurable so it's never hardcoded into
// individual components. Falls back to empty string (not a fake URL) so
// the UI can detect "not configured yet" and degrade honestly rather than
// link to a placeholder that looks real.
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

export const SITE = {
  name: "Toshconsult Technologies",
  shortName: "Toshconsult",
  tagline: "Software, Websites & Digital Products",
  description:
    "Toshconsult Technologies designs and builds websites, custom business software, web and mobile applications, and digital products for businesses in Nigeria, the UK, and internationally.",
  url: "https://www.toshconsult.com",
  domain: "toshconsult.com",
  academyUrl: "https://academy.toshconsult.com",
  email: "info@toshconsult.com",
  phone: "+234 808 059 5043",
  phoneHref: "tel:+2348080595043",
  whatsappHref: "https://wa.me/2348080595043",
  address: "30, Ibrahim Taiwo Rd, Besides Mamtess Store, Taiwo Isale, Ilorin, Kwara State, Nigeria",
  founded: "2021",
  founder: "Abdulmaleeq Ismaheel",
  registration: "RC 8781223",
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/toshconsult",
  twitter: "https://x.com/toshconsult",
  linkedin: "https://linkedin.com/company/toshconsult",
  facebook: "https://facebook.com/toshconsult",
};

// Services are grouped by customer need, not by technology. No public
// pricing — cost depends on scope, so every service points to the
// discovery call / tailored proposal instead of a fixed figure.
export const SERVICES = [
  {
    slug: "business-websites",
    name: "Business Websites",
    shortName: "Business Websites",
    summary:
      "Professional websites, redesigns, and landing pages built to represent your business well and generate leads.",
  },
  {
    slug: "custom-business-software",
    name: "Custom Business Software",
    shortName: "Custom Business Software",
    summary:
      "Internal dashboards, CRMs, operations and inventory tools, payroll, and workflow automation built around how you work.",
  },
  {
    slug: "web-mobile-applications",
    name: "Web & Mobile Applications",
    shortName: "Web & Mobile Applications",
    summary:
      "Applications for startups, SaaS products, marketplaces, and customer portals — for web and for iOS/Android.",
  },
  {
    slug: "ai-intelligent-systems",
    name: "AI & Intelligent Systems",
    shortName: "AI & Intelligent Systems",
    summary:
      "AI assistants, workflow automation, and intelligent search or recommendation features — where they solve a real problem.",
  },
  {
    slug: "product-engineering-support",
    name: "Product Engineering & Technical Support",
    shortName: "Product Engineering & Support",
    summary:
      "MVP development, improvements to an existing application, API work, performance and security fixes, and ongoing technical support.",
  },
];

export const INDUSTRIES = [
  { slug: "real-estate", name: "Real Estate" },
  { slug: "professional-services", name: "Professional Services" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "education", name: "Education" },
  { slug: "startups", name: "Startups" },
];

// What affects project cost — shown instead of a price list, per the
// "explain but don't fabricate pricing" direction.
export const PRICING_FACTORS = [
  "Scope and number of features",
  "Design complexity",
  "Integrations with other systems or APIs",
  "Technical requirements and platform choice",
  "Timeline",
  "Ongoing support and maintenance needs",
];

export const PROJECT_TYPES = [
  "Business website",
  "Website redesign",
  "Custom business software",
  "Web application",
  "Mobile application",
  "SaaS / MVP",
  "AI automation",
  "API / backend development",
  "Maintenance or technical support",
  "Not sure yet",
];

export const BUDGET_RANGES = ["Under 2,000", "2,000–5,000", "5,000–10,000", "10,000+", "Not sure yet"];
export const BUDGET_CURRENCIES = ["NGN", "GBP", "USD", "Not sure yet"];
export const TIMELINE_OPTIONS = ["Immediately", "Within 1 month", "1–3 months", "3–6 months", "Just researching"];
