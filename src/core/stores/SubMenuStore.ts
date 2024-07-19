import { create } from 'zustand'

interface SubMenuState {
    isSubMenuVisible: boolean
    toggleSubMenu: () => void
    closeSubMenu: () => void
    openSubMenu: () => void
}

export const useSubMenuStore = create<SubMenuState>((set) => ({
    w: false,
    toggleSubMenu: () =>
        set((state) => ({ isSubMenuVisible: !state.isSubMenuVisible })),
    closeSubMenu: () => set({ isSubMenuVisible: false }),
    openSubMenu: () => set({ isSubMenuVisible: true })
}))
