'use client'

import { useState } from 'react'
import {
    CrossCircledIcon,
    ChatBubbleIcon,
    HeartIcon,
    CornerBottomLeftIcon,
    PaperPlaneIcon
} from '@radix-ui/react-icons'
import {
    Badge,
    Button,
    Textarea,
    Input,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/'
import { extractTextFromJSON } from '@/core/utils/db-json-extract'

export default function AnonymPost({ posts }: { posts: any[] }) {
    const copyLinkToClipboard = async () => {
        const url = window.location.origin
        const link = `${url}`

        await navigator.clipboard.writeText(link)
    }

    const [newReply, setNewReply] = useState('')
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null)
    const [searchTerm, setSearchTerm] = useState('')

    const handleAddReply = async (postId: number) => {
        if (!newReply.trim()) return

        // Here you would add the logic to save the reply to your database
        // For now, we'll just clear the input and close the reply form
        setNewReply('')
        setSelectedPostId(null)
        // You might want to update the posts state here or refetch the data
    }

    const filteredPosts = posts?.filter((post) => {
        const searchTermLowercase = searchTerm.toLowerCase()
        const postTitleLowercase = post.title.toLowerCase()

        return postTitleLowercase.includes(searchTermLowercase)
    })

    if (!posts || posts.length === 0) return <div>None Found</div>

    return (
        <div className='w-full max-w-3xl pb-24'>
            <div className='grid grid-cols-1 gap-2 p-4'>
                <Input
                    type='search'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Search posts...'
                    className='mb-4 w-full rounded-md text-sm'
                />
                {(searchTerm ? filteredPosts : posts).map((post) => (
                    <div
                        key={post.id}
                        className='w-full rounded-xl border p-10 md:px-10 md:py-8'
                    >
                        <div className='mb-2 flex items-center whitespace-pre-line'>
                            <div className='flex items-center'>
                                <div className='flex flex-col'>
                                    <div className='mt-2 text-xs opacity-40'>
                                        {new Date(
                                            post.createdAt
                                        ).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                            <div className='ml-auto flex h-8 w-8 items-center justify-center gap-2 rounded-full text-white'>
                                {post.isAdmin && (
                                    <div className='mt-2 text-xs'>
                                        <Badge variant='secondary'>ADMIN</Badge>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='inline-block w-full whitespace-pre-wrap break-words text-left leading-[1.3] opacity-80'>
                            {post.title}
                        </div>
                        <div className='mb-4 mt-4 text-xs'>
                            {extractTextFromJSON(post.content)}

                            <div className='mt-4'>
                                {selectedPostId === post.id && (
                                    <div className='rounded-md p-4 shadow-md'>
                                        <Textarea
                                            value={newReply}
                                            onChange={(e) =>
                                                setNewReply(e.target.value)
                                            }
                                            placeholder='Add a reply...'
                                            className='mb-2 w-full resize-none rounded border px-3 py-2 text-xs'
                                        />
                                        <div className='flex justify-end'>
                                            <Button
                                                onClick={() =>
                                                    handleAddReply(post.id)
                                                }
                                                className='mr-2'
                                            >
                                                Submit
                                            </Button>
                                            <Button
                                                onClick={() =>
                                                    setSelectedPostId(null)
                                                }
                                                variant='outline'
                                                size='icon'
                                            >
                                                <CrossCircledIcon className='h-4 w-4 text-gray-500' />
                                            </Button>
                                        </div>
                                    </div>
                                )}
                                <div className=''>
                                    <Button
                                        onClick={() =>
                                            setSelectedPostId(
                                                selectedPostId === post.id
                                                    ? null
                                                    : post.id
                                            )
                                        }
                                        variant='outline'
                                        className='mr-2'
                                        size='icon'
                                    >
                                        <ChatBubbleIcon className='h-4 w-4' />
                                    </Button>
                                    <Button
                                        disabled
                                        variant='outline'
                                        className='mr-2'
                                        size='icon'
                                    >
                                        <HeartIcon className='h-4 w-4' />
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                disabled
                                                variant='outline'
                                                size='icon'
                                            >
                                                <PaperPlaneIcon className='h-4 w-4' />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align='start'
                                            className='w-[190px] rounded-2xl bg-background p-0 shadow-xl dark:bg-[#181818]'
                                        >
                                            <DropdownMenuItem
                                                onClick={copyLinkToClipboard}
                                                className='cursor-pointer select-none rounded-none px-4 py-3 text-[15px] font-semibold tracking-normal focus:bg-transparent active:bg-primary-foreground'
                                            >
                                                Copy link
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator className='my-0 h-[1.2px]' />
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
