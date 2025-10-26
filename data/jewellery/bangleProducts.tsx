import { BangleProduct } from "@/types/bangles";

// Define the image sets for cycling
const IMAGE_SET_1 = [
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc4245258/images/hi-res/504015VNK1A02_1.jpg?sw=640&sh=640",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dweb95855a/images/hi-res/504015VNK1A02_2.jpg?sw=640&sh=640",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2f0079a8/images/hi-res/504015VNK1A02_3.jpg?sw=640&sh=640"
];

const IMAGE_SET_2 = [
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw44c3f706/images/hi-res/506060VJL1A02_1.jpg?sw=640&sh=640",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw81eebeee/images/hi-res/506060VJL1A02_2.jpg?sw=640&sh=640",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw59bbf2bb/images/hi-res/506060VJL1A02_3.jpg?sw=640&sh=640"
];

const IMAGE_SET_3 = [
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcefff6d3/images/hi-res/516061VAL1ACZ_1.jpg?sw=640&sh=640",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f680f34/images/hi-res/516061VAL1ACZ_2.jpg?sw=640&sh=640",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f680f34/images/hi-res/516061VAL1ACZ_2.jpg?sw=640&sh=640"
];

const IMAGE_SET_4 = [
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9fb268a8/images/hi-res/51W5B2VLZ1A00_1.jpg?sw=640&sh=640",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw343e1a59/images/hi-res/51W5B2VLZ1A00_2.jpg?sw=640&sh=640",
    "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw14a98025/images/hi-res/51W5B2VLT1A00_1.jpg?sw=640&sh=640"
];

