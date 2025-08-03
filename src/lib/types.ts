// Global TypeScript types for CodeFlick project

export interface HeroData {
  badge: string;
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  actions: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  pricing: {
    starting: string;
    type: 'fixed' | 'hourly' | 'project';
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'ui-ux' | 'enterprise';
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationData {
  logo: string;
  menuItems: NavigationItem[];
  cta: {
    text: string;
    href: string;
  };
}

export interface ContactData {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

// Animation types
export interface AnimationVariant {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}

// Component prop types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}