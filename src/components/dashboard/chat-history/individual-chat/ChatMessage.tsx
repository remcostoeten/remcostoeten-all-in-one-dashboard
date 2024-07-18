// components/dashboard/chat-history/individual-chat/ChatMessage.tsx

'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getInitials } from '@/core/utils/get-initials'
import { formatDate } from '@/core/utils/format-date'
import { LinkPreview } from '@/components/effects/magicui/link-preview'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { searchChatMessages } from '../../../../core/@server/actions/searchChatMessages'

type Message = {
    id: string
    sender: string
    content: string
    timestamp: string
    type: string
}

type ChatMessagesProps = {
    messages: Message[]
    currentUserId: string
    chatName: string
}

export default function ChatMessages({
    messages,
    currentUserId,
    chatName
}: ChatMessagesProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [lightboxImageUrl, setLightboxImageUrl] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<Message[]>([])
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isSearching, setIsSearching] = useState(false)
    const messageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

    const openLightbox = (url: string) => {
        setLightboxImageUrl(url)
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
    }

    const handleSearch = async () => {
        if (searchQuery.trim() === '') {
            setSearchResults([])
            setIsDrawerOpen(false)
            return
        }

        setIsSearching(true)
        try {
            const results = await searchChatMessages(chatName, searchQuery)
            setSearchResults(results.messages)
            setIsDrawerOpen(true)
        } catch (error) {
            console.error('Error searching messages:', error)
        } finally {
            setIsSearching(false)
        }
    }

    const scrollToMessage = (messageId: string) => {
        messageRefs.current[messageId]?.scrollIntoView({ behavior: 'smooth' })
        setIsDrawerOpen(false)
    }

    const renderMessage = (message: Message, isSearchResult = false) => {
        const isCurrentUser = message.sender === currentUserId
        return (
            <div
                key={message.id}

                ref={(el: HTMLDivElement | null) => {
                    if (el) messageRefs.current[message.id] = el
                }}
                className={`mb-4 ${isCurrentUser ? 'flex justify-end' : ''}`}
            >
                <div
                    className={`flex items-start ${isCurrentUser ? 'flex-row-reverse' : ''}`}
                >
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${isCurrentUser ? 'bg-green-500 ml-3' : 'bg-blue-primary mr-3'}`}
                    >
                        {getInitials(message.sender)}
                    </div>
                    <div
                        className={`${isCurrentUser ? 'text-right' : ''}`}
                    >
                        <div className='flex items-baseline'>
                            <span className='font-semibold'>
                                {message.sender}
                            </span>
                            <span className='ml-2 text-sm text-text-secondary'>
                                {formatDate(message.timestamp)}
                            </span>
                        </div>
                        {message.type === 'text' ? (
                            <p
                                className={`bg-popover bg-opacity-10 mt-1 p-2 rounded-md ${isCurrentUser ? 'rounded-tr-xl' : 'rounded-tl-xl'}`}
                            >
                                {message.content}
                            </p>
                        ) : message.type === 'file' ? (
                            <LinkPreview
                                url={message.content}
                                className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500'
                            >
                                {message.content}
                            </LinkPreview>
                        ) : message.type === 'image' ? (
                            <div className='mt-1'>
                                <button
                                    onClick={() =>
                                        openLightbox(
                                            `/${message.content}`
                                        )
                                    }
                                    className='block w-80 *:rounded-md overflow-hidden transition-all hover:opacity-80'
                                >
                                    <Image
                                        src={`/${message.content}`}
                                        alt='Shared image'
                                        width={280}
                                        height={160}
                                        layout='responsive'
                                        className='rounded-md'
                                    />
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
                {isSearchResult && (
                    <Button
                        onClick={() => scrollToMessage(message.id)}
                        className="mt-2"
                    >
                        Go to message
                    </Button>
                )}
            </div>
        )
    }

    return (
        <>
            <div className="mb-4 flex space-x-2">
                <Input
                    type="text"
                    placeholder="Search messages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} disabled={isSearching}>
                    {isSearching ? 'Searching...' : 'Search'}
                </Button>
            </div>

            <div className='flex-1 overflow-y-auto'>
                {messages.map((message) => renderMessage(message))}
            </div>

            {isLightboxOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'>
                    <div className='relative max-w-[90vw] max-h-[90vh] p-8'>
                        <Button
                            onClick={closeLightbox}
                            className='absolute top-4 right-4 text-black transition-colors'
                        >
                            X
                        </Button>
                        <Image
                            src={lightboxImageUrl}
                            alt='Lightbox image'
                            width={1200}
                            height={1200}
                            className='max-w-full max-h-full object-contain animate-grow-and-fade'
                        />
                    </div>
                </div>
            )}

            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Search Results</DrawerTitle>
                        <DrawerDescription>Found {searchResults.length} results for "{searchQuery}"</DrawerDescription>
                    </DrawerHeader>
                    <ScrollArea className="h-[70vh] p-4">
                        {searchResults.map((result) => renderMessage(result, true))}
                    </ScrollArea>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
