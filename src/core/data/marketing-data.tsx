import { CodeBracketIcon } from '@heroicons/react/24/outline'
import { WalletIcon, LockOpenIcon } from 'lucide-react'
import { FiPenTool } from 'react-icons/fi'

export const techStack = [
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

const FeatureStatus = {
    WIP: 'WiP',
    NOT_IMPLEMENTED: 'Not started',
    STARTED: 'Started',
    LOW_PRIORITY: 'Low priority',
    BETA: 'Beta'
} as const

export const features = [
    {
        icon: WalletIcon,
        title: 'Personal Finance',
        status: FeatureStatus.NOT_IMPLEMENTED,
        content: (
            <ul className='space-y-2 text-muted-foreground dark:text-muted-foreground-dark'>
                <li>Budgeting</li>
                <li>Expense Tracking</li>
                <li>Income Management</li>
            </ul>
        )
    },
    {
        icon: LockOpenIcon,
        title: 'Secure File Storage',
        status: FeatureStatus.WIP,
        content: (
            <ul className='space-y-2 text-muted-foreground dark:text-muted-foreground-dark'>
                <li>Encrypted file storage</li>
                <li>Sharing and Collaboration</li>
            </ul>
        )
    },
    {
        icon: CodeBracketIcon,
        title: 'Code Snippets',
        status: FeatureStatus.STARTED,
        content: (
            <p className='text-muted-foreground dark:text-muted-foreground-dark'>
                Organize and manage personal code snippets
            </p>
        )
    },
    {
        icon: FiPenTool,
        title: 'Custom Tools',
        status: FeatureStatus.BETA,
        content: (
            <ul className='space-y-2 text-muted-foreground dark:text-muted-foreground-dark'>
                <li>URL/text extractors</li>
                <li>(reverse) geolocation finder</li>
                <li>SVG to CSS-pseudo elements converter</li>
                <li>HTML to JSX/TSX converter</li>
            </ul>
        )
    }
]
