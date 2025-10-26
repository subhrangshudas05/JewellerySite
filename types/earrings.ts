import { JewelryProduct } from './jewellery';

export interface EarringProduct extends JewelryProduct {
    category: 'ear-rings';

    type: 'stud' | 'hoop' | 'drop' | 'jhumka' | 'chandbali';
}
