// CompanyAnnouncements.tsx - Updated with brand colors
"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Calendar, Megaphone, Users, TrendingUp, Building, MapPin } from "lucide-react";
import Media1 from "@/assets/images/Home/HomePress04.webp";
import Media2 from "@/assets/images/Home/HomePress02.webp";
import Media3 from "@/assets/images/Home/HomePress03.webp";

export default function CompanyAnnouncements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const announcements = [
    {
      date: "July 2025",
      text: "Expansion plans announced for new lounges across Tier-1 cities.",
      image: Media1,
      type: "Expansion",
      excerpt: "Ten11 Hospitality announces major expansion with 15 new lounge locations in metro cities across India.",
      location: "Mumbai, Delhi, Bangalore"
    },
    {
      date: "May 2025",
      text: "Partnership with global F&B brands to elevate guest experiences.",
      image: Media2,
      type: "Partnership",
      excerpt: "Strategic collaboration with international food and beverage brands to enhance our lounge offerings.",
      partners: "3 Global Brands"
    },
    {
      date: "March 2025",
      text: "New digital lounge technology platform launched.",
      image: Media3,
      type: "Innovation",
      excerpt: "Revolutionary digital platform introduced to enhance guest experience across all lounge locations.",
      features: "Digital Check-in, AI Concierge"
    },
    {
      date: "January 2025",
      text: "Sustainability initiatives and green lounge certification.",
      image: Media1,
      type: "Sustainability",
      excerpt: "Commitment to eco-friendly practices with LEED certification for all new lounge developments.",
      certification: "LEED Gold Standard"
    }
  ];

  const announcementTypes = [
    { icon: <Building className="h-5 w-5" />, label: "Expansion", count: 8, color: "bg-blue-100 text-blue-800" },
    { icon: <Users className="h-5 w-5" />, label: "Partnership", count: 12, color: "bg-purple-100 text-purple-800" },
    { icon: <TrendingUp className="h-5 w-5" />, label: "Innovation", count: 15, color: "bg-green-100 text-green-800" },
    { icon: <Megaphone className="h-5 w-5" />, label: "Announcements", count: 24, color: "bg-orange-100 text-orange-800" }
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
        ease: easeOut,
      },
    },
  };

  return (
    <section className="w-full bg-background py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Section */}
        <motion.div 
          className="text-center"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm uppercase tracking-widest font-medium mb-6">
            <Megaphone className="h-4 w-4 mr-2" />
            Corporate Updates
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 max-w-4xl mx-auto">
            Strategic <span className="font-semibold text-primary">initiatives</span> and 
            business <span className="font-semibold text-primary">expansion</span> updates
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Stay informed about our growth journey and strategic partnerships
          </p>
        </motion.div>

        {/* Announcement Types */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {announcementTypes.map((type, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                {type.icon}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{type.count}</div>
              <div className="text-sm text-muted">{type.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Announcements Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {announcements.map((announcement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-square bg-gradient-to-br from-accent-light to-accent-medium overflow-hidden">
                  <Image
                    src={announcement.image}
                    alt={announcement.text}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-primary">
                      {announcement.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Date */}
                  <div className="flex items-center text-sm text-muted mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {announcement.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {announcement.text}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted mb-4 leading-relaxed line-clamp-3 text-sm flex-1">
                    {announcement.excerpt}
                  </p>

                  {/* Additional Info */}
                  <div className="flex items-center text-sm text-muted mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {announcement.location || announcement.partners || announcement.features || announcement.certification}
                  </div>

                  {/* Read More */}
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center">
                    Read Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
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
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center group">
            <Megaphone className="h-5 w-5 mr-2" />
            <span>View All Corporate Updates</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}