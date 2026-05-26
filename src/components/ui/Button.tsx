import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'ai';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
      sm: 'px-3 py-2 text-sm rounded-md gap-2',
      md: 'px-4 py-2.5 text-base rounded-md gap-2',
      lg: 'px-6 py-3 text-base rounded-lg gap-2',
    };

    const variantStyles = {
      primary:
        'bg-[#0F766E] text-white hover:bg-[#115E59] active:bg-[#0D5F59] focus-visible:ring-[#0F766E]/30',
      secondary:
        'bg-[#F3F6F5] text-[#0F172A] hover:bg-[#E5EEEC] active:bg-[#D9E8E4] focus-visible:ring-[#0F766E]/20',
      tertiary:
        'bg-transparent text-[#0F766E] border border-[#D1D5DB] hover:bg-[#F7FAF9] active:bg-[#EEF4F2] focus-visible:ring-[#0F766E]/30',
      ghost:
        'bg-transparent text-[#0F766E] hover:bg-[#F7FAF9] active:bg-[#F3F6F5] focus-visible:ring-[#0F766E]/30',
      danger:
        'bg-[#DC2626] text-white hover:bg-[#B91C1C] active:bg-[#7F1D1D] focus-visible:ring-[#DC2626]/30',
      ai: 'bg-[#991B1B] text-white hover:bg-[#7F1D1D] active:bg-[#65161B] focus-visible:ring-[#991B1B]/30',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="animate-pulse-calm">
            <svg
              className="w-4 h-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
