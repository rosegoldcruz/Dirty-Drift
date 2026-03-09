export type NavItem = {
  href: string;
  label: string;
  note: string;
};

export type HomeCard = {
  title: string;
  copy: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  attribution: string;
  image: string;
};

export type ActionCard = {
  title: string;
  copy: string;
  cta: string;
  href: string;
  external?: boolean;
};

export type MenuItem = {
  name: string;
  description: string;
};

export type MenuSection = {
  title: string;
  intro: string;
  items: MenuItem[];
};

export type MenuImageLink = {
  title: string;
  href: string;
};

export type TapCategory = {
  title: string;
  copy: string;
  items?: string[];
};

export type Cocktail = {
  name: string;
  build: string;
};

export type EventItem = {
  title: string;
  copy: string;
};

export type FooterOrderLink = {
  label: string;
  href: string;
};

export type OrderProvider = {
  label: string;
  summary: string;
  note: string;
  pickupHref: string;
  deliveryHref: string;
};

export const siteUrl = 'https://thedriftwoodsaz.com';
export const primaryOrderUrl = 'https://order.toasttab.com/online/the-pier-driftwoods';
export const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=9832+N+7th+St,+Phoenix,+AZ+85020';
export const mapsPlaceUrl =
  'https://www.google.com/maps/search/?api=1&query=9832+N+7th+St+Phoenix+AZ+85020';
export const phoneDisplay = '(480) 393-3261';
export const phoneHref = 'tel:+14803933261';
export const emailAddress = 'info@thedriftwoodsaz.com';
export const emailHref = 'mailto:info@thedriftwoodsaz.com';
export const reservationsEmail = 'michael@thedriftwoodsaz.com';
export const reservationsEmailHref = 'mailto:michael@thedriftwoodsaz.com';
export const instagramUrl = 'https://www.instagram.com/driftwoodsaz/';
export const facebookUrl = 'https://www.facebook.com/p/Driftwoods-Sports-Grill-61557379190366/';
export const yelpUrl = 'https://www.yelp.com/biz/driftwoods-sports-grill-phoenix';
export const googleReviewsUrl =
  'https://www.google.com/search?sca_esv=c6d3096b1127c9a7&sxsrf=ANbL-n5GbB2qTXHverZEI9l9Tj2Ut0aatA:1773000894351&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWRFJEEDr2B1Z0OpebgdAbCOuE63T1tyaxXD73sO7uQiCwBDm6u5SkL8O8RG0QqAQfpoWn8abI4It9pm1-rVVhu_7OrqAng7Onqu5Gf7ozfVYLa5kg%3D%3D&q=Driftwoods+Sports+Grill+Reviews&sa=X&ved=2ahUKEwi_8fmDj5GTAxVDHUQIHSo2MqYQ0bkNegQIVxAH&biw=1912&bih=914&dpr=1';
export const orderPageHref = '/order';
export const onTapPageHref = '/on-tap';
export const menuPageHref = '/menu';
export const eventsPageHref = '/events';
export const gameDayPageHref = '/game-day';
export const happyHourPageHref = '/happy-hour';
export const privateBookingsHref = '/private-bookings';

export const navLinks: NavItem[] = [
  {
    href: menuPageHref,
    label: 'Food',
    note: 'Full text menu + picture menus'
  },
  {
    href: onTapPageHref,
    label: 'Bar',
    note: 'Bar setup, cocktails, taps, bottles'
  },
  {
    href: eventsPageHref,
    label: "What's On",
    note: 'Specials, watch parties, weekly momentum'
  },
  {
    href: gameDayPageHref,
    label: 'Game Day',
    note: 'Reservations, watch parties, screen setup'
  },
  {
    href: happyHourPageHref,
    label: 'Happy Hour',
    note: 'Daily until 7pm, drinks and food worth pulling up for'
  },
  {
    href: orderPageHref,
    label: 'Order',
    note: 'Pickup vs delivery across every ordering option'
  },
  {
    href: privateBookingsHref,
    label: 'Private Bookings',
    note: 'Game day reservations + event planning'
  }
];

