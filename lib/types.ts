export type ProjectCategory = "agent" | "rag" | "llm-tool" | "web";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "repo" | "case-study" | "video";
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  featured: boolean;
  stack: string[];
  metrics?: { label: string; value: string }[];
  problem: string;
  approach: string;
  architecture?: string[];
  results: string;
  links: ProjectLink[];
  hasLiveDemo: boolean;
};

export type DemoMode = "iframe" | "video" | "link";

export type AiDemo = {
  slug: string;
  title: string;
  description: string;
  mode: DemoMode;
  embedUrl?: string;
  href?: string;
  tags: string[];
  status: "live" | "in-progress";
};

export type TechStackGroup = {
  group: string;
  items: string[];
};

export type ExperienceEntry = {
  id: string;
  range: string;
  title: string;
  org: string;
  summary: string;
  highlights: string[];
  kind: "work" | "education" | "project";
};
