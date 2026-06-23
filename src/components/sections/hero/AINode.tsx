"use client";

export function AINode() {
  return (
    <div
      className="
      absolute
      left-1/2
      top-[100px]
      -translate-x-1/2
      z-10
    "
    >
      <div
        className="
        relative
        h-16
        w-16
        rounded-full
        bg-gradient-to-br
        from-emerald-400
        to-cyan-400
      "
      >
        <div
          className="
          absolute
          inset-0
          rounded-full
          animate-ping
          bg-cyan-400/20
        "
        />
      </div>
    </div>
  );
}