export const footerNavLinks = [
  { label: 'Food', href: menuPageHref },
  { label: 'Bar', href: onTapPageHref },
  { label: "What's On", href: eventsPageHref },
  { label: 'Game Day', href: gameDayPageHref },
  { label: 'Happy Hour', href: happyHourPageHref },
  { label: 'Order', href: orderPageHref },
  { label: 'Private Bookings', href: privateBookingsHref },
  { label: 'Get Directions', href: directionsUrl }
];

export const footerOrderLinks: FooterOrderLink[] = [
  {
    label: 'Toast',
    href: 'https://order.online/store/-33095523/?pickup=true&hideModal=true&utm_source=gfo&rwg_token=AFd1xnFr3-WVW92nPOnuUWSRvuF-IY8Snvomu0SeH_tVT8nDeqfybVNt_xvm_J4mqZ3NFNPxcDqPGbIq-bb33TMCxfCJYwcwmg%3D%3D'
  },
  {
    label: 'DoorDash',
    href: 'https://www.doordash.com/store/driftwoods-sports-grill-phoenix-33095523/63380148/?pickup=true&utm_campaign=gpa'
  },
  {
    label: 'GrubHub',
    href: 'https://www.grubhub.com/restaurant/driftwoods-sports-grill-9832-n-7th-st-phoenix/11330288?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnFnyp1L69WN-NNAWWO3hE_-g18NMlQtwnBY8oAyEyfTKAI8J7O6UKz7N66iVJ_wvmgnNNqS1eGTprbxEjspxxNQ32JQbg%3D%3D'
  },
  {
    label: 'Seamless',
    href: 'https://www.seamless.com/menu/driftwoods-sports-grill-9832-n-7th-st-phoenix/11330288?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnGiDgJHWnfSnOseaqwH3MlaN0jqhYjC93jmpA_MUbG2bVTPLbUjFmm4S7qPO6RM99V1j3NM-yv8lvksQErlAO4g91s1GA%3D%3D'
  }
];

export const orderProviders: OrderProvider[] = [
  {
    label: 'Toast',
    summary: 'Best for the direct Driftwoods online ordering flow.',
    note: 'Fastest path when you already know what you want.',
    pickupHref: primaryOrderUrl,
    deliveryHref: primaryOrderUrl
  },
  {
    label: 'DoorDash',
    summary: 'Strong delivery reach with familiar tracking.',
    note: 'Good when the order needs to move to somebody else’s front door.',
    pickupHref: 'https://www.doordash.com/store/driftwoods-sports-grill-phoenix-33095523/63380148/?pickup=true&utm_campaign=gpa',
    deliveryHref: 'https://www.doordash.com/store/driftwoods-sports-grill-phoenix-33095523/63380148/'
  },
  {
    label: 'GrubHub',
    summary: 'Useful for straight delivery comparisons and repeat customers.',
    note: 'Good for people already ordering inside the GrubHub ecosystem.',
    pickupHref: 'https://www.grubhub.com/restaurant/driftwoods-sports-grill-9832-n-7th-st-phoenix/11330288?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnFnyp1L69WN-NNAWWO3hE_-g18NMlQtwnBY8oAyEyfTKAI8J7O6UKz7N66iVJ_wvmgnNNqS1eGTprbxEjspxxNQ32JQbg%3D%3D',
    deliveryHref: 'https://www.grubhub.com/restaurant/driftwoods-sports-grill-9832-n-7th-st-phoenix/11330288'
  },
  {
    label: 'Seamless',
    summary: 'Another familiar delivery lane for people already loyal to the app.',
    note: 'Useful when the order lives inside the Seamless account flow already.',
    pickupHref: 'https://www.seamless.com/menu/driftwoods-sports-grill-9832-n-7th-st-phoenix/11330288?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnGiDgJHWnfSnOseaqwH3MlaN0jqhYjC93jmpA_MUbG2bVTPLbUjFmm4S7qPO6RM99V1j3NM-yv8lvksQErlAO4g91s1GA%3D%3D',
    deliveryHref: 'https://www.seamless.com/menu/driftwoods-sports-grill-9832-n-7th-st-phoenix/11330288'
  }
];

export const hours = [
  'Mon–Thu: 11am – 10pm',
  'Fri: 11am – Midnight',
  'Sat: 8am – Midnight',
  'Sun: 8am – 10pm'
];

