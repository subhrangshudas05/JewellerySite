export interface JewelryProduct {
  title: string;
  images: string[];
  price: number;
  offerPrice: number;
  karat: 18 | 22 | 24;
  weightInGrams: number;
}