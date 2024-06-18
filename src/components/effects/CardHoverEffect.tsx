'use client'

import { HoverEffect } from '../ui/card-hover-effect'

export default function CardHover() {
    return (
        <div className='max-w-5xl mx-auto px-8'>
            <HoverEffect items={projects} />
        </div>
    )
}

export const projects = [
    {
        id: 1,
        title: 'Nextjs 14',
        description:
            'A framework for React that enables server-side rendering and effortless deployment.',
        link: 'https://nextjs.org',
        image: '/home/nextjs-dark.png'
    },
    {
        id: 2,
        title: 'TypeScript',
        description:
            'A typed superset of JavaScript that enhances code maintainability and scalability.',
        link: 'https://typescriptlang.org',
        image: '/home/typescript.svg'
    },
    {
        id: 3,
        title: 'Tailwind CSS',
        description:
            'A utility-first CSS framework for building custom designs with ease.',
        link: 'https://tailwindcss.com',
        image: '/home/tailwind.svg'
    },
    {
        id: 4,
        title: 'Drizzle ORM',
        description:
            'Modern database toolkit for TypeScript and Node.js, simplifying database interactions.',
        link: 'https://drizzleorm.com',
        image: '/home/drizzle.svg'
    },
    {
        id: 5,
        title: 'Clerk Authentication',
        description:
            'Seamless and secure authentication service for web applications.',
        link: 'https://clerk.dev',
        image: '/home/clerk.png'
    },
    {
        id: 6,
        title: 'Turso (Sqlite)',
        description: 'Turso is a simple and fast SQLite cloud solution.',
        link: 'https://turso.com',
        image: '/home/turso.svg'
    }
]
