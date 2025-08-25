import Image from "next/image";
import HomePurposeBG from "@/assets/images/Home/HomePurposeBG.webp";
import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

export default function BrandPurposeSection() {
  const content = {
    title: "Beyond Transit, An Experience to Remember",
    paragraph:
      "At Ten11 Hospitality, every moment of your journey matters. Our lounges blend comfort, hygiene, and innovation, transforming waiting into a relaxing experience. With elegant interiors, attentive service, and thoughtful amenities, we turn pauses into memorable moments — creating spaces where travelers can unwind, recharge, and truly enjoy the journey.",
    button: "Our Story",
    alt: "Lounge ambience with warm lighting and staff serving",
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Content */}
          <div
            className={`space-y-8 text-center lg:text-left max-w-[640px] ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/5 mix-blend-multiply filter blur-xl animate-pulse"></div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight relative">
                {content.title}
              </h3>
            </div>

            <p className="text-gray-600 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {content.paragraph}
            </p>

            <Button
              variant="outline"
              className="group inline-flex items-center"
            >
              <span>{content.button}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Section - Image */}
          <div
            className={`relative max-w-[640px] mx-auto lg:mx-0 aspect-[3/4] overflow-hidden shadow-2xl ${
              isVisible ? "animate-fadeInRight" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <Image
              src={HomePurposeBG}
              alt={content.alt}
              fill
              className="object-cover object-center transition-all duration-700 ease-out hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
