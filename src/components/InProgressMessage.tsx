'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'
export default function Home() {
    useEffect(() => {
        if (isVisible) {
            toast('This site is under construction', {
                duration: 5000,
                onDismiss: hideForever
            })
        }
    }, [isVisible, hideForever])

    return (
        <main>
            <h1>Welcome to My App</h1>
            {/* Rest of your page content */}
        </main>
    )
}
