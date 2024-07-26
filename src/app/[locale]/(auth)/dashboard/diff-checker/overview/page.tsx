'use client'

import React, { useEffect, useState } from 'react'
import { db } from 'src/core/libs/DB'
import Link from 'next/link'
import { textComparisonSchema } from 'src/core/models/Schema'

const OverviewPage: React.FC = () => {
    const [comparisons, setComparisons] = useState([])

    useEffect(() => {
        async function fetchComparisons() {
            const data = await db
                .select()
                .from(textComparisonSchema)
                .orderBy(textComparisonSchema.createdAt.desc())

            setComparisons(data)
        }

        fetchComparisons()
    }, [])

    return (
        <div className='max-w-4xl mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>Saved Comparisons</h1>
            <ul className='space-y-2'>
                {comparisons.map((comp) => (
                    <li key={comp.id} className='border p-2 rounded'>
                        <Link href={`/dashboard/diff-checker/${comp.id}`}>
                            <a className='text-blue-600 hover:underline'>
                                Comparison {comp.id} -{' '}
                                {new Date(comp.createdAt).toLocaleString()}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OverviewPage
