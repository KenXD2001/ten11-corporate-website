// PressReleases.tsx - Updated with brand colors
"use client";

import { motion, Variants, Easing } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Download, FileText, Calendar, Clock, User } from "lucide-react";

export default function PressReleases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const releases = [
    {
      title: "Ten11 Hospitality announces Mumbai Digital Lounge Launch",
      date: "March 15, 2025",
      file: "/pdfs/mumbai-digital-lounge.pdf",
      excerpt: "India's first all-digital lounge opens at Mumbai Central, revolutionizing travel hospitality with cutting-edge technology.",
      readTime: "5 min read",
      author: "Corporate Communications Team"
    },
    {
      title: "Ten11 Hospitality secures strategic investment for expansion",
      date: "January 28, 2025",
      file: "/pdfs/investment-announcement.pdf",
      excerpt: "Company secures $15M in Series A funding to expand lounge network across major Indian railway stations and airports.",
      readTime: "7 min read",
      author: "Finance Department"
    },
    {
      title: "Ten11 Hospitality partners with IRCTC for premium lounge services",
      date: "November 5, 2024",
      file: "/pdfs/irctc-partnership.pdf",
      excerpt: "Exclusive partnership announced to operate premium executive lounges at 10 major railway stations across India.",
      readTime: "6 min read",
      author: "Partnerships Team"
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

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.42, 0, 0.58, 1] as Easing,
      },
    },
  };

  return (
    <section className="w-full bg-background py-24 px-6 relative overflow-hidden">
      {/* Document texture background */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-[0.03]"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Top Section */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm uppercase tracking-widest font-medium mb-6">
            <FileText className="h-4 w-4 mr-2" />
            Official Communications
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 max-w-4xl mx-auto">
            Official <span className="font-semibold text-primary">press releases</span> and 
            corporate <span className="font-semibold text-primary">statements</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Access our formally issued communications and official announcements
          </p>
        </motion.div>

        {/* Releases List - Document style */}
        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {releases.map((release, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-primary group relative"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              {/* Document corner fold effect */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-accent-medium to-transparent rounded-bl-xl"></div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Document icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Date and metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {release.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {release.readTime}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {release.author}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {release.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted mb-6 leading-relaxed border-l-4 border-primary/30 pl-4 py-1">
                      {release.excerpt}
                    </p>

                    {/* Download Button */}
                    <a
                      href={release.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 group/button border border-primary"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Press Release
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Archive Section */}
        {/* <motion.div 
          className="bg-accent-light rounded-xl p-8 mt-16 border border-accent-medium"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Press Release Archive</h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Access our complete collection of historical press releases and official statements dating back to our founding.
            </p>
            <button className="px-6 py-3 border-2 border-accent-medium text-muted rounded-lg font-medium hover:border-primary hover:text-primary transition-all duration-300 inline-flex items-center group">
              <span>Browse Archive</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div> */}

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center group">
            <span>View All Press Releases</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}