'use client'

import { useEffect } from 'react'
import MainContentHeaderWrapper from '@/components/dashboard/guestbook/ui-shells/MainContentHeaderWrapper'
import chatStore from '@/core/stores/chatStore'

export default function ChatHeader(): JSX.Element {
    const setChatTitle = chatStore((state) => state.setChatTitle)

    useEffect(() => {
        setChatTitle('general')
    }, [setChatTitle])

    return (
        <MainContentHeaderWrapper
            hasIconBeforeTitle={true}
            title='general'
            subtitle='General Channel'
            icon={<span>#</span>}
            showSearch={true}
            onSearch={(value: string) => console.log(`Search: ${value}`)}
            className='bg-[#1f1f2c] border-b border-border min-h-[3rem] px-3 py-2 text-xs'
        />
    )
}
