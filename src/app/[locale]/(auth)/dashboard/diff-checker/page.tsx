'use client'

import React, { useState, useEffect } from 'react'
import { TextArea, CompareButton } from './components'
import { diffLines, Change } from 'diff'
import { Button } from '@c/ui/button'
import Results from './components/Results'
import { handleSave } from './save'
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

const DiffCheckerDashboard: React.FC = () => {
    const [listA, setListA] = useState('')
    const [listB, setListB] = useState('')
    const [results, setResults] = useState<Change[]>([])
    const [title, setTitle] = useState('')
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    useEffect(() => {
        const storedListA = localStorage.getItem('diffCheckerListA')
        const storedListB = localStorage.getItem('diffCheckerListB')
        const storedResults = localStorage.getItem('diffCheckerResults')

        if (storedListA) setListA(storedListA)
        if (storedListB) setListB(storedListB)
        if (storedResults) setResults(JSON.parse(storedResults))
    }, [])

    useEffect(() => {
        const storeResults = () => {
            localStorage.setItem('diffCheckerListA', listA)
            localStorage.setItem('diffCheckerListB', listB)
            localStorage.setItem('diffCheckerResults', JSON.stringify(results))
        }
        const debounce = setTimeout(storeResults, 500)

        return () => clearTimeout(debounce)
    }, [listA, listB, results])

    const handleCompare = () => {
        const diff = diffLines(listA, listB)

        setResults(diff)
    }

    const handleClearAll = () => {
        setListA('')
        setListB('')
        setResults([])
        toast('Cleared all text fields.')
    }

    const handleSaveWithTitle = async (formData: FormData) => {
        const titleFromForm = formData.get('title') as string

        if (!titleFromForm.trim()) {
            toast('Please enter a title for the comparison.')
            return
        }
        try {
            await handleSave(listA, listB, results, titleFromForm)
            setIsPopoverOpen(false)
            toast('Comparison saved successfully.')
        } catch (error) {
            toast('Error saving comparison. Please try again.')
        }
    }

    return (
        <div className='space-y-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <TextArea id='listA' value={listA} onChange={setListA} />
                <TextArea id='listB' value={listB} onChange={setListB} />
            </div>
            <div className='flex justify-between'>
                <CompareButton onClick={handleCompare} />
                <Button onClick={handleClearAll} variant='outline'>
                    Clear All
                </Button>
            </div>
            {results.length > 0 && (
                <>
                    <Results results={results} />
                    <Popover
                        open={isPopoverOpen}
                        onOpenChange={setIsPopoverOpen}
                    >
                        <PopoverTrigger asChild>
                            <Button>Save Comparison</Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-80'>
                            <form action={handleSaveWithTitle}>
                                <div className='grid gap-4'>
                                    <div className='space-y-2'>
                                        <h4 className='font-medium leading-none'>
                                            Save Comparison
                                        </h4>
                                        <p className='text-sm text-muted-foreground'>
                                            Enter a title for this comparison
                                        </p>
                                    </div>
                                    <div className='grid gap-2'>
                                        <Input
                                            id='title'
                                            name='title'
                                            backgroundColor='!bg-section'
                                            defaultValue={title}
                                            placeholder='Enter title'
                                        />
                                        <Button type='submit'>Save</Button>
                                    </div>
                                </div>
                            </form>
                        </PopoverContent>
                    </Popover>
                </>
            )}
        </div>
    )
}

export default DiffCheckerDashboard
