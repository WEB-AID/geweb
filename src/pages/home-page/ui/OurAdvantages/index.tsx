'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function OurAdwantages() {
    const { t } = useTranslation()

    return (
        <section className="lg:mt-16 mt-8 md:px-24 lg:px-0 text-center font-extrabold">
            <h2 className="w-4/5 mx-auto text-xs md:text-sm lg:text-base text-orange-600 font-extrabold">
                {t('ourAdvantageFirstHeader')}
            </h2>
            <p className="w-4/5 mx-auto mt-2 text-sm md:text-base lg:text-lg font-bold text-black">
                {t('ourAdvantageSecondHeader')}
            </p>
            {/* ADVANTAGE BLOCKS */}
            <div className="w-4/5 md:w-auto lg:w-4/5 2xl:w-2/3 mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="mx-auto p-6 flex items-center gap-2 md:w-auto md:p-2 lg:p-6 md:flex-col xl:flex-row rounded-lg shadow-3xl bg-white">
                    <Image
                        src="/iconPig64.png"
                        alt="Plant logo"
                        width="100"
                        height="100"
                        className="w-16 h-16 mr-auto md:mx-auto"
                    />
                    <div className="min-[601px]:w-96 md:w-auto md:my-auto">
                        <h3 className="text-lg xl:text-2xl font-bold text-orange-600">
                            {t('geneticHeader')}
                        </h3>
                        <p className="mt-1 text-sm lg:text-base 2xl:text-lg text-gray-600">
                            {t('geneticText')}
                        </p>
                    </div>
                </div>
                <div className="mx-auto p-6 flex items-center gap-2 md:w-auto lg:w-auto md:p-2 lg:p-6 md:flex-col xl:flex-row rounded-lg shadow-3xl bg-white">
                    <Image
                        src="/iconRezept64.png"
                        alt="Plant logo"
                        width="100"
                        height="100"
                        className="w-16 h-16 mr-auto md:mx-auto"
                    />
                    <div className="min-[601px]:w-96 md:w-auto md:my-auto">
                        <h3 className="text-lg xl:text-2xl font-bold text-orange-600">
                            {t('feedingHeader')}
                        </h3>
                        <p className="mt-1 text-sm lg:text-base 2xl:text-lg text-gray-600">
                            {t('feedingText')}
                        </p>
                    </div>
                </div>
                <div className="mx-auto p-6 flex items-center gap-2 md:w-auto lg:w-auto md:p-2 lg:p-6 md:flex-col xl:flex-row rounded-lg shadow-3xl bg-white">
                    <Image
                        src="/iconISO64.png"
                        alt="Plant logo"
                        width="100"
                        height="100"
                        className="w-16 h-16 mr-auto md:mx-auto"
                    />
                    <div className="min-[601px]:w-96 md:w-auto md:my-auto">
                        <h3 className="text-lg xl:text-2xl font-bold text-orange-600">
                            {t('certificationHeader')}
                        </h3>
                        <p className="mt-1 text-sm lg:text-base 2xl:text-lg text-gray-600">
                            {t('certificationText')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
