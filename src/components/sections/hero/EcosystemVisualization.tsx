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
        h-[600px]
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
          left-2/3
          -translate-x-1/2
          border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.08)]
          
          w-[300px]

          rounded-3xl
          bg-white/[0.03]
          backdrop-blur-xl
          border

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
          left-[-50px]

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
          top-[230px]
          right-[-40px]

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
          bottom-[50px]
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
          bottom-[10px]
          right-[50px]

          w-[240px]
          opacity-80
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

      {/* MOBILE ECOSYSTEM */}

      <div className="lg:hidden mt-16">
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full scale-150" />
            <div className="relative scale-[0.9]">
              <VirujCore />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-4 h-4 text-violet-300" />
              <span className="text-sm font-medium text-white">AI Insight</span>
            </div>

            <p className="text-xs text-white/55 leading-relaxed">
              Adaptive health guidance
            </p>
          </div>

          <div className="rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-medium text-white">
                Diagnostics
              </span>
            </div>

            <p className="text-xs text-white/55 leading-relaxed">
              Cardiac trends monitored
            </p>
          </div>

          <div className="rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <HeartPulse className="w-4 h-4 text-rose-300" />
              <span className="text-sm font-medium text-white">Timeline</span>
            </div>

            <p className="text-xs text-white/55 leading-relaxed">
              Connected care journey
            </p>
          </div>

          <div className="rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-medium text-white">Records</span>
            </div>

            <p className="text-xs text-white/55 leading-relaxed">
              Instant record access
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />

            <div>
              <p className="text-sm font-medium text-white">Protected Care</p>

              <p className="text-xs text-white/55">
                End-to-end encrypted health records
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-white">50k+</p>
            <p className="text-xs text-white/50">Patients</p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-white">800+</p>
            <p className="text-xs text-white/50">Doctors</p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-white">200k+</p>
            <p className="text-xs text-white/50">AI Consults</p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-white">NABH</p>
            <p className="text-xs text-white/50">Verified</p>
          </div>
        </div>
      </div>
    </>
  );
}
