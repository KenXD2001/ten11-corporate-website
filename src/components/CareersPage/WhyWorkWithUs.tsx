"use client";

import Image from "next/image";
import HomeCoreImage from "@/assets/images/Home/HomeCore0101.webp";
import { motion } from "framer-motion";

const cards = [
  {
    type: "content",
    title: "Global Leadership",
    description:
      "Work alongside experienced global leaders in hospitality and gain international exposure.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    type: "content",
    title: "Innovation in India",
    description:
      "Be part of first-of-its-kind lounge projects, redefining hospitality across India.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    type: "content",
    title: "Career Growth",
    description:
      "Fast-track your career in a rapidly expanding organization with endless opportunities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    type: "image",
    src: HomeCoreImage,
    alt: "Modern lounge interior",
  },
  {
    type: "content",
    title: "Collaboration",
    description:
      "Join a collaborative, inclusive, and high-energy team environment that values people.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    type: "content",
    title: "Learn from Experts",
    description:
      "Work with some of the best professionals in the industry and accelerate your learning.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function WhyWorkWithUs() {
  return (
    <section className="w-full bg-background text-foreground py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-foreground/5 backdrop-blur-sm text-sm uppercase tracking-widest text-foreground/70 mb-4 border border-foreground/10">
            Why Work With Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl mx-auto">
            Join <span className="font-semibold text-primary">Ten 11 Hospitality</span> and grow with a team that's redefining lounges across India.
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, i) =>
            card.type === "content" ? (
              <motion.div
                key={i}
                className="bg-foreground/5 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between aspect-square hover:bg-foreground/10 transition-all duration-500 border border-foreground/10 hover:border-primary/30 group hover:-translate-y-2 shadow-lg"
                variants={itemVariants}
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 text-primary">
                    {card.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-500">
                    {card.title}
                  </h4>
                  <p className="text-base text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-0.5 bg-primary rounded-full"></div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={i}
                className="relative rounded-2xl overflow-hidden aspect-square shadow-lg group"
                variants={itemVariants}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-background">
                    <h3 className="text-xl font-semibold mb-2">Our Workspace</h3>
                    <p className="text-sm">Modern, inspiring environments that foster creativity</p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-4 bg-primary text-background rounded-xl font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
            Explore Open Positions
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
