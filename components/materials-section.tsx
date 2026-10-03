import type { CSSProperties } from "react";

type MaterialPanel = {
  label: string;
  caption: string;
  style: CSSProperties;
};

// Purely graphic textures standing in for the four trades — no stock or
// staged photography, since we don't have real jobsite pictures to show.
const panels: MaterialPanel[] = [
  {
    label: "Vitrage",
    caption: "Baies vitrées & façades",
    style: {
      background:
        "linear-gradient(135deg, var(--color-glass) 0%, var(--color-glass-dark) 55%, var(--color-ink) 100%)",
    },
  },
  {
    label: "Aluminium",
    caption: "Profilés menuiserie",
    style: {
      background: "var(--color-steel-dark)",
      backgroundImage:
        "repeating-linear-gradient(90deg, var(--color-steel-light) 0 2px, transparent 2px 18px)",
      backgroundColor: "var(--color-ink)",
    },
  },
  {
    label: "Fer forgé",
    caption: "Portails & garde-corps",
    style: {
      backgroundColor: "var(--color-ink-2)",
      backgroundImage:
        "repeating-linear-gradient(45deg, var(--color-accent) 0 3px, transparent 3px 26px), repeating-linear-gradient(-45deg, var(--color-accent) 0 3px, transparent 3px 26px)",
    },
  },
  {
    label: "Antivols",
    caption: "Grilles de protection",
    style: {
      backgroundColor: "var(--color-ink)",
      backgroundImage:
        "repeating-linear-gradient(0deg, var(--color-steel-light) 0 3px, transparent 3px 22px), repeating-linear-gradient(90deg, var(--color-steel-light) 0 3px, transparent 3px 22px)",
    },
  },
];

export function MaterialsSection() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-sm text-accent-dark">Matières & finitions</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl">
          Ce que travaillent nos mains
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {panels.map((panel) => (
            <div
              key={panel.label}
              className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm p-5"
              style={panel.style}
            >
              <span className="font-display text-xl font-extrabold uppercase leading-none tracking-tight text-cloud drop-shadow-sm">
                {panel.label}
              </span>
              <span className="mt-1 text-xs font-medium text-cloud/80">{panel.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
