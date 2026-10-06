import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "schobot",
    name: "Schobot",
    category: "AI-POWERED RESEARCH ENGINE",
    description:
      "Search inside academic PDFs, translate research material, convert content into useful formats, and create citations — all in one research workflow.",
    image: "/images/products/schobot.webp",
    url: "https://schobot.com",
    status: "live",
  },
  {
    id: "baz-academy",
    name: "BAZ Academy",
    category: "LEARNING & TRAINING PLATFORM",
    description:
      "A learning and training platform for research training, academic courses and kids programs — designed to build knowledge through structured educational experiences.",
    image: "/images/products/baz-academy.webp",
    url: "https://bazacademy.com",
    status: "live",
  },
  {
    id: "schobot-cite",
    name: "Schobot Cite",
    category: "PRODUCT CONCEPT",
    description:
      "A citation workspace for organizing references, generating bibliography entries and keeping sources connected to research notes.",
    image: "",
    status: "concept",
    conceptBadge: "CITE",
  },
  {
    id: "schobot-translate",
    name: "Schobot Translate",
    category: "PRODUCT CONCEPT",
    description:
      "Academic translation tools designed for papers, abstracts and technical terminology while preserving the structure of research documents.",
    image: "",
    status: "concept",
    conceptBadge: "TRANS",
  },
  {
    id: "schobot-notes",
    name: "Schobot Notes",
    category: "PRODUCT CONCEPT",
    description:
      "A research notebook that turns highlights, PDF excerpts and AI answers into structured notes, summaries and study collections.",
    image: "",
    status: "concept",
    conceptBadge: "NOTES",
  },
  {
    id: "baz-research-lab",
    name: "BAZ Research Lab",
    category: "PRODUCT CONCEPT",
    description:
      "A guided research-training environment with practical exercises for methodology, literature review, academic writing and project design.",
    image: "",
    status: "concept",
    conceptBadge: "LAB",
  },
  {
    id: "baz-kids-lab",
    name: "BAZ Kids Lab",
    category: "PRODUCT CONCEPT",
    description:
      "Interactive learning programs for children focused on curiosity, digital skills, science projects and age-appropriate research habits.",
    image: "",
    status: "concept",
    conceptBadge: "KIDS",
  },
];
