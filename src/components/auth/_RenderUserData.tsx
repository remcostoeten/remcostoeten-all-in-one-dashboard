'use client'

import { useUser } from '@clerk/nextjs'
import { ReactNode } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '../ui'
import _VisualizeRenderData from './_VisualizeRenderData'

export default function UserData() {
    const { isLoaded, isSignedIn, user } = useUser()

    if (!isLoaded) {
        return <pre>Loading...</pre>
    }

    if (!isSignedIn) {
        return <pre>Not signed in</pre>
    }

    return <_VisualizeRenderData inAccordion data={user} />
}
