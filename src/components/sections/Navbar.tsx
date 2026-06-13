'use client';

import React, { useState } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import { Button } from '@/components/ui';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const scrolled = useScrolled(20);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-150 flex items-center ${
          scrolled ? 'glass-nav h-16' : 'bg-transparent h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-white tracking-tight flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-lg bg-viruj-teal-500 flex items-center justify-center text-xs font-black text-white select-none">V</span>
              Viruj Health
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-viruj-neutral-200 hover:text-viruj-teal-200 transition-colors font-medium">
              How it works
            </Link>
            <Link href="#specialties" className="text-viruj-neutral-200 hover:text-viruj-teal-200 transition-colors font-medium">
              Specialties
            </Link>
            <Link href="#doctors" className="text-viruj-neutral-200 hover:text-viruj-teal-200 transition-colors font-medium">
              Doctors
            </Link>
            <Link href="#ai" className="text-viruj-neutral-200 hover:text-viruj-teal-200 transition-colors font-medium">
              AI Assistant
            </Link>
            <Button size="sm">
              Download app
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-viruj-navy-950 z-[40] flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link
          href="#how-it-works"
          className="text-white text-2xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          How it works
        </Link>
        <Link
          href="#specialties"
          className="text-white text-2xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          Specialties
        </Link>
        <Link
          href="#doctors"
          className="text-white text-2xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          Doctors
        </Link>
        <Link
          href="#ai"
          className="text-white text-2xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          AI Assistant
        </Link>
        <Button size="lg" className="mt-4" onClick={() => setIsOpen(false)}>
          Download app
        </Button>
      </div>
    </>
  );
}
