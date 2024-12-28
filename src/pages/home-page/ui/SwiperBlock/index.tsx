'use client'

import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
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
        <div className="w-3/4 md:w-[550px] xl:w-1/2 h-auto md:h-auto mx-auto mt-10 lg:mt-16">
            <Swiper
                // install Swiper modules
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500, // Задержка в миллисекундах (3 секунды)
                    disableOnInteraction: false, // Не отключать автопрокрутку при взаимодействии с слайдером
                }}
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true, el: '.custom-scrollbar' }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="rounded-2xl border-4  border-orange-500 "
            >
                <SwiperSlide>
                    <Image
                        src="/swiperPhoto4.jpg"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/swiperPhoto3.jpg"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/swiperPhoto2.jpg"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/swiperPhoto1.jpg"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                    />
                </SwiperSlide>
            </Swiper>
            <div className="custom-scrollbar mt-4 mx-auto h-2 bg-gray-300 rounded-lg"></div>
        </div>
    )
}
