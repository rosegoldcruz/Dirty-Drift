import { ProductionHomePage } from '@/components/production-home-page';
import {
  emailAddress,
  mapsPlaceUrl,
  menuPageHref,
  phoneDisplay,
  siteUrl
} from '@/lib/production-site-data';

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Driftwoods Sports Grill',
  url: siteUrl,
  telephone: phoneDisplay,
  email: emailAddress,
  servesCuisine: ['American', 'Sports Bar'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9832 N 7th St',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    postalCode: '85020',
    addressCountry: 'US'
  },
  hasMap: mapsPlaceUrl,
  menu: `${siteUrl}${menuPageHref}`,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '11:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '11:00',
      closes: '24:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '24:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '08:00',
      closes: '22:00'
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <ProductionHomePage />
    </>
  );
}
