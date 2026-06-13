import React from 'react';
import { cn } from '@/lib/cn';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
}

export function Chip({ className, active = false, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border transition-all duration-150 cursor-pointer',
        active
          ? 'bg-viruj-teal-500 border-viruj-teal-500 text-white'
          : 'bg-transparent border-white/20 text-white hover:bg-white/5',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
