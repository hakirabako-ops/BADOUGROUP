import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ServiceTicker } from "@/components/service-ticker";
import { Services } from "@/components/services";
import { ProcessSection } from "@/components/process-section";
import { CoverageSection } from "@/components/coverage-section";
import { CommitmentsSection } from "@/components/commitments-section";
import { MaterialsSection } from "@/components/materials-section";
import { CtaSection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ServiceTicker />
        <Services />
        <ProcessSection />
        <CoverageSection />
        <MaterialsSection />
        <CommitmentsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloatButton />
    </div>
  );
}
