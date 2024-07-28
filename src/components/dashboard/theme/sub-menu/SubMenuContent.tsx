import React from 'react'

interface SubMenuContentProps {
    children: React.ReactNode
    showBorder?: boolean
}

export default function SubMenuContent({
    children,
    showBorder = true
}: SubMenuContentProps) {
    return (
        <div
            className={`flex flex-col px-2 py-4 ${showBorder ? 'border-b border-border' : ''}`}
        >
            {children}
        </div>
    )
}

interface SubMenuInnerContentProps {
    children: React.ReactNode
    showBorder?: boolean
}

export function SubMenuInnerContent({
    children,
    showBorder = true
}: SubMenuInnerContentProps) {
    return (
        <div
            className={`flex flex-col pb-4 ${showBorder ? 'border-b border-border' : ''}`}
        >
            {children}
        </div>
    )
}