export const heroCards: HomeCard[] = [
  {
    title: 'The Screen Situation',
    copy:
      'We put in 25+ HDTVs and a 60-ft indoor LED wall for one reason: if the game matters, you should be able to feel it from every seat in the room.',
    image: '/bar%20and%20drinks/cool%20bar.jpg'
  },
  {
    title: 'The Patios',
    copy:
      "We've got three patios, misters running, and plenty of room to turn one drink into a whole night.",
    image: '/bar%20and%20drinks/Patio%20phone.png'
  },
  {
    title: 'The Food',
    copy:
      'Our kitchen is scratch-built and full of flavor. Wings, ceviche, burgers, pours, and the kind of food that makes you forget you came in "just for the game."',
    image: '/food/fffooooddd.jpg'
  },
  {
    title: 'The Regulars',
    copy:
      "Some people come in once. Most people come back. A few people basically live here now. We're proud of all three.",
    image: '/bar%20and%20drinks/Group%20photo.png'
  }
];

export const foodCards: HomeCard[] = [
  {
    title: 'STARTERS',
    copy:
      "We do starters the way they're supposed to be done: wings with real flavor, a pretzel big enough to take over the table, and ceviche that resets expectations fast. Start somewhere. We'll take it from there.",
    image: '/food/fffooooddd.jpg'
  },
  {
    title: 'MAINS',
    copy:
      'The Huli Huli is the one people text their friends about. The Driftwoods Burger is the one people come back for specifically. This is where "I\'ll just get something small" usually falls apart.',
    image: '/food/fried%20chicken%20sandwich.jpg'
  },
  {
    title: 'FOR THE TABLE',
    copy:
      "Some nights are date nights. Some nights are thirteen people deep on game day. We built a menu that works for both. Nobody leaves hungry, and the only argument you'll have is over the last wing.",
    image: '/food/fish%20n%20chips.jpg'
  }
];

export const barCards: HomeCard[] = [
  {
    title: 'Happy Hour That Actually Means Something',
    copy:
      'We run happy hour every day until 7pm. No games, no tiny window, no "only if you asked the right person." Get here before seven and you\'re already ahead.',
    image: '/bar%20and%20drinks/bourbon.jpg'
  },
  {
    title: 'Cocktails Worth Slowing Down For',
    copy:
      'Our bartenders know how to make the classics, but they also know how to go off-script when the moment calls for it. Come in, tell us what you like, and let us build from there.',
    image: '/bar%20and%20drinks/Drink%20vibes.png'
  },
  {
    title: 'Beer, Done Right',
    copy:
      "We keep regional craft beers rotating because the list should stay alive. If it's been a minute since you were in, there's a good chance there's something new waiting for you.",
    image: '/bar%20and%20drinks/cheers.png'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '"I came across it by accident. I can say that I will be a regular customer. Kaos and Ashley made me feel welcomed — tried drinks that were different from the norm and amazing."',
    attribution: 'First-time visitor',
    image: '/bar%20and%20drinks/Mike%20and%20some%20b.png'
  },
  {
    quote:
      '"This will be our new game day spot. Wings were so good — pretty sure they make the ranch in house. The shrimp cocktail had this Asian zing to it. Delish."',
    attribution: 'New regular',
    image: '/bar%20and%20drinks/Patio%20phone.png'
  },
  {
    quote:
      '"Phoenix\'s new hottest sports bar. Perfect TV placement for UFC, football, every sport you love. Amazing food, friendly staff."',
    attribution: 'Verified guest',
    image: '/bar%20and%20drinks/Group%20photo.png'
  }
];

export const closeCards: ActionCard[] = [
  {
    title: 'GAME DAY',
    copy:
      "25 screens plus the 60-ft wall. Book a table before kickoff — don't be the crew that has to split up because they showed up late.",
    cta: 'RESERVE FOR GAME DAY →',
    href: gameDayPageHref
  },
  {
    title: 'WEEKNIGHTS',
    copy:
      'Open Mon–Thu 11am–10pm. Happy hour until 7. Sometimes the best nights are the ones with no occasion.',
    cta: 'SEE HAPPY HOUR DETAILS →',
    href: happyHourPageHref
  },
  {
    title: 'WEEKEND LATE NIGHT',
    copy:
      'Friday and Saturday until midnight. Live music. Full patio. The kind of night that started as "just one drink."',
    cta: "SEE WHAT'S ON THIS WEEKEND →",
    href: eventsPageHref
  },
  {
    title: 'GROUPS & EVENTS',
    copy:
      "Multiple patios, private spaces, a team that'll set it up right. Birthday, watch party, work thing, whatever. We've got you.",
    cta: 'PLAN YOUR EVENT →',
    href: privateBookingsHref
  }
];

