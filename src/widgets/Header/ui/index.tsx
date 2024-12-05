'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LanguageSelector } from '@/features/LanguageSelector'
import { BurgerMenu } from '@/features/BurgerMenu'
import { LoginModal } from '@/features/Login'
import { useBurgerMenuStore } from '@/entities/BurgerMenu'
import HeaderMenu from './HeaderMenu'
import styles from './index.module.css'
import { useSyncHeaderMargin } from '../model/useSyncHeaderMargin'

export function Header() {
    const pathname = usePathname()

    const isBurgerOpen = useBurgerMenuStore((state) => state.isBurgerOpen)

    useSyncHeaderMargin()

    return (
        <header
            className={`h-24 fixed lg:h-32 bg-white shadow-inner-premium-gray text-black z-20`}
        >
            <div
                className={`h-full relative flex md:justify-center ${
                    isBurgerOpen ? 'items-start' : 'items-center'
                }`}
            >
                {/* LOGO */}
                <div className="absolute top-4 lg:top-6 max-[767px]:right-4 z-20">
                    <Link href="/">
                        <Image
                            src="/logo1.png"
                            alt="logo"
                            width="150"
                            height="150"
                            sizes="100vw"
                            className="w-24 lg:w-32"
                        />
                    </Link>
                </div>
                {/* NAVIGATION */}
                <nav
                    className={`w-64 h-full relative md:w-full max-[767px]:flex`}
                    aria-label="Header navigation"
                >
                    {/* BURGER MENU */}
                    <BurgerMenu
                        TopActionSlot={
                            <LoginModal TriggerClassName="absolute top-4 right-4 text-xs" />
                        }
                    />
                    {/* DESKTOP HEADER MENU */}
                    <HeaderMenu pathname={pathname ?? ''} />
                </nav>
                {/* USER LOGIN */}
                {!isBurgerOpen && (
                    <LoginModal
                        ContentBodyClassName="p-3"
                        TriggerClassName="absolute top-2 right-2 lg:top-4 lg:right-4 min-[1280px]:right-64 max-[767px]:hidden"
                    />
                )}
                {/* LANGUAGE SELECTOR */}
                <LanguageSelector className={styles.LanguageSelect} />
            </div>
        </header>
    )
}
