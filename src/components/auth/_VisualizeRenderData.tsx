import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from '@c/ui'
import React from 'react'

type VisualizeDataProps = {
    data: any
    inAccordion?: boolean
}

export default function _VisualizeRenderData({
    data,
    inAccordion
}: VisualizeDataProps) {
    const content = (
        <div className='mockup-code bg-popover overflow-y-scroll max-h-screen'>
            <code>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </code>
        </div>
    )

    return inAccordion ? (
        <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
                <AccordionTrigger>View Data</AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
        </Accordion>
    ) : (
        content
    )
}
