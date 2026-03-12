'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Transition } from 'framer-motion';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { SiteNav } from './site-nav';
import { SiteFooter } from './site-footer';
import {
  barCards,
  closeCards,
  eventsPageHref,
  facebookUrl,
  foodCards,
  googleReviewsUrl,
  happyHourPageHref,
  heroCards,
  instagramUrl,
  mapsPlaceUrl,
  menuPageHref,
  onTapPageHref,
  orderPageHref,
  testimonials,
  yelpUrl
} from '@/lib/production-site-data';

const viewport = { once: true, amount: 0.2 };

const heroSpring: Transition = {
  type: 'spring',
  stiffness: 86,
  damping: 18,
  mass: 1.08
};

const revealSpring: Transition = {
  type: 'spring',
  stiffness: 78,
  damping: 16,
  mass: 1.1
};

const cardSpring: Transition = {
  type: 'spring',
  stiffness: 118,
  damping: 18,
  mass: 0.94
};

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={revealSpring}
    >
      {children}
    </motion.div>
  );
}

export function ProductionHomePage() {
  const pageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!pageRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger, CustomEase);

    CustomEase.create('driftWeightOut', 'M0,0 C0.22,1 0.36,1 1,1');
    CustomEase.create('driftWeightInOut', 'M0,0 C0.45,0 0.2,1 1,1');

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-gsap-section="hero"]',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1
        }
      });

      heroTimeline
        .to('[data-gsap-hero-bg]', { yPercent: 12, scale: 1.06, ease: 'none' }, 0)
        .to('[data-gsap-hero-copy]', { yPercent: -8, opacity: 0.92, ease: 'none' }, 0)
        .to('[data-gsap-hero-sign]', { yPercent: -14, rotate: -1.2, ease: 'none' }, 0);

      const sections = gsap.utils.toArray<HTMLElement>('[data-gsap-reveal]');

      sections.forEach((section) => {
        const headline = section.querySelector<HTMLElement>('[data-gsap-headline]');
        const copy = section.querySelector<HTMLElement>('[data-gsap-copy]');
        const cta = section.querySelector<HTMLElement>('[data-gsap-cta]');

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 74%',
            end: 'top 44%',
            toggleActions: 'play none none reverse'
          }
        });

        if (headline) {
          timeline.fromTo(
            headline,
            { y: 36, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8, ease: 'driftWeightOut' }
          );
        }

        if (copy) {
          timeline.fromTo(
            copy,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.64, ease: 'driftWeightInOut' },
            '-=0.44'
          );
        }

        if (cta) {
          timeline.fromTo(
            cta,
            { y: 16, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.56, ease: 'driftWeightOut' },
            '-=0.3'
          );
        }
      });
    }, pageRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <main id="top" className="page-shell" ref={pageRef}>
      <SiteNav />
      <HeroSection />
      <LastBarSection />
      <FoodSection />
      <AfterDarkSection />
      <BarSection />
      <NeighborhoodSection />
      <SocialProofSection />
      <CloseSection />
      <SiteFooter />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-12 pt-28 md:px-8 md:pb-14 md:pt-32" data-gsap-section="hero">
      <div className="absolute inset-0 hidden md:block" data-gsap-hero-bg>
        <Image
          src="/bar%20and%20drinks/Patio%20phone.png"
          alt="Driftwoods patio at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90 animate-slow-pan"
        />
      </div>
      <div className="absolute inset-0 md:hidden" data-gsap-hero-bg>
        <Image
          src="/bar%20and%20drinks/cool%20bar.jpg"
          alt="Driftwoods bar interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90 animate-slow-pan"
        />
      </div>
      <div className="hero-vignette absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(107,231,255,0.16),transparent_32%),linear-gradient(180deg,rgba(3,8,14,0.22),rgba(3,8,14,0.78)_58%,rgba(3,8,14,0.96))]" />
      <div className="grain-overlay absolute inset-0 opacity-40" />
      <div className="relative z-20 mx-auto flex w-full max-w-[1380px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={heroSpring}
          className="relative w-full shrink-0 lg:w-1/2 max-w-2xl"
          data-gsap-hero-copy
        >
          <div className="mt-8 w-full">
            <h1 className="mt-4 w-full text-[3.2rem] uppercase leading-[0.9] tracking-[0.02em] text-cream md:text-[5.2rem] xl:text-[6.35rem]">
              SUNNYSLOPE’S LOUDEST SECRET HAS AN ADDRESS.
            </h1>
            <p className="mt-6 w-full text-lg leading-8 text-cream/[0.82] md:text-xl">
              <Link href={mapsPlaceUrl} target="_blank" className="underline decoration-cyan/60 underline-offset-4 transition duration-300 hover:text-cyan">
                9832 N 7th Street.
              </Link>{' '}
              Three patios. A 60-ft LED wall. A kitchen that doesn't cut corners. Now you know.
            </p>
            <p className="mt-6 w-full text-base leading-7 text-cream/[0.74] md:text-lg">
              We built Driftwoods for the nights that deserve more than "whatever's closest." Sports on screens big enough to matter, food made from scratch, and patios that keep the night moving. These are Sunnyslope’s tables. Grab a chair and join the Drift. The tide’s already rolling in.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={orderPageHref} className="cta-primary">
              ORDER ONLINE →
            </Link>
            <Link href={onTapPageHref} className="cta-secondary">
              SEE WHAT'S ON TAP →
            </Link>
          </div>

          <Link
            href={googleReviewsUrl}
            target="_blank"
            className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-cream/[0.72] transition duration-300 hover:text-cyan"
          >
            4.7 on Google · 280+ reviews →
          </Link>
        </motion.div>

        <div className="relative w-full shrink-0 lg:w-1/2 lg:pt-16 xl:pt-20" data-gsap-hero-sign>
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={heroSpring}
            className="relative ml-auto aspect-[1.95/1] w-full max-w-[980px]"
          >
            <Image
              src="/official%20logos/Hero,%20hero!.svg"
              alt="Driftwoods sign"
              fill
              priority
              sizes="(max-width: 1024px) 86vw, 980px"
              className="object-contain object-right opacity-[0.99] drop-shadow-[0_0_42px_rgba(255,97,56,0.38)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LastBarSection() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-10" data-gsap-reveal>
      <div className="mx-auto max-w-[1380px]">
        <Reveal className="mb-8 max-w-4xl">
          <h2 className="mt-4 text-5xl uppercase leading-[0.92] text-cream md:text-6xl xl:text-7xl" data-gsap-headline>
            THE LAST BAR YOU TRY IN SUNNYSLOPE.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {heroCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="group section-shell overflow-hidden"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...cardSpring, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative aspect-[1/1.16] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1280px) 50vw, 25vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="card-gradient absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan/[0.82]">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.74]">{card.copy}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-gsap-cta>
          <Link href={orderPageHref} className="cta-primary">
            ORDER ONLINE →
          </Link>
          <Link href={menuPageHref} className="cta-secondary">
            VIEW OUR MENU →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FoodSection() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-10" id="food" data-gsap-reveal>
      <div className="mx-auto grid max-w-[1380px] gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <motion.article
          className="section-shell overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[440px] overflow-hidden">
              <Image
                src="/food/Pacos and margaritas.png"
                alt="Driftwoods food spread"
                fill
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="object-cover object-center transition duration-700 hover:scale-[1.04]"
              />
              <div className="card-gradient absolute inset-0" />
            </div>
            <div className="p-6 md:p-8">
              <h2 className="mt-4 text-5xl uppercase leading-[0.92] text-cream md:text-6xl" data-gsap-headline>
                YOUR FIRST BITE CHANGES ALL PLANS.
              </h2>
              <p className="mt-5 text-lg italic leading-8 text-cream/[0.78]" data-gsap-copy>
                You might come in for a beer, but the food is what keeps your table there another round.
              </p>
              <p className="mt-5 text-base leading-7 text-cream/[0.74] md:text-lg">
                Our menu runs deep — Hawaiian-American favorites, tacos, pizza, and scratch-made dishes across the board. Highlights include Huli Huli Chicken, a Shrimp Po'Boy, the signature Driftwoods Burger, and loaded nachos topped with house cheese fondue and cilantro-lime crema. No lazy freezer-first menu — you will definitely notice the quality difference.
              </p>
              <div className="mt-7" data-gsap-cta>
                <Link href={menuPageHref} className="cta-primary">
                  SEE THE FULL MENU →
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-5">
          {foodCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="section-shell grid overflow-hidden sm:grid-cols-[220px_minmax(0,1fr)]"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ ...cardSpring, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative min-h-[220px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="220px"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan/[0.82]">
                  {card.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-cream/[0.74]">{card.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AfterDarkSection() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-10" id="after-dark" data-gsap-reveal>
      <div className="mx-auto grid max-w-[1380px] gap-6 xl:grid-cols-[1fr_0.9fr]">
        <motion.article
          className="section-shell overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative min-h-[620px]">
            <Image
              src="/bar%20and%20drinks/Patio%20phone.png"
              alt="Driftwoods patio after dark"
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,14,0.12),rgba(3,8,14,0.9)_78%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h2 className="mt-4 max-w-2xl text-5xl uppercase leading-[0.92] text-cream md:text-6xl" data-gsap-headline>
                SOME NIGHTS YOU JUST NEED A PLACE TO LAND.
                <span className="block text-cyan">THIS IS THAT PLACE.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-cream/[0.74] md:text-lg" data-gsap-copy>
                Late night at Driftwoods has its own rhythm. No velvet ropes, no attitude, no reason to be anywhere else. The patios are rockin', the drinks are cold, and the LED wall is locked on whatever game matters tonight. The room doesn't clear out early here — it gets better as the night goes on. Weekends the music turns up and the crowd follows. Just walk in. We'll handle the rest.
              </p>
              <div className="mt-7" data-gsap-cta>
                <Link href={eventsPageHref} className="cta-primary">
                  SEE THIS WEEK'S EVENTS →
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-5">
          {[
            {
              image: '/bar%20and%20drinks/cool%20bar.jpg',
              title: 'SCREENS THAT CHANGE THE ROOM',
              copy: '25+ HDTVs and a 60-ft indoor LED wall give the game the kind of scale it should have.'
            },
            {
              image: '/bar%20and%20drinks/Drink%20vibes.png',
              title: 'COLD DRINKS. NO DEAD AIR.',
              copy: 'The drinks keep moving, the patio keeps breathing, and the room never feels like it shut down early.'
            },
            {
              image: '/bar%20and%20drinks/cheers.png',
              title: 'WEEKENDS PICK UP FAST',
              copy: 'When the music turns up and the crowd follows, Driftwoods feels like the place you meant to end up all along.'
            }
          ].map((card, index) => (
            <motion.article
              key={card.title}
              className="section-shell overflow-hidden"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ ...cardSpring, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <div className="grid gap-0 sm:grid-cols-[220px_minmax(0,1fr)]">
                <div className="relative min-h-[220px] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="220px"
                    className="object-cover object-center transition duration-700 hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan/[0.82]">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.74]">{card.copy}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BarSection() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-10" data-gsap-reveal>
      <div className="mx-auto max-w-[1380px]">
        <Reveal className="mb-8 max-w-4xl">
          <h2 className="mt-4 text-5xl uppercase leading-[0.92] text-cream md:text-6xl xl:text-7xl" data-gsap-headline>
            WE TAKE THE BAR SERIOUSLY. HAPPY HOUR IS DAILY UNTIL 7PM.
          </h2>
          <p className="mt-5 max-w-4xl text-lg italic leading-8 text-cream/[0.78]" data-gsap-copy>
            Happy hour runs daily until 7. Our cocktails are built with intention. Our beer list rotates the way it should. We take the bar seriously because that's half the reason people come back.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {barCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="section-shell overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...cardSpring, delay: index * 0.06 }}
              whileHover={{ y: -7 }}
            >
              <div className="relative aspect-[1/1.08] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-center transition duration-700 hover:scale-[1.04]"
                />
                <div className="card-gradient absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan/[0.82]">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.74]">{card.copy}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-gsap-cta>
          <Link href={onTapPageHref} className="cta-primary">
            SEE WHAT'S ON TAP →
          </Link>
          <Link href={happyHourPageHref} className="cta-secondary">
            HAPPY HOUR DETAILS →
          </Link>
        </div>
      </div>
    </section>
  );
}

function NeighborhoodSection() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-10" data-gsap-reveal>
      <motion.div
        className="mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] border border-white/10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative min-h-[500px] md:min-h-[560px]">
          <Image
            src="/bar%20and%20drinks/Sickass%20driftwood%20sign.png"
            alt="Driftwoods sign"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,14,0.28),rgba(3,8,14,0.88)_72%,rgba(3,8,14,0.96))]" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <h2 className="max-w-5xl text-5xl uppercase leading-[0.9] text-cream md:text-7xl" data-gsap-headline>
              NEIGHBORHOOD FAVORITE.
              <span className="block text-rust/95">NIGHTTIME RITUAL.</span>
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-cream/[0.76] md:text-lg" data-gsap-copy>
              We're not a chain. We're not a concept. We're a bar on 7th Street in Sunnyslope built by people who live here and plan to stay. If you're from this neighborhood, this is your spot. If you're not — now you've got a reason to come north.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-cream/[0.7] md:text-lg" data-gsap-copy>
              Big enough screens to matter. A kitchen strong enough to anchor the night. Patios good enough to keep people from leaving when they said they would. We're not trying to be a one-time stop. We're building the spot people default to.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-gsap-cta>
              <Link href={instagramUrl} target="_blank" className="cta-primary">
                INSTAGRAM →
              </Link>
              <Link href={facebookUrl} target="_blank" className="cta-secondary">
                FACEBOOK →
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-10" data-gsap-reveal>
      <div className="mx-auto max-w-[1380px]">
        <Reveal className="mb-8 max-w-4xl">
          <h2 className="mt-4 text-5xl uppercase leading-[0.92] text-cream md:text-6xl xl:text-7xl" data-gsap-headline>
            DON’T TAKE OUR WORD FOR IT. TAKE THEIRS.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.quote}
              className="section-shell overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...cardSpring, delay: index * 0.06 }}
              whileHover={{ y: -7 }}
            >
              <div className="relative aspect-[0.98/1.18] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.attribution}
                  fill
                  sizes="(max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-center transition duration-700 hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,14,0.08),rgba(3,8,14,0.86)_72%,rgba(3,8,14,0.96))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-base leading-7 text-cream/[0.84]">{item.quote}</p>
                  <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan/[0.82]">
                    — {item.attribution}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-gsap-cta>
          <Link href={yelpUrl} target="_blank" className="cta-primary">
            READ MORE ON YELP →
          </Link>
          <Link href={googleReviewsUrl} target="_blank" className="cta-secondary">
            READ MORE ON GOOGLE →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CloseSection() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-10" id="findus" data-gsap-reveal>
      <motion.div
        className="mx-auto overflow-hidden rounded-[2rem] border border-white/10 max-w-[1380px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative min-h-[700px]">
          <Image
            src="/bar%20and%20drinks/frontttt.jpg"
            alt="Driftwoods exterior"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,14,0.34),rgba(3,8,14,0.88)_72%,rgba(3,8,14,0.96))]" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="max-w-4xl">
              <h2 className="mt-4 text-5xl uppercase leading-[0.9] text-cream md:text-7xl" data-gsap-headline>
                YOUR NEXT NIGHT OUT ALREADY HAS AN ADDRESS.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-4" data-gsap-cta>
              {closeCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="section-shell p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ ...cardSpring, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan/[0.82]">
                    {card.title}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-cream/[0.78]">{card.copy}</p>
                  <Link
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan transition duration-300 hover:translate-x-1"
                  >
                    {card.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
