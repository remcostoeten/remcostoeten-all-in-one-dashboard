'use client'

import IconShell from '@/components/theme/shells/IconShell'
import { Input } from '@/components/ui/input'
import useNotImplemented from '@/core/hooks/useNotYetImplementedToast'
import { toast } from 'sonner'
import type React from 'react'
type MainContentHeaderWrapperProps = {
    hasIconBeforeTitle?: boolean
    title: string
    subtitle?: string
    icon?: React.ReactNode
    showSearch?: boolean
    onSearch?: (value: string) => void
    className?: string
    children?: React.ReactNode
}

export default function MainContentHeaderWrapper({
    hasIconBeforeTitle = false,
    title,
    subtitle,
    icon = '#',
    showSearch = false,
    className = '',
    children,
    ...props
}: MainContentHeaderWrapperProps) {
    function renderIconOrChildren() {
        if (hasIconBeforeTitle && icon) {
            return (
                <IconShell
                    className='mr-2'
                    aria-label={icon.toString().replace(/<[^>]*>?/gm, '')}
                >
                    {icon}
                </IconShell>
            ) // Assuming icon is a React element, clean up its string representation for accessibility
        } else if (hasIconBeforeTitle) {
            return null
        } else {
            return children || null
        }
    }

    return (
        <header
            aria-labelledby='main-header-title'
            className={`flex items-center justify-between bg-dash-body border-b border-border min-h-[3rem] px-3 py-2 text-xs ${className}`}
            {...props}
        >
            <div className='flex items-center'>
                {renderIconOrChildren()}
                <h2 id='main-header-title' className='text-xl font-semibold'>
                    {title}
                </h2>
                {subtitle && (
                    <p
                        className='ml-2 text-sm text-text-secondary'
                        aria-hidden='true'
                    >
                        {subtitle}
                    </p>
                )}
            </div>

            {showSearch && (
                <form role='search' aria-label='Search form'>
                    <Input
                        type='search'
                        placeholder='Search'
                        className='w-64 bg-background-active text-text-primary'
                        aria-label='Search input'
                    />
                </form>
            )}
        </header>
    )
}
