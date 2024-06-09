'use client'

import Image from 'next/image'

export default function HeroSection() {
    return (
        <div className='flex flex-col items-center justify-center leading-6'>
            <div>
                <div className='relative mt-7 flex max-w-6xl justify-center overflow-hidden'>
                    <div className='relative rounded-xl'>
                        <Image
                            height={500}
                            width={500}
                            src='/dash.png'
                            alt='Hero Image'
                            className='dark:block w-[1200px] rounded-[inherit] border object-contain shadow-lg hidden'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
