import React from 'react'
import Image from 'next/image'
import HeroBannerSwiper from '@/jewelleryComponenets/bannerSwiper'
import HeritageSection from '@/jewelleryComponenets/heritageSecion'
import JewelrySections from '@/jewelleryComponenets/jewellerySection'
import OccasionSection from '@/jewelleryComponenets/OcasiionSection'

const Page = () => {
    return (
        <div className=' min-h-screen w-full'>

            <div className="h-[26vh] lg:h-[60vh] xl:h-[80vh] max-h-[800px] max-w-[2000px] mx-auto w-full  relative px-2 lg:px-10 md:mb-4">
                <div className="h-full w-full relative">
                    <HeroBannerSwiper />
                </div>
            </div>
            <HeritageSection />
            <JewelrySections/>
            <OccasionSection/>

        </div>


    )
}

export default Page
