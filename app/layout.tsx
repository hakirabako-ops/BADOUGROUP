import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BADOU GROUP — Vitrerie & Menuiserie Aluminium, Ferronnerie, Antivols",
  description:
    "BADOU GROUP réalise vos travaux de vitrerie aluminium, menuiserie aluminium, ferronnerie et antivols en Côte d'Ivoire. Devis gratuit, équipe mobile qui se déplace sur votre chantier.",
  keywords: [
    "vitrerie aluminium Côte d'Ivoire",
    "menuiserie aluminium Abidjan",
    "ferronnerie Abidjan",
    "antivol fenêtre",
    "BADOU GROUP",
  ],
  openGraph: {
    title: "BADOU GROUP — Vitrerie & Menuiserie Aluminium, Ferronnerie, Antivols",
    description:
      "Vitrerie aluminium, menuiserie aluminium, ferronnerie et antivols. Équipe mobile partout en Côte d'Ivoire, devis gratuit.",
    locale: "fr_CI",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${barlowCondensed.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-foreground">{children}</body>
    </html>
  );
}
