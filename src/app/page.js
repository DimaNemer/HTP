
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Partners from "@/components/sections/Partners";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Partners />
      <WhyChooseUs />
      <Testimonials />
      <CTA />

    </main>
  );
}
