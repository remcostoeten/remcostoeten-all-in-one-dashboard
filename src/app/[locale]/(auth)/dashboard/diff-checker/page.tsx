'use client'

import React, { useState, useEffect } from 'react'
import { TextArea, CompareButton } from './components'
import { diffLines, Change } from 'diff'
import { db } from 'src/core/libs/DB'
import { Button } from '@c/ui/button'
import { useRouter } from 'next/navigation'
import { textComparisonSchema } from 'src/core/models/Schema'
import Results from './components/Results'
import { useSubMenuStore } from '@/core/stores/SubMenuStore'
import { handleSave } from './save'

const DiffCheckerDashboard: React.FC = () => {
    const [listA, setListA] = useState('')
    const [listB, setListB] = useState('')
    const [results, setResults] = useState<Change[]>([])
    const router = useRouter()

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
    }
    const isSubMenuVisible = useSubMenuStore(state => state.isSubMenuVisible)

    function toggleSubMenu() {
        useSubMenuStore.getState().toggleSubMenu()
    }

    return (
        <>
            <button onClick={toggleSubMenu}>Toggle SubMenu</button>
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
                    <Results results={results} />{' '}
                    <Button onClick={() => handleSave(listA, listB, results)}>
                        Save Comparison
                    </Button>
                </>
            )}
        </>
    )
}

export default DiffCheckerDashboard
