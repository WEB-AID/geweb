import { MutableRefObject, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useBurgerMenuStore } from '@/entities/BurgerMenu'

const ANIMATION_DELAY = 400 as const

export const useBurgerMenu = () => {
    const [isAnimating, setIsAnimating] = useState<boolean>(false)
    const router = useRouter()
    const isBurgerOpen = useBurgerMenuStore((state) => state.isBurgerOpen)
    const openBurger = useBurgerMenuStore((state) => state.openBurger)
    const closeBurger = useBurgerMenuStore((state) => state.closeBurger)
    const timeoutRef = useRef(null) as MutableRefObject<null | ReturnType<
        typeof setTimeout
    >>

    const handleBurgerOpen = () => {
        openBurger()
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setIsAnimating(true), 50)
    }

    const handleBurgerClose = () => {
        setIsAnimating(false)

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        setTimeout(() => {
            closeBurger()
        }, ANIMATION_DELAY)
    }

    const handleMenuItemClick = (path: string) => {
        router.push(path)
        handleBurgerClose()
    }

    return {
        handleBurgerOpen,
        handleBurgerClose,
        handleMenuItemClick,
        isBurgerOpen,
        isAnimating,
    }
}
