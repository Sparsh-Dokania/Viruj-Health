"use client";

import { Brain } from "lucide-react";

export function VirujCore() {
  return (
    <div className="relative z-20">
      <div
        className="
        absolute
        inset-0
        scale-[1.8]
        rounded-full
        bg-cyan-400/10
        blur-3xl
      "
      />

      <div
        className="
        relative
        h-24
        w-24

        rounded-full

        bg-gradient-to-br
        from-emerald-400
        via-cyan-400
        to-blue-500

        shadow-[0_0_60px_rgba(34,211,238,0.2)]

        flex
        items-center
        justify-center
      "
      >
        <div
          className="
          absolute
          inset-[6px]

          rounded-full

          bg-[#07111b]

          border
          border-white/[0.08]
        "
        />

        <div className="relative z-10 flex flex-col items-center">
          <Brain className="h-4 w-4 text-cyan-300 mb-1" />

          <span className="text-[10px] tracking-wider font-semibold text-white">
            VIRUJ AI
          </span>
        </div>
      </div>
    </div>
  );
}