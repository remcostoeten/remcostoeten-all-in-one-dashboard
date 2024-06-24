'use client'

import { cn } from '@/core/utils/cn'
import type { ReactNode } from 'react'

export default function AnimatedGradientText({
    className,
    children
}: {
    className?: ReactNode
    children: ReactNode
}) {
    return (
        <div
            className={cn(
                'group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] bg-black/40',
                className
            )}
        >
            <div className='absolute inset-0 block size-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-px [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]' />

            {children}
        </div>
    )
}
