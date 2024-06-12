'use client'

import GridPattern from '../effects/magicui/grid-pattern'

export default function GridPatternLinearGradient() {
    return (
        <div className='grid-pattern fixed -z-10 mx-auto flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl'>
            <GridPattern width={60} height={60} x={-1} y={-1} />
        </div>
    )
}
