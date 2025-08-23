export default function MediaMentions() {
  const mentions = [
    {
      title: "Ten11 launches India’s first fully digital railway lounge",
      source: "Economic Times",
      link: "#",
    },
    {
      title: "Transforming railway stations into world-class hospitality hubs",
      source: "Business Standard",
      link: "#",
    },
    {
      title: "Innovation in travel comfort: Ten11 Hospitality",
      source: "Mint",
      link: "#",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Media Mentions
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {mentions.map((m) => (
            <a
              key={m.title}
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <p className="text-lg font-semibold mb-2">{m.title}</p>
              <p className="text-sm text-muted">{m.source}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
