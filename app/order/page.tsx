import type { Metadata } from 'next';
import { OrderPageContent } from '@/components/content-pages';

export const metadata: Metadata = {
  title: 'Order Online | Driftwoods',
  description:
    'Pickup or delivery in one place. Compare Toast, DoorDash, GrubHub, and Seamless for Driftwoods without bouncing across multiple pages.'
};

export default function OrderPage() {
  return <OrderPageContent />;
}
