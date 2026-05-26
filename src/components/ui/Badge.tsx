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
    primary: 'bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20',
    secondary: 'bg-[#E5E7EB] text-[#1E293B] border border-[#D1D5DB]',
    success: 'bg-[#047857]/10 text-[#047857] border border-[#047857]/20',
    warning: 'bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20',
    error: 'bg-[#DC2626]/10 text-[#DC2626] border border-[#DC2626]/20',
    info: 'bg-[#0369A1]/10 text-[#0369A1] border border-[#0369A1]/20',
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
    teal: 'bg-[#0F766E]/10 text-[#0F766E]',
    crimson: 'bg-[#991B1B]/10 text-[#991B1B]',
    gray: 'bg-[#F3F4F6] text-[#475569]',
    success: 'bg-[#047857]/10 text-[#047857]',
    warning: 'bg-[#D97706]/10 text-[#D97706]',
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
