import { CardBadge } from "@/components/cards/card";
import {
  impactLabels,
  impactToRisk,
  type LegislationEvent,
} from "@/lib/legislation";
import { cn } from "@/lib/utils";

interface LegislationTimelineProps {
  events: LegislationEvent[];
  tone?: "dark" | "light";
}

/** Ponto colorido por impacto do marco. */
const dotColor: Record<LegislationEvent["impact"], string> = {
  critical: "bg-risk-high-solid",
  important: "bg-risk-medium-solid",
  update: "bg-petrol-400",
};

/**
 * Linha do tempo em estilo "roadmap": um trilho horizontal com pontos, cada
 * marco com ano, norma e uma linha de contexto. Tudo visível (sem expandir no
 * hover). Rola na horizontal em telas estreitas.
 */
export function LegislationTimeline({
  events,
  tone = "light",
}: LegislationTimelineProps) {
  const dark = tone === "dark";

  return (
    <ol
      role="list"
      aria-label="Linha do tempo da legislação"
      tabIndex={0}
      className={cn(
        // trilho contínuo atrás dos pontos via pseudo (não é filho da lista)
        "relative flex gap-8 overflow-x-auto pb-2 scrollbar-thin before:pointer-events-none before:absolute before:inset-x-0 before:top-1.5 before:h-px before:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600",
        dark ? "before:bg-petrol-800" : "before:bg-neutral-300",
      )}
    >
      {events.map((event) => (
        <li key={event.id} className="relative min-w-50 flex-1 pt-7">
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-0.5 size-3 rounded-full ring-4",
              dotColor[event.impact],
              dark ? "ring-surface-inverse" : "ring-surface-tint",
            )}
          />
          <p
            className={cn(
              "text-2xl font-bold tabular-nums",
              dark ? "text-white" : "text-petrol-700",
            )}
          >
            {event.year}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <CardBadge nr={event.nr} nivel={impactToRisk[event.impact]} />
            <span
              className={cn(
                "text-eyebrow",
                dark ? "text-ink-muted-on-inverse" : "text-ink-meta",
              )}
            >
              {impactLabels[event.impact]}
            </span>
          </div>
          <h3
            className={cn(
              "mt-2 font-semibold",
              dark ? "text-white" : "text-petrol-700",
            )}
          >
            {event.title}
          </h3>
          <p
            className={cn(
              "mt-1 text-sm leading-relaxed",
              dark ? "text-ink-muted-on-inverse" : "text-ink-muted",
            )}
          >
            {event.summary}
          </p>
        </li>
      ))}
    </ol>
  );
}
