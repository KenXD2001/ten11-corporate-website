// import { Button } from "@/components/ui/button";

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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">
          Current Opportunities
        </h2>
        <p className="text-lg text-muted mb-12 max-w-3xl mx-auto">
          We’re always on the lookout for fresh talent and experienced
          professionals who share our values. Send your resume to{" "}
          <a
            href="mailto:careers@ten11hospitality.com"
            className="text-primary font-semibold underline"
          >
            careers@ten11hospitality.com
          </a>
        </p>

        {/* Roles List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {roles.map((role) => (
            <div
              key={role}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-lg font-medium text-muted">{role}</p>
            </div>
          ))}
        </div>

        <button className="text-lg px-8 py-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
          Explore Open Roles
        </button>
      </div>
    </section>
  );
}
