import { cn } from '@/core/utils/cn'
import { ChevronRight } from 'lucide-react'
import AnimatedGradientText from './magicui/animated-gradient-text'
import Link from 'next/link'

interface AnimatedGradientPillProps {
    href?: string
    emoji?: React.ReactNode
    text1?: string
    text2?: string
    gradientColors?: string
    className?: string
    hasSeperator?: boolean
}

export function AnimatedGradientPill({
    href = '#',
    emoji,
    text1,
    text2,
    gradientColors,
    className,
    hasSeperator
}: AnimatedGradientPillProps) {
    return (
        <Link
            href={href}
            className={cn(
                'z-10 flex items-center justify-center hover:scale-105 transition-all duration-300 group',
                className
            )}
        >
            <AnimatedGradientText>
                <span className='group-hover:scale-125 transition-transform duration-300 ease-in-out'>
                    {emoji}
                </span>
                {hasSeperator && (
                    <hr className='mx-2 h-4 w-px shrink-0 bg-gray-300' />
                )}
                <span
                    className={cn(
                        `inline animate-gradient bg-gradient-to-r bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                        gradientColors
                    )}
                >
                    <i>{text1}</i> {text2}
                </span>
                <ChevronRight className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
            </AnimatedGradientText>
        </Link>
    )
}
