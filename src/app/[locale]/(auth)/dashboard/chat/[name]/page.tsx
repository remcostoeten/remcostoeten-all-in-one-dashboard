import { Suspense } from 'react'
import { getChatData } from '../../../../../../core/@server/actions/getChatData'
import ChatMessages from '../../../../../../components/dashboard/chat-history/individual-chat/ChatMessage'

export default async function ChatPage({
    params
}: {
    params: { name: string }
}) {
    const chatData = await getChatData(params.name)

    if (!chatData) {
        return <div>Chat not found</div>
    }

    return (
        <div className='flex flex-col h-full'>
            <h1 className='text-2xl font-bold mb-4'>Chat with {chatData.userName}</h1>
            <Suspense fallback={<h1 className='text-4xl'>Loading...</h1>}>
                <ChatMessages messages={chatData.messages} currentUserId={chatData.userId} />
            </Suspense>
        </div>
    )
}
