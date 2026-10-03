import { coverageZones, siteConfig } from "@/lib/site-config";

export function CoverageSection() {
  return (
    <section id="zone" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow text-sm text-accent-dark">Zone d&apos;intervention</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl">
            Notre équipe se déplace jusqu&apos;à vous
          </h2>
          <p className="mt-5 max-w-md text-steel">
            Basés à {siteConfig.city}, nous intervenons dans toute la{" "}
            {siteConfig.country}. La prise de mesures se fait toujours sur
            votre chantier, avant fabrication en atelier.
          </p>
          <a
            href={siteConfig.whatsapp.href(
              "Bonjour BADOU GROUP, êtes-vous disponibles pour intervenir dans ma ville ?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-sm border border-foreground px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.04em] text-foreground transition-colors hover:bg-foreground hover:text-paper cursor-pointer"
          >
            Vérifier votre zone sur WhatsApp
          </a>
        </div>

        <div
          className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0 11px, var(--color-border) 11px 12px)",
          }}
        >
          {coverageZones.map((zone) => (
            <div key={zone.area} className="bg-paper p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
                {zone.area}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-steel">{zone.cities}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-ink p-6">
            <p className="font-display text-sm font-bold uppercase tracking-tight text-cloud">
              Une autre ville ?
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-steel-light">
              Sur devis, nous nous déplaçons partout ailleurs en Côte d&apos;Ivoire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
