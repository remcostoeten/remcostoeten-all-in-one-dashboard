import Link from 'next/link'

import { Github } from 'lucide-react'
import { AnimatedGradientPill } from '../effects/AnimatedGradientPill'
import siteConfig from '@/core/data/site-config'
import { useTranslations } from 'next-intl'
import { BorderBeam } from '../effects/magicui/border-beam'
import ShineBorder from '../effects/magicui/shine-border'

export default function HeroSection() {
    const t = useTranslations('Landing')

    return (
        <div className='flex flex-col items-center justify-center leading-6'>
            <div className='my-5'>
                <AnimatedGradientPill />
            </div>
            <h1 className='inline-block max-w-screen-lg scroll-m-20 bg-gradient-to-b from-black to-gray-700/80 bg-clip-text text-balance text-center prose-4xl font-semibold tracking-tight text-transparent dark:from-white dark:to-slate-400 sm:text-4xl md:text-6xl lg:text-7xl'>
                {t('intro_heading')}
            </h1>
            <p className='mx-auto mt-2 max-w-[700px] text-center text-gray-500 prose-base dark:text-gray-400 md:prose-lg'>
                {t('intro_description')}
            </p>
            <div className='flex items-center justify-center gap-3'>
                <Link href='/dashboard' className='mt-5'>
                    <ShineBorder
                        className='text-center px-8  font-bold capitalize'
                        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                    >
                        {t('get_started')}
                    </ShineBorder>
                </Link>
                <Link
                    href={siteConfig.github}
                    target='_blank'
                    className='animate-buttonheartbeat border p-2 rounded-full mt-5 hover:dark:bg-black hover:cursor-pointer'
                >
                    <Github className='size-4' />
                </Link>
            </div>
            <div>
                <div className='relative mt-7 flex max-w-6xl justify-center overflow-hidden'>
                    <div className='relative rounded-xl'>
                        <img
                            src='/dash.webp'
                            alt='Hero Image'
                            className='hidden w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:block'
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            </div>
        </div>
    )
}
