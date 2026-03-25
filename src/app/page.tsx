import Hero from "@/components/Hero";
import PropertyTypes from "@/components/PropertyTypes";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import EnquirySection from "@/components/EnquirySection";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropertyTypes />
      <FeaturedProperties />
      <AboutSection />
      <ContactCTA />
      <Testimonials />
      <EnquirySection />
    </>
  );
}
