import {
  StickyScroll,
  type StickyScrollItem,
} from "@/components/motion/sticky-scroll";
import { Photo } from "@/components/photo/photo";
import type { ServiceSolutionCard } from "@/data/services/types";
import type { StockPhotoKey } from "@/lib/photos";

function SolutionPanel({
  solution,
  photo,
}: {
  solution: ServiceSolutionCard;
  photo: StockPhotoKey;
}) {
  return (
    <div className="relative flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-lg bg-petrol-900 lg:aspect-auto lg:h-full lg:rounded-none">
      <div aria-hidden className="absolute inset-0">
        <Photo
          photo={photo}
          treatment="grade"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
        <span className="absolute inset-0 bg-petrol-950/45" />
      </div>
      <span
        aria-hidden
        className="relative inline-flex size-20 items-center justify-center rounded-lg bg-surface-raised text-petrol-700 shadow-card-hover"
      >
        <solution.icon size={32} />
      </span>
    </div>
  );
}

/** Adapta as soluções tipadas do serviço para o StickyScroll. O painel usa
 * a foto do serviço como fundo (com overlay), o ícone da solução por cima. */
export function SolutionSticky({
  solutions,
  photo,
}: {
  solutions: ServiceSolutionCard[];
  photo: StockPhotoKey;
}) {
  const items: StickyScrollItem[] = solutions.map((solution) => ({
    id: solution.title,
    title: solution.title,
    body: (
      <>
        <p className="font-medium text-ink">{solution.summary}</p>
        <p className="mt-2">{solution.detail}</p>
      </>
    ),
    panel: <SolutionPanel solution={solution} photo={photo} />,
  }));

  return <StickyScroll items={items} />;
}
