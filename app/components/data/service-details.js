// Detailed per-service content, keyed by slug (matches SERVICES in
// site-config.js). Powers the dynamic /services/[slug] route.

export const SERVICE_DETAILS = {
  "business-websites": {
    whatItIs:
      "Professional websites, redesigns, and landing pages — built to represent your business credibly and generate leads, not just look good.",
    whoItsFor: [
      "Businesses without a website, or with one that no longer represents them well",
      "Companies whose current site is slow, dated, or hard to update",
      "Teams that need a lead-generation or SEO-ready site rather than a brochure",
    ],
    problemsSolved: [
      "Visitors leaving before the page even loads",
      "A site that looks unprofessional next to competitors",
      "No clear path for a visitor to become a lead",
    ],
    deliverables: [
      "Custom UI/UX design",
      "Responsive, mobile-first development",
      "On-page SEO fundamentals",
      "Lead capture built into the site",
      "Website maintenance options after launch",
    ],
    process: ["Discovery", "Design", "Build", "Launch & Support"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js / FastAPI"],
    faqs: [
      {
        q: "How long does a website project usually take?",
        a: "It depends on scope — a straightforward business website typically takes a few weeks from kickoff to launch; more complex sites take longer. We'll give you a realistic timeline during discovery.",
      },
      {
        q: "Do you build e-commerce sites too?",
        a: "Yes — online stores with product catalogs, payments, and order management fall under this service. Tell us about your store during a discovery call and we'll scope it properly.",
      },
    ],
  },
  "custom-business-software": {
    whatItIs:
      "Internal software built around how your business actually operates — dashboards, CRMs, operations and inventory tools, payroll, and workflow automation.",
    whoItsFor: [
      "Businesses whose operations have outgrown spreadsheets",
      "Companies with a workflow no off-the-shelf tool quite fits",
      "Organizations that need software their own team will use daily",
    ],
    problemsSolved: [
      "Manual processes that don't scale with growth",
      "Data scattered across spreadsheets and messages",
      "Off-the-shelf software that's close but not quite right",
    ],
    deliverables: [
      "Requirements and workflow mapping",
      "Custom-built application",
      "Role-based access control",
      "Documentation and handover",
    ],
    process: ["Discovery", "Design", "Build", "Launch & Support"],
    technologies: ["Python / Django / FastAPI / NestJS", "React / Next.js", "PostgreSQL"],
    faqs: [
      {
        q: "How do you scope a custom software project?",
        a: "We start with a discovery call to understand your current workflow and pain points before proposing an approach and timeline.",
      },
      {
        q: "Who owns the code once it's built?",
        a: "You do — custom software we build for you is yours.",
      },
    ],
  },
  "web-mobile-applications": {
    whatItIs:
      "Web and mobile applications for startups, SaaS products, marketplaces, and customer portals — built for iOS, Android, and the web.",
    whoItsFor: [
      "Startups building a product from the ground up",
      "SaaS businesses that need a reliable, scalable platform",
      "Companies extending an existing product to mobile",
    ],
    problemsSolved: [
      "A mobile experience that's an afterthought on a website",
      "No dedicated app for a product that needs one",
      "A platform that needs to scale with a growing user base",
    ],
    deliverables: [
      "Product/UI design",
      "Web and/or mobile application development",
      "Backend API and infrastructure",
      "App store submission support, where applicable",
    ],
    process: ["Discovery", "Design", "Build", "Launch & Support"],
    technologies: ["React Native", "Expo", "Next.js", "NestJS / Node.js", "PostgreSQL / MongoDB"],
    faqs: [
      {
        q: "Can you build just an MVP first?",
        a: "Yes — for early-stage products, we usually recommend scoping a focused MVP so you can validate the idea before investing in the full build.",
      },
      {
        q: "Native or cross-platform for mobile?",
        a: "For most products, React Native/Expo covers iOS and Android from one codebase efficiently — we'll advise if your use case genuinely needs fully native development.",
      },
    ],
  },
  "ai-intelligent-systems": {
    whatItIs:
      "AI assistants, workflow automation, and intelligent search or recommendation features — added where they solve a real problem, not for their own sake.",
    whoItsFor: [
      "Businesses spending significant staff time on repetitive manual tasks",
      "Products that would benefit from an AI-assisted feature",
      "Teams looking to automate reporting or customer communication",
    ],
    problemsSolved: [
      "Staff time spent on tasks a system could handle",
      "Slow response times on routine queries",
      "Manual data entry and reporting",
    ],
    deliverables: [
      "Workflow audit and automation plan",
      "Automated pipelines between your existing tools",
      "AI-assisted features scoped to your actual use case",
    ],
    process: ["Discovery", "Design", "Build", "Launch & Support"],
    technologies: ["Python", "Workflow automation tooling", "Machine learning models where applicable"],
    faqs: [
      {
        q: "Do you only add AI features you've actually built before?",
        a: "We scope AI and automation work based on real project experience — we won't propose a capability we can't deliver.",
      },
      {
        q: "Do we need to replace our current tools?",
        a: "Usually not — most automation work connects and streamlines tools you already use rather than replacing them.",
      },
    ],
  },
  "product-engineering-support": {
    whatItIs:
      "MVP development, improvements to an existing application, API work, performance and security fixes, and ongoing technical support and maintenance.",
    whoItsFor: [
      "Startups that need a focused MVP built",
      "Businesses with an existing application that needs improvement, not a rebuild",
      "Anyone who needs a website or software kept secure, updated, and maintained after launch",
    ],
    problemsSolved: [
      "An application with performance or security issues",
      "A product that's been left untouched since launch",
      "No one available to make updates or fix issues quickly",
    ],
    deliverables: [
      "Technical audit of the existing system",
      "API development or improvements",
      "Performance and security fixes",
      "Ongoing maintenance and support arrangements",
    ],
    process: ["Audit", "Plan", "Build / Fix", "Support"],
    technologies: ["Matches your existing stack"],
    faqs: [
      {
        q: "Can you work on an application you didn't originally build?",
        a: "Yes — we start with a technical audit of the existing codebase before proposing a plan.",
      },
      {
        q: "What does ongoing support typically include?",
        a: "Security and dependency updates, monitoring, bug fixes, and small feature work — the exact arrangement is agreed during discovery based on what the product needs.",
      },
    ],
  },
};
