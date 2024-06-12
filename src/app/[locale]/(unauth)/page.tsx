import HeroSection from '@/components/marketing/HeroSection'
import { getTranslations } from 'next-intl/server'
import type { title } from 'process'

export async function generateMetadata(props: { params: { locale: string } }) {
    const t = await getTranslations(props.params.locale, 'Index')

    return {
        title: t('meta_title'),
        description: t('meta_description')
    }
}

export default function Index() {
    return (
        <>
            <HeroSection />
            <p>
                Looking for a personal all-in-one panel?{' '}
                <a
                    className='text-blue-700 hover:border-b-2 hover:border-blue-700'
                    href='https://github.com/remcostoeten/remcostoeten-all-in-one-dashboard'
                >
                    Remco Stoeten's All-in-One Dashboard
                </a>{' '}
                can help you manage your personal projects.
            </p>
            <p>
                Follow{' '}
                <a
                    className='text-blue-700 hover:border-b-2 hover:border-blue-700'
                    href='https://twitter.com/remcostoeten'
                    target='_blank'
                    rel='noreferrer'
                >
                    @remcostoeten on Twitter
                </a>{' '}
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
                <a
                    className='text-blue-700 hover:border-b-2 hover:border-blue-700'
                    href='https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate'
                    target='_blank'
                    rel='noreferrer'
                >
                    Clerk
                </a>
                , Database with DrizzleORM (SQLite, PostgreSQL, and MySQL) and{' '}
                <a
                    className='text-blue-700 hover:border-b-2 hover:border-blue-700'
                    href='https://turso.tech/?utm_source=nextjsstarterbp'
                    target='_blank'
                    rel='noreferrer'
                >
                    Turso
                </a>
                , Error Monitoring with{' '}
                <a
                    className='text-blue-700 hover:border-b-2 hover:border-blue-700'
                    href='https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo'
                    target='_blank'
                    rel='noreferrer'
                >
                    Sentry
                </a>
                , Logging with Pino.js and Log Management with{' '}
                <a
                    className='text-blue-700 hover:border-b-2 hover:border-blue-700'
                    href='https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate'
                    target='_blank'
                    rel='noreferrer'
                >
                    Better Stack
                </a>
                , Monitoring as Code with Checkly, Storybook, Multi-language
                (i18n), and more.
            </p>
        </>
    )
}
