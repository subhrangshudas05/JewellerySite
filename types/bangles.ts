import { JewelryProduct } from './jewellery';

export interface BangleProduct extends JewelryProduct {
    category: 'bangles';
    size: string;
}
