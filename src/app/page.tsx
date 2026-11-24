import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import {
  TrustStats,
  About,
  Services,
  WhyChooseUs,
  CareJourney,
  VisitSteps,
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
        <CareJourney />
        <Booking />
        <VisitSteps />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
