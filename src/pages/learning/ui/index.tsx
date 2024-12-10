'use client'

import Image from 'next/image'

export default function Learning() {
    const courses = [
        {
            category: 'Основы выращивания свиней',
            items: [
                {
                    title: 'JavaScript / DOM / Интерфейсы',
                    subtitle: 'КУРС ДЛЯ НОВИЧКОВ',
                    icon: '/iconISO64.png',
                },
                {
                    title: 'JavaScript / DOM / Интерфейсы',
                    subtitle: 'КУРС ДЛЯ ПРОГРАММИСТОВ',
                    icon: '/iconISO64.png',
                },
                {
                    title: 'Современная верстка',
                    subtitle: 'КУРС',
                    icon: '/iconISO64.png',
                },
                {
                    title: 'Архитектура и паттерны',
                    subtitle: 'ИНТЕНСИВ',
                    badge: 'NEW',
                    icon: '/iconISO64.png',
                },
            ],
        },
        {
            category: 'Показатели и их улучшение',
            items: [
                {
                    title: 'Angular',
                    subtitle: 'КУРС',
                    icon: '/iconISO64.png',
                },
                { title: 'React', subtitle: 'КУРС', icon: '/iconISO64.png' },
                { title: 'Vue.js', subtitle: 'КУРС', icon: '/iconISO64.png' },
                {
                    title: 'TypeScript',
                    subtitle: 'ИНТЕНСИВ',
                    icon: '/iconISO64.png',
                },
                {
                    title: 'RxJs',
                    subtitle: 'ИНТЕНСИВ',
                    icon: '/iconISO64.png',
                },
                {
                    title: 'Продвинутый Angular',
                    subtitle: 'ИНТЕНСИВ',
                    icon: '/iconISO64.png',
                },
            ],
        },
    ]

    return (
        <div className="w-2/3 mx-auto py-16">
            {courses.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <h2 className="text-2xl font-bold my-4">
                        {section.category}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.items.map((course, courseIndex) => (
                            <div
                                key={courseIndex}
                                className="bg-gray-200 rounded-lg p-4 relative flex flex-col justify-between"
                            >
                                <div>
                                    <p className="text-sm text-gray-400 uppercase">
                                        {course.subtitle}
                                    </p>
                                    <h3 className="text-xl font-semibold mt-2">
                                        {course.title}
                                    </h3>
                                </div>
                                {course.badge && (
                                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded">
                                        {course.badge}
                                    </span>
                                )}
                                <Image
                                    src={course.icon}
                                    alt={course.title}
                                    className="w-12 h-12 mt-4 self-end"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
