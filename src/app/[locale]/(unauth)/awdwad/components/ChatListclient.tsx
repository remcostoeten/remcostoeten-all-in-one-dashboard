'use client'

// because u cant use the same component in the server and client
// so we need to create a new component for the client

import Link from 'next/link'

export default function ChatListClient({ chats }: { chats: string[] }) {
    return (
        <div className='flex flex-col gap-2'>
            {chats.map((chat) => (
                <Link
                    key={chat}
                    href={`/chats/${chat}`}
                    className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded'
                >
                    <div className='text-sm text-gray-600'>{chat}</div>
                </Link>
            ))}
        </div>
    )
}
