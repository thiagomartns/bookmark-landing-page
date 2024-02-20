"use client";

import { Footer } from "@/components/footer";
import { CallToAction } from "@/components/call-to-action";
import { FAQSection } from "@/components/faq";
import { DownloadsSection } from "@/components/downloads-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroComponent } from "@/components/hero";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <HeroComponent />
      <FeaturesSection />
      <DownloadsSection />
      <FAQSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
