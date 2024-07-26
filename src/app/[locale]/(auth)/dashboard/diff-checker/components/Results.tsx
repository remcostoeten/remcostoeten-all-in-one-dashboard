import CodeBlock from '@/components/theme/shells/CodeBlockShell'
import React from 'react'
import { Change } from 'diff'

type ResultsProps = {
    results: Change[]
}

export default function Results({ results }: ResultsProps) {
    const processedResults = Array.isArray(results)
        ? results
              .map((change) => {
                  let className = ''

                  if (change.added) {
                      className = 'text-green-600'
                  } else if (change.removed) {
                      className = 'text-red-600'
                  }
                  return `<span class="${className}">${change.value}</span>`
              })
              .join('\n')
        : ''

    return (
        <div className='results mt-4'>
            <h3 className='text-lg font-semibold mb-2'>Comparison Results</h3>
            <CodeBlock
                code={processedResults}
                language='diff'
                showLineNumbers={true}
            />
        </div>
    )
}
