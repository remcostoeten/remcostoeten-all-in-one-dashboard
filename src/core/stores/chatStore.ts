import { create } from 'zustand'

type SearchState = {
    isSearchOpen: boolean
    toggleSearch: () => void
}

export const useChatSearchStore = create<SearchState>((set) => ({
    isSearchOpen: false,
    toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen }))
}))
