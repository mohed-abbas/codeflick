// Navigation data for CodeFlick
import { NavigationData } from '@/lib/types';

export const navigationData: NavigationData = {
  logo: "CodeFlick",
  menuItems: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],
  cta: {
    text: "Get Started",
    href: "#contact"
  }
};