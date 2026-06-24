"use client";

import {
  Activity,
  Brain,
  FileText,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import { EcosystemConnections } from "./EcosystemConnections";
import { VirujCore } from "./VirujCore";

export function EcosystemVisualization() {
  return (
    <>
      {/* ========================= */}
      {/* Desktop */}
      {/* ========================= */}

      <div
        className="
        hidden lg:block
        relative
        h-[560px]
        w-full
        max-w-[700px]
        mx-auto
      "
      >
        <EcosystemConnections />

        {/* AI Insight */}
        <div
          className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          
          w-[300px]

          rounded-3xl
          bg-white/[0.03]
          backdrop-blur-xl
          border border-white/[0.08]

          p-5
        "
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-violet-500/10">
              <Brain className="w-5 h-5 text-violet-300" />
            </div>

            <div>
              <p className="text-white font-medium">AI Insight</p>

              <p className="text-xs text-white/50">Adaptive care guidance</p>
            </div>
          </div>

          <p className="text-sm text-white/70 leading-relaxed">
            Blood pressure trend stable over the last 14 days. Follow-up
            consultation recommended next week.
          </p>
        </div>

        {/* Diagnostics */}
        <div
          className="
          absolute
          top-[180px]
          left-0

          w-[250px]

          rounded-3xl
          bg-white/[0.03]
          backdrop-blur-xl
          border border-white/[0.08]

          p-5
        "
        >
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-5 h-5 text-emerald-300" />

            <span className="text-white font-medium">Diagnostics</span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-white/50 mb-1">
                <span>Cardiac Health</span>
                <span>82%</span>
              </div>

              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[82%] rounded-full bg-emerald-400" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-white/50 mb-1">
                <span>Recovery Trend</span>
                <span>76%</span>
              </div>

              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[76%] rounded-full bg-cyan-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className="
          absolute
          top-[180px]
          right-0

          w-[250px]

          rounded-3xl
          bg-white/[0.03]
          backdrop-blur-xl
          border border-white/[0.08]

          p-5
        "
        >
          <div className="flex items-center gap-3 mb-5">
            <HeartPulse className="w-5 h-5 text-rose-300" />

            <span className="text-white font-medium">Care Timeline</span>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5" />
              <p className="text-sm text-white/70">Consultation completed</p>
            </div>

            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
              <p className="text-sm text-white/70">Diagnostics reviewed</p>
            </div>

            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5" />
              <p className="text-sm text-white/70">AI follow-up generated</p>
            </div>
          </div>
        </div>

        {/* Core */}
        <div
          className="
          absolute
          left-1/2
          top-[220px]
          -translate-x-1/2
        "
        >
          <VirujCore />
        </div>

        {/* Records */}
        <div
          className="
          absolute
          bottom-0
          left-[50px]

          w-[240px]

          rounded-3xl
          bg-white/[0.03]
          backdrop-blur-xl
          border border-white/[0.08]

          p-5
        "
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-cyan-300" />

            <div>
              <p className="text-white font-medium">Medical Records</p>

              <p className="text-xs text-white/50">Securely organized</p>
            </div>
          </div>
        </div>

        {/* Security */}
        <div
          className="
          absolute
          bottom-0
          right-[50px]

          w-[240px]

          rounded-3xl
          bg-white/[0.03]
          backdrop-blur-xl
          border border-white/[0.08]

          p-5
        "
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />

            <div>
              <p className="text-white font-medium">Protected Care</p>

              <p className="text-xs text-white/50">
                End-to-end encrypted records
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* Mobile */}
      {/* ========================= */}

      <div
        className="
        lg:hidden
        mt-10
        max-w-md
        mx-auto
        space-y-4
      "
      >
        <div className="flex justify-center mb-6">
          <VirujCore />
        </div>

        {[
          {
            icon: <Brain className="w-5 h-5 text-violet-300" />,
            title: "AI Insight",
            text: "Adaptive care guidance and health recommendations.",
          },
          {
            icon: <Activity className="w-5 h-5 text-emerald-300" />,
            title: "Diagnostics",
            text: "Cardiac health and recovery trends continuously tracked.",
          },
          {
            icon: <HeartPulse className="w-5 h-5 text-rose-300" />,
            title: "Care Timeline",
            text: "Consultations, diagnostics and AI follow-ups connected.",
          },
          {
            icon: <FileText className="w-5 h-5 text-cyan-300" />,
            title: "Medical Records",
            text: "Securely organized and instantly accessible.",
          },
          {
            icon: <ShieldCheck className="w-5 h-5 text-emerald-300" />,
            title: "Protected Care",
            text: "End-to-end encrypted health records.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
            rounded-3xl
            bg-white/[0.03]
            backdrop-blur-xl
            border border-white/[0.08]
            p-5
          "
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}

              <span className="text-white font-medium">{item.title}</span>
            </div>

            <p className="text-sm text-white/70">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
