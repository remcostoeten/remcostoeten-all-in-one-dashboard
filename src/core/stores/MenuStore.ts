import create from 'zustand';

type MenuState = {
    enabledNavItems: { [key: string]: boolean };
    toggleNavItem: (name: string) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
    enabledNavItems: {
        bell: true,
        calendar: true,
        building: true,
        user: true,
        chat: true,
        users: true,
        document: true,
        sun: true,
        database: true,
    },
    toggleNavItem: (name: string) => set((state) => ({
        enabledNavItems: {
            ...state.enabledNavItems,
            [name]: !state.enabledNavItems[name]
        }
    })),
}));
