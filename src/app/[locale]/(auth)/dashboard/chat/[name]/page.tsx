import ChatMessages from "../../../../../../components/dashboard/chat-history/individual-chat/ChatMessage";
import { PaginationControl } from "../../../../../../components/dashboard/chat-history/individual-chat/PaginationControl";
import { getChatData } from "../../../../../../core/@server/actions/getChatData";

export default async function ChatPage({
    params,
    searchParams
}: {
    params: { name: string }
    searchParams: { page?: string; pageSize?: string; scrollTo?: string }
}) {
    const page = parseInt(searchParams.page || '1', 10)
    const pageSize = parseInt(searchParams.pageSize || '50', 10)

    const chatData = await getChatData(params.name, page, pageSize)

    if (!chatData || chatData.messages.length === 0) {
        return <div>No messages found</div>
    }

    return (
        <div className="flex flex-col max-h-screen min-h-screen p-4 pb-8 mr-4">
            <PaginationControl
                currentPage={chatData.currentPage}
                totalMessages={chatData.totalMessages}
                pageSize={chatData.pageSize}
                name={params.name}
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
    )
}
