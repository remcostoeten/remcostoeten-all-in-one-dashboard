import Head from 'next/head'
import HeroSection from '@/components/marketing/HeroSection'
import { getTranslations } from 'next-intl/server'
import { IBM_Plex_Sans } from 'next/font/google'

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
            <Head>
                <title>Remco Stoeten's All-in-One Dashboard</title>
                <meta
                    name='description'
                    content="Manage your personal projects with Remco Stoeten's All-in-One Dashboard."
                />
            </Head>
            <HeroSection />
            <p>
                Looking for a personal all-in-one panel?{' '}
                <CustomLink href='https://github.com/remcostoeten/remcostoeten-all-in-one-dashboard'>
                    Remco Stoeten's All-in-One Dashboard
                </CustomLink>{' '}
                can help you manage your personal projects.
            </p>
            <p>
                Follow{' '}
                <CustomLink href='https://twitter.com/remcostoeten'>
                    @remcostoeten on Twitter
                </CustomLink>{' '}
                for updates and more information about the dashboard.
            </p>
            <p>
                Our sponsors&apos; exceptional support has made this project
                possible. Their services integrate seamlessly with the
                dashboard, and we recommend trying them out.
            </p>
            <h2 className='mt-5 text-2xl font-bold'>Sponsors</h2>
            <h2 className='mt-5 text-2xl font-bold'>
                Boilerplate Code for Your Next.js Project with Tailwind CSS
            </h2>
            <p className='text-base'>
                <span role='img' aria-label='rocket'>
                    🚀
                </span>{' '}
                This dashboard is a developer-friendly starter code for Next.js
                projects, built with Tailwind CSS, and TypeScript.{' '}
                <span role='img' aria-label='zap'>
                    ⚡️
                </span>{' '}
                Made with developer experience first: Next.js, TypeScript,
                ESLint, Prettier, Husky, Lint-Staged, Vitest, Testing Library,
                Commitlint, VSCode, PostCSS, Tailwind CSS, Authentication with{' '}
                <CustomLink href='https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate'>
                    Clerk
                </CustomLink>
                , Database with DrizzleORM (SQLite, PostgreSQL, and MySQL) and{' '}
                <CustomLink href='https://turso.tech/?utm_source=nextjsstarterbp'>
                    Turso
                </CustomLink>
                , Error Monitoring with{' '}
                <CustomLink href='https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo'>
                    Sentry
                </CustomLink>
                , Logging with Pino.js and Log Management with{' '}
                <CustomLink href='https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate'>
                    Better Stack
                </CustomLink>
                , Monitoring as Code with Checkly, Storybook, Multi-language
                (i18n), and more.
            </p>
        </>
    )
}
