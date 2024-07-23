// hooks/useIsAdmin.ts
import { useAuth } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

export function useIsAdmin() {
    const { userId } = useAuth()
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function checkAdminStatus() {
            if (!userId) {
                setIsAdmin(false)
                setLoading(false)
                return
            }

            try {
                const response = await fetch('/api/check-admin')

                if (!response.ok) {
                    const errorData = await response.json()

                    console.error('Error response:', errorData)
                    throw new Error(
                        `Failed to check admin status: ${errorData.error}`
                    )
                }
                const data = await response.json()

                setIsAdmin(data.isAdmin)
            } catch (error) {
                console.error('Error checking admin status:', error)
                setIsAdmin(false)
            } finally {
                setLoading(false)
            }
        }

        checkAdminStatus()
    }, [userId])

    return { isAdmin, loading }
}
