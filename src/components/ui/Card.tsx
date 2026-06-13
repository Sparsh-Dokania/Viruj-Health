import React from 'react';
import { cn } from '@/lib/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'subtle';
  hover?: boolean;
}

export function Card({
  className,
  variant = 'surface',
  hover = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-300',
        variant === 'surface' && 'bg-white border-[0.5px] border-viruj-neutral-200/40 text-viruj-neutral-950',
        variant === 'subtle' && 'bg-viruj-neutral-50 text-viruj-neutral-950',
        hover && 'hover:border-viruj-teal-500/50 hover:shadow-md cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
