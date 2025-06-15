
import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};
export function HomeRobotImageCard({ src, alt, className = '', style = {} }: Props) {
  return (
    <div className={`rounded-full overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900/90 ${className}`} style={style}>
      <img src={src} alt={alt} className="object-cover w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 hover:scale-110" draggable="false" />
    </div>
  );
}
