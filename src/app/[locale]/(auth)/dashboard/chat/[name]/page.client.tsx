'use client'

import { useState, useEffect } from 'react'
import { PaginationControl } from '@/components/dashboard/chat-history/individual-chat/PaginationControl'
import ChatZoeken from '@/components/dashboard/chat-history/individual-chat/ChatZoeken'
import MainWrapper from '../../MainWrapper'
import ChatMessages from '../../../../../../components/dashboard/chat-history/individual-chat/ChatMessage'

type ChatPageClientProps = {
    initialChatData: any // Define a proper type for your chat data
    chatName: string
    scrollTo?: string
}

export default function ChatPageClient({
    initialChatData,
    chatName,
    scrollTo
}: ChatPageClientProps) {
    const [chatData, setChatData] = useState(initialChatData)

    useEffect(() => {
        // Handle scrolling to specific message if scrollTo is provided
        if (scrollTo) {
            const element = document.getElementById(scrollTo)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }
    }, [scrollTo])

    return (
        <MainWrapper chatName={chatName}>
            <div className='flex flex-col max-h-screen min-h-screen p-4 pb-8 mr-4'>
                <PaginationControl
                    currentPage={chatData.currentPage}
                    totalMessages={chatData.totalMessages}
                    pageSize={chatData.pageSize}
                    name={chatName}
                />
                <ChatZoeken
                    chatName={chatName}
                    onSearch={(results) =>
                        setChatData((prev) => ({ ...prev, messages: results }))
                    }
                />
                <ChatMessages
                    messages={chatData.messages}
                    currentUserId={chatData.userId}
                    chatName={chatName}
                    currentPage={chatData.currentPage}
                    pageSize={chatData.pageSize}
                    totalMessages={chatData.totalMessages}
                />
                <PaginationControl
                    currentPage={chatData.currentPage}
                    totalMessages={chatData.totalMessages}
                    pageSize={chatData.pageSize}
                    name={chatName}
                />
            </div>
        </MainWrapper>
    )
}
