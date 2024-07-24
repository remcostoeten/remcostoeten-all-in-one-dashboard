import { create } from 'zustand'
import { persist, PersistOptions, StorageValue } from 'zustand/middleware'
import { DashboardAsideItems } from '../config/menu-items'

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

const customStorage: PersistOptions<MenuStore>['storage'] = {
    getItem: (name: string) => {
        const str = localStorage.getItem(name)

        return str ? JSON.parse(str) : null
    },
    setItem: (name: string, value: StorageValue<MenuStore>) => {
        if (
            name &&
            typeof value === 'object' &&
            'state' in value &&
            value.state &&
            'isExpanded' in value.state &&
            'setIsExpanded' in value.state &&
            'enabledNavItems' in value.state &&
            'toggleNavItem' in value.state
        ) {
            localStorage.setItem(name, JSON.stringify(value))
        } else {
            console.error('Invalid arguments for localStorage.setItem')
        }
    },
    removeItem: (name: string) => localStorage.removeItem(name)
}

export const useMenuStore = create(
    persist<MenuStore>(
        (set) => ({
            isExpanded: false,
            setIsExpanded: (value) => set({ isExpanded: value }),
            enabledNavItems: initialState,
            toggleNavItem: (name) => {
                set((state) => ({
                    enabledNavItems: {
                        ...state.enabledNavItems,
                        [name]: !state.enabledNavItems[name]
                    }
                }))
            }
        }),
        {
            name: 'menu-storage',
            storage: customStorage
        }
    )
)
