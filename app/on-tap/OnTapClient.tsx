// /home/Dirty-Drift/app/on-tap/OnTapClient.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tv2 } from 'lucide-react';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import DriftwoodsTapSection from '@/components/driftwoods/driftwoodsTapSection';
import { TAP_ASSETS } from '@/lib/driftwoods-taps';

// ==========================================
// PAGE STATE MACHINE
// ==========================================
type PageState = 'intro' | 'interactive';
type IntroPhase = 'loading' | 'camera' | 'done';

// ==========================================
// CINEMATIC INTRO
// ==========================================
function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<IntroPhase>('loading');
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const skip = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    onComplete();
  }, [onComplete]);

  // Move from loading → camera after 1.4s
  useEffect(() => {
    const timer = setTimeout(() => setPhase('camera'), 1400);
    return () => clearTimeout(timer);
  }, []);

  // Run GSAP camera animation
  useEffect(() => {
    if (phase !== 'camera' || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      onComplete: () => {
        setPhase('done');
        setTimeout(onComplete, 180);
      },
    });
    timelineRef.current = tl;

    const container = containerRef.current;
    const backdrop = container.querySelector('[data-intro-backdrop]') as HTMLElement;
    const system = container.querySelector('[data-intro-system]') as HTMLElement;
    const glow = container.querySelector('[data-intro-glow]') as HTMLElement;
    const title = container.querySelector('[data-intro-title]') as HTMLElement;
    const subtitle = container.querySelector('[data-intro-subtitle]') as HTMLElement;
    const vignette = container.querySelector('[data-intro-vignette]') as HTMLElement;

    // Initial states
    tl.set(backdrop, { scale: 3.2, filter: 'blur(28px)', opacity: 0 })
      .set(system, { scale: 2.8, y: '40%', filter: 'blur(24px)', opacity: 0 })
      .set(glow, { opacity: 0, scale: 0.5 })
      .set(title, { opacity: 0, y: 40, scale: 1.15 })
      .set(subtitle, { opacity: 0, y: 20 })
      .set(vignette, { opacity: 0 });

    // Phase 1: Title reveal with cinematic bloom
    tl.to(title, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }, 0.1)
      .to(subtitle, { opacity: 0.7, y: 0, duration: 0.6, ease: 'power2.out' }, 0.4)
      .to(vignette, { opacity: 1, duration: 0.8, ease: 'power1.in' }, 0.2);

    // Phase 2: Camera push — backdrop and system zoom in with depth-of-field
    tl.to(backdrop, { opacity: 0.16, scale: 1.5, filter: 'blur(5px)', duration: 2.2, ease: 'power2.inOut' }, 0.9)
      .to(system, { opacity: 0.55, scale: 1.1, y: '-5%', filter: 'blur(2px)', duration: 2.4, ease: 'power2.inOut' }, 1.1)
      .to(glow, { opacity: 0.85, scale: 1.3, duration: 1.6, ease: 'power1.inOut' }, 1.3);

    // Phase 3: Title fades out, camera settles front-facing
    tl.to(title, { opacity: 0, y: -30, duration: 0.6, ease: 'power2.in' }, 2.4)
      .to(subtitle, { opacity: 0, y: -15, duration: 0.5, ease: 'power2.in' }, 2.5)
      .to(system, { opacity: 0.1, scale: 1, y: '0%', filter: 'blur(0px)', duration: 1.0, ease: 'power2.out' }, 2.8)
      .to(backdrop, { opacity: 0, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' }, 3.0);

    // Phase 4: Entire overlay dissolves
    tl.to(container, { opacity: 0, duration: 0.5, ease: 'power2.out' }, 3.6);

    return () => {
      tl.kill();
    };
  }, [phase, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 40%, #12100e 0%, #060504 50%, #000 100%)',
      }}
    >
      {/* Cinematic vignette */}
      <div
        data-intro-vignette
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Ambient bar atmosphere backdrop */}
      <div
        data-intro-backdrop
        className="absolute inset-0 opacity-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(255,179,71,0.18) 0%, transparent 50%), radial-gradient(ellipse at 30% 70%, rgba(255,132,0,0.1) 0%, transparent 40%), radial-gradient(ellipse at 70% 60%, rgba(107,231,255,0.06) 0%, transparent 35%)',
        }}
      />

      {/* Tap system silhouette — camera target */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        data-intro-system
        src={TAP_ASSETS.system.png}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute w-[80vw] max-w-[900px] opacity-0"
        style={{ objectFit: 'contain' }}
      />

      {/* Center ambient glow */}
      <div
        data-intro-glow
        className="pointer-events-none absolute h-[50vh] w-[50vw] rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,176,62,0.35) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Title overlay */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h2
          data-intro-title
          className="text-5xl font-bold uppercase tracking-[0.08em] text-[#fff8ec] opacity-0 md:text-7xl"
          style={{ fontFamily: 'var(--font-display), Impact, sans-serif', textShadow: '0 4px 40px rgba(255,176,62,0.3)' }}
        >
          Driftwoods on Tap
        </h2>
        <p
          data-intro-subtitle
          className="text-sm uppercase tracking-[0.28em] text-[#ffd39a] opacity-0 md:text-base"
        >
          12 handles · Live pours · Interactive
        </p>
      </div>

      {/* Loading bar (loading phase only) */}
      <AnimatePresence>
        {phase === 'loading' ? (
          <motion.div
            className="absolute bottom-[15%] flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/[0.08]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ffd39a]/60">
              Entering tap room
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Skip button — always available */}
      <button
        type="button"
        onClick={skip}
        className="absolute bottom-8 right-8 z-20 rounded-full border border-white/[0.12] bg-white/[0.06] px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-[#ffd39a]/70 backdrop-blur-sm transition duration-200 hover:bg-white/[0.1] hover:text-[#ffd39a]"
      >
        Skip intro
      </button>
    </div>
  );
}

