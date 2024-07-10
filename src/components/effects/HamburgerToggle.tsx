'use client'

import React, { useState } from 'react'

const Hamburger: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <button
            className='flex flex-col justify-center items-center   rounded focus:outline-none'
            onClick={toggleMenu}
        >
            <span
                className={`bg-white block transition-all duration-300 ease-out
                h-0.5 w-4 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
            />
            <span
                className={`bg-white block transition-all duration-300 ease-out
                h-0.5 w-4 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
                className={`bg-white block transition-all duration-300 ease-out
                h-0.5 w-4 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
            />
        </button>
    )
}

export default Hamburger
