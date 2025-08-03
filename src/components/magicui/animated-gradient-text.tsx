"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}

export default function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
}: AnimatedGradientTextProps) {
  const gradientAnimation = {
    background: `linear-gradient(90deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
    backgroundSize: "200% auto",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    animation: `gradient ${speed}s ease infinite`,
  };

  return (
    <>
      <span
        className={cn("animate-gradient bg-gradient-to-r bg-clip-text text-transparent", className)}
        style={gradientAnimation}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}

export { AnimatedGradientText };