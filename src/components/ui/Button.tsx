import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'ai';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9E72] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm rounded-lg gap-1.5',
      md: 'px-4 py-2.5 text-body-md rounded-lg gap-2',
      lg: 'px-6 py-3.5 text-base rounded-xl gap-2.5',
    };

    const variantStyles = {
      primary: 'bg-viruj-teal-500 hover:bg-viruj-teal-600 text-white font-semibold active:scale-[0.98]',
      secondary: 'bg-transparent border border-white/20 text-white hover:bg-white/5 font-semibold active:scale-[0.98]',
      ghost: 'bg-transparent text-white hover:bg-white/5 font-medium',
      ai: 'bg-viruj-violet-50 text-viruj-violet-700 hover:bg-viruj-violet-200/40 font-semibold active:scale-[0.98]',
    };

    const isBtnDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isBtnDisabled}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          loading && 'opacity-70 pointer-events-none',
          className
        )}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-4 w-4 text-current mr-2"
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
        ) : (
          leftIcon && <span className="inline-flex">{leftIcon}</span>
        )}
        {children}
        {!loading && rightIcon && <span className="inline-flex">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
