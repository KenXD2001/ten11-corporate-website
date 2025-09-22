"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DynamicMap, { Project } from "./DynamicMap";

// Project data
const projects: Project[] = [
  {
    id: 1,
    name: "Mumbai Project",
    location: [19.076, 72.8777],
    description: "Our flagship project in the financial capital of India.",
    fullDescription:
      "Located in the heart of Mumbai, this project represents our commitment to excellence in urban development. With state-of-the-art facilities and sustainable design principles, we are creating a landmark that will redefine luxury living in the city.",
  },
  {
    id: 2,
    name: "Chennai Project",
    location: [13.0827, 80.2707],
    description: "A modern development in the cultural hub of South India.",
    fullDescription:
      "Embracing the rich cultural heritage of Chennai, this development combines traditional architectural elements with modern amenities. The project focuses on creating community spaces that foster connection while providing residents with unparalleled comfort.",
  },
  {
    id: 3,
    name: "Delhi Project",
    location: [28.7041, 77.1025],
    description: "An innovative project in the heart of the nation's capital.",
    fullDescription:
      "Our Delhi project is a testament to innovation in urban planning. Designed with smart city principles, it incorporates green spaces, energy-efficient systems, and cutting-edge technology to create a sustainable living environment in the bustling capital.",
  },
];

export default function ProjectsOverview() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mapZoom, setMapZoom] = useState(5);
  const [viewMode, setViewMode] = useState<"selection" | "detail">("selection");
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleProjectSelect = (index: number | null) => {
    setActiveProject(index);
    if (index !== null) {
      setMapZoom(15);
      setViewMode("detail");
    }
  };

  const handleResetView = () => {
    setActiveProject(null);
    setMapZoom(5);
    setViewMode("selection");
  };

  const goToNextProject = () => {
    if (activeProject !== null) {
      setActiveProject((activeProject + 1) % projects.length);
    }
  };

  const goToPrevProject = () => {
    if (activeProject !== null) {
      setActiveProject((activeProject - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-12 lg:px-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-base sm:text-lg uppercase tracking-widest text-gray-600">
              Our Presence
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900">
            Discover our landmark projects across India.
          </h3>
        </div>

        {/* Map Container */}
        <div className="h-[90vh] sm:h-[80vh] lg:h-[70vh] rounded-2xl overflow-hidden shadow-xl relative  border-6 border-primary/60">
          {/* Map */}
          <div className="absolute inset-0 z-0">
            <DynamicMap
              projects={projects}
              activeProject={activeProject}
              setActiveProject={handleProjectSelect}
              mapZoom={mapZoom}
              
            />
          </div>

          {/* --- Desktop Layout: Selection & Detail Cards Side-by-Side --- */}
          <AnimatePresence>
            {viewMode === "selection" && (
              <motion.div
                className="hidden lg:block absolute bottom-6 left-6 z-20 w-80 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 bg-gradient-to-r from-primary to-primary/90 text-background">
                  <h3 className="text-lg font-semibold">Our Projects</h3>
                  <p className="text-background/90 text-sm mt-0.5">
                    Select a project to view details
                  </p>
                </div>
                <div className="max-h-80 overflow-y-auto p-3 space-y-2">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="p-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200/60"
                      onClick={() => handleProjectSelect(index)}
                      whileHover={{ y: -1, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <h4 className="font-medium text-gray-900 text-sm">
                        {project.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 leading-tight">
                        {project.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {viewMode === "detail" && activeProject !== null && (
              <motion.div
                className="hidden lg:block absolute top-1/2 right-6 transform -translate-y-1/2 z-20 w-80 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
              >
                <div className="p-4 bg-gradient-to-r from-primary to-primary/90 text-background">
                  <h3 className="text-lg font-semibold">
                    {projects[activeProject].name}
                  </h3>
                  <p className="text-background/90 text-sm mt-0.5">
                    Project Details
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {projects[activeProject].fullDescription}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={goToPrevProject}
                      className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-medium text-sm"
                    >
                      Previous
                    </button>
                    <button
                      onClick={goToNextProject}
                      className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-medium text-sm"
                    >
                      Next
                    </button>
                  </div>
                  <button
                    onClick={handleResetView}
                    className="w-full py-1.5 text-gray-500 hover:text-gray-700 transition-colors text-xs mt-2"
                  >
                    View All Projects
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- Tablet & Mobile Layout: Bottom Overlay Cards --- */}
          {/* Selection Card */}
          <AnimatePresence>
            {viewMode === "selection" && (
              <motion.div
                className="lg:hidden absolute bottom-0 left-0 w-full z-20 p-4 bg-white rounded-t-xl shadow-lg"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-2">Our Projects</h3>
                <div className="flex overflow-x-auto gap-3">
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className="flex-shrink-0 w-48 p-3 bg-gray-50 rounded-lg cursor-pointer border border-gray-200"
                      onClick={() => handleProjectSelect(index)}
                    >
                      <h4 className="font-medium">{project.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">{project.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Detail Card */}
          <AnimatePresence>
            {viewMode === "detail" && activeProject !== null && (
              <motion.div
                className="lg:hidden absolute bottom-0 left-0 w-full z-20 p-4 bg-white rounded-t-xl shadow-lg"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{projects[activeProject].name}</h3>
                  <button
                    onClick={handleResetView}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4">{projects[activeProject].fullDescription}</p>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={goToPrevProject}
                    className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm"
                  >
                    Previous
                  </button>
                  <button
                    onClick={goToNextProject}
                    className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm"
                  >
                    Next
                  </button>
                </div>
                <button
                  onClick={handleResetView}
                  className="w-full py-2 text-gray-500 text-sm hover:text-gray-700"
                >
                  View All Projects
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
