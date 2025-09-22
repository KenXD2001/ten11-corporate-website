"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

type Project = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  color: string;
};

const projects: Project[] = [
  { id: 1, name: "Delhi Project", lat: 28.6139, lng: 77.209, color: "red" },
  { id: 2, name: "Mumbai Project", lat: 19.076, lng: 72.8777, color: "blue" },
  { id: 3, name: "London Project", lat: 51.5074, lng: -0.1278, color: "green" },
];

export default function ProjectsGlobe() {
  const globeRef = useRef<any>(null);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  // Handle globe animation when project changes
  useEffect(() => {
    if (!globeRef.current) return;

    const { lat, lng } = selectedProject;

    // Zoom out first
    globeRef.current.pointOfView({ lat, lng, altitude: 1.5 }, 2000);

    setTimeout(() => {
      // Then zoom in
      globeRef.current.pointOfView({ lat, lng, altitude: 0.3 }, 2000);
    }, 2000);
  }, [selectedProject]);

  return (
    <div className="w-full h-[600px] relative">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={projects}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointColor={(d: any) => d.color}
        pointAltitude={0.05}
        pointRadius={0.3}
        atmosphereColor="lightskyblue"
        atmosphereAltitude={0.25}
      />

      {/* Project Selector */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-white/80 px-4 py-2 rounded-xl shadow-lg">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`px-3 py-1 rounded-lg font-medium transition ${
              selectedProject.id === project.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {project.name}
          </button>
        ))}
      </div>
    </div>
  );
}
