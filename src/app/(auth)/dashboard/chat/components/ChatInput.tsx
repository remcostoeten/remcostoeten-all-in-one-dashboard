import React from 'react'
import { Textarea } from '@/components/ui/textarea'

export default function ChatInput() {
    return (
        <div className='p-4 bg-light-blue'>
            <Textarea
                placeholder='Start typing...'
                className='w-full bg-background-active text-text-primary resize-none'
                rows={1}
            />
            <div className='flex mt-2 space-x-2'>
                {/* Add icons for attachments, emojis, etc. */}
            </div>
        </div>
    )
}
