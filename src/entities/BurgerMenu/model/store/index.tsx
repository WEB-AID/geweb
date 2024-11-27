import { create } from 'zustand'

interface BurgerMenuState {
    isBurgerOpen: boolean
    toogleBurger: VoidFunction
}

export const useBurgerMenuStore = create<BurgerMenuState>()((set) => ({
    isBurgerOpen: false,
    toogleBurger: () => set((state) => ({ isBurgerOpen: !state.isBurgerOpen })),
}))
