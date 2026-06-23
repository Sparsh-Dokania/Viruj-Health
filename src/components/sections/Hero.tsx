"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { useGSAP } from "@/hooks/useGSAP";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";

import { Button, SplitText } from "@/components/ui";

import { AmbientBackground } from "./hero/AmbientBackground";
import { TopologyGrid } from "./hero/TopologyGrid";
import { EcosystemVisualization } from "./hero/EcosystemVisualization";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(".split-word", { clearProps: "all" });
      return;
    }

    gsap.from(".split-word", {
      y: 20,
      opacity: 0,
      stagger: 0.06,
      duration: 0.6,
      delay: 0.15,
      ease: "power2.out",
    });

    gsap.from([".hero-eyebrow", ".hero-desc", ".hero-ctas"], {
      opacity: 0,
      y: 15,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.35,
      ease: "power2.out",
    });
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-viruj-navy-950
        pt-24
      "
    >
      {/* Atmosphere */}
      <AmbientBackground />
      <TopologyGrid />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-6
        "
      >
        <div
          className="
            flex
            flex-col
            gap-16
            min-h-[85vh]
            lg:grid lg:grid-cols-[1fr_750px]
            lg:gap-24
            lg:items-center
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              max-w-2xl
              space-y-8
              flex
              flex-col
              items-start
            "
          >
            {/* Eyebrow */}
            <div className="hero-eyebrow">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-viruj-violet-200/15
                  bg-viruj-violet-50/5
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-viruj-violet-200
                "
              >
                <Sparkles className="h-3.5 w-3.5 fill-current" />
                Intelligent Care Platform
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                sm:text-6xl
                lg:text-[5rem]
                font-extrabold
                tracking-tight
                leading-[0.95]
                text-white
                max-w-3xl
              "
            >
              <SplitText text="Healthcare, intelligently connected." />
            </h1>

            {/* Description */}
            <p
              className="
                hero-desc
                max-w-xl
                text-lg
                leading-relaxed
                text-viruj-neutral-200/65
              "
            >
              One intelligent system for appointments, diagnostics, medical
              records, and AI-assisted care — designed around your entire health
              journey.
            </p>

            {/* CTAs */}
            <div
              className="
                hero-ctas
                flex
                flex-col
                gap-4
                sm:flex-row
              "
            >
              <Link href="#ai">
                <Button
                  variant="primary"
                  size="lg"
                  className="group font-semibold"
                  rightIcon={
                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  }
                >
                  Try AI Assistant
                </Button>
              </Link>

              <Link href="#doctors">
                <Button variant="secondary" size="lg" className="font-semibold">
                  Find a Doctor
                </Button>
              </Link>
            </div>

            {/* Optional Trust Copy */}
            <p
              className="
                text-sm
                text-white/40
                pt-2
              "
            >
              Trusted healthcare experiences powered by diagnostics, medical
              expertise, and AI-assisted guidance.
            </p>
          </div>

          {/* RIGHT ECOSYSTEM */}
          <EcosystemVisualization />
        </div>
      </div>
    </section>
  );
}
