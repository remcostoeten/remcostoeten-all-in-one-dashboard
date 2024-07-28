'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { eq } from 'drizzle-orm'
import { textComparisonSchema } from '@/core/models/Schema'
import { db } from '@/core/libs/DB'
import CodeBlock from '@/components/theme/shells/CodeBlockShell'
import Link from 'next/link'
import { FaCopy } from 'react-icons/fa'
import { Button } from '@/components/ui'
import { Flex } from '../../../../../../components/shared/atoms/Flex'
import { diffLines } from 'diff'

const MergeView = ({ listA, listB }) => {
    const [mergedResult, setMergedResult] = useState('')

    // Calculate diff
    const diff = diffLines(listA, listB)

    // Handle selection of changes
    const handleSelection = (index, version) => {
        const newDiff = [...diff]

        newDiff[index].selected = version
        updateMergedResult(newDiff)
    }

    // Update merged result based on selections
    const updateMergedResult = (currentDiff) => {
        const result = currentDiff
            .map((part) => {
                if (!part.added && !part.removed) return part.value
                if (part.selected === 'A' && part.removed) return part.value
                if (part.selected === 'B' && part.added) return part.value
                return ''
            })
            .join('')

        setMergedResult(result)
    }

    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <h3 className='text-lg font-semibold mb-2'>List A</h3>
                    <CodeBlock
                        code={listA}
                        language='javascript'
                        showLineNumbers={true}
                    />
                    {diff.map((part, index) => (
                        <div
                            key={index}
                            className={part.removed ? 'bg-red-200' : ''}
                        >
                            {!part.added && (
                                <input
                                    type='radio'
                                    name={`selection-${index}`}
                                    onChange={() => handleSelection(index, 'A')}
                                    className='mr-2'
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-2'>List B</h3>
                    <CodeBlock
                        code={listB}
                        language='javascript'
                        showLineNumbers={true}
                    />
                    {diff.map((part, index) => (
                        <div
                            key={index}
                            className={part.added ? 'bg-green-200' : ''}
                        >
                            {!part.removed && (
                                <input
                                    type='radio'
                                    name={`selection-${index}`}
                                    onChange={() => handleSelection(index, 'B')}
                                    className='mr-2'
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-2'>
                        Merged Result
                    </h3>
                    <CodeBlock
                        code={mergedResult}
                        language='javascript'
                        showLineNumbers={true}
                    />
                </div>
            </div>
            <Button onClick={() => console.log(mergedResult)} className='mt-4'>
                Complete Merge
            </Button>
        </div>
    )
}

const ComparisonDetailPage: React.FC = () => {
    const { id } = useParams()
    const [comparison, setComparison] = useState(null)
    const [activeTab, setActiveTab] = useState('sideBySide')

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
        return (
            <div className='flex justify-center items-center h-screen'>
                Loading...
            </div>
        )
    }

    const resultArray = Array.isArray(comparison.result)
        ? comparison.result
        : JSON.parse(comparison.result)

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard!')
        })
    }

    return (
        <div className='p-4'>
            <nav className='mb-4'>
                <Link
                    href='/dashboard/diff-checker'
                    className='text-blue-500 hover:underline'
                >
                    &larr; Back to diff checker
                </Link>
            </nav>

            <h1 className='text-2xl font-bold mb-4'>Comparison Detail</h1>

            <div className='mb-4 space-x-2'>
                <Button
                    variant='secondary'
                    onClick={() => setActiveTab('sideBySide')}
                >
                    Side by Side
                </Button>
                <Button onClick={() => setActiveTab('unified')}>
                    Unified View
                </Button>
                <Button onClick={() => setActiveTab('merge')}>
                    Merge View
                </Button>
            </div>

            {activeTab === 'sideBySide' && (
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 space-x-2 mb-8'>
                        <Flex direction='col'>
                            <div className='flex justify-between items-center mb-2'>
                                <h2 className='text-lg font-semibold'>
                                    List A
                                </h2>
                                <button
                                    onClick={() =>
                                        copyToClipboard(comparison.listA)
                                    }
                                    className='text-blue-500 hover:text-blue-700'
                                >
                                    <FaCopy />
                                </button>
                            </div>
                            <CodeBlock
                                code={comparison.listA}
                                language='javascript'
                                showLineNumbers={true}
                            />
                        </Flex>
                        <div>
                            <div className='flex justify-between items-center mb-2'>
                                <h2 className='text-lg font-semibold'>
                                    List B
                                </h2>
                                <button
                                    onClick={() =>
                                        copyToClipboard(comparison.listB)
                                    }
                                    className='text-blue-500 hover:text-blue-700'
                                >
                                    <FaCopy />
                                </button>
                            </div>
                            <CodeBlock
                                code={comparison.listB}
                                language='javascript'
                                showLineNumbers={true}
                            />
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h2 className='text-lg font-semibold mb-2'>
                            Comparison Result
                        </h2>
                        <div className='bg-gray-800 rounded-md p-4 overflow-x-auto max-h-[400px]'>
                            <pre className='text-sm'>
                                <code>
                                    {resultArray.map((part, index) => (
                                        <span
                                            key={index}
                                            className={
                                                part.added
                                                    ? 'text-green-500'
                                                    : part.removed
                                                      ? 'text-red-500'
                                                      : 'text-white'
                                            }
                                        >
                                            {part.value}
                                        </span>
                                    ))}
                                </code>
                            </pre>
                        </div>
                    </div>
                </>
            )}

            {activeTab === 'unified' && (
                <div className='mt-4'>
                    <h2 className='text-lg font-semibold mb-2'>
                        Unified Comparison Result
                    </h2>
                    <div className='bg-gray-800 rounded-md p-4 overflow-x-auto max-h-[600px]'>
                        <pre className='text-sm'>
                            <code>
                                {resultArray.map((part, index) => (
                                    <span
                                        key={index}
                                        className={
                                            part.added
                                                ? 'text-green-500'
                                                : part.removed
                                                  ? 'text-red-500'
                                                  : 'text-white'
                                        }
                                    >
                                        {part.value}
                                    </span>
                                ))}
                            </code>
                        </pre>
                    </div>
                </div>
            )}

            {activeTab === 'merge' && (
                <MergeView listA={comparison.listA} listB={comparison.listB} />
            )}
        </div>
    )
}

export default ComparisonDetailPage
