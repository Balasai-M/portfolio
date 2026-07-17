import { cn } from "@/lib/utils";

export function TechStackChip({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground/90 shadow-sm transition-colors hover:border-primary/40 hover:text-primary",
        className
      )}
    >
      {label}
    </span>
  );
}
