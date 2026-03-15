'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CalendarDays, Clock3, Mail, MapPin, Martini, ShoppingBag, Ticket, Truck, Tv2 } from 'lucide-react';
import { BookingForm } from './booking-form';
import { SiteFooter } from './site-footer';
import { SiteNav } from './site-nav';
import {
  cocktails,
  directionsUrl,
  eventTracks,
  eventsPageHref,
  featuredCocktails,
  happyHourPageHref,
  gameDayMoments,
  happyHourItems,
  happyHourReasons,
  mapsPlaceUrl,
  menuSections,
  menuPageHref,
  onTapAssetRails,
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
    <main className="page-shell overflow-x-hidden">
      <SiteNav />
      {children}
      <SiteFooter />
    </main>
  );
}

function PageHero({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta
}: {
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

function ScrollableChipRow({
  items,
  className = ''
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={`relative overflow-x-auto overflow-y-hidden overscroll-x-contain pb-1 ${className}`}>
      <div className="flex w-max gap-2 pr-3 sm:flex-wrap sm:w-auto sm:pr-0">
        {items.map((item) => (
          <span key={item} className="glass-chip shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function MenuPageContent() {
  return (
    <PageShell>
      <PageHero
        eyebrow="VIEW OUR MENU"
        title="SEE THE FULL MENU."
        body="The full menu is listed below in clean, easy-to-read text. Want the original menu layout too? Open the picture menus and browse the full menu pages."
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
                  SEE WHAT&apos;S ON TAP →
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

const cocktailAccentBackgrounds: Record<string, string> = {
  amber: 'rgba(255, 153, 84, 0.22)',
  cyan: 'rgba(107, 231, 255, 0.22)',
  violet: 'rgba(180, 126, 255, 0.22)',
  rose: 'rgba(255, 124, 160, 0.22)',
  mint: 'rgba(104, 255, 198, 0.2)',
  ice: 'rgba(186, 228, 255, 0.2)',
  yellow: 'rgba(255, 219, 111, 0.2)'
};

function CocktailCard({
  item,
  className = ''
}: {
  item: (typeof cocktails)[number];
  className?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#0a1520] ${className}`}
    >
      <div
        className="absolute inset-0 opacity-90 transition duration-500 group-hover:scale-[1.03]"
        style={{
          background: `linear-gradient(180deg, rgba(4,10,17,0.12) 0%, rgba(4,10,17,0.82) 84%), radial-gradient(circle at 78% 14%, ${
            cocktailAccentBackgrounds[item.accent || 'cyan'] || cocktailAccentBackgrounds.cyan
          }, transparent 34%)`
        }}
      />
      {item.asset ? (
        <div className="absolute inset-0">
          <Image
            src={item.asset}
            alt={item.name}
            fill
            unoptimized
            sizes="(min-width: 1280px) 300px, (min-width: 1024px) 280px, (min-width: 768px) 42vw, 78vw"
            className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
          />
        </div>
      ) : null}
    </article>
  );
}

function PinnedCocktailGallery({
  id,
  items
}: {
  id: string;
  items: typeof cocktails;
}) {
  const desktopSectionRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    if (!desktopSectionRef.current || !pinRef.current || !frameRef.current || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    
    const ctx = gsap.context(() => {
      const calculate = () => {
        const frameWidth = frameRef.current?.clientWidth ?? 0;
        const trackWidth = trackRef.current?.scrollWidth ?? 0;
        return Math.max(0, trackWidth - frameWidth);
      };

      const tween = gsap.to(trackRef.current, {
        x: () => -calculate(),
        ease: 'none',
        paused: true
      });

      ScrollTrigger.create({
        trigger: desktopSectionRef.current,
        start: 'top top',
        end: () => `+=${calculate()}`,
        pin: pinRef.current,
        scrub: 0.45,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        animation: tween
      });

      ScrollTrigger.refresh();
    }, desktopSectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [isDesktop, items]);

  return (
    <div id={id} className="scroll-mt-32 md:scroll-mt-36">
      <section className="section-shell overflow-hidden p-5 md:p-6 lg:hidden">
        <div className="max-w-3xl">
          <p className="eyebrow">Coastal cocktails</p>
          <h2 className="mt-4 text-4xl uppercase leading-[0.94] text-cream md:text-5xl">The full cocktail lineup.</h2>
          <p className="mt-4 text-sm leading-6 text-cream/[0.68]">Swipe through the cocktail wall.</p>
        </div>

        <div className="mt-6 overflow-x-auto overflow-y-hidden overscroll-x-contain">
          <div className="flex w-max gap-4 pr-5 md:gap-6">
            {items.map((item) => (
              <CocktailCard
                key={item.name}
                item={item}
                className="aspect-[3/4] w-[78vw] max-w-[360px] shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      <section ref={desktopSectionRef} className="relative hidden lg:block">
        <div ref={pinRef} className="h-screen overflow-hidden">
          <div className="section-shell flex h-[calc(100vh-2rem)] flex-col overflow-hidden p-6 xl:p-7">
            <div className="flex items-end justify-between gap-6">
              <div className="max-w-3xl">
                <p className="eyebrow">Coastal cocktails</p>
                <h2 className="mt-4 text-5xl uppercase leading-[0.94] text-cream">The full cocktail lineup.</h2>
                <p className="mt-4 text-sm leading-6 text-cream/[0.68]">
                  Scroll down. The cocktail gallery pins and moves sideways until the final card is fully visible.
                </p>
              </div>
              <div className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream/[0.62]">
                Pinned horizontal gallery
              </div>
            </div>

            <div ref={frameRef} className="mt-7 min-h-0 flex-1 overflow-x-auto overflow-y-hidden overscroll-x-contain">
              <div
                ref={trackRef}
                className="flex h-full w-max items-stretch gap-6 pb-4"
              >
                {items.map((item) => (
                  <CocktailCard
                    key={item.name}
                    item={item}
                    className="aspect-[3/4] h-full w-[280px] shrink-0 xl:w-[300px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function OnTapPageContent() {
  const primaryCategory = tapCategories[0];
  const bottleCategory = tapCategories[1];
  const wineCategory = tapCategories[2];
  const nonAlcoholicCategory = tapCategories[3];

  return (
    <PageShell>
      <PageHero
        eyebrow="THE DRIFTWOODS BAR"
        title="SEE WHAT'S ON TAP."
        body="Drafts, bottles, cans, wine, and our signature cocktails. If it's behind the bar, it's listed here."
        primaryCta={{ label: 'ORDER ONLINE →', href: orderPageHref }}
        secondaryCta={{ label: 'VIEW COCKTAILS →', href: '#cocktail-gallery' }}
      />

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1380px] gap-6">
          <motion.article
            className="section-shell p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Bar setup</p>
            <h2 className="mt-4 text-4xl uppercase leading-[0.94] text-cream md:text-5xl">Real drafts. Bottles. Wine.</h2>

            <div className="mt-10 grid min-w-0 items-start gap-4 lg:grid-cols-2">
              {primaryCategory ? (
                <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#09131d] p-6">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(107,231,255,0.06),transparent_48%)]" />
                  <div className="relative z-10 flex items-center gap-3">
                    <Tv2 className="h-5 w-5 text-cyan" />
                    <h3 className="text-[2rem] uppercase leading-[0.94] text-cream">{primaryCategory.title}</h3>
                  </div>
                  <p className="relative z-10 mt-3 text-cream/[0.72]">{primaryCategory.copy}</p>

                  {primaryCategory.assetCluster ? (
                    <div className="relative z-10 mt-4 flex items-end gap-3">
                      {primaryCategory.assetCluster.map((asset) => (
                        <div
                          key={asset}
                          className="relative h-16 w-14 opacity-72 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-95"
                        >
                          <Image src={asset} alt="Tap asset" fill unoptimized sizes="56px" className="object-contain object-bottom" />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {primaryCategory.items ? <ScrollableChipRow items={primaryCategory.items} className="mt-5" /> : null}
                </div>
              ) : null}

              <div className="grid content-start self-start gap-4">
                {bottleCategory ? (
                  <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#09131d] p-6">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,157,87,0.06),transparent_48%)]" />
                    <div className="relative z-10 flex items-center gap-3">
                      <Tv2 className="h-5 w-5 text-cyan" />
                      <h3 className="text-xl uppercase leading-[0.94] text-cream">{bottleCategory.title}</h3>
                    </div>
                    <p className="relative z-10 mt-2 text-sm text-cream/[0.72]">{bottleCategory.copy}</p>

                    {bottleCategory.assetCluster ? (
                      <div className="relative z-10 mt-3 flex items-end gap-3">
                        {bottleCategory.assetCluster.map((asset) => (
                          <div
                            key={asset}
                            className="relative h-12 w-10 opacity-72 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-95"
                          >
                            <Image src={asset} alt="Bottle asset" fill unoptimized sizes="40px" className="object-contain object-bottom" />
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {bottleCategory.items ? <ScrollableChipRow items={bottleCategory.items} className="mt-5" /> : null}
                  </div>
                ) : null}

                {wineCategory ? (
                  <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#09131d] p-6">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(180,126,255,0.06),transparent_48%)]" />
                    <div className="relative z-10 flex items-center gap-3">
                      <Tv2 className="h-5 w-5 text-cyan" />
                      <h3 className="text-xl uppercase leading-[0.94] text-cream">{wineCategory.title}</h3>
                    </div>
                    <p className="relative z-10 mt-2 text-sm text-cream/[0.72]">{wineCategory.copy}</p>

                    {wineCategory.accentAsset ? (
                      <div className="pointer-events-none absolute right-6 top-6 h-16 w-12 opacity-40">
                        <Image src={wineCategory.accentAsset} alt="Wine glass" fill unoptimized sizes="48px" className="object-contain object-right-top" />
                      </div>
                    ) : null}

                    {wineCategory.items ? <ScrollableChipRow items={wineCategory.items} className="mt-5" /> : null}
                  </div>
                ) : null}

                {nonAlcoholicCategory ? (
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#09131d] p-6">
                    <div className="flex items-center gap-3">
                      <Tv2 className="h-5 w-5 text-cyan" />
                      <h3 className="text-xl uppercase leading-[0.94] text-cream">{nonAlcoholicCategory.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-cream/[0.72]">{nonAlcoholicCategory.copy}</p>
                    {nonAlcoholicCategory.items ? <ScrollableChipRow items={nonAlcoholicCategory.items} className="mt-5" /> : null}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.article>

          <PinnedCocktailGallery id="cocktail-gallery" items={cocktails} />

          <motion.article
            className="section-shell p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            <div className="rounded-[1.35rem] border border-white/[0.08] bg-[#09131d] p-5 md:p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.84]">Full roster</p>
                  <h3 className="mt-3 text-2xl uppercase leading-[0.94] text-cream md:text-[2rem]">Every cocktail on the board.</h3>
                </div>
                <p className="max-w-md text-sm leading-6 text-cream/[0.62]">
                  Signature pours, listed cleanly for people who want the lineup in text.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {cocktails.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="rounded-[1.05rem] border border-white/[0.08] bg-white/[0.03] px-4 py-4"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan/80" />
                      <div>
                        <h4 className="text-[1rem] font-semibold uppercase leading-[0.98] text-cream">{item.name}</h4>
                        <p className="mt-2 text-sm leading-6 text-cream/[0.68]">{item.build}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </PageShell>
  );
}

export function EventsPageContent() {
  return (
    <PageShell>
      <PageHero
        eyebrow="SEE THIS WEEK&apos;S EVENTS"
        title="SEE THIS WEEK&apos;S EVENTS."
        body="Weekly specials, live music, watch parties, and late-night reasons to show up all land here."
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
              <p className="eyebrow">What&apos;s happening</p>
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
        body="Order pickup or delivery from the provider that works best for you."
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
                ? 'Order ahead and grab it when you’re ready. Fast, clean, no wait.'
                : 'Staying in? Get the food brought to you through your preferred service.'}
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
                <p className="mt-3 text-sm leading-6">Ready in minutes.</p>
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
                <p className="mt-3 text-sm leading-6">We bring it to you.</p>
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan/[0.82]">{mode === 'pickup' ? 'Pickup' : 'Delivery'}</p>
                <p className="mt-3 text-base leading-7 text-cream/[0.78]">
                  {mode === 'pickup'
                    ? 'Order online and pick up at 9832 N 7th St. Skip the wait.'
                    : 'Get it delivered straight to your door through your preferred service.'}
                </p>
              </div>
              <div className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-cyan" />
                  <p className="text-lg uppercase leading-[0.96] text-cream">9832 N 7th St, Phoenix, AZ 85020</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-cream/[0.72]">Sunnyslope · North Phoenix</p>
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
        body="Reserve your table, bring the crew, and make Driftwoods your game day spot."
        primaryCta={{ label: 'RESERVE FOR GAME DAY →', href: privateBookingsHref }}
        secondaryCta={{ label: 'SEE THIS WEEK’S EVENTS →', href: eventsPageHref }}
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
              <p className="eyebrow">What&apos;s discounted</p>
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
                  SEE WHAT&apos;S ON TAP →
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
        body="Book tables, patios, watch parties, birthdays, and private events right here."
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
            <p className="eyebrow">Reserve your spot</p>
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