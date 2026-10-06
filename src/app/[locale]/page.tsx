import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Technologies from "@/components/home/Technologies";
import Products from "@/components/home/Products";
import Audience from "@/components/home/Audience";
import Partners from "@/components/home/Partners";
import CTA from "@/components/home/CTA";
import ContactModal from "@/components/ui/ContactModal";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Products />
        <Audience />
        <Partners />
        <CTA />
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
