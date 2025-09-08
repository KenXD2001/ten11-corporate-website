import { motion } from "framer-motion";
import Image from "next/image";

type PinCardProps = {
  image: string;
  position: "top" | "right" | "bottom" | "left";
  active: boolean;
  coords: number[];
};

export default function PinCard({ image, position, active, coords }: PinCardProps) {
  const positionClasses: Record<string, string> = {
    top: "bottom-full mb-3 left-1/2 -translate-x-1/2",
    right: "left-full ml-3 top-1/2 -translate-y-1/2",
    bottom: "top-full mt-3 left-1/2 -translate-x-1/2",
    left: "right-full mr-3 top-1/2 -translate-y-1/2",
  };

  // Calculate position based on map coordinates
  const leftPosition = `${(coords[0] / 1000) * 100}%`;
  const topPosition = `${(coords[1] / 1100) * 100}%`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={active ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`absolute ${positionClasses[position]} z-20`}
      style={{
        left: leftPosition,
        top: topPosition,
      }}
    >
      <div className="relative w-40 h-40 rounded-2xl shadow-2xl overflow-hidden border-2 border-white bg-white hover:scale-105 transition-transform duration-300 group">
        <Image
          src={image}
          alt="Project Preview"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="160px"
          priority={active}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}