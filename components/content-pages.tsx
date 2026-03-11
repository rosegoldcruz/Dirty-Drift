'use client';

import Image from 'next/image';
import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const cocktailAccentBackgrounds: Record<string, string> = {
  amber: 'rgba(255, 153, 84, 0.22)',
  cyan: 'rgba(107, 231, 255, 0.22)',
  violet: 'rgba(180, 126, 255, 0.22)',
  rose: 'rgba(255, 124, 160, 0.22)',
  mint: 'rgba(104, 255, 198, 0.2)',
  ice: 'rgba(186, 228, 255, 0.2)',
  yellow: 'rgba(255, 219, 111, 0.2)'
};

export function OnTapPageContent() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroAssetY = useTransform(scrollYProgress, [0, 0.22], [0, 36]);
  const heroGlowOpacity = useTransform(scrollYProgress, [0, 0.18], [0.48, 0.18]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setFeaturedIndex((current) => (current + 1) % featuredCocktails.length);
    }, 4800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const featuredCocktail = featuredCocktails[featuredIndex];
  const driftRailItems = [...onTapAssetRails[0].items, ...onTapAssetRails[1].items];
  const happyHourAssets = onTapAssetRails[1].items.slice(0, 3);

  return (
    <PageShell>
      <section className="px-4 pb-6 pt-28 md:px-8 md:pb-8 md:pt-32">
        <div className="mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(107,231,255,0.12),transparent_24%),radial-gradient(circle_at_82%_62%,rgba(255,97,56,0.12),transparent_18%)]" />
          <div className="relative grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <p className="eyebrow">SEE WHAT'S ON TAP</p>
              <h1 className="mt-4 text-5xl uppercase leading-[0.9] text-cream md:text-7xl">SEE WHAT'S ON TAP.</h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-cream/[0.74] md:text-lg">
                This is the bar guide: the exact draft lineup, bottles and cans, wine list, seasonal craft callout, and the current cocktail roster people should check before they pull up.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={orderPageHref} className="cta-primary">
                  ORDER ONLINE →
                </Link>
                <Link href={menuPageHref} className="cta-secondary">
                  VIEW OUR MENU →
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative min-h-[300px] overflow-hidden rounded-[1.85rem] border border-white/[0.08] bg-[#08131f] p-5 md:min-h-[420px] md:p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="absolute right-[10%] top-[14%] h-44 w-44 rounded-full bg-rust/30 blur-3xl md:h-56 md:w-56"
                style={{ opacity: heroGlowOpacity }}
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="max-w-xs rounded-[1.25rem] border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-sm">
                  <p className="eyebrow">Featured cocktail</p>
                  <h2 className="mt-3 text-3xl uppercase leading-[0.94] text-cream">{featuredCocktail.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.7]">{featuredCocktail.note}</p>
                </div>

                <div className="absolute inset-x-0 bottom-0 top-20 md:top-8">
                  <motion.div
                    key={featuredCocktail.name}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    style={{ y: heroAssetY }}
                  >
                    <div className="absolute bottom-[-8%] right-[-4%] top-[2%] w-[72%] md:bottom-[-10%] md:right-[-6%] md:top-0 md:w-[78%]">
                      <Image
                        src={featuredCocktail.image}
                        alt={featuredCocktail.name}
                        fill
                        unoptimized
                        sizes="(min-width: 1280px) 32vw, (min-width: 768px) 40vw, 90vw"
                        className="object-contain object-right-bottom scale-[1.7] drop-shadow-[0_28px_52px_rgba(0,0,0,0.48)] md:scale-[1.95]"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="relative z-10 mt-auto flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cream/[0.62]">
                  {featuredCocktails.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setFeaturedIndex(index)}
                      className={`h-2 rounded-full transition duration-300 ${index === featuredIndex ? 'w-8 bg-cyan' : 'w-2 bg-white/25 hover:bg-white/45'}`}
                      aria-label={`Show featured cocktail ${item.name}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-2 md:px-8 md:pb-4">
        <div className="mx-auto max-w-[1380px] overflow-hidden rounded-full border border-white/10 bg-white/[0.03] shadow-panel backdrop-blur-sm">
          <motion.div
            className="flex w-max items-center gap-4 px-4 py-3 md:px-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {[...driftRailItems, ...driftRailItems].map((item, index) => (
              <div key={`${item.name}-${index}`} className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#09141f] px-3 py-2">
                <div className="relative h-10 w-10 shrink-0">
                  <Image src={item.image} alt={item.name} fill unoptimized sizes="40px" className="object-contain" />
                </div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cream/[0.66]">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1380px] gap-5 xl:grid-cols-[0.92fr_1.08fr]">
          <motion.article
            className="section-shell overflow-hidden p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Bar setup</p>
            <h2 className="mt-4 text-4xl uppercase leading-[0.94] text-cream md:text-5xl">
              Real drafts. Bottles. Wine. The public roster.
            </h2>
            <p className="mt-5 text-base leading-7 text-cream/[0.74] md:text-lg">
              The structure stays clean and readable, but the bar page now carries the real list with supporting product accents tied to each section. Cocktails stay hero. Beer, bottles, and wine support the read.
            </p>
            <div className="mt-8 grid gap-4">
              {tapCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="group relative overflow-hidden rounded-[1.25rem] border border-white/[0.1] bg-[#0a1520] p-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(107,231,255,0.05),transparent_45%),linear-gradient(315deg,rgba(255,97,56,0.08),transparent_40%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  {category.accentAsset ? (
                    <div className="pointer-events-none absolute right-3 top-3 hidden h-16 w-16 opacity-70 transition duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03] md:block">
                      <Image src={category.accentAsset} alt={category.title} fill unoptimized sizes="64px" className="object-contain object-right-top" />
                    </div>
                  ) : null}
                  <div className="relative flex items-center gap-3">
                    <Tv2 className="h-5 w-5 text-cyan" />
                    <h3 className="text-2xl uppercase leading-[0.96] text-cream">{category.title}</h3>
                  </div>
                  <p className="relative mt-3 text-sm leading-6 text-cream/[0.72]">{category.copy}</p>
                  {category.items?.length ? (
                    category.title === 'Wine List' ? (
                      <div className="relative mt-4 grid gap-2 sm:grid-cols-2">
                        {category.items.map((item) => (
                          <div key={item} className="rounded-[0.95rem] border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm font-medium text-cream/[0.8]">
                            {item}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative mt-4 flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <span key={item} className="glass-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    )
                  ) : null}
                  {category.assetCluster?.length ? (
                    <div className="relative mt-4 hidden items-end gap-3 md:flex">
                      {category.assetCluster.map((asset) => (
                        <div key={asset} className="relative h-14 w-12 opacity-65 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-90">
                          <Image src={asset} alt={category.title} fill unoptimized sizes="48px" className="object-contain object-bottom" />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.article
              className="section-shell overflow-hidden p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.04 }}
            >
              <p className="eyebrow">Coastal cocktails</p>
              <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-4xl uppercase leading-[0.94] text-cream md:text-5xl">Cocktails lead. Everything else supports.</h2>
                  <p className="mt-4 text-base leading-7 text-cream/[0.74]">
                    One featured cocktail carries the hero energy. The rest of the list stays readable, tactile, and lightly animated with each drink tied to its own transparent asset.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="relative h-36 w-28 opacity-90">
                    <Image src={featuredCocktail.image} alt={featuredCocktail.name} fill unoptimized sizes="112px" className="object-contain object-right-bottom" />
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {cocktails.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="group relative overflow-hidden rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4 pr-24"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.35, delay: index * 0.025 }}
                    whileHover={{ y: -4 }}
                  >
                    <div
                      className="absolute -bottom-6 right-0 h-24 w-24 rounded-full blur-2xl transition duration-300 group-hover:scale-110"
                      style={{ backgroundColor: cocktailAccentBackgrounds[item.accent || 'cyan'] || cocktailAccentBackgrounds.cyan }}
                    />
                    {item.asset ? (
                      <div className="pointer-events-none absolute bottom-0 right-1 h-24 w-20 opacity-45 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-70">
                        <Image src={item.asset} alt={item.name} fill unoptimized sizes="80px" className="object-contain object-bottom-right" />
                      </div>
                    ) : null}
                    <div className="relative flex items-center gap-3">
                      <Martini className="h-4 w-4 text-cyan" />
                      <h3 className="text-xl uppercase leading-[0.96] text-cream">{item.name}</h3>
                    </div>
                    <p className="relative mt-3 text-sm leading-6 text-cream/[0.72]">{item.build}</p>
                  </motion.div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className="section-shell overflow-hidden p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <p className="eyebrow">Happy hour</p>
              <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-base leading-7 text-cream/[0.74]">Daily until 7pm.</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-cream/[0.66]">
                    This block carries a little more energy than the rest of the page, but it still stays structured and readable.
                  </p>
                </div>
                <div className="hidden items-end gap-3 md:flex">
                  {happyHourAssets.map((item) => (
                    <div key={item.name} className="relative h-20 w-14 opacity-70">
                      <Image src={item.image} alt={item.name} fill unoptimized sizes="56px" className="object-contain object-bottom" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {happyHourItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="rounded-[1.2rem] border border-white/[0.1] bg-[#0a1520] p-4"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="text-lg uppercase leading-[0.96] text-cream">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                  </motion.div>
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
