'use client'

import React, { useState } from 'react'

function Hamburger() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
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
        </div>
    )
}

export default Hamburger
