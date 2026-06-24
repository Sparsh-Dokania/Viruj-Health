"use client";

export function EcosystemConnections() {
  return (
    <svg
      className="
        absolute
        inset-0
        w-full
        h-full
        pointer-events-none
      "
      viewBox="0 0 800 600"
      fill="none"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="800" y2="600">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.05" />

          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      <path
        d="M390 120 C320 170 280 210 240 260"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
      />

      <path
        d="M410 120 C520 170 570 210 610 260"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
      />

      <path
        d="M240 260 C290 360 340 420 370 470"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
      />

      <path
        d="M610 260 C540 360 470 420 430 470"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
      />

      <path
        d="M400 470 C400 510 400 530 400 560"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
