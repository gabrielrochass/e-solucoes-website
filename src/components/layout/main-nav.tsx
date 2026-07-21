"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/site-config";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegação principal" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href.split("/").slice(0, 2).join("/"));
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-petrol-50 hover:text-petrol-700",
                  isActive && "text-petrol-700",
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
