import { commitments } from "@/lib/site-config";

export function CommitmentsSection() {
  return (
    <section id="pourquoi-nous" className="bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-sm text-accent-dark">Pourquoi nous choisir</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl">
          Un engagement sur chaque chantier
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => (
            <div key={item.title} className="border-t-2 border-accent pt-5">
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
