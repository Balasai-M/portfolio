import type { TechStackGroup } from "@/lib/types";

export const techStack: TechStackGroup[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    group: "AI / LLM",
    items: [
      "OpenAI API",
      "LangChain",
      "Function calling",
      "RAG pipelines",
      "Prompt engineering",
      "pgvector",
    ],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Pydantic", "PostgreSQL", "Redis", "WebSockets", "Docker"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    group: "Tooling",
    items: ["Git", "GitHub Actions", "Vercel", "pytest", "Playwright"],
  },
];
