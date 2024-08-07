'use client'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible'
import { ChevronRightIcon, CogIcon, TvIcon } from '@heroicons/react/24/outline'
import { useState, useCallback, type ReactNode } from 'react'
import { SearchIcon } from '@/components/theme/icons'
import IconShell from '@/components/theme/shells/IconShell'

const IndividualChatWrapper = ({
    image
}: {
    chatName: string
    image?: string | ReactNode
}) => {
    return (
        <div className='flex items-center gap-3 px-2 py-1.5 hover:bg-bg-ghost-hover rounded'>
            {image && <span>{image}</span>}
        </div>
    )
}

const Channel = ({ name }: { name: string }) => {
    return (
        <div className='flex items-center gap-1 px-2.5 space-x-2'>
            <IconShell
                className='h-[20px] p-[0px] w-[20px] translate-y-[2px]'
                as='div'
            >
                <span className='text-text-secondary text-xs translate-x-[2px] '>
                    #
                </span>
            </IconShell>
            <div className='text-sm text-text-secondary hover:text-text-primary'>
                {name}
            </div>
        </div>
    )
}

function SubMenu() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='flex flex-col w-full max-w-[240px] bg-sidebar text-text-primary border-r border-border'>
            <div className='flex items-center  p-3 border-b border-border'>
                <div className='text-lg font-semibold'>Chat</div>
            </div>
            <div className='flex flex-col px-2 py-4 border-b border-border'>
                <IndividualChatWrapper chatName='test' image={<TvIcon />} />
                <div className='flex items-center gap-3 px-2 py-1.5 hover:bg-bg-ghost-hover rounded'>
                    <CogIcon className='h-6 w-6' />
                    <div className='text-sm'>Channels</div>
                </div>
            </div>
            <div className='px-2 pr-8 py-2'>
                <div className='relative flex items-center gap-2  py-1.5 bg-bg-ghost rounded'>
                    <div className='relative flex items-center gap-2 py-1.5 bg-bg-ghost rounded'>
                        <input
                            className='flex-grow w-full rounded-md pl-8 pt-2 pb-2 text-xs px-4 outline-none bg-transparent border-border border'
                            type='search'
                            placeholder='Search...'
                            aria-label='Search Channels'
                        />
                        <SearchIcon
                            width={16}
                            height={16}
                            className='absolute left-2 pointer-events-none stroke-[#7F7F7F]'
                        />
                    </div>
                </div>
            </div>
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className='border-b border-border py-4 border-t '
            >
                <CollapsibleTrigger className='flex items-center justify-between px-4 pb-2 w-full hover:bg-bg-ghost-hover '>
                    <div className='flex items-center gap-2'>
                        <span className='text-xs text-text-secondary'>
                            CHANNELS
                        </span>
                    </div>
                    <ChevronRightIcon
                        fill='border-border'
                        width={16}
                        height={16}
                        className={`trans transform transition-transform ${isOpen ? 'rotate-90' : 'rotate-180 '}`}
                    />
                </CollapsibleTrigger>
                <CollapsibleContent className='flex flex-col gap-2'>
                    <Channel name='general' />
                    <Channel name='random' />
                </CollapsibleContent>
            </Collapsible>
        </div>
    )
}

export default SubMenu
