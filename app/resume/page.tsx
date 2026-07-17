import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";

import { experience } from "@/lib/data/experience";
import { techStack } from "@/lib/data/tech-stack";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { TechStackChip } from "@/components/tech-stack-chip";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience, education, and skills.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Background" title="Resume" />
          <Button asChild variant="outline" className="cursor-pointer gap-1.5">
            <Link href={siteConfig.resumeUrl} target="_blank" rel="noreferrer noopener">
              <Download className="size-4" />
              Download PDF
            </Link>
          </Button>
        </div>
      </Reveal>

      <div className="mt-12">
        <Timeline entries={experience} />
      </div>

      <Reveal>
        <div className="mt-14">
          <h2 className="font-heading text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Skills
          </h2>
          <div className="mt-4 space-y-5">
            {techStack.map((group) => (
              <div key={group.group} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                <p className="w-32 shrink-0 text-sm font-medium text-muted-foreground">
                  {group.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechStackChip key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
