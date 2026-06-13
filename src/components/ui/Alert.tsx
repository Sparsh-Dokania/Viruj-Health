import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
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
    info: 'border-info/30 bg-info/5 text-info',
    success: 'border-success/30 bg-success/5 text-success',
    warning: 'border-warning/30 bg-warning/5 text-warning',
    error: 'border-destructive/30 bg-destructive/5 text-destructive',
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

export type AlertTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const AlertTitle: React.FC<AlertTitleProps> = ({
  className,
  ...props
}) => (
  <h3
    className={cn('font-semibold text-sm text-current', className)}
    {...props}
  />
);

export type AlertDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const AlertDescription: React.FC<AlertDescriptionProps> = ({
  className,
  ...props
}) => (
  <p
    className={cn('text-sm opacity-90 mt-1 text-current', className)}
    {...props}
  />
);
