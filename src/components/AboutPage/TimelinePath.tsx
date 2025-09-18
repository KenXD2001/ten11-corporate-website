"use client";

import { forwardRef } from "react";

type TimelinePathProps = {
  stroke?: string;
  strokeWidth?: number;
  dasharray?: string;
  className?: string;
};

// forwardRef lets us pass pathRef from parent
const TimelinePath = forwardRef<SVGPathElement, TimelinePathProps>(
  ({ stroke = "#b88d5b", strokeWidth = 3, dasharray = "10,10", className = "" }, ref) => {
    return (
      <svg
        className={`absolute left-1/2 top-0 h-full -translate-x-1/2 ${className}`}
        viewBox="0 0 100 800"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <path
          ref={ref}
          d="M50 0 C 50 150, 0 250, 50 400 C 100 550, 50 650, 50 800"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={dasharray}
          fill="transparent"
        />
      </svg>
    );
  }
);

TimelinePath.displayName = "TimelinePath";
export default TimelinePath;
