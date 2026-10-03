import { processSteps } from "@/lib/site-config";
import { ProfileMark } from "./profile-mark";

export function ProcessSection() {
  return (
    <section id="processus" className="relative overflow-hidden bg-ink py-20 text-cloud sm:py-28">
      <ProfileMark className="pointer-events-none absolute -left-16 bottom-0 h-[380px] w-[300px] text-steel-dark/60" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-sm text-accent-2">Comment ça marche</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-5xl">
          De votre appel à la pose finale
        </h2>
        <p className="mt-4 max-w-lg text-steel-light">
          Cinq étapes, dont un vrai déplacement de notre équipe chez vous —
          pas seulement un devis à distance.
        </p>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((item, index) => (
            <li key={item.step} className="relative pl-14 lg:pl-0">
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                <span className="font-display text-3xl font-black text-accent lg:text-4xl">
                  {String(item.step).padStart(2, "0")}
                </span>
                <div
                  className="hidden h-px flex-1 bg-steel-dark lg:block"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight lg:mt-4">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-light">
                {item.description}
              </p>
              {index < processSteps.length - 1 && (
                <span
                  className="absolute left-4 top-11 h-full w-px bg-steel-dark sm:hidden"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
