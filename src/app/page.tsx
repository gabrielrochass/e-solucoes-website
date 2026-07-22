import { FinalCta } from "@/components/sections/home/final-cta";
import { Hero } from "@/components/sections/home/hero";
import { PillarsGrid } from "@/components/sections/home/pillars-grid";
import { ProblemCards } from "@/components/sections/home/problem-cards";
import { SocialProof } from "@/components/sections/home/social-proof";
import { TestimonialsMarquee } from "@/components/sections/home/testimonials-marquee";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessSchema } from "@/lib/seo/schema";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemCards />
      <PillarsGrid />
      <SocialProof />
      <TestimonialsMarquee />
      <FinalCta />
      <JsonLd data={localBusinessSchema()} />
    </>
  );
}
