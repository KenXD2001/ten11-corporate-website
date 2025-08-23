"use client";

import Image from "next/image";

export default function CurrentPartners() {
  // Replace these placeholder logos with actual partner logos
  const partners = [
    { name: "Partner 1", logo: "/images/Investors/partner1.png" },
    { name: "Partner 2", logo: "/images/Investors/partner2.png" },
    { name: "Partner 3", logo: "/images/Investors/partner3.png" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">
          Our Current Partners
        </h2>

        {partners.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center mb-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-muted mb-12">
            Partner logos coming soon.
          </p>
        )}

        <button className="text-lg px-8 py-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
          Contact Us for Opportunities
        </button>
      </div>
    </section>
  );
}
