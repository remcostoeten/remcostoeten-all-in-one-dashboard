import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/components/ui/custom-dropdown-menu'
import { SignOutButton, useUser } from '@clerk/nextjs'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { LogOut, Settings, User } from 'lucide-react'
import Link from 'next/link'

export function Profile() {
    const { user } = useUser()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className='size-9'>
                <Avatar>
                    <AvatarImage src={user?.imageUrl} alt='User Profile' />
                    <AvatarFallback />
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href='/user-profile'>
                        <DropdownMenuItem>
                            <User className='mr-2 size-4' />
                            <span>Profile</span>
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
                    <Link href='/dashboard/settings'>
                        <DropdownMenuItem>
                            <Settings className='mr-2 size-4' />
                            <span>Settings</span>
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <SignOutButton>
                    <DropdownMenuItem>
                        <LogOut className='mr-2 size-4' />
                        <span>Log out</span>
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </SignOutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
