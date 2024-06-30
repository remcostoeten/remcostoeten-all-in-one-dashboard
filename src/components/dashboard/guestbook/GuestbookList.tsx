'use client'

import { useEffect, useState } from 'react' // Import useState and useEffect
import { db } from '@/core/libs/DB'
import { guestbookSchema } from '@/core/models/Schema'

import { EditableGuestbookEntry } from '../../EditableGuestbookEntry'
import { DeleteGuestbookEntry } from './DeleteGuestbookEntry'

interface GuestbookEntry {
    id: number
    username: string
    body: string
    // Add other fields as necessary
}

export default function GuestbookList() {
    const [entries, setEntries] = useState<GuestbookEntry[]>([]) // Initialize state

    useEffect(() => {
        const fetchGuestbook = async () => {
            const guestbookData: GuestbookEntry[] = await db
                .select()
                .from(guestbookSchema)
                .all()
            setEntries(guestbookData) // Update state with fetched data
        }

        fetchGuestbook() // Fetch data on component mount
    }, []) // Empty dependency array means this effect runs once on mount

    return (
        <div
            className='mt-5 bg-gray-800 p-4 rounded-lg shadow-md'
            data-testid='guestbook-list'
        >
            {entries.map(
                (
                    entry // Use the state variable here
                ) => (
                    <div
                        key={entry.id}
                        className='bg-gray-900 p-2 mb-4 rounded-lg flex justify-between items-center'
                    >
                        <span className='text-white'>{entry.username}</span>
                        <span className='text-gray-300'>{entry.body}</span>
                        <div className='text-blue-500 hover:text-blue-700'>
                            <DeleteGuestbookEntry id={entry.id} />
                        </div>
                        <div className='ml-2 text-green-500 hover:text-green-700'>
                            <EditableGuestbookEntry
                                id={entry.id}
                                username={entry.username}
                                body={entry.body}
                            />
                        </div>
                    </div>
                )
            )}
        </div>
    )
}
