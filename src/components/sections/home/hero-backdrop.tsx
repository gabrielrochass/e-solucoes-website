"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { RiskMatrixPattern } from "@/components/illustrations/risk-matrix-pattern";

/**
 * Camadas decorativas do hero com parallax sutil (desktop-only via CSS,
 * desativado por prefers-reduced-motion). Apenas as matrizes se movem —
 * texto nunca entra em parallax.
 */
export function HeroBackdrop() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const slowLayer = useTransform(scrollY, [0, 600], [0, -24]);
  const fastLayer = useTransform(scrollY, [0, 600], [0, 24]);

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block"
      >
        <m.div
          style={reduceMotion ? undefined : { y: slowLayer }}
          className="absolute -right-16 -top-8 opacity-90"
        >
          <RiskMatrixPattern
            tone="dark"
            rows={6}
            cols={6}
            litCells={[
              { x: 1, y: 1, level: "low" },
              { x: 3, y: 2, level: "medium" },
              { x: 4, y: 4, level: "high" },
              { x: 5, y: 1, level: "medium" },
            ]}
            className="h-auto w-136"
          />
        </m.div>
        <m.div
          style={reduceMotion ? undefined : { y: fastLayer }}
          className="absolute -bottom-24 -right-40 opacity-40"
        >
          <RiskMatrixPattern
            tone="dark"
            rows={4}
            cols={8}
            className="h-auto w-176"
          />
        </m.div>
      </div>
    </LazyMotion>
  );
}
