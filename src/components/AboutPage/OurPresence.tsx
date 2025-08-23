export default function OurPresence() {
  const lounges = [
    {
      name: "New Delhi Railway Station – IRCTC Executive Lounge",
      note: "(Management & Consulting)",
    },
    {
      name: "Chennai Central Railway Station – INEJ Lounge",
      note: "",
    },
    {
      name: "Mumbai Central Railway Station – India’s first All Digital INEJ Lounge",
      note: "",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Our Presence</h2>

        {/* Intro Text */}
        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
          We are proud to have introduced India’s first luxury railway lounges:
        </p>

        {/* Lounges List */}
        <div className="space-y-6 text-lg text-muted max-w-2xl mx-auto">
          {lounges.map((loc) => (
            <div
              key={loc.name}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="font-semibold text-primary">{loc.name}</p>
              {loc.note && <p className="text-sm text-muted mt-2">{loc.note}</p>}
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mt-12 leading-relaxed">
          Each of our spaces is designed to bring global standards of comfort
          right into India’s busiest transit hubs.
        </p>
      </div>
    </section>
  );
}
