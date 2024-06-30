'use client'

import * as React from 'react'
import Image from 'next/image'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible'
import { SearchIcon } from '../icons'
import IconShell from '../shells/IconShell'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

type ChannelProps = {
    name: string
}

const Channel: React.FC<ChannelProps> = ({ name }) => {
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
    const [isOpen, setIsOpen] = React.useState(true)

    return (
        <div className='flex flex-col w-full max-w-[240px] bg-sidebar text-text-primary border-r border-border'>
            <div className='flex items-center  p-3 border-b border-border'>
                <div className='text-lg font-semibold'>Chat</div>
            </div>
            <div className='flex flex-col px-2 py-4 border-b border-border'>
                <div className='flex items-center gap-3 px-2 py-1.5 hover:bg-bg-ghost-hover rounded'>
                    <Image
                        src='/path-to-threads-icon.png'
                        width={20}
                        height={20}
                        alt='Threads'
                    />
                    <div className='text-sm'>Threads</div>
                </div>
                <div className='flex items-center gap-3 px-2 py-1.5 hover:bg-bg-ghost-hover rounded'>
                    <Image
                        src='/path-to-saved-icon.png'
                        width={20}
                        height={20}
                        alt='Saved'
                    />
                    <div className='text-sm'>Saved</div>
                </div>
                <div className='flex items-center gap-3 px-2 py-1.5 hover:bg-bg-ghost-hover rounded'>
                    <Image
                        src='/path-to-browser-icon.png'
                        width={20}
                        height={20}
                        alt='Browser'
                    />
                    <div className='text-sm'>Browser</div>
                </div>
                <div className='flex items-center gap-3 px-2 py-1.5 hover:bg-bg-ghost-hover rounded'>
                    <Image
                        src='/path-to-channels-icon.png'
                        width={20}
                        height={20}
                        alt='Channels'
                    />
                    <div className='text-sm'>Channels</div>
                </div>
            </div>
            <div className='px-2 pr-8 py-2'>
                <div className='relative flex items-center gap-2  py-1.5 bg-bg-ghost rounded'>
                    <div className='relative flex items-center gap-2 py-1.5 bg-bg-ghost rounded'>
                        <input
                            className='flex-grow w-full rounded-md pl-8 pt-2 pb-2 text-xs px-4 outline-none bg-transparent border-border  border'
                            type='search'
                            placeholder='Search...'
                            aria-label='Search'
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
                className='border-b border-border pb-4'
            >
                <CollapsibleTrigger className='flex items-center justify-between px-4 py-2 w-full hover:bg-bg-ghost-hover '>
                    <div className='flex items-center gap-2'>
                        <span className='text-xs text-text-secondary'>
                            CHANNELS
                        </span>
                    </div>
                    <Image
                        src='/path-to-chevron-icon.png'
                        width={16}
                        height={16}
                        alt='Toggle channels'
                        className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
