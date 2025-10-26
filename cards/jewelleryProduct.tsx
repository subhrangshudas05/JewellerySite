
'use client';

import React, { useState, useRef } from 'react';
// useRouter and Image from Next.js are removed to resolve build errors in this environment.
// In a real Next.js project, you would use them.
import { Heart } from 'lucide-react';
import { JewelryProduct } from '@/types/jewellery'; 
import Link from 'next/link';

export default function JewelleryProductCard({ id, product, category }: { id: string; product: JewelryProduct; category: string }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    // Stop the click from propagating to the parent <a> tag, which would cause navigation.
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

const thumbnailUrl =
  product.images && product.images.length > 0
    ? product.images[0]
    : category === "finger-ring"
    ? "/ring.jpg"
    : category === "ear-ring"
    ? "/earring.jpg"
    : "/earring.jpg";

    return (
    <Link
      ref={cardRef}
      target='_blank'
      href={`/jewellery/${category}/${id}`}
      className="bg-white/50 rounded-lg overflow-hidden group cursor-pointer border border-gray-200/80 hover:shadow-lg transition-all duration-300 block"
    >
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        {/* Using a standard <img> tag instead of Next/image */}
        <img
          src={thumbnailUrl}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <button
          onClick={handleFavoriteClick}
          aria-label="Toggle favorite"
          className="absolute top-1 mf:top-3 right-1 md:right-3 w-6 md:w-9 h-6 md:h-9  rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500 fill-white/90'
            }`}
          />
        </button>
      </div>
      <div className="p-2 sm:p-4">
        <h3 className="text-sm md:text-lg font-serif font-semibold text-gray-800 mb-1 sm:mb-2 truncate">
          {product.title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-base md:text-xl poppins font-bold text-gray-900">
            ₹{product.offerPrice.toLocaleString('en-IN')}
          </span>
          <span className="text-sm poppins text-gray-500 line-through">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </Link>
  );
}

