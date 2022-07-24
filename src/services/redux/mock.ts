import {
  ClientCardProps,
  ClientQuoteProps,
  WorkSelectorProps,
} from "../../shared/types";

export const clientCardsFirst: ClientCardProps[] = [
  {
    title: "BOL.COM",
    description: "A Summer island in the Netherlands",
    image: "https://picsum.photos/400?random=1",
    readMoreLink: "https://www.bol.com/nl/",
    industry: "marketing",
    serviceDomain: "mobile",
  },
  {
    title: "KEMPEN",
    description: "Not some average banking website",
    image: "https://picsum.photos/400?random=2",
    readMoreLink: "https://www.bol.com/nl/",
    industry: "design",
    serviceDomain: "mobile",
  },
  {
    title: "PHILIPS",
    description: "Beautiful design meets innovative technology",
    image: "https://picsum.photos/400?random=3",
    readMoreLink: "https://www.bol.com/nl/",
    industry: "design",
    serviceDomain: "mobile",
  },
  {
    title: "GEMEENTEMUSEUM",
    description: "A 100 years of Mondriaan & De Stijl",
    image: "https://picsum.photos/400?random=4",
    readMoreLink: "https://www.bol.com/nl/",
    industry: "design",
    serviceDomain: "web",
  },

  {
    title: "FLORENSIS",
    description: "Rethinking the entire online ecosystem",
    image: "https://picsum.photos/700/400?random=5",
    readMoreLink: "https://www.bol.com/nl/",
    notes: [
      {
        title: "MICROSOFT",
        content:
          "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
        readMoreLink: "https://www.bol.com/nl/",
      },
      {
        title: "O’NEILL",
        content:
          "Integrating existing content into O’Neills’s new e-commerce platform",
        readMoreLink: "https://www.bol.com/nl/",
      },
      {
        title: "MICROSOFT",
        content:
          "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
        readMoreLink: "https://www.bol.com/nl/",
      },
    ],
    scaled: "left",
    industry: "design",
  },

  {
    title: "BE LIGHTNING",
    description: "Delivering clarity on a global scale",
    image: "https://picsum.photos/400?random=6",
    readMoreLink: "https://www.bol.com/nl/",
  },
  {
    title: "TUI",
    description: "Swipe to find your next holiday destination",
    image: "https://picsum.photos/400?random=7",
    readMoreLink: "https://www.bol.com/nl/",
  },

  {
    title: "FLORENSIS",
    description: "Rethinking the entire online ecosystem",
    image: "https://picsum.photos/700/400?random=8",
    readMoreLink: "https://www.bol.com/nl/",
    notes: [
      {
        title: "AMAZON",
        content: "Starting with delivering through drones",
        readMoreLink: "https://www.bol.com/nl/",
      },
      {
        title: "O’NEILL",
        content:
          "Integrating existing content into O’Neills’s new e-commerce platform",
        readMoreLink: "https://www.bol.com/nl/",
      },
      {
        title: "MICROSOFT",
        content:
          "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
        readMoreLink: "https://www.bol.com/nl/",
      },
    ],
    scaled: "right",
    industry: "design",
  },

  {
    title: "CHOCOMEL",
    description: "A campaign for the limited edition letter packs",
    image: "https://picsum.photos/400?random=9",
    readMoreLink: "https://www.bol.com/nl/",
  },
  {
    title: "JBL",
    description: "Live like a champion with Jerome Boateng",
    image: "https://picsum.photos/400?random=10",
    readMoreLink: "https://www.bol.com/nl/",
  },
  {
    title: "ZALANDO",
    description: "Innovative SEO and content strategy for Zalando",
    image: "https://picsum.photos/400?random=11",
    readMoreLink: "https://www.bol.com/nl/",
  },
  {
    title: "KONINKLIJKE BIBLIOTHEEK",
    description: "The search of the most influential book ever",
    image: "https://picsum.photos/400?random=12",
    readMoreLink: "https://www.bol.com/nl/",
  },
];

export const clientCardsSecond: ClientCardProps[] = [
  {
    title: "LIBERTY GLOBAL",
    description: "Delivering complex commerce solutions",
    image: "https://picsum.photos/400?random=13",
    readMoreLink: "https://www.bol.com/nl/",
  },
  {
    title: "ARLA",
    description: "Swipe to find your next holiday destination",
    image: "https://picsum.photos/400?random=14",
    readMoreLink: "https://www.bol.com/nl/",
  },
];

export const quote: ClientQuoteProps = {
  quote:
    "Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online bookings in just one month",
  quoteAuthor: "MATTIJS TEN DRINK - CEO, TRANSAVIA",
};

export const clientsLogo: string[] = [
  "https://picsum.photos/400?random=1",
  "https://picsum.photos/400?random=2",
  "https://picsum.photos/400?random=3",
  "https://picsum.photos/400?random=4",
  "https://picsum.photos/400?random=5",
  "https://picsum.photos/400?random=6",
  "https://picsum.photos/400?random=7",
  "https://picsum.photos/400?random=8",
  "https://picsum.photos/400?random=9",
];

export const workSelector: WorkSelectorProps = {
  industries: [
    "all",
    "design",
    "marketing",
    "digital",
    "media",
    "creative",
    "business",
    "technology",
    "other",
  ],
  services: ["all", "web", "print", "video", "mobile", "other"],
};

export const hero: ClientCardProps[] = [
  {
    title: "BE LIGHTNING",
    description: "Delivering clarity on a global scale",
    scaled: "full",
    industry: "all",
    serviceDomain: "all",
    image:
      "data:image/png;base64, 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",
  },
];
