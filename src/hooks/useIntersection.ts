// Intersection Observer hook for performance-optimized visibility detection
'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface UseIntersectionOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook for detecting when an element enters the viewport
 * @param options - Intersection observer options
 * @returns [ref, isIntersecting, entry]
 */
export function useIntersection<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionOptions = {}
): [React.RefObject<T | null>, boolean, IntersectionObserverEntry | null] {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false
  } = options;

  const elementRef = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setEntry(entry);
      setIsIntersecting(entry.isIntersecting);
    },
    []
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [handleIntersection, threshold, rootMargin]);

  useEffect(() => {
    if (triggerOnce && isIntersecting && elementRef.current) {
      const observer = new IntersectionObserver(() => {});
      observer.unobserve(elementRef.current);
    }
  }, [triggerOnce, isIntersecting]);

  return [elementRef, isIntersecting, entry];
}

/**
 * Hook for observing multiple elements
 * @param options - Intersection observer options
 * @returns [addElement, removeElement, visibleElements]
 */
export function useMultipleIntersection(
  options: UseIntersectionOptions = {}
) {
  const [visibleElements, setVisibleElements] = useState<Set<Element>>(new Set());
  const observer = useRef<IntersectionObserver | null>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px'
  } = options;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    observer.current = new IntersectionObserver(
      (entries) => {
        setVisibleElements((prev) => {
          const newSet = new Set(prev);
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              newSet.add(entry.target);
            } else {
              newSet.delete(entry.target);
            }
          });
          return newSet;
        });
      },
      { threshold, rootMargin }
    );

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [threshold, rootMargin]);

  const addElement = useCallback((element: Element) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  }, []);

  const removeElement = useCallback((element: Element) => {
    if (observer.current) {
      observer.current.unobserve(element);
    }
    setVisibleElements((prev) => {
      const newSet = new Set(prev);
      newSet.delete(element);
      return newSet;
    });
  }, []);

  return { addElement, removeElement, visibleElements };
}

/**
 * Hook for lazy loading images
 * @param src - Image source URL
 * @param options - Intersection observer options
 * @returns [ref, isLoaded, hasError]
 */
export function useLazyImage(
  src: string,
  options: UseIntersectionOptions = {}
) {
  const [ref, isIntersecting] = useIntersection(options);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (isIntersecting && src && !imageSrc) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        setHasError(true);
      };
      
      img.src = src;
    }
  }, [isIntersecting, src, imageSrc]);

  return [ref, imageSrc, isLoaded, hasError] as const;
}

/**
 * Hook for scroll-based progress tracking
 * @param options - Intersection observer options
 * @returns [ref, progress] - progress is 0-1
 */
export function useScrollProgress(options: UseIntersectionOptions = {}) {
  const [ref, , entry] = useIntersection(options);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!entry) return;

    const { boundingClientRect, rootBounds } = entry;
    
    if (!rootBounds) return;

    const elementHeight = boundingClientRect.height;
    const viewportHeight = rootBounds.height;
    const elementTop = boundingClientRect.top;
    
    // Calculate how much of the element has scrolled past the top of the viewport
    const scrolled = Math.max(0, viewportHeight - elementTop);
    const totalScrollDistance = elementHeight + viewportHeight;
    const progressValue = Math.min(1, Math.max(0, scrolled / totalScrollDistance));
    
    setProgress(progressValue);
  }, [entry]);

  return [ref, progress] as const;
}