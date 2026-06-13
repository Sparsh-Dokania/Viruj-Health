import React from 'react';
import { Specialty } from '@/types';
import { Card } from '@/components/ui';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SpecialtyCardProps {
  specialty: Specialty;
  onClick?: (specialty: Specialty) => void;
}

export function SpecialtyCard({ specialty, onClick }: SpecialtyCardProps) {
  const iconMap: Record<string, LucideIcon> = {
    favorite: Icons.Heart,
    psychology: Icons.Brain,
    done: Icons.Activity,
    medical_services: Icons.Stethoscope,
    microbiology: Icons.Dna,
    biotech: Icons.Binary,
    child_care: Icons.Baby,
    content_cut: Icons.Scissors,
  };

  const IconComponent = iconMap[specialty.icon] || Icons.Activity;

  const colorStyles = {
    teal: 'bg-viruj-teal-500/10 text-viruj-teal-500 border-viruj-teal-500/20',
    violet: 'bg-viruj-violet-500/10 text-viruj-violet-500 border-viruj-violet-500/20',
    red: 'bg-red-500/10 text-red-500 border-red-500/20',
    amber: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    pink: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
    gray: 'bg-viruj-neutral-600/10 text-viruj-neutral-600 border-viruj-neutral-600/20',
  };

  return (
    <Card
      variant="surface"
      hover
      className="p-6 flex flex-col items-start text-left cursor-pointer group"
      onClick={() => onClick?.(specialty)}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${colorStyles[specialty.colour]}`}
      >
        <IconComponent className="w-6 h-6" />
      </div>
      <h5 className="font-bold text-lg text-viruj-neutral-950 mb-1">
        {specialty.name}
      </h5>
      <p className="text-sm text-viruj-neutral-600 mb-2 leading-relaxed">
        {specialty.subtitle}
      </p>
      <span className="text-xs font-semibold text-viruj-teal-600 mt-auto uppercase tracking-wide">
        {specialty.doctorCount} Doctors
      </span>
    </Card>
  );
}