// ==========================================
// 1. DATA RENDERED DIRECTLY IN FILE
// ==========================================
const cocktails = [
  { name: 'Beachside Old Fashioned', build: 'Signature Build', accent: 'amber', asset: '/alcohol%20served/production%20cocktail/BEACHSIDE%20OLD%20FASHIONED.svg' },
  { name: 'Bechalada', build: 'Signature Build', accent: 'rose', asset: '/alcohol%20served/production%20cocktail/BECHALADA.svg' },
  { name: 'Bourbon Island Elixir', build: 'Signature Build', accent: 'amber', asset: '/alcohol%20served/production%20cocktail/BOURBON%20ISLAND%20ELIXER.svg' },
  { name: 'Coastal Collins', build: 'Signature Build', accent: 'cyan', asset: '/alcohol%20served/production%20cocktail/COASTAL%20COLLINS.svg' },
  { name: 'Crimson Peach', build: 'Signature Build', accent: 'rose', asset: '/alcohol%20served/production%20cocktail/CRIMSON%20PEACH.svg' },
  { name: 'Crystal Coastline', build: 'Signature Build', accent: 'ice', asset: '/alcohol%20served/production%20cocktail/CRYSTAL%20COASTLINE.svg' },
  { name: 'Island Mule', build: 'Signature Build', accent: 'mint', asset: '/alcohol%20served/production%20cocktail/ISLAND%20MULE.svg' },
  { name: 'Lavender Lagoon', build: 'Signature Build', accent: 'violet', asset: '/alcohol%20served/production%20cocktail/LAVENDER%20LAGOON.svg' },
  { name: 'Mirror Margarita', build: 'Signature Build', accent: 'ice', asset: '/alcohol%20served/production%20cocktail/MIRROR%20MARGARITA.svg' },
  { name: 'Paradise Pucker Up', build: 'Signature Build', accent: 'yellow', asset: '/alcohol%20served/production%20cocktail/PARADISE%20PUCKER%20UP.svg' },
  { name: 'Purple Microdot', build: 'Signature Build', accent: 'violet', asset: '/alcohol%20served/production%20cocktail/PURPLE%20MICRODOT.svg' },
  { name: 'Seaside Sprig', build: 'Signature Build', accent: 'mint', asset: '/alcohol%20served/production%20cocktail/SEASIDE%20SPRIG.svg' },
  { name: 'Surfside Sipper', build: 'Signature Build', accent: 'cyan', asset: '/alcohol%20served/production%20cocktail/SURFSIDE%20SIPPER.svg' },
  { name: 'Tai-Me Up', build: 'Signature Build', accent: 'amber', asset: '/alcohol%20served/production%20cocktail/TAI-ME%20UP.svg' }
];

