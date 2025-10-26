'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const JewelrySections = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const categories = [
        { id: 1, name: 'EARRINGS', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw83758477/homepage/shopByCategory/earrings-cat.jpg' },
        { id: 2, name: 'FINGER RINGS', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47da8133/homepage/shopByCategory/rings-cat.jpg' },
        { id: 3, name: 'PENDANTS', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw63553376/homepage/shopByCategory/pendants-cat.jpg' },
        { id: 4, name: 'MANGALSUTRA', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw442a2739/homepage/shopByCategory/mangalsutra-cat.jpg' },
        { id: 5, name: 'BRACELETS', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2562a9fe/homepage/shopByCategory/bracelets-cat.jpg' },
        { id: 6, name: 'BANGLES', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1226b98b/homepage/shopByCategory/bangles-cat.jpg' },
        { id: 7, name: 'CHAINS', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd0550e4c/homepage/shopByCategory/chains-cat.jpg' },
    ];

    const trending = [
        { id: 1, name: 'Auspicious Occasion', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw04fafb24/homepage/trendingNow/auspicious-trending.jpg' },
        { id: 2, name: 'Gifting Jewellery', image: 'https://i.pinimg.com/736x/ef/74/df/ef74df3b3b3549f1035d383da04c4d54.jpg' },
        { id: 3, name: 'Drops of Radiance', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw14cb72b2/homepage/trendingNow/drops-of-radiance.jpg' },
    ];

    return (
        <div className=" py-12 lg:py-20 px-6 lg:px-12">
            {/* Categories Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="max-w-7xl mx-auto mb-12 lg:mb-32"
            >
                <motion.div variants={itemVariants} className="text-center mb-8 lg:mb-12">
                    <h2 className="text-3xl lg:text-5xl font-serif text-stone-900 mb-1 lg:mb-3">
                        Find Your Perfect Match
                    </h2>
                    <p className="text-stone-600 text-sm tracking-wide">Shop by Categories</p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <h3 className="text-center text-stone-900 text-base  transition-all duration-300 group-hover:tracking-widest font-light">
                                {category.name}
                            </h3>
                        </motion.div>
                    ))}

                    {/* View All Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md bg-gradient-to-br from-amber-50 to-stone-100 flex flex-col items-center justify-center">
                            <motion.div
                                className="text-6xl font-serif text-amber-800 mb-2"
                                whileHover={{ scale: 1.1 }}
                            >
                                10<span className="text-4xl">+</span>
                            </motion.div>
                            <p className="text-stone-600 text-xs">Categories to chose from</p>
                        </div>
                        <h3 className="text-center text-stone-900 text-sm  transition-all duration-300 group-hover:tracking-widest font-light">
                            VIEW ALL
                        </h3>
                    </motion.div>
                </div>
            </motion.section>

            {/* Trending Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >;
                <motion.div variants={itemVariants} className="text-center mb-8 lg:mb-12">
                    <h2 className="text-3xl lg:text-5xl font-serif text-stone-900 mb-1 lg:mb-3">
                        Trending Now
                    </h2>
                    <p className="text-stone-600 text-sm tracking-wide">
                        Jewellery pieces everyone's eyeing right now
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trending.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, y: -8 }}
                            transition={{ duration: 0.4 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[5/4] lg:aspect-[4/5] rounded-2xl overflow-hidden mb-3 lg:mb-6 shadow-lg">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    // fill
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* use motion.h3 with animate + group-hover */}
                            <motion.h3
                                className="text-center text-stone-800 text-xl font-serif transition-all duration-300 group-hover:tracking-wider"
                                initial={false}
                            >
                                {item.name}
                            </motion.h3>
                        </motion.div>
                    ))}

                </div>
            </motion.section>
        </div>
    );
};

export default JewelrySections;