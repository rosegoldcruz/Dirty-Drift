'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavFlingIcons } from '@/components/nav-fling-icons';
import { directionsUrl, navLinks, orderPageHref } from '@/lib/production-site-data';

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [flingCount, setFlingCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <NavFlingIcons triggerCount={flingCount} />
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-[1380px] items-center justify-between rounded-full border border-white/10 bg-[#06101acc]/80 px-4 py-3 shadow-panel backdrop-blur-xl md:px-6">
          <Link href="/" className="relative block h-10 w-[132px] shrink-0">
            <Image
              src="/official%20logos/bww.svg"
              alt="Driftwoods"
              fill
              sizes="132px"
              className="object-contain object-left"
            />
          </Link>
          <div className="relative">
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => {
                setOpen((current) => {
                  if (!current) {
                    setFlingCount((count) => count + 1);
                  }

                  return !current;
                });
              }}
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05] text-cream transition duration-300 hover:border-white/30 hover:bg-white/[0.08]"
            >
              <motion.span
                className="relative z-10"
                animate={{ rotate: open ? 90 : 0, scale: open ? 0.92 : 1 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[#03070ccc]/86 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="menu-tray absolute inset-x-4 top-[5.6rem] bottom-6 overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111de6] shadow-panel md:inset-x-auto md:right-8 md:top-[6.3rem] md:bottom-8 md:w-[560px]"
              initial={{ opacity: 0, y: -24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(107,231,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,97,56,0.18),transparent_30%)]" />
              <motion.div
                className="absolute -top-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan/20 blur-3xl"
                animate={{ x: ['-18%', '18%', '-18%'], opacity: [0.18, 0.34, 0.18] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div
                className="relative flex h-full min-h-0 flex-col overflow-y-auto overscroll-contain p-6 md:p-8"
                data-lenis-prevent
                onWheelCapture={(event) => {
                  event.stopPropagation();
                }}
                style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
              >
                <div className="mb-8">
                  <div className="relative h-20 w-full max-w-[340px] md:h-24 md:max-w-[420px]">
                    <Image
                      src="/official%20logos/signage.svg"
                      alt="Driftwoods neon sign"
                      fill
                      sizes="(max-width: 768px) 340px, 420px"
                      className="object-contain object-left drop-shadow-[0_0_34px_rgba(255,97,56,0.26)]"
                    />
                  </div>
                </div>
                <div className="flex min-h-0 flex-1 flex-col gap-3">
                  <div className="grid gap-3">
                    {navLinks.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] px-5 py-4 transition duration-300 hover:border-cyan/[0.35] hover:bg-white/[0.06]"
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 16 }}
                        transition={{ delay: 0.06 + index * 0.05, duration: 0.32 }}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="text-2xl uppercase tracking-[0.06em] text-cream transition duration-300 group-hover:text-cyan">
                              {item.label}
                            </div>
                            <div className="mt-1 text-sm text-cream/[0.58]">{item.note}</div>
                          </div>
                          <div className="h-px w-12 bg-gradient-to-r from-white/0 via-white/40 to-white/0 transition duration-300 group-hover:via-cyan/70" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  <div className="grid gap-3 pb-2 md:mt-auto md:grid-cols-2">
                    <Link href={orderPageHref} className="cta-primary text-center" onClick={() => setOpen(false)}>
                      Order Online
                    </Link>
                    <Link href={directionsUrl} target="_blank" className="cta-secondary text-center" onClick={() => setOpen(false)}>
                      Get Directions
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
