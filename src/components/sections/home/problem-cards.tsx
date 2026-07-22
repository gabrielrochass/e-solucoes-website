import {
  Card,
  CardBadge,
  CardBody,
  CardCTA,
  CardIcon,
  CardTitle,
} from "@/components/cards/card";
import {
  IconFolhaPagamento,
  IconPerigoLosango,
  IconRelogioPonto,
} from "@/components/icons";
import { Stagger } from "@/components/motion/stagger";
import { Section } from "@/components/sections/shared/section";
import { SectionHeading } from "@/components/sections/shared/section-heading";
import type { RiskLevel } from "@/lib/risk";

interface Problem {
  badge: string;
  nivel: RiskLevel;
  icon: React.ReactNode;
  title: string;
  body: string;
  cta: { label: string; href: string };
}

const problems: Problem[] = [
  {
    badge: "Tempo",
    nivel: "medium",
    icon: <IconRelogioPonto size={24} />,
    title: "Compliance consome tempo que a operação não tem",
    body: "Normas Regulamentadoras mudam com frequência. Acompanhar portarias, prazos de laudo e periodicidade de exame vira trabalho em tempo integral, e ele quase nunca é o seu negócio.",
    cta: { label: "Como resolvemos", href: "/servicos/engenharia-sst" },
  },
  {
    badge: "Custo",
    nivel: "high",
    icon: <IconPerigoLosango size={24} />,
    title: "Acidente custa mais que prevenção",
    body: "Afastamento, aumento de FAP, interdição e passivo trabalhista: o custo de um acidente grave segue cobrando anos depois dele. Prevenção dimensionada é a versão barata dessa conta.",
    cta: { label: "Ver programa de SST", href: "/servicos/engenharia-sst" },
  },
  {
    badge: "Integração",
    nivel: "medium",
    icon: <IconFolhaPagamento size={24} />,
    title: "DP e SST que não conversam geram retrabalho",
    body: "O eSocial exige folha, exames e riscos consistentes entre si. Quando cada área vive em um fornecedor, a divergência aparece em forma de notificação.",
    cta: { label: "Entender o diferencial", href: "/sobre" },
  },
];

export function ProblemCards() {
  return (
    <Section>
      <SectionHeading
        eyebrow="O problema real"
        title="Três formas de perder dinheiro com conformidade"
        lead="Antes de vender solução, a gente reconhece o tamanho do problema. São estes os três padrões que mais encontramos nas empresas que chegam até nós."
      />
      <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
        {problems.map((problem) => (
          <Card key={problem.title} className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <CardIcon>{problem.icon}</CardIcon>
              <CardBadge nr={problem.badge} nivel={problem.nivel} />
            </div>
            <CardTitle className="mt-4">{problem.title}</CardTitle>
            <CardBody className="mt-3 flex-1">{problem.body}</CardBody>
            <CardCTA href={problem.cta.href} className="mt-5">
              {problem.cta.label}
            </CardCTA>
          </Card>
        ))}
      </Stagger>
    </Section>
  );
}