const tapCategories = [
  {
    title: 'On Tap Now',
    copy: 'Ice cold drafts flowing constantly.',
    items: [
      '805 Blonde', 'Big Blue Van', 'Coors Light', 'Dos Equis XX',
      'Guinness', 'Hazy Little Thing IPA', 'Lagunitas IPA',
      'Michelob Ultra', 'Modelo', 'Pizza Port California Honey',
      'Voodoo Ranger Juicy Haze IPA', 'WOW Wheat Four Peaks'
    ],
    assetCluster: [
      '/tap/805%20Blonde.svg',
      '/tap/Guinness.svg',
      '/tap/Modelo.svg',
      '/tap/Voodoo%20Ranger%20Juicy%20Haze%20IPA.svg'
    ]
  },
  {
    title: 'Bottles & Cans',
    copy: 'The neighborhood classics, ready to crack open.',
    items: [
      'Bud Light', 'Coors Light', 'Corona', 'Ginger Beer',
      'Heineken', 'Kilt Lifter', 'Michelob Ultra', 'Miller Lite',
      'Modelo', 'Stella Artois', 'Twisted Tea', 'White Claw'
    ],
    assetCluster: [
      '/alcohol%20served/bottles%20and%20cans/corona.svg',
      '/alcohol%20served/bottles%20and%20cans/Stella%20Artois.svg'
    ]
  },
  {
    title: 'Wine List',
    copy: 'Reds, whites, and bubbles.',
    items: [
      'Cabernet', 'Cava', 'Champagne', 'Chardonnay',
      'Merlot', 'Muscato', 'Pinot Grigio', 'Pinot Noir',
      'Prosecco', 'Red Blend', 'Rosé', 'Sauvignon Blanc'
    ],
    accentAsset: '/wine/just%20a%20wine%20glass.svg'
  },
  {
    title: 'Non-Alcoholic Beer',
    copy: 'Zero proof, full flavor.',
    items: ['Heineken 0.0 Zero', 'Michelob Ultra Zero'],
    accentAsset: null
  }
];

const viewport = { once: true, amount: 0.18 };

const cocktailAccentBackgrounds: Record<string, string> = {
  amber: 'rgba(255, 153, 84, 0.22)',
  cyan: 'rgba(107, 231, 255, 0.22)',
  violet: 'rgba(180, 126, 255, 0.22)',
  rose: 'rgba(255, 124, 160, 0.22)',
  mint: 'rgba(104, 255, 198, 0.2)',
  ice: 'rgba(186, 228, 255, 0.2)',
  yellow: 'rgba(255, 219, 111, 0.2)'
};

