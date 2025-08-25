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
    <section className="w-full py-44 px-6 md:px-34 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="mb-20 w-full md:w-5/6">
          <div className="flex items-center gap-10 mb-4">
            <h2 className="text-lg uppercase tracking-widest">
              Our Core Values
            </h2>
            <div className="border-b-2 w-[100px]"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight">
            Our global employees are deeply committed to the values that define
            our character and culture.
          </h3>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 auto-rows-fr">
          {values.map((val) => (
            <div
              key={val.title}
              className="text-black p-6 flex flex-col h-full border border-background hover:border-muted transition-border duration-300"
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-4">
                {val.title}
              </h3>
              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
