'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AIMessageBubble } from '@/components/domain';
import { AIMessage } from '@/types';
import { Activity, FileText, UserSearch, Sparkles } from 'lucide-react';

const mockMessages: AIMessage[] = [
  {
    role: 'user',
    content: 'My glucose result is 108 mg/dL. What does this mean?',
  },
  {
    role: 'assistant',
    content: 'A fasting blood glucose level of 108 mg/dL is slightly elevated. While the normal range is typically 70-99 mg/dL, 108 mg/dL falls into the pre-diabetic range (100-125 mg/dL).',
    confidence: 'high',
    actions: [{ label: 'Find a specialist', href: '#doctors' }],
    disclaimer: true,
  },
];

export function AIShowcase() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set('.chat-bubble-reveal', { clearProps: 'all' });
      return;
    }

    gsap.from('.chat-bubble-reveal', {
      y: 8,
      opacity: 0,
      stagger: 0.4,
      duration: 0.25,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: chatContainerRef.current,
        start: 'top 80%',
        once: true,
      },
      onComplete: () => {
        gsap.set('.chat-bubble-reveal', { clearProps: 'transform' });
      },
    });

    gsap.from('.capability-card', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.capability-container',
        start: 'top 85%',
        once: true,
      },
      onComplete: () => {
        gsap.set('.capability-card', { clearProps: 'transform' });
      },
    });
  }, [prefersReducedMotion]);

  return (
    <section className="bg-viruj-neutral-50 py-20 md:py-24 text-viruj-neutral-950" id="ai">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-viruj-violet-50/80 text-viruj-violet-700 border border-viruj-violet-200/30 text-xs font-bold uppercase tracking-wider mb-3 select-none">
            <Sparkles className="w-3.5 h-3.5 fill-current text-viruj-violet-700" />
            Viruj AI
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-viruj-neutral-950 tracking-tight leading-tight mb-4">
            Your health, explained in plain language
          </h2>
          <p className="text-viruj-neutral-600 text-base leading-relaxed">
            Instant analysis of medical reports and symptom tracking powered by clinical-grade intelligence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chat Mockup */}
          <div
            ref={chatContainerRef}
            className="bg-viruj-navy-950 rounded-2xl p-6 border border-viruj-neutral-200/20 shadow-xl overflow-hidden min-h-[350px] flex flex-col justify-center"
          >
            <div className="space-y-4">
              {mockMessages.map((msg, idx) => (
                <div key={idx} className="chat-bubble-reveal">
                  <AIMessageBubble message={msg} />
                </div>
              ))}
            </div>
          </div>

          {/* Capability Cards */}
          <div className="capability-container grid gap-4">
            <div className="capability-card p-6 bg-white border border-viruj-neutral-200/40 rounded-2xl hover:border-viruj-teal-500/40 transition-all duration-300 group flex gap-4 items-start text-left">
              <div className="w-12 h-12 bg-viruj-teal-50/50 rounded-xl flex items-center justify-center text-viruj-teal-500 shrink-0 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-viruj-neutral-950 mb-1">Symptom triage</h3>
                <p className="text-sm text-viruj-neutral-600 leading-relaxed">
                  Quickly assess symptoms to determine if you need immediate care or home monitoring.
                </p>
              </div>
            </div>

            <div className="capability-card p-6 bg-white border border-viruj-neutral-200/40 rounded-2xl hover:border-viruj-teal-500/40 transition-all duration-300 group flex gap-4 items-start text-left">
              <div className="w-12 h-12 bg-viruj-violet-50/50 rounded-xl flex items-center justify-center text-viruj-violet-500 shrink-0 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-viruj-neutral-950 mb-1">Report explanation</h3>
                <p className="text-sm text-viruj-neutral-600 leading-relaxed">
                  Upload any lab result and get a simple, easy-to-understand breakdown of what the numbers mean.
                </p>
              </div>
            </div>

            <div className="capability-card p-6 bg-white border border-viruj-neutral-200/40 rounded-2xl hover:border-viruj-teal-500/40 transition-all duration-300 group flex gap-4 items-start text-left">
              <div className="w-12 h-12 bg-viruj-teal-50/50 rounded-xl flex items-center justify-center text-viruj-teal-500 shrink-0 group-hover:scale-110 transition-transform">
                <UserSearch className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-viruj-neutral-950 mb-1">Doctor matching</h3>
                <p className="text-sm text-viruj-neutral-600 leading-relaxed">
                  Intelligent matching based on your history, symptoms, and doctor specializations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
