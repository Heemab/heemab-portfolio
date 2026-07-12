export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;

  problems: string[];

  solutions: string[];

  technologies: string[];

  process: string[];

  featuredProject: string;

  ctaTitle: string;
  ctaDescription: string;

  faqs: {
    question: string;
    answer: string;
  }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "ai-engineering": {
    slug: "ai-engineering",

    title: "AI Engineering",

    subtitle:
      "Intelligent software that automates repetitive work and increases business productivity.",

    overview:
      "I design and build AI-powered solutions that streamline operations, reduce manual effort, and help businesses scale faster. Whether you need an AI assistant, proposal generator, document processing system or business chatbot, I can deliver secure and production-ready solutions.",

    problems: [
      "Manual repetitive business tasks",
      "Slow customer response times",
      "Time-consuming proposal writing",
      "Poor document management",
      "Disconnected software systems",
      "Inefficient workflows",
    ],

    solutions: [
      "AI Assistants",
      "GPT Integrations",
      "Document AI",
      "Proposal Generation",
      "Workflow Automation",
      "Business Intelligence",
    ],

    technologies: [
      "OpenAI",
      "Claude",
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],

    process: [
      "Discovery",
      "Planning",
      "Development",
      "Testing",
      "Deployment",
      "Support",
    ],

    featuredProject: "AI Client Acquisition Engine",

    ctaTitle:
      "Ready to build an AI solution?",

    ctaDescription:
      "Let's discuss how AI can automate your business and save valuable time.",

    faqs: [
      {
        question: "Can AI integrate with my existing software?",
        answer:
          "Yes. AI can integrate with CRMs, websites, databases, payment systems and third-party APIs.",
      },
      {
        question: "Do you build custom AI assistants?",
        answer:
          "Yes. Every AI assistant is tailored to your business requirements.",
      },
      {
        question: "Can AI automate repetitive work?",
        answer:
          "Absolutely. That's one of the biggest advantages of modern AI systems.",
      },
    ],
  },

  "full-stack-development": {
    slug: "full-stack-development",

    title: "Full-Stack Development",

    subtitle:
      "Modern, scalable web applications built for performance and growth.",

    overview:
      "I build secure full-stack applications using modern technologies that deliver excellent user experience, scalability and maintainability.",

    problems: [
      "Outdated applications",
      "Slow websites",
      "Poor user experience",
      "Unscalable architecture",
      "Difficult maintenance",
    ],

    solutions: [
      "Business Applications",
      "Customer Portals",
      "Admin Dashboards",
      "REST APIs",
      "Authentication",
      "Cloud Deployment",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
      "Docker",
    ],

    process: [
      "Requirements",
      "UI Design",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance",
    ],

    featuredProject: "American Decide Now",

    ctaTitle:
      "Need a modern web application?",

    ctaDescription:
      "Let's build software that grows with your business.",

    faqs: [
      {
        question: "Do you build custom software?",
        answer:
          "Yes. Every application is developed specifically for your business.",
      },
      {
        question: "Can you maintain existing applications?",
        answer:
          "Yes. I can improve, optimize and maintain existing software.",
      },
    ],
  },
  "business-automation": {
    slug: "business-automation",

    title: "Business Automation",

    subtitle:
      "Automate repetitive business processes and allow your team to focus on high-value work.",

    overview:
      "Manual processes slow businesses down. I build intelligent automation systems that connect your applications, eliminate repetitive tasks and improve operational efficiency.",

    problems: [
      "Manual approvals",
      "Repeated data entry",
      "Disconnected systems",
      "Slow document processing",
      "Human errors",
      "Poor workflow visibility",
    ],

    solutions: [
      "Workflow Automation",
      "Document Processing",
      "Email Automation",
      "CRM Automation",
      "Approval Workflows",
      "Lead Qualification",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "OpenAI",
      "REST API",
      "PostgreSQL",
      "Docker",
      "Zapier",
      "Make",
    ],

    process: [
      "Business Analysis",
      "Workflow Mapping",
      "Automation Design",
      "Implementation",
      "Testing",
      "Deployment",
    ],

    featuredProject: "Legal Workflow System",

    ctaTitle:
      "Ready to automate your business?",

    ctaDescription:
      "Let's eliminate repetitive work and improve your business efficiency.",

    faqs: [
      {
        question: "Can automation connect different software?",
        answer:
          "Yes. I build automation that connects CRMs, websites, databases, email systems and third-party platforms.",
      },
      {
        question: "Will automation replace my staff?",
        answer:
          "No. Automation removes repetitive work so your team can focus on more valuable tasks.",
      },
    ],
  },

  "api-integrations": {
    slug: "api-integrations",

    title: "API Integrations",

    subtitle:
      "Connect your applications with powerful third-party services and AI platforms.",

    overview:
      "Modern businesses rely on multiple software platforms. I integrate them into one seamless workflow using secure APIs and scalable architecture.",

    problems: [
      "Disconnected applications",
      "Manual data synchronization",
      "Duplicate information",
      "Slow workflows",
      "Payment integration issues",
    ],

    solutions: [
      "OpenAI Integration",
      "Stripe Integration",
      "WhatsApp Integration",
      "Payment Gateways",
      "CRM Integration",
      "REST APIs",
    ],

    technologies: [
      "REST API",
      "Next.js",
      "Node.js",
      "Python",
      "OpenAI",
      "Stripe",
      "Supabase",
      "PostgreSQL",
    ],

    process: [
      "API Review",
      "Architecture",
      "Integration",
      "Security Testing",
      "Deployment",
      "Monitoring",
    ],

    featuredProject: "AI Proposal Generator",

    ctaTitle:
      "Need software integrations?",

    ctaDescription:
      "Let's connect your business systems into one seamless workflow.",

    faqs: [
      {
        question: "Can you integrate payment gateways?",
        answer:
          "Yes. I integrate Stripe and other payment providers securely.",
      },
      {
        question: "Can you integrate OpenAI?",
        answer:
          "Absolutely. GPT-powered applications are one of my core services.",
      },
    ],
  },
    "dashboards-analytics": {
    slug: "dashboards-analytics",

    title: "Dashboards & Analytics",

    subtitle:
      "Transform business data into actionable insights with modern dashboards.",

    overview:
      "I develop responsive dashboards and reporting systems that help businesses monitor KPIs, visualize performance and make informed decisions through real-time analytics.",

    problems: [
      "Scattered business data",
      "Poor reporting",
      "Manual spreadsheet analysis",
      "Lack of KPI visibility",
      "Slow decision making",
    ],

    solutions: [
      "Executive Dashboards",
      "Business Intelligence",
      "Real-time Reporting",
      "Data Visualization",
      "Performance Monitoring",
      "Custom Analytics",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Chart.js",
      "PostgreSQL",
      "Power BI",
      "REST API",
    ],

    process: [
      "Requirements Gathering",
      "Data Analysis",
      "Dashboard Design",
      "Development",
      "Testing",
      "Deployment",
    ],

    featuredProject: "Flight Schedule Platform",

    ctaTitle:
      "Need better business insights?",

    ctaDescription:
      "Let's build dashboards that help you make faster and smarter business decisions.",

    faqs: [
      {
        question: "Can dashboards update automatically?",
        answer:
          "Yes. Dashboards can display live data from your existing systems.",
      },
      {
        question: "Can reports be exported?",
        answer:
          "Yes. Reports can be exported to PDF, Excel and CSV formats.",
      },
    ],
  },

  "wordpress-wix": {
    slug: "wordpress-wix",

    title: "WordPress & Wix Solutions",

    subtitle:
      "Professional websites that are fast, modern and built to convert visitors into customers.",

    overview:
      "Whether you need a business website, landing page, WooCommerce store or Wix platform, I create responsive websites that combine beautiful design with strong performance and SEO best practices.",

    problems: [
      "Outdated websites",
      "Poor search engine visibility",
      "Slow loading pages",
      "Low conversion rates",
      "Difficult content management",
    ],

    solutions: [
      "Business Websites",
      "Landing Pages",
      "WooCommerce Stores",
      "Website Migration",
      "SEO Optimization",
      "CMS Development",
    ],

    technologies: [
      "WordPress",
      "Wix",
      "Elementor",
      "WooCommerce",
      "PHP",
      "SEO",
      "JavaScript",
    ],

    process: [
      "Discovery",
      "Wireframing",
      "Design",
      "Development",
      "Testing",
      "Launch",
    ],

    featuredProject: "Growfessor Learning Platform",

    ctaTitle:
      "Need a professional website?",

    ctaDescription:
      "Let's build a website that strengthens your brand and helps grow your business.",

    faqs: [
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. I can redesign, modernize and improve your current WordPress or Wix website.",
      },
      {
        question: "Do you provide SEO optimization?",
        answer:
          "Yes. Every website is optimized for speed, search engines and mobile devices.",
      },
    ],
  },

};