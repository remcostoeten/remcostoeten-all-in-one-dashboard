import { cn } from '@/core/utils/cn'
import React from 'react'

export default function Loading() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <LoadingSpinner className='mr-2 h-4 w-4' />
        </div>
    )
}

const LoadingSpinner = ({ className }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={cn('animate-spin', className)}
        >
            <path d='M21 12a9 9 0 1 1-6.219-8.56' />
        </svg>
    )
}
