'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@c/ui/button'
import { Textarea } from '@c/ui/textarea'
import { useToast } from '@/components/ui'
import useKeyboardShortcut from '@/core/hooks/useKeyboardShortcut'

type TextAreaProps = {
    id: string
    title: string
    value: string
    onChange: (value: string) => void
}

const formatJavaScript = (code: string): string => {
    const lines = code.split('\n')
    let indentLevel = 0
    const indentChar = '    ' // four spaces for indentation

    return lines
        .map((line) => {
            line = line.trim()
            if (line.endsWith('{')) {
                const indentedLine = indentChar.repeat(indentLevel) + line

                indentLevel++
                return indentedLine
            } else if (line.startsWith('}')) {
                indentLevel = Math.max(0, indentLevel - 1)
                return indentChar.repeat(indentLevel) + line
            } else {
                return indentChar.repeat(indentLevel) + line
            }
        })
        .join('\n')
}

export const TextArea: React.FC<TextAreaProps> = ({
    id,
    title,
    value,
    onChange
}) => {
    const [isFormatting, setIsFormatting] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const lineNumbersRef = useRef<HTMLDivElement>(null)
    const { toast } = useToast()

    const [charCount, setCharCount] = useState(0)
    const [lineCount, setLineCount] = useState(0)
    const [isInputVisible, setIsInputVisible] = useState(false)
    const [lineNumber, setLineNumber] = useState('')

    useEffect(() => {
        updateLineNumbers()
        setCharCount(value.length)
        setLineCount(value.split('\n').length)
    }, [value])

    const updateLineNumbers = () => {
        if (textareaRef.current && lineNumbersRef.current) {
            const lineCount = value.split('\n').length
            const lineNumbers = Array.from(
                { length: lineCount },
                (_, i) => i + 1
            ).join('\n')

            lineNumbersRef.current.innerText = lineNumbers
        }
    }

    const handleSort = () => {
        const sortedText = value.split('\n').sort().join('\n')

        onChange(sortedText)
        toast({
            title: 'Sorted',
            description: 'The text has been sorted alphabetically.'
        })
    }

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText()

            onChange(text)
            toast({
                title: 'Pasted',
                description: 'Text pasted from clipboard.'
            })
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err)
            toast({
                title: 'Error',
                description: 'Failed to paste from clipboard.',
                variant: 'destructive'
            })
        }
    }

    const handleFormat = () => {
        setIsFormatting(true)
        try {
            const formattedText = formatJavaScript(value)

            onChange(formattedText)
            toast({
                title: 'Formatted',
                description: 'The code has been formatted.'
            })
        } catch (err) {
            console.error('Failed to format code: ', err)
            toast({
                title: 'Error',
                description: 'Failed to format code.',
                variant: 'destructive'
            })
        } finally {
            setIsFormatting(false)
        }
    }

    const handleClear = () => {
        onChange('')
        toast({
            title: 'Cleared',
            description: 'The text area has been cleared.'
        })
    }

    const jumpToLine = (lineNumber: number) => {
        const lines = value.split('\n')
        const line = lines[lineNumber - 1]
        const start = lines.slice(0, lineNumber - 1).join('\n').length
        const end = start + line.length

        textareaRef.current?.focus()
        textareaRef.current?.setSelectionRange(start, end)
    }

    const handleJumpToLine = () => {
        if (lineNumber) {
            jumpToLine(Number(lineNumber))
            setIsInputVisible(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleJumpToLine()
        }
    }

    useKeyboardShortcut({
        'Shift+G': () => {
            setIsInputVisible(true)
        }
    })

    function JumpBar() {
        return (
            <div
                className={`transition-all duration-300 ${isInputVisible ? 'h-8' : 'h-0'} overflow-hidden`}
            >
                <input
                    id='line-number'
                    type='number'
                    placeholder='Jump to line'
                    value={lineNumber}
                    onChange={(e) => setLineNumber(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className='w-full h-8 px-2 border rounded-md rounded-b-0  text-xs text-text bg-[#070D1C]'
                />
            </div>
        )
    }

    return (
        <div>
            <label
                htmlFor={id}
                className='block text-sm font-medium text-gray-700 dark:text-gray-300'
            >
                {title}
            </label>
            <JumpBar />
            <div className='relative overflow-hidden'>
                <div
                    ref={lineNumbersRef}
                    className='absolute left-0 top-0 bottom-0 w-8 bg-gray-100 dark:bg-ghost border border-border border-r-0 text-gray-500 dark:text-gray-400 text-right pr-2 pt-2 select-none'
                    style={{
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        lineHeight: '1.5'
                    }}
                ></div>
                <Textarea
                    id={id}
                    ref={textareaRef}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className='w-full h-40 pl-10 border rounded-md !border-t-0'
                    style={{
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        lineHeight: '1.5'
                    }}
                />
            </div>

            <div className='flex justify-between items-center'>
                <div className='space-x-2'>
                    <Button onClick={handleSort} variant='outline' size='sm'>
                        Sort A-Z
                    </Button>
                    <Button onClick={handlePaste} variant='outline' size='sm'>
                        Paste
                    </Button>
                    <Button
                        onClick={handleFormat}
                        variant='outline'
                        size='sm'
                        disabled={isFormatting}
                    >
                        {isFormatting ? 'Formatting...' : 'Format'}
                    </Button>
                    <Button onClick={handleClear} variant='outline' size='sm'>
                        Clear
                    </Button>
                </div>
                <div className='text-sm text-gray-500 dark:text-gray-400'>
                    {charCount} characters | {lineCount} lines
                </div>
            </div>
        </div>
    )
}

export default TextArea
