import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../ui'

export default function ChatInfo() {
    const chatInfo = {
        name: 'Remco',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        lastMessage: 'Todo, retrieve soms stats here?',
        lastMessageDate: '2024-03-15T12:30:00.000Z',
        unreadMessages: 3,
        lastMessageFrom: 'Bot'
    }
    return (
        <Tooltip delayDuration={100}>
            <TooltipTrigger>
                <InformationCircleIcon className='h-5 w-5' />
            </TooltipTrigger>
            <TooltipContent>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <img
                            src={chatInfo.avatar}
                            alt={chatInfo.name}
                            className='h-8 w-8 rounded-full'
                        />
                        <div className='flex flex-col'>
                            <span className='font-medium'>{chatInfo.name}</span>
                            <span className='text-sm text-muted-foreground'>
                                {chatInfo.lastMessage}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm text-muted-foreground'>
                            {chatInfo.lastMessageDate}
                        </span>
                        <span className='text-sm text-muted-foreground'>
                            {chatInfo.unreadMessages} unread
                        </span>
                    </div>
                </div>
            </TooltipContent>
        </Tooltip>
    )
}
