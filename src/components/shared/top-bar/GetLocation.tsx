'use client'

import { useState, useEffect } from 'react'

const CurrentTime: React.FC = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    return <div className='text-white'>{time.toLocaleTimeString()}</div>
}

export default CurrentTime
