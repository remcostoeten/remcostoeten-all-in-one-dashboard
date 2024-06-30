'use client'

import { useEffect, useState } from 'react' // Import useState and useEffect
import { db } from '@/core/libs/DB'
import { guestbookSchema } from '@/core/models/Schema'

import { EditableGuestbookEntry } from '../../EditableGuestbookEntry'
import { DeleteGuestbookEntry } from './DeleteGuestbookEntry'
import { SkeletonGuestbookEntrys } from '@/components/effects/SkeletonLoaders'

interface GuestbookEntry {
    id: number
    username: string
    body: string
    // Add other fields as necessary
}

export default function GuestbookList() {
    const [entries, setEntries] = useState<GuestbookEntry[]>([]) // Initialize state
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        const fetchGuestbook = async () => {
            const guestbookData: GuestbookEntry[] = await db
                .select()
                .from(guestbookSchema)
                .all()
            setEntries(guestbookData)
            setIsLoading(false)
        }

        fetchGuestbook()
    }, [])

    return (
        <div
            className='mt-5 sm:min-w-[350px] max-w-[350px] py-4 rounded-lg shadow-md'
            data-testid='guestbook-list'
        >
            {isLoading ? (

                <div
                    className=' p-2 mb-4  flex-col rounded-lg gap-2 items-center flex justify-between'
                >
                    <SkeletonGuestbookEntrys count={7} />
                </div>
            ) : (
                entries.map((entry) => (
                    <div
                        key={entry.id}
                        className='bg-gray-900 p-2 mb-4 rounded-lg gap-2 items-center flex justify-between'
                    >
                        <div className='space-x-4'>
                            <span className='text-white'>{entry.username}</span>
                            <span className='text-gray-300'>{entry.body}</span>
                        </div>
                        <div className='flex items-center gap-2'>
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
                    </div>
                ))
            )}
        </div>
    )
}
