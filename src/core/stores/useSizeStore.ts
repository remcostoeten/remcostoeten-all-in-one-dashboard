import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SizeOption = 'Spacious' | 'Compact'

interface SizeState {
    size: SizeOption
    setSize: (size: SizeOption) => void
}

export const useSizeStore = create<SizeState>()(
    persist(
        (set) => ({
            size: 'Spacious',
            setSize: (size) => set({ size })
        }),
        {
            name: 'size-storage'
        }
    )
)