export const bangleList: { [id: string]: BangleProduct } = {
  // --- Items BN-001 to BN-004 (Images provided by user) ---
  "BN-001": {
    category: 'bangles',
    title: "Classic Plain Gold Oval Kada",
    images: IMAGE_SET_1,
    price: 95500,
    offerPrice: 89999,
    karat: 22,
    weightInGrams: 7.258,
    size: "48*52",
  },
  "BN-002": {
    category: 'bangles',
    title: "Diamond Pave Slim Oval Bangle",
    images: IMAGE_SET_2,
    price: 135000,
    offerPrice: 128500,
    karat: 18,
    weightInGrams: 8.903,
    size: "50*55",
  },
  "BN-003": {
    category: 'bangles',
    title: "Traditional Filigree Oval Kada Set",
    images: IMAGE_SET_3,
    price: 155000,
    offerPrice: 147500,
    karat: 22,
    weightInGrams: 11.512,
    size: "52*56",
  },
  "BN-004": {
    category: 'bangles',
    title: "Contemporary Rose Gold Oval Cuff",
    images: IMAGE_SET_4,
    price: 78900,
    offerPrice: 75000,
    karat: 18,
    weightInGrams: 5.890,
    size: "46*50",
  },

  // --- Items BN-005 to BN-020 (Images cycled: 4x4 style) ---
  
  // Cycle 1 (BN-005 to BN-008)
  "BN-005": {
    category: 'bangles',
    title: "Emerald & Gold Stackable Oval",
    images: IMAGE_SET_1, // Uses BN-001's images
    price: 185000,
    offerPrice: 175000,
    karat: 22,
    weightInGrams: 14.120,
    size: "54*59",
  },
  "BN-006": {
    category: 'bangles',
    title: "Minimalist High-Polish Oval Bangle",
    images: IMAGE_SET_2, // Uses BN-002's images
    price: 68000,
    offerPrice: 64999,
    karat: 22,
    weightInGrams: 5.015,
    size: "47*51",
  },
  "BN-007": {
    category: 'bangles',
    title: "Intricate Antique Finish Oval Bangle",
    images: IMAGE_SET_3, // Uses BN-003's images
    price: 110500,
    offerPrice: 105000,
    karat: 24,
    weightInGrams: 8.765,
    size: "51*55",
  },
  "BN-008": {
    category: 'bangles',
    title: "Two-Tone Geometric Oval Design",
    images: IMAGE_SET_4, // Uses BN-004's images
    price: 99990,
    offerPrice: 95000,
    karat: 18,
    weightInGrams: 6.992,
    size: "49*53",
  },
  
  // Cycle 2 (BN-009 to BN-012)
  "BN-009": {
    category: 'bangles',
    title: "Heavy Royal Temple Oval Kada",
    images: IMAGE_SET_1, // Uses BN-001's images
    price: 198000,
    offerPrice: 185000,
    karat: 22,
    weightInGrams: 15.105,
    size: "55*59",
  },
  "BN-010": {
    category: 'bangles',
    title: "Delicate Diamond Illusion Oval Bangle",
    images: IMAGE_SET_2, // Uses BN-002's images
    price: 118000,
    offerPrice: 112000,
    karat: 18,
    weightInGrams: 7.501,
    size: "45*50",
  },
  "BN-011": {
    category: 'bangles',
    title: "Floral Engraved Single Oval Bangle",
    images: IMAGE_SET_3, // Uses BN-003's images
    price: 88000,
    offerPrice: 83500,
    karat: 22,
    weightInGrams: 6.544,
    size: "53*57",
  },
  "BN-012": {
    category: 'bangles',
    title: "Sleek Rhodium Plated Oval Kada",
    images: IMAGE_SET_4, // Uses BN-004's images
    price: 105000,
    offerPrice: 99999,
    karat: 18,
    weightInGrams: 7.025,
    size: "48*54",
  },
  
  // Cycle 3 (BN-013 to BN-016)
  "BN-013": {
    category: 'bangles',
    title: "Wide Carved Ethnic Oval Bangle",
    images: IMAGE_SET_1, // Uses BN-001's images
    price: 165000,
    offerPrice: 158000,
    karat: 22,
    weightInGrams: 12.980,
    size: "50*56",
  },
  "BN-014": {
    category: 'bangles',
    title: "Beaded Edge Stacking Oval Bangle",
    images: IMAGE_SET_2, // Uses BN-002's images
    price: 72500,
    offerPrice: 69000,
    karat: 22,
    weightInGrams: 5.511,
    size: "46*52",
  },
  "BN-015": {
    category: 'bangles',
    title: "South Indian Style Screw Oval Kada",
    images: IMAGE_SET_3, // Uses BN-003's images
    price: 145000,
    offerPrice: 138000,
    karat: 24,
    weightInGrams: 10.198,
    size: "52*57",
  },
  "BN-016": {
    category: 'bangles',
    title: "Simple Solid Gold Oval Band",
    images: IMAGE_SET_4, // Uses BN-004's images
    price: 82000,
    offerPrice: 78000,
    karat: 22,
    weightInGrams: 6.009,
    size: "47*53",
  },
  
  // Cycle 4 (BN-017 to BN-020)
  "BN-017": {
    category: 'bangles',
    title: "Ruby Studded Openable Oval Bangle",
    images: IMAGE_SET_1, // Uses BN-001's images
    price: 122000,
    offerPrice: 115000,
    karat: 18,
    weightInGrams: 8.230,
    size: "51*58",
  },
  "BN-018": {
    category: 'bangles',
    title: "Art Deco Inspired Oval Bangle",
    images: IMAGE_SET_2, // Uses BN-002's images
    price: 175000,
    offerPrice: 169000,
    karat: 22,
    weightInGrams: 13.567,
    size: "60*53", // Adjusted minor axis for variety
  },
  "BN-019": {
    category: 'bangles',
    title: "Lightweight Daily Wear Oval Bangle",
    images: IMAGE_SET_3, // Uses BN-003's images
    price: 70500,
    offerPrice: 67000,
    karat: 22,
    weightInGrams: 5.150,
    size: "45*51",
  },
  "BN-020": {
    category: 'bangles',
    title: "Textured Finish Thick Oval Kada",
    images: IMAGE_SET_4, // Uses BN-004's images
    price: 139000,
    offerPrice: 132000,
    karat: 18,
    weightInGrams: 9.876,
    size: "49*54",
  },
};