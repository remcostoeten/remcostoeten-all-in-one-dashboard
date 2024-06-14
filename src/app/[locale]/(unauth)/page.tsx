import Head from 'next/head'
import HeroSection from '@/components/marketing/HeroSection'
import { getTranslations } from 'next-intl/server'
import { IBM_Plex_Sans } from 'next/font/google'
import Roadmap from '../_tests/font/readme/page'
import SideBySide from '@/components/effects/SideBySide'
import AnimatedLogoCloud from '@/components/effects/animated-logo-cloud'
import MarketingCards from '@/components/marketing/MarketingCards'

interface CustomLinkProps {
    href: string
    children: React.ReactNode
}

const plexsans = IBM_Plex_Sans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => (
    <a
        className='text-blue-700 hover:border-b-2 hover:border-blue-700'
        href={href}
        target='_blank'
        rel='noopener noreferrer'
    >
        {children}
    </a>
)

export default function Index() {
    return (
        <>
            z1{' '}
            <div className='flex flex-col justify-center items-center w-full mt-[1rem] p-3'>
                <HeroSection />
                <div className='w-[80%] py-[4rem] dark:hidden'>
                    <AnimatedLogoCloud />
                </div>
            </div>
            <div className='flex my-[5rem] w-full justify-center items-center'>
                <SideBySide />
            </div>{' '}
            <div className='flex flex-col p-2 w-full justify-center items-center'>
                <MarketingCards />
            </div>
            f
            <Roadmap />
        </>
    )
}
