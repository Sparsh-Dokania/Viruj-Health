'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  start?: string;
}

export function ScrollReveal({
  children,
  className,
  y = 24,
  duration = 0.3,
  start = 'top 85%',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      gsap.set(el, { clearProps: 'all' });
      return;
    }

    const anim = gsap.from(el, {
      y,
      opacity: 0,
      duration,
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
      onComplete: () => {
        gsap.set(el, { clearProps: 'transform' });
      },
    });

    return () => {
      anim.kill();
    };
  }, [y, duration, start, prefersReducedMotion]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
