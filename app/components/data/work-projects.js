// Case-study data. Every fact here is either directly supplied by
// Toshconsult or drawn from verified project records — nothing is
// invented. Where a metric (users, revenue, pass rates, volumes,
// uptime) was not supplied, none is shown; the copy uses "designed to"
// / "built to" framing instead of a claimed result. Filter tags loosely
// follow: Business automation, SaaS & developer tools, AI & EdTech,
// Fintech & trading, Identity & verification, Agriculture, Insurance,
// E-commerce, Social platforms.

export const WORK_PROJECTS = [
  {
    slug: "elab-solutions",
    name: "ELAB Solutions",
    industry: "EdTech / AI",
    type: "Learning Management System",
    filterTags: ["AI & EdTech"],
    context:
      "A learning management system built for professional examination preparation.",
    challenge:
      "Candidates preparing for professional exams needed more than static study material — a platform that could adapt to how each learner was actually progressing.",
    approach:
      "Built an async FastAPI backend to support responsive study tools, paired with an AI study assistant and adaptive quizzing that adjusts to the learner.",
    solution:
      "A learning platform combining adaptive assessments, an AI-powered study assistant, and a predictive machine-learning model for exam readiness.",
    capabilities: [
      "Async FastAPI services",
      "AI-powered study assistant",
      "Adaptive quizzes that respond to learner performance",
      "Predictive machine-learning model for exam readiness",
    ],
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Machine Learning"],
    role: "Design and development of the platform, including the ML-based readiness model.",
    outcome:
      "Built to combine adaptive assessment, AI study assistance, and predictive readiness scoring in one platform. Pass-rate or accuracy figures are not published, as they have not been independently verified.",
    relatedServices: ["ai-intelligent-systems", "custom-business-software"],
  },
  {
    slug: "form-server",
    name: "Form Server",
    industry: "Developer Tooling / Backend-as-a-Service",
    type: "Backend-as-a-Service Platform",
    filterTags: ["SaaS & developer tools"],
    context:
      "A Backend-as-a-Service product that lets frontend developers collect form submissions without building custom backend infrastructure.",
    challenge:
      "Frontend developers and agencies regularly need a form-collection backend but don't want to build and maintain one from scratch for every project.",
    approach:
      "Designed a concurrent-safe API layer aimed at reliable, high-volume submission handling, plus direct WordPress integration for non-technical users.",
    solution:
      "A hosted API that any frontend — including WordPress sites — can point form submissions at, without the developer standing up their own backend.",
    capabilities: [
      "Concurrent-safe APIs",
      "Designed with high-volume submission handling in mind",
      "WordPress integrations",
      "Backend infrastructure for frontend-only developers",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "WordPress"],
    role: "Backend architecture and API development.",
    outcome:
      "Built to reduce backend setup work for developers who need reliable form collection without building a custom API. Submission-volume figures are not published pending client verification.",
    relatedServices: ["product-engineering-support", "custom-business-software"],
  },
  {
    slug: "postam",
    name: "Postam",
    industry: "Social / Consumer Fintech",
    type: "Social Platform",
    filterTags: ["Social platforms", "Fintech & trading"],
    context:
      "A social platform built for the African market, combining a content feed, reels, direct messaging, and an in-app wallet where points can convert to real cash.",
    challenge:
      "Building a consumer social platform with real financial functionality (a points-to-cash wallet) meant security, identity verification, and performance all had to be right from day one — not retrofitted later.",
    approach:
      "Led a team of 8 engineers and owned the core architecture end to end, with a particular focus on authentication, identity verification, and backend performance as the platform scaled.",
    solution:
      "A social platform covering feed, reels, and messaging, with 2FA and JWT-based authentication, Redis caching for performance, KYC for identity verification, and push notifications.",
    capabilities: [
      "Two-factor authentication (2FA)",
      "JWT-based authentication",
      "Redis caching",
      "KYC identity verification",
      "Push notifications",
      "Backend performance improvements",
    ],
    techStack: ["React Native", "Node.js", "Redis", "JWT / 2FA", "KYC integration"],
    role:
      "Led a team of 8 engineers and owned the core architecture end to end. Authentication, security, caching, and backend architecture were personally led; feed, reels, messaging, and wallet UI were delivered with the wider team.",
    outcome:
      "Built to support a social feed, messaging, and an in-app wallet with points-to-cash conversion for an African user base. User numbers, transaction volumes, and revenue are not published, as they have not been independently verified.",
    relatedServices: ["web-mobile-applications", "product-engineering-support"],
  },
  {
    slug: "trustpadi",
    name: "TrustPadi",
    industry: "Identity Verification / Trust & Safety",
    type: "Identity Verification Platform",
    filterTags: ["Identity & verification", "Fintech & trading"],
    context:
      "A platform designed to help users verify identities before financial transactions.",
    challenge:
      "People transacting with someone they don't know well have limited, scattered ways to check who they're actually dealing with before sending money.",
    approach:
      "Built stateless JWT authentication and a set of verification APIs covering bank account verification, phone verification, and social identity checks, with a Next.js frontend.",
    solution:
      "A verification platform designed to help users check available identity signals — bank account, phone number, and social profile — before completing a transaction.",
    capabilities: [
      "Stateless JWT authentication",
      "Bank account verification",
      "Phone verification",
      "Social identity checks",
      "Next.js frontend with supporting backend services",
    ],
    techStack: ["Node.js", "Express.js", "NestJS", "MongoDB", "Next.js"],
    role: "Backend verification services and frontend development.",
    outcome:
      "Designed to help users verify available identity signals before transacting. Verification results depend on the data and provider coverage available at the time of the check — the platform is not a guarantee that any given transaction is safe, and it does not carry a legal or regulatory approval claim.",
    relatedServices: ["custom-business-software", "product-engineering-support"],
  },
  {
    slug: "zaf-farm",
    name: "Zaf Farm",
    industry: "Agriculture / Business Operations",
    type: "Internal Business Management Software",
    filterTags: ["Agriculture", "Business automation"],
    context:
      "Software built for a farm company that sources chickens from farmers, processes and dresses them, and resells the products — not a conventional retail business.",
    challenge:
      "Procurement from many individual farmers, product recording, accounting, staff management, and payroll were all being handled through fragmented, largely manual processes.",
    approach:
      "Built centralized software focused specifically on the business's actual workflow — procurement and product recording, accounting, and workforce management — rather than adapting a generic retail system.",
    solution:
      "Internal business management software covering procurement recording, accounting, staff management, and payroll.",
    capabilities: [
      "Recording products sourced from individual farmers",
      "Operational tracking",
      "Accounting for incoming products",
      "Staff management",
      "Payroll management",
    ],
    techStack: ["React Native", "Next.js", "NestJS", "PostgreSQL", "Electron.js"],
    role: "End-to-end design and development of the internal system.",
    outcome:
      "Built to replace fragmented manual processes with centralized software for procurement, accounting, and workforce management. This is operational software, not a retail point-of-sale system.",
    relatedServices: ["custom-business-software"],
  },
  {
    slug: "zik-trade",
    name: "Zik Trade",
    industry: "Cryptocurrency / Trading Technology",
    type: "Trading Platform",
    filterTags: ["Fintech & trading"],
    context:
      "A trading company that previously conducted transactions manually through WhatsApp and Telegram.",
    challenge:
      "Coordinating trades entirely through chat apps limited how many customers the business could serve and made transactions slower and harder to track.",
    approach:
      "Built a dedicated application so users could register, log in, and complete cryptocurrency trades directly, rather than relying exclusively on manual conversations.",
    solution:
      "A trading platform where users can register, log in, and trade cryptocurrency through the application.",
    capabilities: [
      "User registration and login",
      "In-app cryptocurrency trading",
      "Transaction completion within the platform",
    ],
    techStack: ["React Native", "Next.js", "NestJS", "PostgreSQL", "Web3.js"],
    role: "Platform design and development.",
    outcome:
      "Built to move a manually coordinated trading workflow onto a dedicated digital platform. This case study is not an endorsement of cryptocurrency trading or investment; Toshconsult does not claim regulatory compliance, custody guarantees, or legal authorization on the client's behalf.",
    relatedServices: ["web-mobile-applications", "custom-business-software"],
  },
  {
    slug: "matmos-insurance",
    name: "Matmos Insurance",
    industry: "Insurance / Business Operations",
    type: "Customer Relationship Management System",
    filterTags: ["Insurance", "Business automation"],
    context:
      "An insurance company that previously managed customers and client records through paperwork.",
    challenge:
      "Paper-based record management made it difficult to track customer information reliably as the business grew.",
    approach:
      "Built a CRM tailored to the company's existing customer-management workflow, to move records from paper into a searchable, centralized system.",
    solution:
      "A CRM for managing customer and client records digitally.",
    capabilities: [
      "Centralized customer record management",
      "Digital workflow replacing paper-based processes",
    ],
    techStack: ["Next.js", "Express.js", "PostgreSQL"],
    role: "CRM design and development.",
    outcome:
      "Built to move the business from paper-based customer management to a centralized digital CRM. Specific efficiency or customer-growth figures are not published, as they have not been independently verified.",
    relatedServices: ["custom-business-software"],
  },
  {
    slug: "arridoh",
    name: "Arridoh",
    industry: "Fashion / E-commerce",
    type: "Pre-Order Ordering Platform",
    filterTags: ["E-commerce"],
    context:
      "A fashion brand that sews clothing and sells to customers abroad, reaching a point where order volume made manual handling difficult.",
    challenge:
      "Managing international pre-orders and fulfillment by hand became harder to sustain as demand grew.",
    approach:
      "Built a pre-order platform so customers could place orders directly, giving the company a structured way to manage fulfillment and international delivery.",
    solution:
      "A pre-order platform supporting international customers, from order placement through to fulfillment tracking.",
    capabilities: [
      "Customer pre-ordering",
      "Order fulfillment management",
      "International delivery workflow support",
    ],
    techStack: ["React Native", "Next.js", "NestJS", "PostgreSQL"],
    role: "Platform design and development.",
    outcome:
      "Built to support a growing fashion business with a digital pre-order workflow for international customers. Order-volume or revenue figures are not published, as they have not been independently verified.",
    relatedServices: ["web-mobile-applications", "business-websites"],
  },
  {
    slug: "d-veriff",
    name: "D-Veriff",
    industry: "Pharmaceutical Technology / Product Verification",
    type: "Product Verification System",
    filterTags: ["Identity & verification"],
    context:
      "A drug verification system giving registered pharmaceutical manufacturers a unique number associated with the drugs they produce, paired with a consumer-facing Android app to scan and check products.",
    challenge:
      "Consumers had no simple way to check whether a pharmaceutical product actually came from the manufacturer stated on the packaging.",
    approach:
      "Built a verification-number system for registered manufacturers, plus a simple Android scanning app so consumers could check a product against that record.",
    solution:
      "A verification system pairing manufacturer-issued product numbers with a consumer-facing scanning app.",
    capabilities: [
      "Unique verification numbers issued to registered manufacturers",
      "Android application for consumer product scanning",
      "Manufacturer-to-product verification lookup",
    ],
    techStack: ["React Native", "Next.js", "NestJS", "PostgreSQL"],
    role: "System and application design and development.",
    outcome:
      "The client has promoted the system to pharmaceutical manufacturers, and companies have begun using it. This is a verification system checking a product against manufacturer-issued records — it does not guarantee that every scanned drug is safe, genuine, or legally approved, and its scope is limited to the manufacturers registered on the system.",
    relatedServices: ["web-mobile-applications", "custom-business-software"],
  },
  {
    slug: "daylightinfo",
    name: "DaylightInfo",
    industry: "Media & Publishing",
    type: "Web Application",
    filterTags: ["SaaS & developer tools"],
    context:
      "A blog and news platform (daylightinfo.com.ng) built for fast publishing and reliable social sharing.",
    challenge:
      "The publishing team needed a fast, reliable content platform with working social previews and support for video content.",
    approach:
      "Built on Next.js and Express, deployed on cPanel, with video upload support and corrected Open Graph metadata for accurate link previews on social platforms.",
    solution:
      "A publishing platform with video upload via Cloudinary and server-rendered Open Graph metadata for accurate social sharing previews.",
    capabilities: [
      "Video upload via Cloudinary integration",
      "Server-side Open Graph metadata for accurate social previews",
      "cPanel-based deployment pipeline",
    ],
    techStack: ["Next.js", "Express.js", "Cloudinary", "cPanel"],
    role: "Platform design and development.",
    outcome:
      "Built to give the publishing team a fast, shareable platform without depending on a third-party CMS.",
    relatedServices: ["business-websites", "product-engineering-support"],
  },
];

// Filter categories shown on the /work page.
export const WORK_FILTER_TAGS = [
  "Business automation",
  "SaaS & developer tools",
  "AI & EdTech",
  "Fintech & trading",
  "Identity & verification",
  "Agriculture",
  "Insurance",
  "E-commerce",
  "Social platforms",
];
