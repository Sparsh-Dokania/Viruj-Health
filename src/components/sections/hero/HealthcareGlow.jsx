"use client";

export function HealthcareGlow() {
  return (
    <>
      {/* Main Ecosystem Glow */}

      <div
        className="
        absolute
        right-[10%]
        top-1/2
        -translate-y-1/2

        h-[700px]
        w-[700px]

        rounded-full

        bg-emerald-400/10

        blur-[180px]

        pointer-events-none
      "
      />

      {/* Secondary Cyan Layer */}

      <div
        className="
        absolute
        right-[15%]
        top-[40%]

        h-[500px]
        w-[500px]

        rounded-full

        bg-cyan-400/8

        blur-[160px]

        pointer-events-none
      "
      />
    </>
  );
}