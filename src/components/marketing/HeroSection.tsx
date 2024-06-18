import Link from 'next/link'

import { Github, ArrowRight } from 'lucide-react'
import { AnimatedGradientPill } from '../effects/AnimatedGradientPill'
import { Button } from '../ui/button'
import siteConfig from '@/core/data/site-config'
import { useTranslations } from 'next-intl'
import { BorderBeam } from '../effects/magicui/border-beam'

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
                    <Button
                        size='sm'
                        className='animate-buttonheartbeat rounded-md bg-blue-600 text-sm font-semibold text-white hover:bg-blue-500'
                    >
                        {t('get_started')}
                    </Button>
                </Link>
                <Link href='#' target='_blank' className='mt-5'>
                    <Button
                        size='sm'
                        variant='outline'
                        className='flex gap-1 text-blue-600 hover:bg-blue-100 hover:text-blue-600'
                    >
                        een knop..
                        <ArrowRight className='size-4' />
                    </Button>
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
                            src='/dash-light.png'
                            alt='Hero Image'
                            className='block w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:hidden'
                        />
                        <img
                            src='/dash.png'
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
