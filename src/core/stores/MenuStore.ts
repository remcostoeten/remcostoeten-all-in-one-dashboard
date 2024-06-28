import create from 'zustand'
import { persist } from 'zustand/middleware'
import { DashboardAsideItems } from '@/core/data/menu-items'

type MenuStore = {
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
            getStorage: () => localStorage // (optional) by default, 'localStorage' is used
        }
    )
)
