"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  FileText,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const floatingAnimation = (duration: number) => ({
  y: [0, -12, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

export function EcosystemVisualization() {
  return (
    <div className="relative h-[600px] w-full hidden lg:block">

      {/* AI Insight */}
      <motion.div
        animate={floatingAnimation(14)}
        className="
          absolute
          top-0
          left-24
          w-72
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          p-5
        "
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-violet-500/10">
            <Brain className="w-5 h-5 text-violet-300" />
          </div>
          <div>
            <p className="text-white font-medium">AI Insight</p>
            <p className="text-xs text-white/50">
              Adaptive care guidance
            </p>
          </div>
        </div>

        <p className="text-sm text-white/70 leading-relaxed">
          Blood pressure trend stable over the last 14 days.
          Follow-up consultation recommended next week.
        </p>
      </motion.div>

      {/* Diagnostics */}
      <motion.div
        animate={floatingAnimation(18)}
        className="
          absolute
          top-44
          left-0
          w-64
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          p-5
        "
      >
        <div className="flex items-center gap-3 mb-4">
          <Activity className="w-5 h-5 text-emerald-300" />
          <span className="text-white font-medium">
            Diagnostics
          </span>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs text-white/50 mb-1">
              <span>Cardiac Health</span>
              <span>82%</span>
            </div>

            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[82%] bg-emerald-400 rounded-full" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-white/50 mb-1">
              <span>Recovery Trend</span>
              <span>76%</span>
            </div>

            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[76%] bg-cyan-400 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Health Timeline */}
      <motion.div
        animate={floatingAnimation(16)}
        className="
          absolute
          top-52
          right-10
          w-72
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          p-5
        "
      >
        <div className="flex items-center gap-3 mb-5">
          <HeartPulse className="w-5 h-5 text-rose-300" />
          <span className="text-white font-medium">
            Care Timeline
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5" />
            <p className="text-sm text-white/70">
              Consultation completed
            </p>
          </div>

          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
            <p className="text-sm text-white/70">
              Diagnostics reviewed
            </p>
          </div>

          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5" />
            <p className="text-sm text-white/70">
              AI follow-up generated
            </p>
          </div>
        </div>
      </motion.div>

      {/* Records */}
      <motion.div
        animate={floatingAnimation(20)}
        className="
          absolute
          bottom-8
          left-28
          w-60
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          p-5
        "
      >
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-cyan-300" />
          <div>
            <p className="text-white font-medium">
              Medical Records
            </p>
            <p className="text-xs text-white/50">
              Securely organized
            </p>
          </div>
        </div>
      </motion.div>

      {/* Trust */}
      <motion.div
        animate={floatingAnimation(22)}
        className="
          absolute
          bottom-0
          right-20
          w-64
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          p-5
        "
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-300" />

          <div>
            <p className="text-white font-medium">
              Protected Care
            </p>

            <p className="text-xs text-white/50">
              End-to-end encrypted health records
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}