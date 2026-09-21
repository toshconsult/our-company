// Detailed per-industry content, keyed by slug (matches INDUSTRIES in
// site-config.js). Powers the dynamic /industries/[slug] route.

export const INDUSTRY_DETAILS = {
  "real-estate": {
    intro:
      "Real estate businesses live or die on how easy it is for a prospective buyer or tenant to find and trust a listing.",
    challenges: [
      "Listings that are hard to browse or search on mobile",
      "No credible way for a prospect to reach an agent quickly",
      "Property information scattered across social media instead of one site",
    ],
    howWeHelp: [
      "Property listing websites with fast search and filtering",
      "Lead capture built directly into every listing",
      "Admin tools for agents to manage listings without a developer",
    ],
    relevantServices: ["business-websites", "custom-business-software"],
  },
  "professional-services": {
    intro:
      "For law firms, consultancies, and agencies, your website is often a prospective client's first real impression of how you operate.",
    challenges: [
      "A site that doesn't reflect the credibility of the firm",
      "No clear way to book a consultation online",
      "Manual, spreadsheet-based client intake",
    ],
    howWeHelp: [
      "Credibility-focused websites with clear service pages",
      "Online booking and consultation request flows",
      "Custom client intake and case-management tools",
    ],
    relevantServices: ["business-websites", "custom-business-software", "product-engineering-support"],
  },
  healthcare: {
    intro:
      "Healthcare providers need a digital presence that's fast, clear, and easy for patients to act on — without overcomplicating what's a sensitive, high-trust interaction.",
    challenges: [
      "Patients unable to find basic information (hours, services, location) quickly",
      "No online way to request an appointment",
      "Outdated sites that undermine trust in the provider",
    ],
    howWeHelp: [
      "Clear, fast-loading websites focused on patient needs",
      "Appointment request forms integrated into the site",
      "Ongoing support to keep information accurate and current",
    ],
    relevantServices: ["business-websites", "product-engineering-support"],
  },
  education: {
    intro:
      "Schools, training providers, and edtech organizations need websites and platforms that serve both prospective students and existing ones well.",
    challenges: [
      "Admissions or enrollment processes still run manually",
      "No central platform for course or program information",
      "A website that doesn't reflect the institution's credibility",
    ],
    howWeHelp: [
      "Websites built around admissions and program discovery",
      "Custom enrollment and student-management tools",
      "Mobile apps for course delivery or student engagement",
    ],
    relevantServices: ["business-websites", "custom-business-software", "web-mobile-applications"],
  },
  startups: {
    intro:
      "Early-stage startups need to move fast and look credible to investors and first customers at the same time, usually on a tight budget.",
    challenges: [
      "Needing an MVP fast without cutting corners that hurt later",
      "A website that doesn't yet reflect the seriousness of the business",
      "Limited budget that still needs to produce something investor- and customer-ready",
    ],
    howWeHelp: [
      "Fast, credible websites for early-stage fundraising and launch",
      "MVP-focused custom software development",
      "Website Growth & Support plans that scale as the business does",
    ],
    relevantServices: ["business-websites", "custom-business-software", "product-engineering-support"],
  },
};
