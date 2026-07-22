import type { Metadata } from "next";
import { PostCard } from "@/components/sections/blog/post-card";
import { Section } from "@/components/sections/shared/section";
import { JsonLd } from "@/components/seo/json-ld";
import { publishedPosts } from "@/lib/posts";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Legislação de SST explicada por quem aplica: NRs, eSocial, PGR, clínica ocupacional e departamento pessoal — sem juridiquês.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-surface-inverse text-ink-on-inverse">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-eyebrow text-petrol-300">Blog · SST na prática</p>
          <h1 className="text-display mt-4 max-w-2xl text-white">
            Legislação explicada por quem aplica.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted-on-inverse">
            NRs, eSocial, PGR e clínica ocupacional — o que muda, quando muda e
            o que fazer a respeito. Sem juridiquês.
          </p>
        </div>
      </section>

      <Section>
        {publishedPosts.length === 0 ? (
          <p className="text-ink-muted">Primeiros artigos chegando em breve.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publishedPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
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
