'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import i18nConfig from '../../../../i18nConfig'
import { useBurgerMenuStore } from '@/entities/BurgerMenu'
import clsx from 'clsx'

interface LanguageSelectorProps {
    className?: string
}

export function LanguageSelector({ className }: LanguageSelectorProps) {
    const { i18n } = useTranslation()
    const router = useRouter()
    const pathname = usePathname() || ''
    const currentLocale = i18n.language
    const isBurgerOpen = useBurgerMenuStore((store) => store.isBurgerOpen)
    const toggleBurger = useBurgerMenuStore((store) => store.toogleBurger)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value
        const days = 30
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = date.toUTCString()
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/;SameSite=Lax`

        if (isBurgerOpen) {
            toggleBurger()
        }

        if (currentLocale === i18nConfig.defaultLocale) {
            router.push('/' + newLocale + pathname)
        } else {
            router.push(pathname.replace(`/${currentLocale}`, `/${newLocale}`))
        }
    }

    return (
        <div className={clsx('', className)}>
            <select
                value={currentLocale}
                onChange={handleChange}
                className="p-0.5 md:px-1 md:p-0 lg:px-2 lg:p-0.5 border rounded font-sans font-semibold cursor-pointer"
            >
                <option value="ka" className="font-sans font-semibold">
                    Ge
                </option>
                <option value="en" className="font-sans font-semibold">
                    En
                </option>
                <option value="ru" className="font-sans font-semibold">
                    Ru
                </option>
            </select>
        </div>
    )
}
