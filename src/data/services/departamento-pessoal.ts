import {
  IconCalendarioPrazo,
  IconCheckConformidade,
  IconContrato,
  IconFolhaPagamento,
  IconMatrizRisco,
  IconRelogioPonto,
} from "@/components/icons";
import type { ServiceContent } from "./types";

export const departamentoPessoalService: ServiceContent = {
  slug: "departamento-pessoal",
  eyebrow: "eSocial e folha",
  title: "Folha não se confere depois. Nasce certa.",
  lead: "Terceirização de departamento pessoal para empresas de Recife e região: folha, eSocial, admissões e desligamentos operados por quem também responde pela sua saúde ocupacional.",
  metaDescription:
    "Departamento pessoal em Recife: folha de pagamento, eSocial e admissões sem retrabalho nem multa. Integrado à saúde ocupacional. Peça um diagnóstico.",
  problem: {
    title: "O eSocial não espera o fechamento da sua planilha",
    body: "Desde 2021, os eventos de SST (S-2210, S-2220 e S-2240) entraram no eSocial, e cada admissão, exame e desligamento virou um evento com prazo. Quando a folha roda em um sistema, os exames ficam com uma clínica e o eSocial com um terceiro, a informação chega atrasada ou divergente: rescisão calculada duas vezes, ASO transmitido fora do prazo, verba paga a maior que ninguém percebe. O custo não aparece em uma única multa, e sim no acumulado de retrabalho, juros e passivo trabalhista que cresce em silêncio.",
  },
  solutions: [
    {
      icon: IconFolhaPagamento,
      title: "Folha de pagamento",
      summary:
        "Processamento mensal completo, do cálculo de proventos e descontos às guias de encargos.",
      detail:
        "Calculamos folha, férias, 13º, adicionais e encargos com conferência antes do fechamento, não depois. Você recebe relatórios de provisão e custo por centro de resultado, e as guias saem no prazo, todos os meses.",
    },
    {
      icon: IconRelogioPonto,
      title: "Gestão do eSocial",
      summary:
        "Transmissão e monitoramento de todos os eventos trabalhistas e de SST, dentro do prazo legal.",
      detail:
        "Acompanhamos o calendário de cada evento (de S-2200 a S-2299, incluindo os eventos de SST) e tratamos as pendências de retorno antes que virem inconsistência. Como também executamos os exames ocupacionais, o dado nasce no mesmo fluxo que o transmite.",
    },
    {
      icon: IconContrato,
      title: "Admissões e desligamentos",
      summary:
        "Rotina completa de entrada e saída: documentação, registro, exames e homologação de verbas.",
      detail:
        "Estruturamos o processo admissional com checklist único: contrato, registro, exame admissional e evento no eSocial em sequência, sem lacuna. No desligamento, calculamos e conferimos as verbas rescisórias e o exame demissional dentro dos prazos legais.",
    },
    {
      icon: IconCheckConformidade,
      title: "Consultoria trabalhista",
      summary:
        "Orientação preventiva para decisões do dia a dia: jornada, adicionais, contratos e convenções.",
      detail:
        "Antes de mudar uma escala, criar uma função ou aplicar um desconto, você consulta quem conhece a legislação e a sua convenção coletiva. Decisão orientada custa menos que reclamatória, e deixa rastro documental para a defesa, se ela vier.",
    },
  ],
  timelineIds: [
    "criacao-esocial-2014",
    "lgpd-dados-saude-2020",
    "esocial-eventos-sst-2021",
    "cipa-assedio-nr5-2022",
  ],
  differentials: [
    {
      icon: IconMatrizRisco,
      title: "Folha e SST no mesmo fluxo",
      description:
        "O exame que a nossa clínica realiza é o mesmo que o nosso DP transmite ao eSocial. Sem planilha intermediária, sem divergência entre o que foi feito e o que foi declarado.",
    },
    {
      icon: IconCalendarioPrazo,
      title: "Calendário de obrigações monitorado",
      description:
        "Cada evento do eSocial tem prazo, e cada prazo tem responsável. Monitoramos vencimentos de forma contínua, para que a sua empresa não descubra a pendência na notificação.",
    },
    {
      icon: IconCheckConformidade,
      title: "Conferência antes do fechamento",
      description:
        "Toda folha passa por dupla conferência de cálculo e de parametrização antes de fechar. Erro identificado antes do pagamento custa uma correção; depois, custa passivo.",
    },
  ],
  caseStudy: {
    // [VALIDAR] case ilustrativo — precisa de autorização/adaptação do cliente
    headline: "Rede varejista, 120 funcionários: fechamento de folha de 5 dias para 2",
    context:
      "A empresa operava com folha interna, exames em clínicas avulsas e eSocial delegado ao contador. Divergências entre ASO e evento S-2220 geravam retrabalho recorrente, e o fechamento mensal consumia cinco dias úteis do time administrativo.",
    solution:
      "Assumimos a folha, o calendário do eSocial e a rotina de admissões e desligamentos, integrando os exames ocupacionais à nossa clínica. Um único fluxo passou a gerar o exame, o documento e o evento transmitido.",
    result:
      "Em seis meses: fechamento de folha reduzido de 5 para 2 dias úteis, zero eventos de SST transmitidos fora do prazo e eliminação das divergências entre exames realizados e declarados.",
  },
  cta: {
    title: "Quanto custa o retrabalho da sua folha hoje?",
    body: "Solicite um diagnóstico gratuito da sua rotina de departamento pessoal. Analisamos folha, eSocial e processos de admissão e desligamento, e apontamos onde está o risco, antes da fiscalização apontar.",
  },
};
