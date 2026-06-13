'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button, SplitText } from '@/components/ui';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set('.split-word', { clearProps: 'all' });
      return;
    }

    gsap.from('.split-word', {
      y: 20,
      opacity: 0,
      stagger: 0.07,
      duration: 0.6,
      delay: 0.2,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set('.split-word', { clearProps: 'transform' });
      },
    });

    gsap.from(['.hero-eyebrow', '.hero-desc', '.hero-ctas', '.hero-stats'], {
      opacity: 0,
      y: 15,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(['.hero-eyebrow', '.hero-desc', '.hero-ctas', '.hero-stats'], { clearProps: 'transform' });
      },
    });

    if (phoneRef.current) {
      gsap.to(phoneRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen hero-gradient bg-viruj-navy-950 flex flex-col justify-center overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12 lg:py-0">
        <div className="space-y-6 text-left">
          <div className="hero-eyebrow inline-flex">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-viruj-violet-50/10 text-viruj-violet-200 border border-viruj-violet-200/20 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-current text-viruj-violet-200" />
              AI-powered healthcare
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight max-w-xl">
            <SplitText text="Care that understands you" />
          </h1>

          <p className="hero-desc text-base sm:text-lg text-viruj-neutral-200/60 max-w-lg leading-relaxed">
            Viruj combines precision diagnostics with advanced medical intelligence to provide a healthcare experience that is as unique as your DNA.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="#ai" passHref legacyBehavior>
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                className="group font-bold"
              >
                Try AI assistant
              </Button>
            </Link>
            <Link href="#doctors" passHref legacyBehavior>
              <Button variant="secondary" size="lg" className="font-bold">
                Find a doctor
              </Button>
            </Link>
          </div>

          <div className="hero-stats pt-8 flex flex-wrap gap-8 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-white font-bold text-3xl sm:text-4xl">50K+</span>
              <span className="text-white/40 text-xs font-semibold uppercase tracking-wider mt-1">Patients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-3xl sm:text-4xl">800+</span>
              <span className="text-white/40 text-xs font-semibold uppercase tracking-wider mt-1">Doctors</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-3xl sm:text-4xl">4.8★</span>
              <span className="text-white/40 text-xs font-semibold uppercase tracking-wider mt-1">Rating</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center mt-12 lg:mt-0">
          <div ref={phoneRef} className="relative w-full max-w-[320px] transition-transform duration-100">
            <Image
              alt="Viruj Health Mobile App mockup"
              width={640}
              height={960}
              priority
              sizes="(min-width: 1024px) 320px, 80vw"
              className="w-full h-auto drop-shadow-[0_25px_50px_rgba(15,158,114,0.15)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9RTsB13jE_8-AfZTFUApwc1tusw2uWJYvn6K61Yz91hpLT3yLFI0JLGjYvkA6ObiUvbR-o1phwGgC4OQ-_rGueUGaDCFl-xjbMkQa6yRc8nsrYY50J2pl2IHOUOR_Khrzldci_YPnZ1Aht02MMLk76kTjtDy5Mwvk7ETCNihDibi6ZTMnMRix7vx23z8msP1-RxWkWvmbqw2ruqPqWkx-d2OH_GXpyf1kQ7w5FRlbfGInomwJVPdwl7vkYJTM82PhSpZQKIFa_g"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
