'use client'

import React from 'react'
import { BackToTopButton } from './button'

type JumpToTopBtnProps = {
    topValue?: number
}

export default function JumpToTopBtn({ topValue = 0 }: JumpToTopBtnProps) {
    function handleToTop() {
        window.scrollTo({
            top: topValue,
            behavior: 'smooth'
        })
    }

    return <BackToTopButton onClick={handleToTop} />
}
