import { create } from 'zustand'

interface SubMenuState {
    isSubMenuVisible: boolean
    toggleSubMenu: () => void
    closeSubMenu: () => void
    openSubMenu: () => void
}

export const useSubMenuStore = create<SubMenuState>((set) => ({
    isSubMenuVisible: false,
    toggleSubMenu: () =>
        set((state) => ({ isSubMenuVisible: !state.isSubMenuVisible })),
    closeSubMenu: () => set({ isSubMenuVisible: true }),
    openSubMenu: () => set({ isSubMenuVisible: true })
}))
