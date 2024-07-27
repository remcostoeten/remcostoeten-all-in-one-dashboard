import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type ActionProps = {
    title?: string
    children: React.ReactNode
    menuItems: {
        label: string
        icon?: React.ElementType
        iconClassName?: string
        onClick: () => void
    }[]
}

export function ActionsDropdownMenu({
    title = 'Actions',
    children,
    menuItems
}: ActionProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                className='absolute right-2 top-1/2 transform -translate-y-1/2'
            >
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{title}</DropdownMenuLabel>
                <DropdownMenuGroup>
                    {menuItems.map((item, index) => (
                        <DropdownMenuItem
                            key={index}
                            onSelect={event => {
                                event.preventDefault()
                                item.onClick()
                            }}
                        >
                            {item.icon && (
                                <item.icon
                                    className={`mr-2 h-4 w-4 ${item.iconClassName || ''}`}
                                />
                            )}
                            {item.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
