import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "@/components/illustrations/image-slot";
import { MeshGradient } from "@/components/illustrations/mesh-gradient";
import type { Author } from "@/lib/posts";

export function AuthorBio({ author }: { author: Author }) {
  return (
    <section
      aria-label={`Sobre ${author.name}`}
      className="mt-14 rounded-lg bg-surface-tint p-card"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="w-20 shrink-0">
          <ImageSlot slotId={`autor-${author.key}`} ratio="1/1" className="rounded-full">
            <MeshGradient variant="petrol-orange" seed={1} />
          </ImageSlot>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-petrol-700">{author.name}</p>
          <p className="text-eyebrow mt-0.5 text-ink-meta">{author.role}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {author.bio}
          </p>
        </div>
        <Button asChild className="shrink-0">
          <Link href="/contato">Agendar conversa</Link>
        </Button>
      </div>
    </section>
  );
}
