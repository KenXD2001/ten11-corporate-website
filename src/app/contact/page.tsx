import ContactHero from "@/components/ContactPage/ContactHero";
import ContactForm from "@/components/ContactPage/ContactForm";
import ContactDetails from "@/components/ContactPage/ContactDetails";
import MapSection from "@/components/ContactPage/MapSection";

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <ContactDetails />
      <MapSection />
    </div>
  );
}
