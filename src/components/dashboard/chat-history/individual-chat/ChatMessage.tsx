'use client'

import { LinkPreview } from '@/components/effects/magicui/link-preview'
import { Button } from '@/components/ui/button'
import { WHATSAPP_NAME } from '@/core/config/site-config'
import { formatDate, formatDateLabel } from '@/core/utils/format-date'
import { getInitials } from '@/core/utils/get-initials'
import Hearts from '@c/effects/Hearts'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { FavouriteChatMessage } from '../FavouriteChatMessage'

export type Message = {
    id: string
    sender: string
    content: string
    timestamp: string
    type: 'text' | 'file' | 'image'
    isFavourited: boolean
}

type ChatMessagesProps = {
    messages: Message[]
    currentUserId: string
    chatName: string
}

export default function ChatMessages({
    messages,
    currentUserId
}: ChatMessagesProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [lightboxImageUrl, setLightboxImageUrl] = useState('')
    const messageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
    const chatContainerRef = useRef<HTMLDivElement>(null)

    const openLightbox = (url: string) => {
        setLightboxImageUrl(url)
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
    }

    const renderMessage = (message: Message) => {
        const isCurrentUser = message.sender === currentUserId

        return (
            <div
                ref={(el) => {
                    if (el) messageRefs.current[message.id] = el
                }}
                className={`mb-4 ${message.sender.includes('emco') ? 'flex justify-end' : ''}`}
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
                        className={`${isCurrentUser ? 'text-right max-w-[80%]' : 'max-w-[80%]'}`}
                    >
                        <div className='flex items-baseline'>
                            <span className='font-semibold'>
                                {message.sender}
                            </span>
                            <span className='ml-2 text-sm text-text-secondary'>
                                {formatDate(message.timestamp)}
                            </span>
                        </div>
                        <FavouriteChatMessage
                            messageId={message.id}
                            userId={message.sender}
                            isFavourited={message.isFavourited}
                        >
                            {renderMessageContent(
                                message,
                                isCurrentUser,
                                message.isFavourited
                            )}
                        </FavouriteChatMessage>
                    </div>
                </div>
            </div>
        )
    }

    const renderMessageContent = (
        message: Message,
        isCurrentUser: boolean,
        is_favourited: boolean
    ) => {
        switch (message.type) {
            case 'text':
                return (
                    <p
                        className={`relative text-balance bg-popover bg-opacity-10 mt-1 p-2 rounded-md ${isCurrentUser ? 'rounded-tr-xl' : 'rounded-tl-xl'}`}
                    >
                        {message.content}
                        {is_favourited ? <Hearts numHearts={5} /> : ''}
                    </p>
                )
            case 'file':
                return (
                    <LinkPreview
                        url={message.content}
                        className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500'
                    >
                        {message.content}
                    </LinkPreview>
                )
            case 'image':
                return (
                    <div className='mt-1'>
                        <button
                            onClick={() => openLightbox(`/${message.content}`)}
                            className='block w-80 rounded-md overflow-hidden transition-all hover:opacity-80'
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
                )
            default:
                return null
        }
    }

    const renderMessages = () => {
        let currentDate = ''

        return messages.map((message, index) => {
            const messageDate = formatDateLabel(message.timestamp)
            const showDateLabel = messageDate !== currentDate

            currentDate = messageDate

            return (
                <React.Fragment key={message.id}>
                    {showDateLabel && (
                        <div className='text-center my-4'>
                            <span className='bg-muted px-2 py-1 rounded-full text-sm'>
                                {messageDate}
                            </span>
                        </div>
                    )}
                    {renderMessage(message)}
                </React.Fragment>
            )
        })
    }

    return (
        <>
            <div ref={chatContainerRef} className='pl-2 pr-4'>
                {renderMessages()}
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
        </>
    )
}
