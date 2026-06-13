import React from 'react';
import { cn } from '@/lib/cn';
import Image from 'next/image';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback: string;
}

export function Avatar({ className, src, alt, fallback, ...props }: AvatarProps) {
  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-viruj-navy-800 rounded-full border border-white/10 select-none shrink-0',
        className
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || 'Avatar'}
          fill
          sizes="40px"
          className="object-cover"
        />
      ) : (
        <span className="font-semibold text-sm text-viruj-teal-200">{fallback}</span>
      )}
    </div>
  );
}