// ==========================================
// 2. COCKTAIL CARD COMPONENT
// ==========================================
function CocktailCard({
  item,
  className = ''
}: {
  item: (typeof cocktails)[number];
  className?: string;
}) {
  return (
    <article className={`group relative overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#0a1520] ${className}`}>
      <div
        className="absolute inset-0 opacity-90 transition duration-500 group-hover:scale-[1.03]"
        style={{
          background: `linear-gradient(180deg, rgba(4,10,17,0.12) 0%, rgba(4,10,17,0.82) 84%), radial-gradient(circle at 78% 14%, ${
            cocktailAccentBackgrounds[item.accent || 'cyan'] || cocktailAccentBackgrounds.cyan
          }, transparent 34%)`
        }}
      />
      {item.asset ? (
        <div className="absolute inset-0 p-8">
          <Image
            src={item.asset}
            alt={item.name}
            fill
            unoptimized
            sizes="(min-width: 1280px) 300px, (min-width: 1024px) 280px, (min-width: 768px) 42vw, 78vw"
            className="object-contain object-center transition duration-500 group-hover:scale-[1.04]"
          />
        </div>
      ) : null}
      <div className="absolute bottom-6 left-6 right-6">
        <h4 className="text-2xl font-bold uppercase text-cream">{item.name}</h4>
        <p className="mt-1 text-sm text-cyan">{item.build}</p>
      </div>
    </article>
  );
}

