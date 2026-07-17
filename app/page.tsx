import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { getFeaturedProjects } from "@/lib/data/projects";
import { techStack } from "@/lib/data/tech-stack";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { TechStackChip } from "@/components/tech-stack-chip";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const quiz = featured.find((p) => p.slug === "quiz-generator");

  return (
    <>
      {/* Hero */}
      <section className="bg-grid-fade relative overflow-hidden border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Reveal>
            {siteConfig.availableForWork ? (
              <Badge variant="secondary" className="mb-5 gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Available for new opportunities
              </Badge>
            ) : null}
            <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              I build <span className="text-gradient-brand">AI agents and RAG products</span>{" "}
              that ship.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="cursor-pointer gap-1.5">
                <Link href="/demos">
                  <PlayCircle className="size-4" />
                  Try the AI demos
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="cursor-pointer gap-1.5">
                <Link href="/projects">
                  View projects
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quiz generator spotlight */}
      {quiz ? (
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <Reveal>
              <div className="flex flex-col items-start gap-8 rounded-2xl border border-border bg-card p-6 sm:p-10 md:flex-row md:items-center">
                <div className="flex-1">
                  <Badge className="mb-3 gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Deployed &amp; live
                  </Badge>
                  <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
                    {quiz.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-muted-foreground">{quiz.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild className="cursor-pointer gap-1.5">
                      <Link href="/demos">
                        <PlayCircle className="size-4" />
                        Try it live
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" className="cursor-pointer gap-1.5">
                      <Link href={`/projects/${quiz.slug}`}>
                        Read the case study
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <dl className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3 md:w-80 md:flex-none">
                  {quiz.metrics?.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-border p-4">
                      <dt className="text-xs text-muted-foreground">{metric.label}</dt>
                      <dd className="mt-1 font-heading text-xl font-semibold">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Featured projects */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Selected work"
                title="Featured projects"
                description="A mix of shipped AI tools and infrastructure — agents, RAG, and the full-stack apps around them."
              />
              <Button asChild variant="ghost" className="cursor-pointer gap-1.5">
                <Link href="/projects">
                  All projects
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Toolbox" title="Tech stack" />
          </Reveal>
          <div className="mt-8 space-y-6">
            {techStack.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.05}>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <p className="w-32 shrink-0 text-sm font-medium text-muted-foreground">
                    {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechStackChip key={item} label={item} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
