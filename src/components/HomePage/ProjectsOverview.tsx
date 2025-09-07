"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import IndianMapSVG from "@/assets/svgs/IndianMapSVG2.svg";

// Project Data with manual zoom coordinates
const projects = [
  {
    id: "delhi",
    location: "New Delhi",
    title: "IRCTC Executive Lounge",
    description: "Premium service and comfort in India's busiest station.",
    coords: [347, 315],
    zoomCoords: { x: 220, y: 250, scale: 3 },
    features: ["Premium Services", "Comfortable Seating", "High-speed WiFi"],
  },
  {
    id: "mumbai",
    location: "Mumbai",
    title: "INEJ Digital Lounge",
    description:
      "India's first all-digital lounge, changing hospitality with technology.",
    coords: [230, 610],
    zoomCoords: { x: 400, y: -100, scale: 3 },
    features: ["Digital Check-in", "Smart Lighting", "Touch-screen Menus"],
  },
  {
    id: "chennai",
    location: "Chennai",
    title: "INEJ Lounge",
    description:
      "Contemporary and spacious, crafted for today's modern travelers.",
    coords: [426, 779],
    zoomCoords: { x: 600, y: -450, scale: 3 },
    features: ["Spacious Layout", "Modern Design", "Business Facilities"],
  },
];

export default function ProjectsOverview() {
  const mapWrapperRef = useRef<SVGGElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState("delhi");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const pinRefs = useRef<Array<SVGGElement | null>>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  // Set active project when currentIndex changes
  useEffect(() => {
    const projectId = projects[currentIndex].id;
    setActive(projectId);

    // Animate the card
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentIndex]);

  // Animate pins when active changes
  useEffect(() => {
    pinRefs.current.forEach((pin, index) => {
      if (pin) {
        const isActive = projects[index].id === active;

        gsap.killTweensOf(pin); // stop any ongoing animations

        if (isActive) {
          // Small pop effect once
          gsap.fromTo(
            pin,
            { scale: 0.8 },
            { scale: 1.2, duration: 0.3, ease: "power2.out" }
          );
          gsap.to(pin, {
            scale: 1,
            duration: 0.2,
            delay: 0.3,
            ease: "power2.inOut",
          });
        } else {
          // Reset non-active pins smoothly
          gsap.to(pin, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    });
  }, [active]);

  const ZOOM_OUT_DURATION = 0.8;
  const PAN_DURATION = 1.2;
  const ZOOM_IN_DURATION = 0.8;

  // Overlap controls
  // const PAN_START_AT_ZOOM_OUT_PROGRESS = 0.3;
  // const ZOOM_IN_OVERLAP_WITH_PAN = 0.3;

  const zoomToProject = (projectId: string) => {
    const wrapper = mapWrapperRef.current;
    if (!wrapper || isAnimating) return;

    setIsAnimating(true);

    const project = projects.find((p) => p.id === projectId);
    if (!project) return;

    const { x, y, scale } = project.zoomCoords;

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", overwrite: "auto" },
      onComplete: () => setIsAnimating(false),
    });

    tl.set(wrapper, { transformOrigin: "50% 50%" });

    tl.to(
      wrapper,
      { scale: 2, x: x / 2, y: y / 2, duration: ZOOM_OUT_DURATION },
      0
    );

    tl.to(wrapper, { x, y, duration: PAN_DURATION }, 0.2);

    tl.to(wrapper, { scale, duration: ZOOM_IN_DURATION }, 0.5);
  };

  const handlePinClick = (cityId: string) => {
    const index = projects.findIndex((p) => p.id === cityId);
    setCurrentIndex(index);
  };

  const nextProject = () => {
    if (isAnimating) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    if (isAnimating) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (active) {
      zoomToProject(active);
    }
  }, [active]);

  return (
    <section className="w-full bg-[var(--background)] text-[var(--foreground)] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3 sm:space-y-4">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-[var(--foreground)]/70">
            Projects
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug">
            Discover our flagship lounges across India
          </h3>
        </div>

        {/* Main Content - Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
          {/* Left Section - Project Details Card */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            {/* Carousel Controls */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2 items-center">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => !isAnimating && setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[var(--primary)] scale-110"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <button
                  onClick={prevProject}
                  className="p-2 sm:p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 hover:shadow-lg disabled:opacity-50 border border-gray-200"
                  aria-label="Previous project"
                  disabled={isAnimating}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextProject}
                  className="p-2 sm:p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 hover:shadow-lg disabled:opacity-50 border border-gray-200"
                  aria-label="Next project"
                  disabled={isAnimating}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              ref={cardRef}
              className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100"
            >
              {projects
                .filter((p) => p.id === active)
                .map((p) => (
                  <div key={p.id} className="space-y-5 sm:space-y-6">
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-[var(--primary)] uppercase tracking-wider">
                        Featured Project
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                        {p.location}
                      </h4>
                      <p className="text-base sm:text-lg text-[var(--primary)] font-medium mt-1">
                        {p.title}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {p.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2 sm:mb-3">
                        Key Features
                      </h5>
                      <ul className="space-y-1 sm:space-y-2">
                        {p.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm sm:text-base"
                          >
                            <svg
                              className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--primary)] mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-3 sm:mt-4 px-5 sm:px-6 py-2 sm:py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md text-sm sm:text-base">
                      Explore This Project &rarr;
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Right Section - Map */}
          <div className="w-full lg:w-3/5 relative rounded-2xl overflow-hidden h-96 sm:h-[28rem] md:h-[32rem] lg:h-auto">
            <div
              ref={mapContainerRef}
              className="relative w-full h-full"
              style={{
                padding: "0px",
                maskImage: `linear-gradient(to top, transparent, black 10%), linear-gradient(to bottom, transparent, black 10%), linear-gradient(to left, transparent, black 10%), linear-gradient(to right, transparent, black 10%)`,
                WebkitMaskImage: `linear-gradient(to top, transparent, black 5%), linear-gradient(to bottom, transparent, black 5%), linear-gradient(to left, transparent, black 5%), linear-gradient(to right, transparent, black 5%)`,
                maskComposite: "intersect",
                WebkitMaskComposite: "destination-in",
              }}
            >
              <svg viewBox="0 0 1000 1100" className="w-full h-full">
                <g
                  ref={mapWrapperRef}
                  className="origin-center"
                  transform="scale(1) translate(0, 0)"
                >
                  <IndianMapSVG />

                   {projects.map((p, index) => (
                    <g
                      key={p.id}
                      ref={(el) => {
                        pinRefs.current[index] = el;
                      }}
                      transform={`translate(${p.coords[0]}, ${p.coords[1]})`}
                      className="cursor-pointer group"
                      onClick={() => handlePinClick(p.id)}
                    >
                      {active === p.id && (
                        <>
                          <circle
                            r="16"
                            fill="var(--primary)"
                            opacity="0.2"
                            className="animate-pulse"
                          />
                          <circle r="12" fill="var(--primary)" opacity="0.4" />
                        </>
                      )}
                      <circle
                        r="10"
                        fill={active === p.id ? "var(--primary)" : "#4B5563"}
                        className="transition-all duration-300 group-hover:scale-110 group-hover:fill-[var(--primary)]"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <circle r="4" fill="white" />
                      <text
                        y="-24"
                        textAnchor="middle"
                        className="text-xs sm:text-sm font-bold fill-gray-800 group-hover:fill-[var(--primary)] transition-colors"
                        filter="url(#textOutline)"
                      >
                        {p.location}
                      </text>
                    </g>
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
