import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'sm' | 'md' | 'lg';
}

export const Container: React.FC<ContainerProps> = ({
  className,
  size = 'lg',
  padding = 'md',
  ...props
}) => {
  const sizeStyles = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  };

  const paddingStyles = {
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
  };

  return (
    <div
      className={cn(
        'mx-auto w-full',
        sizeStyles[size],
        paddingStyles[padding],
        className
      )}
      {...props}
    />
  );
};

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: number;
  gap?: 'sm' | 'md' | 'lg';
  responsive?: boolean;
}

export const Grid: React.FC<GridProps> = ({
  className,
  cols = 3,
  gap = 'md',
  responsive = true,
  ...props
}) => {
  const gapStyles = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  const colsStyle = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  const responsiveStyles = responsive
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    : colsStyle[cols as keyof typeof colsStyle] || 'grid-cols-3';

  return (
    <div
      className={cn(
        'grid',
        responsive ? responsiveStyles : colsStyle[cols as keyof typeof colsStyle],
        gapStyles[gap],
        className
      )}
      {...props}
    />
  );
};

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: boolean;
}

export const Flex: React.FC<FlexProps> = ({
  className,
  direction = 'row',
  justify = 'start',
  align = 'center',
  gap = 'md',
  wrap = false,
  ...props
}) => {
  const directionStyles = {
    row: 'flex-row',
    col: 'flex-col',
  };

  const justifyStyles = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const alignStyles = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const gapStyles = {
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  return (
    <div
      className={cn(
        'flex',
        directionStyles[direction],
        justifyStyles[justify],
        alignStyles[align],
        gapStyles[gap],
        wrap && 'flex-wrap',
        className
      )}
      {...props}
    />
  );
};

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
}

export const Stack: React.FC<StackProps> = ({
  className,
  spacing = 'md',
  align = 'stretch',
  ...props
}) => {
  const spacingStyles = {
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const alignStyles = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  return (
    <div
      className={cn(
        'flex flex-col',
        spacingStyles[spacing],
        alignStyles[align],
        className
      )}
      {...props}
    />
  );
};
