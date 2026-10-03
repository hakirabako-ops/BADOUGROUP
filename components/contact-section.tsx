import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ink py-20 text-cloud sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-sm text-accent-2">Contact</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-5xl">
          Parlons de votre chantier
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <a
            href={siteConfig.whatsapp.href(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-sm border border-steel-dark p-7 transition-colors hover:border-accent cursor-pointer"
          >
            <WhatsAppIcon className="h-8 w-8 text-whatsapp" />
            <span className="font-display text-lg font-bold uppercase tracking-tight">
              WhatsApp
            </span>
            <span className="text-sm text-steel-light">{siteConfig.whatsapp.display}</span>
            <span className="mt-auto text-sm font-semibold text-accent-2 group-hover:underline">
              Écrire maintenant →
            </span>
          </a>

          <a
            href={siteConfig.phoneHref}
            className="group flex flex-col gap-3 rounded-sm border border-steel-dark p-7 transition-colors hover:border-accent cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 5c0-1.1.9-2 2-2h1.2c.5 0 .9.3 1 .8l.9 3.6c.1.4 0 .8-.3 1.1L7.6 9.7c1 2.4 2.7 4.1 5.1 5.1l1.2-1.2c.3-.3.7-.4 1.1-.3l3.6.9c.5.1.8.5.8 1V19c0 1.1-.9 2-2 2h-1C9.9 21 4 15.1 4 8V5Z"
              />
            </svg>
            <span className="font-display text-lg font-bold uppercase tracking-tight">
              Téléphone
            </span>
            <span className="text-sm text-steel-light">{siteConfig.phoneDisplay}</span>
            <span className="mt-auto text-sm font-semibold text-accent-2 group-hover:underline">
              Appeler →
            </span>
          </a>

          <a
            href={siteConfig.emailHref}
            className="group flex flex-col gap-3 rounded-sm border border-steel-dark p-7 transition-colors hover:border-accent cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m4 6.5 8 6 8-6" />
            </svg>
            <span className="font-display text-lg font-bold uppercase tracking-tight">Email</span>
            <span className="text-sm text-steel-light">{siteConfig.email}</span>
            <span className="mt-auto text-sm font-semibold text-accent-2 group-hover:underline">
              Envoyer un message →
            </span>
          </a>
        </div>

        <div className="mt-12">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.06em] text-steel-light">
            Ou laissez-nous vos coordonnées
          </p>
          <ContactForm />
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-steel-dark pt-6 text-sm text-steel-light sm:flex-row sm:justify-between">
          <span>{siteConfig.addressLine}</span>
          <span>{siteConfig.hours}</span>
        </div>
      </div>
    </section>
  );
}
