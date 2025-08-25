export default function VisionMission() {
  return (
    <section className="w-full bg-primary text-black py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Section */}
        <div className="mb-20 w-5/6 mx-0">
            <div className="flex items-center gap-10 mb-4">
              <h2 className="text-lg uppercase tracking-widest text-[var(--background)]/90">
                OUR VISION & MISSION
              </h2>
              <div className="border-b-2 border-[var(--background)]/90 w-[100px]"></div>
            </div>

            <h3 className="text-4xl md:text-5xl font-light leading-tight text-[var(--background)] mb-4">
              To become the most trusted and widely loved passenger-focused lounge operator across the railway and airport sector.
            </h3>

            <h3 className="text-4xl md:text-5xl font-light leading-tight text-[var(--background)]">
              To provide travellers with a single stop for comfort, hygiene, and luxury – no matter where their journey takes them.
            </h3>
          </div>
      </div>
    </section>
  );
}
