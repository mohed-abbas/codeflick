'use client';

import { motion } from 'framer-motion';
import { heroData } from '@/data/heroData';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { Meteors } from '@/components/magicui/meteors';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';

// Simple animation constants for consistent timing
const ANIMATION_DURATION = 0.8;
const ANIMATION_DELAYS = {
  badge: 0.1,
  title: 0.4,
  description: 0.7,
  cta: 1.0,
  stats: 1.3,
};

export function HeroSection() {
  const handleCTAClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        heroData.background.gradientOverlay
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Grid Pattern */}
        {heroData.background.enableGrid && (
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className="absolute inset-0 -z-20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
            width={50}
            height={50}
          />
        )}
        
        {/* Meteors Animation */}
        {heroData.background.enableMeteors && (
          <Meteors number={20} className="animate-meteor-effect" />
        )}
        
        {/* Gradient Overlays */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAYS.badge }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm mb-8 hover:scale-105 transition-transform">
              <span className="mr-2">{heroData.badge.icon}</span>
              <AnimatedGradientText
                className="text-sm font-medium"
                colorFrom="var(--color-primary)"
                colorTo="var(--color-accent)"
                speed={2}
              >
                {heroData.badge.text}
              </AnimatedGradientText>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAYS.title }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-4">
              <span className="block">{heroData.title.main}</span>
              <AnimatedGradientText 
                className="block text-5xl md:text-7xl lg:text-8xl font-display font-bold"
                colorFrom="var(--color-primary)"
                colorTo="var(--color-accent)"
                speed={2}
              >
                {heroData.title.highlight}
              </AnimatedGradientText>
            </h1>
            {heroData.title.subtitle && (
              <p className="text-xl md:text-2xl text-gray-600 font-medium mt-4">
                {heroData.title.subtitle}
              </p>
            )}
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAYS.description }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {heroData.description}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAYS.cta }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <ShimmerButton
              shimmerColor="#ffffff"
              borderRadius="12px"
              background="var(--color-primary)"
              className="px-8 py-4 text-lg font-medium text-white hover:scale-105 transition-transform"
              onClick={() => handleCTAClick(heroData.cta.primary.href)}
            >
              {heroData.cta.primary.text}
            </ShimmerButton>
            
            <button 
              onClick={() => handleCTAClick(heroData.cta.secondary.href)}
              className="px-8 py-4 text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-xl hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">{heroData.cta.secondary.text}</span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </motion.div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {heroData.stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ANIMATION_DELAYS.stats + (stat.delay || 0) }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 flex items-center justify-center">
                  <NumberTicker 
                    value={stat.value}
                    className="tabular-nums"
                  />
                  <span className="ml-1">{stat.suffix}</span>
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}