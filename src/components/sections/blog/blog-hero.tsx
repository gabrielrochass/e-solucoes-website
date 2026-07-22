import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CardBadge } from "@/components/cards/card";
import { DocLinesPattern } from "@/components/illustrations/doc-lines-pattern";
import { HexPattern } from "@/components/illustrations/hex-pattern";
import { ImageSlot } from "@/components/illustrations/image-slot";
import { MeshGradient } from "@/components/illustrations/mesh-gradient";
import { Entrance, EntranceItem } from "@/components/motion/entrance";
import { getAuthor, type Post } from "@/lib/posts";

function FeaturedCover({ post }: { post: Post }) {
  if (post.tags.includes("clínica ocupacional")) return <HexPattern tone="light" />;
  if (post.tags.includes("departamento pessoal")) return <DocLinesPattern tone="light" />;
  const seed = ((post.slug.length % 3) + 1) as 1 | 2 | 3;
  return <MeshGradient variant="petrol-orange" seed={seed} />;
}

/**
 * Hero editorial do blog: em vez de banner centrado, destaca o artigo mais
 * recente num split (texto + capa), como capa de revista. Diferencia a
 * listagem das outras páginas e dá entrada imediata ao conteúdo.
 */
export function BlogHero({ featured }: { featured?: Post }) {
  const author = featured ? getAuthor(featured.author) : undefined;
  const date =
    featured &&
    new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(
      new Date(featured.date),
    );

  return (
    <section className="border-b border-neutral-200 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Entrance>
          <EntranceItem>
            <p className="text-eyebrow text-accent-text">SST na prática</p>
          </EntranceItem>
          <EntranceItem eager>
            <h1 className="text-display mt-4 max-w-3xl text-petrol-700">
              Legislação explicada por quem aplica.
            </h1>
          </EntranceItem>
        </Entrance>

        {featured && (
          <Link
            href={featured.permalink}
            className="group mt-12 grid gap-8 rounded-lg lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              <ImageSlot
                slotId={`blog-cover-${featured.slug}`}
                ratio="16/9"
              >
                <FeaturedCover post={featured} />
              </ImageSlot>
            </div>
            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="flex flex-wrap gap-2">
                <CardBadge nr="Em destaque" />
                {featured.nrs.slice(0, 2).map((nr) => (
                  <CardBadge key={nr} nr={nr} />
                ))}
              </div>
              <h2 className="text-h2 mt-4 text-petrol-700 group-hover:text-petrol-600">
                {featured.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {featured.description}
              </p>
              <p className="text-eyebrow mt-4 flex flex-wrap gap-x-3 text-ink-meta">
                {author && <span>{author.name}</span>}
                {date && <span>{date}</span>}
                <span>{featured.metadata.readingTime} min de leitura</span>
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-medium text-petrol-500 group-hover:text-petrol-600">
                Ler artigo
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}
