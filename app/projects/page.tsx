import type { Metadata } from "next";

import { projects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsGrid } from "./projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI agents, RAG systems, and full-stack applications I've designed and shipped.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="Agents, RAG pipelines, LLM tools, and the full-stack apps that hold them together."
      />
      <div className="mt-10">
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
