"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const accommodations = [
  {
    title: "Sleeping Pods",
    description: "Private, comfortable sleeping pods with premium bedding for restful naps between journeys.",
    imgSrc: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Executive Lounge",
    description: "Exclusive lounge area with premium seating, workstations, and personalized service for business travelers.",
    imgSrc: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Gourmet Dining",
    description: "Curated menu featuring local Chennai specialties and international cuisine in a sophisticated setting.",
    imgSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Business Center",
    description: "Fully equipped business facilities with high-speed internet, printing services, and meeting spaces.",
    imgSrc: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Shower Facilities",
    description: "Premium shower rooms with luxury amenities, towels, and toiletries for refreshing during layovers.",
    imgSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Entertainment Zone",
    description: "Relaxation area with premium TV channels, reading materials, and comfortable seating arrangements.",
    imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Concierge Services",
    description: "Dedicated staff assistance for travel arrangements, bookings, and local information in Chennai.",
    imgSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Luggage Storage",
    description: "Secure luggage storage facilities with 24/7 monitoring for hassle-free city exploration.",
    imgSrc: "https://images.unsplash.com/photo-1598488033097-9cb5ae8049b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Premium Lounge Access",
    description: "Exclusive access to premium areas with enhanced privacy, comfort, and personalized services.",
    imgSrc: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    title: "Digital Connectivity",
    description: "High-speed Wi-Fi, charging stations, and tech support throughout the lounge facility.",
    imgSrc: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
];

export default function AccommodationSection() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const calculateVisibleCards = () => {
      const totalCards = accommodations.length;
      const cards = [];
      
      for (let i = -2; i <= 2; i++) {
        let index = activeIndex + i;
        if (index < 0) index = totalCards + index;
        if (index >= totalCards) index = index - totalCards;
        cards.push(index);
      }
      
      setVisibleCards(cards);
    };
    
    calculateVisibleCards();
  }, [activeIndex]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : accommodations.length - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev < accommodations.length - 1 ? prev + 1 : 0));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleCardClick = (cardIndex: number) => {
    if (isTransitioning || cardIndex === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(cardIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="w-full py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-base leading-snug mb-6">
            Our Accommodations
          </h1>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-0 z-20 bg-primary/40 hover:bg-primary/90 p-3 rounded-full shadow-lg transition-all disabled:opacity-50"
            aria-label="Previous accommodation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="flex items-end justify-center gap-4 md:gap-6 w-full max-w-5xl mx-auto h-96">
            {visibleCards.map((cardIndex, idx) => {
              const acc = accommodations[cardIndex];
              const isActive = cardIndex === activeIndex;
              const position = idx;

              return (
                <div
                  key={cardIndex}
                  className={`
                    relative border-4 border-primary/80 bg-background rounded-xl flex-shrink-0 
                    transition-all duration-500 ease-in-out transform
                    ${isActive 
                      ? "w-64 md:w-72 lg:w-80 h-96 z-10 scale-105" 
                      : "w-40 md:w-44 lg:w-48 h-72 opacity-80 scale-95 cursor-pointer"
                    }
                    ${position === 0 ? "-rotate-3 -translate-x-1" : ""}
                    ${position === 1 ? "-rotate-2 -translate-x-0.5" : ""}
                    ${position === 3 ? "rotate-2 translate-x-0.5" : ""}
                    ${position === 4 ? "rotate-3 translate-x-1" : ""}
                  `}
                  onClick={() => handleCardClick(cardIndex)}
                >
                  {/* Top - Image */}
                  <div
                    className={`
                      relative w-full overflow-hidden rounded-t-lg
                      ${isActive ? "h-2/5" : "h-4/5"}
                      transition-all duration-500 ease-in-out
                    `}
                  >
                    <Image
                      src={acc.imgSrc}
                      alt={acc.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                    />
                  </div>

                  {/* Bottom - Title / Description */}
                  <div
                    className={`
                      w-full rounded-b-lg p-4 flex flex-col justify-center
                      ${isActive ? "h-3/5" : "h-1/5"}
                      transition-all duration-500 ease-in-out
                    `}
                  >
                    <h3
                      className={`
                        font-semibold text-foreground
                        ${isActive ? "text-lg mb-2" : "text-center text-sm"}
                        transition-all duration-300
                      `}
                    >
                      {acc.title}
                    </h3>
                    {isActive && (
                      <p className="text-foreground/80 text-sm transition-opacity duration-300">
                        {acc.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 z-20 bg-primary/40 hover:bg-primary/90 p-3 rounded-full shadow-lg transition-all disabled:opacity-50"
            aria-label="Next accommodation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {accommodations.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-primary/90 w-10" : "bg-primary/40 w-3"
              }`}
              onClick={() => !isTransitioning && handleCardClick(index)}
              aria-label={`Go to accommodation ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </section>
  );
}