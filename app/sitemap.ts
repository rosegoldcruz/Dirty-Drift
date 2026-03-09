import type { MetadataRoute } from 'next';
import {
  eventsPageHref,
  gameDayPageHref,
  happyHourPageHref,
  menuPageHref,
  onTapPageHref,
  orderPageHref,
  privateBookingsHref,
  siteUrl
} from '@/lib/production-site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    menuPageHref,
    onTapPageHref,
    eventsPageHref,
    gameDayPageHref,
    happyHourPageHref,
    orderPageHref,
    privateBookingsHref
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8
  }));
}
