import { FinalCta } from "@/components/sections/home/final-cta";
import { Hero } from "@/components/sections/home/hero";
import { PillarsGrid } from "@/components/sections/home/pillars-grid";
import { ProblemCards } from "@/components/sections/home/problem-cards";
import { SocialProof } from "@/components/sections/home/social-proof";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemCards />
      <PillarsGrid />
      <SocialProof />
      <FinalCta />
    </>
  );
}
