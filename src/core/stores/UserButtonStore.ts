import { create } from 'zustand'

type UserButtonStore = {
    showUserButton: boolean
    toggleShowUserButton: () => void
}

export const UserButtonStore = create<UserButtonStore>((set) => ({
    showUserButton: false,
    toggleShowUserButton: () =>
        set((state) => ({ showUserButton: !state.showUserButton }))
}))
