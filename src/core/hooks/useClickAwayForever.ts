'use client'

import { useState, useEffect } from 'react'

export function useClickAwayForever(key: string): [boolean, () => void] {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const storedValue = localStorage.getItem(key)
        setIsVisible(storedValue !== 'hidden')
    }, [key])

    const hideForever = () => {
        localStorage.setItem(key, 'hidden')
        setIsVisible(false)
    }

    return [isVisible, hideForever]
}
