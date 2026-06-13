import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import '@/app/globals.css';
import '@/styles/tokens.css';
import { LenisProvider } from '@/providers/LenisProvider';

export const metadata: Metadata = {
  title: 'Viruj Health | Precision Medical Care',
  description: 'AI-powered healthcare platform providing personalized clinical intelligence and doctor matching.',
  keywords: 'health, AI doctor, medical consult, online doctor, symptoms tracker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#070E1A] text-white selection:bg-viruj-teal-500 selection:text-white min-h-screen">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}