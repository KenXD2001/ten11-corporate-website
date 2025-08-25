import CareersHero from "@/components/CareersPage/CareersHero";
import WhyWorkWithUs from "@/components/CareersPage/WhyWorkWithUs";
import CurrentOpportunities from "@/components/CareersPage/CurrentOpportunities";
import ExtraSections from "@/components/CareersPage/ExtraSections";

export default function CareersPage() {
  return (
    <div>
      <CareersHero />
      <section className="w-full bg-[var(--background)] dark:bg-[var(--background)] text-[var(--foreground)] py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Heading / Top Section */}
          <div className="mb-12 mx-0 text-center md:text-left">

            <p className="text-3xl md:text-6xl leading-relaxed text-[var(--foreground)]/90">
              At Ten 11 Hospitality LLP, we’re not just building luxury lounges,
              we’re building a team of passionate individuals who are shaping
              the future of hospitality. If you’re driven by excellence,
              inspired by innovation, and motivated to make a difference, we’d
              love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <WhyWorkWithUs />
      <CurrentOpportunities />
      <ExtraSections />
    </div>
  );
}
