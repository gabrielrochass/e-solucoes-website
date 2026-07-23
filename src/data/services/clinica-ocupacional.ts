import {
  IconCalendarioPrazo,
  IconCheckConformidade,
  IconCoracaoPulso,
  IconEstetoscopio,
  IconMatrizRisco,
  IconPulmoes,
  IconContrato,
} from "@/components/icons";
import type { ServiceContent } from "./types";

export const clinicaOcupacionalService: ServiceContent = {
  slug: "clinica-ocupacional",
  heroImage: "clinica-pressao",
  heroAnchor: "exam-status",
  caseImage: "clinica-otoscopia",
  eyebrow: "PCMSO pela NR-7",
  title: "Cada exame no prazo, cada risco no radar.",
  lead: "Clínica de medicina do trabalho em Recife: exames admissionais, periódicos, demissionais e de mudança de risco, executados dentro de um PCMSO que conversa com o seu PGR e com o eSocial.",
  metaDescription:
    "Clínica de medicina ocupacional em Recife: admissional, periódico, demissional e PCMSO coordenado. Resultados integrados ao eSocial. Agende avaliação.",
  problem: {
    title: "Exame desconectado é despesa que não protege",
    body: "Desde 1994, a NR-7 exige que os exames ocupacionais sigam um programa (o PCMSO) e, desde 2022, esse programa precisa nascer do inventário de riscos do PGR. Na prática, muitas empresas ainda tratam o exame como fila de guichê: o funcionário vai a uma clínica avulsa, o ASO volta em papel, ninguém cruza o resultado com o risco da função e o evento S-2220 é transmitido atrasado, quando é transmitido. O resultado é duplo: a empresa paga pelo exame e continua exposta, porque o documento não sustenta defesa em fiscalização nem em perícia.",
  },
  solutions: [
    {
      icon: IconEstetoscopio,
      title: "Exame admissional",
      summary:
        "Avaliação de aptidão antes da contratação, orientada pelos riscos reais da função.",
      detail:
        "O exame admissional é feito com base no inventário de riscos da função, não em um protocolo genérico. O ASO sai no mesmo dia na maioria dos casos, e o evento correspondente segue para o eSocial dentro do prazo.",
    },
    {
      icon: IconCoracaoPulso,
      title: "Exames periódicos",
      summary:
        "Monitoramento contínuo da saúde do trabalhador, com controle ativo de vencimentos.",
      detail:
        "Controlamos o vencimento de cada exame por funcionário e por risco: audiometria, espirometria, exames laboratoriais e complementares conforme o PCMSO. Você recebe o alerta antes do vencimento, não a pendência depois dele.",
    },
    {
      icon: IconContrato,
      title: "Exame demissional",
      summary:
        "Encerramento do vínculo com a documentação de saúde completa e dentro do prazo legal.",
      detail:
        "O demissional fecha o histórico ocupacional do trabalhador e protege a empresa contra alegações futuras de doença ocupacional. Executamos dentro dos prazos da NR-7 e articulado com a rotina de desligamento do departamento pessoal.",
    },
    {
      icon: IconPulmoes,
      title: "Mudança de risco e retorno ao trabalho",
      summary:
        "Reavaliação médica sempre que a exposição muda ou o trabalhador retorna de afastamento.",
      detail:
        "Mudou a função, o setor ou o risco? A NR-7 exige novo exame. Voltou de afastamento prolongado? Exame de retorno antes de reassumir. São os exames mais esquecidos pelas empresas, e os mais cobrados em perícia.",
    },
  ],
  timelineIds: [
    "pcmso-ppra-1994",
    "lgpd-dados-saude-2020",
    "esocial-eventos-sst-2021",
    "vigencia-pgr-nova-nr7-2022",
    "riscos-psicossociais-nr1-2024",
  ],
  differentials: [
    {
      icon: IconMatrizRisco,
      title: "PCMSO que nasce do PGR",
      description:
        "Nossa engenharia de SST elabora o inventário de riscos; nossa clínica define os exames a partir dele. É o desenho que a NR-1 e a NR-7 exigem desde 2022, e que exames avulsos não entregam.",
    },
    {
      icon: IconCalendarioPrazo,
      title: "ASO no prazo, eSocial no prazo",
      description:
        "Exame realizado é exame transmitido: o S-2220 segue para o eSocial no mesmo fluxo, sem depender de troca de planilhas entre clínica, contador e RH.",
    },
    {
      icon: IconCheckConformidade,
      title: "Coordenação médica responsável",
      description:
        "O PCMSO tem médico responsável que conhece a sua operação, assina o programa e responde tecnicamente por ele, com guarda de prontuários conforme a norma e a LGPD.",
    },
  ],
  caseStudy: {
    // [VALIDAR] case ilustrativo — precisa de autorização/adaptação do cliente
    headline:
      "Indústria de logística, 500 funcionários: exames vencidos de 18% para menos de 2%",
    context:
      "Com três turnos e alta rotatividade, a empresa mantinha exames espalhados em clínicas avulsas. Cerca de 18% dos periódicos estavam vencidos, e os eventos S-2220 eram transmitidos com atraso recorrente.",
    solution:
      "Centralizamos os exames na clínica, reconstruímos o PCMSO a partir do inventário de riscos do PGR e implantamos controle ativo de vencimentos por função, com agenda dedicada para os turnos.",
    result:
      "Em seis meses, a taxa de exames vencidos caiu de 18% para menos de 2%, e 100% dos eventos de monitoramento de saúde passaram a ser transmitidos ao eSocial dentro do prazo.",
    quote: {
      text: "Exame ocupacional só protege quando reflete o risco real da função. O restante é papel arquivado.",
      author: "Adna Correia, responsável técnica da E-Soluções",
    },
  },
  cta: {
    title: "Quantos exames da sua equipe estão vencidos agora?",
    body: "Agende uma avaliação gratuita do seu PCMSO. Cruzamos seus exames com os riscos de cada função e com o eSocial, e devolvemos um mapa claro do que está em dia e do que está exposto.",
  },
};
