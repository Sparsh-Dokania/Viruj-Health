import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'primary',
  size = 'sm',
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-surface-subtle text-foreground border border-border',
    success: 'bg-success/10 text-success border border-success/20',
    warning: 'bg-warning/10 text-warning border border-warning/20',
    error: 'bg-destructive/10 text-destructive border border-destructive/20',
    info: 'bg-info/10 text-info border border-info/20',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs font-medium rounded-md',
    md: 'px-3 py-1.5 text-sm font-medium rounded-lg',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 w-fit',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
};

export interface PillProps extends HTMLAttributes<HTMLDivElement> {
  color?: 'teal' | 'crimson' | 'gray' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
}

export const Pill: React.FC<PillProps> = ({
  className,
  color = 'teal',
  size = 'md',
  ...props
}) => {
  const colorStyles = {
    teal: 'bg-primary/10 text-primary',
    crimson: 'bg-secondary-brand/10 text-secondary-brand',
    gray: 'bg-surface-subtle text-muted-foreground',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs font-medium',
    md: 'px-3 py-1.5 text-sm font-medium',
    lg: 'px-4 py-2 text-base font-medium',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full',
        colorStyles[color],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
};
