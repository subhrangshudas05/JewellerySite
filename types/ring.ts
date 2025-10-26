import { JewelryProduct } from "./jewellery";

export interface RingProduct extends JewelryProduct {
  category: 'finger-rings'; 
  sizeInCm: number;
}