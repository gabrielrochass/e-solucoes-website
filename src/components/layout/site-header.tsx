import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight text-petrol-700"
        >
          <span
            aria-hidden
            className="grid grid-cols-2 gap-0.5"
          >
            <span className="size-2 rounded-[2px] bg-petrol-700" />
            <span className="size-2 rounded-[2px] bg-orange-400" />
            <span className="size-2 rounded-[2px] bg-petrol-300" />
            <span className="size-2 rounded-[2px] bg-petrol-700" />
          </span>
          {siteConfig.name}
        </Link>
        <MainNav />
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contato">Fale com um especialista</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
