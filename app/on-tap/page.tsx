'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tv2 } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';

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

function CocktailCard({ item, className = '' }: { item: (typeof cocktails)[number]; className?: string; }) {
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

function PinnedCocktailGallery({ id, items }: { id: string; items: typeof cocktails; }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
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
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
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
          <div className="flex w-max gap-4 pb-4 pr-5 md:gap-6">
            {items.map((item) => (
              <CocktailCard key={item.name} item={item} className="aspect-[3/4] w-[78vw] max-w-[360px] shrink-0" />
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="relative hidden bg-[#040b13] lg:block">
        <div className="flex h-screen flex-col justify-center overflow-hidden py-12">
          <div className="mb-12 flex items-end justify-between gap-6 px-8 xl:px-12">
            <div className="max-w-3xl">
              <p className="eyebrow text-cyan tracking-widest">Coastal cocktails</p>
              <h2 className="mt-4 text-5xl uppercase leading-[0.94] text-cream">The full cocktail lineup.</h2>
              <p className="mt-4 text-lg leading-6 text-cream/[0.68]">Keep scrolling. The gallery locks in and slides horizontally.</p>
            </div>
            <div className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream/[0.62]">
              Pinned horizontal gallery
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <div ref={trackRef} className="flex h-[55vh] min-h-[400px] w-max items-stretch gap-6 px-8 xl:px-12">
              {items.map((item) => (
                <CocktailCard key={item.name} item={item} className="aspect-[3/4] h-full w-[320px] shrink-0 xl:w-[380px]" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function OnTapPage() {
  const primaryCategory = tapCategories[0];
  const bottleCategory = tapCategories[1];
  const wineCategory = tapCategories[2];
  const nonAlcoholicCategory = tapCategories[3];

  return (
    <main className="page-shell min-h-screen overflow-x-hidden">
      <SiteNav />

      <section className="px-4 pb-6 pt-28 md:px-8 md:pb-8 md:pt-32">
        <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[2.15rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(107,231,255,0.12),transparent_24%),radial-gradient(circle_at_82%_62%,rgba(255,97,56,0.12),transparent_18%)]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-4xl"
          >
            <p className="eyebrow">THE DRIFTWOODS BAR</p>
            <h1 className="mt-4 text-5xl uppercase leading-[0.9] text-cream md:text-7xl">SEE WHAT&apos;S ON TAP.</h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-cream/[0.74] md:text-lg">
              Drafts, bottles, cans, wine, and our signature cocktails. If it&apos;s behind the bar, it&apos;s listed here.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/order" className="cta-primary">ORDER ONLINE →</Link>
              <Link href="/menu" className="cta-secondary">VIEW FOOD MENU →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-x-hidden px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1380px] min-w-0 gap-6">
          <motion.article
            className="section-shell p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Bar setup</p>
            <h2 className="mt-4 text-4xl uppercase leading-[0.94] text-cream md:text-5xl">Real drafts. Bottles. Wine.</h2>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
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
                        <div key={asset} className="relative h-16 w-14 opacity-72 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-95">
                          <Image src={asset} alt="Tap" fill unoptimized sizes="56px" className="object-contain object-bottom" />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {primaryCategory.items ? (
                    <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                      {primaryCategory.items.map((item) => (
                        <span key={item} className="glass-chip">{item}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className="grid gap-4">
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
                          <div key={asset} className="relative h-12 w-10 opacity-72 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-95">
                            <Image src={asset} alt="Bottle" fill unoptimized sizes="40px" className="object-contain object-bottom" />
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {bottleCategory.items ? (
                      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                        {bottleCategory.items.map((item) => (
                          <span key={item} className="glass-chip">{item}</span>
                        ))}
                      </div>
                    ) : null}
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
                    {'accentAsset' in wineCategory && wineCategory.accentAsset ? (
                      <div className="pointer-events-none absolute right-6 top-6 h-16 w-12 opacity-40">
                        <Image src={wineCategory.accentAsset} alt="Wine" fill unoptimized sizes="48px" className="object-contain object-right-top" />
                      </div>
                    ) : null}
                    {wineCategory.items ? (
                      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                        {wineCategory.items.map((item) => (
                          <span key={item} className="glass-chip">{item}</span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {nonAlcoholicCategory ? (
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#09131d] p-6">
                    <div className="flex items-center gap-3">
                      <Tv2 className="h-5 w-5 text-cyan" />
                      <h3 className="text-xl uppercase leading-[0.94] text-cream">{nonAlcoholicCategory.title}</h3>
                    </div>
                    {nonAlcoholicCategory.items ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {nonAlcoholicCategory.items.map((item) => (
                          <span key={item} className="glass-chip">{item}</span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.article>

          <PinnedCocktailGallery id="cocktail-gallery" items={cocktails} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
