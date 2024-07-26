'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { db } from 'src/core/libs/DB'
import { eq } from 'drizzle-orm'
import { textComparisonSchema } from 'src/core/models/Schema'
import CodeBlock from '@/components/theme/shells/CodeBlockShell'

const ComparisonDetailPage: React.FC = () => {
    const { id } = useParams()
    const [comparison, setComparison] = useState(null)

    useEffect(() => {
        async function fetchComparison() {
            const data = await db
                .select()
                .from(textComparisonSchema)
                .where(eq(textComparisonSchema.id, parseInt(id)))
                .limit(1)

            setComparison(data[0])
        }

        fetchComparison()
    }, [id])

    if (!comparison) {
        return <div>Loading...</div>
    }

    return (
        <div className='max-w-4xl mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>Comparison Detail</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <h2 className='text-lg font-semibold mb-2'>List A</h2>
                    <pre className='bg-gray-100 p-2 rounded'>
                        {comparison.listA}
                    </pre>
                </div>
                <div>
                    <h2 className='text-lg font-semibold mb-2'>List B</h2>
                    <pre className='bg-gray-100 p-2 rounded'>
                        {comparison.listB}
                    </pre>
                </div>
            </div>
            <div className='mt-4'>
                <h2 className='text-lg font-semibold mb-2'>
                    Comparison Result
                </h2>
                <CodeBlock code='diff' />
                <div
                    className='bg-gray-100 p-2 rounded'
                    dangerouslySetInnerHTML={{ __html: comparison.result }}
                />
            </div>
        </div>
    )
}

export default ComparisonDetailPage
