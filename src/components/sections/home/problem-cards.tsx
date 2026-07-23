import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  IconFolhaPagamento,
  IconPerigoLosango,
  IconRelogioPonto,
} from "@/components/icons";
import { Stagger } from "@/components/motion/stagger";
import { Section } from "@/components/sections/shared/section";
import { SectionHeading } from "@/components/sections/shared/section-heading";
import type { RiskLevel } from "@/lib/risk";
import { cn } from "@/lib/utils";

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
    icon: <IconRelogioPonto size={20} />,
    title: "Compliance consome tempo que a operação não tem",
    body: "Normas Regulamentadoras mudam com frequência. Acompanhar portarias, prazos de laudo e periodicidade de exame vira trabalho em tempo integral, e ele quase nunca é o seu negócio.",
    cta: { label: "Como resolvemos", href: "/servicos/engenharia-sst" },
  },
  {
    badge: "Custo",
    nivel: "high",
    icon: <IconPerigoLosango size={20} />,
    title: "Acidente custa mais que prevenção",
    body: "Afastamento, aumento de FAP, interdição e passivo trabalhista: o custo de um acidente grave segue cobrando anos depois dele. Prevenção dimensionada é a versão barata dessa conta.",
    cta: { label: "Ver programa de SST", href: "/servicos/engenharia-sst" },
  },
  {
    badge: "Integração",
    nivel: "medium",
    icon: <IconFolhaPagamento size={20} />,
    title: "DP e SST que não conversam geram retrabalho",
    body: "O eSocial exige folha, exames e riscos consistentes entre si. Quando cada área vive em um fornecedor, a divergência aparece em forma de notificação.",
    cta: { label: "Entender o diferencial", href: "/sobre" },
  },
];

const riskAccent: Record<RiskLevel, { bar: string; icon: string; label: string }> =
  {
    low: {
      bar: "bg-risk-low-solid",
      icon: "bg-risk-low-bg text-risk-low-fg",
      label: "text-risk-low-fg",
    },
    medium: {
      bar: "bg-risk-medium-solid",
      icon: "bg-risk-medium-bg text-risk-medium-fg",
      label: "text-risk-medium-fg",
    },
    high: {
      bar: "bg-risk-high-solid",
      icon: "bg-risk-high-bg text-risk-high-fg",
      label: "text-risk-high-fg",
    },
  };

export function ProblemCards() {
  return (
    <Section>
      <SectionHeading
        eyebrow="O problema real"
        title="Três formas de perder dinheiro com conformidade"
        lead="Antes de vender solução, a gente reconhece o tamanho do problema. São estes os três padrões que mais encontramos nas empresas que chegam até nós."
      />
      <Stagger className="mt-10 grid gap-6 md:grid-cols-3" itemClassName="h-full">
        {problems.map((problem) => {
          const accent = riskAccent[problem.nivel];
          return (
            <article
              key={problem.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-surface-raised shadow-card transition duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Filete de risco no topo (estático). */}
              <span
                aria-hidden
                className={cn("absolute inset-x-0 top-0 h-1", accent.bar)}
              />
              <div className="flex flex-1 flex-col p-card pt-7">
                <span
                  aria-hidden
                  className={cn(
                    "inline-flex size-10 items-center justify-center rounded-lg",
                    accent.icon,
                  )}
                >
                  {problem.icon}
                </span>
                <h3 className="text-h3 mt-5 text-petrol-700">{problem.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {problem.body}
                </p>
                <Link
                  href={problem.cta.href}
                  className="mt-5 inline-flex items-center gap-1.5 font-medium text-petrol-600"
                >
                  {problem.cta.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </article>
          );
        })}
      </Stagger>
    </Section>
  );
}
