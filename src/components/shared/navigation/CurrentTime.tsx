'use client'

import { useState, useEffect } from 'react'
import CustomPopover from '../Wrappers/CustomPopover'
import DisplayCity from './DisplayCity'

type CurrentTimeProps = {
    format?: 'HH:MM' | 'full'
    showPeriod?: boolean
}

const useCustomTime = () => {
    const now = new Date()
    return {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    }
}

function CurrentTime({
    format = 'HH:MM',
    showPeriod = false
}: CurrentTimeProps) {
    const [time, setTime] = useState(new Date())
    const [blink, setBlink] = useState(true)
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

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
    const formattedTime = (
        <div className='flex items-center space-x-1'>
            {parts[0]}
            <div className='w-1 relative'>{blink && <span>:</span>}</div>
            {parts.slice(1).join(':')}
        </div>
    )
    const handleClick = () => setIsPopoverOpen(!isPopoverOpen)

    return (
        <CustomPopover
            align='end'
            trigger={
                <time
                    className='cursor-pointer'
                    dateTime={time.toISOString()}
                    aria-live='polite'
                    onClick={handleClick}
                >
                    {formattedTime}
                </time>
            }
        >
            {isPopoverOpen && (
                <div className='flex items-center  flex-col ga'>
                    <AnalogClock />
                    <DisplayCity className='-translate-y-2' />
                </div>
            )}
        </CustomPopover>
    )
}

function AnalogClock() {
    const { hours, minutes, seconds } = useCustomTime()

    const minuteMarkers = Array.from(new Array(60), (_, i) => i)
    const fiveMinuteMarkers = minuteMarkers.filter((m) => m % 5 === 0)
    const hourLabels = [
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '1',
        '2'
    ]

    const markerIndexToRadians = (markerIndex: number): number =>
        (Math.PI * markerIndex) / 30

    const drawMinuteMarker = (markerIndex: number) => (
        <g key={markerIndex} style={{ stroke: 'black' }}>
            <line
                x1={94 * Math.cos(markerIndexToRadians(markerIndex))}
                y1={94 * Math.sin(markerIndexToRadians(markerIndex))}
                x2={100 * Math.cos(markerIndexToRadians(markerIndex))}
                y2={100 * Math.sin(markerIndexToRadians(markerIndex))}
            />
        </g>
    )

    const draw5MinMarker = (markerIndex: number) => (
        <g key={markerIndex} style={{ stroke: 'black' }}>
            <line
                strokeWidth='2'
                x1={90 * Math.cos(markerIndexToRadians(markerIndex))}
                y1={90 * Math.sin(markerIndexToRadians(markerIndex))}
                x2={100 * Math.cos(markerIndexToRadians(markerIndex))}
                y2={100 * Math.sin(markerIndexToRadians(markerIndex))}
            />
        </g>
    )

    const drawHourLabel = (label: string, hourLabelIndex: number) => (
        <text
            key={hourLabelIndex}
            textAnchor='middle'
            alignmentBaseline='central'
            dominantBaseline='central'
            x={80 * Math.cos(markerIndexToRadians(hourLabelIndex * 5))}
            y={80 * Math.sin(markerIndexToRadians(hourLabelIndex * 5))}
        >
            {label}
        </text>
    )

    return (
        <svg
            viewBox='0 0 300 300'
            style={{
                scale: '1',
                maxWidth: '500px',
                display: 'block',
                margin: '0 auto'
            }}
        >
            <g transform='translate(150,150)'>
                <circle
                    r='110'
                    style={{
                        stroke: 'black',
                        backgroundColor: 'white',
                        fill: 'rgba(255, 255, 255,.3)',
                        strokeWidth: '10'
                    }}
                />
                {minuteMarkers.map(drawMinuteMarker)}
                {fiveMinuteMarkers.map(draw5MinMarker)}
                {hourLabels.map((label, index) => drawHourLabel(label, index))}

                <g
                    transform={`rotate(${hours * 30 + (minutes / 60) * 30},0,0)`}
                    style={{ stroke: 'black' }}
                >
                    <line strokeWidth='4' x1='0' y1='15' x2='0' y2='-60' />
                </g>

                <g
                    transform={`rotate(${minutes * 6},0,0)`}
                    style={{ stroke: 'black' }}
                >
                    <line strokeWidth='2' x1='0' y1='20' x2='0' y2='-80' />
                </g>

                <g
                    transform={`rotate(${seconds * 6},0,0)`}
                    style={{ stroke: 'red' }}
                >
                    <line x1='0' y1='30' x2='0' y2='-100' />
                </g>

                <circle fill='red' r='3' />
            </g>
        </svg>
    )
}
export { CurrentTime, AnalogClock }
