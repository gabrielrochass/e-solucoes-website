"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TimelineItem } from "@/components/interactive/legislation-timeline/timeline-item";
import type { LegislationEvent } from "@/lib/legislation";

interface LegislationTimelineProps {
  events: LegislationEvent[];
}

/**
 * Trilho horizontal com scroll-snap. Teclado: setas ←/→ movem o foco entre
 * cards (roving tabindex) e centralizam o card focado.
 */
export function LegislationTimeline({ events }: LegislationTimelineProps) {
  const [focusIndex, setFocusIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
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
          role="group"
          aria-label="Linha do tempo da legislação"
          onKeyDown={handleKeyDown}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto border-b border-neutral-200 pb-8 [scrollbar-width:thin]"
        >
          {events.map((event, index) => (
            <TimelineItem
              key={event.id}
              event={event}
              tabIndex={index === focusIndex ? 0 : -1}
              onFocus={() => setFocusIndex(index)}
              itemRef={(el) => {
                itemRefs.current[index] = el;
              }}
            />
          ))}
        </ul>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-surface to-transparent"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-eyebrow text-ink-meta">
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
