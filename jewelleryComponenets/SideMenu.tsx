'use client'

import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

interface SideMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const menuItems = [
    { name: 'All Jewellery', href: '/jewellery/rings' },
    { name: 'Gold', href: '/jewellery/rings' },
    { name: 'Diamond', href: '/jewellery/rings' },
    { name: 'Earrings', href: '/jewellery/ear-rings' },
    { name: 'Rings', href: '/jewellery/finger-rings' },
    { name: 'Daily Wear', href: '/jewellery/rings' },
    { name: 'Collections', href: '/jewellery/rings' },
    { name: 'Wedding', href: '/jewellery/rings' },
    { name: 'Gifting', href: '/jewellery/rings' },
    { name: 'Admin', href: '/jewellery/admin-dashboard' },
    { name: 'About Us', href: '/jewellery/rings' },
    { name: 'Contact Us', href: '/jewellery/rings' },
];

// Sidebar backdrop animation
const backdropVariants: Variants = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    closed: {
        opacity: 0,
        transition: {
            duration: 0.3,
            delay: 0.4,
        },
    },
};

// Sidebar container animation
const sidebarVariants: Variants = {
    open: {
        x: 0,
        transition: {
            type: "tween",
            duration: 0.4,
            ease: "easeOut",
        },
    },
    closed: {
        x: "-100%",
        transition: {
            type: "tween",
            duration: 0.3,
            ease: "easeIn",
            delay: 0.4,
        },
    },
};

// Navigation list with stagger children
const navVariants: Variants = {
    open: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.03,
            staggerDirection: -1
        },
    },
};

// Individual menu item animation (moves up from below)
const itemVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, setIsOpen }) => {
    // Disable body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [isOpen]);

    const router = useRouter();

    const handleLinkClick = (href: string) => {
        setIsOpen(false);
        // Replace with your actual routing logic
        setTimeout(() => {
            router.push(href)
        }, 400);
    };

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={backdropVariants}
                className="fixed inset-0 bg-black/50 z-[400]"
                onClick={() => setIsOpen(false)}
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            />

            {/* Side Menu */}
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={sidebarVariants}
                className="fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-amber-50 to-amber-100 z-[500] shadow-2xl"
            >
                {/* Close Button */}
                <div className="flex justify-between items-center px-6 py-2 border-b border-gray-200">
                    <div className="h-15 w-30 relative">
                        <Image src="/jewlLogoMobile.png" alt="Jewellery Logo" fill className="object-contain" />
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className=" rounded-full hover:bg-red-100 transition-colors"
                    >
                        <X size={20} className="text-gray-700" />
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="py-6 px-4 overflow-y-auto h-[calc(100%-80px)]">
                    <motion.ul
                        variants={navVariants}
                        className="space-y-2"
                    >
                        {menuItems.map((item, index) => (
                            <motion.li
                                key={item.name}
                                variants={itemVariants}
                            >
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(item.href);
                                    }}
                                    className="block poppins px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-orange-100 hover:to-yellow-50 hover:text-red-800 active:bg-yellow-700/30 hover:font-bold hover:scale-105 transition-all duration-200 transform origin-left cursor-pointer active:scale-95"
                                >
                                    {item.name}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </nav>
            </motion.div>
        </>
    );
};

export default SideMenu;