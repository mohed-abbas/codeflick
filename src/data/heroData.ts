export interface HeroData {
  badge: {
    text: string;
    icon?: string;
    gradient?: string[];
  };
  title: {
    main: string;
    highlight: string;
    subtitle?: string;
  };
  description: string;
  cta: {
    primary: {
      text: string;
      href: string;
      variant: 'shimmer' | 'standard';
    };
    secondary: {
      text: string;
      href: string;
      variant: 'ripple' | 'outline';
    };
  };
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
    icon?: React.ReactNode;
    delay?: number;
  }>;
  background: {
    enableMeteors: boolean;
    enableGrid: boolean;
    enableParticles: boolean;
    gradientOverlay: string;
  };
}

export const heroData: HeroData = {
  badge: {
    text: 'Innovation Meets Excellence',
    icon: '✨',
    gradient: ['var(--color-primary)', 'var(--color-accent)'],
  },
  title: {
    main: 'Transforming Ideas Into Digital',
    highlight: 'Experiences',
    subtitle: 'Where creativity meets technology',
  },
  description: 'We craft exceptional digital solutions that blend cutting-edge technology with stunning design, delivering results that exceed expectations and drive business growth.',
  cta: {
    primary: {
      text: 'Start Your Journey',
      href: '#contact',
      variant: 'shimmer',
    },
    secondary: {
      text: 'View Our Work',
      href: '#projects',
      variant: 'ripple',
    },
  },
  stats: [
    { value: 200, suffix: '+', label: 'Projects Delivered', delay: 0 },
    { value: 50, suffix: '+', label: 'Happy Clients', delay: 0.1 },
    { value: 5, suffix: '★', label: 'Client Rating', delay: 0.2 },
    { value: 24, suffix: '/7', label: 'Support', delay: 0.3 },
  ],
  background: {
    enableMeteors: true,
    enableGrid: true,
    enableParticles: false,
    gradientOverlay: 'bg-gradient-to-br from-white via-accent/20 to-primary/10',
  },
};