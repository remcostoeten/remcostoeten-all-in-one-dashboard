'use client'

import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { addFavorite } from '../../../core/@server/actions/favoriteMessage'
import { timestamp } from 'drizzle-orm/mysql-core'

export function FavouriteChatMessage({
    messageId,
    userId,
    chatBetween,
    children,
    timestamp
}) {
    const [isFavorited, setIsFavorited] = useState(false)

    const handleFavorite = async () => {
        try {
            const result = await addFavorite(
                messageId,
                userId,
                chatBetween,
                children.props.children,
                timestamp
            )
            if (result.success) {
                setIsFavorited(!isFavorited)
                console.log('Message favorited successfully')
            } else {
                console.error('Failed to favorite message:', result.message)
            }
        } catch (error) {
            console.error('Error favoriting message:', error)
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleFavorite}>
                        <HeartIcon
                            className={`mr-2 h-4 w-4 ${isFavorited ? 'text-red-500' : ''}`}
                        />
                        {isFavorited
                            ? 'Unfavorite message'
                            : 'Favorite message'}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='text-red-600'>
                    <TrashIcon className='mr-2 h-4 w-4' />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
