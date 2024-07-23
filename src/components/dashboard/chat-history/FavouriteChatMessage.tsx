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
import { toast } from 'sonner'
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline'
import { updateFavorite } from '../../../core/@server/actions/favoriteMessage'

export function FavouriteChatMessage({
    messageId,
    isFavourited,
    children
}: {
    messageId: string
    userId: string
    isFavourited: boolean
    children: React.ReactNode
}) {
    const [isMsgFavorited, setMsgIsFavorited] = useState(isFavourited)
    const [isDeleting, setIsDeleting] = useState(false)

    const handleFavorite = async () => {
        try {
            setIsDeleting(true)
            const result = await updateFavorite(messageId, !isMsgFavorited)

            if (result.success) {
                setMsgIsFavorited(!isMsgFavorited)
                if (isMsgFavorited) {
                    toast('Message unfavorited successfully')
                } else {
                    toast('Message favorited successfully')
                }
            } else {
                toast('Failed to favorite message', {
                    description: result.message
                })
            }
            setIsDeleting(false)
        } catch (error) {
            toast('Error favoriting message', {
                description:
                    error instanceof Error
                        ? error.message
                        : 'Unknown error occurred'
            })
            console.error('Error favoriting message:', error)
            setIsDeleting(false)
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
                            className={`mr-2 h-4 w-4 ${isMsgFavorited ? 'text-red-500' : ''}`}
                        />
                        {isMsgFavorited
                            ? 'Unfavorite message'
                            : 'Favorite message'}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled={true}>
                    <TrashIcon className='mr-2 h-4 w-4' />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
