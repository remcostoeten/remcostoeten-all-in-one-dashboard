'use client'

import { useClerk } from '@clerk/nextjs'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import useKeyboardShortcut from '@/core/hooks/useKeyboardShortcut'

export default function KeyboardMacros() {
    const { signOut } = useClerk()
    const router = useRouter()

    useKeyboardShortcut({
        'Shift+P': () => {
            signOut()
            toast('Signed out successfully')
        },
        'Shift+U': () => router.push('/dashboard/profile'),
        'Shift+H': () => router.push('/')
    })

    return <></>
}
