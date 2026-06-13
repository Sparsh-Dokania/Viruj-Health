'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useId } from 'react';
import { faqItems } from '@/data/faq';
import { gsap } from '@/lib/gsap';
import { ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FAQAccordionItemProps {
  question: string;
  answer: string;
}

function FAQAccordionItem({ question, answer }: FAQAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = useId();
  const answerRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      gsap.set(answerRef.current, { height: 0, overflow: 'hidden' });
      return;
    }

    if (isOpen) {
      gsap.to(answerRef.current, {
        height: 'auto',
        duration: 0.28,
        ease: 'power2.inOut',
      });
      gsap.to(chevronRef.current, {
        rotation: 90,
        duration: 0.2,
        ease: 'power2.out',
      });
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        duration: 0.28,
        ease: 'power2.inOut',
      });
      gsap.to(chevronRef.current, {
        rotation: 0,
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  }, [isOpen]);

  return (
    <div className="faq-item border border-viruj-neutral-200/20 rounded-xl bg-white overflow-hidden transition-all duration-200 hover:border-viruj-teal-500/30 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left hover:bg-viruj-neutral-50 transition-colors font-bold text-viruj-neutral-950 focus-visible:outline-none"
        aria-expanded={isOpen}
        aria-controls={answerId}
        role="button"
      >
        <span>{question}</span>
        <span ref={chevronRef} className="inline-block transition-transform duration-200">
          <ChevronRight className="w-5 h-5 text-viruj-neutral-600" />
        </span>
      </button>
      <div id={answerId} ref={answerRef} style={{ height: 0, overflow: 'hidden' }}>
        <div className="p-6 pt-0 text-sm text-viruj-neutral-600 border-t border-viruj-neutral-50 leading-relaxed bg-white select-text">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-20 md:py-24 bg-viruj-neutral-50 text-viruj-neutral-950">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light text-viruj-neutral-950 tracking-tight leading-tight text-center mb-12">
            Common questions
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <ScrollReveal key={idx} duration={0.3} y={15}>
              <FAQAccordionItem question={item.question} answer={item.answer} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
