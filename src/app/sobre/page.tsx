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
import { MeshGradient } from "@/components/illustrations/mesh-gradient";
import { RiskMatrixPattern } from "@/components/illustrations/risk-matrix-pattern";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
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

const steps = [
  {
    title: "Diagnóstico",
    body: "Mapeamos o que existe: documentos, exames, folha, prazos. Sem julgamento — só o retrato honesto.",
  },
  {
    title: "Plano dimensionado",
    body: "Prioridade pelo risco real e pelo passivo potencial, não por pacote de prateleira.",
  },
  {
    title: "Execução integrada",
    body: "PGR, PCMSO, exames e eSocial saem da mesma operação — os dados batem entre si por construção.",
  },
  {
    title: "Acompanhamento",
    body: "Legislação muda; seu compliance acompanha. Revisões e alertas de prazo fazem parte do serviço.",
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
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-12 hidden opacity-50 lg:block"
        >
          <RiskMatrixPattern
            tone="dark"
            rows={5}
            cols={5}
            litCells={[{ x: 2, y: 2, level: "medium" }]}
            className="h-auto w-96"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-eyebrow text-petrol-300">Sobre a E-Soluções</p>
          <h1 className="text-display mt-4 max-w-2xl text-white">
            Conformidade não é papelada.{" "}
            <span className="text-accent-on-inverse">É engenharia.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted-on-inverse">
            Nascemos da constatação de que folha, exames e riscos viviam em
            três fornecedores que não se falavam — e de que era exatamente
            nessa fresta que moravam as multas. A E-Soluções existe para
            fechar essa fresta.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="A tese"
          title="Um dado só, três usos"
          lead="O mesmo risco que entra no PGR dimensiona o exame do PCMSO e alimenta o evento de SST no eSocial. Quando isso acontece na mesma operação, a divergência — a causa nº 1 de notificação — simplesmente não tem onde nascer."
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

      <Section tone="tint">
        <SectionHeading eyebrow="Como trabalhamos" title="Método, não pacote" />
        <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title}>
              <p className="text-stat tabular-stat text-petrol-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-h3 mt-2 text-petrol-700">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </div>
          ))}
        </Stagger>
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
