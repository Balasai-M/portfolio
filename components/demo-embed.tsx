"use client";

import * as React from "react";
import Link from "next/link";
import { ExternalLink, RefreshCw, Clock } from "lucide-react";

import type { AiDemo } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DemoEmbed({ demo }: { demo: AiDemo }) {
  const [loaded, setLoaded] = React.useState(false);
  const [reloadKey, setReloadKey] = React.useState(0);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 px-4 py-3">
        <div className="flex items-center gap-2">
          <h3 className="font-heading font-semibold">{demo.title}</h3>
          <Badge
            variant={demo.status === "live" ? "default" : "secondary"}
            className="gap-1"
          >
            {demo.status === "live" ? (
              <span className="size-1.5 rounded-full bg-emerald-400" />
            ) : (
              <Clock className="size-3" />
            )}
            {demo.status === "live" ? "Live" : "In progress"}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {demo.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <p className="px-4 pt-3 text-sm text-muted-foreground">{demo.description}</p>

      <div className="p-4">
        {demo.mode === "iframe" && demo.embedUrl ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border sm:aspect-[16/9]">
            {!loaded ? (
              <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-muted text-sm text-muted-foreground">
                Loading live demo…
              </div>
            ) : null}
            <iframe
              key={reloadKey}
              src={demo.embedUrl}
              title={`${demo.title} — live demo`}
              className="size-full"
              loading="lazy"
              sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
              onLoad={() => setLoaded(true)}
            />
          </div>
        ) : demo.mode === "video" ? (
          <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/50 text-center">
            <Clock className="size-6 text-muted-foreground" />
            <p className="text-sm font-medium">Walkthrough coming soon</p>
            <p className="max-w-xs text-xs text-muted-foreground">
              This demo isn&apos;t public yet — a recorded walkthrough will replace this
              placeholder.
            </p>
          </div>
        ) : (
          <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/50 text-center">
            <p className="text-sm text-muted-foreground">
              Not embeddable yet — view the source instead.
            </p>
            {demo.href ? (
              <Button asChild size="sm" className="cursor-pointer">
                <Link href={demo.href} target="_blank" rel="noreferrer noopener">
                  Open repository
                  <ExternalLink className="size-3.5" />
                </Link>
              </Button>
            ) : null}
          </div>
        )}
      </div>

      {demo.mode === "iframe" && demo.embedUrl ? (
        <div className="flex items-center justify-between gap-2 border-t border-border/70 px-4 py-3">
          <Button
            variant="ghost"
            size="sm"
            className="cursor-pointer gap-1.5 text-muted-foreground"
            onClick={() => {
              setLoaded(false);
              setReloadKey((k) => k + 1);
            }}
          >
            <RefreshCw className="size-3.5" />
            Reload
          </Button>
          <Button asChild variant="outline" size="sm" className="cursor-pointer gap-1.5">
            <Link href={demo.embedUrl} target="_blank" rel="noreferrer noopener">
              Open full screen
              <ExternalLink className="size-3.5" />
            </Link>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
