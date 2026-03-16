// /home/Dirty-Drift/lib/driftwoods-taps.ts

export type GlassKind = "pint" | "mug";

const BASE = "/all-assets-tap";

const a = (file: string) => `${BASE}/${encodeURIComponent(file)}`;

export const TAP_ASSETS = {
  baseDir: BASE,
  system: {
    png: a("tap-system.png"),
    svg: a("tap-system.svg"),
  },
  glass: {
    pint: a("asset-pint.png"),
    mug: a("asset-mug-clear-two.png"),
  },
  liquidRefs: {
    pint: a("asset-pint-liquid.png"),
    pintAlt: a("asset-pint-liquid-two.png"),
    mug: a("asset-mug-liquid.png"),
    mugAlt: a("asset-mug-liquid-two.png"),
    guinnessTone: a("asset-guinness-for-tap-coloration.png"),
  },
  cards: {
    "805-blonde": a("card-805-blonde.png"),
    "big-blue-van": a("card-big-blue-van.png"),
    "coors-light": a("card-coors-light.png"),
    "dos-equis": a("card-dos-equis.png"),
    guinness: a("card-guinness.png"),
    "hazy-little-thing-ipa": a("card-hazy-little-thing-ipa.png"),
    "lagunitas-ipa": a("card-lagunitas-ipa.png"),
    "michelob-ultra": a("card-michelob-ultra.png"),
    modelo: a("card-modelo.png"),
    "pizza-port-california-honey": a("card-pizza-port-california-honey.png"),
    "voodoo-ranger-juicy-haze-ipa": a("card-voodoo-ranger.png"),
    "wow-wheat": a("card-wow-wheat.png"),
  },
  handles: {
    "805-blonde": a("handle-805-blonde.png"),
    "big-blue-van": a("handle-big-blue-van.png"),
    "coors-light": a("handle-coors-light.png"),
    "dos-equis": a("handle-dos-equis.png"),
    guinness: a("handle-guinness.png"),
    "hazy-little-thing-ipa": a("handle-hazy-little-thing-ipa.png"),
    "lagunitas-ipa": a("handle-lagunitas-ipa.png"),
    "michelob-ultra": a("handle-michelob-ultra.png"),
    modelo: a("handle-modelo.png"),
    "pizza-port-california-honey": a("handle-pizza-port-california-honey.png"),
    "voodoo-ranger-juicy-haze-ipa": a("handle-voodoo-ranger.png"),
    "wow-wheat": a("handle-wow-wheat.png"),
  },
} as const;

export type DriftwoodsTap = {
  id: keyof typeof TAP_ASSETS.cards;
  name: string;
  style: string;
  abv: string;
  description: string;
  flavorNotes: string;
  vibeTag: string;
  glass: GlassKind;
  fillPercent: number;
  liquidTop: string;
  liquidBottom: string;
  liquidGlow: string;
  handleSrc: string;
  cardSrc: string;
};

