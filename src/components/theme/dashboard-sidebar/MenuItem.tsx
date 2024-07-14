import svgToReactComponent from '@/core/libs/svgToComponent'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const MenuItem = ({ name, link, icon, isExpanded, hasNotification }) => {
    const IconComponent =
        typeof icon === 'string' ? svgToReactComponent(icon) : icon
    const notificationClass = hasNotification ? 'has-notification' : ''

    return (
        <div
            className={`${notificationClass}  rounded-lg flex items-center px-3 py-2 hover:bg-gray-800 cursor-pointer ${isExpanded ? 'justify-start' : 'justify-start'}`}
        >
            <Link href={link} className='w-6 h-6'>
                {IconComponent}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.a
                            href={link}
                            className='ml-3'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {name}
                        </motion.a>
                    )}
                </AnimatePresence>
            </Link>
        </div>
    )
}

export default MenuItem
