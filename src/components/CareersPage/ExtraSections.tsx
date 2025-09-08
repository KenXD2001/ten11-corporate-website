"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ExtraSections() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 text-[var(--foreground)] py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary)]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Top Section */}
        <motion.div 
          className="mb-20 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          ref={ref}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 justify-center md:justify-start">
            <h2 className="text-lg uppercase tracking-widest text-[var(--primary)] font-semibold">
              CAREERS & TRAINING
            </h2>
            <div className="hidden md:block border-b-2 border-[var(--primary)]/30 w-20"></div>
            <div className="md:hidden border-b-2 border-[var(--primary)]/30 w-20 my-4"></div>
            <p className="text-sm text-gray-500 max-w-md">
              Building the future of hospitality through talent development
            </p>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[var(--foreground)] mb-6 max-w-4xl">
            We offer <span className="font-medium text-[var(--primary)]">structured programs</span> for fresh graduates and professionals to kickstart their journey in hospitality.
          </h3>
          
          <div className="w-24 h-1 bg-[var(--primary)] rounded-full mt-8 md:mt-12"></div>
        </motion.div>

        {/* Bottom Section: Internships & Training */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Internships */}
          <motion.div 
            className="group p-8 lg:p-10 bg-white rounded-2xl border border-gray-100 hover:border-[var(--primary)]/20 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[var(--primary)]/10 transition-colors duration-500"></div>
            
            <div className="mb-6 flex items-center justify-between">
              <h4 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Internships & Freshers
              </h4>
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Training and growth-focused programs designed for fresh graduates and young professionals looking to start their journey in the hospitality industry.
            </p>
            
            <ul className="space-y-3 mb-8">
              {["Hands-on experience", "Mentorship programs", "Career guidance", "Industry exposure"].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors duration-300 inline-flex items-center group-hover:shadow-lg">
              Explore Programs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>

          {/* Training */}
          <motion.div 
            className="group p-8 lg:p-10 bg-white rounded-2xl border border-gray-100 hover:border-[var(--primary)]/20 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--secondary)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[var(--secondary)]/10 transition-colors duration-500"></div>
            
            <div className="mb-6 flex items-center justify-between">
              <h4 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Training Modules
              </h4>
              <div className="w-12 h-12 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)] group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Accessible with employee login, our training modules are tailored to build skills and ensure continuous professional growth.
            </p>
            
            <ul className="space-y-3 mb-8">
              {["Skill development", "Leadership training", "Industry certifications", "Personalized learning paths"].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--secondary)] mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="px-6 py-3 border border-[var(--secondary)] text-[var(--secondary)] rounded-lg font-medium hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 inline-flex items-center group-hover:shadow-lg">
              Employee Login
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {[
            { number: "200+", label: "Trained Professionals" },
            { number: "95%", label: "Placement Rate" },
            { number: "15+", label: "Training Modules" },
            { number: "100%", label: "Growth Focused" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}