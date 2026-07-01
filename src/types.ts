export interface Ingredient {
  id: string;
  name: string;
  origin: string;
  story: string;
  image: string;
  x: number; // Percent from left on Djerba map (0-100)
  y: number; // Percent from top on Djerba map (0-100)
  aroma: string;
  heritageText: string;
}

export interface Experience {
  id: string;
  name: string;
  duration: string;
  description: string;
  highlights: string[];
  image: string;
  price?: string;
  vibe: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  contents: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface PartnerBenefit {
  title: string;
  description: string;
}

export interface ReservationState {
  name: string;
  whatsapp: string;
  email: string;
  guests: number;
  date: string;
  experienceType: string;
  notes: string;
}
