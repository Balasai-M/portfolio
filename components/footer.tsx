import Link from "next/link";
import { Mail } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-1">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <GithubIcon className="size-[18px]" />
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <LinkedinIcon className="size-[18px]" />
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            aria-label="Send an email"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Mail className="size-[18px]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