export const visualMenuLinks: MenuImageLink[] = [
  {
    title: 'Food Menu',
    href: 'https://thedriftwoodsaz.com/menus/beach-themed-restaurant-sports-grill-menu-layout.jpg'
  },
  {
    title: 'Drinks Menu',
    href: 'https://thedriftwoodsaz.com/menus/seaside-sports-grill-drinks-menu-beer-wine-prices.jpg'
  },
  {
    title: 'Happy Hour & Daily Specials',
    href: 'https://thedriftwoodsaz.com/menus/happy-hour-restaurant-menu-sports-grill-specials.jpg'
  },
  {
    title: 'Brunch Menu',
    href: 'https://thedriftwoodsaz.com/menus/driftwoods-coastal-cravings-brunch-menu-breakfast-items.jpg'
  }
];

export const menuSections: MenuSection[] = [
  {
    title: 'Shoreline Starters',
    intro: 'Start your coastal journey',
    items: [
      {
        name: 'Surfside Ceviche',
        description: 'Fresh fish marinated in citrus, jalapeño, cilantro, red onion, served with tortilla chips'
      },
      {
        name: 'Steak Bites',
        description: 'Seasoned beef tips, sautéed peppers & onions, chimichurri'
      },
      {
        name: 'Coastal Calamari',
        description: 'Lightly breaded, fried golden, served with marinara & chipotle aioli'
      },
      {
        name: 'Beach Nachos',
        description: 'Tortilla chips, queso, jalapeños, pico de gallo, sour cream, guacamole. Add chicken $5, Add steak $7'
      },
      {
        name: 'Riptide Ribs',
        description: 'Slow-smoked baby back ribs, house BBQ glaze'
      },
      {
        name: 'Pier Pretzels',
        description: 'Warm soft pretzels, beer cheese, honey mustard'
      },
      {
        name: 'Tsunami Tots',
        description: 'Crispy tots loaded with cheese, bacon, green onion, ranch'
      },
      {
        name: 'Mahi Mahi Bites',
        description: 'Beer-battered mahi mahi, served with tartar sauce'
      },
      {
        name: 'Coconut Shrimp',
        description: 'Crispy coconut-crusted shrimp, sweet chili sauce'
      },
      {
        name: 'Driftwood Wings',
        description: 'Crispy chicken wings, choice of buffalo, BBQ, garlic parm, or mango habanero'
      },
      {
        name: 'Spinach & Artichoke Dip',
        description: 'Creamy blend of spinach, artichoke, parmesan, served with tortilla chips'
      }
    ]
  },
  {
    title: 'High Tide Handhelds',
    intro: 'Served with seaside fries',
    items: [
      {
        name: 'Driftwood Burger',
        description: 'Half-pound Angus beef, lettuce, tomato, onion, pickle, brioche bun. Add cheese $1, Add bacon $2'
      },
      {
        name: 'Fish Tacos',
        description: 'Grilled or blackened mahi, cabbage slaw, chipotle crema, flour tortillas (3)'
      },
      {
        name: "Shrimp Po'Boy",
        description: 'Crispy fried shrimp, lettuce, tomato, remoulade, hoagie roll'
      },
      {
        name: 'Mahi Mahi Sandwich',
        description: 'Grilled or blackened, lettuce, tomato, tartar, brioche bun'
      },
      {
        name: 'Chicken Sandwich',
        description: 'Grilled or crispy, lettuce, tomato, pickle, brioche bun'
      },
      {
        name: 'Philly Cheesesteak',
        description: 'Shaved ribeye, peppers, onions, provolone, hoagie roll'
      },
      {
        name: 'Club Wrap',
        description: 'Turkey, ham, bacon, lettuce, tomato, mayo, flour tortilla'
      },
      {
        name: 'BBQ Pulled Pork',
        description: 'Slow-smoked pulled pork, house BBQ, coleslaw, brioche bun'
      }
    ]
  },
  {
    title: 'Surf Side Salads',
    intro: 'Fresh & light',
    items: [
      {
        name: 'Coastal Cobb',
        description: 'Mixed greens, grilled chicken, bacon, egg, avocado, tomato, blue cheese crumbles, ranch'
      },
      {
        name: 'Caesar Salad',
        description: 'Romaine, parmesan, croutons, caesar dressing. Add chicken $5, Add shrimp $7'
      },
      {
        name: 'Ahi Tuna Salad',
        description: 'Seared ahi tuna, mixed greens, mango, avocado, wonton strips, sesame ginger dressing'
      },
      {
        name: 'House Salad',
        description: 'Mixed greens, tomato, cucumber, red onion, croutons, choice of dressing'
      }
    ]
  },
  {
    title: 'Entrees',
    intro: 'Coastal favorites',
    items: [
      {
        name: 'Grilled Salmon',
        description: 'Atlantic salmon, lemon dill butter, seasonal vegetables, rice pilaf'
      },
      {
        name: 'Fish & Chips',
        description: 'Beer-battered cod, seaside fries, coleslaw, tartar sauce'
      },
      {
        name: 'Coconut Mahi Mahi',
        description: 'Pan-seared mahi, coconut curry sauce, jasmine rice, vegetables'
      },
      {
        name: 'NY Strip Steak',
        description: '12oz NY strip, garlic herb butter, mashed potatoes, seasonal vegetables'
      },
      {
        name: 'Surf & Turf',
        description: '8oz filet mignon, grilled shrimp skewer, mashed potatoes, vegetables'
      }
    ]
  },
  {
    title: 'Pastas',
    intro: 'House favorites',
    items: [
      {
        name: 'Shrimp Scampi',
        description: 'Sautéed shrimp, garlic butter, white wine, lemon, linguine'
      },
      {
        name: 'Chicken Alfredo',
        description: 'Grilled chicken, creamy parmesan sauce, fettuccine'
      },
      {
        name: 'Seafood Pasta',
        description: 'Shrimp, mussels, calamari, marinara sauce, linguine'
      },
      {
        name: 'Penne Vodka',
        description: 'Penne pasta, creamy tomato vodka sauce, parmesan. Add chicken $5'
      }
    ]
  },
  {
    title: 'Sun Kissed Sides',
    intro: 'Perfect additions',
    items: [
      {
        name: 'Seaside Fries',
        description: 'Crispy golden fries'
      },
      {
        name: 'Sweet Potato Fries',
        description: 'Crispy sweet potato fries'
      },
      {
        name: 'Onion Rings',
        description: 'Beer-battered onion rings'
      },
      {
        name: 'Coleslaw',
        description: 'Creamy house coleslaw'
      },
      {
        name: 'Rice Pilaf',
        description: 'Seasoned rice pilaf'
      },
      {
        name: 'Seasonal Vegetables',
        description: "Chef's seasonal selection"
      },
      {
        name: 'Mac & Cheese',
        description: 'Creamy four-cheese blend'
      },
      {
        name: '🌊 LOAD EM UP!',
        description: 'Load up your fries! Add Pulled Pork, Cheese Fondue, Pico, & Guac to your side of Fries!'
      }
    ]
  },
  {
    title: 'Desserts',
    intro: 'Sweet endings',
    items: [
      {
        name: 'Key Lime Pie',
        description: 'Classic key lime pie, whipped cream, graham cracker crust'
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake, molten center, vanilla ice cream'
      }
    ]
  },
  {
    title: 'Coastal Cravings Brunch',
    intro: 'Sat & Sun 10am-2pm',
    items: [
      {
        name: 'Huevo Mexicana',
        description: 'Scrambled eggs, chorizo, peppers, onions, cheese, served with rice & beans, flour tortillas'
      },
      {
        name: 'Beach Benny',
        description: 'Poached eggs, Canadian bacon, hollandaise, English muffin, home fries'
      },
      {
        name: 'Crab Cake Benedict',
        description: 'Poached eggs, house crab cakes, hollandaise, English muffin, home fries'
      },
      {
        name: 'Coastal Omelet',
        description: 'Three eggs, choice of fillings: cheese, ham, bacon, peppers, onions, mushrooms, tomato'
      },
      {
        name: 'Steak & Eggs',
        description: '8oz sirloin, two eggs any style, home fries, toast'
      },
      {
        name: 'Chicken & Waffles',
        description: 'Crispy fried chicken, Belgian waffle, maple syrup, honey butter'
      },
      {
        name: 'Shrimp & Grits',
        description: 'Sautéed shrimp, creamy cheddar grits, andouille sausage, cajun cream'
      },
      {
        name: 'Breakfast Burrito',
        description: 'Scrambled eggs, bacon, cheese, potatoes, pico, wrapped in flour tortilla'
      },
      {
        name: 'Avocado Toast',
        description: 'Smashed avocado, poached eggs, everything seasoning, sourdough'
      },
      {
        name: 'Breakfast Tacos',
        description: 'Three tacos, scrambled eggs, bacon, cheese, pico de gallo'
      },
      {
        name: 'Belgian Waffle',
        description: 'Fresh Belgian waffle, whipped cream, fresh berries, maple syrup'
      },
      {
        name: 'Pancake Stack',
        description: 'Three fluffy buttermilk pancakes, butter, maple syrup'
      },
      {
        name: 'French Toast',
        description: 'Thick-cut brioche, cinnamon, vanilla, powdered sugar, maple syrup'
      },
      {
        name: 'Biscuits & Gravy',
        description: 'Buttermilk biscuits, house sausage gravy, two eggs any style'
      },
      {
        name: 'Breakfast Quesadilla',
        description: 'Scrambled eggs, bacon, cheese, peppers, onions, salsa, sour cream'
      },
      {
        name: 'Sunrise Salad',
        description: 'Mixed greens, grilled chicken, bacon, avocado, egg, honey mustard'
      }
    ]
  },
  {
    title: 'A La Carte',
    intro: 'Brunch additions',
    items: [
      {
        name: 'Mimosa',
        description: 'Champagne, fresh OJ'
      },
      {
        name: 'Bloody Mary',
        description: 'House vodka, bloody mix, celery, olives'
      }
    ]
  }
];

