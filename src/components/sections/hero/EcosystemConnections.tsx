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
      viewBox="0 0 700 560"
      fill="none"
    >
      <defs>
        <linearGradient
          id="virujGradient"
          x1="0"
          y1="0"
          x2="700"
          y2="560"
        >
          <stop
            offset="0%"
            stopColor="#34D399"
            stopOpacity="0.22"
          />

          <stop
            offset="100%"
            stopColor="#60A5FA"
            stopOpacity="0.18"
          />
        </linearGradient>
      </defs>

      <path
        d="M350 120 C350 150 350 180 350 210"
        stroke="url(#virujGradient)"
        strokeWidth="1.5"
      />

      <path
        d="M350 260 C280 260 220 240 170 210"
        stroke="url(#virujGradient)"
        strokeWidth="1.5"
      />

      <path
        d="M350 260 C420 260 480 240 530 210"
        stroke="url(#virujGradient)"
        strokeWidth="1.5"
      />

      <path
        d="M350 300 C310 360 260 420 220 500"
        stroke="url(#virujGradient)"
        strokeWidth="1.5"
      />

      <path
        d="M350 300 C390 360 440 420 480 500"
        stroke="url(#virujGradient)"
        strokeWidth="1.5"
      />
    </svg>
  );
}