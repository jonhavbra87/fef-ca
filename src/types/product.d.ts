export interface Product {
  id: string; // Merk at `id` er en string basert på responsen
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string; // Alt-teksten kan være tom, men bør likevel være med
  };
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}
