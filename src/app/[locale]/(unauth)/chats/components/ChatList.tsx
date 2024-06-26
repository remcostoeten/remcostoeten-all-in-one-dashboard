import { WebcamIcon } from '@/components/theme/icons'
import { PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import DashboardLayout from '@/app/[locale]/(auth)/dashboard/_layout'
import { GetChatFiles } from './chat-utils'

export default async function ChatList() {
    const chatFiles = await GetChatFiles()

    return (
        <aside className='hidden w-64 flex-col border-r bg-card p-6 md:flex'>
            <div className='mb-6 flex items-center gap-2'>
                <PhoneIcon className='h-6 w-6 text-green-500' />
                <h2 className='text-xl font-semibold'>WhatsApp Exports</h2>
            </div>
            <nav className='flex flex-col gap-2 '>
                {chatFiles.map((name) => (
                    <Link
                        key={name}
                        href={`/chats/${name.replace('-chat.json', '')}`}
                        className='flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted'
                        prefetch={false}
                    >
                        <WebcamIcon className='h-5 w-5 text-muted-foreground' />
                        {name.replace('-chat.json', '')}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}
