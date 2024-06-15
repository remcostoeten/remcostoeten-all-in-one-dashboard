'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectsData = [
    {
        id: 1,
        name: 'Nextjs 14',
        description:
            'A framework for React that enables server-side rendering and effortless deployment.',
        image: '/home/nextjs.svg',
        imageDark: '/home/nextjs-dark.png'
    },
    {
        id: 2,
        name: 'TypeScript',
        description:
            'A typed superset of JavaScript that enhances code maintainability and scalability.',
        image: '/home/typescript.png'
    },
    {
        id: 3,
        name: 'Tailwind CSS',
        description:
            'A utility-first CSS framework for building custom designs with ease.',
        image: '/home/tailwind.png'
    },
    {
        id: 4,
        name: 'Shadcn UI',
        description: 'Beautifully designed components by Shadcn.',
        image: '/home/shadcn.png',
        imageDark: '/home/shadcn-dark.png'
    },
    {
        id: 5,
        name: 'Syntax UI',
        description: 'Beautifully designed components by Syntax UI.',
        image: '/home/syntaxUI.svg'
    },
    {
        id: 6,
        name: 'MagicUI',
        description: 'Beautifully designed components by Magic UI.',
        image: '/home/magicui.png'
    },
    {
        id: 7,
        name: 'Postgres (Supabase)',
        description:
            'PostgreSQL-based open-source database with Supabase for building scalable applications.',
        image: '/home/supabase.png'
    },
    {
        id: 8,
        name: 'Drizzle ORM',
        description:
            'Modern database toolkit for TypeScript and Node.js, simplifying database interactions.',
        image: '/home/drizzle.png'
    },
    {
        id: 9,
        name: 'Clerk Authentication',
        description:
            'Seamless and secure authentication service for web applications.',
        image: '/home/clerk.png'
    },
    {
        id: 11,
        name: 'Turso (Sqlite)',
        description: 'Turso is a simple and fast SQLite cloud solution.',
        image: '/home/turso.png'
    }
]

const SpringAnimatedFeatures = () => {
    return (
        <div className='flex flex-col justify-center items-center lg:w-[75%]'>
            <div className='flex flex-col mb-[3rem]'>
                <h1 className='scroll-m-20 text-3xl sm:text-xl md:text-3xl font-semibold tracking-tight lg:text-4xl text-center max-w-[700px]'>
                    Built with the best
                </h1>
                <p className='mx-auto max-w-[500px]  md:text-lg text-center mt-2 '>
                    Your customers deserve a product built with the best
                    technologies
                </p>
            </div>
            <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {ProjectsData.map((project) => {
                    return (
                        <motion.div
                            whileHover={{
                                y: -8
                            }}
                            transition={{
                                type: 'spring',
                                bounce: 0.7
                            }}
                            key={project.id}
                            className='mt-5 text-left border p-6 rounded-md dark:bg-black'
                        >
                            <a target='_blank' rel='noopener noreferrer'>
                                <Image
                                    src={
                                        project?.imageDark
                                            ? project?.imageDark
                                            : project.image
                                    }
                                    width={40}
                                    height={30}
                                    className='mb-3 rounded'
                                    alt={project.name}
                                />
                                <div className='mb-1 text-sm font-medium '>
                                    {project.name}
                                </div>
                                <div className='max-w-[250px] text-sm font-normal text-gray-500'>
                                    {project.description}
                                </div>
                            </a>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default SpringAnimatedFeatures
