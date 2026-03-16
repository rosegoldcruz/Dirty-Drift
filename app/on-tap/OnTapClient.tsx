// /home/Dirty-Drift/app/on-tap/OnTapClient.tsx

'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
// 3. GSAP PINNED GALLERY COMPONENT
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
// 4. MAIN CLIENT EXPORT
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

        {/* Cocktail horizontal scroll gallery */}
        <PinnedCocktailGallery id="cocktail-gallery" items={cocktails} />

        <SiteFooter />
      </main>
    </>
  );
}
