/** Listing shown in the homepage "Featured Properties" grid. */
export interface FeaturedProperty {
  id: number;
  title: string;
  location: string;
  sqm: number;
  beds: number;
  baths: number;
  /** Pre-formatted price, e.g. "₦4,000,000". */
  price: string;
  discount?: string;
  image: string;
}

/** Client quote shown in the testimonials section. */
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}
