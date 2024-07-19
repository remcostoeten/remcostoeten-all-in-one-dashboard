'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerClose
} from '@/components/ui/drawer'
import { searchChatMessages } from '@/core/@server/actions/searchChatMessages'
import { useChatSearchStore } from '@/core/stores/chatStore'
import Search from './ChatSearch'
import type { Message } from './individual-chat/ChatMessage'

interface SearchDrawerProps {
    chatName: string
}

export default function SearchDrawer({ chatName }: SearchDrawerProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [searchResults, setSearchResults] = useState<Message[]>([])
    const { isSearchOpen, toggleSearch } = useChatSearchStore()
    const [isLoading, setIsLoading] = useState(!chatName)

    useEffect(() => {
        console.log('Current chatName:', chatName)
    }, [chatName])

    useEffect(() => {
        if (chatName) {
            setIsLoading(false)
        }
    }, [chatName])

    if (chatName) {
        console.log('Current chatName:', chatName)
    } else {
        return (
            <div>
                <Button onClick={toggleSearch}>Search</Button>
                <Drawer open={isSearchOpen} onClose={toggleSearch}>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Search</DrawerTitle>
                            <DrawerClose asChild>
                                <Button variant='outline'>Close</Button>
                            </DrawerClose>
                        </DrawerHeader>
                        <Search chatName={chatName} />
                    </DrawerContent>
                </Drawer>
            </div>
        )
    }

    const handleSearch = async () => {
        if (isLoading) {
            return <div>Loading...</div>
        }

        if (searchQuery.trim() === '') {
            setSearchResults([])
            return
        }

        setIsSearching(true)
        try {
            console.log('Searching for:', searchQuery, 'in chat:', chatName)
            const results = await searchChatMessages(chatName, searchQuery)
            console.log('Search results:', results)
            // searchResults(results.messages)
        } catch (error) {
            console.error('Error searching messages:', error)
        } finally {
            setIsSearching(false)
        }
    }

    // useEffect(() => {
    //     const handleKeyDown = (event: KeyboardEvent) => {
    //         if (event.key === 'Escape' && isSearchOpen) {
    //             toggleSearch()
    //         }

    //         if (event.key === 'k' && event.ctrlKey || event.key === 's') {
    //             toggleSearch()
    //         }
    //     }

    //     document.addEventListener('keydown', handleKeyDown)

    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown)
    //     }
    // }, [isSearchOpen, toggleSearch])

    return (
        <Drawer open={isSearchOpen} onClose={toggleSearch}>
            <DrawerContent>
                <Search
                    chatName={chatName}
                    onSearchResults={setSearchResults}
                />
                <div className='p-4 space-y-4'>
                    <div className='flex space-x-2'>
                        <Input
                            type='text'
                            placeholder='Search messages...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) =>
                                e.key === 'Enter' && handleSearch()
                            }
                        />
                        <Button onClick={handleSearch} disabled={isSearching}>
                            {isSearching ? 'Searching...' : 'Search'}
                        </Button>
                    </div>
                    {searchResults.length > 0 && (
                        <div className='max-h-[60vh] overflow-y-auto'>
                            {searchResults.map((message, index) => (
                                <div key={index} className='p-2 border-b'>
                                    {message.content}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </DrawerContent>
        </Drawer>
    )
}
