import { useCallback } from 'react'
import create from 'zustand'
import { DashboardAsideItems } from '../data/menu-items'

type MenuStore = {
    isSubMenuExpanded: boolean
    setIsSubMenuExpanded: (value: boolean) => void
}

const initialState = DashboardAsideItems.reduce(
    (acc, item) => ({
        ...acc,
        [item.name]: true
    }),
    {}
)

export const useChatSubMenuStore = create<MenuStore>((set) => ({
    isSubMenuExpanded: true,
    setIsSubMenuExpanded: (value) => set({ isSubMenuExpanded: value })
}))

// If you want to persist the store, ensure you wrap the store creation with `persist`.
// Example:
// export const useMenuStore = persist(create<MenuStore>(...), {
//     name: 'menu-storage', // unique name for localStorage key
//     getStorage: () => localStorage // (optional) by default, 'localStorage' is used
// });
