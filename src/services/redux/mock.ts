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
    industry: "mobile",
    serviceDomain: "marketing",
  },
  {
    title: "KEMPEN",
    description: "Not some average banking website",
    image: "https://picsum.photos/400?random=2",
    readMoreLink: "https://www.bol.com/nl/",
    industry: "mobile",
    serviceDomain: "marketing",
  },
  {
    title: "PHILIPS",
    description: "Beautiful design meets innovative technology",
    image: "https://picsum.photos/400?random=3",
    readMoreLink: "https://www.bol.com/nl/",
    industry: "design",
    serviceDomain: "marketing",
  },
  {
    title: "GEMEENTEMUSEUM",
    description: "A 100 years of Mondriaan & De Stijl",
    image: "https://picsum.photos/400?random=4",
    readMoreLink: "https://www.bol.com/nl/",
    industry: "mobile",
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
