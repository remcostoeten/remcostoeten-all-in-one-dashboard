import { cn } from '@/core/utils/cn'
import { ChevronRight } from 'lucide-react'
import AnimatedGradientText from './magicui/animated-gradient-text'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function AnimatedGradientPill() {
    const t = useTranslations('Landing')
    return (
        <Link
            href='/dashboard'
            className='z-10 flex items-center justify-center hover:scale-105 transition-all duration-300 group'
        >
            <AnimatedGradientText>
                <span className='group-hover:scale-125 transition-transform duration-300 ease-in-out'>
                    🎉
                </span>
                <hr className='mx-2 h-4 w-px shrink-0 bg-gray-300' />
                <span
                    className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                >
                    <i>{t('usp1')}</i> {t('usp2')}
                </span>
                <ChevronRight className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
            </AnimatedGradientText>
        </Link>
    )
}
