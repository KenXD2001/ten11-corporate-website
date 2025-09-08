"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Target, Users, Palette, Leaf } from "lucide-react";

const differentiators = [
  {
    title: "Excellence in every detail",
    description: "We pay attention to the little things — ensuring every touchpoint exceeds expectations and leaves a lasting impression.",
    icon: <Sparkles className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Innovation-led operations",
    description: "By constantly adapting to new technologies and trends, we ensure efficient, modern, and guest-first experiences.",
    icon: <Target className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Experiences tailored to guests' needs",
    description: "Personalization is at the heart of everything we do, crafting unique journeys for every traveler we serve.",
    icon: <Users className="h-6 w-6" />,
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Modern, stylish lounge designs",
    description: "From interiors to ambiance, our lounges reflect contemporary design and comfort, offering a premium escape.",
    icon: <Palette className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Sustainable and scalable growth models",
    description: "We are committed to long-term, eco-conscious growth, ensuring our services remain future-ready and impactful.",
    icon: <Leaf className="h-6 w-6" />,
    color: "from-green-500 to-lime-500"
  },
];

export default function DifferentiatorsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs sm:text-sm uppercase tracking-widest font-medium mb-6">
            Our Differentiators
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 max-w-4xl mx-auto">
            We're not just another service provider — we're{" "}
            <span className="font-semibold text-[var(--primary)]">experience creators</span>.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what sets Ten 11 Hospitality apart in the industry
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                openIndex === index ? "ring-2 ring-[var(--primary)]/20" : ""
              }`}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex items-center p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <div className={`flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r ${item.color} text-white mr-4`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">
                    {item.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-16">
                        <p className="text-gray-600 text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
        >
          {[
            { number: "15K+", label: "Happy Guests" },
            { number: "25+", label: "Lounge Locations" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}