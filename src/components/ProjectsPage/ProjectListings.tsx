"use client";

export default function ProjectListings() {
  const projects = [
    {
      title: "Mumbai Central – INEJ Digital Lounge",
      description:
        "India’s first fully digital lounge with automated check-ins, curated food and drinks, and modern interiors.",
    },
    {
      title: "Chennai Central – INEJ Lounge",
      description:
        "A blend of design, comfort, and service in South India’s busiest hub.",
    },
    {
      title: "New Delhi – IRCTC Executive Lounge",
      description:
        "Premium facilities offering travelers relaxation and convenience at India’s busiest station.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-primary mb-12">Our Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {project.title}
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="text-lg px-8 py-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
          Explore All Projects
        </button>
      </div>
    </section>
  );
}
