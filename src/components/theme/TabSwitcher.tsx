export interface Tab {
    id: string
    label: string
}

export interface ChipProps {
    text: string
    selected: boolean
    onClick: () => void
}

export interface ChipTabsProps {
    tabs: Tab[]
    defaultSelected?: string
    onTabChange?: (tabId: string) => void
}

import { motion } from 'framer-motion'
import React, { useState } from 'react'

export const Chip: React.FC<ChipProps> = ({ text, selected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${
                selected
                    ? 'text-white'
                    : 'text-slate-300 hover:text-slate-200 hover:bg-slate-700'
            } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
        >
            <span className='relative z-10'>{text}</span>
            {selected && (
                <motion.span
                    layoutId='pill-tab'
                    transition={{ type: 'spring', duration: 0.5 }}
                    className='absolute bg-icon-active-background rounded-md inset-0'
                ></motion.span>
            )}
        </button>
    )
}

// ChipTabs.tsx
export const ChipTabs: React.FC<ChipTabsProps> = ({
    tabs,
    defaultSelected,
    onTabChange
}) => {
    const [selected, setSelected] = useState(defaultSelected || tabs[0].id)

    const handleTabChange = (tabId: string) => {
        setSelected(tabId)
        onTabChange?.(tabId)
    }

    return (
        <div className='px-4 py-14 bg-slate-900 flex items-center flex-wrap gap-2'>
            {tabs.map((tab) => (
                <Chip
                    key={tab.id}
                    text={tab.label}
                    selected={selected === tab.id}
                    onClick={() => handleTabChange(tab.id)}
                />
            ))}
        </div>
    )
}
