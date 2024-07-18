import { Suspense } from 'react'
import ChatMessages from '@/components/dashboard/chat-history/individual-chat/ChatMessage'
import { PaginationControl } from '@/components/dashboard/chat-history/individual-chat/PaginationControl'
import { ChatMessagesSkeleton } from '@/components/effects/SkeletonLoaders'
import { getChatData } from '../../../../../../core/@server/actions/getChatData'
import { searchChatMessages } from '../../../../../../core/@server/actions/searchChatMessages'

export default async function ChatPage({
    params,
    searchParams
}: {
    params: { name: string }
    searchParams: { page?: string; pageSize?: string; query?: string }
}) {
    const page = parseInt(searchParams.page || '1', 10)
    const pageSize = parseInt(searchParams.pageSize || '50', 10)
    const query = searchParams.query || ''

    const chatData = query
        ? await searchChatMessages(params.name, query, page, pageSize)
        : await getChatData(params.name, page, pageSize)

    if (!chatData || chatData.messages.length === 0) {
        return <div>No messages found</div>
    }

    return (
        <div className='flex flex-col h-full p-4 gap-4'>
            <Suspense fallback={<ChatMessagesSkeleton />}>
                <PaginationControl
                    currentPage={chatData.currentPage}
                    totalMessages={chatData.totalMessages}
                    pageSize={chatData.pageSize}
                    name={params.name}
                    query={query}
                />
                <ChatMessages
                    messages={chatData.messages}
                    currentUserId={chatData.userId}
                    chatName={params.name}
                />
                <PaginationControl
                    currentPage={chatData.currentPage}
                    totalMessages={chatData.totalMessages}
                    pageSize={chatData.pageSize}
                    name={params.name}
                    query={query}
                />
            </Suspense>
        </div>
    )
}
