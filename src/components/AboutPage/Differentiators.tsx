export default function Differentiators() {
  const points = [
    "Excellence in every detail",
    "Innovation-led operations",
    "Experiences tailored to guests’ needs",
    "Modern, stylish lounge designs",
    "Sustainable and scalable growth models",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">
          What Makes Us Different
        </h2>

        {/* Intro Text */}
        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-12">
          We’re not just another service provider – we’re experience creators.
          From innovative design to personalised service, everything we do is
          built around making your journey better.
        </p>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold text-primary mb-6">
          Why travellers choose Ten 11 Hospitality:
        </h3>

        {/* Points List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          {points.map((pt) => (
            <div
              key={pt}
              className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-lg font-medium text-muted">{pt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
