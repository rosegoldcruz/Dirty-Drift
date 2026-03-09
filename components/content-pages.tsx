'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock3, Mail, MapPin, Martini, ShoppingBag, Ticket, Truck, Tv2 } from 'lucide-react';
import { BookingForm } from './booking-form';
import { SiteFooter } from './site-footer';
import { SiteNav } from './site-nav';
import {
  cocktails,
  directionsUrl,
  eventTracks,
  eventsPageHref,
  gameDayMoments,
  happyHourItems,
  happyHourReasons,
  mapsPlaceUrl,
  menuSections,
  menuPageHref,
  onTapPageHref,
  orderPageHref,
  orderProviders,
  phoneDisplay,
  phoneHref,
  privateBookingsHref,
  reservationsEmail,
  screenSetupDetails,
  tapCategories,
  visualMenuLinks,
  weeklySpecials
} from '@/lib/production-site-data';

const viewport = { once: true, amount: 0.18 };

type FulfillmentMode = 'pickup' | 'delivery';

function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="page-shell">
      <SiteNav />
      {children}
      <SiteFooter />
    </main>
  );
}

function PageHero({ eyebrow, title, body, primaryCta, secondaryCta }: {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
}) {
  return (
    <section className="px-4 pb-8 pt-28 md:px-8 md:pb-10 md:pt-32">
      <div className="mx-auto max-w-[1380px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-5xl uppercase leading-[0.9] text-cream md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-cream/[0.74] md:text-lg">{body}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Link href={primaryCta.href} target={primaryCta.external ? '_blank' : undefined} className="cta-primary">
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} target={secondaryCta.external ? '_blank' : undefined} className="cta-secondary">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function MenuPageContent() {
  return (
    <PageShell>
      <PageHero
        eyebrow="VIEW OUR MENU"
        title="SEE THE FULL MENU."
        body="This is the high-contrast version of the Driftwoods menu built to stay readable in harsh light, fast on mobile, and easy to scan when someone needs an answer right now. The photo menus are still here too if you want the visual version."
        primaryCta={{ label: 'ORDER ONLINE →', href: orderPageHref }}
        secondaryCta={{ label: 'VIEW FULL PICTURE MENUS →', href: '#visual-menu' }}
      />

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1380px] gap-5 xl:grid-cols-[1.16fr_0.84fr]">
          <div className="grid gap-5">
            {menuSections.map((section, index) => (
              <motion.article
                key={section.title}
                className="section-shell p-5 md:p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, delay: index * 0.03 }}
              >
                <p className="eyebrow">{section.title}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-cream/[0.62]">{section.intro}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {section.items.map((item) => (
                    <div key={`${section.title}-${item.name}`} className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                      <h2 className="text-2xl uppercase leading-[0.96] text-cream">{item.name}</h2>
                      <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="grid gap-5">
            <motion.aside
              id="visual-menu"
              className="section-shell p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45 }}
            >
              <p className="eyebrow">Visual menu</p>
              <h2 className="mt-4 text-3xl uppercase leading-[0.94] text-cream">Picture menus when you want them.</h2>
              <p className="mt-4 text-sm leading-6 text-cream/[0.72]">
                The clean text version stays primary. These image menus are here as the optional visual module.
              </p>
              <div className="mt-6 grid gap-3">
                {visualMenuLinks.map((link) => (
                  <Link key={link.title} href={link.href} target="_blank" className="footer-link justify-between">
                    <span>{link.title}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </motion.aside>

            <motion.aside
              className="section-shell p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <p className="eyebrow">Quick moves</p>
              <div className="mt-6 grid gap-3">
                <Link href={orderPageHref} className="cta-primary text-center">
                  ORDER ONLINE →
                </Link>
                <Link href={onTapPageHref} className="cta-secondary text-center">
                  SEE WHAT'S ON TAP →
                </Link>
                <Link href={directionsUrl} target="_blank" className="cta-secondary text-center">
                  GET DIRECTIONS →
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function OnTapPageContent() {
  return (
    <PageShell>
      <PageHero
        eyebrow="SEE WHAT'S ON TAP"
        title="SEE WHAT'S ON TAP."
        body="This page is the bar guide: tap lineup, bottles, wine, cocktails, and the current public bar roster. It is built to be the place people check before they pull up."
        primaryCta={{ label: 'ORDER ONLINE →', href: orderPageHref }}
        secondaryCta={{ label: 'VIEW OUR MENU →', href: menuPageHref }}
      />

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1380px] gap-5 xl:grid-cols-[0.92fr_1.08fr]">
          <motion.article
            className="section-shell p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Bar setup</p>
            <h2 className="mt-4 text-4xl uppercase leading-[0.94] text-cream md:text-5xl">
              Full brand roster. Drafts. Bottles. The back bar.
            </h2>
            <p className="mt-5 text-base leading-7 text-cream/[0.74] md:text-lg">
              The public menu currently lists rotating drafts, domestic bottles, import and craft bottles, house wine, premium wine, and soft drinks. This page gives that lineup a cleaner read and a stronger visual anchor.
            </p>
            <div className="mt-8 grid gap-4">
              {tapCategories.map((category) => (
                <div key={category.title} className="rounded-[1.25rem] border border-white/[0.1] bg-[#0a1520] p-4">
                  <div className="flex items-center gap-3">
                    <Tv2 className="h-5 w-5 text-cyan" />
                    <h3 className="text-2xl uppercase leading-[0.96] text-cream">{category.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{category.copy}</p>
                  {category.items?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span key={item} className="glass-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.article
              className="section-shell p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.04 }}
            >
              <p className="eyebrow">Coastal cocktails</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {cocktails.map((item) => (
                  <div key={item.name} className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                    <div className="flex items-center gap-3">
                      <Martini className="h-4 w-4 text-cyan" />
                      <h3 className="text-xl uppercase leading-[0.96] text-cream">{item.name}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{item.build}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className="section-shell p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <p className="eyebrow">Happy hour</p>
              <p className="mt-3 text-base leading-7 text-cream/[0.74]">Daily until 7pm.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {happyHourItems.map((item) => (
                  <div key={item.title} className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                    <h3 className="text-lg uppercase leading-[0.96] text-cream">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function EventsPageContent() {
  return (
    <PageShell>
      <PageHero
        eyebrow="SEE THIS WEEK'S EVENTS"
        title="SEE THIS WEEK'S EVENTS."
        body="This page is built to carry the weekly specials, themed nights, live music, watch parties, and recurring community traffic that keep Driftwoods moving after dark."
        primaryCta={{ label: 'ORDER ONLINE →', href: orderPageHref }}
        secondaryCta={{ label: 'PLAN YOUR EVENT →', href: privateBookingsHref }}
      />

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1380px] gap-5 xl:grid-cols-[1.06fr_0.94fr]">
          <motion.article
            className="section-shell p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Weekly specials</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {weeklySpecials.map((item) => (
                <div key={item.title} className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-4 w-4 text-cyan" />
                    <h2 className="text-xl uppercase leading-[0.96] text-cream">{item.title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.article
              className="section-shell p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <p className="eyebrow">What this page carries</p>
              <div className="mt-6 grid gap-4">
                {eventTracks.map((item) => (
                  <div key={item.title} className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                    <div className="flex items-center gap-3">
                      <Ticket className="h-4 w-4 text-cyan" />
                      <h2 className="text-xl uppercase leading-[0.96] text-cream">{item.title}</h2>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className="section-shell p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <p className="eyebrow">Get here fast</p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href={directionsUrl} target="_blank" className="cta-secondary text-center">
                  GET DIRECTIONS →
                </Link>
                <Link href={phoneHref} className="cta-secondary text-center">
                  CALL {phoneDisplay} →
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function OrderPageContent() {
  const [mode, setMode] = useState<FulfillmentMode>('pickup');

  return (
    <PageShell>
      <PageHero
        eyebrow="ORDER ONLINE"
        title="PICKUP OR DELIVERY. ALL IN ONE PLACE."
        body="This is the clean order hub. One page. Four providers. Pickup vs delivery handled without making people bounce around wondering which link does what."
        primaryCta={{ label: 'VIEW OUR MENU →', href: menuPageHref }}
        secondaryCta={{ label: 'GET DIRECTIONS →', href: directionsUrl, external: true }}
      />

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1380px] gap-5 xl:grid-cols-[0.88fr_1.12fr]">
          <motion.aside
            className="section-shell p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Choose your lane</p>
            <h2 className="mt-4 text-4xl uppercase leading-[0.94] text-cream md:text-5xl">
              {mode === 'pickup' ? 'PICKUP STARTS HERE.' : 'DELIVERY STARTS HERE.'}
            </h2>
            <p className="mt-5 text-base leading-7 text-cream/[0.74] md:text-lg">
              {mode === 'pickup'
                ? 'Best when you want the food fast, the handoff clean, and the order placed without an extra layer of confusion.'
                : 'Best when the night is staying put and the food needs to come to you instead.'}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setMode('pickup')}
                className={`rounded-[1.2rem] border px-4 py-4 text-left transition duration-300 ${
                  mode === 'pickup'
                    ? 'border-cyan/[0.45] bg-cyan/[0.1] text-cream'
                    : 'border-white/[0.1] bg-[#0a1520] text-cream/[0.74] hover:border-cyan/[0.28]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5 text-cyan" />
                  <span className="text-lg uppercase tracking-[0.08em]">Pickup</span>
                </div>
                <p className="mt-3 text-sm leading-6">Grab it and go.</p>
              </button>
              <button
                type="button"
                onClick={() => setMode('delivery')}
                className={`rounded-[1.2rem] border px-4 py-4 text-left transition duration-300 ${
                  mode === 'delivery'
                    ? 'border-cyan/[0.45] bg-cyan/[0.1] text-cream'
                    : 'border-white/[0.1] bg-[#0a1520] text-cream/[0.74] hover:border-cyan/[0.28]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-cyan" />
                  <span className="text-lg uppercase tracking-[0.08em]">Delivery</span>
                </div>
                <p className="mt-3 text-sm leading-6">Keep the group where it is.</p>
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan/[0.82]">Right now</p>
                <p className="mt-3 text-base leading-7 text-cream/[0.78]">
                  {mode === 'pickup'
                    ? 'Use this mode when you want the fastest route to placing a takeout order.'
                    : 'Use this mode when the order needs to travel and the app ecosystem matters more.'}
                </p>
              </div>
              <div className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-cyan" />
                  <p className="text-lg uppercase leading-[0.96] text-cream">9832 N 7th St, Phoenix, AZ 85020</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-cream/[0.72]">If the move changes from ordering in to pulling up, directions are one tap away.</p>
              </div>
            </div>
          </motion.aside>

          <div className="grid gap-5">
            {orderProviders.map((provider, index) => {
              const href = mode === 'pickup' ? provider.pickupHref : provider.deliveryHref;

              return (
                <motion.article
                  key={provider.label}
                  className="section-shell p-5 md:p-6"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                      <p className="eyebrow">{provider.label}</p>
                      <h2 className="mt-3 text-3xl uppercase leading-[0.94] text-cream md:text-4xl">{provider.summary}</h2>
                      <p className="mt-4 text-base leading-7 text-cream/[0.74]">{provider.note}</p>
                    </div>
                    <span className="glass-chip">{mode === 'pickup' ? 'Pickup' : 'Delivery'}</span>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link href={href} target="_blank" className="cta-primary text-center">
                      {mode === 'pickup' ? `START PICKUP WITH ${provider.label.toUpperCase()} →` : `START DELIVERY WITH ${provider.label.toUpperCase()} →`}
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function GameDayPageContent() {
  return (
    <PageShell>
      <PageHero
        eyebrow="GAME DAY"
        title="GAME DAY STARTS HERE."
        body="This is the page for game day reservations, watch party traffic, and the screen setup details people are actually searching for when they need a Phoenix sports bar that can handle the night."
        primaryCta={{ label: 'RESERVE FOR GAME DAY →', href: privateBookingsHref }}
        secondaryCta={{ label: 'SEE THIS WEEK\'S EVENTS →', href: eventsPageHref }}
      />

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1380px] gap-5 xl:grid-cols-[1.02fr_0.98fr]">
          <motion.article
            className="section-shell p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Reservations + watch parties</p>
            <div className="mt-6 grid gap-4">
              {gameDayMoments.map((item) => (
                <div key={item.title} className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-4 w-4 text-cyan" />
                    <h2 className="text-xl uppercase leading-[0.96] text-cream">{item.title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.article
              className="section-shell p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.04 }}
            >
              <p className="eyebrow">Screen setup</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {screenSetupDetails.map((item) => (
                  <div key={item.title} className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                    <div className="flex items-center gap-3">
                      <Tv2 className="h-4 w-4 text-cyan" />
                      <h2 className="text-lg uppercase leading-[0.96] text-cream">{item.title}</h2>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className="section-shell p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <p className="eyebrow">Move fast</p>
              <div className="mt-6 grid gap-3">
                <Link href={privateBookingsHref} className="cta-primary text-center">
                  RESERVE FOR GAME DAY →
                </Link>
                <Link href={phoneHref} className="cta-secondary text-center">
                  CALL {phoneDisplay} →
                </Link>
                <Link href={directionsUrl} target="_blank" className="cta-secondary text-center">
                  GET DIRECTIONS →
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function HappyHourPageContent() {
  return (
    <PageShell>
      <PageHero
        eyebrow="HAPPY HOUR"
        title="DAILY HAPPY HOUR UNTIL 7PM."
        body="If you're looking for happy hour in Sunnyslope or along 7th Street, this is the move: daily until 7pm, real discounts, and a bar setup strong enough to turn one round into the rest of the night."
        primaryCta={{ label: 'WALK IN BEFORE 7 →', href: directionsUrl, external: true }}
        secondaryCta={{ label: 'ORDER FOR PICKUP →', href: orderPageHref }}
      />

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1380px] gap-5 xl:grid-cols-[1fr_1fr]">
          <motion.article
            className="section-shell p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Why it matters</p>
            <div className="mt-6 grid gap-4">
              {happyHourReasons.map((item) => (
                <div key={item.title} className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-4 w-4 text-cyan" />
                    <h2 className="text-xl uppercase leading-[0.96] text-cream">{item.title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.article
              className="section-shell p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.04 }}
            >
              <p className="eyebrow">What\'s discounted</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {happyHourItems.map((item) => (
                  <div key={item.title} className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                    <div className="flex items-center gap-3">
                      <Martini className="h-4 w-4 text-cyan" />
                      <h2 className="text-lg uppercase leading-[0.96] text-cream">{item.title}</h2>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className="section-shell p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <p className="eyebrow">Get here before 7</p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-cyan" />
                    <h2 className="text-lg uppercase leading-[0.96] text-cream">9832 N 7th St, Phoenix, AZ 85020</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.72]">Walk in early, catch the deal, and let the night get longer from there.</p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href={directionsUrl} target="_blank" className="cta-primary text-center">
                  GET DIRECTIONS →
                </Link>
                <Link href={onTapPageHref} className="cta-secondary text-center">
                  SEE WHAT\'S ON TAP →
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function PrivateBookingsPageContent() {
  return (
    <PageShell>
      <PageHero
        eyebrow="PLAN YOUR EVENT"
        title="PLAN YOUR EVENT. RESERVE YOUR GAME DAY."
        body="This is the central booking hub for tables, watch parties, birthdays, work things, and full private-event inquiries. Start here, send the request straight to the team, and lock the night in."
        primaryCta={{ label: 'SEND EMAIL REQUEST →', href: `mailto:${reservationsEmail}`, external: true }}
        secondaryCta={{ label: 'PULL UP TONIGHT →', href: mapsPlaceUrl, external: true }}
      />

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-[1380px] grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.article
            className="section-shell p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Use this page for</p>
            <div className="mt-6 grid gap-4">
              {[
                {
                  title: 'RESERVE FOR GAME DAY',
                  copy: 'Book before kickoff. Do not be the group that waited too long and got split up.'
                },
                {
                  title: 'PRIVATE PATIO PLANNING',
                  copy: 'Multiple patios and private-space potential make this the right page for real event planning.'
                },
                {
                  title: 'BIRTHDAYS, WATCH PARTIES, WORK THINGS',
                  copy: 'If the night needs a headcount, a time, and a real plan, it belongs here.'
                }
              ].map((item) => (
                <div key={item.title} className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-cyan" />
                    <h2 className="text-xl uppercase leading-[0.96] text-cream">{item.title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <BookingForm />
        </div>
      </section>
    </PageShell>
  );
}
