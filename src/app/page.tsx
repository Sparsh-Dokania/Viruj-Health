'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/sections/Navbar').then(m => m.Navbar), { ssr: false });
const Hero = dynamic(() => import('@/components/sections/Hero').then(m => m.Hero), { ssr: false });
const TrustBar = dynamic(() => import('@/components/sections/TrustBar').then(m => m.TrustBar), { ssr: false });
const AIShowcase = dynamic(() => import('@/components/sections/AIShowcase').then(m => m.AIShowcase), { ssr: false });
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks').then(m => m.HowItWorks), { ssr: false });
const Specialties = dynamic(() => import('@/components/sections/Specialties').then(m => m.Specialties), { ssr: false });
const FeaturedDoctors = dynamic(() => import('@/components/sections/FeaturedDoctors').then(m => m.FeaturedDoctors), { ssr: false });
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(m => m.FAQ), { ssr: false });
const Footer = dynamic(() => import('@/components/sections/Footer').then(m => m.Footer), { ssr: false });

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-viruj-teal-500 text-white px-4 py-2 rounded-lg font-semibold z-[100] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F9E72]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <AIShowcase />
        <HowItWorks />
        <Specialties />
        <FeaturedDoctors />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
