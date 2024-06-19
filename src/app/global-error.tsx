'use client'

import Error from 'next/error'

export default function GlobalError(props: {
    error: Error & { digest?: string }
    params: { locale: string }
}) {
    return (
        <html lang={props.params.locale}>
            <body>
                <Error statusCode={undefined as any} />
            </body>
        </html>
    )
}

/*
Usage:

This component is designed to display a global error message across your Next.js application. It utilizes the built-in Error component from Next.js but allows for a more customized error handling experience.

To use this component, you need to pass it two props:
1. `error`: An instance of Error, optionally with a `digest` property that can contain specific error details or a digest for more context.
2. `params`: An object containing additional parameters for the error display, such as the locale for internationalization purposes.

Example:

<GlobalError
  error={new Error('An unexpected error occurred')}
  params={{ locale: 'en' }}
/>

Excerpt from active file global-error.tsx, lines 1 to 17:

'use client'

import Error from 'next/error'
import { useEffect } from 'react'

export default function GlobalError(props: {
    error: Error & { digest?: string }
    params: { locale: string }
}) {
    return (
        <html lang={props.params.locale}>
            <body>
                <Error statusCode={undefined as any} />
            </body>
        </html>
    )
}
*/
