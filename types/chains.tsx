import { JewelryProduct } from './jewellery';

export interface ChainProduct extends JewelryProduct {
    category: 'chains';
    size: number;
}
