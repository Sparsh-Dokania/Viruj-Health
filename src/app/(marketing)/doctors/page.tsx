'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { doctors } from '@/data/doctors';
import { DoctorCard } from '@/components/domain';
import { Input } from '@/components/ui';
import { ScrollReveal } from '@/components/sections/ScrollReveal';

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const specialtiesList = ['All', ...Array.from(new Set(doctors.map((d) => d.specialty)))];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-[#070E1A] text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
              Find Our Medical Specialists
            </h1>
            <p className="text-viruj-neutral-200/60 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
              Book consultations with top-tier healthcare professionals vetted for precision care.
            </p>
          </ScrollReveal>

          <ScrollReveal className="max-w-xl mx-auto mb-12 flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Search doctors by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-white placeholder:text-viruj-neutral-600 border-white/20 bg-viruj-navy-900 focus-visible:ring-viruj-teal-500"
            />

            <div className="flex flex-wrap gap-2 justify-center">
              {specialtiesList.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialty(spec)}
                  className={`px-3 py-1 text-sm rounded-full border transition-all duration-150 font-medium ${
                    selectedSpecialty === spec
                      ? 'bg-viruj-teal-500 border-viruj-teal-500 text-white shadow-md'
                      : 'bg-transparent border-white/10 text-viruj-neutral-200 hover:bg-white/5'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {filteredDoctors.map((doc) => (
                <ScrollReveal key={doc.id} y={15}>
                  <DoctorCard doctor={doc} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <p className="text-white/40 mt-12 text-lg">No doctors found matching your filters.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
