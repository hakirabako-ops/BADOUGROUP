const items = [
  "Vitrerie aluminium",
  "Menuiserie aluminium",
  "Ferronnerie",
  "Antivols & sécurité",
  "Équipe mobile — toute la Côte d'Ivoire",
];

function TickerContent() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="mx-6 inline-flex items-center gap-6">
          <span className="font-display text-sm font-bold uppercase tracking-[0.1em]">
            {item}
          </span>
          <span className="text-ink-2/40" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </>
  );
}

export function ServiceTicker() {
  return (
    <div
      className="overflow-hidden border-y-2 border-ink-2 bg-accent py-3 text-ink-2"
      style={{ transform: "skewY(-1deg)", marginBlock: "-1px" }}
    >
      <div className="flex w-max whitespace-nowrap" style={{ transform: "skewY(1deg)" }}>
        <div className="marquee-track flex w-max shrink-0">
          <TickerContent />
          <TickerContent />
        </div>
      </div>
    </div>
  );
}
