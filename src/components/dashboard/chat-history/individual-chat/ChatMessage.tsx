import { getInitials } from "../../../../core/utils/get-initials";
import { formatDate } from "../../../../core/utils/format-date";
import { LinkPreview } from "../../../effects/magicui/link-preview";
import Image from 'next/image';

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
        <div className='flex-1 overflow-y-auto '>
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
                                    <LinkPreview
                                        url={message.content}
                                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                                    >
                                        {message.content}
                                    </LinkPreview>
                                ) : message.type === 'image' ? (
                                    <div className="mt-1">
                                        <Image

                                            src={`/${message.content}`}
                                            alt="Shared image"
                                            width={300}
                                            height={200}
                                            layout="responsive"
                                            className="rounded-md"
                                        />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
