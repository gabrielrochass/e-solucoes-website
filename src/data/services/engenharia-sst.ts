import {
  IconCalendarioPrazo,
  IconCheckConformidade,
  IconDocumentoPgr,
  IconEstetoscopio,
  IconLivroNr,
  IconMatrizRisco,
  IconPerigoLosango,
} from "@/components/icons";
import type { ServiceContent } from "./types";

export const engenhariaSstService: ServiceContent = {
  slug: "engenharia-sst",
  eyebrow: "GRO/PGR pela NR-1",
  title: "PGR não é modelo pronto. É engenharia.",
  lead: "Elaboração e gestão de PGR, PCMSO, LTCAT e laudos técnicos para empresas de Recife e região, com levantamento de campo e responsabilidade técnica, não com documento de prateleira.",
  metaDescription:
    "Engenharia de segurança do trabalho em Recife: PGR, PCMSO, LTCAT e treinamentos de NR com responsabilidade técnica. Solicite um diagnóstico.",
  problem: {
    title: "O PGR de template passa no arquivo. Não passa na fiscalização.",
    body: "Desde 2022, a NR-1 exige Gerenciamento de Riscos Ocupacionais com inventário de riscos e plano de ação, e o eSocial expõe esse conteúdo ao governo no evento S-2240, funcionário por funcionário. Um PGR copiado de modelo genérico declara riscos que não existem na sua operação e ignora os que existem. Na fiscalização, a divergência entre documento e realidade vira autuação; na perícia, vira condenação; no INSS, o agente nocivo mal enquadrado vira passivo previdenciário. Documento barato é o que mais custa quando é testado.",
  },
  solutions: [
    {
      icon: IconDocumentoPgr,
      title: "PGR: Programa de Gerenciamento de Riscos",
      summary:
        "Inventário de riscos e plano de ação construídos em campo, conforme a NR-1.",
      detail:
        "Visitamos a operação, levantamos perigos por função e ambiente, avaliamos e classificamos os riscos e definimos um plano de ação executável, com responsável e prazo. O PGR resultante alimenta o PCMSO, o LTCAT e o eSocial com dados coerentes entre si.",
    },
    {
      icon: IconEstetoscopio,
      title: "PCMSO: Controle Médico de Saúde Ocupacional",
      summary:
        "Programa médico derivado do inventário de riscos, como exige a NR-7.",
      detail:
        "O PCMSO define quais exames cada função precisa e com qual periodicidade, a partir dos riscos reais mapeados no PGR. Elaborado e coordenado em conjunto com a nossa clínica ocupacional, sai do papel direto para a agenda de exames.",
    },
    {
      icon: IconPerigoLosango,
      title: "LTCAT e laudos de insalubridade e periculosidade",
      summary:
        "Avaliações ambientais que sustentam enquadramento previdenciário e adicionais.",
      detail:
        "O LTCAT comprova (ou afasta) a exposição a agentes nocivos para fins de aposentadoria especial; os laudos de insalubridade e periculosidade definem adicionais que impactam diretamente a folha. Medição correta evita tanto o passivo quanto o pagamento indevido.",
    },
    {
      icon: IconLivroNr,
      title: "Treinamentos de NR in company",
      summary:
        "Capacitações obrigatórias realizadas na sua operação, com conteúdo adaptado ao risco real.",
      detail:
        "NR-35 para trabalho em altura, NR-33 para espaços confinados, NR-12 para operação de máquinas, CIPA e integração de segurança, ministrados no seu ambiente, com lista de presença, avaliação e certificado que sustentam auditoria e defesa.",
    },
  ],
  timelineIds: [
    "portaria-3214-1978",
    "nr12-maquinas-2010",
    "nr35-trabalho-em-altura-2012",
    "nova-nr1-gro-pgr-2020",
    "vigencia-pgr-nova-nr7-2022",
  ],
  differentials: [
    {
      icon: IconMatrizRisco,
      title: "Um inventário, todos os documentos",
      description:
        "PGR, PCMSO, LTCAT e eventos do eSocial partem do mesmo levantamento de campo. Quando a fiscalização cruza os documentos, eles contam a mesma história, porque foram feitos juntos.",
    },
    {
      icon: IconCalendarioPrazo,
      title: "Prazos e revisões sob controle",
      description:
        "PGR não é documento estático: acompanhamos as revisões periódicas, as mudanças de layout e de função que exigem atualização, e os vencimentos de treinamentos obrigatórios.",
    },
    {
      icon: IconCheckConformidade,
      title: "Responsabilidade técnica assinada",
      description:
        "Cada laudo e programa sai com responsável técnico habilitado que conhece a operação e responde pelo que assina: em fiscalização, em juízo e perante os conselhos profissionais.",
    },
  ],
  caseStudy: {
    // [VALIDAR] case ilustrativo — precisa de autorização/adaptação do cliente
    headline:
      "Indústria metalúrgica, 200 funcionários: notificação da fiscalização atendida sem autuação",
    context:
      "A empresa mantinha um PGR comprado como modelo pronto, sem levantamento de campo. Uma notificação da Inspeção do Trabalho apontou divergências entre o documento, as condições reais do parque de máquinas e os eventos S-2240 transmitidos.",
    solution:
      "Refizemos o inventário de riscos em campo, função por função, realinhamos PGR, PCMSO e LTCAT ao mesmo levantamento e executamos os treinamentos de NR-12 e NR-35 pendentes, com evidências documentadas.",
    result:
      "A notificação foi respondida no prazo com o novo conjunto documental e encerrada sem autuação. O plano de ação do PGR virou rotina mensal de acompanhamento, com itens críticos tratados no primeiro trimestre.",
    quote: {
      text: "Risco não se adivinha nem se copia de modelo. Dimensiona-se em campo, com método e com assinatura de quem responde por ele.",
      author: "Adna Correia, responsável técnica da E-Soluções",
    },
  },
  cta: {
    title: "Seu PGR sobreviveria a uma fiscalização amanhã?",
    body: "Solicite um diagnóstico técnico gratuito. Comparamos seus documentos com a realidade da sua operação e com o que foi transmitido ao eSocial, e entregamos a lista objetiva do que precisa ser corrigido.",
  },
};
