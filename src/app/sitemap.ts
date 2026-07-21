import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const staticPaths = [
  "/",
  "/sobre",
  "/servicos/departamento-pessoal",
  "/servicos/clinica-ocupacional",
  "/servicos/engenharia-sst",
  "/servicos/complementares",
  "/treinamentos",
  "/blog",
  "/contato",
  "/politica-de-privacidade",
  "/termos-de-uso",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
