"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative bg-background py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Our Story
          </h2>

          <p className="text-lg md:text-xl text-muted leading-relaxed">
            Back in 2019, in the busy heart of Delhi, two childhood friends – Francis Gill and Manjit Singh – decided to turn their shared dream into reality. Both had a passion for hospitality and a vision to create spaces where travellers could truly relax, feel valued, and enjoy world-class service.
          </p>

          <p className="text-lg md:text-xl text-muted leading-relaxed">
            The name Ten 11 wasn’t just picked at random – it came from a mix of inspiration, numerology, and belief. Francis discovered that 10 stood for leadership, innovation, and fresh beginnings, while 11 symbolised intuition, inspiration, and enlightenment. Together, these numbers reflected exactly what they wanted their company to stand for.
          </p>

          <p className="text-lg md:text-xl text-muted leading-relaxed">
            What started as Ten 11 Lounges soon became Ten 11 Hospitality, a name now known for redefining travel comfort. Today, we’re on a mission to leave a strong mark in the railway and airport lounge sector – blending innovation, luxury, and heartfelt service.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 relative w-full h-96 md:h-[32rem] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/AboutUS/founders.jpg" // Replace with founders/lounges image
            alt="Founders or lounge ambience"
            fill
            className="object-cover"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        </div>
      </div>

      {/* Optional decorative shape */}
      <div className="absolute -top-16 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
    </section>
  );
}
