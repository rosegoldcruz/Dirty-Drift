import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { privateBookingsHref } from '@/lib/production-site-data';

export const metadata: Metadata = {
  title: 'Request Sent | Private Bookings | Driftwoods',
  description:
    'Thanks for your private event request. The Driftwoods team will review your booking details and follow up shortly.'
};

export default function PrivateBookingsThankYouPage() {
  return (
    <main id="top" className="page-shell">
      <SiteNav />
      <section className="px-4 pb-10 pt-28 md:px-8 md:pb-12 md:pt-32">
        <div className="mx-auto max-w-[980px] section-shell p-6 md:p-10">
          <p className="eyebrow">Request Received</p>
          <h1 className="mt-4 text-5xl uppercase leading-[0.9] text-cream md:text-6xl">
            YOU&apos;RE ON THE BOOKS.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cream/[0.72] md:text-lg">
            Your private event request has been sent to the Driftwoods team. We&apos;ll reach out as soon as possible to confirm timing, guest count, and next steps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={privateBookingsHref} className="cta-secondary">
              Back to Private Bookings
            </Link>
            <Link href="/" className="cta-primary">
              Return Home
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
