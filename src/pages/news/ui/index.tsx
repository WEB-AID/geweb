'use client'

import Image from 'next/image'

export default function News() {
    const news = [
        {
            title: 'An easy Guide to buying Denim & My favorite styles',
            author: 'Isabella',
            date: 'Dec 10, 2024',
            image: '/kvemokartli.png',
            link: '#',
        },
        {
            title: 'The Satin Skirt & how to Wear it all year round fashion',
            author: 'Charlotte',
            date: 'Dec 8, 2024',
            image: '/kvemokartli.png',
            link: '#',
        },
        {
            title: "What I'll be Wearing this Party Season & the Festive edit",
            author: 'Elizabeth',
            date: 'Dec 5, 2024',
            image: '/kvemokartli.png',
            link: '#',
        },
        {
            title: 'Top 10 Winter Trends in 2024',
            author: 'Sophia',
            date: 'Dec 3, 2024',
            image: '/kvemokartli.png',
            link: '#',
        },
        {
            title: 'How to Style Oversized Jackets Effortlessly',
            author: 'Amelia',
            date: 'Dec 1, 2024',
            image: '/kvemokartli.png',
            link: '#',
        },
        {
            title: '5 Must-Have Accessories this Season',
            author: 'Emma',
            date: 'Nov 28, 2024',
            image: '/kvemokartli.png',
            link: '#',
        },
    ]

    return (
        <div className="w-2/3 mx-auto py-16 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {news.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">
                                <a href={item.link} className="hover:underline">
                                    {item.title}
                                </a>
                            </h3>
                            <p className="text-sm text-gray-600">
                                By {item.author} - {item.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
