import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { TrustSection } from "@/components/TrustSection";
import { Coverage } from "@/components/Coverage";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { en } from "@/lib/i18n/en";

export default function HomeEn() {
  const dict = en;

  return (
    <>
      <Header dict={dict} />
      <main className="flex-1">
        <Hero dict={dict} />
        <Services dict={dict} />
        <About dict={dict} />
        <TrustSection dict={dict} />
        <Coverage dict={dict} />
        <Faq dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
      <FloatingActions dict={dict} />
    </>
  );
}
