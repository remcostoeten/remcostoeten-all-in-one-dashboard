# Personal all-in-one panel

<small>Because I hate load times (cloudflare ugh), and not owning my own stuff</small>

> [!NOTE]

> Just started this repo, will be migrating features I've built over so it's far from done. And probably never will be.

This is a personal project that combines various tools and features I've built over the years. It's a one-stop solution for managing personal finance, secure file storage, code snippets, and tools I've built for myself such as URL/text extractors, (reverse) geolocation finder, SVG to CSS-pseudo elements, HTML to JSX/TSX converter, and loads more probably.

## 🚀 Demo

[Visit the demo](https://panel.remcostoeten.com)

[The design im working with](https://www.figma.com/community/file/1380305920742671237)
<br/>

## 🧐 Features

- **Frontend**: [NextJS 15](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)
- **Auth**: [Clerk](https://clerk.dev/)
- **Database**: [Turso (SQLite)](https://turso.tech/)
- **State management**: [Zustand](https://zustand.surge.sh/)
- **UI Libraries**: [Radix](https://www.radix-ui.com/), [ShadCN-ui](https://shadcn.dev/), [Framer Motion](https://www.framer.com/motion/), [TailwindCSS](https://tailwindcss.com/) + custom SCSS
- **Forms**: [React Hook Forms](https://react-hook-form.com/)
- **Validation**: [ZOD](https://zod.dev/)
- **Analytics**: [Posthog](https://posthog.com/)
    <br/>
- **i18n**: [i18next](https://www.i18next.com/)
- Blog/MDX: [contentlayer](https://contentlayer.dev/)

## 🐻 Packages

- [useHooksPackage](https://usehooks.com/)
  - [useFavicon](https://usehooks.com/useFavicon) (dynamically update the favicon)
        could be paired with the logic of changing tab-title when switching tabs -> [Phind Search](https://www.phind.com/search?cache=bop1542bh6cu90jan1hi6y4c)
  - [useLocalStorage](https://usehooks.com/uselocalstorage)
  - [useGeoLocation](https://usehooks.com/usegeolocation) - Maybe when extending my own reverse geo app? -[Zustand](https://zustand.surge.sh/) - State management<br/>
- [React Query ?](https://react-query.tanstack.com/) - Data fetching (trying/PoC vs server actions/api calls)
    <br/>

## 🐻 Big core overhauls that need to be done
> > [!NOTE]
> On hold. After a few days I couldn't build with zero answers on google, deep down the dep. tree.
- React 19 upgrade
  - [React 19 release notes](https://reactjs.org/blog/2022/02/23/react-19.html#release-notes)
- NextJS -15 upgrade]
  - [NextJS -15 release notes](https://nextjs.org/blog/next-15#release-notes)

## 🐻 Tools that can be useful

- AI prompt optimizer(<https://promptperfect.jina.ai/interactive>)]
- [HTML to skeleton loader for Tailwind](https://gpt-skeleton.vercel.app/generate)
  - [Finance maybe app has a cool modular way of creating skeletons](https://github.com/maybe-finance/maybe-archive/tree/main/libs/design-system/src/lib/LoadingPlaceholder)[usage]()
        [Another skeleton helper](https://mkfizi.dev/tailbone/)

## 🐻 Interesting and/or very cool/unique components
- [Cool Tailwind only script!](https://codepen.io/cbolson/pen/LYommYY)
- [Enhanced shadn button](https://enhanced-button.vercel.app/)
- [File vault - shadcn](https://file-vault-delta.vercel.app/)
- [File vault v2 - shadnc](https://uploader.sadmn.com/)
- [Magic UI](https://magicui.design/)
- [Shad Rich text editor AWESOME](https://github.com/udecode/plate)
- [Shadcn chat](https://shadcn-chat.vercel.app/)
- [Shadcn country dropdown + zustand state](https://github.com/Jayprecode/country-state-dropdown)
- [Shadcn DND](https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui)
- [Shadcn extensioned](https://shadcn-extension.vercel.app/docs/file-upload)
- [TomIsLoading](https://www.hover.dev/)
- [Way to fancy GSAP/Framer stuff](https://blog.olivierlarose.com/tutorials)
- [?? components](https://components.bridger.to/hero)
- [own components showcase](https://github.com/remcostoeten/fancy-component-showcase)
- [syntaxUI](https://syntaxui.com/)

<br/>

## 🐻 Design inspiration

- [Nice chat (ai) design/wysiwyg](https://chat-preview.lobehub.com/)
- [SaaS landing with dope bento glass style](https://www.hover.dev/templates/demo/the-startup)
- [Vercel blog page with cool gradient](https://vercel.com/blog/deploy-summary)
- [Supabase dashboard - loaders, collapse menu](https://supabase.com/dashboard/projects)
- [Fancy ?all-in-one? dashboard](https://web.clay.earth/)

### Too fancy ui stuff

- Spark effect ([source](https://codepen.io/hexagoncircle/details/bGZdWyw))
- Dark glow button ([source](https://codepen.io/collinsworth/pen/zYepgqG))
- Glow card ([source](https://codepen.io/jh3y/pen/MWxgJXY)
- Menu animation ([source](https://codepen.io/jh3y/pen/GRapZqO))
- Card anchor effect ([source](https://codepen.io/jh3y/pen/MWLyGxo))
    </br>

## 🛣️ Roadmap and To-Do

### Short-Term Goals

- [x] Initial setup
- [x] Add user authentication
- [x] Upgrade to the new react compiler (Next 15 + React 19)
- [x] Implement dark mode  - Done, but light mode is far from usable.


### x-term goals. Stuff that I just want to do, but only so much time in a day.

🚨 = highest priority
⚡ = medium priority
🛣️ = low priority (will probably never happen)

- [✔] Localization (always in progress)
- [✔] [Add pretty flags](https://flagpack.xyz/) <- did not use this package, will maybe later
- [🛣️] [Migrate geolocation](https://features.remcostoeten.com/geolocation) and re-create UI
- [60%🛣️] Create landing page
- [] Add blog feature which is actually good and not half assed. Also for release notes/changelog. Only know contentlayer. Maybe build a custom blog engine with my own CMS.
if (contentlayer + markdown)
    - [ ] Retrieve date from when MDX file was created/last edited.
    - [ ] basic structure. Date, title, author, content, tags, view count, likes/dislike.
    - [ ] Allow visitors (rate limit instantly to prevent multiple likes, or try to) to like/dislike posts
    - [ ] implement view counter. Per ip or so, not session. Think of a accurate way.
    - [ ] share blog posts on social media
    - [ ] Syntax highlighting
    - [ ] Add animated sidebar scroll for progress.
    - [ ] Add reading duration to blog posts.
    - [ ] categories via tags?
    - [ ] Find out how to make the global site search index the bog titles, tags, and content
    - [ ] Allow users to comment and think of a way to implement a comment system for non-logged in users w/o spam.
    - [ ] Make sure its semantics are correct.
    - [ ] Make sure it's accessible.
    - [ ] Make sure SEO we used all the bells and whistles we can find.
    - [ ] /blog landing page with categories.
    - [ ] /blog/categories with landing for the categories/tags
    - [ ] /blog/categories/params for the actual blog.
    ....
    - [ ] I'd rather have my blogs in my database, so first research how much harder that is than a file based system.
    - [ ] 
- [🛣️] [Migrate URL tool](https://url.remcostoeten.com/) - [finished version, ugly UI](https://vsc.remcostoeten.com/)
- [⚡] [Migrate HTML to React tool and cleanup UI](https://portfolio.remcostoeten.com/html-to-jsx) - A lot of work. And things to fix
- [🛣️] [Migrate and cleanup perfect blackjack strategy tool](https://portfolio.remcostoeten.com/blackjack)
- [🛣️] [Migrate SVG to CSS pseudo element and create UI]()
- [⚡] [Migrate my password manager](https://password-manager.remcostoeten.com).
- [🚨] Add file vault feature
  - [ ] Allow uploading
  - [ ] Integrate uploadthing
    - [ ] images first
      - [ ] allow max size (5mb?)
    - [ ] videos second (max size?)
        - mp4, webm, avi, mov?
  - [ ] Allow multiple uploads at once
  - [ ] Visual feedback when uploading, either percentage or progress bar (PER FILE)
 - [🛣️ ] pdfs/docs third
  - [ ] add doc support. [Sick library](https://showcase.apryse.com/pdf-viewer-mobile) for pdf/doc support

  - [ ] crud operations (delet, edit, create, and view metadata)
  - [ ] Allow sharing
- [🚨] In addition to the file vault. I want a separate PRIVATE(!!) image/video gallery with PiP like Firefox has. Maybe also standardized sections like powertoys window manager. Must have 100% privacy. Auth middleware and I also want custom password allowance for each section.
  - [ ] allow view like regular lightbox
  - [ ] allow view multiple borderless like PiP in Firefox
  - [ ] Show all (meta) data of image/video. Like [Pleio](https://wilfred.pleio.nl.nl/)
  - [ ] Think of rate limiting, file max. Make sure I can't be screwed by a malicious user.
- [🚨] Notes app, diary, ideas via rich text editor. I suppose Tiptap, but Sick library from above also seems cool.
- [⚡] A proper kanban / todo board instead of this readme. Ideally integrated with github issues through (graphql?), we'll see.
- [🛣️] Maybe something nice with release notes/changelog generated from github releases
- [🛣️] A proper calendar app which maybe can be integrated with google calendar, but also in relation with my kanban board, and notes app. (Dream big honey)
- [⚡🛣️] Migrate my whatsapp tracker API from chromedriver to puppeteer.
  - [ ] See API schema design;
    [https://app.eraser.io/workspace/9fMMWL4pZTG9as7cNDtB?origin=share](https://app.eraser.io/workspace/9fMMWL4pZTG9as7cNDtB?origin=share)
  - [ ] Think of a solution to save data to database instead of local json.
- [🚨] Display my whatsapp chat history. UI is done, A lot of parts of the logic is done, need to bring it together. <small>Personal use only since whatsapp export = txt. I converted txt via python script to json in certain object format. host as private api, and use it in my app/<small>
  - [🛣️] Think of a solution to save data to database instead of local json (1mil +objects PER some chats).
  - [ ] Allow star / favourite messages.
  - [50%] Proper search with go to and surrounding messages instead of filter
  - [ ] Maybe ever build a system where people can upload their .txt in an encrypted/client side format, auto convert to json and make it available for others. <small>But it's a dashboard for personal use, so probably not.</small>
- [ ] migrate my whatsapp tracker API from chromedriver to puppeteer. See API schema design;
  [https://app.eraser.io/workspace/9fMMWL4pZTG9as7cNDtB?origin=share](https://app.eraser.io/workspace/9fMMWL4pZTG9as7cNDtB?origin=share)

### Unique Implementations
- [⚡] A emoji feedback counter sticky thingy. [Design 1 w feedback input](https://codepen.io/kirkov/details/RwwvxjO)P
- [ ] Add viewport tag ([source](https://www.youtube.com/shorts/YqAxXBrrryc))
- [ ] Implement logic for tab title change when switching ([source](https://www.phind.com/search?cache=bop1542bh6cu90jan1hi6y4c))
- [ ] Dark light mode toggle ([source](https://codepen.io/jh3y/pen/GRaWZrw))

<h2> 📋 Repos Used</h2>

- [Turso next crud operations (no orm) - ez drizzle installation](https://github.com/remcostoeten/turso-nextjs-starter)
- [nextjs-drizzle-crud-w-images](https://github.com/remcostoeten/nextjs-drizzle-crud-w-images-tfw-no-relation-ship-sad-pepe)
- [t3gallery](https://github.com/remcostoeten/t3gallery)
- [personal-platform](https://github.com/remcostoeten/personal-platform)
- Local project with recent features that i must migrate sit over at [/home/remcostoeten/projects/dashboard_w_chat-history-api_working-status-tracker]
- and more over the previous years..
    <br/>

<h2>💖Like my work?</h2>

I appreciate a star aka e-karma. If you have any questions you can reach through:
[LinkedIn](https://linkedin.com/in/remco-stoeten/), email: <a href="mailto:remcostoeten@hotmail.com">remcostoeten@hotmail.com</a>
or visit my personal site over at [remcostoeten.com](https://remcostoeten.com).
