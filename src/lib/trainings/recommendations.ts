import type { Training } from "@/lib/trainings/types";

/** Mapa estático tag (minúscula) → NR, fallback do match direto. */
const tagToNR: Record<string, string> = {
  "trabalho em altura": "NR-35",
  eletricidade: "NR-10",
  "segurança elétrica": "NR-10",
  cipa: "NR-5",
  "espaço confinado": "NR-33",
  epi: "NR-6",
  "construção civil": "NR-18",
  máquinas: "NR-12",
};

interface RecommendationContext {
  /** NRs citadas no conteúdo de origem (post, diagnóstico...). */
  nrs?: string[];
  tags?: string[];
}

/**
 * Recomendação contextual por regras puras (sem IA):
 * 1. match direto de NR; 2. tag → NR; 3. fallback featured. Máx. `limit`.
 */
export function recommendTrainings(
  context: RecommendationContext,
  trainings: Training[],
  limit = 3,
): Training[] {
  const wantedNRs = new Set(context.nrs ?? []);
  for (const tag of context.tags ?? []) {
    const nr = tagToNR[tag.toLowerCase()];
    if (nr) wantedNRs.add(nr);
  }

  const direct = trainings.filter((t) => wantedNRs.has(t.nr));
  const fallback = trainings.filter(
    (t) => t.featured && !wantedNRs.has(t.nr),
  );

  return [...direct, ...fallback].slice(0, limit);
}
