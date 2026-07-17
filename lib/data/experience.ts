import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    id: "role-latest",
    range: "2024 — Present",
    title: "Full-Stack Developer",
    org: "Your Current Company",
    summary:
      "Building AI-powered product features end to end: FastAPI services, LLM integrations, and the React interfaces on top of them.",
    highlights: [
      "Shipped an LLM-backed feature used by production traffic, including prompt versioning and output validation",
      "Built and maintained RAG ingestion pipelines feeding a customer-facing assistant",
      "Owned frontend performance work, moving key routes to Server Components",
    ],
    kind: "work",
  },
  {
    id: "role-prior",
    range: "2022 — 2024",
    title: "Software Engineer",
    org: "Previous Company",
    summary:
      "Full-stack development across a Python/FastAPI backend and a React frontend, plus early experimentation with LLM-based tooling.",
    highlights: [
      "Designed REST APIs and data models for core product workflows",
      "Introduced automated testing (pytest, Playwright) to a previously untested codebase",
    ],
    kind: "work",
  },
  {
    id: "education",
    range: "2018 — 2022",
    title: "B.S. in Computer Science",
    org: "Your University",
    summary: "Coursework in algorithms, databases, and distributed systems.",
    highlights: [],
    kind: "education",
  },
];
