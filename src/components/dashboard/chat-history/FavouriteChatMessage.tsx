'use client'

import { HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import React, { useState } from 'react'
import { addFavorite } from '../../../core/@server/actions/favoriteMessage'

export function FavouriteChatMessage({
    messageId,
    userId,
    chatBetween,
    children
}) {
    const [isFavorited, setIsFavorited] = useState(false)
    const handleFavorite = async () => {
        try {
            await addFavorite(messageId, chatBetween, userId)
            setIsFavorited(!isFavorited)
            console.log('Message favorited successfully')
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
                    <DropdownMenuItem disabled={false}>
                        <ShareIcon className='mr-2 h-4 w-4' />
                        Share message...
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
