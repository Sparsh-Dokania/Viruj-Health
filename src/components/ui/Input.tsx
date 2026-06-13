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
        'border border-input bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10',
      ghost:
        'border-0 border-b border-border bg-transparent text-foreground placeholder:text-muted-foreground focus:border-b-primary focus:ring-0',
    };

    return (
      <div className={cn('flex flex-col gap-2', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-foreground"
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
            error && 'border-destructive focus:border-destructive focus:ring-destructive/10',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        />
        {error && <span className="text-sm text-destructive">{error}</span>}
        {helperText && !error && (
          <span className="text-sm text-muted-foreground">{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
