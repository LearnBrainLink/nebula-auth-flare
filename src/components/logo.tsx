
import * as React from "react";

type LogoProps = {
  variant?: "large" | "mega" | string;
  className?: string;
  priority?: boolean; // For compatibility if Next's Image priority is used elsewhere
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

export const Logo: React.FC<LogoProps> = ({
  variant = "large",
  className = "",
  width,
  height,
  style
}) => {
  const sizes =
    variant === "mega"
      ? "w-32 h-32 sm:w-48 sm:h-48"
      : variant === "large"
      ? "w-16 h-16 sm:w-28 sm:h-16"
      : "w-10 h-10 sm:w-12 sm:h-12";
  // Use your custom uploaded image everywhere
  return (
    <img
      src="/lovable-uploads/7d9317bb-ea1c-41ae-89c2-240837fe1d47.png"
      alt="Novakinetix Academy Logo"
      className={`object-contain align-middle ${sizes} ${className}`}
      style={style}
      width={width}
      height={height}
      draggable={false}
      loading="eager"
      />
  );
};
