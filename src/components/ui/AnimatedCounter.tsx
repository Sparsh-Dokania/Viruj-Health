'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    const anim = gsap.from(el, {
      textContent: '0',
      duration: 1.8,
      ease: 'power2.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        if (el) {
          const currentVal = Math.round(parseFloat(el.textContent || '0'));
          el.textContent = `${prefix}${currentVal}${suffix}`;
        }
      },
      onComplete: () => {
        if (el) {
          el.textContent = `${prefix}${value}${suffix}`;
        }
      },
    });

    return () => {
      anim.kill();
    };
  }, [value, suffix, prefix, prefersReducedMotion]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
