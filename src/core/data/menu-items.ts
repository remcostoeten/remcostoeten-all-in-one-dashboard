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
            href: '/',
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
        anchor: 'dashboard/chats',
        isFavourite: false
    },
    {
        name: 'bell',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c.538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`
        ),
        hasNotification: true,
        isFavourite: true
    },
    {
        name: 'building',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
        ),
        hasNotification: false
    },
    {
        name: 'user',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`
        ),
        hasNotification: false
    },

    {
        hasNotification: false,
        name: 'users',
        svg: svgToComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f7f7f7"><path stroke="#f7f7f7" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
        )
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
