import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

const ChatMessages = dynamic(() => import('./ChatMessages'), {
    suspense: true
})

const ChatPage: React.FC = () => {
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

export default ChatPage
