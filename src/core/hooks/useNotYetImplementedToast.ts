'use client'

import { toast } from 'sonner'

type statusProps = {
    isInBeta?: boolean | (() => void) | any
}

export default function useNotImplemented({ isInBeta = false }: statusProps) {
    if (isInBeta) {
        return () => {
            toast('Development is in progress, expect bugs 🚧🚧')
        }
    } else {
        return toast('This feature is not yet implemented 😔⌛')
    }
}
