import Image from 'next/image'
import OrbitingCircles from '../effects/magicui/orbit-circles'
import type { IconProps } from '@radix-ui/react-icons/dist/types'

export function OrbitingCirclesComponent() {
    return (
        <div className='relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
            <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
                One solution
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className='h-[30px] w-[30px] border-none bg-transparent'
                duration={20}
                delay={20}
                radius={80}
            >
                <Icons.typescript />
            </OrbitingCircles>
            {/* <OrbitingCircles
                className='h-[30px] w-[30px] border-none bg-transparent'
                duration={20}
                delay={10}
                radius={80}
            >
                <Icons.tailwind />
            </OrbitingCircles> */}

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className='h-[50px] w-[50px] border-none bg-transparent'
                reverse
                radius={190}
                duration={20}
            >
                <Icons.react />
            </OrbitingCircles>
            {/* <OrbitingCircles
                className='h-[50px] w-[50px] border-none bg-transparent'
                reverse
                radius={190}
                duration={20}
                delay={20}
            >
                <Icons.turso /> */}
            {/* </OrbitingCircles> */}
        </div>
    )
}

const Icons = {
    typescript: (props: IconProps) => (
        <Image src='/TypeScript.svg' alt='' width={100} height={100} />
    ),
    tailwind: (props: IconProps) => (
        <Image
            src='/tw.svg'
            alt=''
            width={100}
            height={100}
            // className="bg-black p-2 rounded"
        />
    ),
    turso: (props: IconProps) => (
        <Image
            src='/turso.svg'
            alt=''
            width={300}
            height={100}
            // className="bg-black p-2 rounded"
        />
    ),
    react: (props: IconProps) => (
        <Image src='/react.svg' alt='' width={100} height={100} />
    )
}
