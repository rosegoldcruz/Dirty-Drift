import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Barlow_Condensed, Inter_Tight } from 'next/font/google';
import { facebookUrl, instagramUrl, siteUrl } from '@/lib/production-site-data';
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
  applicationName: 'Driftwoods',
  referrer: 'origin-when-cross-origin',
  title: 'Driftwoods | Sunnyslope After Dark',
  description:
    'A new-era homepage for Driftwoods: bar pulse, patio life, food that holds its own, and neighborhood energy after dark.',
  keywords: [
    'Driftwoods',
    'Driftwoods Sports Grill',
    'Phoenix sports bar',
    'Sunnyslope restaurant',
    'cocktails and food'
  ],
  category: 'restaurant',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon/favicon.ico']
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Driftwoods',
    title: 'Driftwoods | Sunnyslope After Dark',
    description:
      'A new-era homepage for Driftwoods: bar pulse, patio life, food that holds its own, and neighborhood energy after dark.',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Driftwoods social preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Driftwoods | Sunnyslope After Dark',
    description:
      'A new-era homepage for Driftwoods: bar pulse, patio life, food that holds its own, and neighborhood energy after dark.',
    images: ['/twitter-image']
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#06101a',
    'format-detection': 'telephone=no',
    'og:see_also': `${instagramUrl},${facebookUrl}`
  },
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
