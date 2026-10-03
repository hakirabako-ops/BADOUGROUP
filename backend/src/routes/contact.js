import { Router } from "express";
import { Resend } from "resend";

const router = Router();

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

router.post("/", async (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: "Nom, téléphone et message sont requis." });
  }

  console.log("Nouvelle demande de contact :", { name, phone, email, message });

  if (!resend) {
    console.warn("RESEND_API_KEY manquant : email non envoyé.");
    return res.status(201).json({ ok: true, emailed: false });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM || "BADOU GROUP <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "contact@badougroup.com",
      replyTo: email || undefined,
      subject: `Nouvelle demande de devis — ${name}`,
      text: `Nom: ${name}\nTéléphone: ${phone}\nEmail: ${email || "non renseigné"}\n\nMessage:\n${message}`,
    });
    res.status(201).json({ ok: true, emailed: true });
  } catch (err) {
    console.error("Échec de l'envoi d'email :", err);
    res.status(502).json({ error: "Échec de l'envoi de l'email." });
  }
});

export default router;
