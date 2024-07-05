import { getChats } from '@/core/@server/actions/getLocalFile'
import Link from 'next/link'

export default async function ChatList() {
    const chats = await getChats()
    const strippedFileNames = chats.map(
        (chat: string) =>
            chat.replace('-chat.json', '').charAt(0).toUpperCase() +
            chat.replace('-chat.json', '').slice(1)
    )

    return (
        <div className='flex flex-col gap-2'>
            {strippedFileNames.map((chat: string) => (
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
