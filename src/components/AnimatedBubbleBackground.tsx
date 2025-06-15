
import React, { useMemo, useRef, useEffect } from "react";

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

type Bubble = { top: number; left: number; size: number; delay: number; duration: number };

export const AnimatedBubbleBackground = ({ trigger }: { trigger: number }) => {
  const bubbles = useMemo(() =>
    Array.from({ length: 14 }).map(() => ({
      top: randomBetween(0, 90),
      left: randomBetween(0, 98),
      size: randomBetween(2.5, 8),
      delay: randomBetween(0, 10),
      duration: randomBetween(10, 26),
    })), []);

  // When trigger increases, "wiggle" the bubbles briefly
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.animate([{ filter: "blur(0px)" }, { filter: "blur(1.5px)" }, { filter: "blur(0px)" }], { duration: 300 });
  }, [trigger]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-none">
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 opacity-30"
          style={{
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            width: `${bubble.size}rem`,
            height: `${bubble.size}rem`,
            animation: `bubbleUp${i} ${bubble.duration}s linear ${bubble.delay}s infinite alternate`,
            filter: 'blur(2.5px)'
          }}
        />
      ))}
      <style>
        {bubbles.map((_, i) => `@keyframes bubbleUp${i} {
          from { transform: translateY(0);}
          to   { transform: translateY(-16px);}
        }`).join('\n')}
      </style>
    </div>
  );
};
