import { create } from 'zustand'

interface BurgerMenuState {
    isBurgerOpen: boolean
    openBurger: VoidFunction
    closeBurger: VoidFunction
}

export const useBurgerMenuStore = create<BurgerMenuState>()((set) => ({
    isBurgerOpen: false,
    openBurger: () => set(() => ({ isBurgerOpen: true })),
    closeBurger: () => set(() => ({ isBurgerOpen: false })),
}))
