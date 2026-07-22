import type { Metadata } from "next";
import { ContactFlow } from "@/components/interactive/contact/contact-flow";
import { WhatsappButton } from "@/components/layout/whatsapp-button";
import { Section } from "@/components/sections/shared/section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com um especialista da E-Soluções: diagnóstico rápido de 3 perguntas, orçamento de SST, clínica ocupacional, DP e treinamentos NR em Recife/PE.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="bg-surface-inverse text-ink-on-inverse">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-eyebrow text-petrol-300">Contato</p>
          <h1 className="text-display mt-4 max-w-2xl text-white">
            Três perguntas e você sai com um caminho.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted-on-inverse">
            Responda o diagnóstico rápido — ele preenche o formulário com o
            assunto certo. Prefere conversar direto? O WhatsApp está logo
            abaixo.
          </p>
        </div>
      </section>

      <Section>
        <ContactFlow />
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-sm text-ink-muted">
            Prefere não preencher formulário?
          </p>
          <div className="mt-3">
            <WhatsappButton
              context="pagina-contato"
              className="border-petrol-300 text-petrol-600 hover:bg-petrol-50 hover:text-petrol-700"
            />
          </div>
          <p className="mt-6 text-sm text-ink-meta">
            {siteConfig.email} · {siteConfig.address.addressLocality}/
            {siteConfig.address.addressRegion}
          </p>
        </div>
      </Section>

      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ])}
      />
    </>
  );
}
