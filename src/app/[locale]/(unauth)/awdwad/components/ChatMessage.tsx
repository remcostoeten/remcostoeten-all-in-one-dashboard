import type { ChatMessage as ChatMessageType } from '@/core/types/chat-types'

export default function ChatMessage({ message }: { message: ChatMessageType }) {
    const isRemco = message.name === 'Remco'

    return (
        <div className={`grid gap-2 ${isRemco ? 'justify-end' : ''}`}>
            <div className='flex items-center gap-3'>
                {!isRemco && (
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                        {message.name.charAt(0)}
                    </div>
                )}
                <div>
                    <p className='font-medium'>{message.name}</p>
                    <p className='text-sm text-muted-foreground'>
                        {new Date(message.timestamp).toLocaleString()}
                    </p>
                </div>
                {isRemco && (
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                        R
                    </div>
                )}
            </div>
            <p
                className={
                    isRemco
                        ? 'bg-primary text-primary-foreground rounded-md px-3 py-2'
                        : ''
                }
            >
                {message.message}
            </p>
        </div>
    )
}
