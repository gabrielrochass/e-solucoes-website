import type { Metadata } from "next";
import { TrainingComparisonTable } from "@/components/interactive/training-table/training-comparison-table";
import { Section } from "@/components/sections/shared/section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, courseSchema } from "@/lib/seo/schema";
import { trainings } from "@/lib/trainings";

export const metadata: Metadata = {
  title: "Treinamentos em Normas Regulamentadoras",
  description:
    "Catálogo de treinamentos NR validados: NR-35, NR-10, CIPA, NR-33 e mais. Compare carga horária, modalidade e preço — checkout direto na plataforma EAD.",
};

export default async function TreinamentosPage() {
  const catalog = await trainings.getTrainings();

  return (
    <>
      <section className="bg-surface-inverse text-ink-on-inverse">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-eyebrow text-petrol-300">
            Capacitação · Plataforma EAD parceira
          </p>
          <h1 className="text-display mt-4 max-w-2xl text-white">
            Treinamento certo, no grau de risco certo.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted-on-inverse">
            Compare os programas por norma, carga horária, modalidade e preço.
            A compra acontece na nossa plataforma EAD parceira — o certificado
            vale em todo o território nacional.
          </p>
        </div>
      </section>

      <Section>
        <TrainingComparisonTable trainings={catalog} />
        <p className="mt-8 max-w-2xl text-sm text-ink-meta">
          Precisa de um programa in company ou de um volume maior de
          matrículas? Fale com a gente pelo formulário de contato — montamos a
          trilha pelo grau de risco da sua operação.
        </p>
      </Section>

      {catalog.map((training) => (
        <JsonLd key={training.id} data={courseSchema(training)} />
      ))}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Treinamentos", path: "/treinamentos" },
        ])}
      />
    </>
  );
}
