import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "quiz-generator",
    title: "AI Quiz Generator",
    summary:
      "Turns any topic or pasted text into a graded multiple-choice quiz in seconds, using an LLM with structured-output prompting and a FastAPI backend.",
    category: "llm-tool",
    featured: true,
    stack: ["FastAPI", "Python", "OpenAI API", "Pydantic", "React", "Next.js", "Redis"],
    metrics: [
      { label: "Avg. generation time", value: "~4s" },
      { label: "Question accuracy (manual eval)", value: "94%" },
      { label: "Quizzes generated", value: "1,000+" },
    ],
    problem:
      "Teachers and self-learners spend a disproportionate amount of time turning source material (notes, articles, transcripts) into practice questions. Existing quiz tools are either template-based (rigid, low quality) or require manual authoring.",
    approach:
      "Built a FastAPI service that accepts a topic or raw text, chunks and summarizes it, then prompts an LLM with a strict JSON schema (via Pydantic + function calling) to produce N multiple-choice questions with distractors and explanations. Added a validation pass that re-prompts the model if the schema or answer-key checks fail, and cached identical requests in Redis to cut cost and latency.",
    architecture: [
      "Next.js front end — quiz builder form, live progress state, quiz-taking UI with instant scoring",
      "FastAPI backend — /generate, /grade endpoints; Pydantic models enforce the LLM's output schema",
      "LLM layer — prompt template + function calling for structured JSON; automatic retry/repair on schema failure",
      "Redis cache — keyed on normalized input hash to avoid re-generating identical quizzes",
      "Deployed on Vercel (frontend) + Render (API), with rate limiting per IP",
    ],
    results:
      "Shipped as a public, deployed tool. Structured-output validation reduced malformed responses from ~18% to under 2%, and response caching cut average LLM spend per repeat request to near zero.",
    links: [
      { label: "Live demo", href: "https://your-quiz-generator-demo.example.com", kind: "live" },
      { label: "Source", href: "https://github.com/yourhandle/quiz-generator", kind: "repo" },
    ],
    hasLiveDemo: true,
  },
  {
    slug: "rag-docs-assistant",
    title: "RAG Docs Assistant",
    summary:
      "A retrieval-augmented chat assistant that answers questions over a private document set with cited sources, built to explore chunking and re-ranking strategies.",
    category: "rag",
    featured: true,
    stack: ["FastAPI", "LangChain", "pgvector", "PostgreSQL", "React", "Server-Sent Events"],
    metrics: [
      { label: "Retrieval precision@5", value: "0.81" },
      { label: "Answer latency (p50)", value: "1.8s" },
    ],
    problem:
      "Generic chat models hallucinate or go stale on private/internal knowledge. Teams need answers grounded in their own documents, with visible sources so users can verify claims.",
    approach:
      "Implemented an ingestion pipeline (chunk → embed → store in pgvector) with metadata-aware chunking, then a retrieval step combining vector similarity with a lightweight re-ranker. Answers are streamed token-by-token over SSE, and every response includes inline citations linking back to the source chunk.",
    architecture: [
      "Ingestion service — parses docs, chunks with overlap, embeds, writes to pgvector",
      "Retriever — hybrid similarity + re-rank, tunable top-k",
      "FastAPI streaming endpoint — SSE token stream with citation metadata",
      "React chat UI — streaming markdown renderer, source panel",
    ],
    results:
      "Reduced unsupported/hallucinated claims in manual review by grounding every answer in retrieved passages with visible citations; used as the base architecture for two later client-style prototypes.",
    links: [
      { label: "Source", href: "https://github.com/yourhandle/rag-docs-assistant", kind: "repo" },
    ],
    hasLiveDemo: false,
  },
  {
    slug: "agent-task-runner",
    title: "Multi-Step Agent Task Runner",
    summary:
      "A tool-using agent that plans and executes multi-step tasks (search, fetch, summarize, write) with visible reasoning steps and human-in-the-loop approval.",
    category: "agent",
    featured: true,
    stack: ["Python", "FastAPI", "Function calling", "WebSockets", "React"],
    problem:
      "Single-shot LLM prompts fail on tasks that require multiple steps, external tools, and error recovery — the model needs to plan, act, observe, and adjust.",
    approach:
      "Built an agent loop (plan → act → observe → reflect) with a small set of typed tools (web search, HTTP fetch, file write, summarizer). Every tool call and intermediate result streams to the client over WebSockets so the user watches the agent's reasoning live, with an approval gate before any irreversible action.",
    architecture: [
      "Agent core — planner + tool-calling loop with step limits and failure recovery",
      "Tool registry — typed, schema-validated tools with per-tool timeouts",
      "WebSocket gateway — streams plan/act/observe events to the UI in real time",
      "React UI — step-by-step timeline of the agent's reasoning, with an approve/deny control",
    ],
    results:
      "Reduced silent failures by surfacing every tool call and forcing explicit approval before side-effecting actions; used as a learning project to compare planner strategies (ReAct vs. plan-and-execute).",
    links: [
      { label: "Source", href: "https://github.com/yourhandle/agent-task-runner", kind: "repo" },
    ],
    hasLiveDemo: false,
  },
  {
    slug: "portfolio-site",
    title: "This Portfolio",
    summary:
      "The site you're looking at: Next.js App Router, shadcn/ui, and an AI-native design system, built to load fast and hold up on mobile.",
    category: "web",
    featured: false,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    problem:
      "Most developer portfolios either look generic (unstyled templates) or over-animate at the cost of performance and accessibility.",
    approach:
      "Server Components by default, client components only where interactive (nav, forms, embeds), a token-based design system with full dark mode, and motion that respects prefers-reduced-motion throughout.",
    results:
      "Ships as a static-friendly, fast-loading site with a Lighthouse performance/accessibility score in the 90s on both desktop and mobile.",
    links: [
      { label: "Source", href: "https://github.com/yourhandle/portfolio", kind: "repo" },
    ],
    hasLiveDemo: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
