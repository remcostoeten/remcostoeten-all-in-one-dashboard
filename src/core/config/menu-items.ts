import svgToComponent from '../libs/svgToComponent'

export const headerDropdownItems: {
    title: string
    href: string
    description: string
}[] = [
        {
            title: 'Readme',
            href: '/readme',
            description: 'The repository read-me which also contains the roadmap.'
        },
        {
            title: 'Guestbook ',
            href: '/guestbook',
            description: 'Just a page to test crud operations.'
        },
        {
            title: 'WhatsApp Exports',
            href: '/dashboard/chat',
            description:
                'Exported chats from WhatsApp fetched from own API, because why not.'
        }
    ]

export const DashboardAsideItems = [
    {
        name: 'chat',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`
        ),
        hasNotification: false,
        isFavourite: true
    },
    {
        name: 'gasstations',
        svg: svgToComponent(`

<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 22V5C3.5 3 4.84 2 6.5 2H14.5C16.16 2 17.5 3 17.5 5V22H3.5Z" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 22H19" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.39 9.99998H12.62C13.66 9.99998 14.51 9.49999 14.51 8.10999V6.87999C14.51 5.48999 13.66 4.98999 12.62 4.98999H8.39C7.35 4.98999 6.5 5.48999 6.5 6.87999V8.10999C6.5 9.49999 7.35 9.99998 8.39 9.99998Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 13H9.5" stroke="#f7f7f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 16.01L22 16V10L20 9" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `),
        isFavourite: true
    },
    {
        name: 'color-tool',
        isFavourite: true,
        svg: svgToComponent(
            ` <svg
            version="1.1"
            id="Layer_1"
            width='24'

            height='24'

            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"

            fill='#7f7f7f'
            viewBox="0 0 108.2 122.88"
            style="enable-background:new 0 0 108.2 122.88"
            xml:space="preserve"
        >
            <style type="text/css">
                .st0{fill-rule:evenodd;clip-rule:evenodd;}
            </style>
            <g>
                <path
                    class="st0"
                    d="M93.01,73.51c3.8,16.46,15.19,24.68,15.19,32.91c0,8.23-3.8,16.46-15.19,16.46
                    c-11.39,0-15.19-8.23-15.19-16.46C77.82,98.19,89.22,89.97,93.01,73.51L93.01,73.51z
                    M11.63,5.91l5.32-5.32c0.8-0.8,2.1-0.8,2.9,0l16.19,16.19l8.33-8.33c2.25-2.25,5.94-2.25,8.19,0
                    l42.68,42.68c2.25,2.25,2.25,5.94,0,8.19l-42.68,42.68c-2.25,2.25-5.94,2.25-8.19,0L1.69,59.33
                    c-2.25-2.25-2.25-5.94,0-8.19l26.13-26.14L11.63,8.81C10.83,8.02,10.83,6.71,11.63,5.91L11.63,5.91z
                    M51.38,22.02l30.31,30.31c0.89,0.89,1.28,2.09,1.19,3.26H14.06c-0.1-1.17,0.3-2.37,1.18-3.26l30.31-30.31
                    C47.16,20.42,49.78,20.42,51.38,22.02L51.38,22.02z"
                />
            </g>
        </svg>`
        )
    },
    {
        name: 'planner',
        isFavourite: true,
        svg: svgToComponent(
            `<svg
            xmlns="http://www.w3.org/2000/svg"
className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            >
            <path
              stroke="#f7f7f7"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875"
            ></path>
            <path
              fill="#1C274C"
              d="M18 17a1 1 0 11-2 0 1 1 0 012 0zM18 13a1 1 0 11-2 0 1 1 0 012 0zM13 17a1 1 0 11-2 0 1 1 0 012 0zM13 13a1 1 0 11-2 0 1 1 0 012 0zM8 17a1 1 0 11-2 0 1 1 0 012 0zM8 13a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
            </svg>`
        )
    },
    {
        name: 'bell',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c.538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`
        ),
        hasNotification: false,
        isFavourite: false
    },
    {
        name: 'building',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
        ),
        hasNotification: false
    },
    {
        name: 'profile',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`
        ),

        href: 'dashboard/user-profile',

        hasNotification: true
    },

    {
        hasNotification: false,
        name: 'users',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
        ),
        href: '/dashboard/user-profile'
    },
    {
        name: 'document',
        hasNotification: false,
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M9 12h6m-6 4h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`
        )
    },
    {
        hasNotification: false,
        name: 'sun',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
        )
    },
    {
        hasNotification: false,
        name: 'database',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`
        )
    }
]
1
