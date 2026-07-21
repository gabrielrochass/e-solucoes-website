import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "default" | "inverse";
  className?: string;
}

/**
 * Header de seção com deslocamento assimétrico: eyebrow na coluna 1,
 * título começando na coluna 2 em desktop (nada centrado).
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-3 lg:grid-cols-12", className)}>
      <p
        className={cn(
          "text-eyebrow lg:col-span-12",
          tone === "inverse" ? "text-accent-on-inverse" : "text-accent-text",
        )}
      >
        {eyebrow}
      </p>
      <div className="lg:col-span-10 lg:col-start-2">
        <h2
          className={cn(
            "text-h2",
            tone === "inverse" ? "text-white" : "text-petrol-700",
          )}
        >
          {title}
        </h2>
        {lead && (
          <p
            className={cn(
              "mt-3 max-w-2xl",
              tone === "inverse"
                ? "text-ink-muted-on-inverse"
                : "text-ink-muted",
            )}
          >
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}
