'use client';

import React from 'react';
import { Button } from '@/components/ui';
import { Smartphone, Play, Share2, Mail, ShieldAlert, ShieldCheck, Lock } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <section className="bg-viruj-navy-900 text-white py-20 md:py-24 overflow-hidden relative border-t border-white/5">
      {/* Decorative blurred lights */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-viruj-teal-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-viruj-violet-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* CTA Banner */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-8 max-w-3xl mx-auto">
            Start your health journey today
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Smartphone className="w-5 h-5" />}
              className="w-full sm:w-auto font-bold"
            >
              App Store
            </Button>
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Play className="w-5 h-5 fill-current" />}
              className="w-full sm:w-auto font-bold"
            >
              Google Play
            </Button>
          </div>
        </div>

        {/* Footer grid */}
        <footer className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-left">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-1.5">
              <span className="w-8 h-8 rounded-lg bg-viruj-teal-500 flex items-center justify-center text-sm font-black text-white select-none">V</span>
              <span className="font-bold text-xl tracking-tight">Viruj Health</span>
            </div>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              Precision medical care driven by AI, dedicated to providing a clinical-premium experience for everyone.
            </p>
            <div className="flex gap-4">
              <button
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer hover:bg-white/5"
                aria-label="Share page"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer hover:bg-white/5"
                aria-label="Contact support"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <h6 className="font-bold text-sm uppercase tracking-widest mb-6 text-white/40">Product</h6>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="#how-it-works" className="hover:text-viruj-teal-200 transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#ai" className="hover:text-viruj-teal-200 transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link href="#doctors" className="hover:text-viruj-teal-200 transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <span className="text-white/40 cursor-not-allowed">Mobile App</span>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-sm uppercase tracking-widest mb-6 text-white/40">Compliance</h6>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-viruj-teal-500" />
                <span>NABH Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-viruj-teal-500" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-viruj-teal-500" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Lower footer */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <div>© {new Date().getFullYear()} Viruj Health. All rights reserved. Precision Medical Care.</div>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
