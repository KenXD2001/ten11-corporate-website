"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  ExternalLink,
  Newspaper,
} from "lucide-react";
import Media1 from "@/assets/images/Home/HomePress04.webp";
import Media2 from "@/assets/images/Home/HomePress02.webp";
import Media3 from "@/assets/images/Home/HomePress03.webp";

export default function MediaMentions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mentions = [
    {
      title: "Ten11 launches India's first fully digital railway lounge",
      date: "Aug 15, 2023",
      image: Media1,
      link: "#",
      source: "Business Today",
      excerpt:
        "Revolutionizing travel hospitality with cutting-edge technology at Mumbai Central station.",
      readTime: "4 min read",
    },
    {
      title: "Transforming railway stations into world-class hospitality hubs",
      date: "Sep 2, 2023",
      image: Media2,
      link: "#",
      source: "Economic Times",
      excerpt:
        "Ten11 Hospitality redefines passenger experience with premium lounge services across major Indian stations.",
      readTime: "6 min read",
    },
    {
      title: "Innovation in travel comfort: Ten11 Hospitality",
      date: "Oct 5, 2023",
      image: Media3,
      link: "#",
      source: "Forbes India",
      excerpt:
        "How Ten11 is blending technology with luxury to create exceptional travel experiences.",
      readTime: "5 min read",
    },
    {
      title: "Ten11 secures $15M funding for expansion across India",
      date: "Nov 12, 2023",
      image: Media1,
      link: "#",
      source: "Startup Daily",
      excerpt:
        "Strategic investment to fuel growth and bring premium lounge services to 15 new locations.",
      readTime: "3 min read",
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
        ease: easeOut,
      },
    },
  };

  return (
    <section className="w-full bg-primary py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Top Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16 md:mb-20 w-full mx-auto text-center sm:text-left"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-10 mb-4 justify-center sm:justify-start">
            <h2 className="text-base sm:text-lg uppercase tracking-widest text-white">
              Media Coverage
            </h2>
            <div className="border-b-2 w-16 sm:w-[100px] border-white/50"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white">
            Featured in Prestigious Publications Worldwide
          </h3>
        </motion.div>

        {/* Media Grid - Compact corporate style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {mentions.map((mention, index) => (
            <motion.a
              key={index}
              href={mention.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-lg bg-white border border-gray-200 hover:border-primary/60 transition-all duration-300 group overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={mention.image}
                  alt={mention.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Source + Date */}
                <div className="flex items-center text-[13px] text-gray-500 mb-1">
                  <span className="font-medium text-primary">
                    {mention.source}
                  </span>
                  <span className="mx-1">•</span>
                  <span>{mention.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {mention.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {mention.excerpt}
                </p>

                {/* Read more */}
                <div className="mt-auto inline-flex items-center text-primary text-sm font-medium group-hover:underline">
                  Read more
                  <ExternalLink className="h-4 w-4 ml-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Featured Quote Section */}
        <motion.div
          className="bg-white/10 rounded-2xl p-8 mt-16 border-l-4 border-white"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl italic text-white mb-4">
              &ldquo;Ten11 Hospitality is redefining the travel experience in
              India with their innovative approach to lounge services, combining
              technology with luxury in ways we haven&rsquo;t seen
              before.&rdquo;
            </p>

            <p className="font-semibold text-white">
              - Travel & Hospitality Magazine
            </p>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center group">
            <Newspaper className="h-5 w-5 mr-2" />
            <span>Browse All Media Coverage</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { motion, easeOut } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   ArrowRight,
//   Calendar,
//   ExternalLink,
//   Newspaper,
//   Clock,
// } from "lucide-react";
// import Media1 from "@/assets/images/Home/HomePress04.webp";
// import Media2 from "@/assets/images/Home/HomePress02.webp";
// import Media3 from "@/assets/images/Home/HomePress03.webp";

// export default function MediaMentions() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const mentions = [
//     {
//       title: "Ten11 launches India's first fully digital railway lounge",
//       date: "Aug 15, 2023",
//       image: Media1,
//       link: "#",
//       source: "Business Today",
//       excerpt:
//         "Revolutionizing travel hospitality with cutting-edge technology at Mumbai Central station.",
//       readTime: "4 min read",
//     },
//     {
//       title: "Transforming railway stations into world-class hospitality hubs",
//       date: "Sep 2, 2023",
//       image: Media2,
//       link: "#",
//       source: "Economic Times",
//       excerpt:
//         "Ten11 Hospitality redefines passenger experience with premium lounge services across major Indian stations.",
//       readTime: "6 min read",
//     },
//     {
//       title: "Innovation in travel comfort: Ten11 Hospitality",
//       date: "Oct 5, 2023",
//       image: Media3,
//       link: "#",
//       source: "Forbes India",
//       excerpt:
//         "How Ten11 is blending technology with luxury to create exceptional travel experiences.",
//       readTime: "5 min read",
//     },
//     {
//       title: "Ten11 secures $15M funding for expansion across India",
//       date: "Nov 12, 2023",
//       image: Media1,
//       link: "#",
//       source: "Startup Daily",
//       excerpt:
//         "Strategic investment to fuel growth and bring premium lounge services to 15 new locations.",
//       readTime: "3 min read",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.7,
//         ease: easeOut,
//       },
//     },
//   };

//   return (
//     <section className="w-full bg-primary py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

//       <div className="max-w-7xl mx-auto space-y-12 relative z-10">
//         {/* Top Section */}
//         <motion.div
//           className="text-center mb-16"
//           ref={ref}
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/20 text-white text-xs sm:text-sm uppercase tracking-widest font-medium mb-6">
//             <Newspaper className="h-4 w-4 mr-2" />
//             Media Coverage
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 max-w-4xl mx-auto">
//             Featured in{" "}
//             <span className="font-semibold text-white">
//               prestigious publications
//             </span>{" "}
//             worldwide
//           </h2>
//           <p className="text-lg text-white/80 max-w-2xl mx-auto">
//             Discover how the media is covering our journey to transform travel
//             hospitality
//           </p>
//         </motion.div>

//         {/* Media Grid - Newspaper style layout */}
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {mentions.map((mention, index) => (
//             <motion.a
//               key={index}
//               href={mention.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block overflow-hidden flex flex-col rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 group border border-primary"
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//             >
//               {/* Image with newspaper style */}
//               <div className="relative w-full aspect-video bg-gradient-to-br from-accent-light to-accent-medium overflow-hidden">
//                 <Image
//                   src={mention.image}
//                   alt={mention.title}
//                   fill
//                   className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

//                 {/* Source Badge - Newspaper nameplate style */}
//                 <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-sm shadow-md">
//                   <span className="text-xs font-bold text-foreground uppercase tracking-wider">
//                     {mention.source}
//                   </span>
//                 </div>

//                 {/* Read time */}
//                 <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center">
//                   <Clock className="h-3 w-3 mr-1" />
//                   {mention.readTime}
//                 </div>
//               </div>

//               {/* Content - Newspaper column style */}
//               <div className="p-6 flex flex-col flex-1 border-t-4 border-primary">
//                 {/* Date */}
//                 <div className="flex items-center text-sm text-muted mb-3">
//                   <Calendar className="h-4 w-4 mr-2" />
//                   {mention.date}
//                 </div>

//                 {/* Title - Headline style */}
//                 <h3 className="text-xl font-serif font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
//                   {mention.title}
//                 </h3>

//                 {/* Excerpt - Newspaper column text */}
//                 <p className="text-muted mb-4 leading-relaxed line-clamp-3 text-sm font-light">
//                   {mention.excerpt}
//                 </p>

//                 {/* Read More - Newspaper continuation line */}
//                 <div className="mt-auto flex items-center text-primary font-medium text-sm group-hover:underline">
//                   Continue reading
//                   <ExternalLink className="h-4 w-4 ml-2" />
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Featured Quote Section */}
//         <motion.div
//           className="bg-white/10 rounded-2xl p-8 mt-16 border-l-4 border-white"
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ delay: 0.5, duration: 0.7 }}
//         >
//           <div className="text-center max-w-3xl mx-auto">
//             <p className="text-xl italic text-white mb-4">
//               &ldquo;Ten11 Hospitality is redefining the travel experience in
//               India with their innovative approach to lounge services, combining
//               technology with luxury in ways we haven&rsquo;t seen before.&rdquo;
//             </p>

//             <p className="font-semibold text-white">
//               - Travel & Hospitality Magazine
//             </p>
//           </div>
//         </motion.div>

//         {/* View More Button */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ delay: 0.7, duration: 0.7 }}
//         >
//           <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center group">
//             <Newspaper className="h-5 w-5 mr-2" />
//             <span>Browse All Media Coverage</span>
//             <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
