"use client";

export function AINode() {
  return (
    <div
      className="
      absolute
      left-1/2
      top-[0px]
      -translate-x-1/2
      z-10
    "
    >
      <div
        className="
  relative
  h-3
  w-3
  rounded-full
  bg-gradient-to-br
  from-emerald-400
  to-cyan-400
  shadow-[0_0_20px_rgba(34,211,238,0.4)]
"
      >
        <div
          className="
          absolute
          inset-0
          rounded-full
          animate-[pulse_1.5s_ease-in-out_infinite]
          bg-cyan-400/20
        "
        />
      </div>
    </div>
  );
}
