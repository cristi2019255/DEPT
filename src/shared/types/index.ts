export type Note = {
  title: string;
  content: string;
  readMoreLink: string;
};

export type ClientCardProps = {
  title: string;
  description: string;
  image: string;
  readMoreLink?: string;
  notes?: Note[];
  scaled?: "left" | "right" | "full";
  contentWidth?: "left";
  industry?: string;
  serviceDomain?: string;
};

export type ClientQuoteProps = {
  quote: string;
  quoteAuthor: string;
};

export type WorkSelectorProps = {
  industries: string[];
  services: string[];
  selectedIndustry?: string;
  selectedService?: string;
};

export type ContactData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormProps = {
  onSubmit: (formData: ContactData) => void;
};
