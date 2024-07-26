import React from 'react'
import { Button } from '@c/ui/button'
import ShinyButton from '@/components/magicui/shiny-button'

type CompareButtonProps = {
    onClick: () => void
}

export const CompareButton: React.FC<CompareButtonProps> = ({ onClick }) => (
    <span onClick={onClick}>
        <ShinyButton text='Compare' />
    </span>
)
