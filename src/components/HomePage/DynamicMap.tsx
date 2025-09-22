"use client";

import { useEffect, useState } from "react";
import type { LatLngExpression } from "leaflet";

export interface Project {
  id: number;
  name: string;
  location: LatLngExpression;
  description: string;
  fullDescription: string;
}

interface DynamicMapProps {
  projects: Project[];
  activeProject: number | null;
  setActiveProject: (index: number | null) => void;
  mapZoom: number;
}

export default function DynamicMap({
  projects,
  activeProject,
  setActiveProject,
  mapZoom,
}: DynamicMapProps) {
  const [mapComponents, setMapComponents] = useState<null | {
    MapContainer: any;
    TileLayer: any;
    Marker: any;
    MapFlyTo: ({ location, zoom }: { location: LatLngExpression; zoom: number }) => null;
    MapInteractionDisabler: () => null;
    createCustomIcon: (isActive: boolean) => any;
  }>(null);

  const [isClient, setIsClient] = useState(false);

  // **Responsive initial zoom state**
  const [initialZoom, setInitialZoom] = useState(5);

  useEffect(() => {
    setIsClient(true);

    // **Set initial zoom based on screen width**
    const updateInitialZoom = () => {
      const width = window.innerWidth;
      if (width >= 1024) setInitialZoom(4); // Desktop
      else if (width >= 768) setInitialZoom(5); // Tablet
      else setInitialZoom(6); // Mobile
    };

    updateInitialZoom(); // Run on mount
    window.addEventListener("resize", updateInitialZoom); // Update on resize

    return () => window.removeEventListener("resize", updateInitialZoom);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadMapComponents = async () => {
        try {
          const L = await import("leaflet");
          const { MapContainer, TileLayer, Marker, useMap } = await import("react-leaflet");

          // Fix for Leaflet default icons in Next.js
          delete (L.Icon.Default.prototype as any)._getIconUrl;

          const redIcon = new L.Icon({
            iconUrl:
              "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
            iconRetinaUrl:
              "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
            shadowUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          });

          const createCustomIcon = (isActive: boolean) => {
            return new L.Icon({
              iconUrl: redIcon.options.iconUrl,
              iconRetinaUrl: redIcon.options.iconRetinaUrl,
              shadowUrl: redIcon.options.shadowUrl,
              iconSize: isActive ? [30, 46] : [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            });
          };

          const MapFlyTo = ({ location, zoom }: { location: LatLngExpression; zoom: number }) => {
            const map = useMap();
            useEffect(() => {
              map.flyTo(location, zoom, { duration: 3, easeLinearity: 0.35 });
            }, [map, location, zoom]);
            return null;
          };

          const MapInteractionDisabler = () => {
            const map = useMap();
            useEffect(() => {
              map.dragging.disable();
              map.touchZoom.disable();
              map.doubleClickZoom.disable();
              map.scrollWheelZoom.disable();
              map.boxZoom.disable();
              map.keyboard.disable();
              return () => {
                map.dragging.enable();
                map.touchZoom.enable();
                map.doubleClickZoom.enable();
                map.scrollWheelZoom.enable();
                map.boxZoom.enable();
                map.keyboard.enable();
              };
            }, [map]);
            return null;
          };

          setMapComponents({
            MapContainer,
            TileLayer,
            Marker,
            MapFlyTo,
            MapInteractionDisabler,
            createCustomIcon,
          });
        } catch (error) {
          console.error("Failed to load map components:", error);
        }
      };

      loadMapComponents();
    }
  }, []);

  if (!isClient || !mapComponents) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, MapFlyTo, MapInteractionDisabler, createCustomIcon } =
    mapComponents;

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={initialZoom} // <-- use responsive initial zoom
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <MapInteractionDisabler />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {projects.map((project, index) => (
        <Marker
          key={project.id}
          position={project.location}
          icon={createCustomIcon(activeProject === index)}
          eventHandlers={{ click: () => setActiveProject(index) }}
        />
      ))}

      {activeProject !== null && <MapFlyTo location={projects[activeProject].location} zoom={mapZoom} />}
    </MapContainer>
  );
}
