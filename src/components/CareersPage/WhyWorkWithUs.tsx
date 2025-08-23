export default function WhyWorkWithUs() {
  const points = [
    "Work alongside experienced global leaders in hospitality",
    "Be part of first-of-its-kind lounge projects in India",
    "Fast-track growth in a rapidly expanding organization",
    "A collaborative and inclusive team environment",
    "Learn from the best in the business",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">
          Why Work With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {points.map((point) => (
            <div
              key={point}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-lg text-muted">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
