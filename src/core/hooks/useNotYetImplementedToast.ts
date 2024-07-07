'use client'

import { toast } from 'sonner'

type statusProps = {
    isInBeta?: boolean | (() => void) | any
}

export default function useNotImplemented({ isInBeta = false }: statusProps) {
    return () => {
        if (isInBeta) {
            toast('Development is in progress, expect bugs 🚧🚧 ')
        } else {
            toast('This feature is not yet implemented  😔⌛')
        }
    }
}

