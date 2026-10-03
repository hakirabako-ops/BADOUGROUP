"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-ink text-cloud">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="#top" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-extrabold uppercase tracking-tight">
            Badou<span className="text-accent">Group</span>
          </span>
          <span className="hidden font-display text-[11px] font-medium uppercase tracking-[0.16em] text-steel-light sm:inline">
            Alu · Verre · Fer
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold uppercase tracking-[0.06em] text-steel-light transition-colors hover:text-cloud"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.whatsapp.href(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 font-display text-sm font-bold uppercase tracking-[0.04em] text-ink-2 transition-colors hover:bg-accent-2 cursor-pointer"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-steel-dark text-cloud lg:hidden cursor-pointer"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-steel-dark bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 font-display text-base font-semibold uppercase tracking-[0.04em] text-steel-light transition-colors hover:bg-steel-dark hover:text-cloud"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsapp.href(siteConfig.defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-4 py-3 font-display text-sm font-bold uppercase tracking-[0.04em] text-ink-2"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Écrire sur WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
