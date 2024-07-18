'use client'

import { SearchIcon } from '@/components/theme/icons'

export default function SubMenuSearch() {
    return (
        <div className='px-2 pr-8 py-2'>
            <div className='relative flex items-center gap-2 py-1.5 bg-bg-ghost rounded'>
                <input
                    className='flex-grow w-full rounded-md pl-8 pt-2 pb-2 text-xs px-4 outline-none bg-transparent border-border border'
                    type='search'
                    placeholder='Search...'
                    aria-label='Search'
                    onChange={() => {}}
                />
                <SearchIcon
                    width={16}
                    height={16}
                    className='absolute left-2 pointer-events-none stroke-[#7F7F7F]'
                />
            </div>
        </div>
    )
}
