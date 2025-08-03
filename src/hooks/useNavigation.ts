'use client';

import { useState, useEffect, useCallback } from 'react';

interface NavigationState {
  isScrolled: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
  scrollProgress: number;
}

export function useNavigation() {
  const [state, setState] = useState<NavigationState>({
    isScrolled: false,
    activeSection: 'home',
    mobileMenuOpen: false,
    scrollProgress: 0,
  });

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      setState(prev => ({
        ...prev,
        isScrolled: scrolled,
        scrollProgress: Math.min(progress, 1),
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setState(prev => ({
            ...prev,
            activeSection: entry.target.id,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: '-50px 0px -50px 0px',
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      mobileMenuOpen: !prev.mobileMenuOpen,
    }));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      mobileMenuOpen: false,
    }));
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          closeMobileMenu();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeMobileMenu]);

  return {
    ...state,
    toggleMobileMenu,
    closeMobileMenu,
  };
}