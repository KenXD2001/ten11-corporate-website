"use client";

export default function ContactDetails() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* General Enquiries */}
        <h4 className="text-4xl md:text-5xl font-light mb-6">General Information Contact</h4>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="space-y-1">
            <p className="text-lg md:text-2xl font-base">Ten11 Headquarters</p>
          </div>
          <div className="space-y-1 text-xl md:text-2xl font-light">
            <p>
              123 Luxury Lane
              <br />
              Business District
              <br />
              Chennai, India
            </p>
          </div>
          <div className="space-y-1 text-xl md:text-2xl font-light">
            <p>
              +91 90252 04414
              <br />
              <a href="mailto:info@ten11hospitality.com" className="border-b border-current hover:border-b-2 transition-colors">
                info@ten11hospitality.com
              </a>
            </p>
          </div>
        </div>

        {/* Investor Contact */}
        <h4 className="text-4xl md:text-5xl font-light mb-6">Investor Contact</h4>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="space-y-1">
            <p className="text-xl md:text-2xl font-base">Investor Relations</p>
          </div>
          <div className="space-y-1 text-xl md:text-2xl font-light">
            <p>
              123 Luxury Lane
              <br />
              Business District
              <br />
              Chennai, India
            </p>
          </div>
          <div className="space-y-1 text-xl md:text-2xl font-light">
            <p>
              +91 90252 04414
              <br />
              <a href="mailto:investors@ten11hospitality.com" className="border-b border-current hover:border-b-2 transition-colors">
                investors@ten11hospitality.com
              </a>
            </p>
          </div>
        </div>

        {/* Media / PR Contact */}
        <h4 className="text-4xl md:text-5xl font-light mb-6">Press & Media</h4>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="space-y-1">
            <p className="text-xl md:text-2xl font-base">PR Team</p>
          </div>
          <div className="space-y-1 text-xl md:text-2xl font-light">
            <p>
              123 Luxury Lane
              <br />
              Business District
              <br />
              Chennai, India
            </p>
          </div>
          <div className="space-y-1 text-xl md:text-2xl font-light">
            <p>
              <a href="mailto:press@ten11hospitality.com" className="border-b border-current hover:border-b-2 transition-colors">
                press@ten11hospitality.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
