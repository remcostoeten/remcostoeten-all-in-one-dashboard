export default function Roadmap() {
    return (
        <div className='text-white prose mx-auto px-4 py-10 bg-zinc-900/40 b-dashed border-amber-600'>
            <header className='text-center'>
                <h1 className='text-4xl font-bold text-white'>
                    Personal all-in-one panel!
                </h1>
                <small className='text-white italic mt-2'>
                    Because I hate load times (cloudflare ugh), and not owning
                    my own stuff
                </small>
                <blockquote className='mt-4   text-white'>
                    <p>
                        Just started this repo, will be migrating features
                        I&apos;ve built over so it&apos;s far from done. And
                        probably never will be.
                    </p>
                </blockquote>
            </header>

            <main>
                <section className='my-10'>
                    <h2 className='text-3xl text-white       font-bold'>
                        Description
                    </h2>
                    <p>
                        This is a personal project that combines various tools
                        and features I&apos;ve built over the years. It&apos;s a
                        one-stop solution for managing personal finance, secure
                        file storage, code snippets, and tools I&apos;ve built
                        for myself such as URL/text extractors, (reverse)
                        geolocation finder, SVG to CSS-pseudo elements, HTML to
                        JSX/TSX converter, and loads more probably.
                    </p>
                </section>

                <section className='my-10'>
                    <h2 className='text-3xl font-bold'>🚀 Demo</h2>
                    <p>
                        <a
                            href='https://panel.remcostoeten.com'
                            className='text-blue-500 hover:underline'
                        >
                            Visit the demo
                        </a>
                    </p>
                    <p>
                        <a
                            href='https://www.figma.com/community/file/1380305920742671237'
                            className='text-blue-500 hover:underline'
                        >
                            The design I&apos;m working with
                        </a>
                    </p>
                </section>

                <section className='my-10'>
                    <h2 className='text-3xl font-bold'>🧐 Features</h2>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>
                            <a
                                href='https://nextjs.org/'
                                className='text-blue-500 hover:underline'
                            >
                                NextJS 15
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.typescriptlang.org/'
                                className='text-blue-500 hover:underline'
                            >
                                TypeScript
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/drizzle-team/drizzle-orm'
                                className='text-blue-500 hover:underline'
                            >
                                Drizzle ORM
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://clerk.dev/'
                                className='text-blue-500 hover:underline'
                            >
                                Clerk
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://turso.tech/'
                                className='text-blue-500 hover:underline'
                            >
                                Turso (SQLite)
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.radix-ui.com/'
                                className='text-blue-500 hover:underline'
                            >
                                Radix
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://shadcn.dev/'
                                className='text-blue-500 hover:underline'
                            >
                                ShadCN-ui
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.framer.com/motion/'
                                className='text-blue-500 hover:underline'
                            >
                                Framer Motion
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://tailwindcss.com/'
                                className='text-blue-500 hover:underline'
                            >
                                TailwindCSS
                            </a>{' '}
                            + custom SCSS
                        </li>
                        <li>
                            <a
                                href='https://react-hook-form.com/'
                                className='text-blue-500 hover:underline'
                            >
                                React Hook Forms
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://zod.dev/'
                                className='text-blue-500 hover:underline'
                            >
                                ZOD
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://posthog.com/'
                                className='text-blue-500 hover:underline'
                            >
                                Posthog en
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.i18next.com/'
                                className='text-blue-500 hover:underline'
                            >
                                i18next
                            </a>
                        </li>
                    </ul>
                </section>

                <section className='my-10'>
                    <h2 className='text-3xl font-bold'>🐻 Packages</h2>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>
                            <a
                                href='https://usehooks.com/'
                                className='text-blue-500 hover:underline'
                            >
                                useHooksPackage
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://usehooks.com/useFavicon'
                                className='text-blue-500 hover:underline'
                            >
                                useFavicon
                            </a>{' '}
                            (dynamically update the favicon)
                        </li>
                        <li>
                            <a
                                href='https://usehooks.com/uselocalstorage'
                                className='text-blue-500 hover:underline'
                            >
                                useLocalStorage
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://usehooks.com/usegeolocation'
                                className='text-blue-500 hover:underline'
                            >
                                useGeoLocation
                            </a>{' '}
                            - Maybe when extending my own reverse geo app?
                        </li>
                        <li>
                            <a
                                href='https://zustand.surge.sh/'
                                className='text-blue-500 hover:underline'
                            >
                                Zustand
                            </a>{' '}
                            - State management
                        </li>
                        <li>
                            <a
                                href='https://react-query.tanstack.com/'
                                className='text-blue-500 hover:underline'
                            >
                                React Query
                            </a>{' '}
                            - Data fetching (trying/PoC vs server actions/api
                            calls)
                        </li>
                    </ul>
                </section>

                <section className='my-10'>
                    <h2 className='text-3xl font-bold'>
                        🐻 Big core overhauls that need to be done
                    </h2>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>
                            <a
                                href='https://reactjs.org/blog/2022/02/23/react-19.html#release-notes'
                                className='text-blue-500 hover:underline'
                            >
                                React 19 upgrade
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://nextjs.org/blog/next-15#release-notes'
                                className='text-blue-500 hover:underline'
                            >
                                NextJS -15 upgrade
                            </a>
                        </li>
                    </ul>
                </section>

                <section className='my-10'>
                    <h2 className='text-3xl font-bold'>
                        🐻 Tools that can be useful
                    </h2>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>
                            <a
                                href='https://promptperfect.jina.ai/interactive'
                                className='text-blue-500 hover:underline'
                            >
                                AI prompt optimizer
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://gpt-skeleton.vercel.app/generate'
                                className='text-blue-500 hover:underline'
                            >
                                HTML to skeleton loader for Tailwind
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/maybe-finance/maybe-archive/tree/main/libs/design-system/src/lib/LoadingPlaceholder'
                                className='text-blue-500 hover:underline'
                            >
                                Finance maybe app has a cool modular way of
                                creating skeletons
                            </a>
                        </li>
                    </ul>
                </section>

                <section className='my-10'>
                    <h2 className='text-3xl font-bold'>
                        🐻 Interesting and/or very cool/unique components
                    </h2>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>
                            <a
                                href='https://enhanced-button.vercel.app/'
                                className='text-blue-500 hover:underline'
                            >
                                Cool multi-select button
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://minimal-react-checkbox.vercel.app/'
                                className='text-blue-500 hover:underline'
                            >
                                Minimal react checkbox
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://zen.studio/'
                                className='text-blue-500 hover:underline'
                            >
                                Zen Mode button
                            </a>
                        </li>
                    </ul>
                </section>

                <section className='my-10'>
                    <h2 className='text-3xl font-bold'>🐻 Useful utils</h2>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>
                            <a
                                href='https://thisanimedoesnotexist.ai/'
                                className='text-blue-500 hover:underline'
                            >
                                Random anime character generator
                            </a>{' '}
                            (uses AI)
                        </li>
                        <li>
                            <a
                                href='https://coolors.co/generate'
                                className='text-blue-500 hover:underline'
                            >
                                Coolors.co color palette generator
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
