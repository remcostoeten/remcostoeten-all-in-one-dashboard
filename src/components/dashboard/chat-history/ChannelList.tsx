'use client'

import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Channel from './Channel'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChannelList({ channels }: { channels: any[] }) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='border-border pt-4 border-t'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center justify-between pl-2 pr-2 pb-2 w-full hover:bg-bg-ghost-hover cursor-pointer'
            >
                <span className='text-xs text-text-secondary'>CHANNELS</span>
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronRightIcon
                        fill='border-border'
                        width={16}
                        height={16}
                    />
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
                        {channels.map((channel) => (
                            <Channel key={channel} name={channel} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
