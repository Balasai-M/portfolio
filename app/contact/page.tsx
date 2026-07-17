import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about roles, freelance work, or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's talk"
          description="Open to full-time roles and select freelance/contract work involving LLM agents, RAG systems, or full-stack product engineering."
        />
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{siteConfig.location}</span>
            </div>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-sm font-medium hover:text-primary"
            >
              <Mail className="size-4" />
              {siteConfig.email}
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 text-sm font-medium hover:text-primary"
            >
              <GithubIcon className="size-4" />
              GitHub
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 text-sm font-medium hover:text-primary"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="md:col-span-3">
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
