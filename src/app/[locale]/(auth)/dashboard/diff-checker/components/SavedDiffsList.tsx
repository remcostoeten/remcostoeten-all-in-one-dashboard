'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { SubMenuInnerContent } from '@/components/dashboard/theme/sub-menu/SubMenuContent'
import SubMenuSearch from '@/components/dashboard/theme/sub-menu/SubMenuSearch'
import SavedDiff from './SavedDiff'
import { Skeleton } from '@/components/ui'
import { fetchSavedDiffsFromAPI } from '@/core/@server/actions/getSavedDiffs'
import { useRealtimeUpdates } from '@/core/hooks/useRealtimeUpdates'
import { useUser } from '@clerk/nextjs'

interface SavedDiff {
    id: string
    title: string
    diff: string
}

export default function SavedDiffsList() {
    const [isOpen, setIsOpen] = useState(true)
    const [savedDiffs, setSavedDiffs] = useState<SavedDiff[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const newDiff = useRealtimeUpdates()
    const { isSignedIn, user } = useUser()

    useEffect(() => {
        async function fetchSavedDiffs() {
            if (!isSignedIn) {
                setIsLoading(false)
                return
            }

            try {
                setIsLoading(true)
                const diffs = await fetchSavedDiffsFromAPI()
                const formattedDiffs = diffs.map((diff) => ({
                    id: diff.id.toString(),
                    title: diff.title,
                    diff: diff.diff
                }))

                setSavedDiffs(formattedDiffs)
            } catch (error) {
                console.error('Error fetching saved diffs:', error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchSavedDiffs()
    }, [isSignedIn])

    useEffect(() => {
        if (newDiff) {
            setSavedDiffs((prevDiffs) => [newDiff, ...prevDiffs])
        }
    }, [newDiff])

    if (!isSignedIn) {
        return <div>Please sign in to view your saved diffs.</div>
    }

    return (
        <SubMenuInnerContent showBorder={false}>
            <SubMenuSearch />
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center justify-between pl-2 pr-2 pb-2 w-full hover:bg-bg-ghost-hover cursor-pointer'
            >
                <span className='text-xs text-text-secondary uppercase pb-1'>
                    Saved diffs
                </span>
                <ChevronRightIcon
                    className={`h-3 w-3 text-text-secondary transition-transform ${isOpen ? 'rotate-90' : ''}`}
                />
            </div>
            {isLoading && (
                <div className='flex flex-col gap-2'>
                    {Array(3)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton className='' key={index} />
                        ))}
                </div>
            )}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='flex flex-col gap-2'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {savedDiffs.length > 0 ? (
                            savedDiffs.map((diff) => (
                                <SavedDiff
                                    key={diff.id}
                                    title={diff.title}
                                    {...diff}
                                />
                            ))
                        ) : (
                            <div>No saved diffs available</div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </SubMenuInnerContent>
    )
}
