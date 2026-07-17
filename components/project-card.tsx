"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";

import type { Project } from "@/lib/types";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categoryLabel: Record<Project["category"], string> = {
  agent: "Agent",
  rag: "RAG",
  "llm-tool": "LLM Tool",
  web: "Web",
};

export function ProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const liveLink = project.links.find((l) => l.kind === "live");
  const repoLink = project.links.find((l) => l.kind === "repo");

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="group relative flex h-full flex-col overflow-hidden border-border/70 transition-shadow hover:shadow-lg hover:shadow-primary/5">
        <div
          aria-hidden
          className="h-28 w-full bg-[linear-gradient(120deg,var(--brand-primary),var(--brand-secondary)_50%,var(--brand-accent))] opacity-90"
        />
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <Badge variant="secondary" className="w-fit">
              {categoryLabel[project.category]}
            </Badge>
            {project.hasLiveDemo ? (
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            ) : null}
          </div>
          <CardTitle className="font-heading text-xl">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </CardTitle>
          <CardDescription className="line-clamp-3">{project.summary}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-wrap items-start gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="outline" className="font-normal">
              {tech}
            </Badge>
          ))}
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t border-border/60 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Case study
            <ArrowUpRight className="size-3.5" />
          </Link>
          <div className="flex items-center gap-1">
            {repoLink ? (
              <Link
                href={repoLink.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} source code`}
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </Link>
            ) : null}
            {liveLink ? (
              <Link
                href={liveLink.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} live demo`}
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <PlayCircle className="size-4" />
              </Link>
            ) : null}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
