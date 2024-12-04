'use client'

import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from 'swiper/modules'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

export default function SwiperBlock() {
    return (
        <div className="border-2 border-orange-400 w-4/5 min-[601px]:w-[500px] md:w-[600px] xl:w-1/2 h-60 min-[601px]:h-52 md:h-3/4 flex mx-auto mt-8 lg:mt-20">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 2000, // Задержка в миллисекундах (3 секунды)
                    disableOnInteraction: false, // Не отключать автопрокрутку при взаимодействии с слайдером
                }}
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Image
                        src="/swiperPhoto4.jpg"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-60 lg:h-96 w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/swiperPhoto3.jpg"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-60 lg:h-96 w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/swiperPhoto2.jpg"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-60 lg:h-96 w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/swiperPhoto1.jpg"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-60 lg:h-96 w-full"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