export const DRIFTWOODS_TAPS: DriftwoodsTap[] = [
  {
    id: "805-blonde",
    name: "805 Blonde",
    style: "Blonde Ale",
    abv: "4.7%",
    description:
      "Smooth, easy-drinking, and crisp with a light malt body. A clean finish makes this one a crowd-pleaser for people who want flavor without the heaviness.",
    flavorNotes: "Light malt, subtle sweetness, clean finish",
    vibeTag: "Easy & approachable",
    glass: "pint",
    fillPercent: 88,
    liquidTop: "#ffd84d",
    liquidBottom: "#b86e00",
    liquidGlow: "rgba(255, 211, 76, 0.45)",
    handleSrc: TAP_ASSETS.handles["805-blonde"],
    cardSrc: TAP_ASSETS.cards["805-blonde"],
  },
  {
    id: "big-blue-van",
    name: "Big Blue Van",
    style: "American Wheat Beer",
    abv: "5.4%",
    description:
      "Bright, refreshing, and built for easy sipping. This wheat beer stays playful and smooth with a laid-back finish that fits almost any crowd.",
    flavorNotes: "Blueberry, vanilla, soft wheat",
    vibeTag: "Chill patio beer",
    glass: "pint",
    fillPercent: 86,
    liquidTop: "#f3d95e",
    liquidBottom: "#c17f11",
    liquidGlow: "rgba(243, 217, 94, 0.40)",
    handleSrc: TAP_ASSETS.handles["big-blue-van"],
    cardSrc: TAP_ASSETS.cards["big-blue-van"],
  },
  {
    id: "coors-light",
    name: "Coors Light",
    style: "American Light Lager",
    abv: "4.2%",
    description:
      "Crisp, cold, and ultra-refreshing. A classic light lager with a very clean profile that keeps things simple and sessionable.",
    flavorNotes: "Clean grain, light body, crisp finish",
    vibeTag: "Ice-cold crusher",
    glass: "pint",
    fillPercent: 90,
    liquidTop: "#f7e883",
    liquidBottom: "#d4a320",
    liquidGlow: "rgba(247, 232, 131, 0.42)",
    handleSrc: TAP_ASSETS.handles["coors-light"],
    cardSrc: TAP_ASSETS.cards["coors-light"],
  },
  {
    id: "dos-equis",
    name: "Dos Equis Lager",
    style: "Mexican Lager",
    abv: "4.2%",
    description:
      "Smooth and balanced with a crisp finish and just enough malt character to keep it interesting. Easy to drink, familiar, and built for the long haul.",
    flavorNotes: "Toasted grain, light malt, clean finish",
    vibeTag: "Smooth classic",
    glass: "pint",
    fillPercent: 87,
    liquidTop: "#ffc94b",
    liquidBottom: "#a95900",
    liquidGlow: "rgba(255, 201, 75, 0.42)",
    handleSrc: TAP_ASSETS.handles["dos-equis"],
    cardSrc: TAP_ASSETS.cards["dos-equis"],
  },
  {
    id: "guinness",
    name: "Guinness",
    style: "Irish Dry Stout",
    abv: "4.2%",
    description:
      "Dark, creamy, and unmistakably iconic. Rich roasted character meets a smooth body for a stout that drinks softer than it looks.",
    flavorNotes: "Roasted barley, coffee, cocoa",
    vibeTag: "Dark & velvety",
    glass: "pint",
    fillPercent: 84,
    liquidTop: "#5b3925",
    liquidBottom: "#16110e",
    liquidGlow: "rgba(111, 72, 38, 0.32)",
    handleSrc: TAP_ASSETS.handles.guinness,
    cardSrc: TAP_ASSETS.cards.guinness,
  },
  {
    id: "hazy-little-thing-ipa",
    name: "Hazy Little Thing IPA",
    style: "Hazy IPA",
    abv: "6.7%",
    description:
      "Juicy, hazy, and bursting with hop aroma. Soft on the palate with big citrus energy and a smoother finish than a traditional West Coast IPA.",
    flavorNotes: "Citrus, tropical fruit, soft bitterness",
    vibeTag: "Juicy haze bomb",
    glass: "pint",
    fillPercent: 86,
    liquidTop: "#f6c652",
    liquidBottom: "#cb7a0b",
    liquidGlow: "rgba(246, 198, 82, 0.42)",
    handleSrc: TAP_ASSETS.handles["hazy-little-thing-ipa"],
    cardSrc: TAP_ASSETS.cards["hazy-little-thing-ipa"],
  },
  {
    id: "lagunitas-ipa",
    name: "Lagunitas IPA",
    style: "India Pale Ale",
    abv: "6.2%",
    description:
      "Bold, hop-forward, and unapologetically classic. Bright citrus and pine notes ride over a firm malt backbone for a punchy, balanced IPA.",
    flavorNotes: "Citrus zest, pine, caramel malt",
    vibeTag: "Classic hop hit",
    glass: "pint",
    fillPercent: 87,
    liquidTop: "#edb83f",
    liquidBottom: "#b16504",
    liquidGlow: "rgba(237, 184, 63, 0.40)",
    handleSrc: TAP_ASSETS.handles["lagunitas-ipa"],
    cardSrc: TAP_ASSETS.cards["lagunitas-ipa"],
  },
  {
    id: "michelob-ultra",
    name: "Michelob Ultra",
    style: "Light Lager",
    abv: "4.2%",
    description:
      "Clean, light, and extremely easy to drink. Built for drinkers who want a crisp beer that stays refreshing from first sip to last.",
    flavorNotes: "Light grain, subtle citrus, dry finish",
    vibeTag: "Clean & low-key",
    glass: "pint",
    fillPercent: 91,
    liquidTop: "#f7ea97",
    liquidBottom: "#d2af32",
    liquidGlow: "rgba(247, 234, 151, 0.42)",
    handleSrc: TAP_ASSETS.handles["michelob-ultra"],
    cardSrc: TAP_ASSETS.cards["michelob-ultra"],
  },
  {
    id: "modelo",
    name: "Modelo Especial",
    style: "Pilsner-style Lager",
    abv: "4.4%",
    description:
      "Crisp and full-flavored with a smooth drinkability that lands right in the sweet spot. Richer than a light lager, but still clean and refreshing.",
    flavorNotes: "Orange blossom honey, light hop character, crisp finish",
    vibeTag: "Crisp with character",
    glass: "pint",
    fillPercent: 88,
    liquidTop: "#f4c24f",
    liquidBottom: "#ae6406",
    liquidGlow: "rgba(244, 194, 79, 0.42)",
    handleSrc: TAP_ASSETS.handles.modelo,
    cardSrc: TAP_ASSETS.cards.modelo,
  },
  {
    id: "pizza-port-california-honey",
    name: "California Honey Ale",
    style: "Blonde Ale",
    abv: "4.8%",
    description:
      "Smooth, golden, and lightly sweet with an easy finish. Honey adds a soft roundness without turning the beer sugary, keeping it mellow and highly drinkable.",
    flavorNotes: "Honey, crisp finish, smooth sweetness",
    vibeTag: "Golden & mellow",
    glass: "mug",
    fillPercent: 89,
    liquidTop: "#f6c84d",
    liquidBottom: "#b76d07",
    liquidGlow: "rgba(246, 200, 77, 0.43)",
    handleSrc: TAP_ASSETS.handles["pizza-port-california-honey"],
    cardSrc: TAP_ASSETS.cards["pizza-port-california-honey"],
  },
  {
    id: "voodoo-ranger-juicy-haze-ipa",
    name: "Voodoo Ranger Juicy Haze IPA",
    style: "Hazy IPA",
    abv: "7.5%",
    description:
      "Big tropical aroma, soft haze, and juicy hop flavor from front to back. Full-bodied and fruit-forward with a smooth landing.",
    flavorNotes: "Tropical aroma, citrusy flavor, smooth finish",
    vibeTag: "Tropical hop rush",
    glass: "pint",
    fillPercent: 86,
    liquidTop: "#efbb49",
    liquidBottom: "#bb6605",
    liquidGlow: "rgba(239, 187, 73, 0.40)",
    handleSrc: TAP_ASSETS.handles["voodoo-ranger-juicy-haze-ipa"],
    cardSrc: TAP_ASSETS.cards["voodoo-ranger-juicy-haze-ipa"],
  },
  {
    id: "wow-wheat",
    name: "WOW Wheat",
    style: "Wheat Ale",
    abv: "5.0%",
    description:
      "Light, bright, and refreshing with a smooth wheat body. Easygoing and slightly citrusy, this one keeps things crisp without losing flavor.",
    flavorNotes: "Sweet orange peel, soft wheat body, crisp fruity finish",
    vibeTag: "Sunny refresher",
    glass: "pint",
    fillPercent: 87,
    liquidTop: "#f7d76c",
    liquidBottom: "#c78410",
    liquidGlow: "rgba(247, 215, 108, 0.40)",
    handleSrc: TAP_ASSETS.handles["wow-wheat"],
    cardSrc: TAP_ASSETS.cards["wow-wheat"],
  },
];
