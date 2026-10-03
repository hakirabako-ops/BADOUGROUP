import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";
import { ProfileMark } from "./profile-mark";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-accent py-16 text-ink-2 sm:py-20">
      <ProfileMark className="pointer-events-none absolute -right-10 -top-10 h-64 w-52 text-ink-2/10" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="max-w-md font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-4xl">
            Un projet d&apos;aluminium ou de ferronnerie ?
          </h2>
          <p className="mt-3 max-w-md text-sm font-medium text-ink-2/80">
            Décrivez votre besoin sur WhatsApp, nous revenons vers vous avec un devis gratuit.
          </p>
        </div>
        <a
          href={siteConfig.whatsapp.href(siteConfig.defaultWhatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-ink-2 px-7 py-4 font-display text-base font-bold uppercase tracking-[0.04em] text-cloud transition-colors hover:bg-ink cursor-pointer"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {siteConfig.whatsapp.display}
        </a>
      </div>
    </section>
  );
}
