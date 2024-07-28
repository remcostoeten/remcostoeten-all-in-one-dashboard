'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

export function useRealtimeUpdates() {
    const [newDiff, setNewDiff] = useState(null)
    const { isSignedIn, user } = useUser()

    useEffect(() => {
        if (!isSignedIn) return

        const eventSource = new EventSource(
            `/api/diffs-updates?userId=${user.id}`
        )

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data)

            setNewDiff(data)
        }

        return () => {
            eventSource.close()
        }
    }, [isSignedIn, user])

    return newDiff
}
