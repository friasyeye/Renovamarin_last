export interface Room {
  name: string;
  description: string;
  image: string;
  size: string;
  bed: string;
}

export interface Service {
  number: string;
  title: string;
  tags: string[];
  description: string;
  image: string;
}

export interface WalkStat {
  number: string;
  label: string;
  image: string;
}

export interface Package {
  badge: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  image: string;
}

export interface GalleryItem {
  image: string;
  caption: string;
}

export interface NewsPost {
  category: string;
  title: string;
  date: string;
  image: string;
}
