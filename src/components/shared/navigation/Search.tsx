'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type CommandItemProps = {
    icon: React.ReactNode
    text: string
    shortcut?: string
}

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

type SearchDialogProps = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

function SearchDialog({ isOpen, setIsOpen }: SearchDialogProps) {
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
                setIsOpen(true)
                if (!isOpen) {
                    setTimeout(() => {
                        inputRef.current?.focus()
                    }, 0)
                }
            }
            if (event.ctrlKey && event.key === 'm') {
                event.preventDefault()
                console.log('Microphone')
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
            <Button variant='ghost' size='sm' onClick={() => setIsOpen(true)}>
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
                                    {chevronIcons()}
                                    <span className='justify-center self-start px-2.5 text-xs whitespace-nowrap text-neutral-400'>
                                        Type
                                    </span>
                                    <div className='flex flex-col justify-center p-0.5 text-xs whitespace-nowrap text-neutral-400'>
                                        <div className='justify-center items-center w-3.5 h-3.5 bg-black bg-opacity-10'>
                                            /
                                        </div>
                                    </div>
                                    <span className='justify-center self-start px-2.5 text-xs whitespace-nowrap text-neutral-400'>
                                        to view available commands
                                    </span>
                                </nav>
                            </footer>
                        </motion.main>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default SearchDialog

function chevronIcons() {
    return (
        <>
            <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M7.52786 5.35144L3.15286 9.72644L3.77158 10.3452L7.52786 6.58888L11.2841 10.3452L11.9029 9.72644L7.52786 5.35144Z'
                    fill='#8A8F98'
                    fillOpacity='0.6'
                />
            </svg>

            <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M7.16786 10.6014L2.79286 6.22639L3.40536 5.61389L7.16786 9.37639L10.9304 5.61389L11.5429 6.22639L7.16786 10.6014Z'
                    fill='#8A8F98'
                    fillOpacity='0.6'
                />
            </svg>
        </>
    )
}

const ContactRecordIcon = () => (
    <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M7 7C8.65685 7 10 5.65685 10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4C4 5.65685 5.34315 7 7 7Z'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M1 13V12C1 10.3431 2.34315 9 4 9H10C11.6569 9 13 10.3431 13 12V13'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

const DepartmentIcon = () => (
    <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M11 5L7 1L3 5'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M1 9H13'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M11 9V13H3V9'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

const MicrophoneIcon = () => (
    <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M7 1C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V7C5 7.53043 5.21071 8.03914 5.58579 8.41421C5.96086 8.78929 6.46957 9 7 9C7.53043 9 8.03914 8.78929 8.41421 8.41421C8.78929 8.03914 9 7.53043 9 7V3C9 2.46957 8.78929 1.96086 8.41421 1.58579C8.03914 1.21071 7.53043 1 7 1Z'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M13 7C13 8.5913 12.3679 10.1174 11.2426 11.2426C10.1174 12.3679 8.5913 13 7 13C5.4087 13 3.88258 12.3679 2.75736 11.2426C1.63214 10.1174 1 8.5913 1 7'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

const CameraIcon = () => (
    <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M13 10L9 7L13 4V10Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M1 1H8C8.53043 1 9.03914 1.21071 9.41421 1.58579C9.78929 1.96086 10 2.46957 10 3V11C10 11.5304 9.78929 12.0391 9.41421 12.4142C9.03914 12.7893 8.53043 13 8 13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12V2C0 1.73478 0.105357 1.48043 0.292893 1.29289C0.48043 1.10536 0.734784 1 1 1Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

const ArchiveIcon = () => (
    <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M13 5V13H1V5'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M14 1H0V5H14V1Z'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M6 8H8'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

const MarkReadIcon = () => (
    <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M13 7V11C13 11.5304 12.7893 12.0391 12.4142 12.4142C12.0391 12.7893 11.5304 13 11 13H3C2.46957 13 1.96086 12.7893 1.58579 12.4142C1.21071 12.0391 1 11.5304 1 11V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H9'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M5 7L7 9L13 3'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

const MarkUnreadIcon = () => (
    <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M13 7V11C13 11.5304 12.7893 12.0391 12.4142 12.4142C12.0391 12.7893 11.5304 13 11 13H3C2.46957 13 1.96086 12.7893 1.58579 12.4142C1.21071 12.0391 1 11.5304 1 11V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H9'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M10 1V7'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M13 4L10 7L7 4'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

const AddTodoIcon = () => (
    <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M7 1V13'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M1 7H13'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

const NewIssueIcon = () => (
    <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M7 1V13'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M1 7H13'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

const SelectAllIcon = () => (
    <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M10 3H11C11.2652 3 11.5196 3.10536 11.7071 3.29289C11.8946 3.48043 12 3.73478 12 4V5'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M10 11H11C11.2652 11 11.5196 10.8946 11.7071 10.7071C11.8946 10.5196 12 10.2652 12 10V9'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M4 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4V5'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M4 11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10V9'
            stroke='white'
            strokeOpacity='0.6'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)

function searchIcon() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            width={18}
            height={18}
            className='opacity-60'
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
        </svg>
    )
}
