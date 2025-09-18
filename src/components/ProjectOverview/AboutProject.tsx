"use client";

export default function AboutProject() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background text-foreground overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-base leading-snug mb-6">
          Chennai Central – INEJ Lounge
        </h1>

        {/* Description */}
        <p className="text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose">
          Located at the heart of Chennai Central Railway Station, the INEJ Lounge offers a premium respite for travelers seeking comfort and convenience. Operated by Ten 11 Hospitality, this state-of-the-art lounge is designed to provide a serene environment amidst the bustling station, with modern amenities and exceptional service.
        </p>
      </div>
    </section>
  );
}
