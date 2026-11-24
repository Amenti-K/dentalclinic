import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import {
  TrustStats,
  About,
  Services,
  WhyChooseUs,
  Doctors,
  Testimonials,
  Gallery,
  FAQ,
  Contact,
  Booking,
} from "@/components/sections/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <Booking />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
