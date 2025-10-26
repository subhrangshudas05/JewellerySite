"use client"

import React, { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import Image from "next/image"

import "swiper/css"
import "swiper/css/pagination"

export default function HeroBannerSwiper() {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [progress, setProgress] = useState<number>(0)
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
    const progressInterval = useRef<NodeJS.Timeout | null>(null)

    // Replace with your actual image paths
    const images: string[] = [
        "/banner2.png",
        "/banner3.png",
        "/banner4.png",
        "/banner5.png",
        "/banner6.png",
    ]

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex)
        setProgress(0)
        
        // Restart autoplay if it stopped
        if (swiper.autoplay && !swiper.autoplay.running) {
            swiper.autoplay.start()
        }
    }

    const goToSlide = (index: number) => {
        if (swiperInstance) {
            swiperInstance.slideToLoop(index)
        }
    }

    // Manual progress tracking as fallback
    useEffect(() => {
        // Clear existing interval
        if (progressInterval.current) {
            clearInterval(progressInterval.current)
        }

        // Reset progress
        setProgress(0)

        // Create new interval to manually track progress
        progressInterval.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 0
                }
                return prev + (100 / 60) // 6000ms / 100ms = 60 ticks
            })
        }, 100)

        return () => {
            if (progressInterval.current) {
                clearInterval(progressInterval.current)
            }
        }
    }, [activeIndex])

    return (
        <div className="relative w-full h-full ">
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                speed={800}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false, // This is critical
                    pauseOnMouseEnter: false,
                }}
                onSlideChange={handleSlideChange}
                onSwiper={setSwiperInstance}
                className="w-full h-full"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[92%] lg:h-[95%] rounded-2xl overflow-hidden">
                            <Image
                                src={image}
                                alt={`Banner ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination with Progress Fill */}
            <div className="absolute bottom-0 pt-2 lg:pt-0 left-1/2 transform -translate-x-1/2 z-200 flex items-center gap-3 lg:gap-4 h-[8%] lg:h-[3%]">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        type="button"
                        className="relative [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] transition-all duration-300 cursor-pointer overflow-hidden"
                        style={{
                            width: activeIndex === index ? "14px" : "10px",
                            height: activeIndex === index ? "14px" : "10px",
                        }}
                    >
                        <div className="absolute inset-0 bg-red-600/30" />

                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-br from-red-700/70 to-rose-600 transition-all duration-100 ease-linear"
                            style={{
                                width: activeIndex === index ? `${progress}%` : "0%",
                            }}
                        />
                    </button>
                ))}
            </div>
            <style jsx global>{`
                .swiper-slide {
                    width: 100% !important;
                    height: 100% !important;
                }
            `}</style>
        </div>
    )
}