'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { useBurgerMenu } from '../../model/hooks/useBurgerMenu'
import { menuItems } from '../../model/burger-menu-items'
import { LanguageSelector } from '@/features/LanguageSelector'
import { Button } from '@/shared/ui'
import { BurgerMenuItem } from '@/shared/ui/BurgerMenuItem'
import { BurgerButton } from '@/shared/ui/BurgerButton/BurgerButton'
import Overlay from '../BurgerOverlay'

interface BurgerMenuProps {
    TopActionSlot: ReactNode
}

export function BurgerMenu({ TopActionSlot }: BurgerMenuProps) {
    const { t } = useTranslation()
    const pathname = usePathname()

    const {
        handleBurgerOpen,
        handleBurgerClose,
        handleMenuItemClick,
        isBurgerOpen,
        isAnimating,
    } = useBurgerMenu()

    return (
        <>
            {!isBurgerOpen && (
                <BurgerButton handleBurgerOpen={handleBurgerOpen} />
            )}

            {isBurgerOpen && (
                <Overlay
                    isAnimating={isAnimating}
                    handleBurgerClose={handleBurgerClose}
                >
                    <aside className={`w-72 fixed flex inset-0`}>
                        <ul className="w-3/5 p-12 flex flex-col gap-16 text-slate-200">
                            {menuItems.map((item) => (
                                <BurgerMenuItem
                                    key={item.path}
                                    name={t(`headerMenu:${item.name}`)}
                                    path={item.path}
                                    pathname={pathname ?? ''}
                                    onClick={() => {
                                        handleMenuItemClick(item.path)
                                    }}
                                />
                            ))}
                        </ul>
                        {TopActionSlot}
                        {/* LANGUAGE SELECTOR */}
                        <div className="absolute bottom-2 right-2 md:hidden md:right-8">
                            <LanguageSelector />
                        </div>
                        {/* CLOSE BUTTON */}
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handleBurgerClose}
                            className={`absolute top-4 -right-14 z-20 ${
                                !isAnimating ? 'hidden' : ''
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="3" x2="21" y2="21" />
                                <line x1="21" y1="3" x2="3" y2="21" />
                            </svg>
                        </Button>
                    </aside>
                </Overlay>
            )}
        </>
    )
}
