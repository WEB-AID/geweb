'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

interface PageBannerProps {
    src: string
    alt: string
}

export default function PageBanner({ src, alt }: PageBannerProps) {
    const { t, i18n } = useTranslation()
    const currentLocale = i18n.language as 'en' | 'ru' | 'ka'

    const localeStyles = {
        en: 'max-[600px]:text-sm max-[600px]:p-0 p-2 text-xl md:text-base lg:text-2xl xl:text-4xl font-extrabold md:p-4 lg:p-0',
        ru: 'max-[600px]:text-xs md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl xl:p-0 md:p-1 lg:p-0',
        ka: 'max-[600px]:text-sm max-[600px]:p-0 p-4 text-base md:text-base lg:text-xl xl:text-3xl lg:p-4 xl:p-0 md:p-1',
    }

    const textClasses = localeStyles[currentLocale] || ''

    return (
        <div className="relative">
            <Image
                src={src}
                alt={alt}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full max-[600px]:h-60 h-80 lg:h-96 xl:h-[36rem] shadow-[0px_4px_4px_rgba(255,165,0,0.3)]"
            />
            <p
                className={`w-2/3 md:w-2/5 lg:w-5/12 xl:w-2/5 absolute top-4 left-4 lg:top-6 lg:left-6 xl:top-12 xl:left-16 text-white/80 ${textClasses}`}
            >
                {t('plantPhotoText')}
            </p>
        </div>
    )
}
