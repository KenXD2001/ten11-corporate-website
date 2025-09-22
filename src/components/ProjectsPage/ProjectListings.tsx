"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeProjects01 from "@/assets/images/Home/HomeProjects01.webp";
import HomeProjects02 from "@/assets/images/Home/HomeProjects02.webp";
import HomeProjects03 from "@/assets/images/Home/HomeProjects03.webp";

const projects = [
  {
    slug: "chennai-inej-lounge",
    location: "Chennai",
    title: "Chennai Central – INEJ Lounge",
    description: "Contemporary and spacious, crafted for today's travelers.",
    imgSrc: HomeProjects02,
    alt: "Chennai Central INEJ Lounge",
    features: [
      "Sleeping Pods",
      "Gourmet Dining",
      "Business Center",
      "Relaxation Areas",
    ],
  },
  {
    slug: "mumbai-inej-lounge",
    location: "Mumbai",
    title: "Mumbai Central – INEJ Digital Lounge",
    description:
      "India's first all-digital lounge, changing hospitality with technology.",
    imgSrc: HomeProjects03,
    alt: "Mumbai Central INEJ Digital Lounge",
    features: [
      "Co-Working Spaces",
      "High-Speed Internet",
      "Digital Check-in",
      "Smart Lounges",
    ],
  },
  {
    slug: "vadodara-inej-lounge",
    location: "Vadodara Junction",
    title: "Vadodara Junction – INEJ Digital Lounge",
    description:
      "Modelled after transit lounges, providing a productive and comfortable space for travellers.",
    imgSrc: HomeProjects01,
    alt: "Vadodara Junction INEJ Digital Lounge",
    features: [
      "Wi-Fi & Charging",
      "Comfortable Seating",
      "Food & Beverage",
      "Work-Friendly Environment",
    ],
  },
];

export default function ProjectListings() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // safe here
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeOut, // <-- fixed here
      },
    },
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 text-foreground overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16 md:mb-20 w-full mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-10 mb-4">
            <h2 className="text-base sm:text-lg uppercase tracking-widest text-gray-700">
              Our Flagship Lounges
            </h2>
            <div className="border-b-2 w-16 sm:w-[100px] border-gray-300"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 max-w-5xl">
            Redefining hospitality across India with comfort, design, and technology.
          </h3>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col space-y-6 group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Card Section */}
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image */}
                <div className="relative w-full h-60 sm:h-72 md:h-80 overflow-hidden">
                  <Image
                    src={item.imgSrc}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Location badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-xs font-medium text-[var(--primary)]">
                      {item.location}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-white text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.slice(0, 2).map((feature, i) => (
                        <span
                          key={i}
                          className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button className="self-start flex items-center text-white font-medium text-sm group-hover:underline">
                      <Link href={`/presence/${item.slug}`} className="flex items-center">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      </Link>
                    </button>
                  </div>
                </div>

                {/* Content below image */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {item.features.length > 3 && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                        +{item.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          className="text-center pt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <button className="px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-medium hover:bg-[var(--primary-dark)] transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center mx-auto">
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
