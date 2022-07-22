export type Note = {
  title: string;
  content: string;
  readMoreLink: string;
};

export type ClientCardProps = {
  title: string;
  description: string;
  image: string;
  readMoreLink: string;
  notes?: Note[];
  scaled?: "left" | "right";
};

export type ClientQuoteProps = {
  quote: string;
  quoteAuthor: string;
};
