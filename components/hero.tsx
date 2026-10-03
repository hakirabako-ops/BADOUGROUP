import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";
import { ProfileMark } from "./profile-mark";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-cloud">
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 0%, var(--color-glass-dark) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <ProfileMark
        className="pointer-events-none absolute -right-6 top-16 hidden h-[420px] w-[340px] text-steel-dark/70 md:block"
      />
      <ProfileMark
        className="pointer-events-none absolute -right-24 top-40 hidden h-[420px] w-[340px] text-accent/25 md:block"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:pb-28 lg:pt-24">
        <p className="eyebrow text-sm text-accent-2">
          {siteConfig.name} — {siteConfig.city}, {siteConfig.country}
        </p>

        <h1 className="mt-4 max-w-xl font-display text-[13vw] font-black uppercase leading-[0.95] tracking-tight sm:max-w-2xl sm:text-6xl lg:text-7xl">
          L&apos;aluminium et le fer,{" "}
          <span className="text-accent">posés chez vous.</span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-steel-light sm:max-w-lg sm:text-lg">
          Vitrerie aluminium, menuiserie aluminium, ferronnerie et antivols.
          Notre équipe prend les mesures, fabrique en atelier et installe
          directement sur votre chantier, partout en Côte d&apos;Ivoire.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={siteConfig.whatsapp.href(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 font-display text-base font-bold uppercase tracking-[0.04em] text-ink-2 transition-colors hover:bg-accent-2 cursor-pointer"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Demander un devis gratuit
          </a>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-steel-dark px-6 py-3.5 font-display text-base font-bold uppercase tracking-[0.04em] text-cloud transition-colors hover:border-steel-light cursor-pointer"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.14em] text-steel-light">
          Déplacement d&apos;équipe sur chantier · Devis gratuit · Fabrication sur mesure
        </p>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-14 bg-paper sm:h-20"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />
    </section>
  );
}
