import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Facilities } from "@/components/Facilities";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Transformations } from "@/components/Transformations";
import { Gallery } from "@/components/Gallery";
import { Membership } from "@/components/Membership";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/config";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": siteConfig.name,
    "image": siteConfig.gallery[0],
    "@id": "",
    "url": "https://ultimatefitnesszoneisnapur.com",
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 8, 48, New Town Colony",
      "addressLocality": "Isnapur, Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "502307",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.5453663,
      "longitude": 78.2156482
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Programs />
      <Facilities />
      <WhyChooseUs />
      <Transformations />
      <Gallery />
      <Membership />
      <Testimonials />
      <Location />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
