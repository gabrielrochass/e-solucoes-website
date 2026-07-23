import { Photo } from "@/components/photo/photo";
import { Entrance, EntranceItem } from "@/components/motion/entrance";
import type { StockPhotoKey } from "@/lib/photos";
import { cn } from "@/lib/utils";

interface PhotoHeroProps {
  photo: StockPhotoKey;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  actions?: React.ReactNode;
  /** Conteúdo extra abaixo das ações (ex.: faixa de números). */
  children?: React.ReactNode;
  /** Altura da dobra. */
  size?: "default" | "tall";
  /** LCP: primeira dobra da navegação. */
  priority?: boolean;
}

/**
 * Hero liderado por foto real: a foto ocupa a seção inteira, com um overlay
 * petróleo (da esquerda) que garante contraste AA do texto claro por cima.
 * O texto entra em cascata; o título é `eager` (LCP nítido). Substitui os
 * heros de fundo abstrato (matriz/gradiente).
 */
export function PhotoHero({
  photo,
  eyebrow,
  title,
  lead,
  actions,
  children,
  size = "default",
  priority = false,
}: PhotoHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-surface-inverse text-ink-on-inverse">
      <div className="absolute inset-0">
        <Photo
          photo={photo}
          treatment="grade"
          priority={priority}
          sizes="100vw"
        />
        {/* Overlay direcional: garante AA do texto à esquerda. */}
        <span
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-petrol-950 from-15% via-petrol-950/85 via-45% to-petrol-950/35"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-petrol-950/70 to-transparent"
        />
      </div>

      <div
        className={cn(
          "relative mx-auto max-w-6xl px-4 sm:px-6",
          size === "tall" ? "py-28 lg:py-36" : "py-20 lg:py-28",
        )}
      >
        <Entrance className="max-w-xl lg:max-w-2xl">
          <EntranceItem eager>
            <p className="text-eyebrow text-petrol-200">{eyebrow}</p>
          </EntranceItem>
          <EntranceItem eager>
            <h1 className="text-display mt-4 text-white">{title}</h1>
          </EntranceItem>
          {lead && (
            <EntranceItem>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted-on-inverse">
                {lead}
              </p>
            </EntranceItem>
          )}
          {actions && (
            <EntranceItem>
              <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
            </EntranceItem>
          )}
          {children && <EntranceItem>{children}</EntranceItem>}
        </Entrance>
      </div>
    </section>
  );
}
