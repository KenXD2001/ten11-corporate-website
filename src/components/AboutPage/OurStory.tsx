"use client";

import Image from "next/image";

const steps = [
  {
    title: "The Beginning",
    desc: "Back in 2019, in the busy heart of Delhi, two childhood friends – Francis Gill and Manjit Singh – decided to turn their shared dream into reality. Both had a passion for hospitality and a vision to create spaces where travellers could truly relax, feel valued, and enjoy world-class service.",
    img: "/images/AboutUS/founders.jpg",
  },
  {
    title: "The Meaning Behind Our Name",
    desc: "The name Ten 11 wasn't just picked at random – it came from a mix of inspiration, numerology, and belief. Francis discovered that 10 stood for leadership, innovation, and fresh beginnings, while 11 symbolised intuition, inspiration, and enlightenment. Together, these numbers reflected exactly what they wanted their company to stand for.",
    img: "/images/AboutUS/lounges.jpg",
  },
  {
    title: "Redefining Hospitality",
    desc: "What started as Ten 11 Lounges soon became Ten 11 Hospitality, a name now known for redefining travel comfort. Today, we're on a mission to leave a strong mark in the railway and airport lounge sector – blending innovation, luxury, and heartfelt service.",
    img: "/images/AboutUS/lounge-ambience.jpg",
  },
];

export default function OurStory() {
  return (
    <section className="relative">
      {/* Our Story Top Section */}
      <div className="w-full pt-22 px-6 md:px-34">
        <div className="mx-auto max-w-7xl">
          <div className="w-5/6 mx-0">
            <div className="flex items-center gap-10 mb-4">
              <h2 className="text-lg uppercase tracking-widest">
                Our Story
              </h2>
              <div className="border-b-2 w-[100px]"></div>
            </div>

            <h3 className="text-4xl md:text-5xl font-light leading-tight">
              How it all begins
            </h3>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <section className="relative bg-background pt-14 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          {/* SVG path */}
          <svg
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1/2 md:w-1/4"
            viewBox="0 0 200 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 0 C 100 150, 0 250, 100 400 C 200 550, 100 650, 100 800"
              stroke="#b88d5b"
              strokeWidth="4"
              strokeDasharray="8 4"
              fill="transparent"
            />
          </svg>

          {/* Steps */}
          <div className="flex flex-col space-y-32 relative z-20">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    !isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="md:w-1/2 w-full relative h-72 md:h-96 overflow-hidden shadow-lg">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-muted"></div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 w-full p-6 md:p-12 flex flex-col">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}
