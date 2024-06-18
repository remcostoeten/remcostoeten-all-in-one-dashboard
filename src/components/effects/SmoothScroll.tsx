'use client'

import React, { useEffect, useState } from 'react'
import { ReactLenis, useLenis } from '@/core/libs/lenis'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from '@/components/ui/dropdown-menu'

interface LenisProps {
    children: React.ReactNode
    enableSmoothScroll?: boolean // Optional prop to enable/disable smooth scrolling
}

function SmoothScroll({ children, enableSmoothScroll = true }: LenisProps) {
    const [isSmoothScrollEnabled, setIsSmoothScrollEnabled] =
        useState(enableSmoothScroll)
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    useEffect(() => {
        if (isSmoothScrollEnabled) {
            lenis?.stop()
            lenis?.start()
        } else {
            lenis?.stop()
        }
    }, [isSmoothScrollEnabled, lenis]) // React to changes in isSmoothScrollEnabled and lenis

    useEffect(() => {
        localStorage.setItem(
            'enableSmoothScroll',
            JSON.stringify(isSmoothScrollEnabled)
        )
    }, [isSmoothScrollEnabled])

    const toggleSmoothScroll = () =>
        setIsSmoothScrollEnabled(!isSmoothScrollEnabled)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button>{/* Button content */}</button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={toggleSmoothScroll}>
                        {isSmoothScrollEnabled ? 'Disable' : 'Enable'} Smooth
                        Scroll
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {isSmoothScrollEnabled ? (
                <ReactLenis
                    root
                    options={{
                        duration: 2
                    }}
                >
                    {children}
                </ReactLenis>
            ) : (
                children
            )}
        </>
    )
}

export default SmoothScroll
