import svgToReactComponent from '@/core/libs/svgToComponent'
import React from 'react'

const MenuItem = ({ name, icon, isExpanded, hasNotification }) => {
    const IconComponent =
        typeof icon === 'string' ? svgToReactComponent(icon) : icon
    const notificationClass = hasNotification ? 'has-notification' : ''

    return (
        <div
            className={`${notificationClass} trans rounded-lg flex items-center px-3 py-2 hover:bg-gray-800 cursor-pointer ${isExpanded ? 'justify-start' : 'justify-center'}`}
        >
            <span className='w-6 h-6'>{IconComponent}</span>
            {isExpanded && <span className='ml-3'>{name}</span>}
        </div>
    )
}

export default MenuItem
