import { navLinks, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-ink-2 py-10 text-steel-light">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-display text-xl font-extrabold uppercase tracking-tight text-cloud">
            Badou<span className="text-accent">Group</span>
          </span>
          <p className="mt-1 text-sm">{siteConfig.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-cloud">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-steel-dark px-5 pt-6 text-xs sm:px-8">
        © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.addressLine}
      </div>
    </footer>
  );
}
