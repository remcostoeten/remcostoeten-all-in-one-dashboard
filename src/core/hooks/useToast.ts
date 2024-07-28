'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

const TOAST_KEY = 'toastDismissed'

const useToast = (message: string) => {
    useEffect(() => {
        const isToastDismissed = localStorage.getItem(TOAST_KEY)

        if (!isToastDismissed) {
            const toastId = toast(message, {
                action: {
                    text: 'Dismiss',
                    onClick: () => {
                        toast.dismiss(toastId)
                        localStorage.setItem(TOAST_KEY, 'true')
                    }
                },
                closeButton: true, // Adds a permanent close button
                duration: Infinity // Toast stays until manually dismissed
            })
        }
    }, [message])
}

export default useToast
