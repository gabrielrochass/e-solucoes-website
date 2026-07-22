import { NumberTicker } from "@/components/motion/number-ticker";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/sections/shared/section";
import { SectionHeading } from "@/components/sections/shared/section-heading";

/**
 * [VALIDAR] Números vindos do PRD — confirmar com a E-Soluções antes do
 * go-live. Fonte: PRD v2.0, seção 3.1 "Prova Social".
 */
const stats = [
  { value: 850, suffix: "+", label: "empresas atendidas" },
  { value: 100, suffix: "%", label: "dos clientes com compliance ativo" },
  { value: 35, suffix: "%", label: "de redução média no custo de DP" },
];

export function SocialProof() {
  return (
    <Section tone="inverse">
      <SectionHeading
        tone="inverse"
        eyebrow="Prova, não promessa"
        title="Resultado que aparece no número"
      />
      <Reveal className="mt-12">
        <dl className="grid gap-10 border-l-2 border-petrol-800 pl-6 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-stat text-white">
                <NumberTicker value={stat.value} />
                <span className="text-h2 text-accent-on-inverse">
                  {stat.suffix}
                </span>
              </dd>
              <dt className="mt-2 max-w-[22ch] text-sm text-ink-muted-on-inverse">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>
      <Reveal delay={0.15} className="mt-12">
        {/* [VALIDAR] case do PRD — anonimizado até autorização do cliente */}
        <p className="max-w-2xl border-t border-petrol-900 pt-6 text-ink-muted-on-inverse">
          <span className="font-semibold text-white">
            Indústria de logística, 500 funcionários:
          </span>{" "}
          de 40% para 100% de conformidade documental em 3 meses, com redução
          de 40% nos afastamentos no primeiro ano.
        </p>
      </Reveal>
    </Section>
  );
}
