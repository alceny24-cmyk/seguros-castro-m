import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { TrustSection } from "@/components/TrustSection";
import { Coverage } from "@/components/Coverage";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <TrustSection />
        <Coverage />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
