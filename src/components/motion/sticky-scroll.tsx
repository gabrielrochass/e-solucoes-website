"use client";

import { useRef, useState } from "react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { cn } from "@/lib/utils";

export interface StickyScrollItem {
  id: string;
  title: string;
  body: React.ReactNode;
  panel: React.ReactNode;
}

interface StickyScrollProps {
  items: StickyScrollItem[];
  className?: string;
}

/**
 * Texto rola à esquerda; painel visual sticky à direita troca (crossfade de
 * opacity) conforme o item ativo (adaptado do Sticky Scroll Reveal do
 * Aceternity UI). Painel com aspect fixo — zero CLS. Todo o texto fica
 * sempre no DOM com contraste AA (o destaque do item ativo é cor + barra,
 * nunca opacidade baixa). No mobile o painel renderiza inline por item.
 */
export function StickyScroll({ items, className }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.55", "end 0.55"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      items.length - 1,
      Math.max(0, Math.floor(latest * items.length)),
    );
    setActive(index);
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div
          ref={containerRef}
          className={cn("relative lg:grid lg:grid-cols-2 lg:gap-14", className)}
        >
          <div>
            {items.map((item, index) => {
              const isActive = index === active;
              return (
                <div
                  key={item.id}
                  className="border-l-2 border-transparent py-8 pl-5 transition-colors first:pt-0 lg:flex lg:min-h-80 lg:flex-col lg:justify-center lg:py-12 lg:first:pt-0 data-[active=true]:border-orange-400"
                  data-active={isActive}
                >
                  <h3
                    className={cn(
                      "text-h3 transition-colors",
                      isActive ? "text-petrol-700" : "text-ink-muted",
                    )}
                  >
                    {item.title}
                  </h3>
                  <div className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.body}
                  </div>
                  <div className="mt-6 lg:hidden">{item.panel}</div>
                </div>
              );
            })}
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-28 aspect-4/3 overflow-hidden rounded-lg shadow-card">
              {items.map((item, index) => (
                <m.div
                  key={item.id}
                  initial={false}
                  animate={{ opacity: index === active ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden={index !== active}
                  className="absolute inset-0"
                >
                  {item.panel}
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
