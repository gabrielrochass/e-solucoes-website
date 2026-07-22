import {
  StickyScroll,
  type StickyScrollItem,
} from "@/components/motion/sticky-scroll";
import { DocLinesPattern } from "@/components/illustrations/doc-lines-pattern";
import { HexPattern } from "@/components/illustrations/hex-pattern";
import { MeshGradient } from "@/components/illustrations/mesh-gradient";
import { RiskMatrixPattern } from "@/components/illustrations/risk-matrix-pattern";
import type { ServiceSolutionCard } from "@/data/services/types";

const backdrops = [
  <RiskMatrixPattern
    key="matrix"
    tone="light"
    litCells={[
      { x: 1, y: 1, level: "low" },
      { x: 3, y: 2, level: "medium" },
    ]}
    className="h-full w-full"
  />,
  <HexPattern key="hex" tone="light" />,
  <DocLinesPattern key="doc" tone="light" />,
  <MeshGradient key="mesh" seed={2} />,
];

function SolutionPanel({
  solution,
  index,
}: {
  solution: ServiceSolutionCard;
  index: number;
}) {
  return (
    <div className="relative flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-lg bg-surface-raised lg:aspect-auto lg:h-full lg:rounded-none">
      <div aria-hidden className="absolute inset-0 opacity-60">
        {backdrops[index % backdrops.length]}
      </div>
      <span
        aria-hidden
        className="relative inline-flex size-20 items-center justify-center rounded-lg bg-surface-raised text-petrol-700 shadow-card"
      >
        <solution.icon size={32} />
      </span>
    </div>
  );
}

/** Adapta as soluções tipadas do serviço para o StickyScroll. */
export function SolutionSticky({
  solutions,
}: {
  solutions: ServiceSolutionCard[];
}) {
  const items: StickyScrollItem[] = solutions.map((solution, index) => ({
    id: solution.title,
    title: solution.title,
    body: (
      <>
        <p className="font-medium text-ink">{solution.summary}</p>
        <p className="mt-2">{solution.detail}</p>
      </>
    ),
    panel: <SolutionPanel solution={solution} index={index} />,
  }));

  return <StickyScroll items={items} />;
}
