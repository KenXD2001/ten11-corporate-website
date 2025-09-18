"use client";

import { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Target,
  Users,
  Palette,
  Leaf,
} from "lucide-react";
import Image from "next/image";
import AccordianOneImage from "@/assets/images/Home/HomeCore0101.webp";
import AccordianTwoImage from "@/assets/images/Home/HomeCore0102.webp";
import AccordianThreeImage from "@/assets/images/Home/HomeCore0201.webp";
import AccordianFourImage from "@/assets/images/Home/HomeCore0202.webp";
import AccordianFiveImage from "@/assets/images/Home/HomeCore0301.webp";

const differentiators = [
  {
    title: "Excellence in every detail",
    description:
      "We pay attention to the little things — ensuring every touchpoint exceeds expectations and leaves a lasting impression.",
    icon: <Sparkles className="h-5 w-5" />,
    color: "from-primary/20 to-primary/10",
    image: AccordianOneImage,
  },
  {
    title: "Innovation-led operations",
    description:
      "By constantly adapting to new technologies and trends, we ensure efficient, modern, and guest-first experiences.",
    icon: <Target className="h-5 w-5" />,
    color: "from-primary/20 to-primary/10",
    image: AccordianTwoImage,
  },
  {
    title: "Experiences tailored to guests' needs",
    description:
      "Personalization is at the heart of everything we do, crafting unique journeys for every traveler we serve.",
    icon: <Users className="h-5 w-5" />,
    color: "from-primary/20 to-primary/10",
    image: AccordianThreeImage,
  },
  {
    title: "Modern, stylish lounge designs",
    description:
      "From interiors to ambiance, our lounges reflect contemporary design and comfort, offering a premium escape.",
    icon: <Palette className="h-5 w-5" />,
    color: "from-primary/20 to-primary/10",
    image: AccordianFourImage,
  },
  {
    title: "Sustainable and scalable growth models",
    description:
      "We are committed to long-term, eco-conscious growth, ensuring our services remain future-ready and impactful.",
    icon: <Leaf className="h-5 w-5" />,
    color: "from-primary/20 to-primary/10",
    image: AccordianFiveImage,
  },
];

export default function DifferentiatorsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize content heights after first render
  useEffect(() => {
    // Set initial heights for all accordion items
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openIndex === index) {
          ref.style.maxHeight = ref.scrollHeight + "px";
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [openIndex]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Update max-height when content changes
  useEffect(() => {
    const updateHeights = () => {
      contentRefs.current.forEach((ref, index) => {
        if (ref && openIndex === index) {
          ref.style.maxHeight = ref.scrollHeight + "px";
        }
      });
    };

    // Initial update
    updateHeights();

    // Update on window resize
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, [openIndex]);

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 w-full mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-10 mb-4">
            <h2 className="text-base sm:text-lg uppercase tracking-widest text-foreground/70">
              Our Differentiators
            </h2>
            <div className="border-b-2 w-16 sm:w-[100px] border-foreground/30 mt-2 sm:mt-0"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-4xl">
            Discover what sets Ten 11 Hospitality apart in the industry
          </h3>
        </div>

        {/* Body Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Image Section */}
          <div className="relative w-full overflow-hidden lg:sticky lg:top-24 rounded-2xl">
            <div className="aspect-[3/4] relative transition-opacity duration-500 ease-in-out">
              <Image
                src={
                  openIndex !== null
                    ? differentiators[openIndex].image
                    : differentiators[0].image
                }
                alt={openIndex !== null ? differentiators[openIndex].title : ""}
                fill
                className="object-cover transition-opacity duration-500 ease-in-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={openIndex === 0}
              />
            </div>
          </div>

          {/* Right Accordion Section */}
          <div>
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`overflow-hidden transition-colors duration-300 ${
                  index === 0 ? "border-t-0" : "border-t border-foreground/10"
                } ${
                  index === differentiators.length - 1
                    ? "border-b-0"
                    : "border-b border-foreground/10"
                } ${
                  openIndex === index
                    ? "bg-foreground/5"
                    : "bg-transparent hover:bg-foreground/3"
                }`}
              >
                <button
                  className="w-full flex items-center p-5 text-left focus:outline-none group"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  <div
                    className={`flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r ${item.color} text-primary mr-4 flex-shrink-0 transition-colors duration-300 ${
                      openIndex === index ? "ring-2 ring-primary/30" : ""
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground pr-4 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* + / - toggle */}
                  <span className="text-xl font-light text-muted-foreground ml-2 transition-transform duration-300">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  ref={el => contentRefs.current[index] = el}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: "0px" }}
                >
                  <div className="px-5 pb-5">
                    <div className="pl-14">
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}