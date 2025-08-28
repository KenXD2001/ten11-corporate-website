import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

export default function CurrentOpportunities() {
  const roles = [
    "Guest Relations & Front Office",
    "Food & Beverages Stewards",
    "Lounge Operations",
    "Kitchen Operations",
    "Food & Beverage Management",
    "Project & Facility Management",
    "Business Development",
    "Marketing, Branding & Partnerships",
  ];

  return (
    <section className="w-full bg-primary text-[var(--background)] py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Section */}
        <div className="mb-20 w-5/6 mx-0 text-center md:text-left">
          <div className="flex items-center gap-10 mb-4 justify-center md:justify-start">
            <h2 className="text-lg uppercase tracking-widest text-[var(--background)]/70">
              Current Opportunities
            </h2>
            <div className="border-b-2 border-[var(--background)]/70 w-20"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight text-[var(--background)] mb-6">
            We’re always on the lookout for fresh talent and experienced
            professionals who share our values and vision.
          </h3>

          <p className="text-lg md:text-xl text-[var(--background)]/70 leading-relaxed max-w-3xl">
            Send your resume to{" "}
            <a
              href="mailto:careers@ten11hospitality.com"
              className="text-background font-semibold underline normal-case"
            >
              careers@ten11hospitality.com
            </a>{" "}
            and take the first step towards an exciting career with Ten11
            Hospitality.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role}
              className="group p-6 border border-background transition-colors duration-300 rounded-xl bg-transparent hover:bg-[var(--background)]"
            >
              <p className="text-lg md:text-xl font-light text-[var(--background)]/70 leading-relaxed transition-colors duration-300 group-hover:text-[var(--primary)]">
                {role}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center md:justify-start">
          <Button
            variant="outline"
            className="group inline-flex items-center !border-1 !border-background !text-background !hover:bg-background !hover:text-primary"
          >
            <span>Explore Open Roles</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
