export interface Product {
  id: string;
  name: string;
  rating: number;
  price: number;
  link: string;
}

export interface Testimonial {
  id: string;
  petName: string;
  petBreed: string;
  location: string;
  ownerName: string;
  testimonialText: string;
  image: string;
  date: string;
  products: Product[];
}