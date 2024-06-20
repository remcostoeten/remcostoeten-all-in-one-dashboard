import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover'
import type { ReactNode } from 'react'
import type React from 'react'

export default function CustomPopover({
    trigger,
    align = 'start',
    children
}: {
    trigger: JSX.Element
    align?: 'center' | 'end' | 'start'
    children: ReactNode
}) {
    return (
        <Popover>
            <PopoverTrigger asChild>{trigger}</PopoverTrigger>
            <PopoverContent
                align={align}
                style={{
                    backgroundColor: 'rgb(42, 41, 57)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: 'var(--radius)',
                    padding: '0',
                    color: 'white',
                    width: '175px'
                }}
            >
                {children}
            </PopoverContent>
        </Popover>
    )
}
