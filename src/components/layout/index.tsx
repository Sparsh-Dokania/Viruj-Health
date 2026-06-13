import React from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  clean?: boolean;
}

export function Container({ className, clean = false, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        !clean && 'max-w-7xl mx-auto px-6 w-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  dark?: boolean;
}

export function Section({ className, dark = false, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'py-20 md:py-24',
        dark ? 'bg-viruj-navy-950 text-white' : 'bg-white text-viruj-neutral-950',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6;
}

export function Grid({ className, cols = 3, children, ...props }: GridProps) {
  const colStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <div
      className={cn(
        'grid gap-6',
        colStyles[cols],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
