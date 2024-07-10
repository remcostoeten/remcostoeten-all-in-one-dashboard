'use client'

import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle
} from '@/components/ui/sheet'
import { Dialog, DialogClose } from '@radix-ui/react-dialog'
import { cn } from '@/core/utils/cn'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { DashboardIcon } from '@radix-ui/react-icons'
import LogoIcon from './Logo'
import { ModeToggle } from './ModeToggle'
import { Profile } from './Profile'
import ShineBorder from '@/components/effects/magicui/shine-border'
import { headerDropdownItems } from '@/core/data/menu-items'

export default function NavBar() {
    const { userId } = useAuth()

    const ref = React.useRef<HTMLDivElement>(null)
    const [isFixed, setIsFixed] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                setIsFixed(window.scrollY > ref.current.clientHeight)
            }
            console.log(window.scrollY)
        }

        if (ref.current) {
            setIsFixed(window.scrollY > ref.current.clientHeight)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav
            ref={ref}
            className={`z-10 flex min-w-full justify-between border-b p-2 transition-all duration-1000 bg-black bg-opacity-50 pr-4 pl-3  ${isFixed ? 'fixed top-0 ' : '-top-5'}`}
        >
            {/* ToDo add mobile menu */}
            <NavigationMenu>
                <NavigationMenuList className='flex w-full justify-between gap-3 max-[825px]:hidden'>
                    <LogoIcon isLink />
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem className='ml-5 max-[825px]:hidden'>
                        <NavigationMenuTrigger className='bg-black bg-opacity-50'>
                            Features
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='flex w-[400px] flex-col gap-3 p-4  lg:w-[500px]'>
                                {headerDropdownItems.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='max-[825px]:hidden'>
                        <Link href='/blog' legacyBehavior passHref>
                            <Button variant='ghost'>Blog</Button>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className='flex items-center gap-2 max-[825px]:hidden'>
                <Link href='/dashboard' className='max-[825px]:hidden'>
                    <ShineBorder className='text-center px-6 py-2  capitalize'>
                        <p className='pl-1 flex items-center gap-2'>
                            <DashboardIcon className='h-4 w-4' />
                            Dashboard
                        </p>
                    </ShineBorder>
                </Link>
                {userId && <Profile />}
            </div>
        </nav>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className='text-sm font-medium leading-none'>
                        {title}
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'
