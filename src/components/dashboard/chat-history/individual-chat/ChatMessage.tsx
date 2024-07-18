import { getInitials } from "../../../../core/utils/get-initials";
import { formatDate } from "../../../../core/utils/format-date"; // You'll need to create this utility function

interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
    type: string;
}

interface ChatMessagesProps {
    messages: Message[];
    currentUserId: string;
}

export default function ChatMessages({ messages, currentUserId }: ChatMessagesProps) {
    return (
        <div className='flex-1 overflow-y-auto p-4'>
            {messages.map((message) => {
                const isCurrentUser = message.sender === currentUserId;
                return (
                    <div key={message.id} className={`mb-4 ${isCurrentUser ? 'flex justify-end' : ''}`}>
                        <div className={`flex items-start ${isCurrentUser ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${isCurrentUser ? 'bg-green-500 ml-3' : 'bg-blue-primary mr-3'}`}>
                                {getInitials(message.sender)}
                            </div>
                            <div className={`${isCurrentUser ? 'text-right' : ''}`}>
                                <div className='flex items-baseline'>
                                    <span className='font-semibold'>{message.sender}</span>
                                    <span className='ml-2 text-sm text-text-secondary'>{formatDate(message.timestamp)}</span>
                                </div>
                                {message.type === 'text' ? (
                                    <p className={`bg-popover bg-opacity-10 mt-1 p-2 rounded-md ${isCurrentUser ? 'rounded-tr-xl' : 'rounded-tl-xl'}`}>
                                        {message.content}
                                    </p>
                                ) : message.type === 'file' ? (
                                    <a href={message.content} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                                        View File
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
