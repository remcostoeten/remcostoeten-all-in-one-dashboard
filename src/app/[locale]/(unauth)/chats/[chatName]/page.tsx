'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChatMessage as ChatMessageType } from '@/core/types/chat-types'
import ChatMessage from '../components/ChatMessage'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { MenuIcon, SearchIcon } from '@/components/theme/icons'

const PAGE_SIZE = 20

export default function ChatPage({ params }: { params: { chatName: string } }) {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const fetchChatData = async () => {
            const response = await fetch(
                `/api/chats/${params.chatName}?page=${currentPage}&pageSize=${PAGE_SIZE}`
            )
            const data = await response.json()
            setMessages(data.messages)
            setTotalPages(data.totalPages)
        }

        fetchChatData()
    }, [params.chatName, currentPage])

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        router.push(`/chats/${params.chatName}?page=${page}`)
    }

    const handleSearch = (query: string) => {
        router.push(
            `/chats/${params.chatName}?search=${encodeURIComponent(query)}`
        )
    }

    return (
        <>
            <header className='sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-card px-4 sm:px-6'>
                <div className='flex items-center gap-4'>
                    <Button variant='ghost' size='icon' className='md:hidden'>
                        <MenuIcon className='h-6 w-6' />
                        <span className='sr-only'>Toggle navigation</span>
                    </Button>
                    <h1 className='text-lg font-semibold'>{params.chatName}</h1>
                </div>
                <div className='relative'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant='ghost' size='icon'>
                                <SearchIcon className='h-5 w-5' />
                                <span className='sr-only'>Search</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className='sm:max-w-md'>
                            <div className='grid gap-4'>
                                <h2 className='text-lg font-semibold'>
                                    Search Messages
                                </h2>
                                <SearchBar onSearch={handleSearch} />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
            <main className='flex-1 overflow-y-auto p-4 sm:p-6'>
                <div className='grid gap-6'>
                    {messages.map((message, index) => (
                        <ChatMessage key={index} message={message} />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </main>
        </>
    )
}
