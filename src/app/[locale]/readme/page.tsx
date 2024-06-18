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
                        Just started this repo, will be migrating features I've
                        built over so it's far from done. And probably never
                        will be.
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
                        and features I've built over the years. It's a one-stop
                        solution for managing personal finance, secure file
                        storage, code snippets, and tools I've built for myself
                        such as URL/text extractors, (reverse) geolocation
                        finder, SVG to CSS-pseudo elements, HTML to JSX/TSX
                        converter, and loads more probably.
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
                            The design I'm working with
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
                                Posthog en{' '}
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
                                Enhanced shadn button
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://file-vault-delta.vercel.app/'
                                className='text-blue-500 hover:underline'
                            >
                                File vault - shadcn
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://uploader.sadmn.com/'
                                className='text-blue-500 hover:underline'
                            >
                                File vault v2 - shadnc
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://magicui.design/'
                                className='text-blue-500 hover:underline'
                            >
                                Magic UI
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/udecode/plate'
                                className='text-blue-500 hover:underline'
                            >
                                Shad Rich text editor AWESOME
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://shadcn-chat.vercel.app/'
                                className='text-blue-500 hover:underline'
                            >
                                Shadcn chat
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/Jayprecode/country-state-dropdown'
                                className='text-blue-500 hover:underline'
                            >
                                Shadcn country dropdown + zustand state
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui'
                                className='text-blue-500 hover:underline'
                            >
                                Shadcn DND
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://shadcn-extension.vercel.app/docs/file-upload'
                                className='text-blue-500 hover:underline'
                            >
                                Shadcn extensioned
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.hover.dev/'
                                className='text-blue-500 hover:underline'
                            >
                                TomIsLoading
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://blog.olivierlarose.com/tutorials'
                                className='text-blue-500 hover:underline'
                            >
                                Way to fancy GSAP/Framer stuff
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://components.bridger.to/hero'
                                className='text-blue-500 hover:underline'
                            >
                                ?? components
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/remcostoeten/fancy-component-showcase'
                                className='text-blue-500 hover:underline'
                            >
                                own components showcase
                            </a>
                        </li>
                    </ul>
                </section>
                <section className='my-10'>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>
                            [ ] Localization
                            <ul className='list-disc pl-5 space-y-2'>
                                <li>
                                    [ ]{' '}
                                    <a
                                        href='https://flagpack.xyz/'
                                        className='text-blue-500 hover:underline'
                                    >
                                        Add pretty flags
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            [ ]{' '}
                            <a
                                href='https://features.remcostoeten.com/geolocation'
                                className='text-blue-500 hover:underline'
                            >
                                Migrate geolocation
                            </a>{' '}
                            and re-create UI
                        </li>
                        <li>[ ] Create landing page</li>
                        <li>
                            [ ]{' '}
                            <a
                                href='https://url.remcostoeten.com/'
                                className='text-blue-500 hover:underline'
                            >
                                Migrate URL tool
                            </a>{' '}
                            -{' '}
                            <a
                                href='https://vsc.remcostoeten.com/'
                                className='text-blue-500 hover:underline'
                            >
                                finished version, ugly UI
                            </a>
                        </li>
                        <li>
                            [ ]{' '}
                            <a
                                href='https://portfolio.remcostoeten.com/html-to-jsx'
                                className='text-blue-500 hover:underline'
                            >
                                Migrate HTML to React tool and cleanup UI
                            </a>
                        </li>
                        <li>
                            [ ]{' '}
                            <a
                                href='https://portfolio.remcostoeten.com/blackjack'
                                className='text-blue-500 hover:underline'
                            >
                                Migrate and cleanup perfect blackjack strategy
                                tool
                            </a>
                        </li>
                        <li>
                            [ ] Migrate SVG to CSS pseudo element and create UI
                        </li>
                        <li>
                            [ ] Add file vault feature
                            <ul className='list-disc pl-5 space-y-2'>
                                <li>[ ] Integrate uploadthing</li>
                                <li>[ ] Allow uploading</li>
                                <li>[ ] Allow downloading</li>
                                <li>[ ] Allow deleting</li>
                                <li>[ ] Allow sharing</li>
                            </ul>
                        </li>
                        <li>
                            [ ] Add viewport tag{' '}
                            <a
                                href='https://www.youtube.com/shorts/YqAxXBrrryc'
                                className='text-blue-500 hover:underline'
                            >
                                [source]
                            </a>
                        </li>
                        <li>
                            [ ] Implement logic for tab title change when
                            switching{' '}
                            <a
                                href='https://www.phind.com/search?cache=bop1542bh6cu90jan1hi6y4c'
                                className='text-blue-500 hover:underline'
                            >
                                [source]
                            </a>
                        </li>
                        <li>
                            [ ] Dark light mode toggle{' '}
                            <a
                                href='https://codepen.io/jh3y/pen/GRaWZrw'
                                className='text-blue-500 hover:underline'
                            >
                                [source]
                            </a>
                        </li>
                    </ul>
                </section>

                <section className='my-10'>
                    <h2 className='text-3xl font-bold'>📋 Repos Used</h2>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>
                            <a
                                href='https://github.com/remcostoeten/turso-nextjs-starter'
                                className='text-blue-500 hover:underline'
                            >
                                turso-nextjs-starter
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/remcostoeten/nextjs-drizzle-crud-w-images-tfw-no-relation-ship-sad-pepe'
                                className='text-blue-500 hover:underline'
                            >
                                nextjs-drizzle-crud-w-images
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/remcostoeten/t3gallery'
                                className='text-blue-500 hover:underline'
                            >
                                t3gallery
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/remcostoeten/personal-platform'
                                className='text-blue-500 hover:underline'
                            >
                                personal-platform
                            </a>
                        </li>
                        <li>
                            Local project with recent features that I must
                            migrate sit over at{' '}
                            <code>
                                /home/remcostoeten/projects/dashboard_w_chat-history-api_working-status-tracker
                            </code>
                        </li>
                        <li>and more over the previous years...</li>
                    </ul>
                </section>

                <section className='my-10'>
                    <h2 className='text-3xl font-bold'>💖 Like my work?</h2>
                    <p>
                        I appreciate a star aka e-karma. If you have any
                        questions you can reach through:
                        <a
                            href='https://linkedin.com/in/remco-stoeten/'
                            className='text-blue-500 hover:underline'
                        >
                            LinkedIn
                        </a>
                        , email:{' '}
                        <a
                            href='mailto:remcostoeten@hotmail.com'
                            className='text-blue-500 hover:underline'
                        >
                            remcostoeten@hotmail.com
                        </a>
                        or visit my personal site over at{' '}
                        <a
                            href='https://remcostoeten.com'
                            className='text-blue-500 hover:underline'
                        >
                            remcostoeten.com
                        </a>
                        .
                    </p>
                </section>
            </main>
        </div>
    )
}
