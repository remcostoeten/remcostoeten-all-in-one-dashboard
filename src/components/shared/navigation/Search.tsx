'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MicrophoneIcon } from '@heroicons/react/24/outline'
import { CameraIcon, ArchiveIcon } from '@radix-ui/react-icons'
import { searchIcon, MarkReadIcon, MarkUnreadIcon, chevronIcons } from './search/SearchIcons'

type CommandItemProps = {
    icon: React.ReactNode
    text: string
    shortcut?: string
}
function CommandItem({ icon, text, shortcut }: CommandItemProps) {
const CommandItem: React.FC<CommandItemProps> = ({ icon, text, shortcut }) => (
    <div className='flex flex-col justify-center px-3.5 py-1 w-full max-md:max-w-full'>
        <div className='hover:cursor-pointer transition-all duration-200 hover:bg-icon-active-background flex justify-between gap-0 p-1.5 max-md:flex-wrap max-md:max-w-full rounded-md h-[40px] px-3.5'>
            <div className='flex items-center gap-3'>
                <div className='flex flex-col justify-center items-start pr-3.5 my-auto'>
                    {icon}
                </div>
                <div className='text-xs leading-5 text-white text-opacity-80 max-md:max-w-full'>
                    {text}
                </div>
            </div>
            {shortcut && (
                <div className='flex flex-col justify-center pr-2 text-xs leading-5 text-white whitespace-nowrap'>
                    <div className='flex gap-0'>
                        <ShortcutKey>Ctrl</ShortcutKey>
                        <ShortcutKey>{shortcut}</ShortcutKey>
                    </div>
                </div>
            )}
        </div>
    </div>
)

type SectionTitleProps = {
    title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
    <div className='justify-center px-5 py-2 text-xs tracking-wider leading-4 uppercase whitespace-nowrap text-white text-opacity-60 max-md:max-w-full'>
        {title}
    </div>
)

const ShortcutKey: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className='justify-center px-2 py-px rounded border border-solid bg-white bg-opacity-0 border-white border-opacity-10'>
        {children}
    </div>
)

type CommandGroupProps = {
    title: string
    items: CommandItemProps[]
}

const CommandGroup: React.FC<CommandGroupProps> = ({ title, items }) => (
    <div className='command-group'>
        <SectionTitle title={title} />
        {items.map((item, index) => (
            <CommandItem key={index} {...item} />
        ))}
    </div>
)

function SearchDialog() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const modalRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === '/') {
                event.preventDefault()
                setIsOpen(true)
                setTimeout(() => {
                    inputRef.current?.focus()
                }, 0)
            }
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault()
                setIsOpen((prev) => !prev)
                if (!isOpen) {
                    setTimeout(() => {
                        inputRef.current?.focus()
                    }, 0)
                }
            }
            if (event.ctrlKey && event.key === 'm') {
                event.preventDefault()
            }

            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('mousedown', handleClickOutside)

        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('mousedown', handleClickOutside)
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <>
            <Button
                variant='ghost'
                size='sm'
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {searchIcon()}
            </Button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-s flex items-center justify-center z-[999]'
                    >
                        <motion.main
                            ref={modalRef}
                            initial={{ scale: 1.2, rotate: 3, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            exit={{ scale: 1.3, rotate: -3, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className='flex flex-col py-0.5 max-w-[40rem] w-[75vw]  bg-top-bar rounded-lg shadow-lg overflow-hidden'
                            role='dialog'
                            aria-modal='true'
                        >
                            <header className='px-5 pt-4 pb-2.5 text-base border-b border-solid border-white border-opacity-10 text-white text-opacity-60 max-md:max-w-full '>
                                <div className='relative'>
                                    <Input
                                        ref={inputRef}
                                        className='border-none w-full bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        placeholder='Search...'
                                        value={searchText}
                                        onChange={(e) =>
                                            setSearchText(e.target.value)
                                        }
                                        style={{ paddingRight: '2rem' }} // Add padding to the right for the icon
                                    />
                                    <div className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-opacity-60'>
                                        <ShortcutKey>/</ShortcutKey>
                                    </div>
                                </div>
                            </header>
                            <section className=' max-h-[650px] overflow-y-auto h-fit'>
                                <CommandGroup
                                    title='Office'
                                    items={[
                                        {
                                            icon: <MicrophoneIcon />,
                                            text: 'Microphone',
                                            shortcut: 'D'
                                        },
                                        {
                                            icon: <CameraIcon />,
                                            text: 'Camera',
                                            shortcut: 'E'
                                        }
                                    ]}
                                />
                                <CommandGroup
                                    title='Inbox'
                                    items={[
                                        {
                                            icon: <ArchiveIcon />,
                                            text: 'Archive all'
                                        },
                                        {
                                            icon: <MarkReadIcon />,
                                            text: 'Mark all as read'
                                        },
                                        {
                                            icon: <MarkUnreadIcon />,
                                            text: 'Mark all as unread'
                                        }
                                    ]}
                                />
                            </section>
                            <footer className='flex flex-col justify-center px-5 py-px  w-full border-t border-solid border-white border-opacity-10 max-md:mt-10 max-md:max-w-full'>
                                <nav className='flex gap-0 py-2.5 pr-20 max-md:flex-wrap max-md:pr-5'>
                                    <chevronIcons/>
                                    <span className='justify-center self-start px-2.5 text-xs whitespace-nowrap text-neutral-400'>
                                        Type
                                    </span>
                                    <div className='flex flex-col justify-center p-0.5 text-xs whitespace-nowrap text-neutral-400'>
                                        <div className='justify-center items-center w-3.5 h-3.5 bg-black bg-opacity-10'>
                                            /
                                        </div>
                                    </div>
                                    <span className='justify-center self-start px-2.5 text-xs text-neutral-400'>
                                        to view available commands
                                    </span>
                                </nav>
                            </footer>
                        (</motion.main>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}