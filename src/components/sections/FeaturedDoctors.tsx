'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { doctors } from '@/data/doctors';
import { DoctorCard } from '@/components/domain';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function FeaturedDoctors() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set('.doctor-card-reveal', { clearProps: 'all' });
      return;
    }

    gsap.from('.doctor-card-reveal', {
      x: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: carouselRef.current,
        start: 'top 85%',
        once: true,
      },
      onComplete: () => {
        gsap.set('.doctor-card-reveal', { clearProps: 'transform' });
      },
    });
  }, [prefersReducedMotion]);

  const scroll = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = 304; // 288 card width + 16 gap
      carousel.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-white text-viruj-neutral-950 overflow-hidden" id="doctors">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="max-w-xl text-left">
          <h2 className="text-3xl md:text-4xl font-light text-viruj-neutral-950 tracking-tight leading-tight mb-3">
            Highly specialized experts
          </h2>
          <p className="text-viruj-neutral-600 text-base leading-relaxed">
            Top-tier doctors from premier institutions, available at your fingertips.
          </p>
        </div>

        <div className="hidden md:flex gap-3 shrink-0">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-viruj-neutral-200/40 flex items-center justify-center text-viruj-neutral-600 hover:bg-viruj-neutral-50 hover:text-viruj-neutral-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9E72] focus-visible:ring-offset-2"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-viruj-neutral-200/40 flex items-center justify-center text-viruj-neutral-600 hover:bg-viruj-neutral-50 hover:text-viruj-neutral-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9E72] focus-visible:ring-offset-2"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x no-scrollbar scroll-smooth"
        >
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card-reveal snap-start shrink-0">
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
