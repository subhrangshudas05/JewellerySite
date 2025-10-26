import { ChainProduct } from "@/types/chains"; // Assuming you have a file for ChainProduct

// Define image sets to cycle through (reusing the Tanishq URLs from earlier examples)
const IMAGE_SET_1 = [
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw40347874/images/hi-res/511016COAAA00_1.jpg?sw=640&sh=640",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw861fccee/images/hi-res/511016COAAA00_2.jpg?sw=640&sh=640",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw355f74ad/images/hi-res/511016COAAA00_3.jpg?sw=640&sh=640"
    ];

const IMAGE_SET_2 = [
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4f6e1309/images/hi-res/51M5A1CAMLA00_1.jpg?sw=640&sh=640",
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4f6e1309/images/hi-res/51M5A1CAMLA00_2.jpg?sw=640&sh=640",
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4f6e1309/images/hi-res/51M5A1CAMLA00_4.jpg?sw=640&sh=640"
    ];

const IMAGE_SET_3 = [
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb6e5277/images/hi-res/51D5B1CCFAA00_1.jpg?sw=640&sh=640",
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb6e5277/images/hi-res/51D5B1CCFAA00_2.jpg?sw=640&sh=640",
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb6e5277/images/hi-res/51D5B1CCFAA00_4.jpg?sw=640&sh=640",
    ];

const IMAGE_SET_4 = [
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b279841/images/hi-res/504025CIFAA00_1.jpg?sw=640&sh=640",
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b279841/images/hi-res/504025CIFAA00_3.jpg?sw=640&sh=640",
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b279841/images/hi-res/504025CIFAA00_5.jpg?sw=640&sh=640",

    ];

const getImageSet = (index: number) => {
    switch (index % 4) {
        case 0: return IMAGE_SET_1;
        case 1: return IMAGE_SET_2;
        case 2: return IMAGE_SET_3;
        case 3: return IMAGE_SET_4;
        default: return [];
    }
}


export const chainList: { [id: string]: ChainProduct } = {
  "CH-001": {
    category: 'chains',
    title: "Classic Foxtail Chain",
    images: getImageSet(0),
    price: 65000,
    offerPrice: 59999,
    karat: 22,
    weightInGrams: 5.505,
    size: 16, // inches
  },
  "CH-002": {
    category: 'chains',
    title: "Minimalist Rope Chain",
    images: getImageSet(1),
    price: 78000,
    offerPrice: 72500,
    karat: 18,
    weightInGrams: 6.890,
    size: 18,
  },
  "CH-003": {
    category: 'chains',
    title: "Diamond-Cut Curb Chain",
    images: getImageSet(2),
    price: 92000,
    offerPrice: 86500,
    karat: 22,
    weightInGrams: 8.122,
    size: 15,
  },
  "CH-004": {
    category: 'chains',
    title: "Thin Venetian Box Chain",
    images: getImageSet(3),
    price: 59900,
    offerPrice: 55000,
    karat: 22,
    weightInGrams: 5.018,
    size: 17,
  },
  "CH-005": {
    category: 'chains',
    title: "Flat Byzantine Chain",
    images: getImageSet(4),
    price: 110500,
    offerPrice: 105000,
    karat: 24,
    weightInGrams: 9.876,
    size: 18,
  },
  "CH-006": {
    category: 'chains',
    title: "Delicate Cable Chain",
    images: getImageSet(5),
    price: 52000,
    offerPrice: 48500,
    karat: 18,
    weightInGrams: 4.567,
    size: 15,
  },
  "CH-007": {
    category: 'chains',
    title: "Heavy Wheat Chain",
    images: getImageSet(6),
    price: 135000,
    offerPrice: 128900,
    karat: 22,
    weightInGrams: 11.991,
    size: 17,
  },
  "CH-008": {
    category: 'chains',
    title: "Fancy Popcorn Chain",
    images: getImageSet(7),
    price: 88000,
    offerPrice: 83500,
    karat: 22,
    weightInGrams: 7.524,
    size: 16,
  },
  "CH-009": {
    category: 'chains',
    title: "Triple Layered Chain",
    images: getImageSet(8),
    price: 105000,
    offerPrice: 99990,
    karat: 18,
    weightInGrams: 8.901,
    size: 15,
  },
  "CH-010": {
    category: 'chains',
    title: "Solid Mariner Chain",
    images: getImageSet(9),
    price: 120000,
    offerPrice: 115000,
    karat: 24,
    weightInGrams: 10.111,
    size: 18,
  },
  "CH-011": {
    category: 'chains',
    title: "Figaro Chain with Pattern",
    images: getImageSet(10),
    price: 71000,
    offerPrice: 66900,
    karat: 22,
    weightInGrams: 6.003,
    size: 17,
  },
  "CH-012": {
    category: 'chains',
    title: "Singapore Twist Chain",
    images: getImageSet(11),
    price: 55500,
    offerPrice: 51900,
    karat: 18,
    weightInGrams: 4.987,
    size: 16,
  },
  "CH-013": {
    category: 'chains',
    title: "Hollow Herringbone Chain",
    images: getImageSet(12),
    price: 80500,
    offerPrice: 76500,
    karat: 22,
    weightInGrams: 7.234,
    size: 18,
  },
  "CH-014": {
    category: 'chains',
    title: "Bead Station Chain",
    images: getImageSet(13),
    price: 95000,
    offerPrice: 89900,
    karat: 18,
    weightInGrams: 8.560,
    size: 15,
  },
  "CH-015": {
    category: 'chains',
    title: "Double Rolo Chain",
    images: getImageSet(14),
    price: 68000,
    offerPrice: 64900,
    karat: 22,
    weightInGrams: 5.912,
    size: 17,
  },
  "CH-016": {
    category: 'chains',
    title: "Shiny Snake Chain",
    images: getImageSet(15),
    price: 115000,
    offerPrice: 109990,
    karat: 24,
    weightInGrams: 9.500,
    size: 16,
  },
  "CH-017": {
    category: 'chains',
    title: "Hammered Link Chain",
    images: getImageSet(16),
    price: 75000,
    offerPrice: 71000,
    karat: 18,
    weightInGrams: 6.456,
    size: 18,
  },
  "CH-018": {
    category: 'chains',
    title: "Classic Box Chain",
    images: getImageSet(17),
    price: 128000,
    offerPrice: 122000,
    karat: 22,
    weightInGrams: 10.987,
    size: 15,
  },
  "CH-019": {
    category: 'chains',
    title: "Lightweight Spiga Chain",
    images: getImageSet(18),
    price: 60000,
    offerPrice: 56900,
    karat: 22,
    weightInGrams: 5.341,
    size: 17,
  },
  "CH-020": {
    category: 'chains',
    title: "High-Polish Franco Chain",
    images: getImageSet(19),
    price: 142000,
    offerPrice: 135000,
    karat: 24,
    weightInGrams: 12.550,
    size: 18,
  },
};