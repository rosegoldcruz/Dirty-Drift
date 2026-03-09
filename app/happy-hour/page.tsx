import type { Metadata } from 'next';
import { HappyHourPageContent } from '@/components/content-pages';

export const metadata: Metadata = {
  title: 'Happy Hour | Driftwoods',
  description:
    'Daily happy hour until 7pm at Driftwoods in Sunnyslope. Drinks, food, and a direct path for high-intent local happy hour searches.'
};

export default function HappyHourPage() {
  return <HappyHourPageContent />;
}
