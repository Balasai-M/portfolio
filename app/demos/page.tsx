import type { Metadata } from "next";

import { aiDemos } from "@/lib/data/demos";
import { SectionHeading } from "@/components/section-heading";
import { DemoEmbed } from "@/components/demo-embed";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "AI Demos",
  description: "Live and in-progress AI agent and RAG demos, embedded directly on the page.",
};

export default function DemosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Hands-on"
        title="AI / Agent demos"
        description="These run live where possible. If something isn't publicly embeddable yet, you'll see the source or a walkthrough instead of a broken frame."
      />
      <div className="mt-10 space-y-8">
        {aiDemos.map((demo, i) => (
          <Reveal key={demo.slug} delay={i * 0.05}>
            <DemoEmbed demo={demo} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
