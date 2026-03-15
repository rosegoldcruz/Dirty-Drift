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

function PinnedCocktailGallery({
  items,
  notes
}: {
  items: typeof cocktails;
  notes: Map<string, string>;
}) {
  return (
    <section className="mt-12">
      <div className="overflow-x-auto rounded-[1.8rem] border border-white/[0.08] bg-[#07121c] shadow-[0_30px_80px_rgba(2,8,14,0.42)]">
        <div className="border-b border-white/[0.06] px-5 py-5 md:px-7">
          <p className="eyebrow">Cocktail gallery</p>
          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-3xl uppercase leading-[0.92] text-cream md:text-4xl">Scroll into the full pour lineup.</h3>
              <p className="mt-3 text-sm leading-6 text-cream/[0.68] md:text-base">
                The full poster lineup stays visible in a horizontal gallery, so the art reads clearly without hijacking page scroll.
              </p>
            </div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.82]">Horizontal gallery</p>
          </div>
        </div>

        <div className="flex gap-4 px-5 py-5 md:gap-6 md:px-7 md:py-7">
          {items.map((item, index) => (
            <article
              key={item.name}
              className="group relative h-[68vh] min-h-[480px] w-[78vw] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#0a1520] md:h-[72vh] md:min-h-[560px] md:w-[34vw] xl:w-[28vw]"
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
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 34vw, 78vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              ) : null}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,12,18,0.02)_0%,rgba(5,12,18,0.28)_42%,rgba(5,12,18,0.9)_100%)]" />
              <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/[0.12] bg-[#08131d]/82 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.84] backdrop-blur-md">
                    Cocktail {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full border border-white/[0.12] bg-[#08131d]/78 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-cream/[0.62] backdrop-blur-md">
                    Poster card
                  </span>
                </div>
                <div className="max-w-[18rem] rounded-[1.3rem] border border-white/[0.08] bg-[#06101a]/80 p-4 backdrop-blur-md md:max-w-[20rem] md:p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.84]">House pour</p>
                  <h4 className="mt-3 text-[1.8rem] uppercase leading-[0.92] text-cream md:text-[2.2rem]">{item.name}</h4>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.72]">{item.build}</p>
                  <p className="mt-4 text-sm leading-6 text-cream/[0.58]">
                    {notes.get(item.name) ?? 'House-built cocktail with a brighter finish and cleaner structure.'}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OnTapPageContent() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [activeSelector, setActiveSelector] = useState('spotlight');
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
  const draftRail = onTapAssetRails[0]?.items ?? [];
  const bottleRail = onTapAssetRails[1]?.items ?? [];
  const happyHourAssets = bottleRail.slice(0, 3);
  const signatureCocktailNames = new Set(featuredCocktails.map((item) => item.name));
  const featuredCocktailNotes = new Map(featuredCocktails.map((item) => [item.name, item.note]));
  const secondaryCocktailItems = cocktails.filter((item) => !signatureCocktailNames.has(item.name));
  const primaryCategory = tapCategories.find((category) => category.title === 'On Tap Now');
  const bottleCategory = tapCategories.find((category) => category.title === 'Bottles & Cans');
  const nonAlcoholicCategory = tapCategories.find((category) => category.title === 'Non-Alcoholic Beer');
  const wineCategory = tapCategories.find((category) => category.title === 'Wine List');
  const seasonalCategory = tapCategories.find((category) => category.title === 'Seasonal Craft Beer');
  const happyHourDrinkItems = happyHourItems.slice(0, 4);
  const happyHourFoodItems = happyHourItems.slice(4);
  const selectorItems = [
    {
      id: 'spotlight',
      kicker: 'Spotlight',
      label: 'Featured cocktail',
      note: featuredCocktail.name,
      image: featuredCocktail.image
    },
    {
      id: 'bar-guide',
      kicker: 'Bar guide',
      label: 'Drafts, bottles, wine',
      note: 'Current public roster',
      image: draftRail[0]?.image ?? bottleRail[0]?.image ?? featuredCocktail.image
    },
    {
      id: 'cocktail-guide',
      kicker: 'House pours',
      label: 'Cocktail roster',
      note: `${cocktails.length} cocktails on the board`,
      image: featuredCocktail.image
    },
    {
      id: 'happy-hour-guide',
      kicker: 'Daily window',
      label: 'Happy hour',
      note: 'Daily until 7pm',
      image: bottleRail[1]?.image ?? bottleRail[0]?.image ?? featuredCocktail.image
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveSelector(id);

    if (typeof document !== 'undefined') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PageShell>
      <section id="spotlight" className="px-4 pb-6 pt-28 md:px-8 md:pb-8 md:pt-32">
        <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[2.15rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(107,231,255,0.12),transparent_24%),radial-gradient(circle_at_82%_62%,rgba(255,97,56,0.12),transparent_18%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-white/0 via-white/18 to-white/0" />
          <div className="relative grid gap-8 xl:grid-cols-[0.98fr_1.02fr] xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl xl:pr-4"
            >
              <p className="eyebrow">SEE WHAT'S ON TAP</p>
              <h1 className="mt-4 text-5xl uppercase leading-[0.9] text-cream md:text-7xl">SEE WHAT'S ON TAP.</h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-cream/[0.74] md:text-lg">
                Drafts, bottles, cans, wine, and cocktails. If it’s behind the bar, it’s listed here.
              </p>
              <p className="mt-5 max-w-2xl text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cream/[0.48]">
                Everything we’re pouring, all in one place.
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
              className="relative min-h-[340px] overflow-hidden rounded-[1.95rem] border border-white/[0.08] bg-[#08131f] p-5 md:min-h-[430px] md:p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(5,14,23,0.92)_20%,rgba(5,14,23,0.72)_44%,rgba(5,14,23,0.16)_76%)]" />
              <motion.div
                className="absolute right-[10%] top-[14%] h-44 w-44 rounded-full bg-rust/30 blur-3xl md:h-56 md:w-56"
                style={{ opacity: heroGlowOpacity }}
              />
              <motion.div
                key={featuredCocktail.name}
                className="pointer-events-none absolute bottom-[-4%] right-[-1%] top-[6%] w-[70%] md:bottom-[-8%] md:right-[-4%] md:top-[4%] md:w-[76%]"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: heroAssetY }}
              >
                <Image
                  src={featuredCocktail.image}
                  alt={featuredCocktail.name}
                  fill
                  unoptimized
                  sizes="(min-width: 1280px) 34vw, (min-width: 768px) 40vw, 90vw"
                  className="object-contain object-right-bottom scale-[1.88] drop-shadow-[0_28px_52px_rgba(0,0,0,0.52)] md:scale-[2.15]"
                />
              </motion.div>
              <div className="relative flex h-full flex-col justify-between">
                <div className="max-w-[18rem] rounded-[1.35rem] border border-white/[0.08] bg-[#0a1520]/82 p-4 backdrop-blur-md md:max-w-[19.5rem] md:p-5">
                  <p className="eyebrow">Featured cocktail</p>
                  <h2 className="mt-3 text-3xl uppercase leading-[0.94] text-cream md:text-[2.2rem]">{featuredCocktail.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.7]">{featuredCocktail.note}</p>
                </div>

                <div className="max-w-[22rem] rounded-[1.3rem] border border-white/[0.08] bg-[#09131b]/80 p-4 backdrop-blur-md md:p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.84]">Current spotlight</p>
                      <p className="mt-2 text-sm leading-6 text-cream/[0.68]">
                        Everything we’re pouring, all in one place.
                      </p>
                    </div>
                    <p className="shrink-0 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-cream/[0.46]">
                      0{featuredIndex + 1}/0{featuredCocktails.length}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    {featuredCocktails.map((item, index) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => {
                          setFeaturedIndex(index);
                          setActiveSelector('spotlight');
                        }}
                        className={`h-2 rounded-full transition duration-300 ${index === featuredIndex ? 'w-10 bg-cyan' : 'w-2 bg-white/25 hover:bg-white/45'}`}
                        aria-label={`Show featured cocktail ${item.name}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative mt-8 grid gap-3 lg:grid-cols-4">
            {selectorItems.map((item, index) => {
              const isActive = activeSelector === item.id;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + index * 0.04 }}
                  whileHover={{ y: -3 }}
                  className={`group flex items-center gap-4 rounded-[1.3rem] border px-4 py-4 text-left transition duration-300 ${isActive ? 'border-cyan/35 bg-[linear-gradient(135deg,rgba(107,231,255,0.08),rgba(9,19,27,0.96))] shadow-[0_18px_40px_rgba(3,10,18,0.3)]' : 'border-white/[0.08] bg-[#09131d]/85 hover:border-white/[0.16] hover:bg-[#0b1621]'}`}
                  aria-pressed={isActive}
                >
                  <div className={`relative h-12 w-12 shrink-0 rounded-[1rem] border ${isActive ? 'border-cyan/25 bg-white/[0.08]' : 'border-white/[0.08] bg-white/[0.04]'}`}>
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      unoptimized
                      sizes="48px"
                      className={`object-contain p-1.5 transition duration-300 ${isActive ? 'scale-[1.08]' : 'opacity-80 group-hover:scale-[1.04]'}`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.84]">{item.kicker}</p>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-cream md:text-[0.9rem]">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-cream/[0.62] md:text-[0.82rem]">{item.note}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1380px] gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.article
            id="bar-guide"
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
              From tap handles to bottles, cans, and wine, the full drink lineup starts here.
            </p>
            <div className="mt-10 grid gap-4">
              {primaryCategory ? (
                <motion.div
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#09131d] p-5 md:p-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(107,231,255,0.06),transparent_48%),radial-gradient(circle_at_92%_12%,rgba(255,97,56,0.12),transparent_24%)]" />
                  {primaryCategory.accentAsset ? (
                    <div className="pointer-events-none absolute right-4 top-4 hidden h-20 w-20 opacity-80 transition duration-300 group-hover:-translate-y-1 md:block">
                      <Image src={primaryCategory.accentAsset} alt={primaryCategory.title} fill unoptimized sizes="80px" className="object-contain object-right-top" />
                    </div>
                  ) : null}
                  <div className="relative max-w-2xl">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.84]">Primary pour list</p>
                    <div className="mt-3 flex items-center gap-3">
                      <Tv2 className="h-5 w-5 text-cyan" />
                      <h3 className="text-[1.75rem] uppercase leading-[0.94] text-cream md:text-[2rem]">{primaryCategory.title}</h3>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-cream/[0.72] md:text-[0.98rem]">{primaryCategory.copy}</p>
                  </div>
                  {primaryCategory.items?.length ? (
                    <div className="relative mt-5 flex flex-wrap gap-2.5">
                      {primaryCategory.items.map((item) => (
                        <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cream/[0.82]">
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {primaryCategory.assetCluster?.length ? (
                    <div className="relative mt-6 hidden items-end gap-3 md:flex">
                      {primaryCategory.assetCluster.slice(0, 2).map((asset) => (
                        <div key={asset} className="relative h-16 w-14 opacity-72 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-95">
                          <Image src={asset} alt={primaryCategory.title} fill unoptimized sizes="56px" className="object-contain object-bottom" />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ) : null}

              <div className="grid gap-4 lg:grid-cols-[1.06fr_0.94fr]">
                {bottleCategory ? (
                  <motion.div
                    className="group relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-[#0a1520] p-5"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.35, delay: 0.03 }}
                    whileHover={{ y: -3 }}
                  >
                    {bottleCategory.accentAsset ? (
                      <div className="pointer-events-none absolute bottom-3 right-3 hidden h-16 w-12 opacity-75 md:block">
                        <Image src={bottleCategory.accentAsset} alt={bottleCategory.title} fill unoptimized sizes="48px" className="object-contain object-bottom" />
                      </div>
                    ) : null}
                    <div className="relative flex items-center gap-3">
                      <Tv2 className="h-5 w-5 text-cyan" />
                      <h3 className="text-2xl uppercase leading-[0.96] text-cream">{bottleCategory.title}</h3>
                    </div>
                    <p className="relative mt-3 max-w-xl text-sm leading-6 text-cream/[0.72]">{bottleCategory.copy}</p>
                    {bottleCategory.items?.length ? (
                      <div className="relative mt-4 flex flex-wrap gap-2">
                        {bottleCategory.items.map((item) => (
                          <span key={item} className="glass-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {bottleCategory.assetCluster?.length ? (
                      <div className="relative mt-5 hidden items-end gap-3 md:flex">
                        {bottleCategory.assetCluster.slice(0, 2).map((asset) => (
                          <div key={asset} className="relative h-12 w-10 opacity-65 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-90">
                            <Image src={asset} alt={bottleCategory.title} fill unoptimized sizes="40px" className="object-contain object-bottom" />
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </motion.div>
                ) : null}

                <div className="grid gap-4">
                  {nonAlcoholicCategory ? (
                    <motion.div
                      className="group relative overflow-hidden rounded-[1.3rem] border border-white/[0.08] bg-[#0a1520] p-5"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.35, delay: 0.05 }}
                      whileHover={{ y: -3 }}
                    >
                      {nonAlcoholicCategory.accentAsset ? (
                        <div className="pointer-events-none absolute bottom-3 right-3 hidden h-16 w-10 opacity-80 md:block">
                          <Image src={nonAlcoholicCategory.accentAsset} alt={nonAlcoholicCategory.title} fill unoptimized sizes="40px" className="object-contain object-bottom" />
                        </div>
                      ) : null}
                      <div className="relative flex items-center gap-3">
                        <Tv2 className="h-5 w-5 text-cyan" />
                        <h3 className="text-xl uppercase leading-[0.96] text-cream">{nonAlcoholicCategory.title}</h3>
                      </div>
                      <p className="relative mt-3 text-sm leading-6 text-cream/[0.72]">{nonAlcoholicCategory.copy}</p>
                      {nonAlcoholicCategory.items?.length ? (
                        <div className="relative mt-4 flex flex-wrap gap-2">
                          {nonAlcoholicCategory.items.map((item) => (
                            <span key={item} className="glass-chip">
                              {item}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </motion.div>
                  ) : null}

                  {seasonalCategory ? (
                    <motion.div
                      className="overflow-hidden rounded-[1.3rem] border border-white/[0.08] bg-[linear-gradient(135deg,#0a1520,#0b1a27)] p-5"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.35, delay: 0.07 }}
                      whileHover={{ y: -3 }}
                    >
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.84]">Seasonal watch</p>
                      <h3 className="mt-3 text-xl uppercase leading-[0.96] text-cream">{seasonalCategory.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-cream/[0.68]">{seasonalCategory.copy}</p>
                    </motion.div>
                  ) : null}
                </div>
              </div>

              {wineCategory ? (
                <motion.div
                  className="group relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-[#0a1520] p-5 md:p-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.35, delay: 0.09 }}
                  whileHover={{ y: -3 }}
                >
                  {wineCategory.accentAsset ? (
                    <div className="pointer-events-none absolute right-4 top-4 hidden h-16 w-14 opacity-75 md:block">
                      <Image src={wineCategory.accentAsset} alt={wineCategory.title} fill unoptimized sizes="56px" className="object-contain object-right-top" />
                    </div>
                  ) : null}
                  <div className="relative flex items-center gap-3">
                    <Tv2 className="h-5 w-5 text-cyan" />
                    <h3 className="text-2xl uppercase leading-[0.96] text-cream">{wineCategory.title}</h3>
                  </div>
                  <p className="relative mt-3 max-w-xl text-sm leading-6 text-cream/[0.72]">{wineCategory.copy}</p>
                  {wineCategory.items?.length ? (
                    <div className="relative mt-5 grid gap-2 sm:grid-cols-2">
                      {wineCategory.items.map((item) => (
                        <div key={item} className="rounded-[0.95rem] border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm font-medium text-cream/[0.82]">
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ) : null}
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.article
              id="cocktail-guide"
              className="section-shell overflow-hidden p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.04 }}
            >
              <p className="eyebrow">Coastal cocktails</p>
              <div className="mt-4 max-w-2xl">
                <h2 className="text-4xl uppercase leading-[0.94] text-cream md:text-5xl">Cocktail posters. Full scroll. No tiny throwaway cards.</h2>
                <p className="mt-4 text-base leading-7 text-cream/[0.74]">
                  The image section now uses a pinned horizontal gallery instead of cramming poster art into undersized cards. Scroll down into it, move through the full set, then drop back into the rest of the list.
                </p>
              </div>

              <PinnedCocktailGallery items={cocktails} notes={featuredCocktailNotes} />

              <div className="mt-8 rounded-[1.35rem] border border-white/[0.08] bg-[#09131d] p-5 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.84]">Full roster</p>
                    <h3 className="mt-3 text-2xl uppercase leading-[0.94] text-cream md:text-[2rem]">Everything else on the board.</h3>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-cream/[0.62]">The rest of the drink list is below, so you can see every option in one place.</p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {secondaryCocktailItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="rounded-[1.05rem] border border-white/[0.08] bg-white/[0.03] px-4 py-4"
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      whileHover={{ y: -2 }}
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

            <motion.article
              id="happy-hour-guide"
              className="section-shell overflow-hidden p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <p className="eyebrow">Happy hour</p>
                  <h2 className="mt-4 text-3xl uppercase leading-[0.94] text-cream md:text-[2.5rem]">Daily until 7pm. Enough reason to pull up early.</h2>
                  <p className="mt-4 text-base leading-7 text-cream/[0.72]">
                    This block gets a little more lift than the rest of the lower page. Drinks stay easy to read, food stays grouped, and the whole thing lands like an actual move instead of a leftover utility module.
                  </p>
                </div>
                <div className="flex items-end gap-3 md:pt-2">
                  {happyHourAssets.map((item) => (
                    <div key={item.name} className="relative h-20 w-14 opacity-78 md:h-24 md:w-16">
                      <Image src={item.image} alt={item.name} fill unoptimized sizes="64px" className="object-contain object-bottom" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href={happyHourPageHref} className="cta-primary">
                  SEE HAPPY HOUR →
                </Link>
                <div className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream/[0.62]">
                  Daily window · Drinks + food
                </div>
              </div>

              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[1.3rem] border border-white/[0.08] bg-[#0a1520] p-5">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.84]">Drink deals</p>
                  <div className="mt-4 grid gap-3">
                    {happyHourDrinkItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="rounded-[1rem] border border-white/[0.08] bg-white/[0.03] px-4 py-4"
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.32, delay: index * 0.03 }}
                        whileHover={{ y: -2 }}
                      >
                        <h3 className="text-lg uppercase leading-[0.96] text-cream">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.3rem] border border-white/[0.08] bg-[#0a1520] p-5">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.84]">Food deals</p>
                  <div className="mt-4 grid gap-3">
                    {happyHourFoodItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="rounded-[1rem] border border-white/[0.08] bg-white/[0.03] px-4 py-4"
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.32, delay: index * 0.03 }}
                        whileHover={{ y: -2 }}
                      >
                        <h3 className="text-lg uppercase leading-[0.96] text-cream">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-cream/[0.72]">{item.copy}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
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
        body="Reserve your table, bring the crew, and make Driftwoods your game day spot."
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
