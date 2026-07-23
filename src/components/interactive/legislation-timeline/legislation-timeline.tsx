"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TimelineItem } from "@/components/interactive/legislation-timeline/timeline-item";
import type { LegislationEvent } from "@/lib/legislation";
import { cn } from "@/lib/utils";

interface LegislationTimelineProps {
  events: LegislationEvent[];
  /** "dark" quando usado sobre fundo petróleo (hero de Engenharia). */
  tone?: "dark" | "light";
}

/**
 * Trilho horizontal com scroll-snap. Teclado: setas ←/→ movem o foco entre
 * cards (roving tabindex) e centralizam o card focado.
 */
export function LegislationTimeline({
  events,
  tone = "light",
}: LegislationTimelineProps) {
  const dark = tone === "dark";
  const [focusIndex, setFocusIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const trackRef = useRef<HTMLUListElement>(null);

  function moveFocus(nextIndex: number) {
    const clamped = Math.max(0, Math.min(events.length - 1, nextIndex));
    setFocusIndex(clamped);
    const el = itemRefs.current[clamped];
    el?.focus();
    el?.scrollIntoView({ inline: "center", block: "nearest" });
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      moveFocus(focusIndex + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      moveFocus(focusIndex - 1);
    }
  }

  function scrollByCards(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * 312, behavior: "smooth" });
  }

  return (
    <div>
      <div className="relative">
        <ul
          ref={trackRef}
          role="list"
          aria-label="Linha do tempo da legislação"
          onKeyDown={handleKeyDown}
          className={cn(
            "flex snap-x snap-mandatory gap-4 overflow-x-auto border-b pb-8 scrollbar-thin",
            dark ? "border-petrol-800" : "border-neutral-200",
          )}
        >
          {events.map((event, index) => (
            <TimelineItem
              key={event.id}
              event={event}
              tabIndex={index === focusIndex ? 0 : -1}
              onFocus={() => setFocusIndex(index)}
              buttonRef={(el) => {
                itemRefs.current[index] = el;
              }}
            />
          ))}
        </ul>
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l to-transparent",
            dark ? "from-surface-inverse" : "from-surface",
          )}
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p
          className={cn(
            "text-eyebrow",
            dark ? "text-petrol-300" : "text-ink-meta",
          )}
        >
          Use as setas ← → para navegar
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="Eventos anteriores"
            onClick={() => scrollByCards(-1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Próximos eventos"
            onClick={() => scrollByCards(1)}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
