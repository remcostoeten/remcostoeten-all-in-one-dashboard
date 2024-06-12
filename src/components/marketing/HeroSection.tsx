import Link from 'next/link'
import { AnimatedGradientPill } from '../effects/AnimatedGradientPill'
import { ArrowRight } from '../theme/icons'
// import PushButton from '../shared/SentPushNotificationt'
import { Button } from '../ui/button'

export default function HeroSection() {
    return (
        <div className='flex flex-col items-center justify-center leading-6'>
            <div className='my-5'>
                <AnimatedGradientPill />
            </div>
            <h1 className='inline-block max-w-[1120px] scroll-m-20 bg-gradient-to-b from-black to-gray-700/80 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent dark:from-white dark:to-slate-400 sm:text-4xl md:text-6xl lg:text-7xl'>
                Build & Ship Fast with the Ultimate Nextjs Starter Kit
            </h1>
            <p className='mx-auto mt-2 max-w-[700px] text-center text-gray-500 dark:text-gray-400 md:text-lg'>
                Everything you need to quickly build your SaaS, AI product, or
                any other web application fast giving you time to focus on what
                really matters
            </p>
            <div className='flex items-center justify-center gap-3'>
                <Link href='/dashboard' className='mt-5'>
                    <Button
                        size='sm'
                        className='animate-buttonheartbeat rounded-md bg-blue-600 text-sm font-semibold text-white hover:bg-blue-500'
                    >
                        Get Started
                    </Button>
                </Link>
                <Link
                    href='https://discord.gg/HUcHdrrDgY'
                    target='_blank'
                    className='mt-5'
                >
                    <Button
                        size='sm'
                        variant='outline'
                        className='flex gap-1 text-blue-600 hover:bg-blue-100 hover:text-blue-600'
                    >
                        Join Discord
                        <ArrowRight className='size-4' />
                    </Button>
                </Link>
                <Link
                    href='https://github.com/michaelshimeles/nextjs14-starter-template'
                    target='_blank'
                    className='animate-buttonheartbeat mt-5 rounded-full border p-2 hover:cursor-pointer hover:dark:bg-black'
                >
                    Github logo
                    {/* <Github className="w-4 h-4" /> */}
                </Link>
                {/* <PushButton /> */}
            </div>
            <div>
                <div className='relative mt-7 flex max-w-6xl justify-center overflow-hidden'>
                    <div className='relative rounded-xl'>
                        {/* <img
                            src="/dash-light.png"
                            alt="Hero Image"
                            className="block w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:hidden"
                        /> */}
                        <img
                            src='/dash.png'
                            alt='Hero Image'
                            className='hidden w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:block'
                        />
                        {/* <BorderBeam size={250} duration={12} delay={9} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
