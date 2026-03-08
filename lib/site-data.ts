export type NavItem = {
  href: string;
  label: string;
  note: string;
};

export type MediaCard = {
  image: string;
  title: string;
  copy: string;
  kicker?: string;
};

export type WeeklyItem = {
  label: string;
  title: string;
  copy: string;
};

export const orderUrl = 'https://order.toasttab.com/online/the-pier-driftwoods';
export const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=9832+N+7th+St+Phoenix+AZ+85020';

export const navLinks: NavItem[] = [
  {
    href: '#space',
    label: 'The Space',
    note: 'Bar, patio, dining, arrival'
  },
  {
    href: '#food',
    label: 'Food + Drinks',
    note: 'Plates, pours, and late-night pull'
  },
  {
    href: '#after-dark',
    label: 'After Dark',
    note: 'Night energy, patio, music, people'
  },
  {
    href: '#whatson',
    label: 'What’s Happening',
    note: 'Events, games, specials, weekly motion'
  },
  {
    href: '#findus',
    label: 'Find Us',
    note: 'Order online, directions, neighborhood signal'
  }
];

export const heroTags = ['Phoenix / Sunnyslope', 'Patio', 'Sports', 'Drinks', 'Events'];

export const moodCards: MediaCard[] = [
  {
    image: '/bar%20and%20drinks/cool%20bar.jpg',
    kicker: 'Bar pulse',
    title: 'A room that comes alive fast',
    copy:
      'Pull in for a round, catch the game, and feel the bar carry the night forward without trying too hard.'
  },
  {
    image: '/bar%20and%20drinks/Patio%20phone.png',
    kicker: 'Patio life',
    title: 'Outside when the night settles in',
    copy:
      'Warm light, easy movement, and the kind of patio energy that turns one drink into the rest of the night.'
  },
  {
    image: '/bar%20and%20drinks/frontttt.jpg',
    kicker: 'Arrival',
    title: 'A real destination, not a generic stop',
    copy:
      'It reads like a place with gravity before you even walk in, then pays it off once the doors open.'
  },
  {
    image: '/bar%20and%20drinks/Restaurant%20side%20(2).png',
    kicker: 'Dining side',
    title: 'Food strong enough to anchor the whole night',
    copy:
      'Come in for dinner, stay for the atmosphere, and let the night shift around you instead of ending early.'
  }
];

export const foodFeature: MediaCard = {
  image: '/food/fried%20chicken%20sandwich.jpg',
  kicker: 'Food that holds its own',
  title: 'Stacked, craveable, and worth showing up for',
  copy:
    'This is the kind of menu lane that supports the whole identity: burgers, comfort plates, game-day fuel, and late-night bites with enough character to matter.'
};

export const foodSupport: MediaCard[] = [
  {
    image: '/food/fish%20n%20chips.jpg',
    title: 'Pub comfort with texture and weight',
    copy: 'Familiar favorites, done with enough edge to keep them from feeling generic.'
  },
  {
    image: '/food/fffooooddd.jpg',
    title: 'Stacked plates for the whole table',
    copy: 'The visual lane stays rich, casual, and real instead of polished into something sterile.'
  },
  {
    image: '/food/penne.jpg',
    title: 'More than burgers and bar snacks',
    copy: 'Build range into the food story so the place feels like a full night, not a one-note stop.'
  }
];

export const drinkCards: MediaCard[] = [
  {
    image: '/bar%20and%20drinks/bourbon.jpg',
    kicker: 'Drinks that keep the night moving',
    title: 'Solid pours, warm glow, no fake polish',
    copy:
      'The drink story should feel lived-in and cinematic: amber light, cold glass, and enough mood to keep the room in motion.'
  },
  {
    image: '/bar%20and%20drinks/Drink%20vibes.png',
    title: 'Built for rounds, not just one hero cocktail',
    copy:
      'Keep the bar language social and believable so the site sells the room as much as the drink itself.'
  },
  {
    image: '/bar%20and%20drinks/cheers.png',
    title: 'The social part matters just as much',
    copy:
      'Hands, glasses, noise, motion, and the sense that there is already energy here when you arrive.'
  }
];

export const afterDarkFeature: MediaCard = {
  image: '/bar%20and%20drinks/Patio%20phone.png',
  kicker: 'After dark, it shifts',
  title: 'This is where Driftwoods stops feeling like just another restaurant',
  copy:
    'Patio movement, group hangs, music nights, sports crossover, and the neighborhood pull that keeps people around after dinner would have been enough.'
};

export const proofCards: MediaCard[] = [
  {
    image: '/bar%20and%20drinks/Group%20photo.png',
    kicker: 'Neighborhood proof',
    title: 'People actually gather here',
    copy:
      'Use real guest photos, event stills, and social snapshots to show that the room already has a pulse.'
  },
  {
    image: '/bar%20and%20drinks/Mike%20and%20some%20b.png',
    title: 'Not a testimonial slider. A memory wall.',
    copy:
      'Editorial collage treatment keeps the section premium while still making the proof feel local and lived in.'
  },
  {
    image: '/bar%20and%20drinks/Patio%20phone.png',
    title: 'Good energy travels fast',
    copy:
      'The proof lane should feel like momentum, not marketing copy reaching for legitimacy.'
  }
];

export const weeklyItems: WeeklyItem[] = [
  {
    label: 'Game day pull',
    title: 'Big screens, cold pours, room for the crew',
    copy:
      'Use this slot for the week’s biggest matchup, sports package, or watch-party push without rebuilding the section.'
  },
  {
    label: 'Patio night',
    title: 'Music, movement, and a reason to stay late',
    copy:
      'Swap in the current live set, patio activation, or Friday-night traffic driver and keep the homepage feeling alive.'
  },
  {
    label: 'Specials lane',
    title: 'Bites, pours, and weekly reasons to come back',
    copy:
      'This card is built for recurring specials, happy-hour pushes, or rotating house promos that deserve a stronger signal.'
  },
  {
    label: 'Neighborhood moment',
    title: 'A modular block for what’s happening right now',
    copy:
      'Use it for community callouts, private events, weekend pushes, or whatever keeps repeat traffic engaged.'
  }
];

export const footerLinks = [
  { label: 'Order Online', href: orderUrl },
  { label: 'View Menu', href: '#food' },
  { label: 'What’s Happening', href: '#whatson' },
  { label: 'Directions', href: directionsUrl }
];

export const contactDetails = {
  address: '9832 N 7th St, Phoenix, AZ 85020',
  neighborhood: 'Sunnyslope / Phoenix',
  hoursPrimary: 'Hours slot ready for live operating times',
  hoursSecondary: 'Update with real day-by-day hours in the next content pass'
};
