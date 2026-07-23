import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  IconCapacete,
  IconCheckConformidade,
  IconEstetoscopio,
  IconFolhaPagamento,
} from "@/components/icons";
import { ImageSlot } from "@/components/illustrations/image-slot";
import { NumberTicker } from "@/components/motion/number-ticker";
import { Reveal } from "@/components/motion/reveal";
import {
  ScrollTimeline,
  type ScrollTimelineEntry,
} from "@/components/motion/scroll-timeline";
import { Stagger } from "@/components/motion/stagger";
import { TextReveal } from "@/components/motion/text-reveal";
import { PhotoHero } from "@/components/sections/shared/photo-hero";
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

/** [VALIDAR] números do PRD — confirmar com a E-Soluções antes do go-live. */
const heroStats = [
  { value: 850, suffix: "+", label: "empresas atendidas" },
  { value: 100, suffix: "%", label: "clientes com compliance ativo" },
  { value: 35, suffix: "%", label: "de redução média no custo de DP" },
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
      <PhotoHero
        photo="sst-trabalhadores"
        priority
        eyebrow="Sobre a E-Soluções"
        title={
          <>
            Conformidade não é papelada.{" "}
            <span className="text-accent-on-inverse">É engenharia.</span>
          </>
        }
        lead="Nascemos da constatação de que folha, exames e riscos viviam em três fornecedores que não se falavam, e de que era exatamente nessa fresta que moravam as multas. A E-Soluções existe para fechar essa fresta."
      >
        <dl className="mt-9 grid max-w-lg grid-cols-3 gap-6 border-t border-petrol-800 pt-6">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-stat text-white">
                <NumberTicker value={stat.value} />
                <span className="text-h3 text-accent-on-inverse">
                  {stat.suffix}
                </span>
              </dd>
              <dt className="mt-1 text-xs leading-snug text-ink-muted-on-inverse">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </PhotoHero>

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
                <div className="flex size-full items-center justify-center bg-petrol-900 px-4 text-center">
                  <span className="text-eyebrow text-petrol-300">
                    Foto de {siteConfig.specialist.name}
                    <br />
                    (sessão própria)
                  </span>
                </div>
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