export const tapCategories: TapCategory[] = [
  {
    title: 'Draft Beers',
    copy: 'Rotating selection of local and domestic drafts.'
  },
  {
    title: 'Domestic Bottles',
    copy: 'The domestic lineup on the public menu right now.',
    items: ['Bud Light', 'Budweiser', 'Coors Light', 'Miller Lite']
  },
  {
    title: 'Import/Craft Bottles',
    copy: 'Import and craft bottles called out on the current public menu.',
    items: ['Corona', 'Modelo', 'Heineken', 'Blue Moon', 'and more']
  },
  {
    title: 'House Wine',
    copy: 'House pours currently listed online.',
    items: ['Chardonnay', 'Pinot Grigio', 'Cabernet', 'Merlot']
  },
  {
    title: 'Premium Wine',
    copy: 'Ask your server for the premium selection.'
  },
  {
    title: 'Soft Drinks',
    copy: 'Non-alcoholic lineup currently listed online.',
    items: ['Coke', 'Diet Coke', 'Sprite', 'Lemonade', 'Iced Tea']
  }
];

export const cocktails: Cocktail[] = [
  { name: 'Driftwood Margarita', build: 'Tequila, triple sec, fresh lime, salt rim' },
  { name: 'Pier Punch', build: 'Rum, coconut, pineapple, orange juice, grenadine' },
  { name: 'Beach Cruiser', build: 'Vodka, peach schnapps, cranberry, orange juice' },
  { name: 'Mango Tango', build: 'Mango rum, lime, mango puree, tajin rim' },
  { name: 'Sunset Sangria', build: 'Red or white wine, brandy, fresh fruit' },
  { name: 'Mojito', build: 'White rum, fresh mint, lime, soda' },
  { name: 'Paloma', build: 'Tequila, grapefruit, lime, salt rim' },
  { name: 'Long Island', build: 'Vodka, gin, rum, tequila, triple sec, sour, cola' },
  { name: 'Miami Vice', build: 'Half piña colada, half strawberry daiquiri' },
  { name: 'Piña Colada', build: 'Rum, coconut cream, pineapple juice' },
  { name: 'Strawberry Daiquiri', build: 'Rum, strawberry, lime, blended' },
  { name: 'Blue Hawaiian', build: 'Rum, blue curaçao, coconut, pineapple' },
  { name: 'Tequila Sunrise', build: 'Tequila, orange juice, grenadine' },
  { name: 'Bay Breeze', build: 'Vodka, cranberry, pineapple juice' }
];

