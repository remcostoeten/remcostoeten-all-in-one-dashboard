import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem
} from '@c/ui'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { HeartIcon } from 'lucide-react'
import { updateChatVisibility } from './Test'
import { toast } from 'sonner'

interface ToggleProps {
    name: string
    initialAdminOnly: boolean
}

export default function ToggleAdminVisibility({
    name,
    initialAdminOnly
}: ToggleProps) {
    const [adminOnly, setAdminOnly] = useState(initialAdminOnly)

    const handleClick = async () => {
        const newAdminOnly = !adminOnly // Toggle the boolean value
        try {
            await updateChatVisibility(name, newAdminOnly)
            setAdminOnly(newAdminOnly)
            toast('Visibility updated')
        } catch (error) {
            console.error('Error handling click:', error)
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <DotsVerticalIcon className='cursor-pointer' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleClick}>
                        <div>
                            <HeartIcon
                                className={`mr-2 h-4 w-4 ${adminOnly ? 'text-red-500' : ''}`}
                            />
                            {adminOnly ? 'Remove lock' : 'Hide for non admins'}
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
