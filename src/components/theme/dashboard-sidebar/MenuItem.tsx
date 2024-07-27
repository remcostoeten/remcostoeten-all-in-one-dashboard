'use client'

import React from 'react'
import svgToReactComponent from '@/core/libs/svgToComponent'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from '@/components/ui/tooltip'

interface MenuItemProps {
    name: string
    link: string
    icon: string | React.ReactNode
    isExpanded: boolean
    hasNotification: boolean
    isDisabled: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({
    name,
    link,
    icon,
    isExpanded,
    hasNotification,
    isDisabled
}) => {
    const IconComponent =
        typeof icon === 'string' ? svgToReactComponent(icon) : icon
    const notificationClass = hasNotification ? 'has-notification' : ''
    const pathname = usePathname()
    const isActiveSlug = pathname.includes(link)
    const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : ''

    const menuItemContent = (
        <>
            <span className={`${notificationClass} w-6 h-6`}>
                {IconComponent}
            </span>
            <AnimatePresence>
                {isExpanded && (
                    <motion.span
                        className='ml-3'
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        {name}
                    </motion.span>
                )}
            </AnimatePresence>
        </>
    )

    const commonClasses = `rounded-lg flex px-3 py-2 menu-item ${isActiveSlug ? 'bg-icon-active-background' : ''} ${disabledClass}`

    return (
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                {isDisabled ? (
                    <div className={commonClasses}>{menuItemContent}</div>
                ) : (
                    <Link
                        href={`/dashboard/${link}`}
                        className={`rounded-lg flex  px-3 py-2 cursor-pointer menu-item mr-auto ${isActiveSlug ? 'bg-icon-active-background' : ''}`}
                    >
                        {menuItemContent}
                    </Link>
                )}
            </TooltipTrigger>
            <TooltipContent side='right'>
                <p>{name}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default MenuItem
