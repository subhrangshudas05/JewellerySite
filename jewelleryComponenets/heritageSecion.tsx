import React from 'react';
import Image from 'next/image';

export default function HeritageSection() {
    return (
        <section className="w-[85%] md:w-[70%] mx-auto py-8  md:py-16   text-black">
            <div className="max-w-7xl mx-auto">


                {/* Desktop Layout: Row */}
                <div className="hidden md:flex gap-12 items-start">
                    {/* Left: Text Content */}
                    <div className="flex flex-col w-[40%]">
                        <p className="text-sm tracking-widest text-gray-500 mb-4">OUR STORY</p>
                        <h1 className="text-3xl xl:text-5xl font-serif font-light mb-6 leading-none">
                            TRADITION<br />
                            CARED FOR<br />
                            <div className="flex">SINCE <span className="ms-8 font-medium text-6xl xl:text-7xl">1998</span></div>
                        </h1>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            A strong introduction leads the way. Clear communication builds trust, and consistency makes your message stand out. Every detail, from the smallest element to the bigger picture, should feel intentional.
                            <br />
                            Stay focused, avoid unnecessary noise, and keep your audience engaged with smooth flow and purpose.
                        </p>
                        <button className="self-start bg-emerald-900 text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition-colors mt-8">
                            READ MORE
                        </button>
                    </div>

                    {/* Right: Images */}
                    <div className="flex gap-3 w-[60%] ">
                        <div className="w-[60%] relative aspect-[3/4]">
                            <Image
                                src="/jwlmodel2.jpg"
                                alt="Woman with pearl jewelry"
                                fill
                                unoptimized
                                className="object-cover rounded-br-[60px]"
                            />
                        </div>
                        <div className="w-[40%] aspect-[4/5] mt-12 overflow-hidden">
                            <img src="/jwlmodel.jpg" alt="Elegant portrait" className="w-full object-cover rounded-tr-4xl" />
                        </div>

                    </div>
                </div>


                {/* Mobile Layout: Column */}
                <div className="flex flex-col md:hidden gap-8">
                    {/* Text Content - Top on Mobile */}
                    <div className="flex flex-col">
                        <p className="text-xs tracking-widest text-gray-500 mb-2">OUR STORY</p>
                        <h1 className="text-3xl font-light font-serif mb-6">
                            TRADITION<br />
                            CARED FOR<br />
                            <div className="flex">SINCE <span className="ms-4 font-medium text-5xl xl:text-7xl">1998</span></div>

                        </h1>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            A strong introduction leads the way. Clear communication builds trust, and consistency makes your message stand out. Every detail, from the smallest element to the bigger picture, should feel intentional.
                            <br />
                            Stay focused, avoid unnecessary noise, and keep your audience engaged with smooth flow and purpose.
                        </p>
                        <button className="self-start bg-emerald-900 text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition-colors text-base font-serif">
                            READ MORE
                        </button>
                    </div>

                    {/* Images - Bottom on Mobile */}
                    <div className="flex gap-2">
                        <div className="w-[60%] relative aspect-[3/4]">
                            <Image
                                src="/jwlmodel2.jpg"
                                alt="Woman with pearl jewelry"
                                fill
                                unoptimized
                                className="object-cover rounded-br-[30px]"
                            />
                        </div>
                        <div className="w-[40%] aspect-[4/5] mt-4 overflow-hidden">
                            <img src="/jwlmodel.jpg" alt="Elegant portrait" className="w-full object-cover rounded-tr-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}