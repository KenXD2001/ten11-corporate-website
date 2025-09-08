"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Download, FileText, Calendar } from "lucide-react";

export default function PressReleases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const releases = [
    {
      title: "Ten11 Hospitality announces Mumbai Digital Lounge Launch",
      date: "March 2025",
      file: "/pdfs/mumbai-digital-lounge.pdf",
      excerpt: "India's first all-digital lounge opens at Mumbai Central, revolutionizing travel hospitality with cutting-edge technology."
    },
    {
      title: "Ten11 Hospitality secures strategic investment for expansion",
      date: "January 2025",
      file: "/pdfs/investment-announcement.pdf",
      excerpt: "Company secures $15M in Series A funding to expand lounge network across major Indian railway stations and airports."
    },
    {
      title: "Ten11 Hospitality partners with IRCTC for premium lounge services",
      date: "November 2024",
      file: "/pdfs/irctc-partnership.pdf",
      excerpt: "Exclusive partnership announced to operate premium executive lounges at 10 major railway stations across India."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary)]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Section */}
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs sm:text-sm uppercase tracking-widest font-medium mb-6">
            Media Center
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 max-w-4xl mx-auto">
            Explore our latest <span className="font-semibold text-[var(--primary)]">announcements</span> and strategic milestones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with official press communications shaping the future of Ten11 Hospitality
          </p>
        </motion.div>

        {/* Releases List */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {releases.map((release, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-6 w-6 text-[var(--primary)]" />
                </div>

                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {release.date}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                  {release.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {release.excerpt}
                </p>

                {/* Download Button */}
                <a
                  href={release.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors duration-300 group/button"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover/button:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <button className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl font-medium hover:bg-[var(--primary)] hover:text-white transition-all duration-300 inline-flex items-center group">
            <span>View All Press Releases</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Media Contact Info
        <motion.div 
          className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white rounded-2xl p-8 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Media Contact</h3>
          <p className="text-white/90 mb-2">For press inquiries, please contact:</p>
          <p className="text-lg font-medium mb-1">press@ten11hospitality.com</p>
          <p className="text-white/80">+91 98765 43210</p>
        </motion.div> */}
      </div>
    </section>
  );
}