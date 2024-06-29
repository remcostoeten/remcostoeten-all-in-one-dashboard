'use client'

import { useEffect, useState, type ReactNode } from 'react'

export default function FetchTest({}: { children: ReactNode }) {
    const [data, setData] = useState<any>(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/guestbook')
            const data = await response.json()
            setData(data)
        }

        fetchData()
    }, []) // The empty array means this effect runs once on mount
    if (!data) {
        return <div>Loading...</div> // Or some loading indicator
    }

    return (
        <div>
            <h1>Data from API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre> // Simple way to display
            JSON data, replace with your actual UI
        </div>
    )
}
