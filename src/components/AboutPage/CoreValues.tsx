"use client";

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

export default function CoreValues() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 w-full md:w-5/6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mb-4">
            <h2 className="text-sm sm:text-base uppercase tracking-widest text-foreground">
              Our Core Values
            </h2>
            <div className="border-b-2 border-foreground w-16 sm:w-24"></div>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-snug sm:leading-tight md:leading-tight">
            Our global employees are deeply committed to the values that define
            our character and culture.
          </h3>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          {values.map((val) => (
            <div
              key={val.title}
              className="text-black p-6 flex flex-col h-full border border-background rounded-lg hover:border-muted transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-3 sm:mb-4">
                {val.title}
              </h3>
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
