import CareersApplicationForm from '@/components/CareersApplicationForm';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';

export default function CareersApplyPage() {
  return (
    <main id="top" className="page-shell">
      <SiteNav />

      <section className="px-4 pb-10 pt-28 md:px-8 md:pb-12 md:pt-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-8 max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm md:p-8">
            <p className="eyebrow">Careers Application</p>
            <h1 className="mt-4 text-4xl uppercase leading-[0.92] text-cream md:text-6xl">
              APPLY TO
              <span className="block text-cyan">DRIFTWOODS.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-cream/[0.72]">
              Complete the application below. If you came from an open position card, the role will already be prefilled for you.
            </p>
          </div>

          <CareersApplicationForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
