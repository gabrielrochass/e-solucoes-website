import type { Metadata } from "next";
import { CipaDiagnostic } from "@/components/interactive/cipa-diagnostic/cipa-diagnostic";
import { TrainingComparisonTable } from "@/components/interactive/training-table/training-comparison-table";
import { Section } from "@/components/sections/shared/section";
import { SectionHeading } from "@/components/sections/shared/section-heading";
import { TrainingsHero } from "@/components/sections/trainings/trainings-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, courseSchema } from "@/lib/seo/schema";
import { trainings } from "@/lib/trainings";

export const metadata: Metadata = {
  title: "Treinamentos em Normas Regulamentadoras",
  description:
    "Catálogo de treinamentos NR validados: NR-35, NR-10, CIPA, NR-33 e mais. Compare carga horária, modalidade e preço, com checkout direto na plataforma EAD.",
};

export default async function TreinamentosPage() {
  const catalog = await trainings.getTrainings();
  const featured = catalog.filter((t) => t.featured);

  return (
    <>
      <TrainingsHero featured={featured} />

      <Section id="catalogo">
        <TrainingComparisonTable trainings={catalog} />
        <p className="mt-8 max-w-2xl text-sm text-ink-meta">
          Precisa de um programa in company ou de um volume maior de
          matrículas? Fale com a gente pelo formulário de contato: montamos a
          trilha pelo grau de risco da sua operação.
        </p>
      </Section>

      <Section tone="tint" id="diagnostico-cipa">
        <SectionHeading
          eyebrow="Dimensionamento pela NR-5"
          title="Não sabe qual CIPA sua empresa precisa?"
          lead="Quatro campos e você descobre quantos membros, quanta hora de treinamento e quais NRs ficam no seu radar."
        />
        <div className="mt-12">
          <CipaDiagnostic />
        </div>
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
