'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from '@/components/ui/tooltip'
import svgToReactComponent from '@/core/libs/svgToComponent'
import Link from 'next/link'

type MenuItemProps = {
    name: string
    icon: any
    isExpanded: boolean
    hasNotification?: boolean
    anchor?: string
    onClick?: () => void
}

const MenuItem = ({
    name,
    icon,
    isExpanded = false,
    hasNotification,
    onClick,
    anchor = '#'
}: MenuItemProps) => {
    const IconComponent =
        typeof icon === 'string' ? svgToReactComponent(icon) : icon
    const notificationClass = hasNotification ? 'has-notification' : ''

    return (
        <>
            <Tooltip>
                <TooltipTrigger>
                    <Link
                        href={anchor}
                        onClick={onClick}
                        className={`${notificationClass} trans rounded-lg flex items-center px-3 py-2 hover:bg-gray-800 cursor-pointer justify-start`}
                    >
                        <span className='w-6 h-6'>{IconComponent}</span>
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.span
                                    key={name}
                                    initial={{ opacity: -10, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: 'easeInOut'
                                    }}
                                    className='ml-3'
                                >
                                    {name}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side='right' align='center'>
                    <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                </TooltipContent>
            </Tooltip>
        </>
    )
}

export default MenuItem
