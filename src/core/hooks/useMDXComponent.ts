import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

export const useMDXComponent = (code: string) => {
    return useMemo(() => getMDXComponent(code), [code])
}
