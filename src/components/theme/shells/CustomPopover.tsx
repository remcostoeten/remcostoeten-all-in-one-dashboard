import React, { memo } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@/components/ui/popover'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui'

const CustomPopover = ({
    trigger,
    align = 'start',
    children,
    width = '150px'
}: {
    trigger: JSX.Element | string
    align?: 'center' | 'end' | 'start'
    children?: ReactNode | any
    width?: string
    content?: ReactNode
}) => {
    return (
        <Popover>
            <PopoverTrigger
                asChild
                className='cursor-pointer text-xs font-normal'
            >
                <Button variant='ghost' size='icon'>
                    {trigger}
                </Button>
            </PopoverTrigger>
            <PopoverContent
                align={align}
                className='popover-content'
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: 'var(--radius)',
                    padding: '16px',
                    color: 'white',
                    zIndex: 50,
                    height: ' 400px;',
                    transition: ' 250ms ease all',
                    '--radix-popper-available-width': '915.1818237304688px',
                    '--radix-popper-available-height': '766.0909423828125px',
                    '--radix-popper-anchor-width': '35px',
                    '--radix-popper-anchor-height': '35px'
                }}
            >
                {children}
            </PopoverContent>
        </Popover>
    )
}

export default memo(CustomPopover)
