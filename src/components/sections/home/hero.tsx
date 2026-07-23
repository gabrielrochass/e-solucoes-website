import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/sections/shared/photo-hero";

export function Hero() {
  return (
    <PhotoHero
      photo="sst-trabalhador-metal"
      size="tall"
      priority
      eyebrow="SST, clínica ocupacional e departamento pessoal"
      title={
        <>
          Risco não se adivinha.{" "}
          <span className="text-accent-on-inverse">Dimensiona-se.</span>
        </>
      }
      lead="A E-Soluções une engenharia de SST, clínica ocupacional e departamento pessoal em uma operação só: conformidade legal sem complexidade, em Recife e região."
      actions={
        <>
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
            className="border-petrol-300 bg-transparent text-white hover:bg-petrol-900 hover:text-white"
          >
            <Link href="/treinamentos">Explorar treinamentos</Link>
          </Button>
        </>
      }
    />
  );
}
