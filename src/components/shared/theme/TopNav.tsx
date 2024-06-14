import LocaleSwitcher from '@/components/LocaleSwitcher'
import React from 'react'

export default function TopNav() {
    return (
        <div className='bg-black border-b py-4'>
            <LocaleSwitcher />
        </div>
    )
}
