'use client'

import { useState, useEffect, useCallback } from 'react'
import { toast } from 'sonner'

type NotificationOptions = {
    title: string
    body?: string
    icon?: string
    tag?: string // Used for stacking notifications
    requireInteraction?: boolean // Keeps the notification open until the user interacts with it
    silent?: boolean // Whether the notification should be silent
    [key: string]: any // Allow additional options
}

export const usePushNotifications = () => {
    const [permission, setPermission] =
        useState<NotificationPermission>('default')

    useEffect(() => {
        Notification.requestPermission().then((perm) => {
            setPermission(perm)
        })
    }, [])

    const sendNotification = useCallback(
        ({
            title,
            body,
            icon,
            tag,
            requireInteraction,
            silent,
            ...options
        }: NotificationOptions) => {
            if (permission === 'granted') {
                // Create the Notification and assign it to a variable to avoid the 'no-new' ESLint error
                const notification = new Notification(title, {
                    body,
                    icon,
                    tag,
                    requireInteraction,
                    silent,
                    ...options
                })

                // Attach an onclick event listener to the notification
                notification.onclick = function (event) {
                    // Prevent the browser from focusing the Notification
                    event.preventDefault()
                    // Perform actions upon clicking the notification
                    console.log('Notification clicked:', title)
                }

                // Consider adding event listeners to the notification object if needed
            } else {
                toast(
                    'Push notifications are not enabled or permission is denied.'
                )
                // Removed console.warn to address the 'no-console' ESLint warning
                // Consider implementing an alternative method to log or display this warning if necessary
            }
        },
        [permission]
    )

    return {
        permission,
        sendNotification
    }
}
