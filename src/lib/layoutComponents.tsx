import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

// Main Navigation
export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  logo?: ReactNode;
  children?: ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({
  className,
  logo,
  children,
  ...props
}) => (
  <nav
    className={cn(
      'sticky top-0 z-1020 w-full border-b border-border bg-background/80 backdrop-blur-sm transition-all',
      className
    )}
    {...props}
  >
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      {logo && <div className="shrink-0">{logo}</div>}
      {children}
    </div>
  </nav>
);

// Sidebar Layout
interface SidebarLayoutProps extends HTMLAttributes<HTMLDivElement> {
  sidebar: ReactNode;
  children: ReactNode;
  sidebarWidth?: 'sm' | 'md' | 'lg';
}

const sidebarWidths = {
  sm: 'w-48',
  md: 'w-64',
  lg: 'w-80',
};

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  className,
  sidebar,
  children,
  sidebarWidth = 'md',
  ...props
}) => (
  <div className={cn('flex h-screen bg-background', className)} {...props}>
    <aside
      className={cn(
        'border-r border-border bg-surface-muted overflow-y-auto transition-all',
        sidebarWidths[sidebarWidth]
      )}
    >
      {sidebar}
    </aside>
    <main className="flex-1 overflow-y-auto">{children}</main>
  </div>
);

// Main Content Container
export interface MainContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'max-w-7xl mx-auto px-6 py-8',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

// Modal/Dialog Backdrop
interface ModalBackdropProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const ModalBackdrop: React.FC<ModalBackdropProps> = ({
  className,
  isOpen,
  onClose,
  children,
  ...props
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-1040 bg-black/50 backdrop-blur-sm flex items-center justify-center',
        className
      )}
      onClick={onClose}
      {...props}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

// Toast Container (Bottom Right)
export interface ToastContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'fixed bottom-6 right-6 z-1070 flex flex-col gap-3 max-w-sm pointer-events-none',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

// Toast Item
export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  children: ReactNode;
}

export const Toast: React.FC<ToastProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-card border border-border text-card-foreground',
    success: 'bg-success text-white border-0',
    error: 'bg-destructive text-destructive-foreground border-0',
    warning: 'bg-warning text-white border-0',
    info: 'bg-info text-white border-0',
  };

  return (
    <div
      className={cn(
        'pointer-events-auto px-4 py-3 rounded-lg shadow-[0_10px_30px_rgba(15,23,42,0.06)]',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Section Container (full width, often with background)
interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  background?: 'primary' | 'secondary' | 'tertiary';
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const bgStyles = {
  primary: 'bg-background',
  secondary: 'bg-surface-muted',
  tertiary: 'bg-surface-subtle',
};

const spacingStyles = {
  sm: 'py-8 px-6',
  md: 'py-12 px-6',
  lg: 'py-16 px-6',
  xl: 'py-24 px-6',
};

export const Section: React.FC<SectionProps> = ({
  className,
  background = 'primary',
  spacing = 'lg',
  children,
  ...props
}) => (
  <section
    className={cn(
      bgStyles[background],
      spacingStyles[spacing],
      'w-full',
      className
    )}
    {...props}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

// Drawer/Sidebar Overlay for Mobile
interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: 'left' | 'right';
}

export const Drawer: React.FC<DrawerProps> = ({
  className,
  isOpen,
  onClose,
  children,
  position = 'left',
  ...props
}) => {
  if (!isOpen) return null;

  const positionStyles = {
    left: 'translate-x-0',
    right: 'translate-x-0',
  };

  return (
    <>
      <div
        className="fixed inset-0 z-1040 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          'fixed top-0 h-screen w-64 bg-card shadow-lg z-1050 transition-transform',
          position === 'left' ? 'left-0' : 'right-0',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};
