export interface AIProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export const aiProjects: AIProject[] = [
  {
    id: "cae",
    title: "AI Client Acquisition Engine",
    description:
      "An intelligent system that automates lead discovery, qualification, outreach, proposal generation and CRM management for freelance businesses.",

    technologies: [
      "OpenAI",
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Automation",
    ],
  },

  {
    id: "proposal",
    title: "AI Proposal Generator",

    description:
      "Generate personalized freelance proposals using AI from project descriptions in seconds.",

    technologies: [
      "OpenAI",
      "Prompt Engineering",
      "Next.js",
    ],
  },

  {
    id: "documents",

    title: "AI Document Assistant",

    description:
      "Extract, summarize and organize business documents using AI-powered workflows.",

    technologies: [
      "Python",
      "OpenAI",
      "OCR",
    ],
  },
];