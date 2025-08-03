'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { navigationData } from '@/data/navigationData';
import { useNavigation } from '@/hooks/useNavigation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { BorderBeam } from '@/components/magicui/border-beam';
import { cn } from '@/lib/utils';

export function Navigation() {
  const { isScrolled, activeSection, mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavigation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-display text-2xl font-bold text-secondary relative"
          >
            <Link href={navigationData.logo.href} className="flex flex-col">
              <span>{navigationData.logo.text}</span>
              <div className="h-1 w-full bg-gradient-to-r from-primary to-accent rounded-full" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationData.menuItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <motion.div
                  key={item.href}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative text-secondary hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg',
                      isActive && 'text-primary'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                    
                    {/* Active indicator with BorderBeam */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <BorderBeam
                          size={60}
                          duration={4}
                          borderWidth={2}
                          colorFrom="var(--color-primary)"
                          colorTo="var(--color-accent)"
                          className="rounded-lg"
                        />
                      </motion.div>
                    )}
                    
                    {/* Hover underline */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <ShimmerButton
              shimmerColor="#ffffff"
              borderRadius="12px"
              background="var(--color-primary)"
              className="px-6 py-3 text-white font-medium hover:scale-105 transition-transform"
              onClick={() => {
                const element = document.querySelector(navigationData.cta.href);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {navigationData.cta.text}
            </ShimmerButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.div
                className="h-0.5 bg-secondary rounded-full"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="h-0.5 bg-secondary rounded-full"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="h-0.5 bg-secondary rounded-full"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200/20 py-4 bg-white/95 backdrop-blur-md rounded-b-lg"
            >
              {navigationData.menuItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block py-3 px-4 text-secondary hover:text-primary hover:bg-gray-50 transition-colors rounded-lg mx-2',
                        isActive && 'text-primary bg-primary/10'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4 px-2"
              >
                <ShimmerButton
                  shimmerColor="#ffffff"
                  borderRadius="12px"
                  background="var(--color-primary)"
                  className="w-full py-3 text-white font-medium"
                  onClick={() => {
                    const element = document.querySelector(navigationData.cta.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                    closeMobileMenu();
                  }}
                >
                  {navigationData.cta.text}
                </ShimmerButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Indicator */}
      {navigationData.settings.enableScrollProgress && isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{
            transformOrigin: '0%',
          }}
        />
      )}
    </motion.nav>
  );
}