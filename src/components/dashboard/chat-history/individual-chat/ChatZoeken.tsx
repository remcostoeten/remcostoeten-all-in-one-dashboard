'use client'

import { ReactNode, useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { useSubMenuStore } from '@/core/stores/SubMenuStore'
import { FiSearch } from 'react-icons/fi'
import { Input } from '@/components/ui/input'
import { searchChatMessages } from '@/core/@server/actions/searchChatMessages'
import { SearchIcon } from '../../../theme/icons'
import { Avatar, AvatarImage, AvatarFallback } from '../../../ui'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '@/components/ui/drawer'
import { useChatSearchStore } from '../../../../core/stores/chatStore'
import { set } from 'date-fns'

type MainWrapperProps = {
    children: ReactNode
    chatName?: string
}

export default function ChatZoeken({ children, chatName }: MainWrapperProps) {
    const isSubMenuVisible = useSubMenuStore((state) => state.isSubMenuVisible)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const { isSearchOpen, toggleSearch } = useChatSearchStore()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const scrollToRef = useRef(null)

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (searchQuery.trim() === '') {
            setSearchResults([])
            return
        }

        setIsSearching(true)
        try {
            console.log('Searching for:', searchQuery, 'in chat:', chatName)
            const results = await searchChatMessages(chatName, searchQuery)
            console.log('Search results:', results)
            setSearchResults(results.messages)
        } catch (error) {
            console.error('Error searching messages:', error)
        } finally {
            setIsSearching(false)
        }
    }

    const scrollToMessage = async (messageId: string) => {
        setIsDrawerOpen(false) // Close the drawer

        scrollToRef.current = messageId

        // Attempt to scroll immediately
        scrollToMessageElement(messageId)

        // If the message is not found, it might be on another page
        if (
            typeof document !== 'undefined' &&
            !document.getElementById(messageId)
        ) {
            try {
                const response = await fetch(
                    `/api/find-message-page?chatName=${chatName}&messageId=${messageId}`
                )
                const data = await response.json()
                if (data.page) {
                    window.location.href = `?page=${data.page}&scrollTo=${messageId}`
                } else {
                    console.error('Message not found')
                }
            } catch (error) {
                console.error('Error finding message page:', error)
            }
        }
    }

    const scrollToMessageElement = (messageId: string) => {
        if (typeof document !== 'undefined') {
            const messageElement = document.getElementById(messageId)
            if (messageElement) {
                messageElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
                messageElement.classList.add('highlight')
                setTimeout(
                    () => messageElement.classList.remove('highlight'),
                    3000
                )
                scrollToRef.current = null // Clear the ref after successful scroll
            }
        }
    }

    useEffect(() => {
        const scrollToMessageId = new URLSearchParams(
            window.location.search
        ).get('scrollTo')
        if (scrollToMessageId) {
            scrollToRef.current = scrollToMessageId
        }
    }, [])

    useEffect(() => {
        if (scrollToRef.current) {
            const messageId = scrollToRef.current
            const scrollAttempts = [0, 100, 500, 1000, 2000]
            scrollAttempts.forEach((delay) => {
                setTimeout(() => scrollToMessageElement(messageId), delay)
            })
        }
    }, [scrollToRef.current])

    useEffect(() => {
        const handleKeyDown = (event: React.KeyboardEvent) => {
            if (
                (event.key === 'k' && event.ctrlKey) ||
                (event.key === 's' &&
                    document.activeElement.tagName !== 'INPUT')
            ) {
                event.preventDefault()
                setIsDrawerOpen(true)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <>
            <section
                className='flex flex-col ml-auto transition-[width]'
                style={{
                    width: isSubMenuVisible
                        ? 'calc('
                        : 'calc(100% - var(--sidebar-width))',
                    height: 'calc(100vh - var(--nav-height))'
                }}
            >
                {children}
            </section>

            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerTrigger asChild>
                    <Button
                        variant='outline'
                        className='flex items-center gap-2'
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <SearchIcon
                            className='w-5 h-5'
                            width={20}
                            height={20}
                        />
                        <span className='hidden sm:inline'>
                            Advanced Search
                        </span>
                        <kbd className='ml-2 text-xs border rounded px-1'>
                            S
                        </kbd>
                        <kbd className='ml-1 text-xs border rounded px-1'>
                            Ctrl+K
                        </kbd>
                    </Button>
                </DrawerTrigger>

                <DrawerContent className='max-w-[65vw] backdrop-blur-xl !backdrop-brightness-100'>
                    <DrawerHeader>
                        <DrawerTitle>Advanced Search</DrawerTitle>
                        <DrawerDescription>
                            Find past conversations by searching for keywords,
                            names, or dates.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className='px-4 py-2'>
                        <form onSubmit={handleSearch}>
                            <Input
                                type='search'
                                placeholder='Search messages...'
                                className='w-full'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                    </div>
                    <DrawerFooter>
                        <div className='grid gap-4 sm:grid-cols-2'>
                            <Button
                                onClick={handleSearch}
                                disabled={isSearching}
                            >
                                {isSearching ? 'Searching...' : 'Search'}
                            </Button>
                            <DrawerClose asChild>
                                <Button
                                    variant='outline'
                                    onClick={() => setIsDrawerOpen(false)}
                                >
                                    Cancel
                                </Button>
                            </DrawerClose>
                        </div>
                    </DrawerFooter>
                    <div className='px-4 py-2'>
                        <div className='grid gap-4 max-h-[65vh] overflow-scroll backdrop-blur-sm '>
                            {searchResults.map((result, index) => (
                                <div
                                    key={index}
                                    className='flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted'
                                >
                                    <Avatar className='border w-10 h-10'>
                                        <AvatarImage src='/placeholder-user.jpg' />
                                        <AvatarFallback>
                                            {result.sender
                                                .substring(0, 2)
                                                .toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className='grid gap-0.5'>
                                        <p className='text-sm font-medium leading-none'>
                                            {result.sender}
                                        </p>
                                        <p className='text-xs text-muted-foreground'>
                                            {result.content} &middot;{' '}
                                            {result.timestamp}
                                        </p>
                                        <Button
                                            onClick={() =>
                                                scrollToMessage(result.id)
                                            }
                                            className='mt-2'
                                        >
                                            Go to message
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export function ToggleSearch({ className }: { className?: string }) {
    const { toggleSearch } = useChatSearchStore()
    return (
        <Button
            variant='ghost'
            size='icon'
            onClick={toggleSearch}
            className={className}
        >
            <FiSearch />
        </Button>
    )
}
