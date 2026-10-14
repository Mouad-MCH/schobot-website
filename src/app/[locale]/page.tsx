import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Technologies from "@/components/home/Technologies";
import Products from "@/components/home/Products";
import Audience from "@/components/home/Audience";
import Partners from "@/components/home/Partners";
import CTA from "@/components/home/CTA";


export default function HomePage() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Technologies />
        <Products />
        <Audience />
        <Partners />
        <CTA />
      </main>
    </>
  );
}
