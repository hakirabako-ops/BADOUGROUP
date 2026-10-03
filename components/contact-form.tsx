"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-steel-dark p-7 text-sm text-steel-light">
        Merci, votre demande a bien été envoyée. Nous vous répondons sous 24 à 48h.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-sm border border-steel-dark p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Nom complet"
          className="rounded-sm border border-steel-dark bg-transparent px-4 py-3 text-sm text-cloud placeholder:text-steel-light focus:border-accent focus:outline-none"
        />
        <input
          name="phone"
          required
          placeholder="Téléphone"
          className="rounded-sm border border-steel-dark bg-transparent px-4 py-3 text-sm text-cloud placeholder:text-steel-light focus:border-accent focus:outline-none"
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="Email (optionnel)"
        className="rounded-sm border border-steel-dark bg-transparent px-4 py-3 text-sm text-cloud placeholder:text-steel-light focus:border-accent focus:outline-none"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Décrivez votre projet"
        className="rounded-sm border border-steel-dark bg-transparent px-4 py-3 text-sm text-cloud placeholder:text-steel-light focus:border-accent focus:outline-none"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-4 py-3 font-display text-sm font-bold uppercase tracking-[0.04em] text-ink-2 transition-colors hover:bg-accent-2 disabled:opacity-60 cursor-pointer"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      {status === "error" && (
        <p className="text-sm text-accent-2">
          L&apos;envoi a échoué. Réessayez, ou contactez-nous directement sur{" "}
          <a
            href={siteConfig.whatsapp.href(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WhatsApp
          </a>
          .
        </p>
      )}
    </form>
  );
}
