import { cn } from '@/core/utils/cn'
import React from 'react'

interface SidePanelProps {
    panelOpen: boolean
    handlePanelOpen: () => void
    renderButton: (handleToggle: () => void) => React.ReactNode
    children: React.ReactNode
}

export default function SidePanel({
    panelOpen,
    handlePanelOpen,
    renderButton,
    children
}: SidePanelProps) {
    return (
        <div className='relative'>
            {renderButton(handlePanelOpen)}
            <div
                className={cn(
                    'fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out transform',
                    panelOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className='h-full overflow-y-auto p-6'>{children}</div>
            </div>
        </div>
    )
}
