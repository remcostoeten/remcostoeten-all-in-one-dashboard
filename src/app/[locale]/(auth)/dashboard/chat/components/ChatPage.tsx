import { Suspense } from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'

export default function ChatPage() {
    return (
        <div className='flex flex-col h-full'>
            <ChatHeader />
            <Suspense fallback={<div>Loading messages...</div>}>
                <ChatMessages />
            </Suspense>
            <ChatInput />
        </div>
    )
}
