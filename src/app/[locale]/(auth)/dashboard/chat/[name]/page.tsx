import { Suspense } from 'react'
import ChatMessages from '../../../../../../components/dashboard/chat-history/individual-chat/ChatMessage'
import { PaginationControl } from '../../../../../../components/dashboard/chat-history/individual-chat/PaginationControl'
import { getChatData } from '../../../../../../core/@server/actions/getChatData'

export default async function ChatPage({
    params,
    searchParams
}: {
    params: { name: string }
    searchParams: { page?: string, pageSize?: string }
}) {
    const page = parseInt(searchParams.page || '1', 10)
    const pageSize = parseInt(searchParams.pageSize || '50', 10)
    const chatData = await getChatData(params.name, page, pageSize)

    if (!chatData || chatData.messages.length === 0) {
        return <div>Chat not found or page out of bounds</div>
    }

    return (
        <div className='flex flex-col h-full p-4 gap-4'>
            <Suspense fallback={<h1 className='text-4xl'>Loading...</h1>}>

                <PaginationControl
                    currentPage={chatData.currentPage}
                    totalMessages={chatData.totalMessages}
                    pageSize={chatData.pageSize}
                    name={params.name}
                />
                <ChatMessages messages={chatData.messages} currentUserId={chatData.userId} />
                <PaginationControl
                    currentPage={chatData.currentPage}
                    totalMessages={chatData.totalMessages}
                    pageSize={chatData.pageSize}
                    name={params.name}
                />
            </Suspense>
        </div>
    )
}
