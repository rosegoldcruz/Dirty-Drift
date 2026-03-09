import type { Metadata } from 'next';
import { GameDayPageContent } from '@/components/content-pages';

export const metadata: Metadata = {
  title: 'Game Day | Driftwoods',
  description:
    'Game day reservations, watch parties, and big-screen setup details for Driftwoods in Sunnyslope, Phoenix.'
};

export default function GameDayPage() {
  return <GameDayPageContent />;
}
