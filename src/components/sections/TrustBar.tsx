'use client';

import React from 'react';
import { AnimatedCounter } from '@/components/ui';
import { Users, Stethoscope, Zap, ShieldCheck } from 'lucide-react';

export function TrustBar() {
  return (
    <section className="bg-white border-y border-viruj-neutral-200/20 py-8 relative z-20 -mt-1 text-viruj-neutral-950">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-4 border-r border-viruj-neutral-200/20">
          <div className="w-12 h-12 rounded-xl bg-viruj-teal-50/50 flex items-center justify-center text-viruj-teal-500">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-xl md:text-2xl text-viruj-neutral-950">
              <AnimatedCounter value={50} suffix="k+" />
            </div>
            <div className="text-viruj-neutral-600 text-sm">Patients</div>
          </div>
        </div>

        <div className="flex items-center gap-4 md:border-r border-viruj-neutral-200/20">
          <div className="w-12 h-12 rounded-xl bg-viruj-teal-50/50 flex items-center justify-center text-viruj-teal-500">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-xl md:text-2xl text-viruj-neutral-950">
              <AnimatedCounter value={800} suffix="+" />
            </div>
            <div className="text-viruj-neutral-600 text-sm">Doctors</div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-r border-viruj-neutral-200/20">
          <div className="w-12 h-12 rounded-xl bg-viruj-teal-50/50 flex items-center justify-center text-viruj-teal-500">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-xl md:text-2xl text-viruj-neutral-950">
              <AnimatedCounter value={200} suffix="k+" />
            </div>
            <div className="text-viruj-neutral-600 text-sm">AI consults</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-viruj-teal-50/50 flex items-center justify-center text-viruj-teal-500">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-xl md:text-2xl text-viruj-neutral-950">
              NABH
            </div>
            <div className="text-viruj-neutral-600 text-sm">Verified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
