"use client";

import Image from "next/image";
import LoungeImage1 from "@/assets/images/Home/HomeProjects01.webp";
import LoungeImage2 from "@/assets/images/Home/HomeProjects02.webp";
import LoungeImage3 from "@/assets/images/Home/HomeProjects03.webp";

const lounges = [
  {
    name: "New Delhi Railway Station",
    location: "IRCTC Executive Lounge",
    note: "",
    imgSrc: LoungeImage1,
    description:
      "Luxury lounge experience curated for business and leisure travelers.",
  },
  {
    name: "Chennai Central Railway Station",
    location: "INEJ Lounge",
    note: "",
    imgSrc: LoungeImage2,
    description:
      "Blending modern design with comfort for travelers on the move.",
  },
  {
    name: "Mumbai Central Railway Station",
    location: "India’s first All Digital INEJ Lounge",
    note: "",
    imgSrc: LoungeImage3,
    description:
      "Digitally enabled lounge offering seamless experiences and convenience.",
  },
];

export default function OurPresence() {
  return (
    <section className="w-full bg-gray-50 text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Top Section */}
        <div className="w-full sm:w-5/6 mx-0 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mb-4">
            <h2 className="text-sm sm:text-base uppercase tracking-widest text-[var(--foreground)]/90">
              OUR PRESENCE
            </h2>
            <div className="border-b-2 border-[var(--foreground)]/90 w-16 sm:w-24"></div>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-snug sm:leading-tight md:leading-tight text-[var(--foreground)]">
            Discover our flagship lounges across India — where comfort, design,
            and technology converge.
          </h3>
        </div>

        {/* Lounges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          {lounges.map((lounge, idx) => (
            <div key={idx} className="flex flex-col space-y-4 group">
              {/* Text Section */}
              <div className="text-center lg:text-left flex flex-col gap-1">
                <span className="text-sm sm:text-base text-primary block">
                  {lounge.location}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light">
                  {lounge.name}
                </h3>
                {lounge.note && (
                  <p className="text-sm text-muted mt-1">{lounge.note}</p>
                )}
              </div>

              {/* Card / Image Section */}
              <div className="relative overflow-hidden bg-muted rounded-lg shadow-lg cursor-pointer">
                <div className="relative w-full h-64 sm:h-72 md:h-80">
                  {/* Uncomment below to use Image */}
                  {/* <Image
                    src={lounge.imgSrc}
                    alt={lounge.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  /> */}
                </div>

                {/* Hover Overlay */}
                <div className="absolute bottom-0 left-4 right-4 sm:left-6 sm:right-6 bg-white/90 text-black p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-t-lg">
                  <p className="text-sm sm:text-base text-muted mb-2 sm:mb-4">
                    {lounge.description}
                  </p>
                  <a className="text-primary font-semibold hover:underline text-sm sm:text-base">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto mt-8 sm:mt-12 text-center">
          Each of our spaces is designed to bring global standards of comfort
          right into India’s busiest transit hubs.
        </p>
      </div>
    </section>
  );
}
