'use client';

import React from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { specialties } from '@/data/specialties';
import { SpecialtyCard } from '@/components/domain';

export function Specialties() {
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set('.specialty-card-reveal', { clearProps: 'all' });
      return;
    }

    ScrollTrigger.batch('.specialty-card-reveal', {
      onEnter: (batch) =>
        gsap.from(batch, {
          y: 20,
          opacity: 0,
          stagger: 0.06,
          duration: 0.25,
          ease: 'power2.out',
          overwrite: 'auto',
        }),
      once: true,
    });
  }, [prefersReducedMotion]);

  return (
    <section className="py-20 md:py-24 bg-viruj-neutral-50 text-viruj-neutral-950" id="specialties">
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <h2 className="text-3xl md:text-4xl font-light text-viruj-neutral-950 tracking-tight leading-tight mb-16">
          Comprehensive medical expertise
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((spec) => (
            <div key={spec.id} className="specialty-card-reveal">
              <SpecialtyCard specialty={spec} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
