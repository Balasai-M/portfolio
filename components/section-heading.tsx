type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
