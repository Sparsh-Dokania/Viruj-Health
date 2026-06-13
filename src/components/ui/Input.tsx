import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/cn';

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
        'border border-viruj-neutral-200/40 bg-white text-viruj-neutral-950 placeholder:text-viruj-neutral-600/60 focus-visible:ring-2 focus-visible:ring-[#0F9E72] focus-visible:ring-offset-2',
      ghost:
        'border-0 border-b border-viruj-neutral-200/40 bg-transparent text-white placeholder:text-viruj-neutral-600/60 focus-visible:border-b-viruj-teal-500 focus-visible:ring-0',
    };

    return (
      <div className={cn('flex flex-col gap-2', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-semibold text-viruj-neutral-200"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'px-4 py-3 text-body-md rounded-xl transition-all duration-200 ease-in-out focus-visible:outline-none',
            variantStyles[variant],
            error && 'border-red-500 focus-visible:ring-red-500',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        />
        {error && <span className="text-sm text-red-400 font-medium">{error}</span>}
        {helperText && !error && (
          <span className="text-sm text-viruj-neutral-600">{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
