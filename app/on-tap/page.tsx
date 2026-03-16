// /home/Dirty-Drift/app/on-tap/page.tsx

import type { Metadata } from 'next';
import { OnTapClient } from './OnTapClient';

export const metadata: Metadata = {
  title: 'On Tap | Driftwoods Sports Grill',
  description:
    'See what is on tap at Driftwoods in Sunnyslope, Phoenix: draft beer, bottles, cans, wine, and the full signature cocktail lineup.'
};

export default function OnTapPage() {
  return <OnTapClient />;
}
