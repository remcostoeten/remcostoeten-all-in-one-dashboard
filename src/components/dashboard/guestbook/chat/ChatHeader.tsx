import { Input } from '@/components/ui/input'
import React from 'react'

export default function ChatHeader() {
    return (
        <header className='flex items-center justify-between p-4 bg-blue-alternative'>
            <div className='flex items-center'>
                <span className='text-xl font-semibold'># general</span>
                <span className='ml-2 text-sm text-text-secondary'>
                    General Channel
                </span>
            </div>
            <Input
                type='search'
                placeholder='Search'
                className='w-64 bg-background-active text-text-primary'
            />
        </header>
    )
}
