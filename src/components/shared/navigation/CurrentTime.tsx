'use client'

import { useState, useEffect } from 'react'

type CurrentTimeProps = {
    format?: 'HH:MM' | 'full'
    showPeriod?: boolean
}

export default function CurrentTime({
    format = 'HH:MM',
    showPeriod = false
}: CurrentTimeProps) {
    const [time, setTime] = useState(new Date())
    const [blink, setBlink] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
            setBlink((prev) => !prev)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }

    if (format !== 'HH:MM') {
        timeOptions.second = '2-digit'
        if (showPeriod) {
            timeOptions.hour12 = true
        }
    }

    const timeString = time.toLocaleTimeString([], timeOptions)
    const parts = timeString.split(':')
    const formattedTime = `${parts[0]}${blink ? ':' : ' '}${parts.slice(1).join(':')}`

    return (
        <time
            className='min-w-[50px]'
            dateTime={time.toISOString()}
            aria-live='polite'
        >
            {formattedTime}
        </time>
    )
}
