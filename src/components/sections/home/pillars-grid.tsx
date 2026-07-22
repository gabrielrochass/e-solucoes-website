import {
  Card,
  CardBody,
  CardCTA,
  CardIcon,
  CardMeta,
  CardTitle,
} from "@/components/cards/card";
import { CardHoverReveal } from "@/components/cards/card-hover-reveal";
import {
  IconBalanca,
  IconCapacete,
  IconEstetoscopio,
  IconFolhaPagamento,
} from "@/components/icons";
import { Stagger } from "@/components/motion/stagger";
import { Section } from "@/components/sections/shared/section";
import { SectionHeading } from "@/components/sections/shared/section-heading";

interface Pillar {
  icon: React.ReactNode;
  meta: string;
  title: string;
  summary: string;
  detail: string;
  href: string;
}

const pillars: Pillar[] = [
  {
    icon: <IconFolhaPagamento size={24} />,
    meta: "Pilar 01",
    title: "Departamento Pessoal",
    summary: "Folha, eSocial e rotinas trabalhistas sem atrito.",
    detail:
      "Assessoria completa da admissão ao desligamento: folha terceirizada, eSocial consistente com os dados de SST e prazos sob controle.",
    href: "/servicos/departamento-pessoal",
  },
  {
    icon: <IconEstetoscopio size={24} />,
    meta: "Pilar 02",
    title: "Clínica Ocupacional",
    summary: "Exames e diagnóstico integrados ao PCMSO.",
    detail:
      "Admissional, periódico, demissional, mudança de função e retorno ao trabalho, com resultado ágil e integração direta com DP e SST.",
    href: "/servicos/clinica-ocupacional",
  },
  {
    icon: <IconCapacete size={24} />,
    meta: "Pilar 03",
    title: "Engenharia de SST",
    summary: "PGR, PCMSO, LTCAT e laudos que sustentam auditoria.",
    detail:
      "Programas legais dimensionados pelo risco real da operação, não por template, e assinados por quem responde tecnicamente por eles.",
    href: "/servicos/engenharia-sst",
  },
  {
    icon: <IconBalanca size={24} />,
    meta: "Pilar 04",
    title: "Serviços Complementares",
    summary: "Perícias e terceirização especializada.",
    detail:
      "Assistência técnica em perícias judiciais, laudos específicos e alocação de profissionais de SST na sua operação.",
    href: "/servicos/complementares",
  },
];

export function PillarsGrid() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="A solução integrada"
        title="Quatro pilares, uma operação só"
        lead="Cada serviço funciona sozinho. Juntos, eliminam a divergência entre folha, exames e riscos, a causa mais comum de notificação no eSocial."
      />
      <Stagger className="mt-12 grid gap-6 sm:grid-cols-2" itemClassName="h-full">
        {pillars.map((pillar) => (
          <CardHoverReveal
            key={pillar.href}
            className="h-full"
            summary={
              <Card className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <CardIcon>{pillar.icon}</CardIcon>
                  <CardMeta>{pillar.meta}</CardMeta>
                </div>
                <CardTitle className="mt-4">{pillar.title}</CardTitle>
                <CardBody className="mt-2 pb-8">{pillar.summary}</CardBody>
              </Card>
            }
            detail={
              <div>
                <CardBody>{pillar.detail}</CardBody>
                <CardCTA href={pillar.href} className="mt-3">
                  Conhecer o serviço
                </CardCTA>
              </div>
            }
          />
        ))}
      </Stagger>
    </Section>
  );
}
