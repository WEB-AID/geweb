'use client'

import Image from 'next/image'
// import { useTranslation } from 'react-i18next'

export default function OurAdwantages() {
    // const { t } = useTranslation()

    return (
        <section className="bg-gray-100 py-12 px-6 md:px-24 text-center font-extrabold">
            {/* Header */}
            <h2 className="text-orange-600 md:text-xm  font-extrabold">
                Refrigerated Trucks in London: A Costly Carbon Dilemma
            </h2>
            <p className="text-xl md:text-2xl font-bold text-black mb-6">
                Redefining Cold Chain Logistics for the Future
            </p>
            {/* ADVANTAGE BLOCKS */}
            <div className="mx-auto w-3/5 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-2 shadow-3xl rounded-lg p-6 bg-white">
                    <Image
                        src="/iconCo2.png"
                        alt="Plant logo"
                        width="100"
                        height="100"
                        className="w-16 h-16"
                    />
                    <div>
                        <h3 className="text-2xl font-bold text-orange-600">
                            83,500 tCO2
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Annually from Food Delivery in London
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 shadow-3xl rounded-lg p-6 bg-white">
                    <Image
                        src="/iconCo2.png"
                        alt="Plant logo"
                        width="100"
                        height="100"
                        className="w-16 h-16"
                    />
                    <div>
                        <h3 className="text-2xl font-bold text-orange-600">
                            83,500 tCO2
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Annually from Food Delivery in London
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 shadow-3xl rounded-lg p-6 bg-white">
                    <Image
                        src="/iconCo2.png"
                        alt="Plant logo"
                        width="100"
                        height="100"
                        className="w-16 h-16"
                    />
                    <div>
                        <h3 className="text-2xl font-bold text-orange-600">
                            83,500 tCO2
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Annually from Food Delivery in London
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
