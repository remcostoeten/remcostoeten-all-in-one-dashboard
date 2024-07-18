'use client'

import { MagicCard } from '@/components/effects/magicui/cursor-card'
import ShimmerButton from '@/components/effects/magicui/shimmer-button'
import { MarqueeHorizontal } from '@/components/marketing/MarketingCards'
import Pill from '@/components/Pill'
import { Flex } from '@/components/shared/atoms/Flex'
import Link from 'next/link'
import { features } from '@/core/config/marketing-data'

const FeatureCard = ({ icon: Icon, title, status, children }) => (
    <MagicCard className='!bg-black'>
        <div className='flex items-center justify-between'>
            <span className='flex flex-col align-start items-start gap-3'>
                <Flex items='center'>
                    <Icon className='w-6 h-6 mr-2 text-primary dark:text-primary-dark' />
                    <h3 className='text-lg font-bold text-gray-100 mt-0 mb-0'>
                        {title}
                    </h3>
                </Flex>
                <Pill>{status}</Pill>
            </span>
        </div>
        {children}
    </MagicCard>
)

const TechnologyCard = ({ icon: Icon, title }) => (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center'>
        <Icon className='w-12 h-12 mb-4 text-primary dark:text-primary-dark' />
        <h3 className='text-lg font-bold text-gray-900 dark:text-gray-100'>
            {title}
        </h3>
    </div>
)

const FancyDemoBtn = ({ children, href, variant }) => (
    <Link href={href} passHref>
        <ShimmerButton shimmerDuration={variant} className='shadow-2xl'>
            <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
                {children}
            </span>
        </ShimmerButton>
    </Link>
)

function Line({ ...props }) {
    return <div className='w-full my-4 h-[1px] bg-neutral-800' {...props} />
}

export default function Roadmap() {
    return (
        <main className='bg-black px-16 border mt-8 rounded-xl py-8 !pb-20'>
            <Section title=''>
                {' '}
                <div className='prose mt-0 mb-0 prose-lg mx-auto'>
                    <header className='space-y-2'>
                        <h1 className='text-3xl font-bold mb-0 pb-0 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl'>
                            Personal all-in-one panel
                        </h1>
                        <p className='!m-0 text-muted-foreground dark:text-muted-foreground-dark'>
                            Because I hate load times (cloudflare ugh), and not
                            owning my own stuff
                        </p>
                    </header>
                    <Line />
                    <Section title='Overview'>
                        <p className='p-0 mb-0'>
                            Just started this repo, will be migrating features
                            I've built over so it's far from done. And probably
                            never will be.
                        </p>
                        <p className='p-01 mb-0'>
                            This is a personal project that combines various
                            tools and features I've built over the years. It's a
                            one-stop solution for managing personal finance,
                            secure file storage, code snippets, and tools I've
                            built for myself such as URL/text extractors,
                            (reverse) geolocation finder, SVG to CSS-pseudo
                            elements, HTML to JSX/TSX converter, and loads more
                            probably.
                        </p>
                    </Section>
                    <div className='flex mb-8 -translate-x-4'>
                        <FancyDemoBtn
                            href='https://panel.remcostoeten.com'
                            variant='3s'
                        >
                            live demo
                        </FancyDemoBtn>
                        <FancyDemoBtn
                            href='https://www.figma.com/design/1GPCg6iRCkIF0xcUB91GXi/Dashboard-design?node-id=6-1381&t=AfMGZm4VJ9bUpwIB-0'
                            variant='6s'
                        >
                            Figma design
                        </FancyDemoBtn>
                    </div>

                    <Section title='Features'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {features.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    status={feature.status}
                                >
                                    {feature.content}
                                </FeatureCard>
                            ))}
                        </div>
                    </Section>

                    <Section title='Technologies used'>
                        <div className='break-container translate-y-10'>
                            <MarqueeHorizontal />
                        </div>
                    </Section>
                </div>
            </Section>
        </main>
    )
}

function Section({ children, title }) {
    return (
        <>
            <div className='break-container'></div>
            <section className='pb-8 '>
                <h2 className='text-neutral-200 m-0 pb-2'>{title}</h2>
                {children}
            </section>
        </>
    )
}
