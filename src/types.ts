export type products = Product[];

export interface Product {
  id: string;
  title: string;
  price: any;
  description?: string;
  category?: string;
  image?: string;
  rating?: Rating;
  imageUrl?: string;
}

export interface Rating {
  rate: number;
  count: number;
}
