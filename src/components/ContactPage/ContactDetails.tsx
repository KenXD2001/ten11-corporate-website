"use client";

export default function ContactDetails() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-16">
        {/* General Enquiries */}
        <div className="space-y-6">
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-light">
            General Information Contact
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Ten11 Headquarters
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base sm:text-lg md:text-xl font-light">
                123 Luxury Lane
                <br />
                Business District
                <br />
                Chennai, India
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base sm:text-lg md:text-xl font-light">
                +91 90252 04414
                <br />
                <a
                  href="mailto:info@ten11hospitality.com"
                  className="border-b border-current hover:border-b-2 transition-colors"
                >
                  info@ten11hospitality.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Investor Contact */}
        <div className="space-y-6">
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-light">
            Investor Contact
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Investor Relations
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base sm:text-lg md:text-xl font-light">
                123 Luxury Lane
                <br />
                Business District
                <br />
                Chennai, India
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base sm:text-lg md:text-xl font-light">
                +91 90252 04414
                <br />
                <a
                  href="mailto:investors@ten11hospitality.com"
                  className="border-b border-current hover:border-b-2 transition-colors"
                >
                  investors@ten11hospitality.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Media / PR Contact */}
        <div className="space-y-6">
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-light">
            Press & Media
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                PR Team
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base sm:text-lg md:text-xl font-light">
                123 Luxury Lane
                <br />
                Business District
                <br />
                Chennai, India
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base sm:text-lg md:text-xl font-light">
                <a
                  href="mailto:press@ten11hospitality.com"
                  className="border-b border-current hover:border-b-2 transition-colors"
                >
                  press@ten11hospitality.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
