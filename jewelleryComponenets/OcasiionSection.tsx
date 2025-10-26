"use client"

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const OccasionSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const occasions = [
        { id: 1, name: 'Wedding', image: 'https://www.krishnajewellers.com/blog/wp-content/uploads/2024/09/400-1024x1024.webp' },
        { id: 2, name: 'Diamond', image: '/diamond.jpeg' },
        { id: 3, name: 'Gold', image: 'https://rubans.in/cdn/shop/files/rubans-22k-gold-plated-multi-strand-necklace-set-with-leaf-motifs-and-matching-drop-earrings-for-womens-girls-necklaces-necklace-sets-chains-mangalsutra-1151182527.jpg?v=1751576314' },
        { id: 4, name: 'Dailywear', image: 'https://sustainablereview.com/wp-content/uploads/2023/07/Aurate-93_1200x-1.jpg' },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="py-8 lg:py-16 px-6 lg:px-12"
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div 
                    variants={itemVariants}
                    className="text-center mb-8 lg:mb-16"
                >
                    <h2 className="text-3xl lg:text-5xl font-serif text-stone-900 mb-1 lg:mb-3">
                        Divine Elegance
                    </h2>
                    <p className="text-stone-600 text-sm lg:text-base tracking-wide">
                        A companion for every occasion
                    </p>
                </motion.div>

                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
                    {occasions.map((occasion) => (
                        <motion.div
                            key={occasion.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
                        >
                            <Image
                                src={occasion.image}
                                alt={occasion.name}
                                fill
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                            <motion.h3
                                className="absolute bottom-4 lg:bottom-8 left-8 text-white text-2xl lg:text-4xl font-serif"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {occasion.name}
                            </motion.h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default OccasionSection;