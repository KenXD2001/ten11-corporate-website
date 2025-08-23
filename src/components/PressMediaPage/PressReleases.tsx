export default function PressReleases() {
  const releases = [
    {
      title: "Ten11 Hospitality announces Mumbai Digital Lounge Launch",
      date: "March 2025",
      file: "/pdfs/mumbai-digital-lounge.pdf",
    },
    {
      title: "Ten11 Hospitality secures strategic investment for expansion",
      date: "January 2025",
      file: "/pdfs/investment-announcement.pdf",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Press Releases
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {releases.map((r) => (
            <div
              key={r.title}
              className="p-6 bg-gray-50 rounded-xl shadow-md flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold">{r.title}</p>
                <p className="text-sm text-muted">{r.date}</p>
              </div>
              <a
                href={r.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium underline"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
