import type { ExperienceEntry } from "@/lib/types";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

const kindLabel: Record<ExperienceEntry["kind"], string> = {
  work: "Work",
  education: "Education",
  project: "Project",
};

export function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="relative border-s border-border pl-6 sm:pl-8">
      {entries.map((entry, i) => (
        <li key={entry.id} className="mb-10 last:mb-0">
          <Reveal delay={i * 0.05}>
            <span
              aria-hidden
              className="absolute -start-[7px] mt-1.5 size-3.5 rounded-full border-2 border-background bg-primary"
            />
            <div className="flex flex-wrap items-center gap-2">
              <time className="text-sm font-medium text-muted-foreground">{entry.range}</time>
              <Badge variant="outline">{kindLabel[entry.kind]}</Badge>
            </div>
            <h3 className="mt-1 font-heading text-lg font-semibold">{entry.title}</h3>
            <p className="text-sm text-muted-foreground">{entry.org}</p>
            <p className="mt-2 max-w-2xl text-sm text-foreground/90">{entry.summary}</p>
            {entry.highlights.length > 0 ? (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary">
                {entry.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
