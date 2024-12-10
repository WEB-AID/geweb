'use client'

import PageBanner from '@/shared/ui/PageBanner'
import { useState } from 'react'

const vacancies = [
    {
        title: 'Механик',
        description:
            'Ответственность за ремонт и техническое обслуживание техники. Требуется опыт работы от 3 лет.',
    },
    {
        title: 'Водитель',
        description:
            'Перевозка грузов и пассажиров. Наличие водительских прав категории B и C обязательно.',
    },
    {
        title: 'Уборщик',
        description:
            'Поддержание чистоты в офисных помещениях. Гибкий график работы, без опыта.',
    },
]

export default function Vacancies() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleVacancy = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
            <PageBanner src={'/plant1.jpg'} alt={'Plant logo'} />
            <div className="w-2/3 md:max-w-2xl mx-auto py-8">
                <div className="text-orange-500 font-extrabold text-lg underline">
                    Наши открытые позиции:
                </div>
                <div className="mt-4">
                    {vacancies.map((vacancy, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300 pb-4 mb-4"
                        >
                            <button
                                onClick={() => toggleVacancy(index)}
                                className="flex justify-between w-full text-left text-lg font-semibold"
                            >
                                {vacancy.title}
                                <span className="text-xl text-orange-500">
                                    {openIndex === index ? '▲' : '▼'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="mt-2 p-4 bg-gray-100 text-gray-700 rounded-lg">
                                    {vacancy.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
