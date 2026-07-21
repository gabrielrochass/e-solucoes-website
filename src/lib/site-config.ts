/**
 * Dados centrais do site. Valores marcados com [VALIDAR] são placeholders
 * que precisam de confirmação da E-Soluções antes do go-live.
 */
export const siteConfig = {
  name: "E-Soluções",
  legalName: "E-Soluções Desenvolvimento Profissional", // [VALIDAR razão social]
  description:
    "SST, clínica ocupacional e departamento pessoal integrados. Conformidade legal sem complexidade, em Recife/PE.",
  url: "https://esolucoes.com.br", // [VALIDAR domínio final]
  locale: "pt-BR",
  address: {
    streetAddress: "Endereço a confirmar", // [VALIDAR]
    addressLocality: "Recife",
    addressRegion: "PE",
    postalCode: "50000-000", // [VALIDAR]
    addressCountry: "BR",
  },
  phone: "+55 81 0000-0000", // [VALIDAR]
  whatsappNumber: "5581900000000", // [VALIDAR — dígitos apenas, com DDI]
  email: "contato@esolucoes.com.br", // [VALIDAR]
  specialist: {
    name: "Adna Correia",
    role: "Especialista em SST e Departamento Pessoal", // [VALIDAR título]
  },
  hostUrl: "https://host-69e6b3473a.isesmt.com",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface NavLink {
  label: string;
  href: string;
}

export const serviceLinks: NavLink[] = [
  { label: "Departamento Pessoal", href: "/servicos/departamento-pessoal" },
  { label: "Clínica Ocupacional", href: "/servicos/clinica-ocupacional" },
  { label: "Engenharia de SST", href: "/servicos/engenharia-sst" },
  { label: "Serviços Complementares", href: "/servicos/complementares" },
];

export const navLinks: NavLink[] = [
  { label: "Serviços", href: "/servicos/engenharia-sst" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const legalLinks: NavLink[] = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
];