export const happyHourItems: EventItem[] = [
  { title: 'Draft Beer', copy: 'All domestic drafts' },
  { title: 'House Wine', copy: 'Glass of house red or white' },
  { title: 'Well Drinks', copy: 'All well cocktails' },
  { title: 'House Margarita', copy: 'Classic lime margarita' },
  { title: 'Driftwood Wings', copy: 'Half-dozen wings, choice of sauce' },
  { title: 'Pier Pretzels', copy: 'Warm pretzels, beer cheese' },
  { title: 'Tsunami Tots', copy: 'Loaded tater tots' }
];

export const weeklySpecials: EventItem[] = [
  { title: 'Monday - Taco Night', copy: '$3 tacos, $5 margaritas' },
  { title: 'Tuesday - Wing Night', copy: '75¢ wings, $4 domestic drafts' },
  { title: 'Wednesday - Burger Day', copy: 'Half-price burgers, $5 craft beers' },
  { title: 'Thursday - Steak Night', copy: '$22 NY strip dinner, $6 wine' },
  { title: 'Friday - Fish Fry', copy: '$14 fish & chips, $5 well drinks' },
  { title: 'Weekend - Brunch', copy: 'Sat & Sun 10am-2pm, $6 mimosas & bloody marys' }
];

export const eventTracks: EventItem[] = [
  {
    title: 'Watch Parties',
    copy: 'Big games belong on big screens. This page is built to carry the week’s biggest watch-party pull without anyone having to guess where the room will be.'
  },
  {
    title: 'Live Music',
    copy: 'When the music turns up, this is where the latest patio and late-night movement should land first.'
  },
  {
    title: 'Recurring Community Nights',
    copy: 'Weekly specials, themed nights, and neighborhood reasons to come back all have a home here.'
  }
];

