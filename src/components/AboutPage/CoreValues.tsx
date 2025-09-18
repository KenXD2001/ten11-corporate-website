"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Value = {
  key: string;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    key: "C",
    title: "Constant Innovation",
    description:
      "We embrace change with agility and continuously explore new ideas to stay ahead in hospitality.",
  },
  {
    key: "U",
    title: "Unforgettable Experiences",
    description:
      "Every interaction is crafted to create memorable guest experiences rooted in trust and care.",
  },
  {
    key: "T",
    title: "Teamwork",
    description:
      "Collaboration across teams ensures seamless service and strengthens our shared success.",
  },
  {
    key: "E",
    title: "Excellence in Service",
    description:
      "Consistently delivering best-in-class hospitality standards to exceed expectations.",
  },
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [revealedIndex, setRevealedIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  useEffect(() => {
    if (visible && revealedIndex < values.length - 1) {
      const timeout = setTimeout(() => setRevealedIndex((i) => i + 1), 300);
      return () => clearTimeout(timeout);
    }
  }, [visible, revealedIndex]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-6 sm:px-12 lg:px-20 text-background bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-base sm:text-lg uppercase tracking-widest text-background/90">
              Core Values
            </h2>
            {/* <div className="w-16 sm:w-24 border-b border-gray-300"></div> */}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            The principles that define who we are and how we serve.
          </h3>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <AnimatePresence key={val.key}>
              {revealedIndex >= i && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-background"
                >
                  <div className="text-6xl font-bold text-primary mb-4">
                    {val.key}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground/80">{val.title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
}
