'use client'

import { ReactNode, useEffect } from 'react'
import Portal from '@/shared/ui/Portal'
import clsx from 'clsx'

interface OverlayProps {
    handleBurgerClose: VoidFunction
    children: ReactNode
    isAnimating: boolean
}

export default function Overlay({
    handleBurgerClose,
    children,
    isAnimating,
}: OverlayProps) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <>
            <Portal>
                <div
                    className={clsx(
                        `w-72 fixed inset-0 -translate-x-full transition-transform duration-500 ease-in-out md:hidden bg-primary-brown shadow-outer-brown z-50`,
                        isAnimating && 'translate-x-0'
                    )}
                >
                    {children}
                </div>

                <div
                    className={clsx(
                        `fixed inset-0 opacity-0 transition-opacity duration-600 bg-white z-40`,
                        isAnimating && 'opacity-90'
                    )}
                    onClick={handleBurgerClose}
                />
            </Portal>
        </>
    )
}
