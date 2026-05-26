import React from 'react';
import { motion } from 'motion/react';
import { HeroSection, EcosystemSection, AIIntelligenceSection, CareContinuitySection, CTASection } from '@/lib/homepageSections';
import { Button } from '@/components/ui';
import { Menu, X } from 'lucide-react';

/**
 * Premium Navigation Bar
 */
export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <motion.nav 
      className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-[#FFFFFF]/80 backdrop-blur-md transition-all"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0F766E] to-[#991B1B] flex items-center justify-center">
            <span className="text-white font-bold text-sm">VH</span>
          </div>
          <span className="font-bold text-lg text-[#0F172A]">Viruj Health</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[#475569] hover:text-[#0F766E] transition-colors">Features</a>
          <a href="#" className="text-[#475569] hover:text-[#0F766E] transition-colors">Pricing</a>
          <a href="#" className="text-[#475569] hover:text-[#0F766E] transition-colors">Blog</a>
          <a href="#" className="text-[#475569] hover:text-[#0F766E] transition-colors">Docs</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="md">Sign In</Button>
          <Button variant="primary" size="md">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden border-t border-[#E5E7EB] bg-[#FFFFFF] p-6 flex flex-col gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#" className="text-[#0F172A] hover:text-[#0F766E]">Features</a>
          <a href="#" className="text-[#0F172A] hover:text-[#0F766E]">Pricing</a>
          <a href="#" className="text-[#0F172A] hover:text-[#0F766E]">Blog</a>
          <div className="flex gap-2 pt-4">
            <Button variant="ghost" size="md" fullWidth>Sign In</Button>
            <Button variant="primary" size="md" fullWidth>Get Started</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

/**
 * Premium Footer
 */
export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0F172A] text-[#E8F0F5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0F766E] to-[#991B1B] flex items-center justify-center">
                <span className="text-white font-bold text-sm">VH</span>
              </div>
              <span className="font-bold text-lg">Viruj Health</span>
            </div>
            <p className="text-[#9CA3AF] text-sm">
              The future operating system for personal healthcare.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Security</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Roadmap</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Community</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">About</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E293B] py-8 text-sm text-[#9CA3AF]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Viruj Health. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/**
 * Homepage Component
 */
export const Homepage: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <EcosystemSection />
        <AIIntelligenceSection />
        <CareContinuitySection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
