import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'light' | 'medium' | 'heavy';
}

export const Divider: React.FC<DividerProps> = ({
  className,
  orientation = 'horizontal',
  variant = 'light',
  ...props
}) => {
  const variantStyles = {
    light: 'border-[#E5E7EB]',
    medium: 'border-[#D1D5DB]',
    heavy: 'border-[#9CA3AF]',
  };

  const orientationStyles = {
    horizontal: 'w-full h-px',
    vertical: 'h-full w-px',
  };

  return (
    <div
      className={cn(
        'border',
        variantStyles[variant],
        orientationStyles[orientation],
        className
      )}
      {...props}
    />
  );
};

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: 'sm' | 'md' | 'lg';
}

export const Separator: React.FC<SeparatorProps> = ({
  className,
  spacing = 'md',
  ...props
}) => {
  const spacingStyles = {
    sm: 'my-3',
    md: 'my-6',
    lg: 'my-8',
  };

  return (
    <div
      className={cn(
        'w-full h-px bg-[#E5E7EB]',
        spacingStyles[spacing],
        className
      )}
      {...props}
    />
  );
};
