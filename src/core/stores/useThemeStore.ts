import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeOption = 'Light' | 'Dark' | 'System'

interface ThemeState {
    theme: ThemeOption
    setTheme: (theme: ThemeOption) => void
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'System', // Default theme
            setTheme: (theme) => set({ theme })
        }),
        {
            name: 'theme-storage' // Name for the localStorage key
        }
    )
)