// ==========================================
// 3. MOBILE CHIP ROW
// ==========================================
function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="mt-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-2 sm:overflow-visible" data-lenis-prevent style={{ touchAction: 'pan-x' }}>
      <div className="flex w-max gap-2 pr-3 sm:w-auto sm:flex-wrap sm:pr-0">
        {items.map((item) => (
          <span key={item} className="glass-chip shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 4. GSAP PINNED GALLERY COMPONENT
// ==========================================
function PinnedCocktailGallery({
  id,
  items
}: {
  id: string;
  items: typeof cocktails;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop || !sectionRef.current || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = trackRef.current!;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        return Math.max(0, trackWidth - viewportWidth);
      };

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1.1,
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop, items]);

  return (
    <div id={id} className="scroll-mt-32 md:scroll-mt-36">
      {/* MOBILE FALLBACK */}
      <section className="section-shell overflow-hidden p-5 md:p-6 lg:hidden">
        <div className="max-w-3xl">
          <p className="eyebrow">Coastal cocktails</p>
          <h2 className="mt-4 text-4xl uppercase leading-[0.94] text-cream md:text-5xl">The full cocktail lineup.</h2>
          <p className="mt-4 text-sm leading-6 text-cream/[0.68]">Swipe through the cocktail wall.</p>
        </div>
        <div className="mt-6 overflow-x-auto overflow-y-hidden overscroll-x-contain" data-lenis-prevent style={{ touchAction: 'pan-x' }}>
          <div className="flex w-max gap-4 pb-4 pr-5 md:gap-6">
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

      {/* DESKTOP PINNED GALLERY */}
      <section ref={sectionRef} className="relative hidden w-full h-screen bg-[#040b13] overflow-hidden lg:flex flex-col justify-center">
        <div className="mx-auto w-full max-w-[1380px] mb-12 flex items-end justify-between gap-6 px-8 xl:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow text-cyan tracking-widest">Coastal cocktails</p>
            <h2 className="mt-4 text-5xl uppercase leading-[0.94] text-cream">The full cocktail lineup.</h2>
            <p className="mt-4 text-lg leading-6 text-cream/[0.68]">
              Keep scrolling. The gallery locks in and slides horizontally.
            </p>
          </div>
          <div className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream/[0.62]">
            Pinned horizontal gallery
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div ref={trackRef} className="flex h-[55vh] min-h-[400px] w-max items-stretch gap-6 px-8 xl:px-12">
            {items.map((item) => (
              <CocktailCard
                key={item.name}
                item={item}
                className="aspect-[3/4] h-full w-[320px] shrink-0 xl:w-[380px]"
              />
            ))}
            <div className="w-4 shrink-0 xl:w-8" />
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// 5. TAP CATEGORY CARDS
// ==========================================
function TapCategoryCards() {
  const primaryCategory = tapCategories[0];
  const bottleCategory = tapCategories[1];
  const wineCategory = tapCategories[2];
  const nonAlcoholicCategory = tapCategories[3];

  return (
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
                  <div key={asset} className="relative h-16 w-14 opacity-[0.72] transition duration-300 group-hover:-translate-y-1 group-hover:opacity-95">
                    <Image src={asset} alt="Tap asset" fill unoptimized sizes="56px" className="object-contain object-bottom" />
                  </div>
                ))}
              </div>
            ) : null}
            {primaryCategory.items ? <ChipRow items={primaryCategory.items} /> : null}
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
                    <div key={asset} className="relative h-12 w-10 opacity-[0.72] transition duration-300 group-hover:-translate-y-1 group-hover:opacity-95">
                      <Image src={asset} alt="Bottle asset" fill unoptimized sizes="40px" className="object-contain object-bottom" />
                    </div>
                  ))}
                </div>
              ) : null}
              {bottleCategory.items ? <ChipRow items={bottleCategory.items} /> : null}
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
              {(wineCategory as { accentAsset?: string }).accentAsset ? (
                <div className="pointer-events-none absolute right-6 top-6 h-16 w-12 opacity-40">
                  <Image src={(wineCategory as { accentAsset: string }).accentAsset} alt="Wine glass" fill unoptimized sizes="48px" className="object-contain object-right-top" />
                </div>
              ) : null}
              {wineCategory.items ? <ChipRow items={wineCategory.items} /> : null}
            </div>
          ) : null}

          {nonAlcoholicCategory ? (
            <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#09131d] p-6">
              <div className="flex items-center gap-3">
                <Tv2 className="h-5 w-5 text-cyan" />
                <h3 className="text-xl uppercase leading-[0.94] text-cream">{nonAlcoholicCategory.title}</h3>
              </div>
              <p className="mt-2 text-sm text-cream/[0.72]">{nonAlcoholicCategory.copy}</p>
              {nonAlcoholicCategory.items ? <ChipRow items={nonAlcoholicCategory.items} /> : null}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

// ==========================================
// 6. COCKTAIL TEXT LIST
// ==========================================
function CocktailTextList() {
  return (
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
  );
}

// ==========================================
// 7. MAIN CLIENT EXPORT
// ==========================================
export function OnTapClient() {
  const [pageState, setPageState] = useState<PageState>('intro');

  const handleIntroComplete = useCallback(() => {
    setPageState('interactive');
  }, []);

  return (
    <>
      {/* Cinematic intro overlay */}
      <AnimatePresence>
        {pageState === 'intro' && (
          <CinematicIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Main page content — renders underneath intro, revealed when intro completes */}
      <main className="page-shell min-h-screen w-full max-w-[100vw] overflow-x-hidden">
        <SiteNav />

        {/* Interactive tap system — the cinematic destination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={pageState === 'interactive' ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <DriftwoodsTapSection />
        </motion.div>

        {/* Hero banner below tap system */}
        <section className="px-4 pb-6 pt-10 md:px-8 md:pb-8 md:pt-14">
          <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[2.15rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(107,231,255,0.12),transparent_24%),radial-gradient(circle_at_82%_62%,rgba(255,97,56,0.12),transparent_18%)]" />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-w-4xl"
            >
              <p className="eyebrow">THE DRIFTWOODS BAR</p>
              <h1 className="mt-4 text-5xl uppercase leading-[0.9] text-cream md:text-7xl">SEE WHAT&apos;S ON TAP.</h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-cream/[0.74] md:text-lg">
                Drafts, bottles, cans, wine, and our signature cocktails. If it&apos;s behind the bar, it&apos;s listed here.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/order" className="cta-primary">
                  ORDER ONLINE →
                </Link>
                <Link href="#cocktail-gallery" className="cta-secondary">
                  VIEW COCKTAILS →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories, cocktail gallery, text list */}
        <section className="px-4 py-8 md:px-8 md:py-10">
          <div className="mx-auto grid max-w-[1380px] gap-6">
            <TapCategoryCards />
            <PinnedCocktailGallery id="cocktail-gallery" items={cocktails} />
            <CocktailTextList />
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
