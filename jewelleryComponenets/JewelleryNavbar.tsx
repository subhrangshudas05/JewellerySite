'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import SideMenu from './SideMenu';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

// ICONS FROM LUCIDE-REACT
// You'll need to install lucide-react: npm install lucide-react
import {
    Search,
    Mic,
    Camera,
    Gem,
    Store,
    Heart,
    User,
    ShoppingCart,
    Menu,
    Gift,
    MessageSquare,
    ChevronDown,
    X
} from 'lucide-react';

// DUMMY DATA FOR NAVIGATION
const mainNavLinks = [
    { name: 'All Jewellery', href: '/jewellery/rings' },
    { name: 'Gold', href: '/jewellery/rings' },
    { name: 'Diamond', href: '/jewellery/rings' },
    { name: 'Earrings', href: '/jewellery/ear-rings' },
    { name: 'Rings', href: '/jewellery/finger-rings', active: false }, 
    { name: 'Bangles', href: '/jewellery/bangles' },
    { name: 'Chains', href: '/jewellery/chains' },
    { name: 'Gifting', href: '/jewellery/rings' },
    { name: 'Daily Wear', href: '/jewellery/rings' },
    { name: 'Admin', href: '/jewellery/admin-dashboard' },
];

// --- TYPE DEFINITIONS FOR COMPONENT PROPS ---
interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    active?: boolean;
}

interface IconWrapperProps {
    children: React.ReactNode;
    badgeCount?: number;
}



// This component creates the underline hover effect that expands from the middle
const NavLink: React.FC<NavLinkProps> = ({ href, children, active = false }) => (
    <Link href={href} className="relative group py-2 text-sm font-medium text-gray-700 hover:text-red-800 hover:font-bold transition-all">
        <span>{children}</span>
        <span
            className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-800 transform transition-transform duration-300 ease-out origin-center ${active ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}
        />
    </Link>
);

// A wrapper for icons to provide consistent styling and a badge
const IconWrapper: React.FC<IconWrapperProps> = ({ children, badgeCount }) => (
    <button className="relative p-2 rounded-full text-gray-600 hover:bg-red-50 hover:text-red-800 f transition-all">
        {children}
        {badgeCount !== undefined && badgeCount > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 bg-red-600 text-white text-xs rounded-full">
                {badgeCount}
            </span>
        )}
    </button>
);


// MAIN NAVBAR COMPONENT
const JewelleryNavbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const handleHomeClick = () => {

        // Replace with your actual routing logic
        setTimeout(() => {
            router.push("/jewellery")
        }, 200);
    };


    const JewelleryLogo = () => (
        <div className="h-20 xl:h-25 w-20 xl:w-25 relative top-2"
            onClick={handleHomeClick}
        >
            <Image src="/jewlLogo.png" alt="Jewellery Logo" fill className="object-contain" />
        </div>
    );
    const JewelleryMobileLogo = () => (
        <div className="h-15 w-30 relative"
            onClick={handleHomeClick}
        >
            <Image src="/jewlLogoMobile.png" alt="Jewellery Logo" fill className="object-contain" />
        </div>
    );


    return (
        <>

            <header className="sticky top-0 left-0 w-full z-50 bg-amber-50 backdrop-blur-sm shadow-sm text-black poppins">
                {/* --- DESKTOP NAVIGATION (lg and up) --- */}
                <div className="hidden lg:block">
                    <div className="container mx-auto ">
                        {/* Top Bar: Logo, Search, Icons */}
                        <div className="flex justify-between items-center h-16">
                            <div className="flex-shrink-1">
                                <JewelleryLogo />
                            </div>

                            <div className="flex-1 max-w-[600px] mx-8">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                                        className="w-full pl-12 pr-20 py-2.5 border border-gray-300 rounded-full focus:ring-1 focus:ring-red-200 focus:border-red-400 outline-none transition-shadow"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-3">
                                        <button className="text-gray-500 hover:text-red-700">
                                            <Camera size={20} />
                                        </button>
                                        <button className="text-gray-500 hover:text-red-700">
                                            <Mic size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <IconWrapper><Gem size={20} /></IconWrapper>
                                <IconWrapper><Store size={20} /></IconWrapper>
                                <IconWrapper><Heart size={20} /></IconWrapper>

                                {/* User Icon with Dropdown on Hover */}
                                <div className="relative group">
                                    <IconWrapper><User size={20} /></IconWrapper>
                                    <div className="absolute top-full right-0 mt-3 w-56 bg-white rounded-lg shadow-lg overflow-hidden translate-x-1/2
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                        <Link href="#" className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
                                            <Gift size={20} />
                                            <span>Log in / Sign up</span>
                                        </Link>
                                        <Link href="#" className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
                                            <MessageSquare size={20} />
                                            <span>Contact Us</span>
                                        </Link>
                                    </div>
                                </div>
                                <IconWrapper badgeCount={0}><ShoppingCart size={20} /></IconWrapper>
                            </div>
                        </div>

                        {/* Bottom Bar: Navigation Links */}
                        <nav className="flex justify-center items-center space-x-10 h-12">
                            {mainNavLinks.map(link => (
                                <NavLink key={link.name} href={link.href} active={link.active}>
                                    {link.name}
                                </NavLink>
                            ))}
                            <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-red-800">
                                More <ChevronDown size={16} className="ml-1" />
                            </a>
                        </nav>
                    </div>
                </div>

                {/* --- MOBILE NAVIGATION (below lg) --- */}
                <div className="lg:hidden">
                    <div className="container mx-auto px-3">
                        {/* Top Row: Menu, Logo, Icons */}
                        <div className="flex justify-between items-center h-13">
                            <div className="flex items-center gap-2">
                                <button className="p-2"
                                    onClick={() => setIsMenuOpen(true)}
                                >
                                    <Menu size={20} />
                                </button>
                                <JewelleryMobileLogo />
                            </div>
                            <div className="flex items-center space-x-0">
                                <IconWrapper><Store size={20} /></IconWrapper>
                                <IconWrapper><Heart size={20} /></IconWrapper>

                                <IconWrapper badgeCount={0}><ShoppingCart size={20} /></IconWrapper>
                            </div>
                        </div>
                        {/* Search Bar */}
                        <div className="pb-2">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-12 pr-20 py-2.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-300 focus:border-red-400 outline-none transition-shadow"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-3">
                                    <button className="text-gray-500 hover:text-red-700">
                                        <Camera size={20} />
                                    </button>
                                    <button className="text-gray-500 hover:text-red-700">
                                        <Mic size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        </>
    );
};



export default JewelleryNavbar;

