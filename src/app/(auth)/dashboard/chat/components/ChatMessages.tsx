const currentUserId = 1 // Assume George Fehri is the current user

const demoMessages = [
    {
        id: 1,
        userId: 1,
        sender: 'George Fehri',
        initials: 'GF',
        avatarColor: 'bg-blue-500',
        time: '5:46 pm',
        content: 'Hi there! Hows everyone doing today?'
    },
    {
        id: 2,
        userId: 2,
        sender: 'Jane Smith',
        initials: 'JS',
        avatarColor: 'bg-green-500',
        time: '5:48 pm',
        content:
            'Hello George! Im doing well, thanks for asking. How about you?'
    }
]

export default function ChatMessages() {
    return (
        <section
            className='flex-1 overflow-y-auto p-4 bg-gray-900'
            aria-label='Chat messages'
        >
            <h2 className='sr-only'>Conversation</h2>
            <ol className='space-y-4'>
                {demoMessages.map((message) => {
                    const isCurrentUser = message.userId === currentUserId
                    return (
                        <li
                            key={message.id}
                            className={`flex items-end ${isCurrentUser ? 'justify-end' : ''}`}
                        >
                            {!isCurrentUser && (
                                <div
                                    className={`w-8 h-8 rounded-full ${message.avatarColor} flex items-center justify-center text-white text-sm font-semibold mr-2`}
                                    aria-hidden='true'
                                >
                                    {message.initials}
                                </div>
                            )}
                            <div
                                className={`max-w-[70%] ${isCurrentUser ? 'bg-blue-600' : 'bg-gray-700'} p-3 rounded-2xl ${isCurrentUser ? 'rounded-br-sm' : 'rounded-bl-sm'}`}
                            >
                                <div className='flex items-baseline justify-between mb-1'>
                                    <h3 className='font-semibold text-white text-sm'>
                                        {message.sender}
                                    </h3>
                                    <time
                                        className='ml-2 text-xs text-gray-400'
                                        dateTime={new Date().toISOString()}
                                    >
                                        {message.time}
                                    </time>
                                </div>
                                <p className='text-white'>{message.content}</p>
                            </div>
                            {isCurrentUser && (
                                <div
                                    className={`w-8 h-8 rounded-full ${message.avatarColor} flex items-center justify-center text-white text-sm font-semibold ml-2`}
                                    aria-hidden='true'
                                >
                                    {message.initials}
                                </div>
                            )}
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}
