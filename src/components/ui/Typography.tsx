import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

// Typography Components

export const H1: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => (
  <h1
    className={cn(
      'text-5xl font-bold leading-tight text-foreground',
      className
    )}
    {...props}
  />
);

export const H2: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => (
  <h2
    className={cn(
      'text-4xl font-bold leading-tight text-foreground',
      className
    )}
    {...props}
  />
);

export const H3: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => (
  <h3
    className={cn(
      'text-3xl font-semibold leading-tight text-foreground',
      className
    )}
    {...props}
  />
);

export const H4: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => (
  <h4
    className={cn(
      'text-2xl font-semibold leading-tight text-foreground',
      className
    )}
    {...props}
  />
);

export const Body: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p
    className={cn('text-base leading-relaxed text-foreground', className)}
    {...props}
  />
);

export const BodySmall: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p
    className={cn('text-sm leading-relaxed text-muted-foreground', className)}
    {...props}
  />
);

export const Label: React.FC<HTMLAttributes<HTMLLabelElement>> = ({
  className,
  ...props
}) => (
  <label
    className={cn(
      'text-sm font-medium leading-none text-foreground',
      className
    )}
    {...props}
  />
);

export const Caption: React.FC<HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => (
  <span
    className={cn('text-xs leading-relaxed text-muted-foreground', className)}
    {...props}
  />
);

export const Code: React.FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => (
  <code
    className={cn(
      'px-2 py-1 bg-surface-subtle text-primary rounded text-sm font-mono',
      className
    )}
    {...props}
  />
);

export const Muted: React.FC<HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => (
  <span className={cn('text-muted-foreground', className)} {...props} />
);
