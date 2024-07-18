'use client'

import React, { useState, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence, color } from 'framer-motion';
import { SubMenuInnerContent } from '../theme/sub-menu/SubMenuContent';
import AvatarShell from '../../theme/shells/AvatarShell';

const tailwindBackgrounds = [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500',
];

function DirectMessage({ name }: { name: string }) {
    const initials = name.split(' ').map(n => n[0]).join('').slice(0, 1).toUpperCase();
    const firstLetter = initials[0];
    const randomBackground = tailwindBackgrounds[Math.floor(Math.random() * tailwindBackgrounds.length)];

    return (
        <div className='flex items-center gap-1 px-2.5 space-x-2'>
            <AvatarShell
                Initials={initials}
                firstLetter={firstLetter}
                hasTwoLetters={initials.length > 1}
                width="6"
                height="6"
                background={randomBackground}
            />
            <div className='text-sm text-text-secondary hover:text-text-primary'>
                {name}
            </div>
        </div>
    );
}

export default function DirectMessageList() {
    const [isOpen, setIsOpen] = useState(true);
    const [directMessages, setDirectMessages] = useState<string[]>([]);

    // ToDo refactor with server actions / local api

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const processedData = data.map((user: any) => user.name);
                setDirectMessages(processedData);
            })
            .catch(error => console.error('Error fetching direct messages:', error));
    }, []);

    return (
        <SubMenuInnerContent>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center justify-between pl-1 pr-2 pb-2 w-full hover:bg-bg-ghost-hover cursor-pointer'
            >
                <span className='text-xs font-semibold text-text-tertiary uppercase'>Direct messsages</span>
                <ChevronRightIcon
                    className={`h-3 w-3 text-text-secondary transition-transform ${isOpen ? 'rotate-90' : ''
                        }`}
                />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div className='flex flex-col gap-2'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {directMessages.slice(0, 2).map((dm) => (
                            <DirectMessage key={dm} name={dm} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </SubMenuInnerContent>
    );
}
