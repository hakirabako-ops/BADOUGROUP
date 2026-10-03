import { services } from "@/lib/site-config";
import { tradeIcons } from "./icons";

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-sm text-accent-dark">Nos métiers</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl">
          Quatre savoir-faire, une seule équipe
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {services.map((service) => {
            const Icon = tradeIcons[service.icon];
            return (
              <article
                key={service.id}
                className="group flex flex-col gap-4 bg-paper p-7 transition-colors hover:bg-paper-2 sm:p-9"
              >
                <Icon className="h-9 w-9 text-accent" />
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-steel">{service.description}</p>
                <ul className="mt-auto flex flex-col gap-1.5 border-t border-border pt-4">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
