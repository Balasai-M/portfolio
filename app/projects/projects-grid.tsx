"use client";

import * as React from "react";

import type { Project, ProjectCategory } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const filters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "agent", label: "Agents" },
  { value: "rag", label: "RAG" },
  { value: "llm-tool", label: "LLM Tools" },
  { value: "web", label: "Web" },
];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = React.useState<ProjectCategory | "all">("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <Tabs value={filter} onValueChange={(v) => setFilter(v as ProjectCategory | "all")}>
        <TabsList>
          {filters.map((f) => (
            <TabsTrigger key={f.value} value={f.value} className="cursor-pointer">
              {f.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={Math.min(i, 5) * 0.05} className="h-full">
            <div role="listitem" className="h-full">
              <ProjectCard project={project} />
            </div>
          </Reveal>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No projects in this category yet.
        </p>
      ) : null}
    </div>
  );
}
