import create from 'zustand';
import { DashboardAsideItems } from '../data/menu-items';

type MenuStore = {
    isExpanded: boolean;
    setIsExpanded: (value: boolean) => void;
    enabledNavItems: Record<string, boolean>;
    toggleNavItem: (name: string) => void;
};

const initialState = DashboardAsideItems.reduce(
    (acc, item) => ({
        ...acc,
        [item.name]: true
    }),
    {}
);

export const useMenuStore = create<MenuStore>((set) => ({
    isExpanded: false,
    setIsExpanded: (value) => set({ isExpanded: value }),
    enabledNavItems: initialState,
    toggleNavItem: (name) =>
        set((state) => ({
            enabledNavItems: {
                ...state.enabledNavItems,
                [name]: !state.enabledNavItems[name]
            }
        })),
}));

// If you want to persist the store, ensure you wrap the store creation with `persist`.
// Example:
// export const useMenuStore = persist(create<MenuStore>(...), {
//     name: 'menu-storage', // unique name for localStorage key
//     getStorage: () => localStorage // (optional) by default, 'localStorage' is used
// });