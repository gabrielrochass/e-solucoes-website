import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardBadge,
  CardBody,
  CardCTA,
  CardIcon,
  CardMeta,
  CardTitle,
} from "@/components/cards/card";
import { CardHoverReveal } from "@/components/cards/card-hover-reveal";
import * as Icons from "@/components/icons";
import { DocLinesPattern } from "@/components/illustrations/doc-lines-pattern";
import { HexPattern } from "@/components/illustrations/hex-pattern";
import { ImageSlot } from "@/components/illustrations/image-slot";
import { MeshGradient } from "@/components/illustrations/mesh-gradient";
import { RiskMatrixPattern } from "@/components/illustrations/risk-matrix-pattern";
import { riskLabels, type RiskLevel } from "@/lib/risk";

export const metadata: Metadata = {
  title: "Styleguide (interno)",
  robots: { index: false, follow: false },
};

const colorGroups: Array<{ name: string; classes: string[] }> = [
  {
    name: "Petróleo",
    classes: [
      "bg-petrol-50",
      "bg-petrol-100",
      "bg-petrol-200",
      "bg-petrol-300",
      "bg-petrol-400",
      "bg-petrol-500",
      "bg-petrol-600",
      "bg-petrol-700",
      "bg-petrol-800",
      "bg-petrol-900",
      "bg-petrol-950",
    ],
  },
  {
    name: "Laranja",
    classes: [
      "bg-orange-50",
      "bg-orange-100",
      "bg-orange-200",
      "bg-orange-300",
      "bg-orange-400",
      "bg-orange-500",
      "bg-orange-600",
      "bg-orange-700",
      "bg-orange-800",
      "bg-orange-900",
    ],
  },
  {
    name: "Neutros",
    classes: [
      "bg-paper",
      "bg-neutral-100",
      "bg-neutral-200",
      "bg-neutral-300",
      "bg-neutral-400",
      "bg-neutral-500",
      "bg-neutral-600",
      "bg-ink",
    ],
  },
];

const riskLevels: RiskLevel[] = ["low", "medium", "high"];

const iconEntries = Object.entries(Icons).filter(
  ([name]) => name.startsWith("Icon"),
) as Array<[string, React.ComponentType<{ size?: 16 | 20 | 24 | 32 }>]>;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-neutral-200 py-10">
      <h2 className="text-h2 text-petrol-700">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-eyebrow text-accent-text">Interno · não indexada</p>
      <h1 className="text-display mt-2 text-petrol-700">Styleguide</h1>

      <Section title="Cores">
        <div className="space-y-4">
          {colorGroups.map((group) => (
            <div key={group.name}>
              <p className="text-eyebrow text-ink-meta">{group.name}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {group.classes.map((cls) => (
                  <div key={cls} className="w-20">
                    <div className={`h-10 rounded-md ${cls}`} />
                    <p className="mt-1 truncate text-[10px] text-ink-meta">
                      {cls.replace("bg-", "")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tipografia">
        <div className="space-y-4">
          <p className="text-display text-petrol-700">Display — tese do hero</p>
          <p className="text-h2 text-petrol-700">H2 — título de seção</p>
          <p className="text-h3 text-petrol-700">H3 — título de card</p>
          <p className="text-body max-w-prose">
            Body 16px, line-height 1.4 — texto corrido do site inteiro.
          </p>
          <p className="text-eyebrow text-ink-meta">
            NR-5 · Eyebrow meta uppercase
          </p>
          <p className="text-stat tabular-stat text-petrol-700">
            850<span className="text-h3 text-orange-700">+</span>
          </p>
        </div>
      </Section>

      <Section title="Badges de risco">
        <div className="flex flex-wrap items-center gap-3">
          {riskLevels.map((nivel) => (
            <CardBadge key={nivel} nr={riskLabels[nivel]} nivel={nivel} />
          ))}
          <CardBadge nr="NR-35" />
          <Badge>shadcn badge</Badge>
        </div>
      </Section>

      <Section title="Botões">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destrutivo</Button>
          <Button disabled>Desabilitado</Button>
          <Button className="bg-orange-400 text-ink hover:bg-orange-500">
            CTA laranja
          </Button>
        </div>
      </Section>

      <Section title="Ícones de domínio (16)">
        <ul className="grid grid-cols-4 gap-4 sm:grid-cols-8">
          {iconEntries.map(([name, Icon]) => (
            <li
              key={name}
              className="flex flex-col items-center gap-2 rounded-md bg-surface-raised p-3 text-petrol-700 shadow-card"
            >
              <Icon size={24} />
              <span className="text-center text-[10px] text-ink-meta">
                {name.replace("Icon", "")}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Illustrations / placeholders">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ImageSlot slotId="styleguide-mesh" ratio="4/3">
            <MeshGradient variant="petrol-orange" seed={2} />
          </ImageSlot>
          <div className="rounded-lg bg-surface-inverse p-6">
            <RiskMatrixPattern
              tone="dark"
              litCells={[
                { x: 1, y: 1, level: "low" },
                { x: 3, y: 2, level: "medium" },
                { x: 4, y: 4, level: "high" },
              ]}
              className="h-auto w-full"
            />
          </div>
          <div className="grid gap-4">
            <ImageSlot slotId="styleguide-hex" ratio="16/9">
              <HexPattern tone="light" />
            </ImageSlot>
            <ImageSlot slotId="styleguide-doc" ratio="16/9">
              <DocLinesPattern tone="light" />
            </ImageSlot>
          </div>
        </div>
      </Section>

      <Section title="Cards">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardBadge nr="NR-35" nivel="high" />
            <CardIcon className="mt-4">
              <Icons.IconCapacete size={24} />
            </CardIcon>
            <CardTitle className="mt-3">Trabalho em Altura</CardTitle>
            <CardMeta className="mt-1">8h · Presencial</CardMeta>
            <CardBody className="mt-3">
              Capacitação obrigatória para atividades acima de 2 metros.
            </CardBody>
            <CardCTA href="/treinamentos" className="mt-4">
              Ver programa
            </CardCTA>
          </Card>
          <Card variant="tint">
            <CardTitle>Card tint</CardTitle>
            <CardBody className="mt-2">
              Superfície alternativa para seções claras.
            </CardBody>
          </Card>
          <Card variant="inverse">
            <CardTitle className="text-white">Card inverse</CardTitle>
            <CardBody className="mt-2 text-ink-muted-on-inverse">
              Superfície escura com tokens on-dark validados.
            </CardBody>
          </Card>
        </div>
        <div className="mt-6 max-w-sm">
          <p className="text-eyebrow mb-2 text-ink-meta">
            Hover-expand (zero layout shift)
          </p>
          <CardHoverReveal
            summary={
              <Card>
                <CardBadge nr="NR-10" nivel="medium" />
                <CardTitle className="mt-3">Segurança Elétrica</CardTitle>
                <CardMeta className="mt-1">40h · Semipresencial</CardMeta>
                <CardBody className="mt-3 pb-10">
                  Passe o mouse ou foque para ver o detalhe.
                </CardBody>
              </Card>
            }
            detail={
              <div>
                <CardBody>
                  Formação completa NR-10 com laboratório prático.
                </CardBody>
                <CardCTA href="/treinamentos" className="mt-2">
                  Comprar curso
                </CardCTA>
              </div>
            }
          />
        </div>
      </Section>
    </div>
  );
}
