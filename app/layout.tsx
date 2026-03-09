import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Barlow_Condensed, Inter_Tight } from 'next/font/google';
import { siteUrl } from '@/lib/production-site-data';
import './globals.css';

const display = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700']
});

const body = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Driftwoods | Sunnyslope After Dark',
  description:
    'A new-era homepage for Driftwoods: bar pulse, patio life, food that holds its own, and neighborhood energy after dark.',
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
