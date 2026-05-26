import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'ghost';
  fullWidth?: boolean;
  error?: string;
  label?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'default',
      fullWidth = false,
      error,
      label,
      helperText,
      id,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default:
        'border border-[#D1D5DB] bg-[#FFFFFF] text-[#0F172A] placeholder-[#9CA3AF] focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10',
      ghost:
        'border-0 border-b border-[#E5E7EB] bg-transparent text-[#0F172A] placeholder-[#9CA3AF] focus:border-b-[#0F766E] focus:ring-0',
    };

    return (
      <div className={cn('flex flex-col gap-2', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[#0F172A]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'px-4 py-2.5 text-base rounded-md transition-all duration-200 ease-in-out focus-visible:outline-none',
            variantStyles[variant],
            error && 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/10',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        />
        {error && <span className="text-sm text-[#DC2626]">{error}</span>}
        {helperText && !error && (
          <span className="text-sm text-[#475569]">{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
