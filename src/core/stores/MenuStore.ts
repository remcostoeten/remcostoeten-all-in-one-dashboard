import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { DashboardAsideItems } from '../data/menu-items'

type MenuStore = {
    isExpanded: boolean
    setIsExpanded: (value: boolean) => void
    enabledNavItems: Record<string, boolean>
    toggleNavItem: (name: string) => void
}

const initialState = DashboardAsideItems.reduce(
    (acc, item) => ({
        ...acc,
        [item.name]: true
    }),
    {}
)

export const useMenuStore = create(
    persist<MenuStore>(
        (set) => ({
            isExpanded: false,
            setIsExpanded: (value) => set({ isExpanded: value }),
            enabledNavItems: initialState,
            toggleNavItem: (name) =>
                set((state) => ({
                    enabledNavItems: {
                        ...state.enabledNavItems,
                        [name]: !state.enabledNavItems[name]
                    }
                }))
        }),
        {
            name: 'menu-storage', // unique name for localStorage key
            getStorage: () => localStorage // use localStorage for persistence
        }
    )
)
