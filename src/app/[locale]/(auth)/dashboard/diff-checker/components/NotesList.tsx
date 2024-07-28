'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Note from './Note'

interface NotesListProps {
    notes: string[]
}

export default function NotesList({ notes }: NotesListProps) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='border-border pt-4 border-t'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center justify-between pl-2 pr-2 pb-2 w-full hover:bg-bg-ghost-hover cursor-pointer'
            >
                <span className='text-xs text-text-secondary'>NOTES</span>
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronRightIcon className='h-4 w-4 text-text-secondary' />
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial='collapsed'
                        animate='open'
                        exit='collapsed'
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='flex flex-col gap-2 overflow-hidden'
                    >
                        {notes.map((note) => (
                            <Note key={note} name={note} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
