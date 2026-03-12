import type { Metadata } from 'next';
import { MenuPageContent } from '@/components/content-pages';

export const metadata: Metadata = {
  title: 'Menu | Driftwoods Sports Grill',
  description:
    'Explore the full Driftwoods food and drinks menu in text format, including starters, mains, cocktails, drafts, bottles, and more in Sunnyslope, Phoenix.'
};

export default function MenuPage() {
  return <MenuPageContent />;
}
