export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  featuredProject: string;
}

export const services: Service[] = [
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    shortTitle: "AI Engineering",
    description:
      "Custom AI assistants, workflow automation, intelligent document processing, GPT integrations and AI-powered business tools that increase productivity.",
    icon: "🤖",
    featuredProject: "AI Client Acquisition Engine",
  },

  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    shortTitle: "Full-Stack",
    description:
      "Modern web applications built with Next.js, React, TypeScript, scalable APIs and cloud-ready architectures.",
    icon: "💻",
    featuredProject: "American Decide Now",
  },

  {
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Automation",
    description:
      "Automate repetitive business operations, document workflows, approvals and repetitive manual processes.",
    icon: "⚙️",
    featuredProject: "Legal Workflow System",
  },

  {
    slug: "api-integrations",
    title: "API Integrations",
    shortTitle: "API Integration",
    description:
      "Integrate OpenAI, Stripe, WhatsApp, payment gateways, CRMs and third-party platforms into your business.",
    icon: "🔗",
    featuredProject: "AI Proposal Generator",
  },

  {
    slug: "dashboards-analytics",
    title: "Dashboards & Analytics",
    shortTitle: "Dashboards",
    description:
      "Interactive dashboards, reporting systems and business intelligence tools for data-driven decision making.",
    icon: "📊",
    featuredProject: "Flight Schedule Platform",
  },

  {
    slug: "wordpress-wix",
    title: "WordPress & Wix Solutions",
    shortTitle: "WordPress",
    description:
      "Professional business websites, WooCommerce stores, SEO optimization, CMS development and website migrations.",
    icon: "🌐",
    featuredProject: "Growfessor Learning Platform",
  },
];