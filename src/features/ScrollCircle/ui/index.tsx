'use client'

import { useEffect, useState } from 'react'

export function ScrollCircle() {
    const [scrollPercent, setScrollPercent] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight
            const scrollRatio = (scrollTop / docHeight) * 100
            setScrollPercent(scrollRatio)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div
            className="fixed bottom-2 right-2 md:bottom-4 md:right-4 w-7 h-7 md:w-14 md:h-14 cursor-pointer flex items-center justify-center bg-white rounded-full shadow-lg"
            onClick={scrollToTop}
        >
            <svg className="w-full h-full absolute" viewBox="0 0 36 36">
                <circle
                    className="text-gray-300"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    cx="18"
                    cy="18"
                    r="16"
                />
                <circle
                    className="text-orange-500 transition-all duration-200"
                    strokeWidth="3"
                    strokeDasharray="100"
                    strokeDashoffset={100 - scrollPercent}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    cx="18"
                    cy="18"
                    r="16"
                />
            </svg>
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-3 h-[2px] md:w-6 bg-orange-500 mb-0" />{' '}
                {/* Горизонтальная полоска */}
                <div className="w-0.5 h-3 md:mt-0.5 md:w-1 md:h-5 bg-orange-500" />{' '}
                {/* Основание стрелки */}
                <div className="w-2 h-2 md:w-3 md:h-3 border-l-2 border-t-2 border-orange-500 transform rotate-45 -mt-3 md:-mt-5" />{' '}
                {/* Наконечник стрелки */}
            </div>
        </div>
    )
}
