export default function VisionMission() {
  return (
    <section className="w-full bg-background py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        {/* Top Section */}
        <div className="w-full sm:w-5/6 mx-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mb-4">
            <h2 className="text-sm sm:text-base uppercase tracking-widest text-foreground/80">
              OUR MISSION
            </h2>
            <div className="border-b-2 border-foreground/60 w-16 sm:w-24"></div>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-snug sm:leading-tight md:leading-tight text-foreground mb-4">
            To become the most trusted and widely loved passenger-focused lounge operator across the railway and airport sector.
          </h3>
        </div>
      </div>
    </section>
  );
}
