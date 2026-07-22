import type { IconProps } from "@/components/icons";

export interface ServiceSolutionCard {
  icon: React.ComponentType<IconProps>;
  title: string;
  summary: string;
  detail: string;
}

export interface ServiceDifferential {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface ServiceCaseStudy {
  /** [VALIDAR] cases precisam de autorização do cliente antes do go-live. */
  headline: string;
  context: string;
  solution: string;
  result: string;
  quote?: { text: string; author: string };
}

export interface ServiceContent {
  slug: string;
  /** Eyebrow com número de norma quando aplicável: "NR-7 · PCMSO". */
  eyebrow: string;
  title: string;
  lead: string;
  metaDescription: string;
  problem: {
    title: string;
    body: string;
  };
  solutions: ServiceSolutionCard[];
  /** ids de eventos em src/data/legislation-timeline.ts exibidos na página. */
  timelineIds: string[];
  differentials: ServiceDifferential[];
  caseStudy: ServiceCaseStudy;
  cta: {
    title: string;
    body: string;
  };
}
