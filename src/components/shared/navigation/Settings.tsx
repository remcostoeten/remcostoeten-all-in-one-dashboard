import { Moon, Sun } from 'lucide-react'
import { SettingsIcon } from '@/components/theme/icons'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from '@/components/ui/dropdown-menu'

export default function Settings() {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='icon'>
                        <SettingsIcon fill='#fff' width='20 ' height='20' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem>
                        <Sun />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Moon />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
