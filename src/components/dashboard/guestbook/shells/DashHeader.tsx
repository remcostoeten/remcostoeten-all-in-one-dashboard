'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

interface RecordsHeaderProps {
    onDropdownOpen?: () => void
    hasActions?: () => boolean
    title?: React.ReactNode | string
}

const RecordsHeader: React.FC<RecordsHeaderProps> = ({
    onDropdownOpen,
    hasActions = () => false,
    title: titleProp = ''
}) => {
    const pathname = usePathname()
    const pathSegments = pathname.split('/')
    const lastSegment = pathSegments[pathSegments.length - 1] || ''
    const title =
        titleProp ||
        (pathname.includes('contact')
            ? 'Contact'
            : lastSegment.replace(/-/g, ' ') || 'Dashboard')

    return (
        <header>
            <h1>{title}</h1>
            {hasActions() && (
                <button onClick={onDropdownOpen}>Open Dropdown</button>
            )}
        </header>
    )
}

export default RecordsHeader

const SvgButton: React.FC = () => {
    return (
        <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20'>
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M12 16V12'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M12 8H12.01'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </button>
    )
}
