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
    title: "Constant Innovation and Adaptability",
    description:
      "We believe in embracing change and continuously seeking innovative solutions to stay ahead in the dynamic travel landscape."
  },
  {
    key: "U",
    title: "Unforgettable Experiences",
    description:
      "Our People-First ethos means valuing everyone like family—building lasting relationships with honesty, transparency, and trust."
  },
  {
    key: "T",
    title: "Team Work",
    description:
      "We believe in the power of many—not one. Collaboration and open communication are central to exceptional guest experiences."
  },
  {
    key: "E",
    title: "Exceptional Services",
    description:
      "Delivering best-in-class service creates high recall value. We adhere to our values to grow and achieve milestones each year."
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
      { threshold: 0.4 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  useEffect(() => {
    if (visible && revealedIndex < values.length - 1) {
      const timeout = setTimeout(() => setRevealedIndex((i) => i + 1), 400);
      return () => clearTimeout(timeout);
    }
  }, [visible, revealedIndex]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-6 sm:px-12 lg:px-20 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-lg uppercase tracking-widest text-gray-700 mb-4">
          Core Values
        </h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-12">
          Our global employees are deeply committed to the values that define our character and culture.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <AnimatePresence key={val.key}>
              {revealedIndex >= i && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
                >
                  <div className="text-6xl sm:text-7xl font-bold text-primary mb-4">
                    {val.key}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{val.title}</h4>
                  <p className="text-sm text-gray-600">{val.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
}
