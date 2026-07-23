"use client";

import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  IconBalanca,
  IconContrato,
  IconDocumentoPgr,
  type IconProps,
} from "@/components/icons";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const STAGGER = 0.12;

type Tone = "dark" | "light";

interface PericiaCard {
  title: string;
  desc: string;
  Icon: React.ComponentType<IconProps>;
  /** Deslocamento/rotação de baralho aplicados no estado final. */
  rotate: number;
  x: number;
}

const cards: PericiaCard[] = [
  {
    title: "Perícia judicial",
    desc: "Atuação técnica em processos trabalhistas",
    Icon: IconBalanca,
    rotate: -2.5,
    x: -6,
  },
  {
    title: "Assistência técnica",
    desc: "Pareceres e quesitos ao juízo",
    Icon: IconContrato,
    rotate: 1.5,
    x: 5,
  },
  {
    title: "Laudo de insalubridade",
    desc: "Caracterização de agentes nocivos",
    Icon: IconDocumentoPgr,
    rotate: -1,
    x: -3,
  },
  {
    title: "Laudo de periculosidade",
    desc: "Exposição a riscos acentuados",
    Icon: IconDocumentoPgr,
    rotate: 2,
    x: 6,
  },
  {
    title: "Terceirização de SST",
    desc: "Gestão completa terceirizada",
    Icon: IconBalanca,
    rotate: -1.5,
    x: -4,
  },
];

const count = cards.length;

interface CardCustom {
  i: number;
  rotate: number;
  x: number;
}

/** Entram de baixo pra cima: o card do fundo revela primeiro (delay menor). */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, rotate: 0, x: 0 },
  visible: ({ i, rotate, x }: CardCustom) => ({
    opacity: 1,
    y: 0,
    rotate,
    x,
    transition: { duration: 0.5, ease: EASE, delay: (count - 1 - i) * STAGGER },
  }),
};

interface PericiaStackProps {
  tone?: Tone;
  className?: string;
}

/**
 * Pilha de tipos de perícia/laudo em SST, empilhados tipo baralho (leve
 * rotação e deslocamento). Revelam em cascata de baixo pra cima na entrada.
 * Reduced motion: baralho já montado, estático.
 */
export function PericiaStack({ tone = "dark", className }: PericiaStackProps) {
  const reduceMotion = useReducedMotion();
  const dark = tone === "dark";

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <m.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          role="list"
          aria-label="Tipos de perícia e laudo em segurança do trabalho"
          className={cn("flex w-full max-w-sm flex-col gap-2.5", className)}
        >
          {cards.map((card, i) => (
            <m.div
              key={card.title}
              role="listitem"
              custom={{ i, rotate: card.rotate, x: card.x } satisfies CardCustom}
              variants={cardVariants}
              className={cn(
                "flex items-center gap-3 rounded-lg p-3.5",
                dark
                  ? "border border-petrol-800 bg-petrol-900"
                  : "bg-surface-raised shadow-card",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "inline-flex size-10 shrink-0 items-center justify-center rounded-md",
                  dark
                    ? "bg-petrol-950 text-accent-on-inverse"
                    : "bg-petrol-50 text-petrol-700",
                )}
              >
                <card.Icon size={20} />
              </span>
              <div className="min-w-0">
                <p
                  className={cn(
                    "text-sm font-semibold",
                    dark ? "text-ink-on-inverse" : "text-petrol-700",
                  )}
                >
                  {card.title}
                </p>
                <p
                  className={cn(
                    "text-meta",
                    dark ? "text-ink-muted-on-inverse" : "text-ink-muted",
                  )}
                >
                  {card.desc}
                </p>
              </div>
            </m.div>
          ))}
        </m.div>
      </MotionConfig>
    </LazyMotion>
  );
}
