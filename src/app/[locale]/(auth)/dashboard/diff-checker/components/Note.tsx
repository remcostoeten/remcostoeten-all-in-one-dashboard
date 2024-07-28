'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DocumentTextIcon } from '@heroicons/react/solid'

interface NoteProps {
    name: string
}

export default function Note({ name }: NoteProps) {
    const pathname = usePathname()
    const isActive = pathname.includes(`/notes/${name.toLowerCase()}`)

    return <></>
}
