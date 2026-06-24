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
import { HealthcareGlow } from "./hero/HealthcareGlow";

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

    gsap.from(
      [".hero-eyebrow", ".hero-desc", ".hero-ctas", ".trust-pill"],
      {
        opacity: 0,
        y: 15,
        stagger: 0.08,
        duration: 0.6,
        delay: 0.35,
        ease: "power2.out",
      }
    );
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="
        relative
        overflow-hidden
        bg-viruj-navy-950
        pt-24
      "
    >
      <AmbientBackground />
      <HealthcareGlow />
      <TopologyGrid />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1320px]
          px-6
        "
      >
        <div
          className="
            flex
            flex-col
            gap-12

            lg:grid
            lg:grid-cols-[1fr_620px]
            lg:gap-8
            lg:items-center
            lg:min-h-[85vh]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              max-w-[650px]

              flex
              flex-col

              items-center
              text-center

              lg:items-start
              lg:text-left

              space-y-8
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
                lg:text-[4.5rem]

                font-extrabold
                tracking-tight
                leading-[0.95]

                text-white

                max-w-[600px]
              "
            >
              <SplitText text="Healthcare, intelligently connected." />
            </h1>

            {/* Description */}
            <p
              className="
                hero-desc

                max-w-[22rem]
                sm:max-w-[32rem]
                lg:max-w-[38rem]

                text-base
                sm:text-lg

                leading-relaxed

                text-viruj-neutral-200/65
              "
            >
              One intelligent system for appointments, diagnostics,
              medical records, and AI-assisted care — designed around
              your entire health journey.
            </p>

            {/* CTA */}
            <div
              className="
                hero-ctas

                flex
                flex-col
                gap-3

                w-full

                sm:flex-row
                sm:w-auto
              "
            >
              <Link
                href="#ai"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="group font-semibold w-full sm:w-auto"
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

              <Link
                href="#doctors"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="font-semibold w-full sm:w-auto"
                >
                  Find a Doctor
                </Button>
              </Link>
            </div>

            {/* Trust Pills */}
            <div
              className="
                hidden
                sm:flex

                flex-wrap
                justify-center
                lg:justify-start

                gap-2
                pt-2
              "
            >
              <span
                className="
                  trust-pill

                  px-3
                  py-1.5

                  rounded-full

                  border
                  border-white/10

                  bg-white/5
                  backdrop-blur-md

                  text-xs
                  text-white/60
                "
              >
                ✓ Doctor Verified
              </span>

              <span
                className="
                  trust-pill

                  px-3
                  py-1.5

                  rounded-full

                  border
                  border-white/10

                  bg-white/5
                  backdrop-blur-md

                  text-xs
                  text-white/60
                "
              >
                ✓ Unified Records
              </span>

              <span
                className="
                  trust-pill

                  px-3
                  py-1.5

                  rounded-full

                  border
                  border-white/10

                  bg-white/5
                  backdrop-blur-md

                  text-xs
                  text-white/60
                "
              >
                ✓ AI Assisted Care
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <EcosystemVisualization />
        </div>
      </div>
    </section>
  );
}