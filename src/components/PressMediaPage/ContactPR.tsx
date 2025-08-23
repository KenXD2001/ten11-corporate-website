// import { Button } from "@/components/ui/button";

export default function ContactPR() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Contact Our PR Team
        </h2>
        <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
          For media inquiries, collaborations, or press opportunities, please
          reach out to our communications team.
        </p>
        <a href="mailto:pr@ten11hospitality.com">
          <button className="px-8 py-6 text-lg rounded-2xl">
            Email PR Team
          </button>
        </a>
      </div>
    </section>
  );
}
