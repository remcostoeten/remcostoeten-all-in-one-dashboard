import { cn } from '@/core/utils/cn'
import Marquee from '../effects/magicui/marquee'

const techStack = [
    {
        name: 'NextJS 15',
        category: 'Frontend',
        description: 'React framework for production',
        img: 'https://avatar.vercel.sh/nextjs'
    },
    {
        name: 'Drizzle ORM',
        category: 'ORM',
        description: 'TypeScript ORM for SQL databases',
        img: 'https://avatar.vercel.sh/drizzle'
    },
    {
        name: 'Clerk',
        category: 'Auth',
        description: 'Authentication and user management',
        img: 'https://avatar.vercel.sh/clerk'
    },
    {
        name: 'Turso',
        category: 'Database',
        description: 'SQL database for edge computing',
        img: 'https://avatar.vercel.sh/turso'
    },
    {
        name: 'Zustand',
        category: 'State management',
        description: 'Small, fast and scalable state-management',
        img: 'https://avatar.vercel.sh/zustand'
    },
    {
        name: 'Radix UI',
        category: 'UI Libraries',
        description: 'Unstyled, accessible UI components',
        img: 'https://avatar.vercel.sh/radix'
    },
    {
        name: 'React Hook Form',
        category: 'Forms',
        description: 'Performant, flexible and extensible forms',
        img: 'https://avatar.vercel.sh/react-hook-form'
    },
    {
        name: 'ZOD',
        category: 'Validation',
        description: 'TypeScript-first schema validation',
        img: 'https://avatar.vercel.sh/zod'
    },
    {
        name: 'Posthog',
        category: 'Analytics',
        description: 'Open-source product analytics',
        img: 'https://avatar.vercel.sh/posthog'
    },
    {
        name: 'i18next',
        category: 'i18n',
        description: 'Internationalization framework',
        img: 'https://avatar.vercel.sh/i18next'
    },
    {
        name: 'Contentlayer',
        category: 'Blog/MDX',
        description: 'Content SDK for developers',
        img: 'https://avatar.vercel.sh/contentlayer'
    },
    {
        name: 'Tailwind CSS',
        category: 'Styling',
        description: 'Utility-first CSS framework',
        img: 'https://avatar.vercel.sh/tailwindcss'
    }
]

const firstRow = techStack.slice(0, techStack.length / 2)
const secondRow = techStack.slice(techStack.length / 2)

const TechCard = ({
    img,
    name,
    category,
    description
}: {
    img: string
    name: string
    category: string
    description: string
}) => {
    return (
        <figure
            className={cn(
                'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
                // light styles
                'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
                // dark styles
                'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
            )}
        >
            <div className='flex flex-row items-center gap-2'>
                <img
                    className='rounded-full'
                    width='32'
                    height='32'
                    alt=''
                    src={img}
                />
                <div className='flex flex-col'>
                    <figcaption className='text-sm font-medium dark:text-white'>
                        {name}
                    </figcaption>
                    <p className='text-xs font-medium dark:text-white/40'>
                        {category}
                    </p>
                </div>
            </div>
            <blockquote className='mt-2 text-sm'>{description}</blockquote>
        </figure>
    )
}

export function MarqueeHorizontal() {
    return (
        <div className='relative flex h-[500px] rotate w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-body md:shadow-xl'>
            <Marquee pauseOnHover className='[--duration:30s] translate-y-8'>
                {firstRow.map((tech) => (
                    <TechCard key={tech.name} {...tech} />
                ))}
            </Marquee>
            <Marquee pauseOnHover className='[--duration:40s]'>
                {secondRow.map((tech) => (
                    <TechCard key={tech.name} {...tech} />
                ))}
            </Marquee>
            <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black'></div>
            <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black'></div>
        </div>
    )
}
