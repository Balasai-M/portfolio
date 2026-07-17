import type { AiDemo } from "@/lib/types";

export const aiDemos: AiDemo[] = [
  {
    slug: "quiz-generator",
    title: "AI Quiz Generator",
    description:
      "Paste a topic or source text and get a scored multiple-choice quiz back in seconds. Deployed and live — try it with your own material.",
    mode: "iframe",
    embedUrl: "https://your-quiz-generator-demo.example.com",
    tags: ["FastAPI", "OpenAI API", "Structured Output"],
    status: "live",
  },
  {
    slug: "rag-docs-assistant",
    title: "RAG Docs Assistant",
    description:
      "Ask questions over a private document set and get cited, grounded answers streamed token-by-token.",
    mode: "video",
    tags: ["LangChain", "pgvector", "SSE"],
    status: "in-progress",
  },
  {
    slug: "agent-task-runner",
    title: "Multi-Step Agent Task Runner",
    description:
      "Watch a tool-using agent plan, act, and self-correct across multiple steps, with a human approval gate before side effects.",
    mode: "link",
    href: "https://github.com/yourhandle/agent-task-runner",
    tags: ["Function calling", "WebSockets"],
    status: "in-progress",
  },
];
