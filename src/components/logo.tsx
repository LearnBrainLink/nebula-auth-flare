
import * as React from "react";

type LogoProps = {
  variant?: "large" | "mega" | string;
  className?: string;
  priority?: boolean; // For compatibility if Next's Image priority is used elsewhere
};

export const Logo: React.FC<LogoProps> = ({
  variant = "large",
  className = "",
}) => {
  // You can swap in your brand SVG below!
  const size =
    variant === "mega"
      ? "w-32 h-32 sm:w-48 sm:h-48"
      : variant === "large"
      ? "w-12 h-12 sm:w-16 sm:h-16"
      : "w-8 h-8";
  return (
    <span className={`inline-flex items-center justify-center ${size} ${className}`}>
      {/* Simple gradient circle & brand initials as placeholder */}
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="40" cy="40" r="39" stroke="url(#logo-gradient)" strokeWidth="2" fill="url(#bg-gradient)" />
        <text
          x="50%"
          y="56%"
          textAnchor="middle"
          fill="url(#text-gradient)"
          fontSize="38"
          fontWeight="bold"
          fontFamily="sans-serif"
          dy=".33em"
        >
          NK
        </text>
        <defs>
          <radialGradient id="bg-gradient" cx="50%" cy="50%" r="65%" fx="50%" fy="45%">
            <stop offset="0%" stopColor="#f0f7ff" />
            <stop offset="95%" stopColor="#c7d2fe" />
          </radialGradient>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6"/>
            <stop offset="1" stopColor="#a21caf"/>
          </linearGradient>
          <linearGradient id="text-gradient" x1="0" y1="30" x2="80" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB"/>
            <stop offset="1" stopColor="#C026D3"/>
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};
