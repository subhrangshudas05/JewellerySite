'use client'

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { ChevronDown, Filter, Plus, X } from 'lucide-react';
import Image from 'next/image';
import { JewelryProduct } from '@/types/jewellery';
import { BangleProduct } from "@/types/bangles";
import { RingProduct } from "@/types/ring";
import { EarringProduct } from "@/types/earrings";

// Import both data lists
import { earringList } from '@/data/jewellery/earringProducts';
import { ringList } from '@/data/jewellery/ringProducts';
import { bangleList } from '@/data/jewellery/bangleProducts';
import { chainList } from '@/data/jewellery/chainProduct';

import JewelleryProductCard from '@/cards/jewelleryProduct';

type AllProducts = RingProduct | EarringProduct | BangleProduct; // Add other types like RingProduct

const productConfig: {
  [key: string]: {
    title: string;
    imageSrc: string;
    // FIX: Use an index signature that returns the union of ALL product types
    dataList: { [id: string]: AllProducts }; 
    category: string;
  }
} = {
  'ear-rings': {
    title: 'Ear Rings',
    imageSrc: '/earring.jpg',
    dataList: earringList,
    category: 'ear-rings', // Category to pass to the card
  },
  'finger-rings': {
    title: 'Finger Rings',
    imageSrc: '/ring.jpg',
    dataList: ringList,
    category: 'finger-rings', // Category to pass to the card
  },
  'bangles': {
    title: 'Bangles',
    imageSrc: '/bangles.jpg',
    dataList: bangleList,
    category: 'bangles', // Category to pass to the card
  },
  'chains': {
    title: 'Chains',
    imageSrc: '/chains.jpg',
    dataList: bangleList,
    category: 'bangles', // Category to pass to the card
  },
};

// Fallback configuration for unknown routes
const fallbackConfig = {
  title: 'Products',
  imageSrc: 'https://placehold.co/1600x600/f0f0f0/999999?text=Products',
  dataList: {},
  category: 'all',
};

const Page = () => {
  // Get the dynamic route parameter
  const params = useParams();
  const productType = params.product as string; // e.g., 'ear-rings' or 'finger-rings'

  // Get the correct configuration, or use fallback
  const config = productConfig[productType] || fallbackConfig;
  const resultCount = Object.keys(config.dataList).length;

  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Best Matches');
  const [activeFilters, setActiveFilters] = useState<string[]>([
    '₹25,000 - ₹50,000',
    'Gifts For Him',
    'Women',
    'Gold Jewellery'
  ]);

  const sortOptions = [
    'Best Sellers',
    'New Arrivals',
    'Recommendations',
    'Best Matches',
    'Price : Low To High',
    'Price : High To Low'
  ];

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className='min-h-screen text-3xl text-black'>
      {/* Dynamic Banner Image */}
      <div className="h-[40vh] lg:h-[50vh] xl:h-[60vh] max-h-[800px] max-w-[2000px] mx-auto w-full relative md:mb-4">
        <Image
          src={config.imageSrc}
          alt={config.title}
          fill
          unoptimized
          className="object-cover w-full h-full"
          onError={(e) => {
            // Fallback in case the image fails to load
            e.currentTarget.src = `https://placehold.co/1600x600/f0f0f0/999999?text=${config.title}`;
          }}
        />
      </div>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Header with Dynamic Title and Count */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-gray-900">
              {config.title} <span className="text-gray-500 font-normal text-2xl sm:text-3xl lg:text-4xl">({resultCount} results)</span>
            </h1>
          </div>

          {/* Filter Bar (remains the same) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            {/* Filters Container */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {/* Filter Button */}
              <button className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 border border-gray-300 rounded-full hover:border-gray-400 transition-colors bg-white shadow-sm">
                <Filter className="w-4 h-4 text-gray-700" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">Filter</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {/* Active Filters */}
              {activeFilters.map((filter, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-full hover:border-gray-400 transition-colors bg-white shadow-sm group"
                  onClick={() => removeFilter(filter)}
                >
                  <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-600" />
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">{filter}</span>
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
              ))}

              {/* Show More */}
              <button className="text-pink-600 font-medium text-sm hover:text-pink-700 transition-colors whitespace-nowrap">
                +Show More
              </button>
            </div>

            {/* Sort By */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full sm:rounded-lg hover:border-gray-400 transition-colors bg-white shadow-sm w-full sm:w-auto sm:min-w-[240px]"
              >
                <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">Sort By:</span>
                <span className="text-gray-900 font-medium text-xs sm:text-sm flex-1 text-left">
                  {selectedSort}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ${sortOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Sort Dropdown */}
              {sortOpen && (
                <div className="fixed bottom-4 w-[95%] left-1/2 -translate-x-1/2 md:absolute md:right-0 md:top-full transform mt-0 sm:w-64 rounded-2xl shadow-xl border bg-white border-gray-500 p-4 z-50 h-[360px] overflow-y-auto">
                  <div className="px-4 py-3 border-b border-gray-950">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-500 font-semibold text-sm sm:text-base">Sort By</h3>
                      <button
                        onClick={() => setSortOpen(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="py-1">
                    {sortOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedSort(option);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-xs sm:text-sm transition-colors ${selectedSort === option
                          ? 'bg-pink-50 text-pink-700 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Dynamic Product Grid */}
          <div className="w-full pt-0 md:pt-4 pb-6 md:pb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {Object.entries(config.dataList).map(([id, product]) => {
                const prod = product as JewelryProduct;
                return (
                  <JewelleryProductCard
                    key={id}
                    id={id}
                    product={prod}
                    category={config.category} // Pass the dynamic category
                  />
                )
              })}
            </div>
          </div>

        </div>

        {/* Overlay when sort is open */}
        {sortOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setSortOpen(false)}
          />
        )}

      </div>
    </div>
  )
}

export default Page

