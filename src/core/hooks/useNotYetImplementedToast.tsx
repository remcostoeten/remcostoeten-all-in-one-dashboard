'use client'

import { toast } from 'sonner'
export default function useNotImplemented() {
    return () => {
        toast('This feature is not yet implemented 😔 ⌛')
    }
}
