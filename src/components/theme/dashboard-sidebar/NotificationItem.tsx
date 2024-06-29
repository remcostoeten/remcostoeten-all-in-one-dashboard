import React from 'react'
import MenuItemWithTooltip from './MenuItemWithTooltip'

export default function NotificationMenuItem() {
    const notificationsSvg = (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 22h-1a7 4H8c-.552-.423-1-1.099V17c0-.346.169-1.535.346A2 2 0 00-2-2V9c0-.552-.423-1-1.099h1a2 2 0 002 2v4zm-6 0a4 4 0 001.414-1.707l7-7a4 4 0 011.586 1.707L12 20z'
                fill='currentColor'
            ></path>
        </svg>
    )

    return (
        <>
            <div className='flex flex-col gap-1 items-center mb-4'>
                <></>
            </div>
        </>
    )
}
