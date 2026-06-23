"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button, SplitText } from "@/components/ui";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { TopologyGrid } from "./hero/TopologyGrid";
import { AmbientBackground } from "./hero/AmbientBackground";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(".split-word", { clearProps: "all" });
      return;
    }

    gsap.from(".split-word", {
      y: 20,
      opacity: 0,
      stagger: 0.07,
      duration: 0.6,
      delay: 0.2,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(".split-word", { clearProps: "transform" });
      },
    });

    gsap.from([".hero-eyebrow", ".hero-desc", ".hero-ctas", ".hero-stats"], {
      opacity: 0,
      y: 15,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.4,
      ease: "power2.out",
      onComplete: () => {
        gsap.set([".hero-eyebrow", ".hero-desc", ".hero-ctas", ".hero-stats"], {
          clearProps: "transform",
        });
      },
    });

    if (phoneRef.current) {
      gsap.to(phoneRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
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
      <AmbientBackground />
      <TopologyGrid />
      <div className="max-w-[1400px] mx-auto px-6 w-full gap-12 items-center justify-center relative z-10 py-12 lg:py-0">
        <div className="space-y-6 text-center items-center justify-center flex flex-col">
          <div className="hero-eyebrow inline-flex">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-viruj-violet-50/10 text-viruj-violet-200 border border-viruj-violet-200/20 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-current text-viruj-violet-200" />
              AI-powered healthcare
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold pb-2 text-white leading-tight tracking-tight max-w-xl">
            <SplitText text="Care that understands you" />
          </h1>

          <p className="hero-desc text-base sm:text-lg text-viruj-neutral-200/60 max-w-lg leading-relaxed">
            Viruj combines precision diagnostics with advanced medical
            intelligence to provide a healthcare experience that is as unique as
            your DNA.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="#ai" passHref legacyBehavior>
              <Button
                variant="primary"
                size="lg"
                rightIcon={
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                }
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
        </div>
      </div>
    </section>
  );
}
