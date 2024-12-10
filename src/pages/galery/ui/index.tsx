'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectCube,
    Autoplay,
} from 'swiper/modules'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-cube'

export default function Gallery() {
    const slides = [
        { image: '/swiperPhoto1.jpg', title: 'Slide 1' },
        { image: '/swiperPhoto2.jpg', title: 'Slide 2' },
        { image: '/swiperPhoto3.jpg', title: 'Slide 3' },
        { image: '/swiperPhoto4.jpg', title: 'Slide 4' },
    ]

    return (
        <div className="w-1/2 mx-auto py-16">
            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    EffectCube,
                    Autoplay,
                ]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 2000, // Задержка в миллисекундах (3 секунды)
                    disableOnInteraction: false, // Не отключать автопрокрутку при взаимодействии с слайдером
                }}
                scrollbar={{ draggable: true, el: '.custom-scrollbar' }}
                effect="cube"
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                onSlideChange={() => console.log('Slide changed')}
                onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            width={500}
                            height={500}
                            className="object-cover w-full h-auto"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-scrollbar mt-8 h-2 bg-gray-300 rounded-lg"></div>
        </div>
    )
}
