import React from 'react';
import { cn } from '@/lib/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'normal' | 'borderline' | 'critical' | 'info' | 'ai' | 'ghost';
}

export function Badge({
  className,
  variant = 'normal',
  children,
  ...props
}: BadgeProps) {
  const dotColorClass = {
    normal: 'bg-viruj-teal-500',
    borderline: 'bg-amber-500',
    critical: 'bg-red-500',
    info: 'bg-blue-500',
    ai: 'bg-viruj-violet-500',
    ghost: 'bg-viruj-neutral-600',
  };

  const badgeStyles = {
    normal: 'bg-viruj-teal-50/10 text-viruj-teal-200 border border-viruj-teal-500/20',
    borderline: 'bg-amber-500/10 text-amber-200 border border-amber-500/20',
    critical: 'bg-red-500/10 text-red-200 border border-red-500/20',
    info: 'bg-blue-500/10 text-blue-200 border border-blue-500/20',
    ai: 'bg-viruj-violet-50/10 text-viruj-violet-200 border border-viruj-violet-500/20',
    ghost: 'bg-viruj-neutral-50/5 text-viruj-neutral-200 border border-viruj-neutral-600/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
        badgeStyles[variant],
        className
      )}
      {...props}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full inline-block shrink-0', dotColorClass[variant])} />
      {children}
    </span>
  );
}
