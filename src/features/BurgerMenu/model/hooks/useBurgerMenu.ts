import { MutableRefObject, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useBurgerMenuStore } from '@/entities/BurgerMenu'

const ANIMATION_DELAY = 700 as const

export const useBurgerMenu = () => {
    const [isAnimating, setIsAnimating] = useState<boolean>(false)
    const router = useRouter()
    const isBurgerOpen = useBurgerMenuStore((state) => state.isBurgerOpen)
    const toggleBurger = useBurgerMenuStore((state) => state.toogleBurger)

    const timeoutRef = useRef(null) as MutableRefObject<null | ReturnType<
        typeof setTimeout
    >>

    const handleBurgerOpen = () => {
        toggleBurger()
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setIsAnimating(true), 100)
    }

    const handleBurgerClose = () => {
        setIsAnimating(false)

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        setTimeout(() => {
            toggleBurger()
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
