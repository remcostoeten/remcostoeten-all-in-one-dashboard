'use client'

import React, { useState } from 'react'
import { useMenuStore } from '@/core/stores/MenuStore'

function Hamburger() {
    const { isExpanded, setIsExpanded } = useMenuStore()

    const toggleMenu = () => {
        setIsExpanded(!isExpanded)
    }

    return (
            <div
            onClick={toggleMenu}
            
            className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                    className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${isExpanded ? 'rotate-45' : '-translate-y-1.5'}`}>
                </span>
                <span
                    className={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out ${isExpanded ? 'opacity-0' : ''}`}>
                </span>
                <span
                    className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${isExpanded ? '-rotate-45' : 'translate-y-1.5'}`}>
                </span>
            </div>
    )
}

export default Hamburger
