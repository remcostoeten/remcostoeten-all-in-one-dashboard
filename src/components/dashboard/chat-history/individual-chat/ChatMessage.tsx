'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getInitials } from '@/core/utils/get-initials';
import { formatDate } from '@/core/utils/format-date';
import { LinkPreview } from '@/components/effects/magicui/link-preview';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import Search from '../ChatSearch';
import { FavouriteChatMessage } from '../FavouriteChatMessage';

export type Message = {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
    type: string;
};

type ChatMessagesProps = {
    messages: Message[];
    currentUserId: string;
    chatName: string;
    currentPage: number;
    pageSize: number;
    totalMessages: number;
};

export default function ChatMessages({
    messages,
    currentUserId,
    chatName,
}: ChatMessagesProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxImageUrl, setLightboxImageUrl] = useState('');
    const [searchResults, setSearchResults] = useState<Message[]>([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [messageToScrollTo, setMessageToScrollTo] = useState<string | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const messageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollToMessageId = searchParams.get('scrollTo');
        if (scrollToMessageId) {
            console.log('ScrollTo parameter found:', scrollToMessageId);
            setMessageToScrollTo(scrollToMessageId);
        }
    }, [searchParams]);

    useEffect(() => {
        if (messageToScrollTo) {
            console.log('Attempting to scroll to message:', messageToScrollTo);
            const scrollToMessage = () => {
                const messageElement = messageRefs.current[messageToScrollTo];
                if (messageElement && chatContainerRef.current) {
                    console.log('Scrolling to message element');
                    messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setMessageToScrollTo(null);
                } else {
                    console.log('Message element not found on current page');
                }
            };

            setTimeout(scrollToMessage, 100);
        }
    }, [messageToScrollTo, messages]);

    const openLightbox = (url: string) => {
        setLightboxImageUrl(url);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const handleSearchResults = (results: Message[]) => {
        setSearchResults(results);
        setIsDrawerOpen(true);
    };

    const scrollToMessage = async (messageId: string) => {
        console.log('scrollToMessage called with id:', messageId);
        setIsDrawerOpen(false);

        if (messages.some(msg => msg.id === messageId)) {
            setMessageToScrollTo(messageId);
        } else {
            try {
                const response = await fetch(`/api/find-message-page?chatName=${chatName}&messageId=${messageId}`);
                const data = await response.json();
                if (data.page) {
                    console.log(`Message found on page ${data.page}, navigating...`);
                    router.push(`?page=${data.page}&scrollTo=${messageId}`);
                } else {
                    console.error('Message not found');
                }
            } catch (error) {
                console.error('Error finding message page:', error);
            }
        }
    };

    const renderMessage = (message: Message, isSearchResult = false) => {
        const isCurrentUser = message.sender === currentUserId;
        return (
            <div
                key={message.id}
                ref={(el: HTMLDivElement | null) => {
                    if (el) messageRefs.current[message.id] = el;
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
                        {message.type === 'text' ? (
                            <FavouriteChatMessage messageId={message.id} userId={currentUserId}>


                                <p
                                    className={`text-balance bg-popover bg-opacity-10 mt-1 p-2 rounded-md ${isCurrentUser ? 'rounded-tr-xl' : 'rounded-tl-xl'}`}
                                >
                                    {message.content}
                                </p></FavouriteChatMessage>
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
                                    onClick={() => openLightbox(`/${message.content}`)}
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
                {
                    isSearchResult && (
                        <Button
                            onClick={() => scrollToMessage(message.id)}
                            className="mt-2"
                        >
                            Go to message
                        </Button>
                    )
                }
            </div >
        );
    };

    return (
        <>
            <Search chatName={chatName} onSearchResults={handleSearchResults} />

            <div ref={chatContainerRef} className='flex-1'>
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
                        <DrawerDescription>Found {searchResults.length} results for ""</DrawerDescription>
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
    );
}
