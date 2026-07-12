export interface Project {
  id: string;
  slug: string;

  featured?: boolean;

  title: string;
  category: string;

  shortDescription: string;
  description: string;

  challenge: string;
  solution: string;

  results: string[];

  technologies: string[];

  image: string;

  gallery: string[];

  client?: string;

  year: string;

  role: string;

  liveUrl?: string;

  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "american-decide-now",

    featured: true,

    title: "American Decide Now",

    category: "Full-Stack Web Platform",

    shortDescription:
      "Political debate and polling platform.",

    description:
      "Designed and developed a modern civic engagement platform that enables structured debates, public voting and community participation through a scalable full-stack web application.",

    challenge:
      "Create a modern civic engagement platform where users can debate ideas, participate in polls and interact through an intuitive and scalable web experience.",

    solution:
      "Built a responsive full-stack platform using Next.js and TypeScript with a modern UI, structured discussions, polling capabilities and a scalable architecture for future expansion.",

    results: [
      "Responsive across desktop and mobile",
      "Interactive debate experience",
      "Modern scalable architecture",
      "Fast loading pages",
      "Professional user interface",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
    ],

    image: "/images/projects/american-home.png",

    gallery: [
      "/images/projects/american-home.png",
    ],

    client: "Confidential",

    year: "2025",

    role: "Full-Stack Developer",

    liveUrl: "https://makeamericadebateagain.shop",

    githubUrl: "",
  },

  {
    id: "2",
    slug: "wix-spaces",

    title: "WIX Spaces Course Platform",

    category: "Learning Platform",

    shortDescription:
      "Premium online learning platform.",

    description:
      "Designed and configured a premium online learning platform featuring memberships, digital courses, community engagement and workflow automation.",

    challenge:
      "Develop a professional learning platform capable of delivering premium courses, memberships and community engagement.",

    solution:
      "Configured Wix Spaces with memberships, automation, content organisation and user-friendly navigation to create a premium digital learning experience.",

    results: [
      "Professional learning experience",
      "Membership management",
      "Improved user engagement",
      "Workflow automation",
    ],

    technologies: [
      "Wix",
      "CMS",
      "Automation",
      "Memberships",
    ],

    image: "/images/projects/nyerere-home.png",

    gallery: [
      "/images/projects/nyerere-home.png",
    ],

    client: "Growfessor",

    year: "2025",

    role: "Wix Developer",

    liveUrl: "https://nyererebillups.com",

    githubUrl: "",
  },

  {
    id: "3",
    slug: "legal-workflow",

    title: "Legal Workflow System",

    category: "Business Automation",

    shortDescription:
      "Workflow automation for legal operations.",

    description:
      "Built an automation system that streamlined legal document processing and reduced repetitive manual work.",

    challenge:
      "Manual legal document workflows were slow, repetitive and difficult to manage efficiently.",

    solution:
      "Designed an automated workflow system that improved document processing and operational efficiency.",

    results: [
      "Reduced repetitive work",
      "Improved document management",
      "Streamlined operations",
    ],

    technologies: [
      "Python",
      "Automation",
      "REST API",
      "Workflow",
    ],

    image: "/images/projects/legal-workflow.png",

    gallery: [
      "/images/projects/legal-workflow.png",
    ],

    client: "Confidential",

    year: "2025",

    role: "Automation Developer",

    liveUrl: "",

    githubUrl: "",
  },

  {
    id: "4",
    slug: "wordpress-migration",

    title: "WordPress Migration",

    category: "Website Development",

    shortDescription:
      "Business website migration and optimisation.",

    description:
      "Migrated and optimized WordPress business websites for speed, SEO and long-term maintainability.",

    challenge:
      "The existing websites required improved performance, better SEO and easier maintenance.",

    solution:
      "Successfully migrated and optimized multiple WordPress websites while preserving content and improving performance.",

    results: [
      "Improved page speed",
      "Better SEO",
      "Cleaner architecture",
      "Improved maintainability",
    ],

    technologies: [
      "WordPress",
      "PHP",
      "SEO",
      "Elementor",
    ],

    image: "/images/projects/wordpress-migration.png",

    gallery: [
      "/images/projects/wordpress-migration.png",
    ],

    client: "Confidential",

    year: "2025",

    role: "WordPress Developer",

    liveUrl: "",

    githubUrl: "",
  },

  {
    id: "5",
    slug: "spanish-horticulture",

    title: "Spanish Horticulture Website",

    category: "Business Website",

    shortDescription:
      "Professional horticulture business website.",

    description:
      "Developed a modern website that strengthened the company's online presence and clearly communicated its services.",

    challenge:
      "The client needed a professional digital presence to attract customers and showcase services.",

    solution:
      "Designed a clean, responsive business website focused on usability and professional branding.",

    results: [
      "Professional online presence",
      "Responsive design",
      "Improved brand credibility",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],

    image: "/images/projects/spanish-horticulture.png",

    gallery: [
      "/images/projects/spanish-horticulture.png",
    ],

    client: "Confidential",

    year: "2025",

    role: "Frontend Developer",

    liveUrl: "",

    githubUrl: "",
  },

  {
    id: "6",
    slug: "flight-schedule",

    title: "Flight Schedule Platform",

    category: "Business Web Application",

    shortDescription:
      "Interactive flight scheduling platform.",

    description:
      "Built a responsive web application that allows users to browse and search flight schedules through an intuitive interface.",

    challenge:
      "Users required quick access to organised flight information across multiple routes.",

    solution:
      "Developed a responsive interface with structured flight information and efficient search capabilities.",

    results: [
      "Responsive application",
      "Fast information access",
      "Improved usability",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
    ],

    image: "/images/projects/flight-schedule.png",

    gallery: [
      "/images/projects/flight-schedule.png",
    ],

    client: "Confidential",

    year: "2025",

    role: "Full-Stack Developer",

    liveUrl: "",

    githubUrl: "",
  },
];