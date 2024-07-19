import { create } from 'zustand'

type MenuStore = {
    isSubMenuVisible: boolean
    toggleSubMenu: () => void
}

export const useSubMenuStore = create<MenuStore>((set) => ({
    isSubMenuVisible: true,
    toggleSubMenu: () => set((state) => ({ isSubMenuVisible: !state.isSubMenuVisible }))
}))

// If you want to persist the store, ensure you wrap the store creation with `persist`.
// Example:
// export const useMenuStore = persist(create<MenuStore>(...), {
//     name: 'menu-storage', // unique name for localStorage key
//     getStorage: () => localStorage // (optional) by default, 'localStorage' is used
// });
