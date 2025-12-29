// src/types/product.ts
export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price?: string;
  rating?: number;
}
export interface ProductResponse {
  products: Product[];
}