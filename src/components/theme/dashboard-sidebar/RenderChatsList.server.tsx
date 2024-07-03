import { GetChatFiles } from '@/app/[locale]/(unauth)/chats/components/chat-utils'
import Image from 'next/image'
import Link from 'next/link'

export async function RenderChatsList() {
    const chatFiles = await GetChatFiles()

    return (
        <>
            <div className='flex flex-col px-4 py-4 border-b border-border'>
                <nav className='flex flex-col gap-2'>
                    {chatFiles.map((name) => {
                        const formattedName = name.replace('-chat.json', '')
                        return (
                            <Link
                                className='flex items-center gap-3 p-0 hover:bg-bg-ghost-hover rounded'
                                key={name}
                                href={`/dashboard/chats/${formattedName}`}
                                prefetch={false}
                            >
                                <Image
                                    width={14}
                                    height={14}
                                    alt='chat'
                                    src={`/chats/${formattedName}.webp`}
                                />
                                {formattedName}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </>
    )
}
