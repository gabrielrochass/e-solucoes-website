import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiskMatrixPattern } from "@/components/illustrations/risk-matrix-pattern";
import { HeroBackdrop } from "@/components/sections/home/hero-backdrop";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-inverse text-ink-on-inverse">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="text-eyebrow text-petrol-300">
            SST · Clínica Ocupacional · Departamento Pessoal
          </p>
          <h1 className="text-display mt-5 text-white">
            Risco não se adivinha.{" "}
            <span className="text-accent-on-inverse">Dimensiona-se.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted-on-inverse">
            A E-Soluções une engenharia de SST, clínica ocupacional e
            departamento pessoal em uma operação só — conformidade legal sem
            complexidade, em Recife e região.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-orange-400 text-ink hover:bg-orange-500"
            >
              <Link href="/contato">Diagnosticar meu risco</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-petrol-400 bg-transparent text-white hover:bg-petrol-900 hover:text-white"
            >
              <Link href="/treinamentos">Explorar treinamentos</Link>
            </Button>
          </div>
        </div>
        <div aria-hidden className="mt-14 lg:hidden">
          <RiskMatrixPattern
            tone="dark"
            rows={3}
            cols={8}
            litCells={[
              { x: 2, y: 1, level: "medium" },
              { x: 5, y: 0, level: "high" },
              { x: 6, y: 2, level: "low" },
            ]}
            className="h-auto w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
