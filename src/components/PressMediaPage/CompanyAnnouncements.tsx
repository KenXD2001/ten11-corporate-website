export default function CompanyAnnouncements() {
  const announcements = [
    {
      date: "July 2025",
      text: "Expansion plans announced for new lounges across Tier-1 cities.",
    },
    {
      date: "May 2025",
      text: "Partnership with global F&B brands to elevate guest experiences.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Company Announcements
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {announcements.map((a, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-muted mb-2">{a.date}</p>
              <p className="text-lg">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
