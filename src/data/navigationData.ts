export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
}

export interface NavigationData {
  logo: {
    text: string;
    image?: string;
    href: string;
  };
  menuItems: NavigationItem[];
  cta: {
    text: string;
    href: string;
    variant: 'shimmer' | 'standard';
  };
  settings: {
    enableScrollProgress: boolean;
    enableActiveHighlight: boolean;
    mobileBreakpoint: number;
  };
}

export const navigationData: NavigationData = {
  logo: {
    text: 'CodeFlick',
    href: '/',
  },
  menuItems: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: {
    text: 'Get Started',
    href: '#contact',
    variant: 'shimmer',
  },
  settings: {
    enableScrollProgress: true,
    enableActiveHighlight: true,
    mobileBreakpoint: 1024,
  },
};