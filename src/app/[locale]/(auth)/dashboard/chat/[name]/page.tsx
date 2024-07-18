import { Suspense } from 'react'
import { getChatData } from '../../../../../../core/@server/actions/getChatData'
import ChatMessages from '../../../../../../components/dashboard/chat-history/individual-chat/ChatMessage'

export default async function ChatPage({
    params
}: {
    params: { name: string }
}) {
    const chatData = await getChatData(params.name)

    return (
        // <div className='p-4'>
        //     <h1 className='text-2xl font-bold mb-4'>Chat with {params.name}</h1>
        //     <pre className='bg-gray-100 p-4 rounded overflow-auto'>
        //         {JSON.stringify(chatData, null, 2)}
        //     </pre>
        // </div>
        <div className='flex flex-col h-full'>
            <Suspense fallback={<h1 className='text-4xl'>Loading...</h1>}>
                <ChatMessages />
            </Suspense>
        </div>
    )
}
