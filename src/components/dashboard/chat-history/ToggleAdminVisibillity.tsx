import { Flex } from '@/components/shared/atoms/Flex'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@c/ui'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { LockIcon, LockOpen } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { updateChatVisibility } from './updateChatVisibility'

interface ToggleProps {
    name: string
    initialAdminOnly: boolean
}

export default function ToggleAdminVisibility({
    name,
    initialAdminOnly
}: ToggleProps) {
    const [publicVisible, setPublicVisible] = useState(initialAdminOnly)

    const handleClick = async () => {
        const newAdminOnly = !publicVisible

        try {
            await updateChatVisibility(name, newAdminOnly)
            setPublicVisible(newAdminOnly)
            toast('Visibility updated')
        } catch (error) {
            console.error('Error handling click:', error)
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className='w-6 h-6'>
                    <DotsVerticalIcon
                        className='cursor-pointer'
                        color='#7f7f7f'
                    />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleClick}>
                        <Flex items='center'>
                            {publicVisible ? (
                                <Flex items='center' gap='1'>
                                    <LockIcon className='text-white w-4 h-4' />
                                    Only visible for admins
                                </Flex>
                            ) : (
                                <Flex items='center' gap='1'>
                                    <LockOpen className='w-4 h-4' />
                                    Visible for everyone
                                </Flex>
                            )}
                        </Flex>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
