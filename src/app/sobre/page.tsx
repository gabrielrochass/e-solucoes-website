import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  IconCapacete,
  IconCheckConformidade,
  IconEstetoscopio,
  IconFolhaPagamento,
} from "@/components/icons";
import { DocLinesPattern } from "@/components/illustrations/doc-lines-pattern";
import { HexPattern } from "@/components/illustrations/hex-pattern";
import { ImageSlot } from "@/components/illustrations/image-slot";
import { MeshGradient } from "@/components/illustrations/mesh-gradient";
import { RiskMatrixPattern } from "@/components/illustrations/risk-matrix-pattern";
import { CardFan } from "@/components/motion/card-fan";
import { Entrance, EntranceItem } from "@/components/motion/entrance";
import { Reveal } from "@/components/motion/reveal";
import {
  ScrollTimeline,
  type ScrollTimelineEntry,
} from "@/components/motion/scroll-timeline";
import { Stagger } from "@/components/motion/stagger";
import { TextReveal } from "@/components/motion/text-reveal";
import { Section } from "@/components/sections/shared/section";
import { SectionHeading } from "@/components/sections/shared/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre a E-Soluções",
  description:
    "SST, clínica ocupacional e departamento pessoal na mesma operação, em Recife/PE. Conheça a tese da E-Soluções: conformidade integrada, sem retrabalho.",
};

function StepBullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
          <span
            aria-hidden
            className="mt-1.5 size-2 shrink-0 rounded-xs bg-petrol-300"
          />
          <span className="text-ink-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}

