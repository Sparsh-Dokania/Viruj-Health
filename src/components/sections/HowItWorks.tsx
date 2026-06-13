'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from '@/lib/gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { UserPlus, MessageSquare, Video } from 'lucide-react';

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set('.step-card', { clearProps: 'all' });
      return;
    }

    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 75%',
          scrub: 1,
        },
      });
    }

    ScrollTrigger.batch('.step-card', {
      onEnter: (batch) =>
        gsap.from(batch, {
          y: 24,
          opacity: 0,
          stagger: 0.15,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
        }),
      once: true,
    });
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-24 bg-white text-viruj-neutral-950 relative overflow-hidden"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-6 w-full text-center relative">
        <h2 className="text-3xl md:text-4xl font-light text-viruj-neutral-950 tracking-tight leading-tight mb-16">
          Seamless healthcare in 3 steps
        </h2>

        {/* SVG Connecting Line (visible on desktop) */}
        <div className="hidden md:block absolute top-[180px] left-[15%] right-[15%] h-[2px] z-0">
          <svg className="w-full h-4" viewBox="0 0 800 10" fill="none" preserveAspectRatio="none">
            <path
              ref={pathRef}
              d="M 0 5 H 800"
              stroke="#D4DCE8"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {/* Step 1 */}
          <div className="step-card bg-white p-6 text-center flex flex-col items-center">
            <div className="relative inline-block mb-6">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-viruj-neutral-100 select-none pointer-events-none z-0">
                01
              </span>
              <div className="w-16 h-16 bg-viruj-teal-500 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg shadow-viruj-teal-500/20">
                <UserPlus className="w-6 h-6" />
              </div>
            </div>
            <h4 className="font-bold text-lg text-viruj-neutral-950 mb-2">Create Profile</h4>
            <p className="text-sm text-viruj-neutral-600 leading-relaxed max-w-xs">
              Sign up and securely link your medical history and lifestyle data.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card bg-white p-6 text-center flex flex-col items-center">
            <div className="relative inline-block mb-6">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-viruj-neutral-100 select-none pointer-events-none z-0">
                02
              </span>
              <div className="w-16 h-16 bg-viruj-teal-500 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg shadow-viruj-teal-500/20">
                <MessageSquare className="w-6 h-6" />
              </div>
            </div>
            <h4 className="font-bold text-lg text-viruj-neutral-950 mb-2">AI Consult</h4>
            <p className="text-sm text-viruj-neutral-600 leading-relaxed max-w-xs">
              Chat with Viruj AI to triage symptoms or understand health trends.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card bg-white p-6 text-center flex flex-col items-center">
            <div className="relative inline-block mb-6">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-viruj-neutral-100 select-none pointer-events-none z-0">
                03
              </span>
              <div className="w-16 h-16 bg-viruj-teal-500 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg shadow-viruj-teal-500/20">
                <Video className="w-6 h-6" />
              </div>
            </div>
            <h4 className="font-bold text-lg text-viruj-neutral-950 mb-2">Expert Care</h4>
            <p className="text-sm text-viruj-neutral-600 leading-relaxed max-w-xs">
              Connect with top-rated specialists for a deep dive into your care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