export const gameDayMoments: EventItem[] = [
  {
    title: 'Reserve Before Kickoff',
    copy: 'Game day tables should be handled early, not while your group text is already outside trying to figure out a plan.'
  },
  {
    title: 'Watch Parties That Feel Like Watch Parties',
    copy: 'Rivalry games, playoff nights, UFC cards, and whatever else actually matters should land here with enough screen coverage to make the room move.'
  },
  {
    title: 'Built for Groups That Stay Awhile',
    copy: 'Three patios, strong kitchen support, and a full bar setup make Driftwoods the kind of place where one quarter turns into the whole night.'
  }
];

export const screenSetupDetails: EventItem[] = [
  {
    title: '25+ HDTVs',
    copy: 'Sightlines across the room matter. We built the screen layout so the game still works when the bar is full.'
  },
  {
    title: '60-ft Indoor LED Wall',
    copy: 'When the moment is supposed to feel big, this is the screen that makes it feel big.'
  },
  {
    title: 'Patio Coverage',
    copy: 'The patios are part of the experience, not the place you get sent when the main room fills up.'
  },
  {
    title: 'Food + Bar That Can Handle the Traffic',
    copy: 'Scratch kitchen, real cocktails, drafts, bottles, and enough pace to keep the table locked in.'
  }
];

export const happyHourReasons: EventItem[] = [
  {
    title: 'Daily Until 7pm',
    copy: 'This is not a tiny once-a-week window. It runs every day and gives people a real reason to pull up early.'
  },
  {
    title: 'Drinks People Actually Order',
    copy: 'Domestic drafts, house wine, well drinks, and the house margarita make the decision easy when the clock is working in your favor.'
  },
  {
    title: 'Food That Keeps the Table There',
    copy: 'Wings, pretzels, and loaded tots stop this from feeling like an afterthought and turn it into an actual move.'
  }
];

export const gameDaySearchTerms = [
  'Sports bar game day Phoenix',
  'Game day reservations Sunnyslope',
  'Watch party bar Phoenix',
  'Big screen sports bar near 7th Street'
];

export const happyHourSearchTerms = [
  'Happy hour Sunnyslope',
  'Happy hour Phoenix 7th Street',
  'Daily happy hour near me',
  'Sports bar happy hour Phoenix'
];
