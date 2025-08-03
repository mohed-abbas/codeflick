"use client";

import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      borderRadius = "100px",
      shimmerDuration = "3s",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] [color:var(--shimmer-color)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div className="-z-30 blur-[2px] filter">
          <div className="absolute inset-0 overflow-visible [mask:linear-gradient(var(--spread),transparent_20%,white_50%,transparent_80%)]">
            <div className="absolute inset-[-100%] animate-[shimmer_var(--speed)_infinite] bg-[conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>
        {children}

        {/* Highlight */}
        <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
        <div className="absolute -z-10 [background:linear-gradient(var(--spread),var(--shimmer-color)/0_25%,var(--shimmer-color)/1_50%,var(--shimmer-color)/0_75%)] [border-radius:var(--radius)] [inset:2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <style jsx>{`
          @keyframes shimmer {
            0% {
              rotate: 0deg;
            }
            100% {
              rotate: 360deg;
            }
          }
        `}</style>
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };