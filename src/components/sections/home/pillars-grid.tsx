import {
  Card,
  CardBody,
  CardCTA,
  CardIcon,
  CardMeta,
  CardTitle,
} from "@/components/cards/card";
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
  body: string;
  href: string;
}

const pillars: Pillar[] = [
  {
    icon: <IconFolhaPagamento size={24} />,
    meta: "Pilar 01",
    title: "Departamento Pessoal",
    body: "Assessoria da admissão ao desligamento: folha terceirizada, eSocial consistente com os dados de SST e prazos sob controle.",
    href: "/servicos/departamento-pessoal",
  },
  {
    icon: <IconEstetoscopio size={24} />,
    meta: "Pilar 02",
    title: "Clínica Ocupacional",
    body: "Admissional, periódico, demissional, mudança de função e retorno ao trabalho, com resultado ágil e integração direta com DP e SST.",
    href: "/servicos/clinica-ocupacional",
  },
  {
    icon: <IconCapacete size={24} />,
    meta: "Pilar 03",
    title: "Engenharia de SST",
    body: "PGR, PCMSO, LTCAT e laudos dimensionados pelo risco real da operação, assinados por quem responde tecnicamente por eles.",
    href: "/servicos/engenharia-sst",
  },
  {
    icon: <IconBalanca size={24} />,
    meta: "Pilar 04",
    title: "Serviços Complementares",
    body: "Perícias judiciais, assistência técnica e alocação de profissionais de SST na sua operação.",
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
      <Stagger
        className="mt-10 grid gap-6 sm:grid-cols-2"
        itemClassName="h-full"
      >
        {pillars.map((pillar) => (
          <Card key={pillar.href} className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <CardIcon>{pillar.icon}</CardIcon>
              <CardMeta>{pillar.meta}</CardMeta>
            </div>
            <CardTitle className="mt-4">{pillar.title}</CardTitle>
            <CardBody className="mt-2 flex-1">{pillar.body}</CardBody>
            <CardCTA href={pillar.href} className="mt-5">
              Conhecer o serviço
            </CardCTA>
          </Card>
        ))}
      </Stagger>
    </Section>
  );
}
