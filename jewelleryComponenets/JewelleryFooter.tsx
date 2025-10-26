"use client"

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const JewelryFooter = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const imageVariants: Variants = {
        hidden: { y: 30, scale: .8 },
        visible: {
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const socialIconVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="relative bg-gradient-to-br from-amber-950 via-stone-900 to-neutral-900 text-stone-200 mt-24 md:mt-32"
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="absolute top-10 right-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-80 h-80 bg-orange-700 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-12 lg:pb-16">
                <div className="relative z-100 grid grid-cols-3 w-full md:w-[80%] xl:w-[70%] max-w-[700px] gap-2 md:gap-3 lg:gap-6 transform -translate-y-1/3">
                    <motion.div className="aspect-[4/5] lg:aspect-square bg-white/30  relative rounded-bl-2xl lg:rounded-bl-4xl rounded-lg overflow-hidden" variants={itemVariants}>
                        <Image src="/footermodel1.jpeg" alt="footermodel" fill unoptimized className="object-cover" />
                    </motion.div>
                    <motion.div className="aspect-[4/5] lg:aspect-square bg-white/30  relative  overflow-hidden rounded-lg" variants={itemVariants}>
                        <Image src="/footermodel2.jpg" alt="footermodel" fill unoptimized className="object-cover" />
                    </motion.div>
                    <motion.div className="aspect-[4/5] lg:aspect-square bg-white/30  relative rounded-tr-2xl lg:rounded-tr-4xl overflow-hidden rounded-lg" variants={itemVariants}>
                        <Image src="/footermodel3.jpg" alt="footermodel" fill unoptimized className="object-cover" />
                    </motion.div>
                </div>
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mb-10 lg:mb-16">

                    {/* About Section */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-2 sm:space-y-4 lg:space-y-6"
                    >
                        <motion.h3
                            className="text-2xl lg:text-3xl font-light tracking-wider font-serif text-amber-200"
                            whileHover={{ letterSpacing: "0.2em" }}
                            transition={{ duration: 0.3 }}
                        >
                            About
                        </motion.h3>
                        <p className="text-stone-400 leading-relaxed text-sm lg:text-base font-light">
                            Every piece of jewellery tells a story — of artistry, elegance, and timeless beauty.
                            Our collections are crafted with precision and passion, blending modern design with traditional craftsmanship
                            to create treasures that shine for generations.
                        </p>
                        <motion.div
                            className="pt-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <a href="#" className="text-amber-300 text-sm tracking-widest hover:text-amber-200 transition-colors inline-flex items-center gap-2">
                                DISCOVER MORE
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Newsletter Section */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-3 md:space-y-6 lg:col-span-1"
                    >
                        <h3 className="text-2xl ˀ lg:text-3xl font-light font-serif tracking-wider text-amber-200 text-center">
                            Sign Up For Shop Updates
                        </h3>
                        <div className="space-y-4 flex flex-col items-center">
                            <motion.input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-stone-800/50 border rounded-full border-amber-900/30  px-6 py-4 text-stone-300 placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors backdrop-blur-sm"
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.button
                                className="w-[80%]
                                bg-gradient-to-r rounded-full from-yellow-900/70 to-yellow-950/70
                                 text-white py-4 px-8 tracking-widest text-sm font-light hover:from-yellow-900 hover:to-yellow-950 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                SUBSCRIBE
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-2 sm:space-y-4 lg:space-y-6 lg:text-right"
                    >
                        <motion.h3 className="text-2xl whitespace-pre-wrap lg:text-3xl font-light tracking-wider font-serif text-amber-200"
                            whileHover={{ letterSpacing: "0.2em" }}
                            transition={{ duration: 0.3 }}
                        >
                            Contact
                        </motion.h3>
                        <motion.a
                            href="mailto:hello@divijewelry.com"
                            className="block text-stone-400 hover:text-amber-300 transition-colors text-sm lg:text-base"
                            whileHover={{ scale: 1.05 }}
                        >
                            hello@divijewelry.com
                        </motion.a>

                        {/* Social Icons */}
                        <motion.div
                            className="flex gap-4 justify-start lg:justify-end pt-4"
                            variants={containerVariants}
                        >
                            {['F', 'T', 'I'].map((icon, index) => (
                                <motion.a
                                    key={icon}
                                    href="#"
                                    variants={socialIconVariants}
                                    className="w-12 h-12 rounded-full border border-amber-900/40 flex items-center justify-center text-amber-200 hover:bg-amber-900/30 hover:border-amber-600 transition-all duration-300 backdrop-blur-sm"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 360,
                                        borderColor: "#d97706"
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-sm font-light">{icon}</span>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    variants={itemVariants}
                    className="border-t border-amber-800/20 my-6 lg:my-12"
                />

                {/* Navigation Links */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-8 mb-8 lg:mb-12 text-center"
                >
                    {['COLLECTIONS', 'HERITAGE', 'CRAFTSMANSHIP', 'BOUTIQUES', 'CARE GUIDE', 'ABOUT', 'CONTACT'].map((link) => (
                        <motion.a
                            key={link}
                            href="#"
                            className="text-stone-400 text-xs lg:text-sm tracking-wider hover:text-amber-300 transition-colors font-light"
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                        >
                            {link}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-amber-800/20"
                >
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-stone-500">
                        <motion.a
                            href="#"
                            className="hover:text-amber-400 transition-colors"
                            whileHover={{ y: -2 }}
                        >
                            Terms & Conditions
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-amber-400 transition-colors"
                            whileHover={{ y: -2 }}
                        >
                            Privacy Policy
                        </motion.a>
                    </div>
                    <p className="text-xs text-stone-500 text-center md:text-right font-light">
                        Copyright © 2025 Divine Jewelry. All rights reserved.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Corner Elements */}
            <motion.div
                className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-amber-800/20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-amber-800/20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
            />
        </motion.footer>
    );
};

export default JewelryFooter;