const methodEntries: ScrollTimelineEntry[] = [
  {
    title: "Diagnóstico",
    content: (
      <div>
        <p className="leading-relaxed text-ink">
          Mapeamos o que existe: documentos, exames, folha, prazos. Sem
          julgamento, só o retrato honesto de onde a empresa está.
        </p>
        <StepBullets
          items={[
            "Inventário de documentos legais e vencimentos",
            "Conversa com RH e operações sobre a rotina real",
            "Retrato de conformidade por pilar (DP, clínica, SST)",
          ]}
        />
        <div aria-hidden className="mt-6 max-w-56 opacity-80">
          <RiskMatrixPattern
            tone="light"
            rows={3}
            cols={6}
            litCells={[
              { x: 1, y: 1, level: "medium" },
              { x: 4, y: 0, level: "high" },
            ]}
            className="h-auto w-full"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Plano dimensionado",
    content: (
      <div>
        <p className="leading-relaxed text-ink">
          Prioridade pelo risco real e pelo passivo potencial, não por pacote
          de prateleira.
        </p>
        <StepBullets
          items={[
            "Urgências primeiro: o que gera multa ou interdição amanhã",
            "Cronograma com responsáveis e prazos por entrega",
            "Escopo e orçamento fechados antes de começar",
          ]}
        />
        <div aria-hidden className="mt-6 h-24 max-w-56 overflow-hidden rounded-md opacity-80">
          <DocLinesPattern tone="light" />
        </div>
      </div>
    ),
  },
  {
    title: "Execução integrada",
    content: (
      <div>
        <p className="leading-relaxed text-ink">
          PGR, PCMSO, exames e eSocial saem da mesma operação, e os dados batem
          entre si por construção.
        </p>
        <StepBullets
          items={[
            "O risco do PGR dimensiona o exame do PCMSO",
            "Eventos de SST do eSocial consistentes com a folha",
            "Um responsável técnico com nome e telefone",
          ]}
        />
        <div aria-hidden className="mt-6 h-24 max-w-56 overflow-hidden rounded-md opacity-80">
          <HexPattern tone="light" />
        </div>
      </div>
    ),
  },
  {
    title: "Acompanhamento",
    content: (
      <div>
        <p className="leading-relaxed text-ink">
          Legislação muda; seu compliance acompanha. Revisões e alertas de
          prazo fazem parte do serviço, não de um aditivo.
        </p>
        <StepBullets
          items={[
            "Revisão a cada mudança de norma, quadro ou processo",
            "Alertas de vencimento de exames, laudos e treinamentos",
            "Indicadores periódicos para a gestão",
          ]}
        />
      </div>
    ),
  },
];

const pillars = [
  { icon: IconFolhaPagamento, label: "Departamento Pessoal" },
  { icon: IconEstetoscopio, label: "Clínica Ocupacional" },
  { icon: IconCapacete, label: "Engenharia de SST" },
  { icon: IconCheckConformidade, label: "Serviços Complementares" },
];

export default function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-inverse text-ink-on-inverse">
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12">
          <Entrance className="lg:col-span-6">
            <EntranceItem>
              <p className="text-eyebrow text-petrol-300">Sobre a E-Soluções</p>
            </EntranceItem>
            <EntranceItem eager>
              <h1 className="text-display mt-4 text-white">
                Conformidade não é papelada.{" "}
                <span className="text-accent-on-inverse">É engenharia.</span>
              </h1>
            </EntranceItem>
            <EntranceItem>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted-on-inverse">
                Nascemos da constatação de que folha, exames e riscos viviam
                em três fornecedores que não se falavam, e de que era
                exatamente nessa fresta que moravam as multas. A E-Soluções
                existe para fechar essa fresta.
              </p>
            </EntranceItem>
          </Entrance>

          <div className="lg:col-span-6">
            <CardFan
              className="mx-auto max-w-md"
              cards={[
                <ImageSlot
                  key="1"
                  slotId="sobre-hero-1"
                  ratio="4/5"
                  className="h-full bg-petrol-900"
                >
                  <HexPattern tone="dark" />
                </ImageSlot>,
                <ImageSlot
                  key="2"
                  slotId="sobre-hero-2"
                  ratio="4/5"
                  className="h-full bg-petrol-900"
                >
                  <MeshGradient variant="petrol-orange" seed={2} />
                </ImageSlot>,
                <ImageSlot
                  key="3"
                  slotId="sobre-hero-3"
                  ratio="4/5"
                  className="h-full bg-petrol-900"
                >
                  <DocLinesPattern tone="dark" />
                </ImageSlot>,
              ]}
            />
          </div>
        </div>
      </section>

      <Section>
        <TextReveal
          text="Risco dimensionado. Pessoas protegidas. Empresa em conformidade."
          className="text-display mx-auto max-w-4xl text-petrol-700"
        />
      </Section>

      <Section tone="tint">
        <SectionHeading
          eyebrow="A tese"
          title="Um dado só, três usos"
          lead="O mesmo risco que entra no PGR dimensiona o exame do PCMSO e alimenta o evento de SST no eSocial. Quando isso acontece na mesma operação, a divergência, que é a causa nº 1 de notificação, simplesmente não tem onde nascer."
        />
        <Stagger className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.label} className="flex flex-col items-start gap-3">
              <span
                aria-hidden
                className="inline-flex size-11 items-center justify-center rounded-md bg-petrol-50 text-petrol-700"
              >
                <pillar.icon size={24} />
              </span>
              <p className="font-semibold text-petrol-700">{pillar.label}</p>
            </div>
          ))}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Método, não pacote"
          lead="Quatro fases, sempre nesta ordem. A linha abaixo acompanha seu scroll pelo caminho completo."
        />
        <div className="mt-14">
          <ScrollTimeline entries={methodEntries} />
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ImageSlot slotId="sobre-especialista" ratio="3/4">
                <MeshGradient variant="petrol-orange" seed={1} />
              </ImageSlot>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-eyebrow text-accent-text">Quem responde</p>
              <h2 className="text-h2 mt-3 text-petrol-700">
                {siteConfig.specialist.name}
              </h2>
              <p className="text-eyebrow mt-1 text-ink-meta">
                {siteConfig.specialist.role}
              </p>
              <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">
                À frente da E-Soluções, Adna construiu a operação em cima de
                uma regra simples: quem assina o documento precisa responder
                por ele. Cada PGR, laudo e folha que sai daqui tem nome,
                registro e telefone de quem atende quando a fiscalização
                liga.
              </p>
              <div className="mt-7">
                <Button asChild size="lg">
                  <Link href="/contato">Conversar com a Adna</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Sobre", path: "/sobre" },
        ])}
      />
    </>
  );
}
