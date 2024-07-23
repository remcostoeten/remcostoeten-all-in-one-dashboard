import { PaginationControl } from '@/components/dashboard/chat-history/individual-chat/PaginationControl'
import { getChatWithMessages } from '@/core/@server/actions/getChatData'
import ChatZoeken from '@/components/dashboard/chat-history/individual-chat/ChatZoeken'
import MainWrapper from '../../MainWrapper'
import ChatMessages from '../../../../../../components/dashboard/chat-history/individual-chat/ChatMessage'

type ChatPageProps = {
    params: { name: string }
    searchParams: { page?: string; pageSize?: string; scrollTo?: string }
}

export default async function ChatPage({
    params,
    searchParams
}: ChatPageProps) {
    const page = parseInt(searchParams.page || '1', 10)
    const pageSize = parseInt(searchParams.pageSize || '50', 10)

    const chatData = await getChatWithMessages(params.name, page, pageSize)

    if (!chatData || chatData.messages.length === 0) {
        return <div>No messages found</div>
    }

    return (
        <MainWrapper chatName={params.name}>
            <div className='flex flex-col max-h-screen min-h-screen p-4 pb-8 mr-4'>
                <PaginationControl
                    currentPage={chatData.currentPage}
                    totalMessages={chatData.totalMessages}
                    pageSize={chatData.pageSize}
                    name={params.name}
                />
                <ChatZoeken
                    messages={chatData.messages}
                    currentUserId={chatData.userId}
                    chatName={params.name}
                    currentPage={chatData.currentPage}
                    pageSize={chatData.pageSize}
                    totalMessages={chatData.totalMessages}
                />
                <ChatMessages
                    messages={chatData.messages}
                    currentUserId={chatData.userId}
                    chatName={params.name}
                    currentPage={chatData.currentPage}
                    pageSize={chatData.pageSize}
                    totalMessages={chatData.totalMessages}
                />
                <PaginationControl
                    currentPage={chatData.currentPage}
                    totalMessages={chatData.totalMessages}
                    pageSize={chatData.pageSize}
                    name={params.name}
                />
            </div>
        </MainWrapper>
    )
}
