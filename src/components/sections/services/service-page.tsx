import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardBody,
  CardIcon,
  CardMeta,
  CardTitle,
} from "@/components/cards/card";
import { CardHoverReveal } from "@/components/cards/card-hover-reveal";
import { IconPerigoLosango } from "@/components/icons";
import { ImageSlot } from "@/components/illustrations/image-slot";
import { MeshGradient } from "@/components/illustrations/mesh-gradient";
import { LegislationTimeline } from "@/components/interactive/legislation-timeline/legislation-timeline";
import { WhatsappButton } from "@/components/layout/whatsapp-button";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Section } from "@/components/sections/shared/section";
import { SectionHeading } from "@/components/sections/shared/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { legislationEvents } from "@/data/legislation-timeline";
import type { ServiceContent } from "@/data/services/types";
import { breadcrumbSchema } from "@/lib/seo/schema";

export function ServicePage({ content }: { content: ServiceContent }) {
  const events = legislationEvents.filter((event) =>
    content.timelineIds.includes(event.id),
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-inverse text-ink-on-inverse">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-eyebrow text-petrol-300">{content.eyebrow}</p>
          <h1 className="text-display mt-4 max-w-2xl text-white">
            {content.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted-on-inverse">
            {content.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-orange-400 text-ink hover:bg-orange-500"
            >
              <Link href="/contato">Solicitar orçamento</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problema */}
      <Section>
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-1">
              <span
                aria-hidden
                className="inline-flex size-11 items-center justify-center rounded-md bg-risk-high-bg text-risk-high-fg"
              >
                <IconPerigoLosango size={24} />
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="text-eyebrow text-accent-text">O problema</p>
              <h2 className="text-h2 mt-3 text-petrol-700">
                {content.problem.title}
              </h2>
              <p className="mt-4 max-w-2xl text-ink-muted">
                {content.problem.body}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Solução */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Como resolvemos"
          title="A solução, parte a parte"
        />
        <Stagger
          className="mt-12 grid gap-6 sm:grid-cols-2"
          itemClassName="h-full"
        >
          {content.solutions.map((solution) => (
            <CardHoverReveal
              key={solution.title}
              className="h-full"
              summary={
                <Card className="flex h-full flex-col">
                  <CardIcon>
                    <solution.icon size={24} />
                  </CardIcon>
                  <CardTitle className="mt-4">{solution.title}</CardTitle>
                  <CardBody className="mt-2 pb-8">{solution.summary}</CardBody>
                </Card>
              }
              detail={<CardBody>{solution.detail}</CardBody>}
            />
          ))}
        </Stagger>
      </Section>

      {/* Timeline legislação */}
      {events.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Contexto legal"
            title="A legislação não espera"
            lead="Os marcos que definem a urgência deste serviço — e o que muda para a sua operação."
          />
          <div className="mt-12">
            <LegislationTimeline events={events} />
          </div>
        </Section>
      )}

      {/* Diferenciais */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Por que a E-Soluções"
          title="O que muda quando os pilares se falam"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {content.differentials.map((differential) => (
            <div key={differential.title}>
              <CardIcon>
                <differential.icon size={24} />
              </CardIcon>
              <h3 className="text-h3 mt-4 text-petrol-700">
                {differential.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {differential.description}
              </p>
            </div>
          ))}
        </Stagger>
      </Section>

      {/* Case study */}
      <Section>
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ImageSlot
                slotId={`servico-${content.slug}-case`}
                ratio="4/3"
              >
                <MeshGradient seed={2} />
              </ImageSlot>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <CardMeta>Case · resultados reais</CardMeta>
              <h2 className="text-h2 mt-3 text-petrol-700">
                {content.caseStudy.headline}
              </h2>
              <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-petrol-700">Contexto</dt>
                  <dd className="text-ink-muted">
                    {content.caseStudy.context}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-petrol-700">Solução</dt>
                  <dd className="text-ink-muted">
                    {content.caseStudy.solution}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-petrol-700">Resultado</dt>
                  <dd className="text-ink-muted">
                    {content.caseStudy.result}
                  </dd>
                </div>
              </dl>
              {content.caseStudy.quote && (
                <blockquote className="mt-6 border-l-2 border-orange-400 pl-4 text-ink-muted italic">
                  “{content.caseStudy.quote.text}”
                  <footer className="text-eyebrow mt-2 not-italic text-ink-meta">
                    {content.caseStudy.quote.author}
                  </footer>
                </blockquote>
              )}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CTA final */}
      <Section tone="inverse">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-h2 text-white">{content.cta.title}</h2>
            <p className="mt-4 text-ink-muted-on-inverse">{content.cta.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-orange-400 text-ink hover:bg-orange-500"
              >
                <Link href="/contato">Solicitar orçamento</Link>
              </Button>
              <WhatsappButton context={`servico-${content.slug}`} />
            </div>
          </div>
        </Reveal>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/servicos" },
          { name: content.title, path: `/servicos/${content.slug}` },
        ])}
      />
    </>
  );
}
