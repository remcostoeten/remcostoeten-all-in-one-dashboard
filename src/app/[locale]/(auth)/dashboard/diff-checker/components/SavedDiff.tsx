'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ClockIcon } from 'lucide-react'

interface SavedDiffProps {
    id: string
    title: string
    date: string
}

export default function SavedDiff({ id, title, date }: SavedDiffProps) {
    const pathname = usePathname()
    const isActive = pathname.includes(id)

    return (
        <Link
            href={`/dashboard/diff-checker/${encodeURIComponent(id)}`}
            className={`flex items-center gap-2 px-2.5 space-x-2 hover:bg-ghost ${isActive ? 'bg-ghost py-1' : 'py-0.5 hover:bg-ghost'}`}
        >
            <ClockIcon className='w-4 h-4 text-text-secondary' />
            <div className='flex-grow'>
                <div className='text-sm text-text-secondary hover:text-text-primary truncate'>
                    {title}
                </div>
                <div className='text-xs text-text-tertiary'>{date}</div>
            </div>
        </Link>
    )
}
