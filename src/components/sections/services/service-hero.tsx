import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  IconBalanca,
  IconCapacete,
  IconEstetoscopio,
  IconFolhaPagamento,
  type IconProps,
} from "@/components/icons";
import { DocLinesPattern } from "@/components/illustrations/doc-lines-pattern";
import { HexPattern } from "@/components/illustrations/hex-pattern";
import { ImageSlot } from "@/components/illustrations/image-slot";
import { MeshGradient } from "@/components/illustrations/mesh-gradient";
import { RiskMatrixPattern } from "@/components/illustrations/risk-matrix-pattern";
import { CardFan } from "@/components/motion/card-fan";
import { Entrance, EntranceItem } from "@/components/motion/entrance";
import type { ServiceContent } from "@/data/services/types";

interface ServiceIdentity {
  icon: React.ComponentType<IconProps>;
  patterns: [React.ReactNode, React.ReactNode];
}

/** Identidade visual do leque por serviço (pattern dominante do domínio). */
const identities: Record<string, ServiceIdentity> = {
  "departamento-pessoal": {
    icon: IconFolhaPagamento,
    patterns: [
      <DocLinesPattern key="a" tone="dark" />,
      <MeshGradient key="b" seed={1} />,
    ],
  },
  "clinica-ocupacional": {
    icon: IconEstetoscopio,
    patterns: [
      <HexPattern key="a" tone="dark" />,
      <MeshGradient key="b" variant="petrol-orange" seed={2} />,
    ],
  },
  "engenharia-sst": {
    icon: IconCapacete,
    patterns: [
      <RiskMatrixPattern
        key="a"
        tone="dark"
        litCells={[
          { x: 1, y: 2, level: "medium" },
          { x: 3, y: 1, level: "high" },
        ]}
        className="h-full w-full"
      />,
      <MeshGradient key="b" seed={3} />,
    ],
  },
  complementares: {
    icon: IconBalanca,
    patterns: [
      <DocLinesPattern key="a" tone="dark" />,
      <MeshGradient key="b" variant="petrol-orange" seed={3} />,
    ],
  },
};

function PatternCard({
  slotId,
  children,
}: {
  slotId: string;
  children: React.ReactNode;
}) {
  return (
    <ImageSlot slotId={slotId} ratio="4/5" className="h-full bg-petrol-900">
      {children}
    </ImageSlot>
  );
}

/**
 * Hero das páginas de serviço: copy à esquerda, leque de 3 cards à direita
 * (slots de foto futura sobre patterns do domínio, ícone do serviço no
 * card central). Cada serviço tem pattern próprio para as 4 páginas não
 * parecerem clones.
 */
export function ServiceHero({ content }: { content: ServiceContent }) {
  const identity = identities[content.slug] ?? identities["engenharia-sst"];
  const Icon = identity.icon;

  return (
    <section className="relative overflow-hidden bg-surface-inverse text-ink-on-inverse">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12">
        <Entrance className="lg:col-span-6">
          <EntranceItem>
            <p className="text-eyebrow text-petrol-300">{content.eyebrow}</p>
          </EntranceItem>
          <EntranceItem eager>
            <h1 className="text-display mt-4 text-white">{content.title}</h1>
          </EntranceItem>
          <EntranceItem>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted-on-inverse">
              {content.lead}
            </p>
          </EntranceItem>
          <EntranceItem>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-orange-400 text-ink hover:bg-orange-500"
              >
                <Link href="/contato">Solicitar orçamento</Link>
              </Button>
            </div>
          </EntranceItem>
        </Entrance>

        <div className="lg:col-span-6">
          <CardFan
            className="mx-auto max-w-lg"
            cards={[
              <PatternCard
                key="1"
                slotId={`servico-${content.slug}-hero-1`}
              >
                {identity.patterns[0]}
              </PatternCard>,
              <div
                key="2"
                className="flex h-full w-full items-center justify-center bg-petrol-800"
              >
                <span
                  aria-hidden
                  className="inline-flex size-24 items-center justify-center rounded-lg bg-petrol-950 text-accent-on-inverse shadow-card-hover"
                >
                  <Icon size={32} />
                </span>
              </div>,
              <PatternCard
                key="3"
                slotId={`servico-${content.slug}-hero-3`}
              >
                {identity.patterns[1]}
              </PatternCard>,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
