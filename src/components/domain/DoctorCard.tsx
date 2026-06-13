import React from 'react';
import { Doctor } from '@/types';
import { Button } from '@/components/ui';
import { ShieldCheck, Video, MapPin, Star } from 'lucide-react';
import Image from 'next/image';

export interface DoctorCardProps {
  doctor: Doctor;
  onBook?: (doctor: Doctor) => void;
}

export function DoctorCard({ doctor, onBook }: DoctorCardProps) {
  const displayRating = doctor.rating.toFixed(1);

  return (
    <div
      className="flex-shrink-0 w-72 bg-white rounded-2xl border border-viruj-neutral-200/40 overflow-hidden snap-start hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
      role="article"
      aria-label={`${doctor.prefix} ${doctor.name}, ${doctor.specialty}`}
    >
      <div>
        <div className="h-40 bg-[#0A1628] flex items-center justify-center relative overflow-hidden">
          <Image
            className="w-full h-full object-cover opacity-80"
            src={doctor.photoUrl}
            width={576}
            height={320}
            sizes="288px"
            alt={`${doctor.prefix} ${doctor.name} headshot`}
          />
          {doctor.verified && (
            <div className="absolute top-3 right-3 bg-viruj-teal-500/90 text-white p-1 rounded-full border border-white/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
          )}
          <div className="absolute bottom-2 right-2 bg-viruj-teal-500 w-3 h-3 rounded-full ring-2 ring-white" />
        </div>

        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h6 className="font-bold text-lg text-viruj-neutral-950">
              {doctor.prefix} {doctor.name}
            </h6>
            <p className="text-viruj-teal-600 text-sm font-semibold uppercase tracking-tight mb-2">
              {doctor.specialty}
            </p>
            <div className="flex items-center gap-1.5 text-viruj-neutral-600 text-sm mb-1">
              <ShieldCheck className="w-4 h-4 text-viruj-teal-500" />
              <span>{doctor.experience}+ Years Experience</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500 text-sm mb-3">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold">{displayRating}</span>
              <span className="text-viruj-neutral-600">({doctor.reviewCount} reviews)</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-4">
              {doctor.consultType.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-viruj-neutral-100 text-viruj-neutral-800 font-medium"
                >
                  {type === 'video' ? <Video className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
                  {type === 'video' ? 'Video' : 'In-person'}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <Button
          className="w-full py-2.5 rounded-xl bg-viruj-neutral-100 text-viruj-teal-600 font-bold hover:bg-viruj-teal-50 hover:text-viruj-teal-800 transition-colors border-none"
          onClick={() => onBook?.(doctor)}
        >
          Book consultation
        </Button>
      </div>
    </div>
  );
}
