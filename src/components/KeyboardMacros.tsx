'use client'

import { useClerk } from '@clerk/nextjs'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { useRouter } from 'next/navigation'

export default function KeyboardMacros() {
    const { signOut } = useClerk()
    const router = useRouter()

    useEffect(() => {
        const handleKeyDown = event => {
            if (event.shiftKey && event.key === 'P') {
                event.preventDefault()
                signOut()
                toast('Signed out sucessfully')
            }

            if (event.shiftKey && event.key === 'U') {
                router.push('/dashboard/profile')
            }

            if (event.shiftKey && event.key === 'H') {
                router.push('/')
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [signOut])
    return <></>
}
