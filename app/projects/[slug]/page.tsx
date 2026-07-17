import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, PlayCircle } from "lucide-react";

import { projects, getProjectBySlug } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { GithubIcon } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

const linkIcon = {
  live: PlayCircle,
  repo: GithubIcon,
  "case-study": ArrowUpRight,
  video: PlayCircle,
} as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        All projects
      </Link>

      <Reveal>
        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{project.category}</Badge>
            {project.hasLiveDemo ? (
              <Badge className="gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Live demo
              </Badge>
            ) : null}
          </div>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const Icon = linkIcon[link.kind];
              return (
                <Button key={link.href} asChild variant="outline" className="cursor-pointer gap-1.5">
                  <Link href={link.href} target="_blank" rel="noreferrer noopener">
                    <Icon className="size-4" />
                    {link.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </header>
      </Reveal>

      {project.metrics ? (
        <Reveal delay={0.05}>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-border p-4">
                <dt className="text-xs text-muted-foreground">{metric.label}</dt>
                <dd className="mt-1 font-heading text-xl font-semibold">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      ) : null}

      <Reveal delay={0.1}>
        <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-heading">
          <h2>Problem</h2>
          <p>{project.problem}</p>

          <h2>Approach</h2>
          <p>{project.approach}</p>

          {project.architecture ? (
            <>
              <h2>Architecture</h2>
              <ul>
                {project.architecture.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </>
          ) : null}

          <h2>Results</h2>
          <p>{project.results}</p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10">
          <h2 className="font-heading text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Stack
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Reveal>
    </article>
  );
}
