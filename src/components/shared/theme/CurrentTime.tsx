'use client'

import { useState, useEffect } from 'react'

export default function CurrentTime() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    return <time className='text-white'>{time.toLocaleTimeString()}</time>
}
