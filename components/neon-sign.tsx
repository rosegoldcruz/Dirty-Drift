'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type NeonSignProps = {
  className?: string;
};

const patterns = [
  [1, 0.72, 0.94, 1],
  [1, 0.48, 0.82, 0.66, 1],
  [1, 0.86, 0.92, 1],
  [1, 0.58, 0.9, 0.78, 1]
];

export function NeonSign({ className = '' }: NeonSignProps) {
  const [intensity, setIntensity] = useState(0.22);

  useEffect(() => {
    const timers: number[] = [];

    const bootSequence = [0.14, 0.32, 0.55, 0.88, 1];
    bootSequence.forEach((value, index) => {
      const id = window.setTimeout(() => setIntensity(value), [0, 90, 200, 360, 620][index]);
      timers.push(id);
    });

    const runFlicker = () => {
      const pattern = patterns[Math.floor(Math.random() * patterns.length)];
      let elapsed = 0;

      pattern.forEach((value, index) => {
        elapsed += index === 0 ? 0 : 55 + Math.round(Math.random() * 80);
        timers.push(window.setTimeout(() => setIntensity(value), elapsed));
      });

      timers.push(window.setTimeout(() => setIntensity(1), elapsed + 110));
      timers.push(
        window.setTimeout(runFlicker, elapsed + 2800 + Math.round(Math.random() * 4200))
      );
    };

    timers.push(window.setTimeout(runFlicker, 2400));

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const glow = useMemo(
    () => ({
      opacity: 0.24 + intensity * 0.44,
      filter: `blur(${20 - intensity * 9}px)`,
      transform: `scale(${1.02 + intensity * 0.01})`
    }),
    [intensity]
  );

  const signFilter = useMemo(
    () =>
      `drop-shadow(0 0 ${18 + intensity * 18}px rgba(255, 100, 56, ${0.28 + intensity * 0.18})) drop-shadow(0 0 ${34 + intensity * 22}px rgba(107, 231, 255, ${0.14 + intensity * 0.18}))`,
    [intensity]
  );

  return (
    <motion.div
      className={`relative aspect-[1.2/1] w-full ${className}`}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute inset-[8%] rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,97,56,0.18),transparent_58%)]"
        animate={{ scale: [1, 1.03, 1], opacity: [0.35, 0.62, 0.4] }}
        transition={{ duration: 4.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-[4%] rounded-[2rem] bg-[radial-gradient(circle_at_50%_38%,rgba(107,231,255,0.18),transparent_54%)]"
        animate={{ scale: [1.02, 1.05, 1.02], opacity: [0.26, 0.48, 0.26] }}
        transition={{ duration: 6.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 rounded-[2.25rem] border border-white/10 bg-white/[0.03] backdrop-blur-[2px]"
        animate={{ borderColor: ['rgba(255,255,255,0.10)', 'rgba(107,231,255,0.18)', 'rgba(255,255,255,0.10)'] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-[6%]"
        style={glow}
        animate={{ opacity: [glow.opacity * 0.92, glow.opacity, glow.opacity * 0.95] }}
        transition={{ duration: 3.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      >
        <Image
          alt=""
          src="/official%20logos/signage.svg"
          fill
          sizes="(max-width: 768px) 70vw, 40vw"
          className="object-contain object-center"
        />
      </motion.div>
      <motion.div
        className="absolute inset-[6%]"
        style={{ filter: signFilter, opacity: 0.9 + intensity * 0.08 }}
        animate={{ scale: [1, 1.006, 1], opacity: [0.92, 1, 0.94] }}
        transition={{ duration: 4.6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      >
        <Image
          alt="Driftwoods sign"
          src="/official%20logos/signage.svg"
          fill
          priority
          sizes="(max-width: 768px) 70vw, 40vw"
          className="object-contain object-center"
        />
      </motion.div>
    </motion.div>
  );
}
