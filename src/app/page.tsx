import { Navigation } from '@/components/sections/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        {/* Placeholder sections for future implementation */}
        <section id="services" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-secondary mb-4">Services</h2>
            <p className="text-gray-600">Coming in Phase 2B</p>
          </div>
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-secondary mb-4">Projects</h2>
            <p className="text-gray-600">Coming in Phase 2B</p>
          </div>
        </section>
        
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-secondary mb-4">About</h2>
            <p className="text-gray-600">Coming in Phase 2B</p>
          </div>
        </section>
        
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-secondary mb-4">Contact</h2>
            <p className="text-gray-600">Coming in Phase 2B</p>
          </div>
        </section>
      </main>
    </div>
  );
}
