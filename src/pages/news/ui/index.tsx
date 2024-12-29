'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function News() {
    const { t } = useTranslation()

    const news = [
        {
            title: t('newsPage:news2'),
            author: 'Pigprogress',
            date: 'Dec 20, 2024',
            image: '/ABN_pig.jpeg',
            link: 'https://www.pigprogress.net/market-trends-analysis-the-industrymarkets/wrapping-up-december-whats-new-in-the-world-of-pigs-7/',
        },
        {
            title: t('newsPage:news1'),
            author: 'Alistair Driver',
            date: 'Dec 17, 2024',
            image: '/Virus.jpg',
            link: 'https://www.pig-world.co.uk/news/african-swine-fever-spreads-across-indonesia.html',
        },
    ]

    return (
        <div className="w-2/3 mx-auto py-16 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6">
                {t('newsPage:newsTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {news.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <Link href={item.link} target="_blank">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={200}
                                height={200}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2 hover:underline">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    By {item.author} -- {item.date}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
