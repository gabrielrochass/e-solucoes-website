"use client";

import { CardBadge } from "@/components/cards/card";
import {
  impactLabels,
  impactToRisk,
  type LegislationEvent,
} from "@/lib/legislation";

interface TimelineItemProps {
  event: LegislationEvent;
  tabIndex: 0 | -1;
  onFocus: () => void;
  buttonRef: (el: HTMLButtonElement | null) => void;
}

/**
 * Card de altura fixa; o resumo expande como overlay em hover/focus-within —
 * vizinhos nunca se movem (zero layout shift). O elemento focável é o botão
 * do título (roving tabindex); o resumo fica sempre no DOM para leitores de
 * tela (escondido só por opacity/transform).
 */
export function TimelineItem({
  event,
  tabIndex,
  onFocus,
  buttonRef,
}: TimelineItemProps) {
  const nivel = impactToRisk[event.impact];

  return (
    <li className="group relative h-56 w-72 shrink-0 snap-start overflow-hidden rounded-lg bg-surface-raised p-card shadow-card">
      <p className="text-stat tabular-stat text-petrol-400 transition-colors group-focus-within:text-petrol-500 group-hover:text-petrol-500">
        {event.year}
      </p>
      <div className="mt-3 flex items-center gap-2">
        <CardBadge nr={event.nr} nivel={nivel} />
        <span className="text-eyebrow text-ink-meta">
          {impactLabels[event.impact]}
        </span>
      </div>
      <h3 className="mt-3 line-clamp-2 font-semibold text-petrol-700">
        <button
          type="button"
          ref={buttonRef}
          tabIndex={tabIndex}
          onFocus={onFocus}
          className="text-left outline-offset-4"
        >
          {event.title}
        </button>
      </h3>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 border-t border-neutral-200 bg-surface-raised p-4 opacity-0 transition-[opacity,translate] duration-200 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm leading-relaxed text-ink-muted">
          {event.summary}
        </p>
      </div>
    </li>
  );
}
