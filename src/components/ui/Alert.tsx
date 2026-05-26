import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, InfoIcon, AlertTriangle } from 'lucide-react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  description?: string;
  icon?: boolean;
}

export const Alert: React.FC<AlertProps> = ({
  className,
  variant = 'info',
  title,
  description,
  icon = true,
  children,
  ...props
}) => {
  const variantStyles = {
    info: 'border-[#0369A1]/30 bg-[#0369A1]/5 text-[#0369A1]',
    success: 'border-[#047857]/30 bg-[#047857]/5 text-[#047857]',
    warning: 'border-[#D97706]/30 bg-[#D97706]/5 text-[#D97706]',
    error: 'border-[#DC2626]/30 bg-[#DC2626]/5 text-[#DC2626]',
  };

  const iconMap = {
    info: <InfoIcon className="w-5 h-5 flex-shrink-0" />,
    success: <CheckCircle className="w-5 h-5 flex-shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 flex-shrink-0" />,
  };

  return (
    <div
      className={cn(
        'rounded-lg border p-4 flex gap-3',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon && <div className="flex-shrink-0 mt-0.5">{iconMap[variant]}</div>}
      <div className="flex-1">
        {title && <div className="font-semibold text-sm mb-1">{title}</div>}
        {description && (
          <div className="text-sm opacity-90">{description}</div>
        )}
        {children}
      </div>
    </div>
  );
};

export interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const AlertTitle: React.FC<AlertTitleProps> = ({
  className,
  ...props
}) => (
  <h3
    className={cn('font-semibold text-sm', className)}
    {...props}
  />
);

export interface AlertDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const AlertDescription: React.FC<AlertDescriptionProps> = ({
  className,
  ...props
}) => (
  <p
    className={cn('text-sm opacity-90 mt-1', className)}
    {...props}
  />
);
