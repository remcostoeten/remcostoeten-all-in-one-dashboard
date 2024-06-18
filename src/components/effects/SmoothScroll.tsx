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
        const handleContentLoaded = () => {
            if (isSmoothScrollEnabled) {
                lenis?.stop()
                lenis?.start()
            } else {
                lenis?.stop()
            }
        }

        // Add the event listener when the component mounts
        document.addEventListener('DOMContentLoaded', handleContentLoaded)

        // Return a cleanup function to remove the event listener when the component unmounts
        return () => {
            document.removeEventListener(
                'DOMContentLoaded',
                handleContentLoaded
            )
        }
    }, []) // Empty dependency array means this effect runs once on mount

    useEffect(() => {
        localStorage.setItem(
            'enableSmoothScroll',
            JSON.stringify(isSmoothScrollEnabled)
        )
    }, [isSmoothScrollEnabled])
    const toggleSmoothScroll = () => {
        setIsSmoothScrollEnabled(!isSmoothScrollEnabled)
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10 5a2 2 0 100-4 2 2 0 000 4zm-6 2a2 2 0 11-4 0 2 2 0 014 0zm16-2a2 2 0 10-4 0 2 2 0 004 0zM4 15a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zM10 18a2 2 0 100-4 2 2 0 000 4z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={toggleSmoothScroll}>
                        Disable Smooth Scroll
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
                <>{children}</>
            )}
        </>
    )
}

export default SmoothScroll
