import svgToReactComponent from '@/core/libs/svgToComponent'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'

const MenuItem = ({ name, link, icon, isExpanded, hasNotification }) => {
    const IconComponent =
        typeof icon === 'string' ? svgToReactComponent(icon) : icon
    const notificationClass = hasNotification ? 'has-notification' : ''
    const pathname = usePathname()
    const isActiveSlug = pathname.includes(link)



    const menuItemContent = (
        <>
            <span className={`${notificationClass} w-6 h-6`}>
                {IconComponent}
            </span>
            <AnimatePresence>
                {isExpanded && (
                    <motion.span
                        className='ml-3'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {name}
                    </motion.span>
                )}
            </AnimatePresence>
        </>
    )

    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Link
                        href={`/dashboard/${link}`}
                        className={`rounded-lg flex  px-3 py-2 cursor-pointer menu-item  ${isExpanded ? 'mr-auto' : 'mx-auto'} ${isActiveSlug ? 'bg-icon-active-background' : ''}`}
                    >
                        {menuItemContent}
                    </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>
                    <p>{name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default MenuItem
