import CareersHero from "@/components/CareersPage/CareersHero";
import WhyWorkWithUs from "@/components/CareersPage/WhyWorkWithUs";
import CurrentOpportunities from "@/components/CareersPage/CurrentOpportunities";
import ExtraSections from "@/components/CareersPage/ExtraSections";

export default function CareersPage() {
  return (
    <div>
      <CareersHero />
      <section className="py-16 bg-white text-center max-w-4xl mx-auto px-6">
        <p className="text-lg md:text-xl text-muted leading-relaxed">
          At Ten 11 Hospitality LLP, we’re not just building luxury lounges,
          we’re building a team of passionate individuals who are shaping the
          future of hospitality. If you’re driven by excellence, inspired by
          innovation, and motivated to make a difference, we’d love to hear
          from you.
        </p>
      </section>
      <WhyWorkWithUs />
      <CurrentOpportunities />
      <ExtraSections />
    </div>
  );
}
