'use client'

import { useMenuStore } from '@/core/stores/MenuStore'
import type React from 'react'

const HamburgerToggle = () => {
    const { isExpanded, setIsExpanded } = useMenuStore()

    const toggleMenu = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <button
            onClick={toggleMenu}
            className={`p-1 trans bg-ghost-active w-min border border-transparent hover:border-ghost-active rounded-md hover:bg-gray-800 h-8 grid place-items-center`}
        >
            <div className='flex flex-col justify-center items-center   rounded focus:outline-none'>
                <span
                    className={`bg-white block transition-all duration-300 ease-out
                    h-0.5 w-4 rounded-sm ${isExpanded ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
                />
                <span
                    className={`bg-white block transition-all duration-300 ease-out
                    h-0.5 w-4 rounded-sm my-0.5 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                    className={`bg-white block transition-all duration-300 ease-out
                    h-0.5 w-4 rounded-sm ${isExpanded ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
                />
            </div>
        </button>
    )
}

export default HamburgerToggle