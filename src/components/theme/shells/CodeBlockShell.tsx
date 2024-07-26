import BoxReveal from '@/components/magicui/box-reveal'
import React from 'react'

interface CodeBlockProps {
    code: string
    language?: string
    showLineNumbers?: boolean
}

const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    language = 'plaintext',
    showLineNumbers = false
}) => {
    return (
        <>
            <div className='code-block bg-gray-800 rounded-md p-4 overflow-x-auto'>
                <pre className='text-sm'>
                    <code>
                        {code.split('\n').map((line, index) => (
                            <BoxReveal
                                boxColor='#020817'
                                duration={0.5}
                                key={index}
                            >
                                {/* Wrap the multiple children with a single parent element */}
                                <div>
                                    {showLineNumbers && (
                                        <span className='text-gray-500 mr-4 select-none'>
                                            {(index + 1)
                                                .toString()
                                                .padStart(3, ' ')}
                                        </span>
                                    )}
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: line
                                        }}
                                    />
                                </div>
                            </BoxReveal>
                        ))}
                    </code>
                </pre>
            </div>
        </>
    )
}

export default CodeBlock
