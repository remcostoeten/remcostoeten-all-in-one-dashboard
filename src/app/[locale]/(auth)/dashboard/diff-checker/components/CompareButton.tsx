import React from 'react'
import ShinyButton from '@/components/magicui/shiny-button'

type CompareButtonProps = {
    onClick: () => void
}

export const CompareButton: React.FC<CompareButtonProps> = ({ onClick }) => (
    <span onClick={onClick} className='my-2'>
        <ShinyButton text='Compare' />
    </span>
)
