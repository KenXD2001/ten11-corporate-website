"use client";

interface TimelinePathProps {
  stroke?: string;
  strokeWidth?: number;
  dasharray?: string;
  className?: string;
}

export default function TimelinePath({
  stroke = "#b88d5b",
  strokeWidth = 2,
  dasharray = "8 4",
  className = "",
}: TimelinePathProps) {
  return (
    <svg
      className={`absolute top-0 left-1/2 -translate-x-1/2 h-full ${className}`}
      viewBox="0 0 100 1000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M50 0 C 50 150, 0 250, 50 400 C 100 550, 50 650, 50 800"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={dasharray}
        fill="transparent"
      />
    </svg>
  );
}
