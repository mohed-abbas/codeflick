"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        // mask styles
        "[background:linear-gradient(var(--color-from),var(--color-to))_padding-box,conic-gradient(from_calc(var(--anchor)*1deg),transparent_0,var(--color-from)_var(--border-width),var(--color-to)_calc(var(--size)*1%),transparent_calc(var(--size)*1%))_border-box]",
        // animate
        "[animation:border-beam_calc(var(--duration)*1s)_infinite_linear_var(--delay)]",
        className,
      )}
    >
      <style jsx>{`
        @keyframes border-beam {
          to {
            --angle: 360deg;
          }
        }
        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
      `}</style>
    </div>
  );
};

export default BorderBeam;