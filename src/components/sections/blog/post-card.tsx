import Link from "next/link";
import { CardBadge } from "@/components/cards/card";
import { DocLinesPattern } from "@/components/illustrations/doc-lines-pattern";
import { HexPattern } from "@/components/illustrations/hex-pattern";
import { ImageSlot } from "@/components/illustrations/image-slot";
import { MeshGradient } from "@/components/illustrations/mesh-gradient";
import { getAuthor, type Post } from "@/lib/posts";

/** Placeholder de capa determinístico por tag dominante do post. */
function CoverPlaceholder({ post }: { post: Post }) {
  if (post.tags.includes("clínica ocupacional")) {
    return <HexPattern tone="light" />;
  }
  if (post.tags.includes("departamento pessoal")) {
    return <DocLinesPattern tone="light" />;
  }
  const seed = ((post.slug.length % 3) + 1) as 1 | 2 | 3;
  return <MeshGradient seed={seed} />;
}

export function PostCard({ post }: { post: Post }) {
  const author = getAuthor(post.author);
  const date = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(
    new Date(post.date),
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-surface-raised shadow-card transition-[box-shadow,translate] duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
      <ImageSlot slotId={`blog-cover-${post.slug}`} ratio="16/9" className="rounded-b-none">
        <CoverPlaceholder post={post} />
      </ImageSlot>
      <div className="flex flex-1 flex-col p-card">
        <div className="flex flex-wrap gap-2">
          {post.nrs.slice(0, 2).map((nr) => (
            <CardBadge key={nr} nr={nr} />
          ))}
        </div>
        <h3 className="text-h3 mt-3 text-petrol-700">
          <Link
            href={post.permalink}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {post.description}
        </p>
        <p className="text-eyebrow mt-4 text-ink-meta">
          {author?.name} · {date} · {post.metadata.readingTime} min
        </p>
      </div>
    </article>
  );
}
