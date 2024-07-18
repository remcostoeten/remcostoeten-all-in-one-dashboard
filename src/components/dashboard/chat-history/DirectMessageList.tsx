'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { SubMenuInnerContent } from '../theme/sub-menu/SubMenuContent'
import AvatarShell from '../../theme/shells/AvatarShell'
import { DirectMessageSkeleton } from '../../effects/SkeletonLoaders'
import Link from 'next/link'

const tailwindBackgrounds = [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500'
]

function DirectMessage({ name }: { name: string }) {
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    const firstLetter = initials[0]
    const randomBackground =
        tailwindBackgrounds[
            Math.floor(Math.random() * tailwindBackgrounds.length)
        ]

    return (
        <Link
            href={`/dashboard/chat/${encodeURIComponent(name)}`}
            className='flex items-center gap-2 px-2.5 space-x-2 hover:bg-gray-100 rounded'
        >
            <AvatarShell
                Initials={initials}
                firstLetter={firstLetter}
                hasTwoLetters={initials.length > 1}
                width='5'
                height='5'
                background={randomBackground}
            />
            <div className='text-sm text-text-secondary hover:text-text-primary'>
                {name}
            </div>
        </Link>
    )
}

export default function DirectMessageList() {
    const [isOpen, setIsOpen] = useState(true)
    const [chatNames, setChatNames] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('/api/chat-names')
            .then((response) => response.json())
            .then((data) => {
                setChatNames(data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching chat names:', error)
                setIsLoading(false)
            })
    }, [])

    return (
        <SubMenuInnerContent>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center justify-between pl-2 pr-2 pb-2 w-full hover:bg-bg-ghost-hover cursor-pointer'
            >
                <span className='text-xs text-text-secondary uppercase pb-1'>
                    Direct messages
                </span>
                <ChevronRightIcon
                    className={`h-3 w-3 text-text-secondary transition-transform ${isOpen ? 'rotate-90' : ''}`}
                />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='flex flex-col gap-2'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isLoading
                            ? Array(3)
                                  .fill(0)
                                  .map((_, index) => (
                                      <DirectMessageSkeleton key={index} />
                                  ))
                            : chatNames.map((name, index) => (
                                  <DirectMessage key={index} name={name} />
                              ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </SubMenuInnerContent>
    )
}
