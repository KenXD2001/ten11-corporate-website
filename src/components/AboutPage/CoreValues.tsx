export default function CoreValues() {
  const values = [
    {
      title: "Constant Innovation & Adaptability",
      description:
        "We embrace change and keep evolving to meet the needs of modern travellers.",
    },
    {
      title: "Unforgettable Experiences",
      description:
        "We value people – guests, partners, and our own team – building honest and lasting relationships.",
    },
    {
      title: "Teamwork",
      description:
        "We believe great service is a team effort, and we work together to deliver the best.",
    },
    {
      title: "Exceptional Service",
      description:
        "Every guest deserves a first-class experience they’ll remember.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val) => (
            <div
              key={val.title}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {val.title}
              </h3>
              <p className="text-muted text-base leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
