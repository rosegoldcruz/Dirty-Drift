import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { emailAddress, emailHref, phoneDisplay, phoneHref } from '@/lib/production-site-data';

const openPositions = [
  {
    title: 'Line Cook',
    note: 'Kitchen / Back of House',
    href: '/careers/apply?position=line-cook',
    bullets: [
      'Execute menu items with consistency and speed.',
      'Maintain a clean, organized, service-ready station.',
      'Work shoulder-to-shoulder with the kitchen during rushes.'
    ]
  },
  {
    title: 'Server',
    note: 'Front of House',
    href: '/careers/apply?position=server',
    bullets: [
      'Deliver a polished guest experience from greet to close.',
      'Know the menu, specials, and beverage program well.',
      'Handle a fast floor with urgency and attention to detail.'
    ]
  },
  {
    title: 'Bartender',
    note: 'Bar Team / Front of House',
    href: '/careers/apply?position=bartender',
    bullets: [
      'Prepare cocktails, beer, and service tickets accurately.',
      'Keep the bar clean, stocked, and guest-focused.',
      'Bring strong hospitality energy to busy game-day service.'
    ]
  },
  {
    title: 'Host/Hostess',
    note: 'Guest Experience',
    href: '/careers/apply?position=host-hostess',
    bullets: [
      'Set the tone with a warm, organized first impression.',
      'Manage wait flow, seating, and guest communication.',
      'Support the floor team and keep service moving smoothly.'
    ]
  }
];

export default function CareersPage() {
  return (
    <main id="top" className="page-shell">
      <SiteNav />

      <section className="px-4 pb-8 pt-28 md:px-8 md:pb-10 md:pt-32">
        <div className="mx-auto max-w-[1380px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm md:p-10">
          <p className="eyebrow">Careers</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h1 className="text-5xl uppercase leading-[0.9] text-cream md:text-7xl">
                BUILD YOUR NEXT
                <span className="block text-cyan">SHIFT WITH US.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-cream/[0.74] md:text-lg">
                Driftwoods is hiring team members who move with urgency, care about hospitality, and want to be part of a high-energy neighborhood spot.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="section-shell p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.82]">CALL</p>
                <Link href={phoneHref} className="mt-3 block text-lg leading-7 text-cream transition duration-300 hover:text-cyan">
                  {phoneDisplay}
                </Link>
              </div>
              <div className="section-shell p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.82]">EMAIL</p>
                <Link href={emailHref} className="mt-3 block text-lg leading-7 text-cream transition duration-300 hover:text-cyan">
                  {emailAddress}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 md:px-8 md:pb-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-6 max-w-3xl">
            <p className="eyebrow">Open Positions</p>
            <h2 className="mt-4 text-4xl uppercase leading-[0.94] text-cream md:text-5xl">
              FOUR ROLES.
              <span className="block text-cyan">ONE STRONG TEAM.</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-cream/[0.72]">
              Choose the position that fits you best. Each card links directly to the application form with the role preselected.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {openPositions.map((role) => (
              <article key={role.title} className="section-shell flex h-full flex-col p-5">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.82]">{role.note}</p>
                  <h3 className="mt-3 text-2xl uppercase leading-none text-cream">{role.title}</h3>
                </div>

                <ul className="mt-5 grid gap-3 text-sm leading-6 text-cream/[0.72]">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="border-l border-white/10 pl-3">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-2">
                  <Link href={role.href} className="cta-primary w-full text-center">
                    Apply Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 md:px-8 md:pb-12">
        <div className="mx-auto max-w-[1380px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">General Application</p>
              <h2 className="mt-4 text-3xl uppercase leading-[0.94] text-cream md:text-4xl">
                DON&apos;T SEE YOUR ROLE?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-cream/[0.72]">
                Submit a general application and tell us where you would be the best fit. We&apos;ll route it to the careers inbox with the same application flow.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/careers/apply" className="cta-primary">
                General Application
              </Link>
              <Link href={emailHref} className="cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
