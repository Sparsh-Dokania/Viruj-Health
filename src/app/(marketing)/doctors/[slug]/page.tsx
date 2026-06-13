'use client';

import React, { use } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { doctors } from '@/data/doctors';
import { Button, Badge, Card } from '@/components/ui';
import { ShieldCheck, Video, MapPin, Star, Calendar, Clock, Award, Building } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DoctorDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const doctor = doctors.find((d) => d.slug === resolvedParams.slug);

  if (!doctor) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 bg-[#070E1A] text-white min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Doctor Not Found</h1>
          <p className="text-white/60 mb-8">The doctor profile you are looking for does not exist.</p>
          <Link href="/doctors" passHref legacyBehavior>
            <Button>Back to Doctors</Button>
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-[#070E1A] text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 space-y-6">
            <Card variant="surface" className="overflow-hidden p-0 border border-white/10">
              <div className="relative aspect-square w-full bg-viruj-navy-900">
                <Image
                  className="object-cover"
                  src={doctor.photoUrl}
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  alt={`${doctor.prefix} ${doctor.name}`}
                />
              </div>
              <div className="p-6 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold text-viruj-neutral-950">
                    {doctor.prefix} {doctor.name}
                  </h1>
                  {doctor.verified && (
                    <ShieldCheck className="w-6 h-6 text-viruj-teal-500 shrink-0" />
                  )}
                </div>
                <p className="text-viruj-teal-600 font-semibold uppercase tracking-tight mb-4">
                  {doctor.specialty}
                </p>
                <div className="flex items-center gap-1.5 text-viruj-neutral-800 text-sm mb-4">
                  <Star className="w-5 h-5 fill-current text-amber-500" />
                  <span className="font-bold">{doctor.rating}</span>
                  <span className="text-viruj-neutral-600">({doctor.reviewCount} reviews)</span>
                </div>
                <div className="space-y-2 text-viruj-neutral-800 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-viruj-teal-500" />
                    <span>{doctor.experience}+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-viruj-teal-500" />
                    <span className="line-clamp-2">{doctor.hospital}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-8 text-left">
            <div>
              <h2 className="text-3xl font-light tracking-tight mb-4 text-white">Professional Overview</h2>
              <div className="text-white/70 max-w-none text-base leading-relaxed">
                <p>
                  {doctor.prefix} {doctor.name} is a leading expert in {doctor.specialty}. Providing premium, patient-centric clinical services with verified qualifications and affiliations from world-class healthcare centers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                <Award className="w-5 h-5 text-viruj-teal-500" />
                Qualifications & Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {doctor.qualifications.map((q, idx) => (
                  <Badge key={idx} variant="info">
                    {q}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                <ShieldCheck className="w-5 h-5 text-viruj-teal-500" />
                Key Services
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-white/70">
                {doctor.services.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <Card variant="surface" className="p-6 border border-white/10 text-viruj-neutral-950">
              <h3 className="text-xl font-bold mb-4 text-viruj-neutral-950 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-viruj-teal-500" />
                Book Consultation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
                <div className="p-4 rounded-xl bg-viruj-neutral-50 border border-viruj-neutral-200/20">
                  <span className="block font-bold text-viruj-neutral-600 mb-1">Availability</span>
                  <span className="capitalize font-semibold text-viruj-neutral-900">{doctor.availability}</span>
                </div>
                <div className="p-4 rounded-xl bg-viruj-neutral-50 border border-viruj-neutral-200/20">
                  <span className="block font-bold text-viruj-neutral-600 mb-1">Consultation Methods</span>
                  <div className="flex gap-3 mt-1 text-viruj-neutral-900 font-semibold">
                    {doctor.consultType.includes('video') && (
                      <span className="flex items-center gap-1">
                        <Video className="w-4 h-4 text-viruj-teal-500" /> Video
                      </span>
                    )}
                    {doctor.consultType.includes('in-person') && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-viruj-teal-500" /> In-person
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Button className="w-full py-4 text-base font-bold rounded-xl">
                Proceed to Appointment Booking
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
