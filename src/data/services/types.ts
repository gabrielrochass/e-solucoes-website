import type { IconProps } from "@/components/icons";
import type { StockPhotoKey } from "@/lib/photos";

export type ServiceHeroAnchor =
  | "timeline"
  | "exam-status"
  | "dp-flow"
  | "pericia-stack";

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
  /** Eyebrow com o número da norma quando aplicável. */
  eyebrow: string;
  title: string;
  lead: string;
  metaDescription: string;
  /** Foto real que lidera o hero (overlay petróleo garante contraste). */
  heroImage: StockPhotoKey;
  /** Assinatura funcional da página, agora renderizada numa seção do meio. */
  heroAnchor: ServiceHeroAnchor;
  /** Foto do case (interino; slots humanos reais usam foto própria). */
  caseImage?: StockPhotoKey;
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
