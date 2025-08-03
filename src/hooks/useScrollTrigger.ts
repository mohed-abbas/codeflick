// GSAP ScrollTrigger hooks for CodeFlick
'use client';

import { useEffect, useRef } from 'react';

// Dynamic imports for client-side only
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let gsap: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let ScrollTrigger: any = null;

const loadGSAP = async () => {
  if (typeof window !== 'undefined' && !gsap) {
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');
    
    gsap = gsapModule.default || gsapModule.gsap;
    ScrollTrigger = scrollTriggerModule.ScrollTrigger;
    
    gsap.registerPlugin(ScrollTrigger);
  }
};

/**
 * Hook for creating parallax scroll effects
 * @param speed - Parallax speed multiplier (0-1)
 * @param direction - Direction of parallax effect
 */
export function useParallax(speed: number = 0.5, direction: 'up' | 'down' = 'up') {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupParallax = async () => {
      await loadGSAP();
      
      if (!elementRef.current || !gsap || !ScrollTrigger) return;

      const element = elementRef.current;
      const yPercent = direction === 'up' ? -speed * 100 : speed * 100;
      
      gsap.to(element, {
        yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    };

    setupParallax();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: unknown) => (trigger as { kill: () => void }).kill());
      }
    };
  }, [speed, direction]);

  return elementRef;
}

/**
 * Hook for scroll-triggered reveal animations
 * @param options - Animation configuration options
 */
export function useScrollReveal(options: {
  threshold?: number;
  delay?: number;
  duration?: number;
  ease?: string;
} = {}) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupReveal = async () => {
      await loadGSAP();
      
      if (!elementRef.current || !gsap || !ScrollTrigger) return;

      const element = elementRef.current;
      const {
        threshold = 0.2,
        delay = 0,
        duration = 1.2,
        ease = "power3.out"
      } = options;
      
      gsap.fromTo(element, 
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: element,
            start: `top ${100 - (threshold * 100)}%`,
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    };

    setupReveal();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: unknown) => (trigger as { kill: () => void }).kill());
      }
    };
  }, [options]);

  return elementRef;
}

/**
 * Hook for staggered scroll animations
 * @param stagger - Delay between each element animation
 * @param selector - CSS selector for child elements
 */
export function useStaggerReveal(stagger: number = 0.2, selector: string = '> *') {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupStagger = async () => {
      await loadGSAP();
      
      if (!containerRef.current || !gsap || !ScrollTrigger) return;

      const container = containerRef.current;
      const children = container.querySelectorAll(selector);
      
      gsap.fromTo(children, 
        {
          opacity: 0,
          y: 60
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    };

    setupStagger();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: unknown) => (trigger as { kill: () => void }).kill());
      }
    };
  }, [stagger, selector]);

  return containerRef;
}

/**
 * Hook for counter animations on scroll
 * @param endValue - Final number to count to
 * @param duration - Animation duration in seconds
 */
export function useCountUp(endValue: number, duration: number = 2) {
  const elementRef = useRef<HTMLElement>(null);
  const countRef = useRef({ value: 0 });

  useEffect(() => {
    const setupCounter = async () => {
      await loadGSAP();
      
      if (!elementRef.current || !gsap || !ScrollTrigger) return;

      const element = elementRef.current;
      
      gsap.to(countRef.current, {
        value: endValue,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          if (element) {
            element.textContent = Math.round(countRef.current.value).toString();
          }
        },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    };

    setupCounter();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: unknown) => (trigger as { kill: () => void }).kill());
      }
    };
  }, [endValue, duration]);

  return elementRef;
}

/**
 * Hook for scroll progress indicator
 */
export function useScrollProgress() {
  const progressRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupProgress = async () => {
      await loadGSAP();
      
      if (!progressRef.current || !gsap || !ScrollTrigger) return;

      const progress = progressRef.current;
      
      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });
    };

    setupProgress();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: unknown) => (trigger as { kill: () => void }).kill());
      }
    };
  }, []);

  return progressRef;
}