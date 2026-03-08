'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock3, MapPin, Sparkles } from 'lucide-react';
import {
  afterDarkFeature,
  contactDetails,
  directionsUrl,
  drinkCards,
  foodFeature,
  foodSupport,
  footerLinks,
  heroTags,
  moodCards,
  orderUrl,
  proofCards,
  weeklyItems
} from '@/lib/site-data';
import { NeonSign } from './neon-sign';
import { SiteNav } from './site-nav';

const viewport = { once: true, amount: 0.22 };

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HomePage() {
  return (
    <main id="top" className="page-shell">
      <SiteNav />
      <HeroSection />
      <SpaceSection />
      <FoodSection />
      <AfterDarkSection />
      <DividerSection />
      <ProofSection />
      <WhatsOnSection />
      <FinalSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-10 pt-28 md:px-8 md:pb-12 md:pt-32">
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/bar%20and%20drinks/Patio%20phone.png"
          alt="Driftwoods patio with drinks and night energy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90 animate-slow-pan"
        />
      </div>
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/bar%20and%20drinks/cool%20bar.jpg"
          alt="Driftwoods bar interior with signage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90 animate-slow-pan"
        />
      </div>
      <div className="hero-vignette absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(107,231,255,0.18),transparent_34%),linear-gradient(180deg,rgba(3,8,14,0.22),rgba(3,8,14,0.76)_60%,rgba(3,8,14,0.96))]" />
      <div className="grain-overlay absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap gap-2">
            {heroTags.map((tag, index) => (
              <motion.span
                key={tag}
                className="glass-chip"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.16 + index * 0.06 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <div className="mt-8 max-w-2xl">
            <p className="eyebrow">Your neighborhood hangout after dark</p>
            <h1 className="mt-4 text-[3.5rem] uppercase leading-[0.9] tracking-[0.02em] text-cream md:text-[5.7rem] xl:text-[6.6rem]">
              Where Sunnyslope
              <span className="block text-cyan/90">meets after sunset.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-cream/[0.72] md:text-lg">
              Sports grill by day, neighborhood ritual by night. Food, drinks, patio nights,
              and the kind of atmosphere people come back for.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={orderUrl} target="_blank" className="cta-primary">
              Order Online
            </Link>
            <Link href="#food" className="cta-secondary">
              View Menu Story
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Bar pulse',
                copy: 'Cold pours, big-game crossover, and enough movement to keep the room alive.'
              },
              {
                title: 'Patio life',
                copy: 'Warm light, easy energy, and a reason to stay outside longer than planned.'
              },
              {
                title: 'Food anchor',
                copy: 'Plates strong enough to bring people in before the night takes over.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="section-shell p-5"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
                whileHover={{ y: -6, borderColor: 'rgba(107,231,255,0.24)' }}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan/80">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-cream/70">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="lg:justify-self-end">
          <NeonSign className="mx-auto max-w-[560px]" />
          <motion.div
            className="mt-5 section-shell overflow-hidden p-4"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            whileHover={{ y: -6 }}
          >
            <div className="grid grid-cols-[112px_minmax(0,1fr)] items-center gap-4">
              <div className="relative aspect-[1/1.1] overflow-hidden rounded-[1.2rem]">
                <Image
                  src="/bar%20and%20drinks/frontttt.jpg"
                  alt="Exterior arrival view of Driftwoods"
                  fill
                  sizes="112px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <p className="eyebrow">Tonight’s move</p>
                <p className="mt-2 text-2xl uppercase leading-none text-cream">A real place with a stronger signal.</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-cream/[0.62]">
                  <MapPin className="h-4 w-4 text-cyan" />
                  9832 N 7th St, Phoenix, AZ 85020
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpaceSection() {
  return (
    <section id="space" className="px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1380px]">
        <Reveal className="mb-8 max-w-3xl">
          <p className="eyebrow">One spot, four moods</p>
          <h2 className="mt-4 text-5xl uppercase leading-[0.92] text-cream md:text-6xl">
            More than a bar.
            <span className="block text-cyan/90">More than a grill.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cream/[0.66] md:text-lg">
            Driftwoods has range. Bar energy, dining comfort, patio life, and a real arrival
            moment all work together so people can come in for one thing and end up staying for
            the whole night.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {moodCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="group section-shell overflow-hidden"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="relative aspect-[1/1.18] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1280px) 50vw, 25vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="card-gradient absolute inset-0" />
                <motion.div
                  className="absolute inset-x-0 bottom-0 p-5"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 8 + index, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="eyebrow text-cyan">{card.kicker}</p>
                  <h3 className="mt-3 text-[2rem] uppercase leading-[0.92] text-cream">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.68]">{card.copy}</p>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoodSection() {
  return (
    <section id="food" className="px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto grid max-w-[1380px] gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <motion.article
          className="section-shell overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[420px] overflow-hidden">
              <Image
                src={foodFeature.image}
                alt={foodFeature.title}
                fill
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="object-cover object-center transition duration-700 hover:scale-[1.04]"
              />
              <div className="card-gradient absolute inset-0" />
            </div>
            <div className="p-6 md:p-8">
              <p className="eyebrow">{foodFeature.kicker}</p>
              <h2 className="mt-4 text-5xl uppercase leading-[0.92] text-cream md:text-6xl">
                Plates worth showing up for.
              </h2>
              <p className="mt-5 text-base leading-7 text-cream/[0.68] md:text-lg">{foodFeature.copy}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={orderUrl} target="_blank" className="cta-primary">
                  Order Online
                </Link>
                <Link href="#after-dark" className="cta-secondary">
                  See the night shift
                </Link>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {['Stacked burgers', 'Late-night bites', 'Game-day fuel'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm uppercase tracking-[0.14em] text-cream/80"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-5">
          {foodSupport.map((card, index) => (
            <motion.article
              key={card.title}
              className="section-shell grid overflow-hidden sm:grid-cols-[220px_minmax(0,1fr)]"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative min-h-[220px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="220px"
                  className="object-cover object-center transition duration-700 hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[2rem] uppercase leading-[0.94] text-cream">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/[0.66]">{card.copy}</p>
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
    <section id="after-dark" className="px-4 py-8 md:px-8 md:py-10">
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
              src={afterDarkFeature.image}
              alt={afterDarkFeature.title}
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,14,0.1),rgba(3,8,14,0.88)_78%)]" />
            <motion.div
              className="absolute inset-x-0 bottom-0 p-6 md:p-8"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="eyebrow">{afterDarkFeature.kicker}</p>
              <h2 className="mt-4 max-w-2xl text-5xl uppercase leading-[0.92] text-cream md:text-6xl">
                Where the night picks up.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-cream/70 md:text-lg">
                {afterDarkFeature.copy}
              </p>
            </motion.div>
          </div>
        </motion.article>

        <div className="grid gap-5">
          {drinkCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="section-shell overflow-hidden"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <div className="grid gap-0 sm:grid-cols-[240px_minmax(0,1fr)]">
                <div className="relative min-h-[260px] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="240px"
                    className="object-cover object-center transition duration-700 hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5 md:p-6">
                  {card.kicker ? <p className="eyebrow">{card.kicker}</p> : null}
                  <h3 className="mt-3 text-[2.3rem] uppercase leading-[0.94] text-cream">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-cream/[0.66]">{card.copy}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DividerSection() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-10">
      <motion.div
        className="mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] border border-white/10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative min-h-[420px] md:min-h-[520px]">
          <Image
            src="/bar%20and%20drinks/Sickass%20driftwood%20sign.png"
            alt="Driftwoods sign glowing at night"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,14,0.42),rgba(3,8,14,0.82)_72%,rgba(3,8,14,0.94))]" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="eyebrow">Brand punctuation</p>
            <h2 className="max-w-4xl text-5xl uppercase leading-[0.9] text-cream md:text-7xl">
              Neighborhood favorite.
              <span className="block text-rust/95">Nighttime ritual.</span>
            </h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto grid max-w-[1380px] gap-6 xl:grid-cols-[0.86fr_1.14fr]">
        <Reveal className="section-shell p-6 md:p-8">
          <p className="eyebrow">Neighborhood proof</p>
          <h2 className="mt-4 text-5xl uppercase leading-[0.92] text-cream md:text-6xl">
            A place people actually come back to.
          </h2>
          <p className="mt-5 text-base leading-7 text-cream/[0.68] md:text-lg">
            This section should feel like memory, momentum, and guest energy instead of a generic
            testimonial slider. Real snapshots do more work than polished claims ever will.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              'Guest photos and event stills work better here than polished promo graphics.',
              'Keep the layout editorial so the proof feels premium, local, and believable.',
              'Use one or two stronger review snippets later instead of flooding the page with weak testimonials.'
            ].map((line, index) => (
              <motion.div
                key={line}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-6 text-cream/[0.72]"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 8 + index * 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {line}
              </motion.div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {proofCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="section-shell overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -7 }}
            >
              <div className="relative aspect-[0.95/1.2] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1280px) 50vw, 22vw"
                  className="object-cover object-center transition duration-700 hover:scale-[1.04]"
                />
                <div className="card-gradient absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  {card.kicker ? <p className="eyebrow">{card.kicker}</p> : null}
                  <h3 className="mt-3 text-[2rem] uppercase leading-[0.94] text-cream">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-cream/[0.68]">{card.copy}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsOnSection() {
  return (
    <section id="whatson" className="px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1380px]">
        <Reveal className="mb-8 max-w-3xl">
          <p className="eyebrow">What’s going on this week</p>
          <h2 className="mt-4 text-5xl uppercase leading-[0.92] text-cream md:text-6xl">
            Come for a reason.
            <span className="block text-cyan/90">Stay for the night.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cream/[0.68] md:text-lg">
            This grid is built to stay fresh without redesign work. Swap in game-day pull, patio
            nights, music, specials, and whatever the room is pushing right now.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {weeklyItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="section-shell relative overflow-hidden p-5 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, borderColor: 'rgba(107,231,255,0.28)' }}
            >
              <motion.div
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-white/0 via-cyan/80 to-white/0"
                animate={{ opacity: [0.3, 0.9, 0.3], scaleX: [0.86, 1, 0.86] }}
                transition={{ duration: 4.5 + index, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.86]">
                {item.label}
              </div>
              <h3 className="mt-5 text-[2.15rem] uppercase leading-[0.92] text-cream">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-cream/[0.68]">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalSection() {
  return (
    <section id="findus" className="px-4 py-8 md:px-8 md:py-10">
      <motion.div
        className="mx-auto overflow-hidden rounded-[2rem] border border-white/10 max-w-[1380px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative min-h-[680px]">
          <Image
            src="/bar%20and%20drinks/frontttt.jpg"
            alt="Driftwoods exterior at night"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,14,0.4),rgba(3,8,14,0.88)_72%,rgba(3,8,14,0.95))]" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="max-w-3xl">
              <p className="eyebrow">See you tonight</p>
              <h2 className="mt-4 text-5xl uppercase leading-[0.9] text-cream md:text-7xl">
                Food. Drinks. Patio. Night energy.
                <span className="block text-cyan/90">All in one spot.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-cream/[0.68] md:text-lg">
                Pull up to Driftwoods for the food anchor, stay because the room knows how to carry
                the rest of the night.
              </p>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {[
                {
                  icon: MapPin,
                  label: 'Address',
                  value: contactDetails.address,
                  detail: contactDetails.neighborhood
                },
                {
                  icon: Clock3,
                  label: 'Hours',
                  value: contactDetails.hoursPrimary,
                  detail: contactDetails.hoursSecondary
                },
                {
                  icon: CalendarDays,
                  label: 'Order',
                  value: 'Toast pickup and delivery',
                  detail: 'Every order button routes to your Toast flow.'
                },
                {
                  icon: Sparkles,
                  label: 'Signal',
                  value: 'Same business. New era.',
                  detail: 'A stronger public identity built to drive more people through the door.'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="section-shell p-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ y: -6 }}
                  >
                    <Icon className="h-5 w-5 text-cyan" />
                    <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan/80">
                      {item.label}
                    </p>
                    <p className="mt-3 text-2xl uppercase leading-[0.96] text-cream">{item.value}</p>
                    <p className="mt-3 text-sm leading-6 text-cream/[0.64]">{item.detail}</p>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={orderUrl} target="_blank" className="cta-primary">
                Order Online
              </Link>
              <Link href={directionsUrl} target="_blank" className="cta-secondary">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-10 pt-4 md:px-8 md:pb-12">
      <div className="mx-auto flex max-w-[1380px] flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-5 shadow-panel backdrop-blur-sm md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <div className="text-2xl uppercase tracking-[0.08em] text-cream">Driftwoods</div>
          <div className="mt-2 text-sm text-cream/[0.58]">Sunnyslope’s neighborhood hangout after dark.</div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm uppercase tracking-[0.16em] text-cream/[0.68]">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} className="footer-link">
              {link.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
