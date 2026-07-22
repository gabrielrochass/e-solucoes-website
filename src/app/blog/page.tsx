import type { Metadata } from "next";
import { BlogHero } from "@/components/sections/blog/blog-hero";
import { PostCard } from "@/components/sections/blog/post-card";
import { Section } from "@/components/sections/shared/section";
import { JsonLd } from "@/components/seo/json-ld";
import { publishedPosts } from "@/lib/posts";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Legislação de SST explicada por quem aplica: NRs, eSocial, PGR, clínica ocupacional e departamento pessoal, sem juridiquês.",
};

export default function BlogPage() {
  const [featured, ...rest] = publishedPosts;

  return (
    <>
      <BlogHero featured={featured} />

      <Section>
        {publishedPosts.length === 0 ? (
          <p className="text-ink-muted">Primeiros artigos chegando em breve.</p>
        ) : (
          <>
            <p className="text-eyebrow text-ink-meta">Todos os artigos</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
    </>
  );
}
