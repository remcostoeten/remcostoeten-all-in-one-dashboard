'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { searchChatMessages } from '../../../core/@server/actions/searchChatMessages'
import type { Message } from './individual-chat/ChatMessage'
import { useChatSearchStore } from '../../../core/stores/chatStore'

type SearchProps = {
    chatName: string
    onSearchResults: (results: Message[]) => void
}

const Search = ({ chatName, onSearchResults }: SearchProps) => {
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
            onSearchResults(results.messages)
        } catch (error) {
            console.error('Error searching messages:', error)
        } finally {
            setIsSearching(false)
        }
    }
    return (
        <div className='mb-4 flex space-x-2 max-w-sm'>
            <Input
                type='text'
                placeholder='Search messages...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button onClick={handleSearch} disabled={isSearching}>
                {isSearching ? 'Searching...' : 'Search'}
            </Button>
        </div>
    )
}

export default Search
