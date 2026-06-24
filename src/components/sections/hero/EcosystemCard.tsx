"use client";

import { cn } from "@/lib/cn";

interface EcosystemCardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function EcosystemCard({
  title,
  description,
  icon,
  className,
  children,
}: EcosystemCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        bg-white/[0.04]
        backdrop-blur-xl
        border
        border-white/10

        p-5

        shadow-[0_0_40px_rgba(255,255,255,0.02)]

        transition-all
        duration-500

        hover:border-white/20
        hover:bg-white/[0.06]
      `,
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="
          h-10
          w-10
          rounded-xl
          bg-white/5
          flex
          items-center
          justify-center
        "
        >
          {icon}
        </div>

        <div>
          <p className="text-white font-medium">
            {title}
          </p>

          {description && (
            <p className="text-xs text-white/50">
              {description}
            </p>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}