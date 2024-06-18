'use client'

import { useEffect } from 'react'

function generateGridPattern({
    width = 40,
    height = 40,
    strokeDasharray = 0,
    x = 0,
    y = 0,
}: {
    width?: number
    height?: number
    strokeDasharray?: number
    x?: number
    y?: number
} = {}) {
    const svgString = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${width}"
            height="${height}"
            viewBox="0 0 ${width} ${height}"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            stroke-width="1"
            stroke-dasharray="${strokeDasharray}"
        >
            <path d="M0 ${height}V0H${width}" />
        </svg>
    `
    return `url("data:image/svg+xml,${encodeURIComponent(svgString)}")`
}

export function GridPatternBackground() {
    useEffect(() => {
        const pattern = generateGridPattern({
            width: 40,
            height: 40,
            strokeDasharray: 0,
        })

        document.body.style.backgroundImage = pattern
        document.body.style.backgroundSize = '40px 40px'
        document.body.style.backgroundRepeat = 'repeat'
        document.body.style.backgroundAttachment = 'fixed'

        return () => {
            document.body.style.backgroundImage = ''
            document.body.style.backgroundSize = ''
            document.body.style.backgroundRepeat = ''
            document.body.style.backgroundAttachment = ''
        }
    }, [])

    return null
}

export default GridPatternBackground