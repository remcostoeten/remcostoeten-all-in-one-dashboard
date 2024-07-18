/**
 * Renders a list of chat messages, with each message displayed in a separate component.
 * The messages are passed as an array of objects, with each object containing the following properties:
 * - sender: the name of the sender
 * - content: the content of the message
 * - time: the time the message was sent
 * - isCurrentUser: a boolean indicating whether the message was sent by the current user
 * The component applies different styles to the message based on whether it was sent by the current user or not.
 */

import { getInitials } from "../../../../core/utils/get-initials";


export default function ChatMessages() {
    const messages = [
        { sender: 'George Fehri', content: 'Hi there!', time: '5:46 pm', isCurrentUser: false },
        { sender: 'You', content: 'Hello George!', time: '5:47 pm', isCurrentUser: true },
        { sender: 'George Fehri', content: 'How are you doing?', time: '5:48 pm', isCurrentUser: false },
        { sender: 'You', content: 'I\'m doing great, thanks for asking!', time: '5:49 pm', isCurrentUser: true },
    ];

    return (
        <div className='flex-1 overflow-y-auto p-4'>
            {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.isCurrentUser ? 'flex justify-end' : ''}`}>
                    <div className={`flex items-start ${message.isCurrentUser ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${message.isCurrentUser ? 'bg-green-500 ml-3' : 'bg-blue-primary mr-3'}`}>
                            {message.isCurrentUser ? 'You' : getInitials(message.sender)}
                        </div>
                        <div className={`${message.isCurrentUser ? 'text-right' : ''}`}>
                            <div className='flex items-baseline'>
                                <span className='font-semibold'>{message.sender}</span>
                                <span className='ml-2 text-sm text-text-secondary'>{message.time}</span>
                            </div>
                            <p className={`bg-popover bg-opacity-10 mt-1 p-2 rounded-md  ${message.isCurrentUser ? 'rounded-tr-xl' : 'rounded-tl-xl'}`}>
                                {message.content}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
