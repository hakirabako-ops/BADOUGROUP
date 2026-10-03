// Single source of truth for BADOU GROUP's business info and page content.
// Edit values here to update them everywhere they appear on the site.

const WHATSAPP_DIGITS = "2250777254124"; // +225 07 77 25 41 24, no leading "+" or spaces

export const siteConfig = {
  name: "BADOU GROUP",
  tagline: "Vitrerie & menuiserie aluminium, ferronnerie, antivols",
  country: "Côte d'Ivoire",
  city: "Cocody, Abidjan",
  addressLine: "Cocody, Abidjan — Côte d'Ivoire",
  phoneDisplay: "+225 07 77 25 41 24",
  phoneHref: "tel:+2250777254124",
  email: "contact@badougroup.com",
  emailHref: "mailto:contact@badougroup.com",
  hours: "Lundi – Samedi : 8h00 – 18h00",
  whatsapp: {
    digits: WHATSAPP_DIGITS,
    display: "+225 07 77 25 41 24",
    href: (message: string) =>
      `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`,
  },
  defaultWhatsappMessage:
    "Bonjour BADOU GROUP, je souhaite un devis pour un projet de vitrerie/menuiserie aluminium, ferronnerie ou antivol.",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Comment ça marche", href: "#processus" },
  { label: "Zone d'intervention", href: "#zone" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Contact", href: "#contact" },
] as const;

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: "window" | "door" | "gate" | "lock";
};

export const services: ServiceItem[] = [
  {
    id: "vitrerie",
    title: "Vitrerie aluminium",
    description:
      "Baies vitrées, façades et vérandas en aluminium avec vitrage sur mesure, pensées pour la lumière et la chaleur du climat ivoirien.",
    points: ["Baies vitrées coulissantes", "Façades & vérandas", "Vitrage feuilleté ou trempé"],
    icon: "window",
  },
  {
    id: "menuiserie",
    title: "Menuiserie aluminium",
    description:
      "Portes, fenêtres et habillages aluminium fabriqués sur mesure, résistants à l'humidité et aux usages intensifs.",
    points: ["Fenêtres & portes coulissantes", "Placards & habillages", "Profilés certifiés"],
    icon: "door",
  },
  {
    id: "ferronnerie",
    title: "Ferronnerie",
    description:
      "Portails, garde-corps, rampes et ouvrages en fer forgé — découpés, soudés et finis à l'atelier avant pose.",
    points: ["Portails & clôtures", "Garde-corps & rampes", "Structures métalliques sur mesure"],
    icon: "gate",
  },
  {
    id: "antivols",
    title: "Antivols & sécurité",
    description:
      "Grilles de protection et systèmes antivols pour portes, fenêtres et façades, sans sacrifier l'esthétique.",
    points: ["Grilles de protection", "Portes sécurisées", "Renforts sur mesure"],
    icon: "lock",
  },
];

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Contact & devis",
    description:
      "Vous nous contactez par WhatsApp ou par téléphone et décrivez votre besoin. Devis gratuit sous 24 à 48h.",
  },
  {
    step: 2,
    title: "Déplacement & prise de mesures",
    description:
      "Notre équipe se déplace chez vous, partout en Côte d'Ivoire, pour relever les mesures exactes sur site.",
  },
  {
    step: 3,
    title: "Fabrication en atelier",
    description:
      "Découpe des profilés aluminium ou fer, soudure et finitions, réalisées à l'atelier selon vos mesures.",
  },
  {
    step: 4,
    title: "Installation sur site",
    description:
      "Pose par notre équipe technique, avec vérification de l'étanchéité, des finitions et de la sécurité.",
  },
  {
    step: 5,
    title: "Suivi & service après-vente",
    description: "Réglages, garantie sur les ouvrages posés et entretien après la livraison.",
  },
];

export const coverageZones = [
  { area: "Abidjan", cities: "Cocody, Yopougon, Marcory, Koumassi, Plateau, Abobo" },
  { area: "Sud & Sud-Ouest", cities: "Grand-Bassam, San-Pédro" },
  { area: "Centre", cities: "Yamoussoukro, Bouaké" },
  { area: "Ouest", cities: "Daloa, Man" },
];

export const commitments = [
  {
    title: "Devis gratuit",
    description: "Une estimation claire et sans engagement avant tout démarrage de chantier.",
  },
  {
    title: "Équipe mobile",
    description: "Nos techniciens se déplacent directement sur votre site, partout dans le pays.",
  },
  {
    title: "Matériaux de qualité",
    description: "Profilés aluminium certifiés et fer traité, choisis pour durer sous le climat local.",
  },
  {
    title: "Finitions soignées",
    description: "Découpe, soudure et pose contrôlées pour un rendu propre et durable.",
  },
];
