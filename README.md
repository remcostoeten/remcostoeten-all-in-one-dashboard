# Personal all-in-one panel!

<small>Because I hate load times (cloudflare ugh), and not owning my own stuff</small>

> [!NOTE]

> Just started this repo, will be migrating features I've built over so it's far from done. And probably never will be.

This is a personal project that combines various tools and features I've built over the years. It's a one-stop solution for managing personal finance, secure file storage, code snippets, and tools I've built for myself such as URL/text extractors, (reverse) geolocation finder, SVG to CSS-pseudo elements, HTML to JSX/TSX converter, and loads more probably.

## 🚀 Demo

[Visit the demo](https://panel.remcostoeten.com)

[The design im working with](https://www.figma.com/community/file/1380305920742671237)
<br/>

## 🧐 Features

-   **Frontend**: [NextJS 15](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **ORM**: [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)
-   **Auth**: [Clerk](https://clerk.dev/)
-   **Database**: [Turso (SQLite)](https://turso.tech/)
-   **State management**: [Zustand](https://zustand.surge.sh/)
-   **UI Libraries**: [Radix](https://www.radix-ui.com/), [ShadCN-ui](https://shadcn.dev/), [Framer Motion](https://www.framer.com/motion/), [TailwindCSS](https://tailwindcss.com/) + custom SCSS
-   **Forms**: [React Hook Forms](https://react-hook-form.com/)
-   **Validation**: [ZOD](https://zod.dev/)
-   **Analytics**: [Posthog](https://posthog.com/)
-   **i18n**: [i18next](https://www.i18next.com/)
    <br/>

## 🐻 Packages

-   [useHooksPackage](https://usehooks.com/)
    -   [useFavicon](https://usehooks.com/useFavicon) (dynamically update the favicon)
        could be paired with the logic of changing tab-title when switching tabs -> [Phind Search](https://www.phind.com/search?cache=bop1542bh6cu90jan1hi6y4c)
    -   [useLocalStorage](https://usehooks.com/uselocalstorage)
    -   [useGeoLocation](https://usehooks.com/usegeolocation) - Maybe when extending my own reverse geo app?
    -[Zustand](https://zustand.surge.sh/) - State management<br/>
-   [React Query ?](https://react-query.tanstack.com/) - Data fetching (trying/PoC vs server actions/api calls)
    <br/>

## 🐻 Big core overhauls that need to be done

-   React 19 upgrade
    -   [React 19 release notes](https://reactjs.org/blog/2022/02/23/react-19.html#release-notes)
-   NextJS -15 upgrade]
    -   [NextJS -15 release notes](https://nextjs.org/blog/next-15#release-notes)

## 🐻 Tools that can be useful

-   AI prompt optimizer(https://promptperfect.jina.ai/interactive)]
-   [HTML to skeleton loader for Tailwind](https://gpt-skeleton.vercel.app/generate)
    -   [Finance maybe app has a cool modular way of creating skeletons](https://github.com/maybe-finance/maybe-archive/tree/main/libs/design-system/src/lib/LoadingPlaceholder)[usage]()
    [Another skeleton helper](https://mkfizi.dev/tailbone/)

## 🐻 Interesting and/or very cool/unique components

-   [Enhanced shadn button](https://enhanced-button.vercel.app/)
-   [File vault - shadcn](https://file-vault-delta.vercel.app/)
-   [File vault v2 - shadnc](https://uploader.sadmn.com/)
-   [Magic UI](https://magicui.design/)
-   [Shad Rich text editor AWESOME](https://github.com/udecode/plate)
-   [Shadcn chat](https://shadcn-chat.vercel.app/)
-   [Shadcn country dropdown + zustand state](https://github.com/Jayprecode/country-state-dropdown)
-   [Shadcn DND](https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui)
-   [Shadcn extensioned](https://shadcn-extension.vercel.app/docs/file-upload)
-   [TomIsLoading](https://www.hover.dev/)
-   [Way to fancy GSAP/Framer stuff](https://blog.olivierlarose.com/tutorials)
-   [?? components](https://components.bridger.to/hero)
-   [own components showcase](https://github.com/remcostoeten/fancy-component-showcase)
-   [syntaxUI](https://syntaxui.com/)

<br/>

## 🐻 Design inspiration

-   [SaaS landing with dope bento glass style](https://www.hover.dev/templates/demo/the-startup)
-   [Vercel blog page with cool gradient](https://vercel.com/blog/deploy-summary)
-   [Supabase dashboard - loaders, collapse menu](https://supabase.com/dashboard/projects)
-   [Fancy ?all-in-one? dashboard](https://web.clay.earth/)

### Too fancy ui stuff

-   Spark effect ([source](https://codepen.io/hexagoncircle/details/bGZdWyw))
-   Dark glow button ([source](https://codepen.io/collinsworth/pen/zYepgqG))
-   Glow card ([source](https://codepen.io/jh3y/pen/MWxgJXY)
-   Menu animation ([source](https://codepen.io/jh3y/pen/GRapZqO))
-   Card anchor effect ([source](https://codepen.io/jh3y/pen/MWLyGxo))
    </br>

## 🛣️ Roadmap and To-Do

### Short-Term Goals

-   [x] Initial setup
-   [x] Add user authentication
-   [ ] Implement dark mode
-   [ ] Add more features

### Long-Term Goals

-   [x] Localization
    -   [ ] [Add pretty flags](https://flagpack.xyz/)
-   [ ] [Migrate geolocation](https://features.remcostoeten.com/geolocation) and re-create UI
-   [ ] Create landing page
-   [ ] [Migrate URL tool](https://url.remcostoeten.com/) - [finished version, ugly UI](https://vsc.remcostoeten.com/)
-   [ ] [Migrate HTML to React tool and cleanup UI](https://portfolio.remcostoeten.com/html-to-jsx)
-   [ ] [Migrate and cleanup perfect blackjack strategy tool](https://portfolio.remcostoeten.com/blackjack)
-   [ ] [Migrate SVG to CSS pseudo element and create UI]()
-   [ ] Add file vault feature
    -   [ ] Integrate uploadthing
    -   [ ] Allow uploading
    -   [ ] Allow downloading
    -   [ ] Allow deleting
    -   [ ] Allow sharing

### Unique Implementations

-   [ ] Add viewport tag ([source](https://www.youtube.com/shorts/YqAxXBrrryc))
-   [ ] Implement logic for tab title change when switching ([source](https://www.phind.com/search?cache=bop1542bh6cu90jan1hi6y4c))
-   [ ] Dark light mode toggle ([source](https://codepen.io/jh3y/pen/GRaWZrw))

<h2> 📋 Repos Used</h2>

-   [Turso next crud operations (no orm) - ez drizzle installation](https://github.com/remcostoeten/turso-nextjs-starter)
-   [nextjs-drizzle-crud-w-images](https://github.com/remcostoeten/nextjs-drizzle-crud-w-images-tfw-no-relation-ship-sad-pepe)
-   [t3gallery](https://github.com/remcostoeten/t3gallery)
-   [personal-platform](https://github.com/remcostoeten/personal-platform)
-   Local project with recent features that i must migrate sit over at [/home/remcostoeten/projects/dashboard_w_chat-history-api_working-status-tracker]
-   and more over the previous years..
    <br/>

<h2>💖Like my work?</h2>

I appreciate a star aka e-karma. If you have any questions you can reach through:
[LinkedIn](https://linkedin.com/in/remco-stoeten/), email: <a href="mailto:remcostoeten@hotmail.com">remcostoeten@hotmail.com</a>
or visit my personal site over at [remcostoeten.com](https://remcostoeten.com).
