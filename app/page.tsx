import Logos from "@/components/cases/Logos";
import Aboutus from "@/components/sections/Aboutus";
import Cases from "@/components/sections/Cases";
import DeliverSection from "@/components/sections/DeliverSection";
import { Faq } from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import TestimonialsCarusel from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <Cases />
      <Services />
      <Aboutus />
      <Testimonials />
      <DeliverSection />'
      <Faq />
      <Footer/>
    </div>
  );
}
