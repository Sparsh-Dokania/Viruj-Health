'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { specialties } from '@/data/specialties';
import { SpecialtyCard } from '@/components/domain';
import { ScrollReveal } from '@/components/sections/ScrollReveal';

export default function SpecialtiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-[#070E1A] text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
              Explore Our Medical Specialties
            </h1>
            <p className="text-viruj-neutral-200/60 max-w-2xl mx-auto mb-16 leading-relaxed text-lg">
              We cover a wide spectrum of clinical divisions, bringing you clinical-grade support powered by leading medical professionals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {specialties.map((spec) => (
              <ScrollReveal key={spec.id} y={15}>
                <SpecialtyCard specialty={spec} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
