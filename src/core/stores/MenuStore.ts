import { create } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'
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

// Custom storage object
const customStorage: PersistOptions<MenuStore>['storage'] = {
    getItem: (name: string) => {
        const str = localStorage.getItem(name)
        return str ? JSON.parse(str) : null
    },
    setItem: (name: string, value: MenuStore) => {
        localStorage.setItem(name, JSON.stringify(value))
    },
    removeItem: (name: string) => localStorage.removeItem(name)
}

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
            name: 'menu-storage',
            storage: customStorage
        }
    )
)
