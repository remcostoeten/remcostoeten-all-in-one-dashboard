'use client'

import { toast } from 'sonner'

type statusProps = {
    isInBeta?: boolean | (() => void) | any
}

function useNotImplemented({ isInBeta = false }: statusProps) {
    if (isInBeta) {
        toast('Development is in progress, expect bugs 🚧')
        return
    } else {
        toast('This feature is not yet implemented 😔 ⌛')
        return
    }
}

export default useNotImplemented
