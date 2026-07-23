/**
 * Fotos de stock curado (interino) — licença livre comercial, sem atribuição
 * obrigatória (Unsplash/Pexels; ver docs/IMAGE-SOURCES.md). São tapa-buraco
 * até a sessão de fotos própria: NÃO usar em contexto que sugira serem
 * funcionários/pacientes/clientes reais da E-Soluções. `alt` sempre descritivo.
 */
export interface StockPhoto {
  src: string;
  alt: string;
  credit: string;
}

export const stockPhotos = {
  "sst-trabalhador-metal": {
    src: "/images/photos/sst-trabalhador-metal.jpg",
    alt: "Trabalhador com capacete e EPI manuseando peça metálica em ambiente industrial",
    credit: "Unsplash",
  },
  "sst-trabalhador-colete": {
    src: "/images/photos/sst-trabalhador-colete.jpg",
    alt: "Trabalhador com colete refletivo e capacete branco em obra",
    credit: "Unsplash",
  },
  "clinica-medica-luvas": {
    src: "/images/photos/clinica-medica-luvas.jpg",
    alt: "Médica de luvas e máscara registrando informações durante exame",
    credit: "Pexels",
  },
  "sst-soldador": {
    src: "/images/photos/sst-soldador.jpg",
    alt: "Soldador em atividade com equipamento de proteção em ambiente industrial",
    credit: "Unsplash",
  },
  "sst-capacetes-rack": {
    src: "/images/photos/sst-capacetes-rack.jpg",
    alt: "Fileira de capacetes de segurança amarelos organizados em suporte",
    credit: "Unsplash",
  },
  "sst-capacetes-parede": {
    src: "/images/photos/sst-capacetes-parede.jpg",
    alt: "Coleção de capacetes de segurança pendurados na parede de um canteiro",
    credit: "Pexels",
  },
  "sst-trabalhadores": {
    src: "/images/photos/sst-trabalhadores.jpg",
    alt: "Equipe de trabalhadores com capacetes amarelos em canteiro de obras",
    credit: "Pexels",
  },
  "clinica-pressao": {
    src: "/images/photos/clinica-pressao.jpg",
    alt: "Aferição de pressão arterial durante exame ocupacional",
    credit: "Unsplash",
  },
  "clinica-otoscopia": {
    src: "/images/photos/clinica-otoscopia.jpg",
    alt: "Mãos com luvas realizando exame de audição em close",
    credit: "Pexels",
  },
  "clinica-estetoscopio": {
    src: "/images/photos/clinica-estetoscopio.jpg",
    alt: "Profissional de saúde segurando um estetoscópio",
    credit: "Unsplash",
  },
  "clinica-prancheta": {
    src: "/images/photos/clinica-prancheta.jpg",
    alt: "Profissional de branco registrando informações em prancheta",
    credit: "Pexels",
  },
  "dp-calculadora": {
    src: "/images/photos/dp-calculadora.jpg",
    alt: "Calculadora e caneta sobre relatório com números",
    credit: "Pexels",
  },
  "dp-documentos": {
    src: "/images/photos/dp-documentos.jpg",
    alt: "Documentos fiscais, notas e calculadora sobre mesa de trabalho",
    credit: "Pexels",
  },
} as const;

export type StockPhotoKey = keyof typeof stockPhotos;

/** Foto de capa de artigo por domínio (tags/nrs), interina até arte própria. */
export function blogCoverPhoto(tags: string[]): StockPhotoKey {
  if (tags.includes("clínica ocupacional")) return "clinica-medica-luvas";
  if (tags.includes("departamento pessoal")) return "dp-documentos";
  if (tags.some((t) => t.includes("perícia") || t.includes("laudo")))
    return "sst-trabalhador-colete";
  return "sst-trabalhador-metal";
}
