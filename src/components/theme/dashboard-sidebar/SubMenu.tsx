'use client'

import Image from 'next/image'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible'
import { SearchIcon } from '../icons'
import IconShell from '../shells/IconShell'
import { ChevronRightIcon, CogIcon, TvIcon } from '@heroicons/react/24/outline'
import useNotImplemented from '@/core/hooks/useNotYetImplementedToast'
import { useState, type ReactNode } from 'react'
import { RenderChatsList } from './RenderChatsList'

// function Channel({
//     name,
//     isNotImplemented,
//     onClick
// }: {
//     name: string
//     isNotImplemented?: boolean | (() => void) | HTMLInputElement
//     onClick?: () => void
// }) {
//     const inProgresstoast = useNotImplemented({ isInBeta: false })
//     const handleClick = isNotImplemented
//         ? inProgresstoast : null

//     return (
//         <div
//             className='flex items-center gap-1 px-2.5 space-x-2'
//             onClick={handleClick ? handleClick : () => console.log('clicked')}
//         >
//             <IconShell
//                 className='h-[20px] p-[0px] w-[20px] translate-y-[2px]'
//                 as='div'
//             >
//                 <span className='text-text-secondary text-xs translate-x-[2px] '>
//                     #
//                 </span>
//             </IconShell>
//             <div className='text-sm text-text-secondary hover:text-text-primary'>
//                 {name}
//             </div>
//         </div>
//     )
// }

function SubMenu() {
    const [isOpen, setIsOpen] = useState(true)

    function IndividualChatWrapper({
        chatName,
        image
    }: {
        chatName: string
        image?: string | ReactNode
    }) {
        return (
            <div className='flex items-center gap-3 px-2 py-1.5 hover:bg-bg-ghost-hover rounded'>
                {image && <span>{image}</span>}
            </div>
        )
    }

    function Channel({
        name,
        isNotImplemented,
        onClick
    }: {
        name: string
        isNotImplemented?: boolean | (() => void) | HTMLInputElement
        onClick?: () => void
    }) {
        const handleClick = isNotImplemented
            ? () => useNotImplemented({ isInBeta: false })
            : onClick
        return (
            <div
                className='flex items-center gap-1 px-2.5 space-x-2'
                onClick={handleClick}
            >
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

    return (
        <div className='flex flex-col w-full max-w-[240px] bg-sidebar text-text-primary border-r border-border'>
            <div className='flex items-center  p-3 border-b border-border'>
                <div className='text-lg font-semibold'>Chat</div>
            </div>
            <div className='flex flex-col px-2 py-4 border-b border-border'>
                <RenderChatsList />
                <IndividualChatWrapper chatName='test' image={<TvIcon />} />
                <div className='flex items-center gap-3 px-2 py-1.5 hover:bg-bg-ghost-hover rounded'>
                    {/* <Image
                        src='/path-to-channels-icon.png'
                        width={20}
                        height={20}
                        alt='Channels'
                    /> */}
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
                            onChange={(event) => {
                                useNotImplemented({ isInBeta: false })
                            }}
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
                    <Channel name='general' isNotImplemented />
                    <Channel name='random' isNotImplemented />
                </CollapsibleContent>
            </Collapsible>
        </div>
    )
}

export default SubMenu
