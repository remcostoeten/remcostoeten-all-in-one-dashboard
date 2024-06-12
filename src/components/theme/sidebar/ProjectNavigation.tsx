'use client'

import {
    AdjustmentsHorizontalIcon,
    ArrowTrendingUpIcon,
    BoltIcon,
    CursorArrowRaysIcon,
    PencilIcon,
    UserGroupIcon,
    UserIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import { m } from 'framer-motion'

import NavigationLink from './NavigationLink'

const variants = {
    close: {
        x: -300,
        opacity: 0
    },
    open: {
        x: 0,
        opacity: 100
    }
}

interface Props {
    selectedProject: string
    isOpen: boolean
    setSelectedProject: (project: string | null) => void
}

const ProjectNavigation = ({
    selectedProject,
    isOpen,
    setSelectedProject
}: Props) => {
    return (
        <m.nav
            variants={variants}
            initial='close'
            animate='open'
            exit='close'
            transition={{
                duration: 0.25,
                ease: 'easeInOut'
            }}
            className={`absolute ml-0 flex h-full w-64 flex-col gap-8 bg-neutral-900 ${
                isOpen ? 'left-64' : 'left-20'
            } border-r border-neutral-800 p-5`}
        >
            <div className='flex w-full flex-row place-items-center justify-between'>
                <h1 className='text-lg tracking-wide text-neutral-100'>
                    {selectedProject}
                </h1>
                <button onClick={() => setSelectedProject(null)}>
                    <XMarkIcon className='w-8 stroke-neutral-400' />
                </button>
            </div>
            <input
                placeholder='Search'
                type='text'
                className='rounded-lg bg-neutral-600/40 px-3 py-2 tracking-wide text-neutral-100'
            />
            <div className='flex flex-col gap-3'>
                <NavigationLink name='Progress'>
                    <ArrowTrendingUpIcon className='w-8 min-w-8 stroke-inherit stroke-[0.75]' />
                </NavigationLink>
                <NavigationLink name='Team Members'>
                    <UserGroupIcon className='w-8 min-w-8 stroke-inherit stroke-[0.75]' />
                </NavigationLink>
                <NavigationLink name='In Review'>
                    <PencilIcon className='w-8 min-w-8 stroke-inherit stroke-[0.75]' />
                </NavigationLink>
                <NavigationLink name='In Progress'>
                    <BoltIcon className='w-8 min-w-8 stroke-inherit stroke-[0.75]' />
                </NavigationLink>
                <NavigationLink name='Up Next'>
                    <CursorArrowRaysIcon className='w-8 min-w-8 stroke-inherit stroke-[0.75]' />
                </NavigationLink>
                <NavigationLink name='Project Settings'>
                    <AdjustmentsHorizontalIcon className='w-8 min-w-8 stroke-inherit stroke-[0.75]' />
                </NavigationLink>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='tracking-wide text-neutral-300'>Team Members</h1>
                <a href='#' className='flex flex-row place-items-center gap-3'>
                    <UserIcon className='w-8 rounded-full bg-rose-200/70 stroke-rose-800 stroke-2 p-1' />
                    <p className='tracking-wide text-neutral-400'>Steve Jobs</p>
                </a>
                <a href='#' className='flex flex-row place-items-center gap-3'>
                    <UserIcon className='w-8 rounded-full bg-emerald-200/70 stroke-emerald-800 stroke-2 p-1' />
                    <p className='tracking-wide text-neutral-400'>Bill Gates</p>
                </a>
                <a href='#' className='flex flex-row place-items-center gap-3'>
                    <UserIcon className='w-8 rounded-full bg-indigo-200/70 stroke-indigo-800 stroke-2 p-1' />
                    <p className='tracking-wide text-neutral-400'>Jeff Bezos</p>
                </a>
            </div>
        </m.nav>
    )
}

export default ProjectNavigation
