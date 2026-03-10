import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';

export default function CareersThankYouPage() {
  return (
    <main id="top" className="page-shell">
      <SiteNav />

      <section className="px-4 pb-10 pt-28 md:px-8 md:pb-12 md:pt-32">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm md:p-10">
          <p className="eyebrow">Application Received</p>
          <h1 className="mt-4 text-4xl uppercase leading-[0.92] text-cream md:text-6xl">
            THANKS FOR
            <span className="block text-cyan">APPLYING.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cream/[0.72]">
            Your application has been submitted to the Driftwoods careers inbox. If the team wants to move forward, they&apos;ll reach out using the contact information you provided.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/careers" className="cta-primary">
              Back to Careers
            </Link>
            <Link href="/" className="cta-secondary">
              Return Home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
